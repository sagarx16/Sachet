import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { href: '/', label: 'Overview', icon: 'dashboard' },
  { href: '/citizen', label: 'Citizen', icon: 'person' },
  { href: '/responder', label: 'Responder', icon: 'shield' },
  { href: '/admin', label: 'Admin', icon: 'admin_panel_settings' },
  { href: '/login', label: 'Login', icon: 'login' },
];

export default function PortalQuickLinks() {
  const pathname = usePathname();

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 p-2 shadow-sm backdrop-blur-sm">
        {items.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-all ${
                active
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
