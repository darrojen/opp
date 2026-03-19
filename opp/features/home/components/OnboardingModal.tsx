
'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { X, UploadCloud, Image as ImageIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import type { User } from '@supabase/supabase-js'

interface OnboardingModalProps {
  user: User | null
}

export default function OnboardingModal({ user }: OnboardingModalProps) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [username, setUsername] = useState('')
  const [skills, setSkills] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!user) return

    if (
      !user.user_metadata?.username ||
      !user.user_metadata?.avatar_url ||
      !user.user_metadata?.profile_completed
    ) {
      setOpen(true)
    }
  }, [user])

  // Clean up preview URL when component unmounts or file changes
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Basic validation
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file')
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image must be under 5MB')
      return
    }

    setAvatarFile(file)
    const objectUrl = URL.createObjectURL(file)
    setPreviewUrl(objectUrl)
  }

  const handleSave = async () => {
    if (saving || !user) return
    setSaving(true)

    const toastId = toast.loading('Saving profile...')

    try {
      let avatarUrl: string | null = null

      if (avatarFile) {
        const fileExt = avatarFile.name.split('.').pop() || 'png'
        const timestamp = Date.now()
        // Use folder structure to match RLS policy: user.id / filename
        const filePath = `${user.id}/${user.id}-${timestamp}.${fileExt}`

        const { error: uploadError } = await supabase.storage
          .from('avatars')
          .upload(filePath, avatarFile, {
            cacheControl: '3600',
            upsert: true,
            contentType: avatarFile.type || 'image/png',
          })

        if (uploadError) throw uploadError

        const { data } = supabase.storage.from('avatars').getPublicUrl(filePath)
        avatarUrl = data.publicUrl
      }

      const updates = {
        username: username.trim() || (user.user_metadata?.username as string | undefined),
        skills: skills
          ? skills.split(',').map((s) => s.trim()).filter(Boolean)
          : (user.user_metadata?.skills as string[] | undefined) || [],
        avatar_url: avatarUrl || (user.user_metadata?.avatar_url as string | undefined),
        profile_completed: true,
      }

      const { error: updateError } = await supabase.auth.updateUser({
        data: updates,
      })

      if (updateError) throw updateError

      toast.success('Profile updated successfully!', { id: toastId })
      setOpen(false)

      // Optional: force refresh session to update UI immediately
      await supabase.auth.refreshSession()
    } catch (err: any) {
      console.error('Profile save failed:', err)
      toast.error(err.message || 'Failed to save profile. Try again.', { id: toastId })
    } finally {
      setSaving(false)
    }
  }

  if (!open || !user) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#11212d] rounded-2xl w-full max-w-lg border border-[#253745] relative overflow-hidden shadow-2xl">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-gray-400 hover:text-white z-10 transition-colors"
          aria-label="Close profile setup"
        >
          <X size={24} />
        </button>

        <div className="p-8 pb-10">
          <h2 className="text-2xl font-bold mb-2">Let&quote;s complete your profile</h2>
          <p className="text-gray-400 mb-8">
            This helps us recommend better opportunities and lets others know who you are.
          </p>

          {step === 1 && (
            <>
              <label className="block text-sm font-medium mb-3">Profile Picture</label>
              <div className="border-2 border-dashed border-[#253745] rounded-xl p-8 text-center hover:border-orange-600/50 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                  id="avatar-upload"
                />
                <label htmlFor="avatar-upload" className="cursor-pointer block">
                  {previewUrl || avatarFile ? (
                    <div className="space-y-3">
                      <div className="relative mx-auto w-32 h-32 rounded-lg overflow-hidden border border-gray-600">
                        <img
                          src={previewUrl || ''}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-orange-400 font-medium text-sm">
                        {avatarFile?.name || 'Selected image'}
                      </p>
                      <p className="text-xs text-gray-500">Click to change</p>
                    </div>
                  ) : (
                    <>
                      <UploadCloud className="mx-auto mb-3 text-gray-500" size={48} />
                      <p className="text-gray-300 mb-1">Click or drag image here</p>
                      <p className="text-xs text-gray-500">PNG, JPG, max 5MB</p>
                    </>
                  )}
                </label>
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={saving}
                className="mt-8 w-full bg-orange-600 hover:bg-orange-500 py-3.5 rounded-xl font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="@yourusername"
                  className="w-full bg-[#0f1620] border border-[#253745] rounded-lg px-4 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Skills (comma separated)</label>
                <input
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="React, Solidity, AI, Full-stack, DevOps..."
                  className="w-full bg-[#0f1620] border border-[#253745] rounded-lg px-4 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
                />
              </div>

              <div className="flex gap-4 mt-10">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-gray-600 hover:border-gray-400 py-3.5 rounded-xl transition-colors disabled:opacity-50"
                  disabled={saving}
                >
                  Back
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="flex-1 bg-orange-600 hover:bg-orange-500 py-3.5 rounded-xl font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {saving ? 'Saving...' : 'Finish Setup'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}







// 'use client'

// import { useState, useEffect } from 'react'
// import { supabase } from '@/lib/supabase'
// import { X, UploadCloud } from 'lucide-react'
// import toast from 'react-hot-toast'
// import type { User } from '@supabase/supabase-js'

// interface OnboardingModalProps {
//   user: User | null
// }

// const STEPS = [
//   { number: 1, label: 'Photo' },
//   { number: 2, label: 'Profile' },
// ]

// export default function OnboardingModal({ user }: OnboardingModalProps) {
//   const [open, setOpen] = useState(false)
//   const [step, setStep] = useState(1)
//   const [avatarFile, setAvatarFile] = useState<File | null>(null)
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null)
//   const [username, setUsername] = useState('')
//   const [skills, setSkills] = useState('')
//   const [saving, setSaving] = useState(false)

//   useEffect(() => {
//     if (!user) return
//     if (
//       !user.user_metadata?.username ||
//       !user.user_metadata?.avatar_url ||
//       !user.user_metadata?.profile_completed
//     ) {
//       setOpen(true)
//     }
//   }, [user])

//   useEffect(() => {
//     return () => {
//       if (previewUrl) URL.revokeObjectURL(previewUrl)
//     }
//   }, [previewUrl])

//   const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]
//     if (!file) return
//     if (!file.type.startsWith('image/')) { toast.error('Please select an image file'); return }
//     if (file.size > 5 * 1024 * 1024) { toast.error('Image must be under 5MB'); return }
//     setAvatarFile(file)
//     setPreviewUrl(URL.createObjectURL(file))
//   }

//   const handleSave = async () => {
//     if (saving || !user) return
//     setSaving(true)
//     const toastId = toast.loading('Saving profile...')
//     try {
//       let avatarUrl: string | null = null
//       if (avatarFile) {
//         const fileExt = avatarFile.name.split('.').pop() || 'png'
//         const filePath = `${user.id}/${user.id}-${Date.now()}.${fileExt}`
//         const { error: uploadError } = await supabase.storage
//           .from('avatars').upload(filePath, avatarFile, { cacheControl: '3600', upsert: true, contentType: avatarFile.type || 'image/png' })
//         if (uploadError) throw uploadError
//         const { data } = supabase.storage.from('avatars').getPublicUrl(filePath)
//         avatarUrl = data.publicUrl
//       }
//       const updates = {
//         username: username.trim() || (user.user_metadata?.username as string | undefined),
//         skills: skills ? skills.split(',').map((s) => s.trim()).filter(Boolean) : (user.user_metadata?.skills as string[] | undefined) || [],
//         avatar_url: avatarUrl || (user.user_metadata?.avatar_url as string | undefined),
//         profile_completed: true,
//       }
//       const { error: updateError } = await supabase.auth.updateUser({ data: updates })
//       if (updateError) throw updateError
//       toast.success('Profile updated!', { id: toastId })
//       setOpen(false)
//       await supabase.auth.refreshSession()
//     } catch (err: any) {
//       toast.error(err.message || 'Failed to save profile.', { id: toastId })
//     } finally {
//       setSaving(false)
//     }
//   }

//   if (!open || !user) return null

//   const progress = (step / STEPS.length) * 100

//   return (
//     <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl shadow-gray-200/80 relative overflow-hidden">

//         {/* Progress bar */}
//         <div className="h-1 bg-gray-100 w-full">
//           <div
//             className="h-full bg-orange-500 transition-all duration-500 ease-out"
//             style={{ width: `${progress}%` }}
//           />
//         </div>

//         {/* Header */}
//         <div className="px-8 pt-7 pb-0 flex items-start justify-between">
//           <div>
//             {/* Step dots */}
//             <div className="flex items-center gap-2 mb-4">
//               {STEPS.map((s) => (
//                 <div key={s.number} className="flex items-center gap-2">
//                   <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold transition-all duration-300 ${
//                     step > s.number
//                       ? 'bg-orange-500 text-white'
//                       : step === s.number
//                       ? 'bg-orange-500 text-white ring-4 ring-orange-100'
//                       : 'bg-gray-100 text-gray-400'
//                   }`}>
//                     {step > s.number ? (
//                       <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                       </svg>
//                     ) : s.number}
//                   </div>
//                   <span className={`text-xs font-medium ${step === s.number ? 'text-gray-700' : 'text-gray-400'}`}>
//                     {s.label}
//                   </span>
//                   {s.number < STEPS.length && (
//                     <div className={`w-8 h-px mx-1 transition-colors duration-300 ${step > s.number ? 'bg-orange-400' : 'bg-gray-200'}`} />
//                   )}
//                 </div>
//               ))}
//             </div>

//             <h2 className="text-xl font-bold text-gray-900 leading-tight">
//               {step === 1 ? "Add a profile picture" : "Tell us about yourself"}
//             </h2>
//             <p className="text-sm text-gray-400 mt-1">
//               {step === 1
//                 ? "A photo helps others recognize you at events."
//                 : "Your username and skills help us match you to the right hackathons."}
//             </p>
//           </div>

//           <button
//             onClick={() => setOpen(false)}
//             className="text-gray-300 hover:text-gray-500 transition-colors ml-4 mt-0.5 flex-shrink-0"
//             aria-label="Close"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* Body */}
//         <div className="px-8 pt-6 pb-8">

//           {step === 1 && (
//             <>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleAvatarChange}
//                 className="hidden"
//                 id="avatar-upload"
//               />
//               <label
//                 htmlFor="avatar-upload"
//                 className="cursor-pointer group block border-2 border-dashed border-gray-200 hover:border-orange-400 rounded-2xl p-8 text-center transition-all duration-200 hover:bg-orange-50/40"
//               >
//                 {previewUrl ? (
//                   <div className="flex flex-col items-center gap-3">
//                     <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-orange-100">
//                       <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-orange-500">{avatarFile?.name}</p>
//                       <p className="text-xs text-gray-400 mt-0.5">Click to change</p>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="flex flex-col items-center gap-3">
//                     <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
//                       <UploadCloud className="text-orange-400" size={26} />
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-gray-600">Click to upload photo</p>
//                       <p className="text-xs text-gray-400 mt-0.5">PNG, JPG — max 5MB</p>
//                     </div>
//                   </div>
//                 )}
//               </label>

//               {/* Next step hint */}
//               <div className="mt-4 mb-6 flex items-center justify-center gap-1.5 text-xs text-gray-400">
//                 <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//                 Next: Profile details
//               </div>

//               <button
//                 onClick={() => setStep(2)}
//                 className="w-full bg-orange-500 hover:bg-orange-400 active:bg-orange-600 text-white py-3.5 rounded-2xl font-semibold text-sm transition-all duration-150 shadow-sm shadow-orange-200"
//               >
//                 Continue
//               </button>
//             </>
//           )}

//           {step === 2 && (
//             <div className="space-y-5">
//               {/* Username */}
//               <div className="relative">
//                 <label className="absolute -top-2.5 left-3 bg-white px-1.5 text-xs font-medium text-gray-500">
//                   Username
//                 </label>
//                 <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100 transition-all">
//                   <span className="pl-4 text-sm text-gray-400 font-medium select-none">@</span>
//                   <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     placeholder="yourusername"
//                     className="flex-1 bg-transparent px-2 py-3.5 text-sm text-gray-800 placeholder-gray-300 outline-none"
//                   />
//                 </div>
//               </div>

//               {/* Skills */}
//               <div className="relative">
//                 <label className="absolute -top-2.5 left-3 bg-white px-1.5 text-xs font-medium text-gray-500">
//                   Skills
//                 </label>
//                 <input
//                   type="text"
//                   value={skills}
//                   onChange={(e) => setSkills(e.target.value)}
//                   placeholder="React, Solidity, AI, DevOps..."
//                   className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
//                 />
//                 <p className="text-xs text-gray-400 mt-1.5 pl-1">Separate with commas</p>
//               </div>

//               {/* Next step hint */}
//               <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 pt-1">
//                 <svg className="w-3.5 h-3.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 You&quote;re almost done!
//               </div>

//               <div className="flex gap-3 pt-1">
//                 <button
//                   onClick={() => setStep(1)}
//                   disabled={saving}
//                   className="flex-1 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-600 py-3.5 rounded-2xl text-sm font-medium transition-all disabled:opacity-50"
//                 >
//                   Back
//                 </button>
//                 <button
//                   onClick={handleSave}
//                   disabled={saving}
//                   className="flex-1 bg-orange-500 hover:bg-orange-400 active:bg-orange-600 text-white py-3.5 rounded-2xl font-semibold text-sm transition-all shadow-sm shadow-orange-200 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {saving ? (
//                     <span className="flex items-center justify-center gap-2">
//                       <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
//                       </svg>
//                       Saving...
//                     </span>
//                   ) : 'Finish Setup'}
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }