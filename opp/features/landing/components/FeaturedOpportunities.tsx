
'use client'

import { ArrowRight, Calendar, MapPin, TrendingUp, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const opportunities = [
  {
    title: 'AI Hackathon 2026',
    type: 'Remote',
    deadline: 'Apr 15, 2026',
    tag: 'Featured',
    image:
      'https://images.unsplash.com/photo-1581090700227-5a91f89b2b43?auto=format&fit=crop&w=800&q=80',
    growth: '+200%',
    participants: '5K+',
  },
  {
    title: 'Google Africa Developer Scholarship',
    type: 'Remote • Africa',
    deadline: 'Mar 31, 2026',
    tag: 'Scholarship',
    image:
      'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80',
    growth: '+150%',
    participants: '10K+',
  },
  {
    title: 'Web3 Bootcamp',
    type: 'Hybrid',
    deadline: 'May 10, 2026',
    tag: 'Bootcamp',
    image:
      'https://images.unsplash.com/photo-1623055013326-df0e70fdd116?auto=format&fit=crop&w=800&q=80',
    growth: '+180%',
    participants: '3K+',
  },
  {
    title: 'Startup Funding 2026',
    type: 'In-person',
    deadline: 'Jun 5, 2026',
    tag: 'Funding',
    image:
      'https://images.unsplash.com/photo-1556742502-ec7c0e9f0342?auto=format&fit=crop&w=800&q=80',
    growth: '+250%',
    participants: '2K+',
  },
]

export default function FeaturedOpportunities() {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Glow Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
            <Star className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Top Opportunities
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Discover{' '}
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Opportunities
            </span>
            <br />
            Built For Growth
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hackathons, scholarships, bootcamps and funding programs curated
            for developers, students and innovators worldwide.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Find the next opportunity that changes your career
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              From global scholarships to high-impact hackathons, explore
              curated opportunities designed to help you grow your skills,
              build projects, and connect with top organizations.
            </p>

            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:shadow-2xl hover:shadow-white/30 transition-all flex items-center gap-2">
              Explore Opportunities
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* RIGHT FLOATING STACK */}
          <div className="relative flex justify-center lg:justify-end">

            <div className="relative w-[520px] h-[420px] perspective-1000">

              {opportunities.map((op, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 0,
                    zIndex: 50,
                  }}
                  className="absolute w-[280px] h-[320px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black"
                  style={{
                    right: `${i * 70}px`,
                    top: `${i * 40}px`,
                    transform: `rotate(${i % 2 === 0 ? -12 : -18}deg)`,
                  }}
                >
                  {/* Image */}
                  <img
                    src={op.image}
                    alt={op.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                  {/* CONTENT */}
                  <div className="absolute bottom-0 p-5 text-white">

                    <span className="text-xs px-3 py-1 bg-white/10 rounded-full backdrop-blur">
                      {op.tag}
                    </span>

                    <h3 className="text-lg font-bold mt-2">
                      {op.title}
                    </h3>

                    <div className="flex items-center text-xs text-gray-300 mt-2 gap-3">
                      <MapPin className="w-3 h-3" />
                      <span>{op.type}</span>
                    </div>

                    <div className="flex items-center text-xs text-gray-300 mt-1 gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{op.deadline}</span>
                    </div>

                    <div className="flex items-center gap-2 mt-3 text-sm">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span>{op.growth}</span>
                      <span className="text-gray-400">
                        {op.participants}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </div>

        {/* BOTTOM BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:shadow-2xl hover:shadow-white/30 transition-all flex items-center gap-2 mx-auto">
            View All Opportunities
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  )
}