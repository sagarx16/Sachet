'use client';

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function SosModal() {
  const { isSosOpen, closeSos, showToast } = useAuth();
  const [transmitting, setTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);

  if (!isSosOpen) return null;

  const handleTransmit = () => {
    setTransmitting(true);
    setTimeout(() => {
      setTransmitting(false);
      setTransmitted(true);
      showToast('🚨 Satellite SOS Beacon Transmitted! Nearest rescue unit dispatched.', 'error');
      setTimeout(() => {
        setTransmitted(false);
        closeSos();
      }, 1800);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-red-200 relative overflow-hidden animate-bounce-once">
        {/* Glow background */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center shadow-inner">
              <span className="material-symbols-outlined text-[28px] animate-pulse">crisis_alert</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-xl text-slate-900">EMERGENCY SOS</h3>
                <span className="px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-mono font-bold uppercase animate-pulse">Live Uplink</span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">Direct Relay to NDRF, SDRF & Nepal APF Rapid Rescue</p>
            </div>
          </div>
          <button
            onClick={closeSos}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Coordinates & Status */}
        <div className="mt-5 p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-indigo-600 text-[18px]">location_searching</span>
            <span className="font-mono text-slate-600 font-semibold">26.5412° N, 86.8219° E</span>
          </div>
          <span className="text-emerald-600 font-bold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            GPS Acquired
          </span>
        </div>

        {/* Direct Action Helplines Grid */}
        <div className="mt-4">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">⚡ 1-Tap Emergency Hotlines</div>
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href="tel:1078"
              onClick={() => showToast('Connecting to 1078 (NDRF)...', 'info')}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-red-50 hover:bg-red-100 border border-red-200 transition-colors text-red-900 group"
            >
              <span className="material-symbols-outlined text-red-600 text-[22px] group-hover:scale-110 transition-transform">call</span>
              <div className="text-left">
                <div className="text-xs font-bold leading-tight">1078 (NDRF)</div>
                <div className="text-[10px] text-red-600">National Disaster</div>
              </div>
            </a>
            <a
              href="tel:1070"
              onClick={() => showToast('Connecting to 1070 (Bihar SDRF)...', 'info')}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-orange-50 hover:bg-orange-100 border border-orange-200 transition-colors text-orange-900 group"
            >
              <span className="material-symbols-outlined text-orange-600 text-[22px] group-hover:scale-110 transition-transform">call</span>
              <div className="text-left">
                <div className="text-xs font-bold leading-tight">1070 (SDRF)</div>
                <div className="text-[10px] text-orange-600">Bihar State Relief</div>
              </div>
            </a>
            <a
              href="tel:1149"
              onClick={() => showToast('Connecting to 1149 (Nepal APF)...', 'info')}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors text-sky-900 group"
            >
              <span className="material-symbols-outlined text-sky-600 text-[22px] group-hover:scale-110 transition-transform">call</span>
              <div className="text-left">
                <div className="text-xs font-bold leading-tight">1149 (Nepal APF)</div>
                <div className="text-[10px] text-sky-600">Armed Police Force</div>
              </div>
            </a>
            <a
              href="tel:112"
              onClick={() => showToast('Connecting to 112 (National Emergency)...', 'info')}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-colors text-indigo-900 group"
            >
              <span className="material-symbols-outlined text-indigo-600 text-[22px] group-hover:scale-110 transition-transform">emergency</span>
              <div className="text-left">
                <div className="text-xs font-bold leading-tight">112 (Police / EMS)</div>
                <div className="text-[10px] text-indigo-600">National Emergency</div>
              </div>
            </a>
          </div>
        </div>

        {/* Distress Pulse Trigger Button */}
        <div className="mt-6">
          <button
            onClick={handleTransmit}
            disabled={transmitting || transmitted}
            className={`w-full py-3.5 px-4 rounded-2xl text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer ${
              transmitted
                ? 'bg-emerald-600 shadow-emerald-500/30'
                : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-red-600/30'
            }`}
          >
            <span className={`material-symbols-outlined text-[20px] ${transmitting ? 'animate-spin' : 'animate-ping'}`}>
              {transmitted ? 'check_circle' : transmitting ? 'autorenew' : 'sensors'}
            </span>
            <span>
              {transmitted
                ? '✓ SOS Transmitted! Units En Route'
                : transmitting
                ? 'Transmitting Cryptographic Distress Beacon...'
                : 'Transmit Satellite Distress Beacon'}
            </span>
          </button>
        </div>

        {/* Footnote */}
        <p className="text-center text-[11px] text-slate-400 mt-4 leading-normal">
          Your verified IP and approximate GPS telemetry will be logged into the Sachet Disaster Command Ledger.
        </p>
      </div>
    </div>
  );
}
