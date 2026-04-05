'use client'

import { useState, useRef, useEffect } from "react";
import { Bell, BellOff, BellRing, Sparkles } from "lucide-react";
import { toast } from "@/components/ui/toast";

type NotifOption = "all" | "personalized" | "none";

export default function FollowActions() {
  const [following, setFollowing] = useState(false);
  const [joined, setJoined] = useState(false);
  const [notif, setNotif] = useState<NotifOption>("personalized");
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
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
      description: "We'll notify you about relevant updates.",
    },
    none: {
      label: "None",
      icon: <BellOff className="w-4 h-4" />,
      message: "Notifications turned off",
      description: "You won't receive updates.",
    },
  };

  return (
    <div className="flex items-center gap-2">

      {/* JOIN (optional community action) */}
      {following && (
        <button
          onClick={() => {
            const next = !joined;
            setJoined(next);

            if (next) {
              toast.success("Joined community", "You're now part of this organizer.");
            } else {
              toast.message("Left community");
            }
          }}
          className="text-[12px] font-semibold px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 active:scale-95 transition-all duration-200"
        >
          {joined ? "Joined" : "Join"}
        </button>
      )}

      {/* FOLLOW BUTTON */}
      <button
        onClick={() => {
          const next = !following;
          setFollowing(next);

          if (next) {
            toast.success("Following", "You'll see updates from this organizer.");
          } else {
            setOpen(false);
            setJoined(false);
            setNotif("personalized");
            toast.message("Unfollowed", "You won't see updates anymore.");
          }
        }}
        className={`text-[12px] font-semibold px-5 py-2 rounded-full transition-all duration-200 active:scale-95 ${
          following
            ? "bg-gray-100 text-gray-800 border border-gray-200"
            : "bg-black text-white hover:opacity-90"
        }`}
      >
        {following ? "Following" : "Follow"}
      </button>

      {/* NOTIFICATION SETTINGS */}
      {following && (
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