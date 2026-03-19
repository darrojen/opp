// export default function SignupForm({ switchMode }: any) {
//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold text-center">Create account</h2>

//       <form className="space-y-4">
//         <input
//           type="text"
//           placeholder="Full name"
//           className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white dark:bg-[#06141B] dark:border-[#253745]"
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white dark:bg-[#06141B] dark:border-[#253745]"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white dark:bg-[#06141B] dark:border-[#253745]"
//         />

//         <button
//           className="
//           w-full
//           rounded-lg
//           bg-[#4A5C6A]
//           py-3
//           text-white
//           font-semibold
//           hover:opacity-90
//           transition
//           "
//         >
//           Create account
//         </button>
//       </form>

//       <p className="text-center text-sm text-gray-500">
//         Already have an account?{" "}
//         <button
//           onClick={switchMode}
//           className="font-semibold text-blue-600"
//         >
//           Sign in
//         </button>
//       </p>
//     </div>
//   )
// }

'use client'

import { useState } from "react"

export default function SignupPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log({
      name,
      email,
      password
    })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Sign Up
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded mb-4"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}