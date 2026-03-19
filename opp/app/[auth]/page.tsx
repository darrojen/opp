

// "use client"

// import { useEffect, useState } from "react"
// import { FcGoogle } from "react-icons/fc"
// import { FiEye, FiEyeOff } from "react-icons/fi"

// export default function AuthPage() {
//   const [mode, setMode] = useState<"login" | "signup">("login")

//   const [slide, setSlide] = useState(0)

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [name, setName] = useState("")
//   const [remember, setRemember] = useState(false)

//   const [showPassword, setShowPassword] = useState(false)

//   /* background slides */

//   const loginSlides = [
//     {
//       title: "Find Opportunities That Matter",
//       desc: "Find the best hackathons, internships, fellowships, grants and tech jobs curated in one place.",
//       img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop",
//     },
//     {
//       title: "Discover & Apply Instantly",
//       desc: "Discover opportunities and apply instantly while tracking your applications easily.",
//       img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
//     },
//     {
//       title: "A Platform Creating Real Impact",
//       desc: "12,500+ users, 340+ partners and $1.2M+ value unlocked for builders.",
//       img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop",
//     },
//   ]

//   const signupSlides = [
//     {
//       title: "Start Your Journey",
//       desc: "Join thousands of builders discovering opportunities that accelerate their careers.",
//       img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000",
//     },
//     {
//       title: "Connect With Global Programs",
//       desc: "Access fellowships, hackathons and internships from organizations worldwide.",
//       img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000",
//     },
//     {
//       title: "Unlock Your Potential",
//       desc: "Build skills, win prizes and land opportunities that change your future.",
//       img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000",
//     },
//   ]

//   const slides = mode === "login" ? loginSlides : signupSlides

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSlide((prev) => (prev + 1) % slides.length)
//     }, 2000)

//     return () => clearInterval(interval)
//   }, [slides.length])

//   /* password strength */

//   const getStrength = (password: string) => {
//     let score = 0

//     if (password.length > 8) score++
//     if (/[A-Z]/.test(password)) score++
//     if (/[0-9]/.test(password)) score++
//     if (/[^A-Za-z0-9]/.test(password)) score++

//     return score
//   }

//   const strength = getStrength(password)

//   const strengthText = ["Weak", "Fair", "Good", "Strong", "Very Strong"]

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden text-white">

//       {/* BACKGROUND SLIDER */}

//       {slides.map((s, i) => (
//         <div
//           key={i}
//           className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
//             slide === i ? "opacity-100" : "opacity-0"
//           }`}
//           style={{ backgroundImage: `url(${s.img})` }}
//         />
//       ))}

//       <div className="absolute inset-0 bg-black/50" />

//       {/* LOGO */}

//       <div className="absolute top-8 left-10 z-20 flex items-center gap-2">
//         <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded">
//           O
//         </div>
//         <span className="font-semibold text-lg">Opp</span>
//       </div>

//       {/* TEXT */}

//       <div className="absolute bottom-24 left-14 z-20 max-w-xl">

//         <h1 className="text-5xl font-bold mb-4">{slides[slide].title}</h1>

//         <p className="text-white/80">{slides[slide].desc}</p>

//         <div className="flex gap-2 mt-6">
//           {slides.map((_, i) => (
//             <span
//               key={i}
//               className={`h-1 rounded-full transition-all ${
//                 slide === i ? "w-8 bg-white" : "w-3 bg-white/40"
//               }`}
//             />
//           ))}
//         </div>

//       </div>

//       {/* FORM CONTAINER */}

//       <div
//         className={`absolute top-1/2 -translate-y-1/2 z-30 transition-all duration-700 w-full max-w-xl ${
//           mode === "login" ? "right-16" : "left-16"
//         }`}
//       >
//         <div className="bg-white text-black rounded-2xl shadow-2xl p-14">

//           {mode === "login" ? (
//             <>
//               <h2 className="text-4xl font-bold mb-2">Welcome Back!</h2>

//               <p className="text-gray-500 mb-8">
//                 Log in to continue your journey.
//               </p>

//               <form className="space-y-5">

//                 <input
//                   placeholder="Email"
//                   className="w-full border rounded-xl px-5 py-4"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />

//                 <div className="relative">

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     className="w-full border rounded-xl px-5 py-4"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />

//                   <button
//                     type="button"
//                     className="absolute right-4 top-4"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FiEyeOff /> : <FiEye />}
//                   </button>

//                 </div>

//                 <div className="flex justify-between text-sm">

//                   <label className="flex gap-2 text-gray-600">
//                     <input
//                       type="checkbox"
//                       checked={remember}
//                       onChange={(e) => setRemember(e.target.checked)}
//                     />
//                     Remember Me
//                   </label>

//                   <span className="text-gray-500 cursor-pointer">
//                     Forgot Password?
//                   </span>

//                 </div>

//                 <button className="w-full bg-black text-white py-4 rounded-full">
//                   Login
//                 </button>

//               </form>

//               <div className="my-6 flex items-center gap-3 text-sm text-gray-400">
//                 <div className="flex-1 border-t" />
//                 Or continue with
//                 <div className="flex-1 border-t" />
//               </div>

//               <button className="w-full border rounded-full py-4 flex justify-center gap-3">
//                 <FcGoogle size={20} />
//                 Continue with Google
//               </button>

//               <p className="text-center text-sm text-gray-500 mt-6">
//                 Don’t have an account?{" "}
//                 <span
//                   onClick={() => setMode("signup")}
//                   className="font-medium cursor-pointer text-black"
//                 >
//                   Sign up here
//                 </span>
//               </p>
//             </>
//           ) : (
//             <>
//               <h2 className="text-4xl font-bold mb-2">Create Account</h2>

//               <p className="text-gray-500 mb-8">
//                 Join the platform and start discovering opportunities.
//               </p>

//               <form className="space-y-5">

//                 <input
//                   placeholder="Full name"
//                   className="w-full border rounded-xl px-5 py-4"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />

//                 <input
//                   placeholder="Email"
//                   className="w-full border rounded-xl px-5 py-4"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />

//                 <div className="relative">

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Create password"
//                     className="w-full border rounded-xl px-5 py-4"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />

//                   <button
//                     type="button"
//                     className="absolute right-4 top-4"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FiEyeOff /> : <FiEye />}
//                   </button>

//                 </div>

//                 {/* PASSWORD STRENGTH */}

//                 {password && (
//                   <div>

//                     <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                       <div
//                         className="h-full bg-green-500 transition-all"
//                         style={{ width: `${strength * 25}%` }}
//                       />
//                     </div>

//                     <p className="text-xs text-gray-500 mt-1">
//                       Strength: {strengthText[strength]}
//                     </p>

//                   </div>
//                 )}

//                 <button className="w-full bg-black text-white py-4 rounded-full">
//                   Create Account
//                 </button>

//               </form>

//               <p className="text-center text-sm text-gray-500 mt-6">
//                 Already have an account?{" "}
//                 <span
//                   onClick={() => setMode("login")}
//                   className="font-medium cursor-pointer text-black"
//                 >
//                   Login
//                 </span>
//               </p>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }



// "use client"

// import { useEffect, useState } from "react"
// import { FcGoogle } from "react-icons/fc"
// import { FiEye, FiEyeOff } from "react-icons/fi"

// export default function AuthPage() {
//   const [mode, setMode] = useState<"login" | "signup">("login")
//   const [slide, setSlide] = useState(0)

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [name, setName] = useState("")
//   const [remember, setRemember] = useState(false)

//   const [showPassword, setShowPassword] = useState(false)

//   const loginSlides = [
//     {
//       title: "Find Opportunities That Matter",
//       desc: "Find the best hackathons, internships, fellowships, grants and tech jobs curated in one place.",
//       img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000",
//     },
//     {
//       title: "Discover & Apply Instantly",
//       desc: "Discover opportunities and apply instantly while tracking your applications easily.",
//       img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000",
//     },
//     {
//       title: "A Platform Creating Real Impact",
//       desc: "12,500+ users, 340+ partners and $1.2M+ value unlocked for builders.",
//       img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000",
//     },
//   ]

//   const signupSlides = [
//     {
//       title: "Start Your Journey",
//       desc: "Join thousands of builders discovering opportunities that accelerate their careers.",
//       img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000",
//     },
//     {
//       title: "Connect With Global Programs",
//       desc: "Access fellowships, hackathons and internships from organizations worldwide.",
//       img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000",
//     },
//     {
//       title: "Unlock Your Potential",
//       desc: "Build skills, win prizes and land opportunities that change your future.",
//       img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000",
//     },
//   ]

//   const slides = mode === "login" ? loginSlides : signupSlides

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSlide((prev) => (prev + 1) % slides.length)
//     }, 5000) // slower transitions

//     return () => clearInterval(interval)
//   }, [slides.length])

//   /* password strength */

//   const getStrength = (password: string) => {
//     let score = 0
//     if (password.length > 8) score++
//     if (/[A-Z]/.test(password)) score++
//     if (/[0-9]/.test(password)) score++
//     if (/[^A-Za-z0-9]/.test(password)) score++
//     return score
//   }

//   const strength = getStrength(password)
//   const strengthText = ["Weak", "Fair", "Good", "Strong", "Very Strong"]

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden text-white">

//       {/* BACKGROUND SLIDER */}

//       {slides.map((s, i) => (
//         <div
//           key={i}
//           className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out ${
//             slide === i
//               ? "opacity-100 scale-105"
//               : "opacity-0 scale-100"
//           }`}
//           style={{ backgroundImage: `url(${s.img})` }}
//         />
//       ))}

//       <div className="absolute inset-0 bg-black/50" />

//       {/* LOGO */}

//       <div className="absolute top-8 left-10 z-20 flex items-center gap-2">
//         <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded">
//           O
//         </div>
//         <span className="font-semibold text-lg">Opp</span>
//       </div>

//       {/* SLIDER TEXT */}

//       <div
//         className={`absolute bottom-24 z-20 max-w-xl transition-all duration-700 ease-in-out
//         ${mode === "login" ? "left-14 text-left" : "right-14 text-right"}`}
//       >

//         <div
//           key={slide}
//           className="transition-all duration-700 ease-in-out transform opacity-100 translate-y-0"
//         >
//           <h1 className="text-5xl font-bold mb-4">{slides[slide].title}</h1>

//           <p className="text-white/80">{slides[slide].desc}</p>
//         </div>

//         {/* dots */}

//         <div
//           className={`flex gap-2 mt-6 ${
//             mode === "signup" ? "justify-end" : ""
//           }`}
//         >
//           {slides.map((_, i) => (
//             <span
//               key={i}
//               className={`h-1 rounded-full transition-all duration-500 ${
//                 slide === i ? "w-8 bg-white" : "w-3 bg-white/40"
//               }`}
//             />
//           ))}
//         </div>

//       </div>

//       {/* FORM CONTAINER */}

//       <div
//         className={`absolute top-1/2 -translate-y-1/2 z-30 transition-all duration-[900ms] ease-in-out w-full max-w-xl
//         ${mode === "login" ? "right-16" : "left-16"}`}
//       >
//         <div className="bg-white text-black rounded-2xl shadow-2xl p-14">

//           {mode === "login" ? (
//             <>
//               <h2 className="text-4xl font-bold mb-2">Welcome Back!</h2>

//               <p className="text-gray-500 mb-8">
//                 Log in to continue your journey.
//               </p>

//               <form className="space-y-5">

//                 <input
//                   placeholder="Email"
//                   className="w-full border rounded-xl px-5 py-4"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />

//                 <div className="relative">

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     className="w-full border rounded-xl px-5 py-4"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />

//                   <button
//                     type="button"
//                     className="absolute right-4 top-4"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FiEyeOff /> : <FiEye />}
//                   </button>

//                 </div>

//                 <div className="flex justify-between text-sm">

//                   <label className="flex gap-2 text-gray-600">
//                     <input
//                       type="checkbox"
//                       checked={remember}
//                       onChange={(e) => setRemember(e.target.checked)}
//                     />
//                     Remember Me
//                   </label>

//                   <span className="text-gray-500 cursor-pointer">
//                     Forgot Password?
//                   </span>

//                 </div>

//                 <button className="w-full bg-black text-white py-4 rounded-full">
//                   Login
//                 </button>

//               </form>

//               <div className="my-6 flex items-center gap-3 text-sm text-gray-400">
//                 <div className="flex-1 border-t" />
//                 Or continue with
//                 <div className="flex-1 border-t" />
//               </div>

//               <button className="w-full border rounded-full py-4 flex justify-center gap-3">
//                 <FcGoogle size={20} />
//                 Continue with Google
//               </button>

//               <p className="text-center text-sm text-gray-500 mt-6">
//                 Don’t have an account?{" "}
//                 <span
//                   onClick={() => setMode("signup")}
//                   className="font-medium cursor-pointer text-black"
//                 >
//                   Sign up here
//                 </span>
//               </p>
//             </>
//           ) : (
//             <>
//               <h2 className="text-4xl font-bold mb-2">Create Account</h2>

//               <p className="text-gray-500 mb-8">
//                 Join the platform and start discovering opportunities.
//               </p>

//               <form className="space-y-5">

//                 <input
//                   placeholder="Full name"
//                   className="w-full border rounded-xl px-5 py-4"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />

//                 <input
//                   placeholder="Email"
//                   className="w-full border rounded-xl px-5 py-4"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />

//                 <div className="relative">

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Create password"
//                     className="w-full border rounded-xl px-5 py-4"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />

//                   <button
//                     type="button"
//                     className="absolute right-4 top-4"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FiEyeOff /> : <FiEye />}
//                   </button>

//                 </div>

//                 {password && (
//                   <div>
//                     <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                       <div
//                         className="h-full bg-green-500 transition-all duration-500"
//                         style={{ width: `${strength * 25}%` }}
//                       />
//                     </div>

//                     <p className="text-xs text-gray-500 mt-1">
//                       Strength: {strengthText[strength]}
//                     </p>
//                   </div>
//                 )}

//                 <button className="w-full bg-black text-white py-4 rounded-full">
//                   Create Account
//                 </button>

//               </form>

//               <p className="text-center text-sm text-gray-500 mt-6">
//                 Already have an account?{" "}
//                 <span
//                   onClick={() => setMode("login")}
//                   className="font-medium cursor-pointer text-black"
//                 >
//                   Login
//                 </span>
//               </p>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }





// "use client"

// import { useEffect, useState } from "react"
// import { FcGoogle } from "react-icons/fc"
// import { FiEye, FiEyeOff } from "react-icons/fi"

// export default function AuthPage() {
//   const [mode, setMode] = useState<"login" | "signup">("login")
//   const [slide, setSlide] = useState(0)

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [name, setName] = useState("")
//   const [remember, setRemember] = useState(false)

//   const [showPassword, setShowPassword] = useState(false)

//   const loginSlides = [
//     {
//       title: "Find Opportunities That Matter",
//       desc: "Find hackathons, internships, fellowships, grants and tech jobs curated in one place.",
//       img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000",
//     },
//     {
//       title: "Discover & Apply Instantly",
//       desc: "Discover opportunities and apply instantly while tracking your applications easily.",
//       img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000",
//     },
//     {
//       title: "A Platform Creating Real Impact",
//       desc: "12,500+ users, 340+ partners and $1.2M+ value unlocked for builders.",
//       img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000",
//     },
//   ]

//   const signupSlides = [
//     {
//       title: "Start Your Journey",
//       desc: "Join thousands of builders discovering opportunities that accelerate their careers.",
//       img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000",
//     },
//     {
//       title: "Connect With Global Programs",
//       desc: "Access fellowships, hackathons and internships from organizations worldwide.",
//       img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000",
//     },
//     {
//       title: "Unlock Your Potential",
//       desc: "Build skills, win prizes and land opportunities that change your future.",
//       img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000",
//     },
//   ]

//   const slides = mode === "login" ? loginSlides : signupSlides

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSlide((prev) => (prev + 1) % slides.length)
//     }, 6000)

//     return () => clearInterval(interval)
//   }, [slides.length])

//   /* password strength */

//   const getStrength = (password: string) => {
//     let score = 0
//     if (password.length > 8) score++
//     if (/[A-Z]/.test(password)) score++
//     if (/[0-9]/.test(password)) score++
//     if (/[^A-Za-z0-9]/.test(password)) score++
//     return score
//   }

//   const strength = getStrength(password)
//   const strengthText = ["Weak", "Fair", "Good", "Strong", "Very Strong"]

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden text-white">

//       {/* BACKGROUND SLIDER */}

//       <div className="absolute inset-0 overflow-hidden">

//         <div
//           className="flex h-full w-full transition-transform duration-[2500ms] ease-[cubic-bezier(.22,1,.36,1)]"
//           style={{ transform: `translateX(-${slide * 100}%)` }}
//         >
//           {slides.map((s, i) => (
//             <div
//               key={i}
//               className="min-w-full h-full bg-cover bg-center"
//               style={{ backgroundImage: `url(${s.img})` }}
//             />
//           ))}
//         </div>

//       </div>

//       <div className="absolute inset-0 bg-black/50" />

//       {/* LOGO */}

//       <div className="absolute top-8 left-10 z-20 flex items-center gap-2">
//         <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded">
//           O
//         </div>
//         <span className="font-semibold text-lg">Opp</span>
//       </div>

//       {/* SLIDER TEXT */}

//       <div
//         className={`absolute bottom-24 z-20 max-w-xl overflow-hidden
//         ${mode === "login" ? "left-14 text-left" : "right-14 text-right"}`}
//       >

//         <div
//           className="flex transition-transform duration-[2000ms] ease-[cubic-bezier(.22,1,.36,1)]"
//           style={{ transform: `translateX(-${slide * 100}%)` }}
//         >

//           {slides.map((s, i) => (
//             <div key={i} className="min-w-full pr-8">
//               <h1 className="text-5xl font-bold mb-4">{s.title}</h1>
//               <p className="text-white/80">{s.desc}</p>
//             </div>
//           ))}

//         </div>

//         {/* dots */}

//         <div
//           className={`flex gap-2 mt-6 ${
//             mode === "signup" ? "justify-end" : ""
//           }`}
//         >
//           {slides.map((_, i) => (
//             <span
//               key={i}
//               className={`h-1 rounded-full transition-all duration-500 ${
//                 slide === i ? "w-8 bg-white" : "w-3 bg-white/40"
//               }`}
//             />
//           ))}
//         </div>

//       </div>

//       {/* FORM */}

//       <div
//         className={`absolute top-1/2 -translate-y-1/2 z-30
//         transition-all duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)]
//         w-full max-w-xl
//         ${mode === "login" ? "right-16" : "left-16"}`}
//       >

//         <div className="bg-white text-black rounded-2xl shadow-2xl p-14">

//           {mode === "login" ? (
//             <>
//               <h2 className="text-4xl font-bold mb-2">Welcome Back!</h2>

//               <p className="text-gray-500 mb-8">
//                 Log in to continue your journey.
//               </p>

//               <form className="space-y-5">

//                 <input
//                   placeholder="Email"
//                   className="w-full border rounded-xl px-5 py-4"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />

//                 <div className="relative">

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     className="w-full border rounded-xl px-5 py-4"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />

//                   <button
//                     type="button"
//                     className="absolute right-4 top-4"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FiEyeOff /> : <FiEye />}
//                   </button>

//                 </div>

//                 <div className="flex justify-between text-sm">

//                   <label className="flex gap-2 text-gray-600">
//                     <input
//                       type="checkbox"
//                       checked={remember}
//                       onChange={(e) => setRemember(e.target.checked)}
//                     />
//                     Remember Me
//                   </label>

//                   <span className="text-gray-500 cursor-pointer">
//                     Forgot Password?
//                   </span>

//                 </div>

//                 <button className="w-full bg-black text-white py-4 rounded-full">
//                   Login
//                 </button>

//               </form>

//               <div className="my-6 flex items-center gap-3 text-sm text-gray-400">
//                 <div className="flex-1 border-t" />
//                 Or continue with
//                 <div className="flex-1 border-t" />
//               </div>

//               <button className="w-full border rounded-full py-4 flex justify-center gap-3">
//                 <FcGoogle size={20} />
//                 Continue with Google
//               </button>

//               <p className="text-center text-sm text-gray-500 mt-6">
//                 Don’t have an account?{" "}
//                 <span
//                   onClick={() => setMode("signup")}
//                   className="font-medium cursor-pointer text-black"
//                 >
//                   Sign up here
//                 </span>
//               </p>
//             </>
//           ) : (
//             <>
//               <h2 className="text-4xl font-bold mb-2">Create Account</h2>

//               <p className="text-gray-500 mb-8">
//                 Join the platform and start discovering opportunities.
//               </p>

//               <form className="space-y-5">

//                 <input
//                   placeholder="Full name"
//                   className="w-full border rounded-xl px-5 py-4"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />

//                 <input
//                   placeholder="Email"
//                   className="w-full border rounded-xl px-5 py-4"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />

//                 <div className="relative">

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Create password"
//                     className="w-full border rounded-xl px-5 py-4"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />

//                   <button
//                     type="button"
//                     className="absolute right-4 top-4"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FiEyeOff /> : <FiEye />}
//                   </button>

//                 </div>

//                 {password && (
//                   <div>
//                     <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                       <div
//                         className="h-full bg-green-500 transition-all duration-500"
//                         style={{ width: `${strength * 25}%` }}
//                       />
//                     </div>

//                     <p className="text-xs text-gray-500 mt-1">
//                       Strength: {strengthText[strength]}
//                     </p>
//                   </div>
//                 )}

//                 <button className="w-full bg-black text-white py-4 rounded-full">
//                   Create Account
//                 </button>

//               </form>

//               <p className="text-center text-sm text-gray-500 mt-6">
//                 Already have an account?{" "}
//                 <span
//                   onClick={() => setMode("login")}
//                   className="font-medium cursor-pointer text-black"
//                 >
//                   Login
//                 </span>
//               </p>
//             </>
//           )}
//         </div>
//       </div>

//     </div>
//   )
// }




// "use client"

// import { useEffect, useState } from "react"
// import { FcGoogle } from "react-icons/fc"
// import { FiEye, FiEyeOff } from "react-icons/fi"

// export default function AuthPage() {
//   const [mode, setMode] = useState<"login" | "signup">("login")
//   const [slide, setSlide] = useState(0)

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [name, setName] = useState("")
//   const [remember, setRemember] = useState(false)

//   const [showPassword, setShowPassword] = useState(false)

//   const loginSlides = [
//     {
//       title: "Find Opportunities That Matter",
//       desc: "Find hackathons, internships, fellowships, grants and tech jobs curated in one place.",
//       img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000",
//     },
//     {
//       title: "Discover & Apply Instantly",
//       desc: "Discover opportunities and apply instantly while tracking your applications easily.",
//       img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000",
//     },
//     {
//       title: "A Platform Creating Real Impact",
//       desc: "12,500+ users, 340+ partners and $1.2M+ value unlocked for builders.",
//       img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000",
//     },
//   ]

//   const signupSlides = [
//     {
//       title: "Start Your Journey",
//       desc: "Join thousands of builders discovering opportunities that accelerate their careers.",
//       img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000",
//     },
//     {
//       title: "Connect With Global Programs",
//       desc: "Access fellowships, hackathons and internships from organizations worldwide.",
//       img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000",
//     },
//     {
//       title: "Unlock Your Potential",
//       desc: "Build skills, win prizes and land opportunities that change your future.",
//       img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000",
//     },
//   ]

//   const slides = mode === "login" ? loginSlides : signupSlides

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSlide((prev) => (prev + 1) % slides.length)
//     }, 6000)

//     return () => clearInterval(interval)
//   }, [slides.length])

//   /* password strength */

//   const getStrength = (password: string) => {
//     let score = 0
//     if (password.length > 8) score++
//     if (/[A-Z]/.test(password)) score++
//     if (/[0-9]/.test(password)) score++
//     if (/[^A-Za-z0-9]/.test(password)) score++
//     return score
//   }

//   const strength = getStrength(password)
//   const strengthText = ["Weak", "Fair", "Good", "Strong", "Very Strong"]

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden text-white">

//       {/* BACKGROUND SLIDER */}

//       <div className="absolute inset-0 overflow-hidden">

//         <div
//           className="flex h-full w-full transition-transform duration-[2500ms] ease-[cubic-bezier(.22,1,.36,1)]"
//           style={{ transform: `translateX(-${slide * 100}%)` }}
//         >
//           {slides.map((s, i) => (
//             <div
//               key={i}
//               className="min-w-full h-full bg-cover bg-center"
//               style={{ backgroundImage: `url(${s.img})` }}
//             />
//           ))}
//         </div>

//       </div>

//       <div className="absolute inset-0 bg-black/50" />

//       {/* LOGO */}

//       <div className="absolute top-8 left-10 z-20 flex items-center gap-2">
//         <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded">
//           O
//         </div>
//         <span className="font-semibold text-lg">Opp</span>
//       </div>

//       {/* SLIDER TEXT */}

//       <div
//         className={`absolute bottom-24 z-20 max-w-xl overflow-hidden
//         ${mode === "login" ? "left-14 text-left" : "right-14 text-right"}`}
//       >

//         <div
//           className="flex transition-transform duration-[2000ms] ease-[cubic-bezier(.22,1,.36,1)]"
//           style={{ transform: `translateX(-${slide * 100}%)` }}
//         >

//           {slides.map((s, i) => (
//             <div key={i} className="min-w-full pr-8">
//               <h1 className="text-5xl font-bold mb-4">{s.title}</h1>
//               <p className="text-white/80">{s.desc}</p>
//             </div>
//           ))}

//         </div>

//         <div
//           className={`flex gap-2 mt-6 ${
//             mode === "signup" ? "justify-end" : ""
//           }`}
//         >
//           {slides.map((_, i) => (
//             <span
//               key={i}
//               className={`h-1 rounded-full transition-all duration-500 ${
//                 slide === i ? "w-8 bg-white" : "w-3 bg-white/40"
//               }`}
//             />
//           ))}
//         </div>

//       </div>

//       {/* FORM */}

//       <div
//         className={`absolute top-1/2 -translate-y-1/2 z-30
//         transition-all duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)]
//         w-full max-w-xl
//         ${mode === "login" ? "right-16" : "left-16"}`}
//       >

//         <div className="bg-white text-black rounded-2xl shadow-2xl overflow-hidden">

//           {/* SLIDING FORMS */}

//           <div
//             className="flex w-[200%] transition-transform duration-[900ms] ease-in-out"
//             style={{
//               transform: mode === "login"
//                 ? "translateX(0%)"
//                 : "translateX(-50%)"
//             }}
//           >

//             {/* LOGIN */}

//             <div className="w-1/2 p-14">

//               <h2 className="text-4xl font-bold mb-2">Welcome Back!</h2>

//               <p className="text-gray-500 mb-8">
//                 Log in to continue your journey.
//               </p>

//               <form className="space-y-5">

//                 <input
//                   placeholder="Email"
//                   className="w-full border rounded-xl px-5 py-4"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />

//                 <div className="relative">

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     className="w-full border rounded-xl px-5 py-4"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />

//                   <button
//                     type="button"
//                     className="absolute right-4 top-4"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FiEyeOff /> : <FiEye />}
//                   </button>

//                 </div>

//                 <div className="flex justify-between text-sm">

//                   <label className="flex gap-2 text-gray-600">
//                     <input
//                       type="checkbox"
//                       checked={remember}
//                       onChange={(e) => setRemember(e.target.checked)}
//                     />
//                     Remember Me
//                   </label>

//                   <span className="text-gray-500 cursor-pointer">
//                     Forgot Password?
//                   </span>

//                 </div>

//                 <button className="w-full bg-black text-white py-4 rounded-full">
//                   Login
//                 </button>

//               </form>

//               <div className="my-6 flex items-center gap-3 text-sm text-gray-400">
//                 <div className="flex-1 border-t" />
//                 Or continue with
//                 <div className="flex-1 border-t" />
//               </div>

//               <button className="w-full border rounded-full py-4 flex justify-center gap-3">
//                 <FcGoogle size={20} />
//                 Continue with Google
//               </button>

//               <p className="text-center text-sm text-gray-500 mt-6">
//                 Don’t have an account?{" "}
//                 <span
//                   onClick={() => setMode("signup")}
//                   className="font-medium cursor-pointer text-black"
//                 >
//                   Sign up here
//                 </span>
//               </p>

//             </div>

//             {/* SIGNUP */}

//             <div className="w-1/2 p-14">

//               <h2 className="text-4xl font-bold mb-2">Create Account</h2>

//               <p className="text-gray-500 mb-8">
//                 Join the platform and start discovering opportunities.
//               </p>

//               <form className="space-y-5">

//                 <input
//                   placeholder="Full name"
//                   className="w-full border rounded-xl px-5 py-4"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />

//                 <input
//                   placeholder="Email"
//                   className="w-full border rounded-xl px-5 py-4"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />

//                 <div className="relative">

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Create password"
//                     className="w-full border rounded-xl px-5 py-4"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />

//                   <button
//                     type="button"
//                     className="absolute right-4 top-4"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FiEyeOff /> : <FiEye />}
//                   </button>

//                 </div>

//                 {password && (
//                   <div>
//                     <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                       <div
//                         className="h-full bg-green-500 transition-all duration-500"
//                         style={{ width: `${strength * 25}%` }}
//                       />
//                     </div>

//                     <p className="text-xs text-gray-500 mt-1">
//                       Strength: {strengthText[strength]}
//                     </p>
//                   </div>
//                 )}

//                 <button className="w-full bg-black text-white py-4 rounded-full">
//                   Create Account
//                 </button>

//               </form>

//               <p className="text-center text-sm text-gray-500 mt-6">
//                 Already have an account?{" "}
//                 <span
//                   onClick={() => setMode("login")}
//                   className="font-medium cursor-pointer text-black"
//                 >
//                   Login
//                 </span>
//               </p>

//             </div>

//           </div>
//         </div>

//       </div>

//     </div>
//   )
// }


// "use client"

// import { useEffect, useState } from "react"
// import { FcGoogle } from "react-icons/fc"
// import { FiEye, FiEyeOff } from "react-icons/fi"
// import { supabase } from "@/lib/supabase" // make sure you have created src/lib/supabase.ts

// export default function AuthPage() {
//   const [mode, setMode] = useState<"login" | "signup">("login")
//   const [slide, setSlide] = useState(0)

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [name, setName] = useState("")
//   const [remember, setRemember] = useState(false)

//   const [showPassword, setShowPassword] = useState(false)

//   const loginSlides = [
//     {
//       title: "Find Opportunities That Matter",
//       desc: "Find hackathons, internships, fellowships, grants and tech jobs curated in one place.",
//       img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000",
//     },
//     {
//       title: "Discover & Apply Instantly",
//       desc: "Discover opportunities and apply instantly while tracking your applications easily.",
//       img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000",
//     },
//     {
//       title: "A Platform Creating Real Impact",
//       desc: "12,500+ users, 340+ partners and $1.2M+ value unlocked for builders.",
//       img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000",
//     },
//   ]

//   const signupSlides = [
//     {
//       title: "Start Your Journey",
//       desc: "Join thousands of builders discovering opportunities that accelerate their careers.",
//       img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000",
//     },
//     {
//       title: "Connect With Global Programs",
//       desc: "Access fellowships, hackathons and internships from organizations worldwide.",
//       img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000",
//     },
//     {
//       title: "Unlock Your Potential",
//       desc: "Build skills, win prizes and land opportunities that change your future.",
//       img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000",
//     },
//   ]

//   const slides = mode === "login" ? loginSlides : signupSlides

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSlide((prev) => (prev + 1) % slides.length)
//     }, 6000)

//     return () => clearInterval(interval)
//   }, [slides.length])

//   /* password strength */
//   const getStrength = (password: string) => {
//     let score = 0
//     if (password.length > 8) score++
//     if (/[A-Z]/.test(password)) score++
//     if (/[0-9]/.test(password)) score++
//     if (/[^A-Za-z0-9]/.test(password)) score++
//     return score
//   }

//   const strength = getStrength(password)
//   const strengthText = ["Weak", "Fair", "Good", "Strong", "Very Strong"]

//   /* Supabase Auth Handlers */
//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault()
//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     })
//     if (error) alert(error.message)
//     else alert("Login successful!")
//   }

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault()
//     const { error } = await supabase.auth.signUp({
//       email,
//       password,
//       options: { data: { full_name: name } },
//     })
//     if (error) alert(error.message)
//     else alert("Check your email to confirm your account!")
//   }

//   const handleGoogleLogin = async () => {
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: "google",
//     })
//     if (error) alert(error.message)
//   }

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden text-white">

//       {/* BACKGROUND SLIDER */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div
//           className="flex h-full w-full transition-transform duration-[2500ms] ease-[cubic-bezier(.22,1,.36,1)]"
//           style={{ transform: `translateX(-${slide * 100}%)` }}
//         >
//           {slides.map((s, i) => (
//             <div
//               key={i}
//               className="min-w-full h-full bg-cover bg-center"
//               style={{ backgroundImage: `url(${s.img})` }}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="absolute inset-0 bg-black/50" />

//       {/* LOGO */}
//       <div className="absolute top-8 left-10 z-20 flex items-center gap-2">
//         <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded">O</div>
//         <span className="font-semibold text-lg">Opp</span>
//       </div>

//       {/* SLIDER TEXT */}
//       <div
//         className={`absolute bottom-24 z-20 max-w-xl overflow-hidden
//           ${mode === "login" ? "left-14 text-left" : "right-14 text-right"}`}
//       >
//         <div
//           className="flex transition-transform duration-[2000ms] ease-[cubic-bezier(.22,1,.36,1)]"
//           style={{ transform: `translateX(-${slide * 100}%)` }}
//         >
//           {slides.map((s, i) => (
//             <div key={i} className="min-w-full pr-8">
//               <h1 className="text-5xl font-bold mb-4">{s.title}</h1>
//               <p className="text-white/80">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//         <div
//           className={`flex gap-2 mt-6 ${mode === "signup" ? "justify-end" : ""}`}
//         >
//           {slides.map((_, i) => (
//             <span
//               key={i}
//               className={`h-1 rounded-full transition-all duration-500 ${
//                 slide === i ? "w-8 bg-white" : "w-3 bg-white/40"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* FORM */}
//       <div
//         className={`absolute top-1/2 -translate-y-1/2 z-30
//           transition-all duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)]
//           w-full max-w-xl ${mode === "login" ? "right-16" : "left-16"}`}
//       >
//         <div className="bg-white text-black rounded-2xl shadow-2xl overflow-hidden">
//           <div
//             className="flex w-[200%] transition-transform duration-[900ms] ease-in-out"
//             style={{
//               transform: mode === "login" ? "translateX(0%)" : "translateX(-50%)",
//             }}
//           >

//             {/* LOGIN */}
//             <div className="w-1/2 p-14">
//               <h2 className="text-4xl font-bold mb-2">Welcome Back!</h2>
//               <p className="text-gray-500 mb-8">Log in to continue your journey.</p>

//               <form onSubmit={handleLogin} className="space-y-5">
//                 <input
//                   placeholder="Email"
//                   className="w-full border rounded-xl px-5 py-4"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     className="w-full border rounded-xl px-5 py-4"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <button
//                     type="button"
//                     className="absolute right-4 top-4"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FiEyeOff /> : <FiEye />}
//                   </button>
//                 </div>

//                 <div className="flex justify-between text-sm">
//                   <label className="flex gap-2 text-gray-600">
//                     <input
//                       type="checkbox"
//                       checked={remember}
//                       onChange={(e) => setRemember(e.target.checked)}
//                     />
//                     Remember Me
//                   </label>
//                   <span className="text-gray-500 cursor-pointer">Forgot Password?</span>
//                 </div>

//                 <button type="submit" className="w-full bg-black text-white py-4 rounded-full">
//                   Login
//                 </button>
//               </form>

//               <div className="my-6 flex items-center gap-3 text-sm text-gray-400">
//                 <div className="flex-1 border-t" />
//                 Or continue with
//                 <div className="flex-1 border-t" />
//               </div>

//               <button
//                 onClick={handleGoogleLogin}
//                 className="w-full border rounded-full py-4 flex justify-center gap-3"
//               >
//                 <FcGoogle size={20} /> Continue with Google
//               </button>

//               <p className="text-center text-sm text-gray-500 mt-6">
//                 Don’t have an account?{" "}
//                 <span onClick={() => setMode("signup")} className="font-medium cursor-pointer text-black">
//                   Sign up here
//                 </span>
//               </p>
//             </div>

//             {/* SIGNUP */}
//             <div className="w-1/2 p-14">
//               <h2 className="text-4xl font-bold mb-2">Create Account</h2>
//               <p className="text-gray-500 mb-8">Join the platform and start discovering opportunities.</p>

//               <form onSubmit={handleSignup} className="space-y-5">
//                 <input
//                   placeholder="Full name"
//                   className="w-full border rounded-xl px-5 py-4"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 <input
//                   placeholder="Email"
//                   className="w-full border rounded-xl px-5 py-4"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Create password"
//                     className="w-full border rounded-xl px-5 py-4"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <button
//                     type="button"
//                     className="absolute right-4 top-4"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FiEyeOff /> : <FiEye />}
//                   </button>
//                 </div>

//                 {password && (
//                   <div>
//                     <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                       <div
//                         className="h-full bg-green-500 transition-all duration-500"
//                         style={{ width: `${strength * 25}%` }}
//                       />
//                     </div>
//                     <p className="text-xs text-gray-500 mt-1">
//                       Strength: {strengthText[strength]}
//                     </p>
//                   </div>
//                 )}

//                 <button type="submit" className="w-full bg-black text-white py-4 rounded-full">
//                   Create Account
//                 </button>
//               </form>

//               <p className="text-center text-sm text-gray-500 mt-6">
//                 Already have an account?{" "}
//                 <span onClick={() => setMode("login")} className="font-medium cursor-pointer text-black">
//                   Login
//                 </span>
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



// "use client"

// import { useEffect, useState } from "react"
// import { FcGoogle } from "react-icons/fc"
// import { FiEye, FiEyeOff } from "react-icons/fi"
// import { supabase } from "@/lib/supabase"

// export default function AuthPage() {
//   const [mode, setMode] = useState<"login" | "signup">("login")
//   const [slide, setSlide] = useState(0)

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [name, setName] = useState("")
//   const [remember, setRemember] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)

//   const loginSlides = [
//     {
//       title: "Find Opportunities That Matter",
//       desc: "Find hackathons, internships, fellowships, grants and tech jobs curated in one place.",
//       img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000",
//     },
//     {
//       title: "Discover & Apply Instantly",
//       desc: "Discover opportunities and apply instantly while tracking your applications easily.",
//       img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000",
//     },
//     {
//       title: "A Platform Creating Real Impact",
//       desc: "12,500+ users, 340+ partners and $1.2M+ value unlocked for builders.",
//       img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000",
//     },
//   ]

//   const signupSlides = [
//     {
//       title: "Start Your Journey",
//       desc: "Join thousands of builders discovering opportunities that accelerate their careers.",
//       img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000",
//     },
//     {
//       title: "Connect With Global Programs",
//       desc: "Access fellowships, hackathons and internships from organizations worldwide.",
//       img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000",
//     },
//     {
//       title: "Unlock Your Potential",
//       desc: "Build skills, win prizes and land opportunities that change your future.",
//       img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000",
//     },
//   ]

//   const slides = mode === "login" ? loginSlides : signupSlides

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSlide((prev) => (prev + 1) % slides.length)
//     }, 6000)
//     return () => clearInterval(interval)
//   }, [slides.length])

//   // Password strength
//   const getStrength = (password: string) => {
//     let score = 0
//     if (password.length > 8) score++
//     if (/[A-Z]/.test(password)) score++
//     if (/[0-9]/.test(password)) score++
//     if (/[^A-Za-z0-9]/.test(password)) score++
//     return score
//   }
//   const strength = getStrength(password)
//   const strengthText = ["Weak", "Fair", "Good", "Strong", "Very Strong"]

//   // Supabase Auth Handlers
//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault()
//     const { error } = await supabase.auth.signInWithPassword({ email, password })
//     if (error) alert(error.message)
//     else alert("Login successful!")
//   }

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault()
//     const { error } = await supabase.auth.signUp({
//       email,
//       password,
//       options: { data: { full_name: name } },
//     })
//     if (error) alert(error.message)
//     else alert("Check your email to confirm your account!")
//   }

//   const handleGoogleLogin = async () => {
//     const { error } = await supabase.auth.signInWithOAuth({ provider: "google" })
//     if (error) alert(error.message)
//   }

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden text-white">

//       {/* BACKGROUND SLIDER */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div
//           className="flex h-full w-full transition-transform duration-[2500ms] ease-[cubic-bezier(.22,1,.36,1)]"
//           style={{ transform: `translateX(-${slide * 100}%)` }}
//         >
//           {slides.map((s, i) => (
//             <div
//               key={i}
//               className="min-w-full h-full bg-cover bg-center"
//               style={{ backgroundImage: `url(${s.img})` }}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="absolute inset-0 bg-black/50" />

//       {/* LOGO */}
//       <div className="absolute top-8 left-10 z-20 flex items-center gap-2">
//         <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded">O</div>
//         <span className="font-semibold text-lg">Opp</span>
//       </div>

//       {/* SLIDER TEXT */}
//       <div
//         className={`absolute bottom-24 z-20 max-w-xl overflow-hidden ${mode === "login" ? "left-14 text-left" : "right-14 text-right"}`}
//       >
//         <div
//           className="flex transition-transform duration-[2000ms] ease-[cubic-bezier(.22,1,.36,1)]"
//           style={{ transform: `translateX(-${slide * 100}%)` }}
//         >
//           {slides.map((s, i) => (
//             <div key={i} className="min-w-full pr-8">
//               <h1 className="text-5xl font-bold mb-4">{s.title}</h1>
//               <p className="text-white/80">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//         <div className={`flex gap-2 mt-6 ${mode === "signup" ? "justify-end" : ""}`}>
//           {slides.map((_, i) => (
//             <span
//               key={i}
//               className={`h-1 rounded-full transition-all duration-500 ${slide === i ? "w-8 bg-white" : "w-3 bg-white/40"}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* FORM */}
//       <div
//         className={`absolute top-1/2 -translate-y-1/2 z-30 transition-all duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] w-full max-w-xl ${mode === "login" ? "right-16" : "left-16"}`}
//       >
//         <div className="bg-white text-black rounded-2xl shadow-2xl overflow-hidden">
//           <div
//             className="flex w-[200%] transition-transform duration-[900ms] ease-in-out"
//             style={{ transform: mode === "login" ? "translateX(0%)" : "translateX(-50%)" }}
//           >

//             {/* LOGIN */}
//             <div className="w-1/2 p-14">
//               <h2 className="text-4xl font-bold mb-2">Welcome Back!</h2>
//               <p className="text-gray-500 mb-8">Log in to continue your journey.</p>

//               <form onSubmit={handleLogin} className="space-y-5">
//                 <input
//                   placeholder="Email"
//                   className="w-full border rounded-xl px-5 py-4"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     className="w-full border rounded-xl px-5 py-4"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <button
//                     type="button"
//                     className="absolute right-4 top-4"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FiEyeOff /> : <FiEye />}
//                   </button>
//                 </div>

//                 <div className="flex justify-between text-sm">
//                   <label className="flex gap-2 text-gray-600">
//                     <input
//                       type="checkbox"
//                       checked={remember}
//                       onChange={(e) => setRemember(e.target.checked)}
//                     />
//                     Remember Me
//                   </label>
//                   <span className="text-gray-500 cursor-pointer">Forgot Password?</span>
//                 </div>

//                 <button type="submit" className="w-full bg-black text-white py-4 rounded-full">
//                   Login
//                 </button>
//               </form>

//               {/* Google login */}
//               <div className="my-6 flex items-center gap-3 text-sm text-gray-400">
//                 <div className="flex-1 border-t" />
//                 Or continue with
//                 <div className="flex-1 border-t" />
//               </div>

//               <button
//                 onClick={handleGoogleLogin}
//                 className="w-full border rounded-full py-4 flex justify-center gap-3 cursor-pointer hover:bg-gray-100 transition"
//               >
//                 <FcGoogle size={20} /> Continue with Google
//               </button>

//               <p className="text-center text-sm text-gray-500 mt-6">
//                 Don’t have an account?{" "}
//                 <span onClick={() => setMode("signup")} className="font-medium cursor-pointer text-black">
//                   Sign up here
//                 </span>
//               </p>
//             </div>

//             {/* SIGNUP */}
//             <div className="w-1/2 p-14">
//               <h2 className="text-4xl font-bold mb-2">Create Account</h2>
//               <p className="text-gray-500 mb-8">Join the platform and start discovering opportunities.</p>

//               <form onSubmit={handleSignup} className="space-y-5">
//                 <input
//                   placeholder="Full name"
//                   className="w-full border rounded-xl px-5 py-4"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 <input
//                   placeholder="Email"
//                   className="w-full border rounded-xl px-5 py-4"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Create password"
//                     className="w-full border rounded-xl px-5 py-4"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <button
//                     type="button"
//                     className="absolute right-4 top-4"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FiEyeOff /> : <FiEye />}
//                   </button>
//                 </div>

//                 {password && (
//                   <div>
//                     <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                       <div
//                         className="h-full bg-green-500 transition-all duration-500"
//                         style={{ width: `${strength * 25}%` }}
//                       />
//                     </div>
//                     <p className="text-xs text-gray-500 mt-1">
//                       Strength: {strengthText[strength]}
//                     </p>
//                   </div>
//                 )}

//                 <button type="submit" className="w-full bg-black text-white py-4 rounded-full">
//                   Create Account
//                 </button>
//               </form>

//               <p className="text-center text-sm text-gray-500 mt-6">
//                 Already have an account?{" "}
//                 <span onClick={() => setMode("login")} className="font-medium cursor-pointer text-black">
//                   Login
//                 </span>
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { FcGoogle } from "react-icons/fc"
import { FiEye, FiEyeOff } from "react-icons/fi"
import toast from "react-hot-toast"
import { supabase } from "@/lib/supabase"

export default function AuthPage() {
  const router = useRouter()
  const [mode, setMode] = useState<"login" | "signup">("login")
  const [slide, setSlide] = useState(0)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [remember, setRemember] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const loginSlides = [
    {
      title: "Find Opportunities That Matter",
      desc: "Find hackathons, internships, fellowships, grants and tech jobs curated in one place.",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000",
    },
    {
      title: "Discover & Apply Instantly",
      desc: "Discover opportunities and apply instantly while tracking your applications easily.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000",
    },
    {
      title: "A Platform Creating Real Impact",
      desc: "12,500+ users, 340+ partners and $1.2M+ value unlocked for builders.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000",
    },
  ]

  const signupSlides = [
    {
      title: "Start Your Journey",
      desc: "Join thousands of builders discovering opportunities that accelerate their careers.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000",
    },
    {
      title: "Connect With Global Programs",
      desc: "Access fellowships, hackathons and internships from organizations worldwide.",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000",
    },
    {
      title: "Unlock Your Potential",
      desc: "Build skills, win prizes and land opportunities that change your future.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000",
    },
  ]

  const slides = mode === "login" ? loginSlides : signupSlides

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length, mode])

  // Password strength calculator
  const getStrength = (password: string) => {
    let score = 0
    if (password.length > 8) score++
    if (/[A-Z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++
    return score
  }

  const strength = getStrength(password)
  const strengthText = ["Weak", "Fair", "Good", "Strong", "Very Strong"]

  // ──────────────────────────────────────────────
  // Handlers
  // ──────────────────────────────────────────────

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const toastId = toast.loading("Logging in...")

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      toast.success("Login successful! Redirecting...", { id: toastId })
      router.push("/home")
    } catch (err: any) {
      toast.error(err.message || "Login failed", { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const toastId = toast.loading("Creating account...")

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name.trim() },
          emailRedirectTo: `${window.location.origin}/home`,
        },
      })

      if (error) throw error

      toast.success(
        "Account created! Please check your email to confirm.",
        { id: toastId, duration: 6000 }
      )

      // Optional: switch back to login mode after signup
      setMode("login")
      setEmail("")
      setPassword("")
      setName("")
    } catch (err: any) {
      toast.error(err.message || "Signup failed", { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Connecting with Google...")

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/home`,
        },
      })

      if (error) throw error

      // Note: Google OAuth redirects away — toast may not be visible long
      toast.success("Redirecting to Google...", { id: toastId })
    } catch (err: any) {
      toast.error(err.message || "Google login failed", { id: toastId })
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background slider */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full w-full transition-transform duration-[2500ms] ease-[cubic-bezier(.22,1,.36,1)]"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              className="min-w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${s.img})` }}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-black/50" />

      {/* Logo */}
      <div className="absolute top-8 left-10 z-20 flex items-center gap-2">
        <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded">O</div>
        <span className="font-semibold text-lg">Opp</span>
      </div>

      {/* Slider text */}
      <div
        className={`absolute bottom-24 z-20 max-w-xl overflow-hidden ${
          mode === "login" ? "left-14 text-left" : "right-14 text-right"
        }`}
      >
        <div
          className="flex transition-transform duration-[2000ms] ease-[cubic-bezier(.22,1,.36,1)]"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={i} className="min-w-full pr-8">
              <h1 className="text-5xl font-bold mb-4">{s.title}</h1>
              <p className="text-white/80">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className={`flex gap-2 mt-6 ${mode === "signup" ? "justify-end" : ""}`}>
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${
                slide === i ? "w-8 bg-white" : "w-3 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Auth Form */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 z-30 transition-all duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] w-full max-w-xl ${
          mode === "login" ? "right-16" : "left-16"
        }`}
      >
        <div className="bg-white text-black rounded-2xl shadow-2xl overflow-hidden">
          <div
            className="flex w-[200%] transition-transform duration-[900ms] ease-in-out"
            style={{ transform: mode === "login" ? "translateX(0%)" : "translateX(-50%)" }}
          >
            {/* LOGIN FORM */}
            <div className="w-1/2 p-10 md:p-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Welcome Back!</h2>
              <p className="text-gray-500 mb-8">Log in to continue your journey.</p>

              <form onSubmit={handleLogin} className="space-y-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-black/30"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.trim())}
                  required
                  disabled={loading}
                />

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-black/30"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                  >
                    {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </button>
                </div>

                <div className="flex justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      disabled={loading}
                    />
                    Remember Me
                  </label>
                  <span className="text-gray-500 hover:text-black cursor-pointer">
                    Forgot Password?
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-full text-white font-medium transition ${
                    loading ? "bg-gray-700 cursor-not-allowed" : "bg-black hover:bg-gray-800"
                  }`}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>

              <div className="my-6 flex items-center gap-3 text-sm text-gray-400">
                <div className="flex-1 border-t border-gray-300" />
                Or continue with
                <div className="flex-1 border-t border-gray-300" />
              </div>

              <button
                onClick={handleGoogleLogin}
                disabled={loading}
                className="w-full border border-gray-300 rounded-full py-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition disabled:opacity-50"
              >
                <FcGoogle size={22} /> Continue with Google
              </button>

              <p className="text-center text-sm text-gray-500 mt-6">
                Don’t have an account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className="font-medium text-black hover:underline"
                  disabled={loading}
                >
                  Sign up here
                </button>
              </p>
            </div>

            {/* SIGNUP FORM */}
            <div className="w-1/2 p-10 md:p-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Create Account</h2>
              <p className="text-gray-500 mb-8">Join the platform and start discovering opportunities.</p>

              <form onSubmit={handleSignup} className="space-y-5">
                <input
                  placeholder="Full name"
                  className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-black/30"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={loading}
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-black/30"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.trim())}
                  required
                  disabled={loading}
                />

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-black/30"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                  >
                    {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </button>
                </div>

                {password && (
                  <div className="space-y-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 transition-all duration-500"
                        style={{ width: `${Math.min(strength * 25, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      Password strength: {strengthText[strength]}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-full text-white font-medium transition ${
                    loading ? "bg-gray-700 cursor-not-allowed" : "bg-black hover:bg-gray-800"
                  }`}
                >
                  {loading ? "Creating account..." : "Create Account"}
                </button>
              </form>

              <p className="text-center text-sm text-gray-500 mt-6">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="font-medium text-black hover:underline"
                  disabled={loading}
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}