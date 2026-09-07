'use client';

import React from 'react';
import Link from 'next/link';
import BrandMark from './BrandMark';

export default function Navbar() {
  return (
    <header className="relative w-full z-50 h-20 bg-white/95 backdrop-blur-xl border-b border-[#E2E8F0] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <div className="h-full w-full px-margin-desktop flex items-center justify-center">
        <Link href="/" className="flex items-center gap-space-sm hover:opacity-90 transition-opacity">
            <BrandMark compact />
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-sm text-headline-sm text-slate-900 font-extrabold tracking-tight">Sachet</span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">| जलरक्षा</span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-widest">IN-NP Disaster Grid</span>
            </div>
        </Link>
      </div>
    </header>
  );
}
