

'use client'
import Link from 'next/link'
import { ArrowRight, Sparkles, Bell, Calendar, TrendingUp, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Automated Discovery</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Automated Discovery
              <br />
              <span className="bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent">
                & Opportunity Management
              </span>
            </h2>

           
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/signup"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-white to-gray-300 text-black font-bold rounded-full shadow-2xl hover:shadow-white/20 transition-all text-lg"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/opportunities"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-gray-600 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-lg"
                >
                  Explore Opportunities
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Visual Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 shadow-2xl overflow-hidden p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Your Dashboard</h3>
                  <p className="text-sm text-gray-400">Manage all opportunities in one place</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-400 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl border border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-xs text-gray-400">Active</span>
                  </div>
                  <p className="text-3xl font-black text-white">24</p>
                  <p className="text-xs text-gray-500">Opportunities</p>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl border border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span className="text-xs text-gray-400">Upcoming</span>
                  </div>
                  <p className="text-3xl font-black text-white">8</p>
                  <p className="text-xs text-gray-500">Deadlines</p>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-800 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop"
                  alt="Team collaboration and opportunity management"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs text-white font-medium">
                      New Match
                    </span>
                  </div>
                  <p className="text-white font-bold text-lg">Google Africa Developer Program</p>
                </div>
              </div>

              {/* Activity List */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">SA</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-semibold text-white">Sarah Adams</p>
                      <span className="text-xs text-green-400">✓ Verified</span>
                    </div>
                    <p className="text-xs text-gray-400">Applied to scholarship</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Notification Card - Top Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8 max-w-[280px] bg-gradient-to-br from-gray-900 to-black backdrop-blur-xl border border-gray-700 rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <Bell className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-white">New Opportunity</span>
              </div>
              <p className="text-xs text-gray-300 mb-2">
                Microsoft AI Hackathon - Lagos
              </p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </div>
                <span className="text-xs text-gray-400">80%</span>
              </div>
            </motion.div>

            {/* Floating Alert Card - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 max-w-[260px] bg-gradient-to-br from-orange-900/90 to-red-900/90 backdrop-blur-xl border border-orange-500/50 rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-sm font-semibold text-orange-300">High Priority</span>
              </div>
              <p className="text-xs text-white mb-2">
                Lagos AI Hackathon – Apr 10, 2026
              </p>
              <div className="h-1.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mb-2" style={{ width: '75%' }} />
              <p className="text-xs text-orange-200">75% Match • Apply now</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  )
}