const fs = require('fs');

const raw = fs.readFileSync('/Users/saga16/Desktop/Sachet/scratch/admin_raw.html', 'utf8');

// Extract between </header> and </body>
const bodyMatch = raw.match(/<\/header>([\s\S]*?)<\/body>/i);
let content = bodyMatch ? bodyMatch[1] : '';

// 1. Convert class -> className
content = content.replace(/\bclass="/g, 'className="');

// 2. Convert for -> htmlFor
content = content.replace(/\bfor="/g, 'htmlFor="');

// 3. Fix self-closing tags
content = content.replace(/<(img|input|hr|br)([^>]*?)(?<!\/)>/gi, '<$1$2 />');

// 4. Fix style attributes
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

// 5. Connect buttons
content = content.replace(/data-path="sos-center"/gi, 'onClick={openSos}');

// 6. Connect Gate controls & CAP broadcast triggers
content = content.replace(/Discharge Gate Controls/gi, '<span onClick={handleGateSimulation} className="cursor-pointer">Discharge Gate Controls</span>');
content = content.replace(/National Alert Broadcast/gi, '<span onClick={() => setIsBroadcastModalOpen(true)} className="cursor-pointer">National Alert Broadcast</span>');

// Fix raw HTML comments
content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

const pageCode = `'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../context/AuthContext';

export default function AdminPage() {
  const { user, openSos, showToast } = useAuth();
  const [isBroadcastModalOpen, setIsBroadcastModalOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('RED ALERT (Immediate Evacuation Order)');

  const handleGateSimulation = () => {
    showToast('Koshi Barrage: Gates 12 to 28 opened to 6.2m. Flow rate increased to 385,000 cusecs.', 'warning');
  };

  const handleSendBroadcast = () => {
    setIsBroadcastModalOpen(false);
    showToast('CAP Broadcast transmitted to 4.2M citizens across Bihar & Nepal border corridors!', 'success');
  };

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Navbar activePage="admin" />

      {/* Floating Action Ribbon for Admin */}
      <div className="fixed bottom-20 right-6 z-40 flex items-center gap-2">
        <button
          onClick={handleGateSimulation}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs shadow-xl transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">valve</span>
          <span>Gate Telemetry</span>
        </button>

        <button
          onClick={() => setIsBroadcastModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-xl shadow-red-600/30 transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px] animate-pulse">cell_tower</span>
          <span>CAP Broadcast</span>
        </button>
      </div>

      {/* CAP Broadcast Modal */}
      {isBroadcastModalOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-red-600 text-[24px]">campaign</span>
                <h3 className="font-bold text-lg text-slate-800">Transmit National CAP Emergency Broadcast</h3>
              </div>
              <button
                onClick={() => setIsBroadcastModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-800 text-xs">
                <strong>CRITICAL TARGETING:</strong> Cross-Border Koshi & Gandak Corridors (4.2M cell towers, FM transmitters, SMS gateways).
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Alert Severity</label>
                <select
                  value={alertSeverity}
                  onChange={(e) => setAlertSeverity(e.target.value)}
                  className="w-full text-sm rounded-xl border-slate-300"
                >
                  <option>RED ALERT (Immediate Evacuation Order)</option>
                  <option>ORANGE ALERT (Standby & Secure Livestock)</option>
                  <option>YELLOW WATCH (River Swell Approaching Warning)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">CAP Alert Message (Bilingual)</label>
                <textarea
                  rows={3}
                  className="w-full text-sm rounded-xl border-slate-300"
                  readOnly
                  value="RED ALERT: Koshi Barrage discharge will exceed 420,000 cusecs at 19:00 hrs. Evacuate low-lying sectors of Supaul, Saharsa, and Sunsari immediately. Move to nearest designated safe camp."
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 mt-4">
              <button
                type="button"
                onClick={() => setIsBroadcastModalOpen(false)}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSendBroadcast}
                className="px-5 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-md flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[18px]">cell_tower</span>
                <span>Broadcast Immediately</span>
              </button>
            </div>
          </div>
        </div>
      )}

      ${content}
    </div>
  );
}
`;

fs.writeFileSync('/Users/saga16/Desktop/Sachet/app/admin/page.jsx', pageCode, 'utf8');
console.log('Successfully wrote /Users/saga16/Desktop/Sachet/app/admin/page.jsx');
