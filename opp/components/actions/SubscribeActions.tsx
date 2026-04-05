// 'use client'

// import { useState, useRef, useEffect } from "react";
// import { Bell } from "lucide-react";

// type NotifOption = "all" | "personalized" | "none";

// export default function SubscribeActions() {
//   const [subscribed, setSubscribed] = useState(false);
//   const [joined, setJoined] = useState(false);
//   const [notif, setNotif] = useState<NotifOption>("personalized");
//   const [open, setOpen] = useState(false);

//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClick = (e: MouseEvent) => {
//       if (ref.current && !ref.current.contains(e.target as Node)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   return (
//     <div className="flex items-center gap-2">

//       {/* JOIN (only after subscribe) */}
//       {subscribed && (
//         <button
//           onClick={() => setJoined(v => !v)}
//           className="text-[12px] font-semibold px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition"
//         >
//           {joined ? "Joined" : "Join"}
//         </button>
//       )}

//       {/* SUBSCRIBE */}
//       <button
//         onClick={() => {
//           setSubscribed(v => !v);
//           if (subscribed) {
//             setOpen(false);
//             setJoined(false);
//           }
//         }}
//         className={`text-[12px] font-semibold px-5 py-2 rounded-full transition ${
//           subscribed
//             ? "bg-gray-100 text-gray-800 border border-gray-200"
//             : "bg-black text-white"
//         }`}
//       >
//         {subscribed ? "Subscribed" : "Subscribe"}
//       </button>

//       {/* NOTIFICATIONS */}
//       {subscribed && (
//         <div className="relative" ref={ref}>
//           <button
//             onClick={() => setOpen(v => !v)}
//             className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-200 bg-gray-100 hover:bg-gray-200 transition"
//           >
//             <Bell className="w-4 h-4" />
//           </button>

//           {open && (
//             <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50 overflow-hidden">
//               {["all", "personalized", "none"].map((type) => (
//                 <button
//                   key={type}
//                   onClick={() => {
//                     setNotif(type as NotifOption);
//                     setOpen(false);
//                   }}
//                   className={`block w-full text-left px-4 py-2 text-sm capitalize hover:bg-gray-100 ${
//                     notif === type ? "font-semibold text-black" : "text-gray-600"
//                   }`}
//                 >
//                   {type}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }


// 'use client'

// import { useState, useRef, useEffect } from "react";
// import { Bell, BellOff, BellRing, Sparkles } from "lucide-react";
// import { toast } from "sonner";

// type NotifOption = "all" | "personalized" | "none";

// export default function SubscribeActions() {
//   const [subscribed, setSubscribed] = useState(false);
//   const [joined, setJoined] = useState(false);
//   const [notif, setNotif] = useState<NotifOption>("personalized");
//   const [open, setOpen] = useState(false);

//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClick = (e: MouseEvent) => {
//       if (ref.current && !ref.current.contains(e.target as Node)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   const notifConfig = {
//     all: {
//       label: "All",
//       icon: <BellRing className="w-4 h-4" />,
//       toast: "All notifications turned on 🔔",
//     },
//     personalized: {
//       label: "Personalized",
//       icon: <Sparkles className="w-4 h-4" />,
//       toast: "Personalized notifications enabled ✨",
//     },
//     none: {
//       label: "None",
//       icon: <BellOff className="w-4 h-4" />,
//       toast: "Notifications turned off 🔕",
//     },
//   };

//   return (
//     <div className="flex items-center gap-2">

//       {/* JOIN */}
//       {subscribed && (
//         <button
//           onClick={() => {
//             setJoined(v => !v);
//             toast.success(joined ? "Left membership" : "Joined successfully 🎉");
//           }}
//           className="text-[12px] font-semibold px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 active:scale-95 transition-all duration-200"
//         >
//           {joined ? "Joined" : "Join"}
//         </button>
//       )}

//       {/* SUBSCRIBE */}
//       <button
//         onClick={() => {
//           setSubscribed(v => !v);

//           if (!subscribed) {
//             toast.success("Subscribed successfully 🎉");
//           } else {
//             setOpen(false);
//             setJoined(false);
//             toast("Unsubscribed");
//           }
//         }}
//         className={`text-[12px] font-semibold px-5 py-2 rounded-full transition-all duration-200 active:scale-95 ${
//           subscribed
//             ? "bg-gray-100 text-gray-800 border border-gray-200"
//             : "bg-black text-white hover:opacity-90"
//         }`}
//       >
//         {subscribed ? "Subscribed" : "Subscribe"}
//       </button>

//       {/* NOTIFICATIONS */}
//       {subscribed && (
//         <div className="relative" ref={ref}>
//           <button
//             onClick={() => setOpen(v => !v)}
//             className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-200 bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all duration-200"
//           >
//             <Bell className="w-4 h-4" />
//           </button>

//           {/* DROPDOWN */}
//           <div
//             className={`absolute right-0 mt-2 w-44 bg-white border rounded-xl shadow-lg z-50 overflow-hidden transition-all duration-200 ${
//               open
//                 ? "opacity-100 scale-100 translate-y-0"
//                 : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
//             }`}
//           >
//             {Object.entries(notifConfig).map(([key, value]) => (
//               <button
//                 key={key}
//                 onClick={() => {
//                   setNotif(key as NotifOption);
//                   setOpen(false);
//                   toast.success(value.toast);
//                 }}
//                 className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition ${
//                   notif === key
//                     ? "bg-gray-100 font-semibold text-black"
//                     : "text-gray-600 hover:bg-gray-50"
//                 }`}
//               >
//                 {value.icon}
//                 {value.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


'use client'

import { useState, useRef, useEffect } from "react";
import { Bell, BellOff, BellRing, Sparkles } from "lucide-react";
import { toast } from "@/components/ui/toast";

type NotifOption = "all" | "personalized" | "none";

export default function SubscribeActions() {
  const [subscribed, setSubscribed] = useState(false);
  const [joined, setJoined] = useState(false);
  const [notif, setNotif] = useState<NotifOption>("personalized");
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const notifConfig = {
    all: {
      label: "All",
      icon: <BellRing className="w-4 h-4" />,
      message: "All notifications turned on",
      description: "You'll be notified about everything.",
    },
    personalized: {
      label: "Personalized",
      icon: <Sparkles className="w-4 h-4" />,
      message: "Personalized notifications enabled",
      description: "We'll only notify you about what matters.",
    },
    none: {
      label: "None",
      icon: <BellOff className="w-4 h-4" />,
      message: "Notifications turned off",
      description: "You won't receive any updates.",
    },
  };

  return (
    <div className="flex items-center gap-2">

      {/* JOIN */}
      {subscribed && (
        <button
          onClick={() => {
            const next = !joined;
            setJoined(next);
            if (next) {
              toast.success("Joined successfully", "You're now a member.");
            } else {
              toast.message("Left membership");
            }
          }}
          className="text-[12px] font-semibold px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 active:scale-95 transition-all duration-200"
        >
          {joined ? "Joined" : "Join"}
        </button>
      )}

      {/* SUBSCRIBE */}
      <button
        onClick={() => {
          const next = !subscribed;
          setSubscribed(next);
          if (next) {
            toast.success("Subscribed!", "You'll get updates from this organizer.");
          } else {
            setOpen(false);
            setJoined(false);
            toast.message("Unsubscribed", "You won't receive further updates.");
          }
        }}
        className={`text-[12px] font-semibold px-5 py-2 rounded-full transition-all duration-200 active:scale-95 ${
          subscribed
            ? "bg-gray-100 text-gray-800 border border-gray-200"
            : "bg-black text-white hover:opacity-90"
        }`}
      >
        {subscribed ? "Subscribed" : "Subscribe"}
      </button>

      {/* NOTIFICATIONS */}
      {subscribed && (
        <div className="relative" ref={ref}>
          <button
            onClick={() => setOpen(v => !v)}
            className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-200 bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all duration-200"
          >
            <Bell className="w-4 h-4" />
          </button>

          {/* DROPDOWN */}
          <div
            className={`absolute right-0 mt-2 w-44 bg-white border rounded-xl shadow-lg z-50 overflow-hidden transition-all duration-200 ${
              open
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }`}
          >
            {(Object.entries(notifConfig) as [NotifOption, typeof notifConfig[NotifOption]][]).map(([key, value]) => (
              <button
                key={key}
                onClick={() => {
                  setNotif(key);
                  setOpen(false);
                  toast.success(value.message, value.description);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition ${
                  notif === key
                    ? "bg-gray-100 font-semibold text-black"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {value.icon}
                {value.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}