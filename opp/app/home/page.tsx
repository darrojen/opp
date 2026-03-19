

// app/home/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import type { Session } from '@supabase/supabase-js'

import Navbar from '@/features/landing/components/Navbar'
import HomePage from '@/features/home/home.config'
import  HoneycombRingLoader  from '@/components/loading/logo-load';

// ────────────────────────────────────────────────
//  Import your custom loader
// ────────────────────────────────────────────────

export default function Home() {
  const router = useRouter()
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 1. Immediately get current session (usually very fast)
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)

      // If no session → redirect to login
      if (!session) {
        router.replace('/auth')
        return
      }

      // If we got here → we're logged in, but we can simulate
      // a tiny delay or wait for something else if needed
      setTimeout(() => {
        setLoading(false)
      }, 2000) // ← remove or make 0 when using real data fetching
    })

    // 2. Subscribe to future auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (!session) {
        router.replace('/auth')
      }
    })

    return () => subscription.unsubscribe()
  }, [router])

  // ────────────────────────────────────────────────
  //  Render
  // ────────────────────────────────────────────────
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/40">
      {/* Navbar is always shown immediately */}
      <Navbar
        isLoggedIn={!!session?.user}
        user={session?.user ?? null}
      />

      {/* Content area */}
      {loading ? (
        // Loader centered in the remaining space
        <div className="flex-1 flex items-center justify-center">
          {/* <ThreeBodyLoader /> */}
          <HoneycombRingLoader />
        </div>
      ) : (
        // Your main dashboard / home content
        <HomePage />
      )}
    </div>
  )
}