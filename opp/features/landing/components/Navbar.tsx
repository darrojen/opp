
'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Floating Navbar */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">

        <div
          className={`
          w-full max-w-6xl
          rounded-full
          border border-[#253745]
          bg-[#11212D]/80
          backdrop-blur-xl
          transition-all duration-500 ease-out
          ${isScrolled ? "scale-[0.99] shadow-xl" : "scale-110"}
          `}
        >
          <div className="flex items-center justify-between h-16 px-6 lg:px-8">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 text-[#CCD0CF] font-bold tracking-wide"
            >
              <div className="
                flex h-9 w-9 items-center justify-center
                rounded-lg
                bg-[#4A5C6A]
                text-[#06141B]
                font-black
                transition-transform duration-300
                hover:scale-110
              ">
                O
              </div>

              <span className="text-lg">OPP</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10 text-sm font-medium text-[#9BA8AB]">

              {["Home","About","Service","Work","FAQs"].map((item) => (
                <Link
                  key={item}
                  href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  className="
                  relative
                   hover:text-[#ffffff]
                  transition-colors
                  duration-300
                  after:absolute
                  after:-bottom-1
                  after:left-0
                  after:h-[2px]
                  after:w-0
                  after:bg-[#9BA8AB]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                  "
                >
                  {item}
                </Link>
              ))}

            </nav>

            {/* CTA */}
            <Link
              href="/contact"
              className="
              hidden lg:inline-flex
              items-center
              px-5 py-2
              rounded-full
              bg-white
              text-[#06141B]
              font-semibold
              hover:bg-[#CCD0CF]
              transition-all
              duration-300
              hover:scale-105
              "
            >
              Sign in
            </Link>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden text-[#CCD0CF]"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`
        fixed inset-0 z-40
        bg-black/40 backdrop-blur-sm
        transition-opacity duration-300
        lg:hidden
        ${isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`
        fixed top-0 right-0 z-50
        h-full w-72
        bg-[#11212D]
        border-l border-[#253745]
        text-[#CCD0CF]
        p-6
        transform transition-transform duration-500 ease-out
        lg:hidden
        ${isMobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >

        <div className="flex justify-between items-center mb-10">
          <span className="text-xl font-bold">PIXEL</span>

          <button onClick={() => setIsMobileOpen(false)}>
            <X />
          </button>
        </div>

        <nav className="flex flex-col gap-7 text-lg">

          {["Home","About","Service","Work","FAQs"].map((item) => (
            <Link
              key={item}
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              onClick={() => setIsMobileOpen(false)}
              className="
              text-[#9BA8AB]
              hover:text-[#CCD0CF]
              transition-colors duration-300
              "
            >
              {item}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setIsMobileOpen(false)}
            className="
            mt-4
            bg-[#CCD0CF]
            text-[#06141B]
            font-semibold
            px-4 py-3
            rounded-lg
            text-center
            hover:bg-white
            transition
            "
          >
            Contact
          </Link>

        </nav>
      </div>
    </>
  )
}