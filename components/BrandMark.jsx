export default function BrandMark({ compact = false, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-700 via-indigo-800 to-blue-900 shadow-[0_14px_30px_rgba(49,46,129,0.28)] ring-1 ring-white/70">
        <svg viewBox="0 0 100 100" className="h-8 w-8" aria-hidden="true">
          <defs>
            <linearGradient id="shield-fill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E2B92" />
              <stop offset="100%" stopColor="#2A1D7B" />
            </linearGradient>
            <linearGradient id="water-fill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#67E8F9" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>
          <path d="M50 8L18 22v26c0 21 12 34 32 42 20-8 32-21 32-42V22L50 8Z" fill="url(#shield-fill)" />
          <path d="M50 8L18 22v26c0 21 12 34 32 42 20-8 32-21 32-42V22L50 8Z" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2.2" />
          <path d="M50 24c-12 10-22 20-22 31 0 15 10 24 22 29 12-5 22-14 22-29 0-11-10-21-22-31Z" fill="url(#water-fill)" opacity="0.9" />
          <path d="M28 60c8-8 18-12 22-12 4 0 14 4 22 12-7 9-16 14-22 14s-15-5-22-14Z" fill="#7DD3FC" opacity="0.65" />
          <path d="M39 30c5 5 7 11 11 15 4-4 7-10 11-15-4-3-8-4-11-4-3 0-7 1-11 4Z" fill="#DFF7FF" opacity="0.95" />
          <path d="M40 32c3 3 6 7 10 10 4-3 7-7 10-10" fill="none" stroke="#E0F2FE" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="44" r="4" fill="#F8FAFC" />
        </svg>
      </div>

      {!compact && (
        <div className="flex flex-col leading-none">
          <span className="text-[1.7rem] font-black tracking-[0.015em] text-slate-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.7)]">Sachet</span>
        </div>
      )}
    </div>
  );
}
