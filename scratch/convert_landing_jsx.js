const fs = require('fs');

const raw = fs.readFileSync('/Users/saga16/Desktop/Sachet/scratch/landing_raw.html', 'utf8');

// Extract between </header> and </body>
const bodyMatch = raw.match(/<\/header>([\s\S]*?)<\/body>/i);
let content = bodyMatch ? bodyMatch[1] : '';

// 1. Convert class -> className
content = content.replace(/\bclass="/g, 'className="');

// 2. Convert for -> htmlFor
content = content.replace(/\bfor="/g, 'htmlFor="');

// 3. Fix self-closing tags
content = content.replace(/<(img|input|hr|br)([^>]*?)(?<!\/)>/gi, '<$1$2 />');

// 4. Fix style attributes like style="font-variation-settings: 'FILL' 1;"
content = content.replace(/style="font-variation-settings:\s*'FILL'\s*1;?"/gi, 'style={{ fontVariationSettings: "\x27FILL\x27 1" }}');
content = content.replace(/style="([^"]*)"/gi, (m, val) => {
  const pairs = val.split(';').filter(p => p.trim());
  const obj = pairs.map(p => {
    const [k, v] = p.split(':');
    if (!k || !v) return '';
    const camel = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
    return `${camel}: "${v.trim()}"`;
  }).filter(Boolean).join(', ');
  return `style={{ ${obj} }}`;
});

// 5. Replace anchor links with Next.js Link or button triggers
content = content.replace(/href="#emergency-sos"/gi, 'onClick={openSos} href="javascript:void(0)"');
content = content.replace(/href="#helpline"/gi, 'onClick={openSos} href="javascript:void(0)"');
content = content.replace(/href="#report"/gi, 'href="/citizen"');
content = content.replace(/href="#report-incident"/gi, 'href="/citizen"');
content = content.replace(/href="#sensor-grid"/gi, 'href="/admin"');

// 6. Replace the Hero action buttons cluster with role launch cards
const heroActionCluster = `
<!-- Primary Action Cluster -->
<div className="flex flex-col items-center gap-4 w-full max-w-3xl mb-space-3xl">
  <div className="flex flex-wrap items-center justify-center gap-3 w-full">
    {/* Emergency SOS Dispatch */}
    <button
      onClick={openSos}
      className="relative group flex items-center justify-center gap-space-xs px-space-xl py-3.5 rounded-xl bg-gradient-to-r from-[#dc2626] to-[#ea580c] text-white font-label-md text-label-md font-bold shadow-lg shadow-red-600/20 hover:shadow-red-600/35 transition-all duration-300 transform active:scale-95 cursor-pointer"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>sos</span>
      <span>Emergency SOS Dispatch</span>
    </button>

    {/* Sign In Gateway Link */}
    <Link
      href="/login"
      className="flex items-center justify-center gap-space-xs px-space-xl py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-container text-white font-label-md text-label-md font-bold shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 transition-all duration-300 transform active:scale-95"
    >
      <span className="material-symbols-outlined text-[20px]">account_circle</span>
      <span>Log In / Register Gateway</span>
    </Link>
  </div>

  {/* Role Navigation Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mt-2">
    <Link
      href="/citizen"
      className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-indigo-500 hover:shadow-md transition-all group"
    >
      <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center group-hover:bg-indigo-700 group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-[22px]">person_pin_circle</span>
      </div>
      <div className="text-left">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Citizen</div>
        <div className="text-sm font-bold text-slate-800 group-hover:text-primary">Alerts & Shelters &rarr;</div>
      </div>
    </Link>

    <Link
      href="/responder"
      className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-md transition-all group"
    >
      <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center group-hover:bg-sky-700 group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-[22px]">emergency</span>
      </div>
      <div className="text-left">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Responder</div>
        <div className="text-sm font-bold text-slate-800 group-hover:text-secondary">Field Hub & Camps &rarr;</div>
      </div>
    </Link>

    <Link
      href="/admin"
      className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-purple-500 hover:shadow-md transition-all group"
    >
      <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center group-hover:bg-purple-700 group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-[22px]">shield_person</span>
      </div>
      <div className="text-left">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Government</div>
        <div className="text-sm font-bold text-slate-800 group-hover:text-purple-700">Command Desk &rarr;</div>
      </div>
    </Link>
  </div>
</div>
`;

content = content.replace(/<!-- Primary Action Cluster -->[\s\S]*?<!-- Live Flood Risk Banner Card -->/i, heroActionCluster + '\n{/* Live Flood Risk Banner Card */}');

// Fix any raw HTML comments to JSX comments
content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

const pageCode = `'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

export default function LandingPage() {
  const { openSos } = useAuth();

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Navbar activePage="overview" />
      ${content}
    </div>
  );
}
`;

fs.writeFileSync('/Users/saga16/Desktop/Sachet/app/page.jsx', pageCode, 'utf8');
console.log('Successfully wrote /Users/saga16/Desktop/Sachet/app/page.jsx');
