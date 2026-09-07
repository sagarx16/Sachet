'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandMark from './BrandMark';

const navLinks = [
  { href: '/', label: 'Overview', icon: 'home', exact: true },
  {
    href: '/citizen',
    label: 'Citizen Portal',
    icon: 'person_pin_circle',
    activeColor: 'text-indigo-700',
    activeBg: 'bg-indigo-50 border-indigo-200',
    indicatorColor: 'bg-indigo-600',
  },
  {
    href: '/responder',
    label: 'Responder Hub',
    icon: 'emergency',
    activeColor: 'text-sky-700',
    activeBg: 'bg-sky-50 border-sky-200',
    indicatorColor: 'bg-sky-600',
  },
  {
    href: '/admin',
    label: 'Admin Desk',
    icon: 'shield_person',
    activeColor: 'text-purple-700',
    activeBg: 'bg-purple-50 border-purple-200',
    indicatorColor: 'bg-purple-600',
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isCitizenPortal = pathname === '/citizen';

  const isActive = (link) => {
    if (link.exact) return pathname === link.href;
    return pathname.startsWith(link.href);
  };

  if (isCitizenPortal) return null;

  return (
    <>
      <header className="sticky top-0 w-full z-50 h-16 bg-white/95 backdrop-blur-xl border-b border-[#E2E8F0] shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
        <div className="h-full w-full px-4 md:px-8 flex items-center justify-between gap-4 max-w-screen-2xl mx-auto">

          <Link href="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity shrink-0">
              <BrandMark compact />
              <div className="flex flex-col leading-none">
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-extrabold tracking-tight text-slate-900">Sachet</span>
                  <span className="text-base font-bold tracking-tight text-primary">| जलरक्षा</span>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-secondary mt-0.5">
                  IN-NP Disaster Grid
                </span>
              </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                    active
                      ? `${link.activeColor || 'text-slate-900'} ${link.activeBg || 'bg-slate-100 border-slate-200'} shadow-sm`
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-transparent'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[18px] transition-all ${active ? 'opacity-100' : 'opacity-70'}`}
                    style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                  {active && (
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[1px] w-6 h-0.5 rounded-full ${link.indicatorColor || 'bg-slate-600'}`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Live status pill */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Grid Live</span>
            </div>

            <Link
              href="/login"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary text-white text-sm font-bold shadow-sm hover:bg-indigo-700 transition-colors"
            >
              <span className="material-symbols-outlined text-[17px]">account_circle</span>
              <span className="hidden sm:inline">Sign In</span>
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl hover:bg-slate-100 text-slate-600 transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[22px]">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white border-b border-[#E2E8F0] shadow-lg px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  active
                    ? `${link.activeColor || 'text-slate-900'} ${link.activeBg || 'bg-slate-100'} border`
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[20px]"
                  style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
                >
                  {link.icon}
                </span>
                <span>{link.label}</span>
                {active && (
                  <span className={`ml-auto w-2 h-2 rounded-full ${link.indicatorColor || 'bg-slate-600'}`} />
                )}
              </Link>
            );
          })}
          <div className="border-t border-slate-100 mt-1 pt-2">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-white bg-primary hover:bg-indigo-700 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">account_circle</span>
              <span>Sign In / Register</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
