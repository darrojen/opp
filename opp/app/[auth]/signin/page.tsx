
// "use client"

// import { useEffect, useState } from "react"
// import { FcGoogle } from "react-icons/fc"
// import { FiEye, FiEyeOff } from "react-icons/fi"

// export default function LoginPage() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [remember, setRemember] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)
//   const [slide, setSlide] = useState(0)

//   const slides = [
//     {
//       title: "Find Opportunities That Matter",
//       description:
//         "Find the best hackathons, internships, fellowships, grants, and tech jobs — curated in one place for students, developers, and ambitious builders.",
//       image:
//         "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop",
//     },
//     {
//       title: "Discover, Apply & Grow",
//       description:
//         "Discover opportunities, apply instantly and stay updated with curated programs designed to help African talent grow globally.",
//       image:
//         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
//     },
//     {
//       title: "A Platform Creating Real Impact",
//       description:
//         "12,500+ users, 340+ partners, $1.2M+ value unlocked and 4,800+ applications submitted through the platform.",
//       image:
//         "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
//     },
//   ]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSlide((prev) => (prev + 1) % slides.length)
//     }, 2000)

//     return () => clearInterval(interval)
//   }, [])

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()

//     console.log({
//       email,
//       password,
//       remember,
//     })
//   }

//   return (
//     <div className="min-h-screen w-full flex bg-[#0b0f19]">

//       {/* LEFT PANEL */}
//       <div className="relative hidden lg:flex flex-1 items-end text-white overflow-hidden">

//         {/* sliding backgrounds */}
//         {slides.map((s, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
//               slide === index ? "opacity-100" : "opacity-0"
//             }`}
//             style={{ backgroundImage: `url(${s.image})` }}
//           />
//         ))}

//         {/* overlay */}
//         <div className="absolute inset-0 bg-black/50" />

//         {/* logo */}
//         <div className="absolute top-8 left-10 flex items-center gap-2 z-20">
//           <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded">
//             O
//           </div>
//           <span className="font-semibold text-lg">Opp</span>
//         </div>

      
//         {/* marketing text */}
//         <div className="relative z-20 max-w-xl p-14 transition-all duration-700">

//           <h1 className="text-4xl font-bold leading-tight mb-4">
//             {slides[slide].title}
//           </h1>

//           <p className="text-white/80 text-sm max-w-md leading-relaxed">
//             {slides[slide].description}
//           </p>

//           {/* dots */}
//           <div className="flex gap-2 mt-6">
//             {slides.map((_, index) => (
//               <span
//                 key={index}
//                 className={`h-1 rounded-full transition-all duration-300 ${
//                   slide === index
//                     ? "w-8 bg-white"
//                     : "w-3 bg-white/40"
//                 }`}
//               />
//             ))}
//           </div>

//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       <div className="flex flex-1 items-center justify-center p-6">

//         <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10">

//           {/* header */}
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               Welcome Back!
//             </h2>

//             <p className="text-gray-500 text-sm">
//               Log in to start creating stunning videos with ease.
//             </p>
//           </div>

//           {/* form */}
//           <form onSubmit={handleSubmit} className="space-y-5">

//             {/* email */}
//             <div>
//               <label className="text-sm text-gray-700 block mb-1">
//                 Email
//               </label>

//               <input
//                 type="email"
//                 placeholder="Input your email"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             {/* password */}
//             <div>
//               <label className="text-sm text-gray-700 block mb-1">
//                 Password
//               </label>

//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Input your password"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />

//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-3.5 text-gray-400"
//                 >
//                   {showPassword ? <FiEyeOff /> : <FiEye />}
//                 </button>
//               </div>
//             </div>

//             {/* remember + forgot */}
//             <div className="flex items-center justify-between text-sm">

//               <label className="flex items-center gap-2 text-gray-600">
//                 <input
//                   type="checkbox"
//                   checked={remember}
//                   onChange={(e) => setRemember(e.target.checked)}
//                   className="rounded border-gray-300"
//                 />
//                 Remember Me
//               </label>

//               <button
//                 type="button"
//                 className="text-gray-500 hover:text-black"
//               >
//                 Forgot Password?
//               </button>
//             </div>

//             {/* login */}
//             <button
//               type="submit"
//               className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-900 transition"
//             >
//               Login
//             </button>

//           </form>

//           {/* divider */}
//           <div className="my-6 flex items-center gap-3 text-sm text-gray-400">
//             <div className="flex-1 border-t" />
//             Or continue with
//             <div className="flex-1 border-t" />
//           </div>

//           {/* google */}
//           <button
//             className="w-full border border-gray-300 rounded-full py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition"
//           >
//             <FcGoogle size={20} />
//             Continue with Google
//           </button>

//           {/* signup */}
//           <p className="text-center text-sm text-gray-500 mt-6">
//             Don&quote;t have an account?{" "}
//             <span className="text-black font-medium cursor-pointer">
//               Sign up here
//             </span>
//           </p>

//         </div>
//       </div>
//     </div>
//   )
// }



"use client"

import { useEffect, useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { FiEye, FiEyeOff } from "react-icons/fi"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [slide, setSlide] = useState(0)

  const slides = [
    {
      title: "Find Opportunities That Matter",
      description:
        "Find the best hackathons, internships, fellowships, grants, and tech jobs — curated in one place for students, developers, and ambitious builders.",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop",
    },
    {
      title: "Discover, Apply & Grow",
      description:
        "Discover opportunities, apply instantly and stay updated with curated programs designed to help African talent grow globally.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
    },
    {
      title: "Real Impact for Builders",
      description:
        "12,500+ users, 340+ partners, $1.2M+ value unlocked and 4,800+ applications submitted through the platform.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, password, remember })
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">

      {/* BACKGROUND SLIDES */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            slide === i ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${s.image})` }}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* LOGO */}
      <div className="absolute top-8 left-10 flex items-center gap-2 z-20">
        <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded">
          O
        </div>
        <span className="font-semibold text-lg">Opp</span>
      </div>

      {/* LEFT TEXT */}
      <div className="absolute bottom-20 left-12 max-w-xl z-20">

        <h1 className="text-5xl font-bold leading-tight mb-4">
          {slides[slide].title}
        </h1>

        <p className="text-white/80 max-w-md">
          {slides[slide].description}
        </p>

        {/* SLIDER DOTS */}
        <div className="flex gap-2 mt-6">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all ${
                slide === i
                  ? "w-8 bg-white"
                  : "w-3 bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>

      {/* LOGIN CARD */}
<div className="absolute right-16 top-1/2 -translate-y-1/2 z-20 w-full max-w-xl">
        <div className="bg-white text-black rounded-2xl shadow-2xl p-10">

          {/* HEADER */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              Welcome Back!
            </h2>

            <p className="text-gray-500 text-sm">
              Log in to start creating stunning videos with ease.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="text-sm text-gray-700 block mb-1">
                Email
              </label>

              <input
                type="email"
                placeholder="Input your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 block mb-1">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Input your password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* REMEMBER */}
            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="rounded border-gray-300"
                />
                Remember Me
              </label>

              <button
                type="button"
                className="text-gray-500 hover:text-black"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-900 transition"
            >
              Login
            </button>

          </form>

          {/* DIVIDER */}
          <div className="my-6 flex items-center gap-3 text-sm text-gray-400">
            <div className="flex-1 border-t" />
            Or continue with
            <div className="flex-1 border-t" />
          </div>

          {/* GOOGLE */}
          <button className="w-full border border-gray-300 rounded-full py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <FcGoogle size={20} />
            Continue with Google
          </button>

          {/* SIGNUP */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don&quote;t have an account?{" "}
            <span className="text-black font-medium cursor-pointer">
              Sign up here
            </span>
          </p>

        </div>
      </div>

    </div>
  )
}