const fs = require('fs');

function cleanToJsx(html) {
  let content = html;
  content = content.replace(/\bclass="/g, 'className="');
  content = content.replace(/\bfor="/g, 'htmlFor="');
  content = content.replace(/<(img|input|hr|br)([^>]*?)(?<!\/)>/gi, '<$1$2 />');
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
  content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
  return content;
}

function extractMain(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const m = html.match(/<main[^>]*>([\s\S]*)<\/main>/i);
  return m ? cleanToJsx(m[1]) : '';
}

const overviewRaw = extractMain('/Users/saga16/Desktop/Sachet/scratch/responder_raw.html');
const campsRaw = extractMain('/Users/saga16/Desktop/Sachet/scratch/responder_camps_raw.html');
const dispatchRaw = extractMain('/Users/saga16/Desktop/Sachet/scratch/responder_dispatch_raw.html');
const inventoryRaw = extractMain('/Users/saga16/Desktop/Sachet/scratch/responder_inventory_raw.html');
const reuniteRaw = extractMain('/Users/saga16/Desktop/Sachet/scratch/responder_reunite_raw.html');

const responderCode = `'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../context/AuthContext';

export default function ResponderPage() {
  const { user, openSos, showToast } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'grid_view' },
    { id: 'camps', label: 'Camps & Shelters', icon: 'holiday_village' },
    { id: 'dispatch', label: 'Squad Dispatch', icon: 'assignment_turned_in' },
    { id: 'inventory', label: 'Relief Inventory', icon: 'medical_services' },
    { id: 'reunite', label: 'Kin Reunite', icon: 'family_restroom' },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Navbar activePage="responder" />

      {/* Left Sidebar */}
      <aside className="fixed left-0 top-20 bottom-0 w-64 bg-surface-container-lowest z-40 flex flex-col justify-between p-space-md shadow-[1px_0_8px_rgba(0,0,0,0.02)] border-r border-slate-200/80">
        <nav className="flex flex-col gap-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  showToast(\`Switched to \${tab.label} desk\`, 'info');
                }}
                className={\`flex items-center gap-space-sm px-space-md py-2.5 rounded-xl font-title-md text-sm transition-colors text-left w-full cursor-pointer \${
                  isActive
                    ? 'bg-primary text-white font-bold shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                }\`}
              >
                <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="flex flex-col gap-space-md">
          <button
            onClick={openSos}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-space-md rounded-xl bg-red-100 text-red-700 hover:bg-red-600 hover:text-white transition-all font-label-md text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px] animate-pulse">e911_emergency</span>
            <span>Distress Beacon</span>
          </button>
          <div className="flex items-center justify-between px-space-xs py-space-xs border-t border-surface-container-high pt-space-sm">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="font-label-sm text-[11px] tracking-wider text-slate-500 uppercase font-semibold">
                OPS GRID • LIVE
              </span>
            </div>
            <span className="material-symbols-outlined text-slate-400 text-[16px]">wifi_tethering</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="pl-64 pt-20">
        {activeTab === 'overview' && (
          <main className="relative w-full bg-background min-h-screen px-gutter-desktop py-space-xl">
            ${overviewRaw}
          </main>
        )}

        {activeTab === 'camps' && (
          <main className="relative w-full bg-surface min-h-screen px-gutter-desktop py-space-xl">
            ${campsRaw}
          </main>
        )}

        {activeTab === 'dispatch' && (
          <main className="relative w-full bg-background min-h-screen px-space-xl py-space-xl">
            ${dispatchRaw}
          </main>
        )}

        {activeTab === 'inventory' && (
          <main className="relative w-full bg-background min-h-screen px-space-xl py-space-xl">
            ${inventoryRaw}
          </main>
        )}

        {activeTab === 'reunite' && (
          <main className="relative w-full bg-background min-h-screen px-space-xl py-space-xl">
            ${reuniteRaw}
          </main>
        )}
      </div>
    </div>
  );
}
`;

fs.writeFileSync('/Users/saga16/Desktop/Sachet/app/responder/page.jsx', responderCode, 'utf8');
console.log('Successfully wrote /Users/saga16/Desktop/Sachet/app/responder/page.jsx');
