const fs = require('fs');

const raw = fs.readFileSync('/Users/saga16/Desktop/Sachet/scratch/citizen_raw.html', 'utf8');

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
content = content.replace(/href="#sos-direct"/gi, 'onClick={openSos} href="javascript:void(0)"');
content = content.replace(/href="tel:1078"/gi, 'onClick={() => showToast("Connecting to 1078 - NDRF Disaster Helpline...", "info")} href="javascript:void(0)"');
content = content.replace(/href="tel:1070"/gi, 'onClick={() => showToast("Connecting to 1070 - Bihar SDRF...", "info")} href="javascript:void(0)"');
content = content.replace(/href="tel:1149"/gi, 'onClick={() => showToast("Connecting to 1149 - Nepal APF...", "info")} href="javascript:void(0)"');
content = content.replace(/href="tel:112"/gi, 'onClick={() => showToast("Connecting to 112 - National Emergency...", "info")} href="javascript:void(0)"');

// Fix raw HTML comments
content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

const pageCode = `'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../context/AuthContext';

export default function CitizenPage() {
  const { user, openSos, showToast } = useAuth();
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportType, setReportType] = useState('waterlogging');
  const [reportLocation, setReportLocation] = useState('Supaul Sector 4, near NH-57');
  const [waterDepth, setWaterDepth] = useState('4.5');
  const [reportDesc, setReportDesc] = useState('');

  const handleReportSubmit = (e) => {
    e.preventDefault();
    setIsReportModalOpen(false);
    showToast('Incident report logged successfully! Forwarded to NDRF Squad 9.', 'success');
  };

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Navbar activePage="citizen" />

      {/* Incident Report Trigger Floating Button */}
      <div className="fixed bottom-20 right-6 z-40">
        <button
          onClick={() => setIsReportModalOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-primary hover:bg-primary-container text-white font-bold text-xs shadow-xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">add_alert</span>
          <span>Report Flood Damage</span>
        </button>
      </div>

      {/* Incident Reporting Modal */}
      {isReportModalOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-indigo-600 text-[24px]">report_problem</span>
                <h3 className="font-bold text-lg text-slate-800">Submit Flood Incident / SOS Report</h3>
              </div>
              <button
                onClick={() => setIsReportModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <form onSubmit={handleReportSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Incident Category</label>
                <select
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="w-full text-sm rounded-xl border-slate-300 focus:border-indigo-600 focus:ring-indigo-600"
                >
                  <option value="waterlogging">Severe Waterlogging / Road Inundated</option>
                  <option value="trapped">People Trapped / Require Boat Evacuation</option>
                  <option value="dyke">Embankment / Dyke Seepage or Breach</option>
                  <option value="medical">Medical Emergency in Flood Zone</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Location / Landmark</label>
                <input
                  type="text"
                  value={reportLocation}
                  onChange={(e) => setReportLocation(e.target.value)}
                  className="w-full text-sm rounded-xl border-slate-300 focus:border-indigo-600 focus:ring-indigo-600"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Estimated Water Depth (Feet)</label>
                <input
                  type="number"
                  min="1"
                  max="25"
                  step="0.5"
                  value={waterDepth}
                  onChange={(e) => setWaterDepth(e.target.value)}
                  className="w-full text-sm rounded-xl border-slate-300 focus:border-indigo-600 focus:ring-indigo-600"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Urgent Description</label>
                <textarea
                  rows="3"
                  value={reportDesc}
                  onChange={(e) => setReportDesc(e.target.value)}
                  className="w-full text-sm rounded-xl border-slate-300 focus:border-indigo-600 focus:ring-indigo-600"
                  placeholder="Number of family members, elderly/children, power cuts..."
                ></textarea>
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsReportModalOpen(false)}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-sm font-bold text-white bg-indigo-700 hover:bg-indigo-800 rounded-xl shadow-md"
                >
                  Dispatch to NDRF Hub
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      ${content}
    </div>
  );
}
`;

fs.writeFileSync('/Users/saga16/Desktop/Sachet/app/citizen/page.jsx', pageCode, 'utf8');
console.log('Successfully wrote /Users/saga16/Desktop/Sachet/app/citizen/page.jsx');
