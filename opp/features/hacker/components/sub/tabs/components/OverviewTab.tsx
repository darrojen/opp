'use client';
import React, { useState, useEffect } from 'react';
import { X, Download, ExternalLink, FileText, Award } from 'lucide-react';
import Image from 'next/image';

type FileItem = {
  id: string;
  name: string;
  type: 'pdf' | 'image';
  url: string;
  thumbnail: string;
  category: string;
  size?: string;
  date?: string;
};

const resume: FileItem = {
  id: 'resume',
  name: 'Resume.pdf',
  type: 'pdf',
  url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  thumbnail: 'https://picsum.photos/id/870/300/380',
  category: 'Resume',
  size: '248 KB',
  date: 'Jan 2025',
};

const certificates: FileItem[] = [
  {
    id: 'cert1',
    name: 'React Developer Certificate',
    type: 'pdf',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    thumbnail: 'https://picsum.photos/id/1015/300/400',
    category: 'Certificate',
    size: '1.2 MB',
    date: 'Dec 2024',
  },
  {
    id: 'cert2',
    name: 'Next.js Advanced Certificate',
    type: 'pdf',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    thumbnail: 'https://picsum.photos/id/106/300/400',
    category: 'Certificate',
    size: '980 KB',
    date: 'Nov 2024',
  },
];

// ─── File Viewer Modal ────────────────────────────────────────────────────────

function FileViewerModal({
  file,
  onClose,
  allFiles,
  onNavigate,
}: {
  file: FileItem;
  onClose: () => void;
  allFiles: FileItem[];
  onNavigate: (file: FileItem) => void;
}) {
  const currentIndex = allFiles.findIndex((f) => f.id === file.id);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentIndex < allFiles.length - 1)
        onNavigate(allFiles[currentIndex + 1]);
      if (e.key === 'ArrowLeft' && currentIndex > 0)
        onNavigate(allFiles[currentIndex - 1]);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex, allFiles, onClose, onNavigate]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      style={{ backgroundColor: 'rgba(15,23,42,0.55)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Modal shell — matches reference: white, rounded-2xl, no inner borders on header */}
      <div
        className="relative w-full bg-white rounded-t-3xl sm:rounded-2xl sm:max-w-4xl sm:mx-6 flex flex-col overflow-hidden"
        style={{
          maxHeight: '92vh',
          boxShadow: '0 32px 64px -12px rgba(15,23,42,0.28), 0 0 0 1px rgba(15,23,42,0.06)',
        }}
      >
        {/* ── Header: title + X (matches reference layout exactly) ── */}
        <div className="flex items-start justify-between px-7 pt-7 pb-5 shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-[#1a2332] leading-tight tracking-tight">
              {file.name}
            </h2>
            <div className="flex items-center gap-2 mt-1.5">
              <span
                className={`text-xs font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
                  file.category === 'Resume'
                    ? 'bg-slate-100 text-slate-500'
                    : 'bg-amber-50 text-amber-600'
                }`}
              >
                {file.category}
              </span>
              {file.size && <span className="text-sm text-gray-400">{file.size}</span>}
              {file.date && <span className="text-sm text-gray-300">·</span>}
              {file.date && <span className="text-sm text-gray-400">{file.date}</span>}
            </div>
          </div>
          <button
            onClick={onClose}
            className="mt-0.5 w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all shrink-0 ml-4"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── File switcher (reference: labelled dropdown-style selector) ── */}
        {allFiles.length > 1 && (
          <div className="px-7 pb-4 shrink-0">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
              Switch file
            </p>
            <div className="flex flex-wrap gap-2">
              {allFiles.map((f) => (
                <button
                  key={f.id}
                  onClick={() => onNavigate(f)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                    f.id === file.id
                      ? 'border-[#1a2332] bg-[#1a2332] text-white'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-900'
                  }`}
                >
                  {f.category === 'Resume' ? (
                    <FileText className="w-4 h-4 shrink-0" />
                  ) : (
                    <Award className="w-4 h-4 shrink-0" />
                  )}
                  {f.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Divider ── */}
        <div className="h-px bg-gray-100 mx-7 shrink-0" />

        {/* ── Document viewer (reference: large bordered content area) ── */}
        <div className="flex-1 overflow-auto px-7 py-6 bg-[#F8F9FA]">
          <div
            className="w-full bg-white rounded-xl overflow-hidden"
            style={{
              border: '1px solid #E5E7EB',
              minHeight: '400px',
            }}
          >
            {file.type === 'pdf' ? (
              <iframe
                src={file.url}
                className="w-full"
                style={{ height: '58vh', border: 'none', display: 'block' }}
                title={file.name}
              />
            ) : (
              <div className="p-6 flex items-center justify-center" style={{ minHeight: 400 }}>
                <Image
                  src={file.url}
                  alt={file.name}
                  width={1200}
                  height={900}
                  className="max-w-full object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {/* ── Footer CTA — matches reference: full-width dark navy button ── */}
        <div className="px-7 pb-7 pt-4 shrink-0 bg-white">
          <div className="flex gap-3">
            <a
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Open in new tab
            </a>
            <a
              href={file.url}
              download
              className="flex-1 flex items-center justify-center gap-2.5 py-3.5 text-[15px] font-semibold rounded-xl text-white transition-all hover:opacity-90 active:scale-[0.99]"
              style={{ backgroundColor: '#1a2332' }}
            >
              <Download className="w-4.5 h-4.5" />
              Download {file.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Document Card ────────────────────────────────────────────────────────────

// function DocumentCard({
//   file,
//   onOpen,
//   priority = false,
// }: {
//   file: FileItem;
//   onOpen: (file: FileItem) => void;
//   priority?: boolean;
// }) {
//   return (
//     <button
//       onClick={() => onOpen(file)}
//       className="group text-left w-full bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
//     >
//       {/* Thumbnail */}
//       <div className="relative h-52 bg-gray-50 overflow-hidden">
//         <Image
//           src={file.thumbnail}
//           alt={file.name}
//           width={320}
//           height={420}
//           priority={priority}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         {/* Scrim */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

//         {/* Category badge */}
//         <span
//           className={`
//             absolute top-4 left-4 text-[11px] font-semibold uppercase tracking-wider
//             px-2.5 py-1 rounded-full
//             ${
//               file.category === 'Resume'
//                 ? 'bg-white/90 text-gray-800'
//                 : 'bg-amber-400/90 text-amber-900'
//             }
//           `}
//         >
//           {file.category}
//         </span>

//         {/* Quick-open hint */}
//         <span className="absolute bottom-4 right-4 flex items-center gap-1 text-[11px] font-medium text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//           Preview <ExternalLink className="w-3 h-3" />
//         </span>
//       </div>

//       {/* Body */}
//       <div className="px-5 py-4">
//         <p className="font-semibold text-gray-900 text-[15px] leading-snug line-clamp-2 mb-1.5">
//           {file.name}
//         </p>
//         <div className="flex items-center gap-2 text-xs text-gray-400">
//           {file.size && <span>{file.size}</span>}
//           {file.size && file.date && <span>·</span>}
//           {file.date && <span>{file.date}</span>}
//         </div>
//       </div>
//     </button>
//   );
// }
function DocumentCard({
  file,
  onOpen,
  priority = false,
}: {
  file: FileItem;
  onOpen: (file: FileItem) => void;
  priority?: boolean;
}) {
  return (
    <button
      onClick={() => onOpen(file)}
      className="
        w-full text-left group
        rounded-2xl border border-gray-200
        bg-gray-50/70
        hover:bg-white
        hover:border-gray-300
        hover:shadow-md
        transition-all duration-200
        p-4 sm:p-5
        flex flex-col sm:flex-row gap-4
        items-start sm:items-center
      "
    >
      {/* Thumbnail / Icon */}
      <div className="shrink-0">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-yellow-400 flex items-center justify-center">
          <Image
            src={file.thumbnail}
            alt={file.name}
            width={64}
            height={64}
            priority={priority}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Title */}
        <p className="font-semibold text-gray-900 text-sm sm:text-base leading-snug line-clamp-2">
          {file.name}
        </p>

        {/* Subtitle / meta */}
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          {file.date || "No date"} {file.size && `• ${file.size}`}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {file.category && (
            <span className="px-3 py-1 text-xs rounded-full border border-gray-200 bg-white text-gray-600">
              {file.category}
            </span>
          )}

          
        </div>
      </div>

      {/* Right action (optional) */}
      <div className="hidden sm:flex items-center text-gray-400 group-hover:text-gray-600 transition">
        →
      </div>
    </button>
  );
}
// ─── Main Component ───────────────────────────────────────────────────────────

const OverviewTab = () => {
  const allFiles: FileItem[] = [resume, ...certificates];
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);

  return (
    <div className="space-y-14 pb-12 text-black">

      {/* ── About Me ── */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-900">About me</h2>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3">
          <p className="text-[16px] leading-relaxed text-gray-700">
            Hello, I&apos;m{' '}
            <span className="font-semibold text-gray-900">Nurmukhammet Altybaev</span> — a
            Frontend Developer focused on building clean, scalable, and modern web applications.
          </p>
          <p className="text-[16px] leading-relaxed text-gray-700">
            I value structure, performance, and long-term maintainability over hype. My craft lives
            at the intersection of thoughtful engineering and refined user experience.
          </p>
        
        </div>
      </section>

      {/* ── Documents ── */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Documents</h2>
          <span className="text-sm text-gray-400">{allFiles.length} files</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          <DocumentCard file={resume} onOpen={setSelectedFile} priority />
          {certificates.map((cert) => (
            <DocumentCard key={cert.id} file={cert} onOpen={setSelectedFile} />
          ))}
        </div>
      </section>

      {/* ── File Viewer Modal ── */}
      {selectedFile && (
        <FileViewerModal
          file={selectedFile}
          onClose={() => setSelectedFile(null)}
          allFiles={allFiles}
          onNavigate={setSelectedFile}
        />
      )}
    </div>
  );
};

export default OverviewTab;