import BrandMark from './BrandMark';

export default function SidebarBrand() {
  return (
    <div className="px-3 pb-4 mb-3 border-b border-slate-200">
      <div className="flex items-center gap-2">
        <BrandMark compact />
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1">
            <span className="text-base font-extrabold tracking-tight text-slate-900">Sachet</span>
            <span className="text-sm font-bold tracking-tight text-primary">| जलरक्षा</span>
          </div>
          <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-secondary">IN-NP Disaster Grid</span>
        </div>
      </div>
    </div>
  );
}
