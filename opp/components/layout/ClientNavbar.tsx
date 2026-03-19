"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import Navbar from "@/features/landing/components/Navbar";

export default function ClientNavbar() {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Immediately get current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);

      if (!session) {
        router.replace("/auth");
        return;
      }

      setTimeout(() => {
        setLoading(false);
      }, 0); // keep your delay
    });

    // 2. Subscribe to auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) {
        router.replace("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  if (loading) return null; // or loader

  return (
    <Navbar
      isLoggedIn={!!session?.user}
      user={session?.user ?? null}
    />
  );
}