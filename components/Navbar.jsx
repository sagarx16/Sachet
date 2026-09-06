'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ activePage = 'overview' }) {
  const pathname = usePathname();
  const { user, logout, openSos } = useAuth();

  const rolePaths = {
    citizen: '/citizen',
    responder: '/responder',
    admin: '/admin',
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/95 backdrop-blur-xl border-b border-[#E2E8F0] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <div className="h-full w-full px-margin-desktop flex items-center justify-between gap-space-lg">
        {/* Brand Logo */}
        <div className="flex items-center gap-space-xl">
          <Link href="/" className="flex items-center gap-space-sm hover:opacity-90 transition-opacity">
            <img
              alt="Sachet Emblem"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1UTJm79yxpbIABqzRjDtIkwtCnKmRMt58ssFi8rRpUdhMk0SpB2wP1UIPF0XVKi37jzz0mAzOJSBmieQeyVGBg5M6ZFa01i6Wdyan0tR_N_bo5t5raIBxUC7xtrW7heUwGDvCc112BVTFg7DnssB6C2c4SBU3IztEX0XkGut6e-c_9xGCoTCWzZGlZZBnq9Y-aoMaiIAQH34ClPO227JgWSTF27716AdAxemMPRL4dEUsMdZvajnuiaZ9_7"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-sm text-headline-sm text-slate-900 font-extrabold tracking-tight">Sachet</span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">| जलरक्षा</span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-widest">IN-NP Disaster Grid</span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 bg-slate-100/80 rounded-full border border-slate-200/80">
          <Link
            href="/"
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-label-md text-label-md transition-all ${
              pathname === '/'
                ? 'bg-white text-primary font-bold shadow-sm'
                : 'text-slate-600 hover:text-primary hover:bg-white/60 font-semibold'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">dashboard</span>
            <span>Overview</span>
          </Link>

          <Link
            href="/citizen"
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-label-md text-label-md transition-all ${
              pathname === '/citizen'
                ? 'bg-white text-primary font-bold shadow-sm'
                : 'text-slate-600 hover:text-primary hover:bg-white/60 font-semibold'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
            <span>Citizen Portal</span>
          </Link>

          <Link
            href="/responder"
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-label-md text-label-md transition-all ${
              pathname === '/responder'
                ? 'bg-white text-primary font-bold shadow-sm'
                : 'text-slate-600 hover:text-primary hover:bg-white/60 font-semibold'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">shield</span>
            <span>Responder Hub</span>
          </Link>

          <Link
            href="/admin"
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-label-md text-label-md transition-all ${
              pathname === '/admin'
                ? 'bg-white text-primary font-bold shadow-sm'
                : 'text-slate-600 hover:text-primary hover:bg-white/60 font-semibold'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
            <span>Admin Desk</span>
          </Link>
        </nav>

        {/* Action & Auth Area */}
        <div className="flex items-center gap-space-md">
          {/* Emergency SOS */}
          <button
            onClick={openSos}
            className="relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-label-md text-label-md font-bold shadow-sm shadow-red-600/25 transition-all active:scale-95 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span>SOS 24/7</span>
          </button>

          {/* User Auth Info */}
          {user.isLoggedIn ? (
            <div className="flex items-center gap-2">
              <Link
                href={rolePaths[user.role] || '/citizen'}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-primary font-label-md text-xs font-bold hover:bg-indigo-100 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                <span>{user.name.split(' ')[0]} ({user.role})</span>
              </Link>
              <button
                onClick={logout}
                className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                title="Sign Out"
              >
                <span className="material-symbols-outlined text-[18px]">logout</span>
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary-container text-white font-label-md text-label-md font-bold shadow-md shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">login</span>
              <span>Log In / Sign Up</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
