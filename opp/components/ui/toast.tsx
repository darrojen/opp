// 'use client'

// import { Toaster, toast as sonnerToast } from 'sonner'

// // ─── Keyframes (injected once) ────────────────────────────────────────────────

// function ToastKeyframes() {
//   return (
//     <style>{`
//       @keyframes toast-circle-draw {
//         to { stroke-dashoffset: 0; }
//       }
//       @keyframes toast-stroke-draw {
//         to { stroke-dashoffset: 0; }
//       }
//     `}</style>
//   )
// }

// // ─── Animated Icons ───────────────────────────────────────────────────────────

// export function SuccessIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
//       <circle
//         cx="12" cy="12" r="10"
//         stroke="#22c55e" strokeWidth="2"
//         strokeDasharray="62.83" strokeDashoffset="62.83"
//         strokeLinecap="round"
//         style={{ animation: "toast-circle-draw 0.4s cubic-bezier(0.65,0,0.45,1) forwards" }}
//       />
//       <polyline
//         points="7,12.5 10.5,16 17,9"
//         stroke="#22c55e" strokeWidth="2.2"
//         strokeLinecap="round" strokeLinejoin="round"
//         strokeDasharray="14" strokeDashoffset="14"
//         style={{ animation: "toast-stroke-draw 0.3s cubic-bezier(0.65,0,0.45,1) 0.35s forwards" }}
//       />
//     </svg>
//   )
// }

// export function ErrorIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
//       <circle
//         cx="12" cy="12" r="10"
//         stroke="#ef4444" strokeWidth="2"
//         strokeDasharray="62.83" strokeDashoffset="62.83"
//         strokeLinecap="round"
//         style={{ animation: "toast-circle-draw 0.4s cubic-bezier(0.65,0,0.45,1) forwards" }}
//       />
//       <line
//         x1="8" y1="8" x2="16" y2="16"
//         stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round"
//         strokeDasharray="12" strokeDashoffset="12"
//         style={{ animation: "toast-stroke-draw 0.25s cubic-bezier(0.65,0,0.45,1) 0.35s forwards" }}
//       />
//       <line
//         x1="16" y1="8" x2="8" y2="16"
//         stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round"
//         strokeDasharray="12" strokeDashoffset="12"
//         style={{ animation: "toast-stroke-draw 0.25s cubic-bezier(0.65,0,0.45,1) 0.5s forwards" }}
//       />
//     </svg>
//   )
// }

// // ─── Toast card ───────────────────────────────────────────────────────────────

// function ToastCard({ icon, message, description }: { icon: React.ReactNode; message: string; description?: string }) {
//   return (
//     <div
//       className="flex items-start gap-3 w-full px-4 py-3.5 rounded-2xl bg-white text-sm"
//       style={{ border: "1px solid #f0ece8", boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)" }}
//     >
//       {icon}
//       <div className="flex flex-col min-w-0">
//         <span className="font-semibold text-gray-900 leading-snug">{message}</span>
//         {description && <span className="text-xs text-gray-400 mt-0.5 font-normal">{description}</span>}
//       </div>
//     </div>
//   )
// }

// // ─── ToastProvider — mount once in layout ────────────────────────────────────

// export function ToastProvider() {
//   return (
//     <>
//       <ToastKeyframes />
//       <Toaster
//         position="bottom-right"
//         gap={8}
//         toastOptions={{ unstyled: true, classNames: { toast: "w-full max-w-sm" } }}
//       />
//     </>
//   )
// }

// // ─── Toast helpers ────────────────────────────────────────────────────────────

// export const toast = {
//   success: (message: string, description?: string) =>
//     sonnerToast.custom(() => <ToastCard icon={<SuccessIcon />} message={message} description={description} />),

//   error: (message: string, description?: string) =>
//     sonnerToast.custom(() => <ToastCard icon={<ErrorIcon />} message={message} description={description} />),

//   message: (message: string, description?: string) =>
//     sonnerToast.custom(() => (
//       <ToastCard
//         icon={
//           <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
//             <circle cx="12" cy="12" r="10" stroke="#9ca3af" strokeWidth="2" />
//             <path d="M12 8v4M12 16h.01" stroke="#9ca3af" strokeWidth="2.2" strokeLinecap="round" />
//           </svg>
//         }
//         message={message}
//         description={description}
//       />
//     )),
// }


'use client'

import { Toaster, toast as sonnerToast } from 'sonner'

function SuccessIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20, flexShrink: 0 }}>
      <circle
        cx="12" cy="12" r="10"
        stroke="#22c55e" strokeWidth="2"
        strokeDasharray="62.83" strokeDashoffset="62.83"
        strokeLinecap="round"
        style={{ animation: "toastCircle 0.4s cubic-bezier(0.65,0,0.45,1) forwards" }}
      />
      <polyline
        points="7,12.5 10.5,16 17,9"
        stroke="#22c55e" strokeWidth="2.2"
        strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray="14" strokeDashoffset="14"
        style={{ animation: "toastStroke 0.3s cubic-bezier(0.65,0,0.45,1) 0.35s forwards" }}
      />
      <style>{`
        @keyframes toastCircle { to { stroke-dashoffset: 0; } }
        @keyframes toastStroke { to { stroke-dashoffset: 0; } }
      `}</style>
    </svg>
  )
}

function ErrorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20, flexShrink: 0 }}>
      <circle
        cx="12" cy="12" r="10"
        stroke="#ef4444" strokeWidth="2"
        strokeDasharray="62.83" strokeDashoffset="62.83"
        strokeLinecap="round"
        style={{ animation: "toastCircle 0.4s cubic-bezier(0.65,0,0.45,1) forwards" }}
      />
      <line
        x1="8" y1="8" x2="16" y2="16"
        stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round"
        strokeDasharray="12" strokeDashoffset="12"
        style={{ animation: "toastStroke 0.25s cubic-bezier(0.65,0,0.45,1) 0.35s forwards" }}
      />
      <line
        x1="16" y1="8" x2="8" y2="16"
        stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round"
        strokeDasharray="12" strokeDashoffset="12"
        style={{ animation: "toastStroke 0.25s cubic-bezier(0.65,0,0.45,1) 0.5s forwards" }}
      />
      <style>{`
        @keyframes toastCircle { to { stroke-dashoffset: 0; } }
        @keyframes toastStroke { to { stroke-dashoffset: 0; } }
      `}</style>
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20, flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" stroke="#9ca3af" strokeWidth="2" />
      <path d="M12 8v4M12 16h.01" stroke="#9ca3af" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

function ToastCard({ icon, message, description }: { icon: React.ReactNode; message: string; description?: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: 12,
      padding: "14px 16px", borderRadius: 16,
      background: "white", border: "1px solid #f0ece8",
      boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
      fontSize: 14, width: "100%", maxWidth: 360,
    }}>
      {icon}
      <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
        <span style={{ fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{message}</span>
        {description && <span style={{ fontSize: 12, color: "#9ca3af", marginTop: 2, fontWeight: 400 }}>{description}</span>}
      </div>
    </div>
  )
}

export function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      gap={8}
      toastOptions={{ unstyled: true, classNames: { toast: "w-full max-w-sm" } }}
    />
  )
}

export const toast = {
  success: (message: string, description?: string) =>
    sonnerToast.custom(() => <ToastCard icon={<SuccessIcon />} message={message} description={description} />),

  error: (message: string, description?: string) =>
    sonnerToast.custom(() => <ToastCard icon={<ErrorIcon />} message={message} description={description} />),

  message: (message: string, description?: string) =>
    sonnerToast.custom(() => <ToastCard icon={<InfoIcon />} message={message} description={description} />),
}