// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import type { Session } from "@supabase/supabase-js";
// import { supabase } from "@/lib/supabase";
// import Navbar from "@/components/ui/Navbar";

// export default function ClientNavbar() {
//   const router = useRouter();
//   const [session, setSession] = useState<Session | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // 1. Immediately get current session
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);

//       if (!session) {
//         router.replace("/auth");
//         return;
//       }

//       setTimeout(() => {
//         setLoading(false);
//       }, 0); // keep your delay
//     });

//     // 2. Subscribe to auth changes
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//       if (!session) {
//         router.replace("/auth");
//       }
//     });

//     return () => subscription.unsubscribe();
//   }, [router]);

//   if (loading) return null; // or loader

//   return (
//     <Navbar
//       isLoggedIn={!!session?.user}
//       user={session?.user ?? null}
//     />
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/ui/Navbar";

export default function ClientNavbar() {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // Get session (async, but don't block UI)
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);

      if (!session) {
        router.replace("/auth");
      }
    });

    // Listen for auth changes
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

  // 🚀 ALWAYS render immediately
  return (
    <Navbar
      isLoggedIn={!!session?.user}
      user={session?.user ?? null}
    />
  );
}