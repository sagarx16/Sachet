'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function QuickNav() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: '🏠 Home', title: 'Landing Page' },
    { href: '/login', label: '🔐 Auth', title: 'Role Gateway' },
    { href: '/citizen', label: '👤 Citizen', title: 'Citizen Flood Alerts' },
    { href: '/responder', label: '🚁 Responder', title: 'Field Operations' },
    { href: '/admin', label: '🏛️ Admin', title: 'Command Desk' },
  ];

  return (
    <div className="fixed bottom-4 left-4 z-[9990] flex items-center gap-1.5 p-1.5 bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 text-white text-xs">
      <div className="flex items-center gap-1 px-2 py-1 text-slate-400 font-mono text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="hidden sm:inline">PAGES:</span>
      </div>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            title={link.title}
            className={`px-2.5 py-1.5 rounded-xl transition-all font-semibold ${
              isActive
                ? 'bg-primary text-white shadow-sm'
                : 'hover:bg-white/10 text-slate-200'
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
