export default function BrandMark({ compact = false, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src="/logo.svg" alt="Sachet shield logo" className="h-11 w-10 object-contain" />

      {!compact && (
        <div className="flex flex-col leading-none">
          <span className="text-[1.7rem] font-black tracking-[0.015em] text-slate-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.7)]">Sachet</span>
        </div>
      )}
    </div>
  );
}
