// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { IoClose, IoSend } from 'react-icons/io5';
// import { VscVerifiedFilled } from 'react-icons/vsc';
// import { MdOpenInFull } from 'react-icons/md';
// import { HiDotsHorizontal } from 'react-icons/hi';
// import { useRouter } from 'next/navigation';

// interface Message {
//   id: number;
//   from: 'me' | 'them';
//   text: string;
//   time: string;
// }

// interface MessageModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   recipientName: string;
//   recipientHandle?: string;
//   recipientAvatar?: string;
//   isVerified?: boolean;
// }

// export default function MessageModal({
//   isOpen,
//   onClose,
//   recipientName,
//   recipientHandle,
//   recipientAvatar,
//   isVerified = false,
// }: MessageModalProps) {
//   const router = useRouter();
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState('');
//   const bottomRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   // Lock body scroll when open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//       setTimeout(() => inputRef.current?.focus(), 350);
//     } else {
//       document.body.style.overflow = '';
//     }
//     return () => { document.body.style.overflow = ''; };
//   }, [isOpen]);

//   // Scroll to bottom on new message
//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   // Close on Escape
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
//     window.addEventListener('keydown', onKey);
//     return () => window.removeEventListener('keydown', onKey);
//   }, [onClose]);

//   const sendMessage = () => {
//     if (!input.trim()) return;
//     setMessages((prev) => [
//       ...prev,
//       {
//         id: Date.now(),
//         from: 'me',
//         text: input.trim(),
//         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//       },
//     ]);
//     setInput('');
//   };

//   const initials = recipientName
//     .split(' ')
//     .map((w) => w[0])
//     .join('')
//     .slice(0, 2)
//     .toUpperCase();

//   return (
//     <>
//       {/* Backdrop */}
//       <div
//         onClick={onClose}
//         className={`
//           fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]
//           transition-opacity duration-300
//           ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
//         `}
//         aria-hidden="true"
//       />

//       {/* Panel */}
//       <div
//         role="dialog"
//         aria-modal="true"
//         aria-label={`Message ${recipientName}`}
//         className={`
//           fixed top-0 right-0 z-50 h-screen w-[380px] max-w-full
//           bg-white flex flex-col
//           shadow-[-8px_0_40px_rgba(0,0,0,0.10)]
//           transition-transform duration-[340ms] ease-[cubic-bezier(0.4,0,0.2,1)]
//           ${isOpen ? 'translate-x-0' : 'translate-x-full'}
//         `}
//       >
//         {/* ── Header ── */}
//         <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-white flex-shrink-0">
//           {/* Back */}
//           <button
//             onClick={onClose}
//             className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
//           >
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           {/* Avatar */}
//           <div className="relative flex-shrink-0">
//             {recipientAvatar ? (
//               <img
//                 src={recipientAvatar}
//                 alt={recipientName}
//                 className="w-10 h-10 rounded-full object-cover border border-gray-200"
//               />
//             ) : (
//               <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white bg-gradient-to-br from-orange-500 to-orange-300">
//                 {initials}
//               </div>
//             )}
//             <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-white" />
//           </div>

//           {/* Name + handle */}
//           <div className="flex-1 min-w-0">
//             <div className="flex items-center gap-1">
//               <span className="text-sm font-bold text-gray-900 truncate">{recipientName}</span>
//               {isVerified && <VscVerifiedFilled className="w-4 h-4 text-orange-500 flex-shrink-0" />}
//             </div>
//             {recipientHandle && (
//               <span className="text-xs text-gray-400 truncate block">{recipientHandle}</span>
//             )}
//           </div>

//           {/* Actions */}
//           <div className="flex items-center gap-0.5">
//             <button className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
//               <HiDotsHorizontal size={18} />
//             </button>
//             <button
//               onClick={() => router.push('/messages')}
//               className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
//               title="Open full messages"
//             >
//               <MdOpenInFull size={16} />
//             </button>
//             <button
//               onClick={onClose}
//               className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
//             >
//               <IoClose size={18} />
//             </button>
//           </div>
//         </div>

//         {/* ── Message area ── */}
//         <div className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-3">
//           {messages.length === 0 && (
//             <div className="flex flex-col items-center justify-center h-full gap-3 text-center select-none">
//               <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
//                 <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#f97316" strokeWidth={1.6}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-gray-700">No messages yet</p>
//                 <p className="text-xs text-gray-400 mt-0.5">Send a message to start the conversation</p>
//               </div>
//             </div>
//           )}

//           {messages.map((msg) => (
//             <div
//               key={msg.id}
//               className={`flex flex-col max-w-[78%] gap-1 ${msg.from === 'me' ? 'self-end items-end' : 'self-start items-start'}`}
//             >
//               <div
//                 className={`px-4 py-2.5 text-sm leading-relaxed rounded-2xl ${
//                   msg.from === 'me'
//                     ? 'bg-gray-900 text-white rounded-br-sm'
//                     : 'bg-gray-100 text-gray-800 rounded-bl-sm'
//                 }`}
//               >
//                 {msg.text}
//               </div>
//               <span className="text-[10px] text-gray-400 px-1">{msg.time}</span>
//             </div>
//           ))}
//           <div ref={bottomRef} />
//         </div>

//         {/* ── Input ── */}
//         <div className="flex items-center gap-2 px-4 py-3 border-t border-gray-100 bg-white flex-shrink-0">
//           <input
//             ref={inputRef}
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
//             placeholder="Write a Message"
//             className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
//           />
//           <button
//             onClick={sendMessage}
//             disabled={!input.trim()}
//             className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
//           >
//             <IoSend size={15} />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }



'use client';

import { useEffect, useRef, useState } from 'react';
import { IoClose, IoSend } from 'react-icons/io5';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { MdOpenInFull } from 'react-icons/md';
import { HiDotsHorizontal } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

interface Message {
  id: number;
  from: 'me' | 'them';
  text: string;
  time: string;
}

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipientName: string;
  recipientHandle?: string;
  recipientAvatar?: string | null;
  isVerified?: boolean;
}

export default function MessageModal({
  isOpen,
  onClose,
  recipientName,
  recipientHandle,
  recipientAvatar,
  isVerified = false,
}: MessageModalProps) {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 350);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        from: 'me',
        text: input.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setInput('');
  };

  const initials = recipientName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]
          transition-opacity duration-300
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Message ${recipientName}`}
        className={`
          fixed top-0 right-0 z-50 h-screen w-[380px] max-w-full
          bg-white flex flex-col
          shadow-[-8px_0_40px_rgba(0,0,0,0.10)]
          transition-transform duration-[340ms] ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* ── Header ── */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-white flex-shrink-0">
          {/* Back */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Avatar */}
          <div className="relative flex-shrink-0">
            {recipientAvatar ? (
              <img
                src={recipientAvatar}
                alt={recipientName}
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
            ) : (
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white bg-gradient-to-br from-orange-500 to-orange-300">
                {initials}
              </div>
            )}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-white" />
          </div>

          {/* Name + handle */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-gray-900 truncate">{recipientName}</span>
              {isVerified && <VscVerifiedFilled className="w-4 h-4 text-orange-500 flex-shrink-0" />}
            </div>
            {recipientHandle && (
              <span className="text-xs text-gray-400 truncate block">{recipientHandle}</span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-0.5">
            <button className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
              <HiDotsHorizontal size={18} />
            </button>
            <button
              onClick={() => router.push('/messages')}
              className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
              title="Open full messages"
            >
              <MdOpenInFull size={16} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <IoClose size={18} />
            </button>
          </div>
        </div>

        {/* ── Message area ── */}
        <div className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-3">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center select-none">
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#f97316" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">No messages yet</p>
                <p className="text-xs text-gray-400 mt-0.5">Send a message to start the conversation</p>
              </div>
            </div>
          )}

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col max-w-[78%] gap-1 ${msg.from === 'me' ? 'self-end items-end' : 'self-start items-start'}`}
            >
              <div
                className={`px-4 py-2.5 text-sm leading-relaxed rounded-2xl ${
                  msg.from === 'me'
                    ? 'bg-gray-900 text-white rounded-br-sm'
                    : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-gray-400 px-1">{msg.time}</span>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* ── Input ── */}
        <div className="flex items-center gap-2 px-4 py-3 border-t border-gray-100 bg-white flex-shrink-0">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Write a Message"
            className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim()}
            className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <IoSend size={15} />
          </button>
        </div>
      </div>
    </>
  );
}