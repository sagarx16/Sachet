'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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

      <aside className="fixed left-0 top-20 bottom-0 w-64 bg-white border-r border-slate-200 z-40 flex flex-col justify-between py-4 shadow-sm">
        <div className="px-3 flex flex-col gap-1">
          <div className="px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-slate-600 font-bold">
            Tactical Navigation
          </div>
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <span className="material-symbols-outlined text-lg text-slate-500">dashboard</span>
              <span>Overview (Home)</span>
            </Link>

            <Link
              href="/admin"
              className="flex items-center gap-3 px-3 py-2 transition-colors bg-indigo-50 text-indigo-700 font-semibold rounded-lg shadow-sm"
            >
              <span className="material-symbols-outlined text-lg text-indigo-700">shield_person</span>
              <span>Govt Command Desk</span>
            </Link>

            <Link
              href="/citizen"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <span className="material-symbols-outlined text-lg text-slate-500">person</span>
              <span>Citizen Portal</span>
            </Link>

            <Link
              href="/responder"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <span className="material-symbols-outlined text-lg text-slate-500">emergency</span>
              <span>Responder Hub</span>
            </Link>

            <Link
              href="/responder"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <span className="material-symbols-outlined text-lg text-slate-500">cabin</span>
              <span>Shelters & Logistics</span>
            </Link>

            <Link
              href="/responder"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <span className="material-symbols-outlined text-lg text-slate-500">person_search</span>
              <span>Missing Persons</span>
            </Link>

            <button
              onClick={openSos}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-700 hover:bg-red-50 transition-colors text-left w-full cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg text-red-600">emergency</span>
              <span>SOS Center</span>
            </button>

            <Link
              href="/login"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <span className="material-symbols-outlined text-lg text-slate-500">login</span>
              <span>Switch / Login</span>
            </Link>
          </nav>
        </div>

        <div className="px-4 pt-4 border-t border-slate-200 flex flex-col gap-2">
          <div className="flex items-center justify-between font-mono text-[11px] text-slate-600 font-semibold">
            <span>STATION STATUS</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              SYNCED
            </span>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex flex-col gap-0.5">
            <span className="text-xs text-slate-900 font-semibold">Govt Command Desk</span>
            <span className="text-xs text-slate-600 font-medium">Bihar, UP & Terai Outposts</span>
          </div>
        </div>
      </aside>
      <div className="pl-64"><main className="relative w-full pt-20 bg-slate-100/90 min-h-screen"><div className="flex flex-col w-full">
{/* Cross-Border Mission Control Utility Strip */}
<div className="w-full px-8 py-3 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-4 shadow-sm">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200">
<span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
<span className="font-mono text-[11px] text-red-700 tracking-wider font-bold">STATE LEVEL-4 RED PROTOCOL ACTIVATED</span>
</div>
<div className="hidden md:flex items-center gap-2 font-mono text-[11px] text-slate-600 font-semibold">
<span className="">HQ: PATNA APEX DESK</span>
<span className="text-slate-300">/</span>
<span className="">KATHMANDU SITCEN LIAISON [ONLINE]</span>
<span className="text-slate-300">/</span>
<span className="text-indigo-700 font-bold">RADAR-SYNC: 14 SEC AGO</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-label-md text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all">
<span className="material-symbols-outlined text-base text-indigo-600">satellite_alt</span>
<span className="">ISRO / RISAT-2B Feed</span>
</button>
<button className="px-3.5 py-1.5 rounded-lg bg-indigo-600 text-white font-label-md text-xs font-bold flex items-center gap-1.5 shadow-sm hover:bg-indigo-700 transition-all">
<span className="material-symbols-outlined text-base">emergency_share</span>
<span className="">Broadcast CM Directive</span>
</button>
</div>
</div>
{/* Main Executive Command Body */}
<div className="px-8 py-6 flex flex-col gap-6">
{/* Strategic Page Header & Inter-Agency Context */}
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-mono text-xs text-indigo-700 uppercase tracking-wider font-bold">NDMA (India) × NDMA (Nepal) Tri-Basin Taskforce</span>
<span className="px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700 font-mono text-[11px] font-semibold">Grid Node #IND-BR-09</span>
</div>
<h1 className="font-headline-xl text-3xl font-extrabold text-slate-900 tracking-tight">Executive Crisis Operations &amp; Dispatch Console</h1>
<p className="text-sm text-slate-600 font-medium">Real-time transboundary hydro-meteorological command, rapid evacuation logistics, and tactical unit management across Kosi, Gandak, and Ganges basins.</p>
</div>
{/* Top Action Ribbon */}
<div className="flex items-center gap-1 self-start lg:self-auto bg-white border border-slate-200 p-1 rounded-xl shadow-sm">
<button className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 font-label-md text-xs font-bold shadow-sm flex items-center gap-1.5">
<span className="material-symbols-outlined text-base">security</span>
<span className="">Tactical Live Desk</span>
</button>
<button className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-label-md text-xs font-semibold flex items-center gap-1.5 transition-colors">
<span className="material-symbols-outlined text-base">download</span>
<span className="">Cabinet Briefing (PDF)</span>
</button>
<button className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-label-md text-xs font-semibold flex items-center gap-1.5 transition-colors">
<span className="material-symbols-outlined text-base">refresh</span>
<span className="">Sync All Sensors</span>
</button>
</div>
</div>
{/* Bilateral Transboundary Sluice Gate Protocol Strip */}
<div className="w-full relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
<div className="absolute inset-0 bg-gradient-to-r from-blue-50/60 via-indigo-50/40 to-transparent pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-start md:items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 border border-sky-200">
<span className="material-symbols-outlined text-2xl">water_damage</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-base text-slate-900 font-bold">Bilateral Indo-Nepal Sluice Gate Protocol: Active Discharge</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[11px] font-bold">SYNCHRONIZED</span>
</div>
<p className="text-xs text-slate-600 mt-1 font-medium">
              Birpur Koshi Barrage: Gates 28 through 36 operated at +2.8m aperture. Telemetric runoff synchronized directly with Kathmandu Singha Durbar Flood Ops and Patna Water Commission.
            </p>
</div>
</div>
<div className="flex items-center gap-4 shrink-0">
<div className="flex flex-col text-right hidden sm:flex">
<span className="font-mono text-[10px] text-slate-600 font-bold uppercase">OUTFLOW RATE</span>
<span className="font-telemetry-metric text-2xl text-sky-700 font-extrabold tracking-tight">482,190 <span className="text-xs text-slate-500 font-semibold">Cusecs</span></span>
</div>
<button className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-label-md text-xs font-bold shadow-sm transition-all flex items-center gap-1.5">
<span className="material-symbols-outlined text-lg">tune</span>
<span className="">Barrage Controller Log</span>
</button>
</div>
</div>
</div>
{/* Top Row KPI Metric Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
{/* Metric 1: Total SOS Broadcasts */}
<div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-4">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<span className="font-mono text-[11px] text-slate-600 uppercase tracking-wider font-bold">Total SOS Broadcasts</span>
<span className="text-3xl font-extrabold text-red-600 tracking-tight">1,482</span>
</div>
<div className="px-2 py-1 rounded-full bg-red-100 text-red-700 font-mono text-[11px] font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span className="">+14% vs 24h</span>
</div>
</div>
<div className="flex flex-col gap-2">
{/* Sparkline */}
<svg className="w-full h-9 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 24">
<path className="text-red-500" d="M 0,20 Q 15,18 28,14 T 50,15 T 70,8 T 88,4 L 100,2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"></path>
<path className="text-red-100" d="M 0,20 Q 15,18 28,14 T 50,15 T 70,8 T 88,4 L 100,2 L 100,24 L 0,24 Z" fill="currentColor"></path>
<circle className="fill-red-600" cx="100" cy="2" r="3"></circle>
</svg>
<div className="flex items-center justify-between font-mono text-[11px] text-slate-500">
<span className="">Critical alerts pending triage</span>
<span className="text-red-600 font-bold">157 Unassigned</span>
</div>
</div>
</div>
{/* Metric 2: Resolution & Rescue Rate */}
<div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-4">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<span className="font-mono text-[11px] text-slate-600 uppercase tracking-wider font-bold">Resolution &amp; Rescue Rate</span>
<span className="text-3xl font-extrabold text-sky-700 tracking-tight">89.4%</span>
</div>
<div className="p-2 rounded-xl bg-sky-50 text-sky-700 border border-sky-100">
<span className="material-symbols-outlined text-xl">verified</span>
</div>
</div>
<div className="flex flex-col gap-2">
{/* Sparkline */}
<svg className="w-full h-9 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 24">
<path className="text-sky-600" d="M 0,18 Q 20,16 40,10 T 70,8 T 90,4 L 100,3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"></path>
<path className="text-sky-100" d="M 0,18 Q 20,16 40,10 T 70,8 T 90,4 L 100,3 L 100,24 L 0,24 Z" fill="currentColor"></path>
<circle className="fill-sky-600" cx="100" cy="3" r="3"></circle>
</svg>
<div className="flex items-center justify-between font-mono text-[11px] text-slate-500">
<span className="">Relocated successfully</span>
<span className="text-slate-800 font-bold">1,325 Citizens</span>
</div>
</div>
</div>
{/* Metric 3: Active Shelters Operational */}
<div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-4">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<span className="font-mono text-[11px] text-slate-600 uppercase tracking-wider font-bold">Active Shelters Operational</span>
<span className="text-3xl font-extrabold text-indigo-700 tracking-tight">342</span>
</div>
<div className="px-2 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-mono text-[11px] font-bold">
            64.2% Mean Cap
          </div>
</div>
<div className="flex flex-col gap-2">
{/* Sparkline */}
<svg className="w-full h-9 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 24">
<path className="text-indigo-600" d="M 0,14 Q 25,12 45,15 T 75,10 T 90,9 L 100,8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"></path>
<path className="text-indigo-100" d="M 0,14 Q 25,12 45,15 T 75,10 T 90,9 L 100,8 L 100,24 L 0,24 Z" fill="currentColor"></path>
<circle className="fill-indigo-600" cx="100" cy="8" r="3"></circle>
</svg>
<div className="flex items-center justify-between font-mono text-[11px] text-slate-500">
<span className="">Critical shelters (&gt;90% full)</span>
<span className="text-red-600 font-bold">28 Facilities</span>
</div>
</div>
</div>
{/* Metric 4: Deployed Field Personnel */}
<div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-4">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<span className="font-mono text-[11px] text-slate-600 uppercase tracking-wider font-bold">Deployed Field Personnel</span>
<span className="text-3xl font-extrabold text-slate-900 tracking-tight">2,840</span>
</div>
<div className="p-2 rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
<span className="material-symbols-outlined text-xl">military_tech</span>
</div>
</div>
<div className="flex flex-col gap-2">
{/* Sparkline */}
<svg className="w-full h-9 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 24">
<path className="text-slate-700" d="M 0,16 Q 30,12 55,8 T 85,5 L 100,4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"></path>
<path className="text-slate-200" d="M 0,16 Q 30,12 55,8 T 85,5 L 100,4 L 100,24 L 0,24 Z" fill="currentColor"></path>
<circle className="fill-slate-800" cx="100" cy="4" r="3"></circle>
</svg>
<div className="flex items-center justify-between font-mono text-[11px] text-slate-500">
<span className="">Force allocation</span>
<span className="text-slate-800 font-bold">NDRF • SDRF • APF • Corps</span>
</div>
</div>
</div>
</div>
{/* Central Data Visualization Section */}
<div className="w-full rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col gap-5">
{/* Graph Header & Control Legend */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="p-1.5 rounded-lg bg-sky-50 text-sky-700 border border-sky-100">
<span className="material-symbols-outlined text-base">query_stats</span>
</span>
<h2 className="font-headline-sm text-lg text-slate-900 font-bold">48-Hour Flood Water Discharge &amp; Inundation Level Trend</h2>
</div>
<p className="text-xs text-slate-600 font-medium">Combined gauge height vs danger threshold for River Kosi (Birpur Barrage) and River Ganges (Digha Ghat, Patna).</p>
</div>
{/* Legend and Basin Switcher */}
<div className="flex flex-wrap items-center gap-4">
<div className="flex items-center gap-4 bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-xl">
<div className="flex items-center gap-1.5">
<span className="w-3 h-1.5 rounded-full bg-sky-600"></span>
<span className="font-mono text-xs text-slate-600 font-medium">Actual Flow (Cusecs)</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-3 h-1 rounded-full bg-indigo-600"></span>
<span className="font-mono text-xs text-slate-600 font-medium">Projected Peak Surge</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-3 h-0.5 bg-red-600"></span>
<span className="font-mono text-xs text-red-600 font-bold">Danger Threshold (52.0m)</span>
</div>
</div>
<div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
<button className="px-2.5 py-1 rounded-lg font-mono text-xs bg-white text-indigo-700 font-bold shadow-sm">Kosi Basin</button>
<button className="px-2.5 py-1 rounded-lg font-mono text-xs text-slate-600 hover:text-slate-900 transition-colors">Ganges Digha</button>
<button className="px-2.5 py-1 rounded-lg font-mono text-xs text-slate-600 hover:text-slate-900 transition-colors">Gandak Barrage</button>
</div>
</div>
</div>
{/* High-End Responsive SVG Hydro-Trend Area Graph */}
<div className="w-full relative h-72 sm:h-80 bg-slate-50/70 border border-slate-200 rounded-xl p-3 flex flex-col justify-between overflow-hidden shadow-inner">
{/* Background Grid Rules */}
<div className="absolute inset-x-3 top-8 bottom-10 flex flex-col justify-between pointer-events-none opacity-40">
<div className="w-full border-b border-slate-200"></div>
<div className="w-full border-b border-red-200"></div>
<div className="w-full border-b border-slate-200"></div>
<div className="w-full border-b border-slate-200"></div>
<div className="w-full border-b border-slate-200"></div>
</div>
{/* SVG Visualizing Multi-Stream Area & Danger Overlay */}
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 280">
<defs>
{/* Actual Discharge Gradient Fill */}
<linearGradient id="flowGradientLight" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#0284c7" stop-opacity="0.28"></stop>
<stop offset="85%" stop-color="#0284c7" stop-opacity="0.03"></stop>
</linearGradient>
{/* Projected Peak Gradient Fill */}
<linearGradient id="projectedGradientLight" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#4f46e5" stop-opacity="0.22"></stop>
<stop offset="100%" stop-color="#4f46e5" stop-opacity="0.02"></stop>
</linearGradient>
</defs>
{/* Danger Level Threshold Mark (52.0m line) */}
<line opacity="0.9" stroke="#dc2626" stroke-dasharray="6,4" stroke-width="1.8" x1="0" x2="1000" y1="84" y2="84"></line>
<text className="font-mono text-[11px] font-bold" fill="#b91c1c" x="12" y="78">CRITICAL DANGER LEVEL: 52.00 METERS (HFL EXCEEDED)</text>
{/* Projected Surge Fill & Stroke (T-now through +24h) */}
<path d="M 520,118 Q 620,95 720,70 T 880,56 L 1000,50 L 1000,240 L 520,240 Z" fill="url(#projectedGradientLight)"></path>
<path d="M 520,118 Q 620,95 720,70 T 880,56 L 1000,50" fill="none" stroke="#4f46e5" stroke-dasharray="5,4" stroke-width="2.5"></path>
{/* Actual Discharge Fill & Primary Curve */}
<path d="M 0,195 Q 120,185 240,165 T 480,125 L 520,118 L 520,240 L 0,240 Z" fill="url(#flowGradientLight)"></path>
<path d="M 0,195 Q 120,185 240,165 T 480,125 L 520,118" fill="none" stroke="#0284c7" stroke-linecap="round" stroke-width="3.5"></path>
{/* Current Telemetry Intersect Marker */}
<line stroke="#0284c7" stroke-dasharray="2,2" stroke-width="1.5" x1="520" x2="520" y1="20" y2="240"></line>
<circle cx="520" cy="118" fill="#ffffff" r="6" stroke="#0284c7" stroke-width="3"></circle>
<circle cx="520" cy="118" fill="#0284c7" r="2.5"></circle>
{/* Callout Marker on Live Gauge */}
<rect fill="#ffffff" height="38" rx="8" stroke="#0284c7" stroke-width="1.2" width="160" x="440" y="40"></rect>
<text className="font-mono text-[10px] font-bold" fill="#0369a1" text-anchor="middle" x="520" y="55">T-0 LIVE INUNDATION</text>
<text className="font-mono text-[12px] font-extrabold" fill="#0f172a" text-anchor="middle" x="520" y="70">50.84m / 482k Cusecs</text>
{/* Projected Peak Marker Alert */}
<circle cx="880" cy="56" fill="#dc2626" r="4.5" stroke="#fee2e2" stroke-width="2"></circle>
<text className="font-mono text-[10px] font-bold" fill="#b91c1c" text-anchor="middle" x="880" y="42">EXPECTED CREST: 53.4m (+18h)</text>
</svg>
{/* Time-Axis Markers */}
<div className="flex items-center justify-between pt-2 border-t border-slate-200 px-2 font-mono text-xs text-slate-500">
<div className="flex flex-col">
<span className="font-bold text-slate-800">T-24h (00:00)</span>
<span className="text-[10px] text-slate-400">Normal Inflow</span>
</div>
<div className="flex flex-col">
<span className="font-bold text-slate-800">T-18h (06:00)</span>
<span className="text-[10px] text-slate-400">Upstream Nepal Rains</span>
</div>
<div className="flex flex-col">
<span className="font-bold text-slate-800">T-12h (12:00)</span>
<span className="text-[10px] text-slate-400">Warning Gauge Trigger</span>
</div>
<div className="flex flex-col text-sky-700 font-bold">
<span className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-ping"></span>
<span className="">LIVE (18:00)</span>
</span>
<span className="text-[10px] text-sky-600">Barrage Spillway Active</span>
</div>
<div className="flex flex-col text-slate-700">
<span className="font-bold">+6h (24:00)</span>
<span className="text-[10px] text-slate-400">Surge Front</span>
</div>
<div className="flex flex-col text-red-600 font-bold">
<span className="font-bold">+18h (12:00)</span>
<span className="text-[10px] text-red-500">Projected Apex</span>
</div>
</div>
</div>
{/* Quick Telemetry Footnote */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
<div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
<span className="material-symbols-outlined text-sky-600 text-2xl">speed</span>
<div className="flex flex-col">
<span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider font-bold">RIVER FLOW VELOCITY</span>
<span className="text-sm text-slate-900 font-bold">4.2 m/s <span className="text-red-600 font-normal text-xs">(+0.8 m/s delta)</span></span>
</div>
</div>
<div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
<span className="material-symbols-outlined text-indigo-600 text-2xl">cloud_sync</span>
<div className="flex flex-col">
<span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider font-bold">TERAI RUNOFF FORECAST</span>
<span className="text-sm text-slate-900 font-bold">210 mm / next 12 hrs</span>
</div>
</div>
<div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
<span className="material-symbols-outlined text-red-600 text-2xl">crisis_alert</span>
<div className="flex flex-col">
<span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider font-bold">DOWNSTREAM IMPACT ETA</span>
<span className="text-sm text-red-700 font-bold">Kursela Junction: 6h 40m</span>
</div>
</div>
</div>
</div>
{/* Live Emergency Dispatch Section */}
<div className="w-full rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col gap-5">
{/* Dispatch Controls & Filtering */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse"></span>
<h2 className="font-headline-sm text-lg text-slate-900 font-bold">Live Inter-Agency Dispatch Priority Stream</h2>
</div>
<p className="text-xs text-slate-600 font-medium">Real-time coordinated deployment across state lines, district magisterial teams, and bilateral military detachments.</p>
</div>
{/* Filter bar */}
<div className="flex flex-wrap items-center gap-3">
<div className="relative min-w-[280px]">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none">search</span>
<input className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-sm" placeholder="Filter by District, Priority, or Unit..." type="text" />
</div>
<div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
<button className="px-3 py-1.5 rounded-lg bg-white text-slate-900 font-label-md text-xs font-bold shadow-sm">All (48)</button>
<button className="px-3 py-1.5 rounded-lg font-label-md text-xs font-semibold text-red-600 hover:bg-white transition-colors">Critical (9)</button>
<button className="px-3 py-1.5 rounded-lg font-label-md text-xs font-semibold text-sky-700 hover:bg-white transition-colors">In-Transit (23)</button>
</div>
<button className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-label-md text-xs font-semibold flex items-center gap-1.5 border border-slate-200 transition-all">
<span className="material-symbols-outlined text-base text-slate-500">filter_list</span>
<span className="">Refine</span>
</button>
</div>
</div>
{/* Tactical Dispatch Table */}
<div className="w-full overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50/90 font-mono text-[11px] text-slate-600 uppercase tracking-wider border-b border-slate-200">
<th className="py-3.5 px-4 font-bold">Incident ID</th>
<th className="py-3.5 px-4 font-bold">Region / Sector</th>
<th className="py-3.5 px-4 font-bold">Nature of Incident</th>
<th className="py-3.5 px-4 font-bold">Severity</th>
<th className="py-3.5 px-4 font-bold">Assigned Unit</th>
<th className="py-3.5 px-4 font-bold">Status</th>
<th className="py-3.5 px-4 text-right font-bold">Tactical Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 bg-white">
{/* Row 1: Supaul Ward 3 */}
<tr className="hover:bg-slate-50/70 transition-colors">
<td className="py-4 px-4 font-mono text-xs font-bold text-indigo-700">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
<span className="">#INC-9821</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="text-xs font-bold text-slate-900">Supaul, Ward 3</span>
<span className="font-mono text-[11px] text-slate-500">Bihar • Sector B-4</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-red-600 text-lg">landslide</span>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-900">Embankment Breach</span>
<span className="font-mono text-[11px] text-slate-500">Water ingress 1.8m/hr • 420 trapped</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="px-2.5 py-1 rounded-full bg-red-100 text-red-700 font-mono text-[10px] font-extrabold inline-flex items-center gap-1 border border-red-200">
<span className="material-symbols-outlined text-xs">crisis_alert</span>
<span className="">CRITICAL</span>
</span>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="text-xs font-bold text-slate-900">NDRF 9th Bn</span>
<span className="font-mono text-[11px] text-sky-700 font-medium">3 Zodiac Motorboats • 24 divers</span>
</div>
</td>
<td className="py-4 px-4">
<span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 font-mono text-[10px] font-bold inline-flex items-center gap-1 border border-sky-200">
<span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
<span className="">Assigned</span>
</span>
</td>
<td className="py-4 px-4 text-right">
<button className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-label-md text-xs font-bold transition-all shadow-sm inline-flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">videocam</span>
<span className="">View Drone Stream</span>
</button>
</td>
</tr>
{/* Row 2: Sunsari, Nepal */}
<tr className="hover:bg-slate-50/70 transition-colors">
<td className="py-4 px-4 font-mono text-xs font-bold text-indigo-700">
                #INC-9820
              </td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="text-xs font-bold text-slate-900">Sunsari District</span>
<span className="font-mono text-[11px] text-slate-500">Koshi Province, Nepal</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-sky-600 text-lg">waves</span>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-900">Flash Runoff &amp; Debris Flow</span>
<span className="font-mono text-[11px] text-slate-500">Bridge clearance reduced by 3.1m</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-mono text-[10px] font-extrabold inline-flex items-center gap-1 border border-amber-200">
<span className="material-symbols-outlined text-xs">warning</span>
<span className="">HIGH</span>
</span>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="text-xs font-bold text-slate-900">APF Nepal Unit 4</span>
<span className="font-mono text-[11px] text-slate-500 font-medium">Border Liaison Biratnagar</span>
</div>
</td>
<td className="py-4 px-4">
<span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-mono text-[10px] font-bold inline-flex items-center gap-1 border border-blue-200">
<span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
<span className="">Dispatched</span>
</span>
</td>
<td className="py-4 px-4 text-right">
<button className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-label-md text-xs font-bold transition-all border border-slate-200 inline-flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm text-sky-700">hub</span>
<span className="">Coordinate APF</span>
</button>
</td>
</tr>
{/* Row 3: Patna Rural */}
<tr className="hover:bg-slate-50/70 transition-colors">
<td className="py-4 px-4 font-mono text-xs font-bold text-slate-500">
                #INC-9817
              </td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="text-xs font-bold text-slate-900">Patna Rural, Danapur</span>
<span className="font-mono text-[11px] text-slate-500">Bihar • Ward 12</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-indigo-600 text-lg">water</span>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-900">Lowland Waterlogging</span>
<span className="font-mono text-[11px] text-slate-500">Hospital access cut-off restored</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-[10px] font-bold inline-flex items-center gap-1 border border-slate-200">
<span className="">MEDIUM</span>
</span>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="text-xs font-bold text-slate-900">SDRF Bihar QRT</span>
<span className="font-mono text-[11px] text-slate-500 font-medium">Pump Ops • 8 high-flow units</span>
</div>
</td>
<td className="py-4 px-4">
<span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold inline-flex items-center gap-1 border border-emerald-200">
<span className="material-symbols-outlined text-xs">done_all</span>
<span className="">Resolved</span>
</span>
</td>
<td className="py-4 px-4 text-right">
<button className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-label-md text-xs font-medium transition-colors inline-flex items-center gap-1">
<span className="material-symbols-outlined text-sm">history</span>
<span className="">Audit Log</span>
</button>
</td>
</tr>
{/* Row 4: Madhubani East */}
<tr className="hover:bg-slate-50/70 transition-colors">
<td className="py-4 px-4 font-mono text-xs font-bold text-indigo-700">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
<span className="">#INC-9815</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="text-xs font-bold text-slate-900">Madhubani East</span>
<span className="font-mono text-[11px] text-slate-500">Jhanjharpur Sub-div</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-red-600 text-lg">bolt</span>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-900">Primary Substation Inundation</span>
<span className="font-mono text-[11px] text-slate-500">132kV grid offline risk • 90k households</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="px-2.5 py-1 rounded-full bg-red-100 text-red-700 font-mono text-[10px] font-extrabold inline-flex items-center gap-1 border border-red-200">
<span className="material-symbols-outlined text-xs">emergency</span>
<span className="">CRITICAL</span>
</span>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="text-xs font-bold text-slate-900">Power Grid Emergency Team</span>
<span className="font-mono text-[11px] text-slate-500 font-medium">BSPCCL • Heavy barrier pumps</span>
</div>
</td>
<td className="py-4 px-4">
<span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 font-mono text-[10px] font-bold inline-flex items-center gap-1 border border-indigo-200">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
<span className="">In Progress</span>
</span>
</td>
<td className="py-4 px-4 text-right">
<button className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-label-md text-xs font-bold transition-all border border-slate-200 inline-flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm text-indigo-700">my_location</span>
<span className="">Track Vector</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Table Footer Status Summary */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1 font-mono text-xs text-slate-500">
<div className="flex items-center gap-4">
<span className="">Showing 4 of 48 active operational incidents</span>
<span className="text-slate-800 font-semibold">Average unit reaction time: 14.2 min</span>
</div>
<div className="flex items-center gap-1">
<button className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs shadow-sm">« Prev</button>
<span className="px-2 text-slate-700 font-medium">Page 1 of 12</span>
<button className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs shadow-sm">Next »</button>
</div>
</div>
</div>
{/* Multi-Agency Tactical Deployment & Visual Telemetry Mosaic */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
{/* Live Video / Drone Feeds Card */}
<div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
<span className="font-headline-sm text-sm text-slate-900 font-bold">Drone Recon Vector: Alpha-4</span>
</div>
<span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-indigo-700 font-bold">LIVE 1080P</span>
</div>
<div className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-900">
<img alt="Drone Reconnaissance" className="w-full h-full object-cover" data-alt="High-resolution aerial night vision drone imagery showing floodwaters submerging riverbanks, flooded highway infrastructure, and tactical search rescue boats with searchlights cutting through water in eastern Bihar Kosi basin." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu_8lVkc8yaPQdFG6csp84MgOH84B2pHYezNJIcNrDA9BqMuUdZP-1kB8YAcY_oWVGKkY3JV1WL68-Q1I8r-Z8S3FXGXeoRjLRfWRkBAkR3y2X5KjankEymh3eqBwHDn-7r13X2N_90YAyWg9C28DqAjnM3sI05zDzI3wEq9ijDlwm4ga_tKbazH46c3Y0DRgXNpngnjxCP9cNpowQj99LUnZHQo9elKIxB3Qmqw7rnWv66vNhIrUBMg" />
<div className="absolute top-2 left-2 px-2 py-1 rounded bg-slate-900/80 backdrop-blur font-mono text-[10px] text-white">
            ALT: 180m • LAT: 26.23° N • LON: 86.88° E
          </div>
<div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-slate-900/90 font-mono text-[10px] text-amber-300 font-bold">
            FLIR THERMAL: 18 HUMAN SIGNATURES DETECTED
          </div>
</div>
<div className="flex items-center justify-between font-mono text-xs text-slate-500">
<span className="">Target: Ward 3 School Rooftop Refuge</span>
<a className="text-indigo-700 hover:text-indigo-900 font-bold flex items-center gap-0.5" href="#">Full Telemetry <span className="material-symbols-outlined text-xs">arrow_forward</span></a>
</div>
</div>
{/* Bilateral Command Dispatch Map Preview */}
<div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sky-600 text-lg">public</span>
<span className="font-headline-sm text-sm text-slate-900 font-bold">Terai Flood Polygon Mapping</span>
</div>
<span className="font-mono text-[10px] text-slate-600 font-semibold">HYDRO-GIS v4.1</span>
</div>
<div className="w-full h-48 rounded-xl bg-slate-100 bg-cover bg-center relative overflow-hidden border border-slate-200" data-location="Birpur Barrage, Bihar, India" style={{ backgroundImage: "url('https" }}>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex flex-col gap-0.5">
<span className="text-xs text-white font-bold">Birpur-Sunsari Corridor</span>
<span className="font-mono text-[11px] text-sky-300 font-semibold">Inundation zone: 21,400 Hectares</span>
</div>
</div>
<div className="flex items-center justify-between font-mono text-xs text-slate-500">
<span className="">Status: 14 breach containment dikes reinforced</span>
<a className="text-sky-700 hover:text-sky-900 font-bold flex items-center gap-0.5" href="#">Launch GIS Desk <span className="material-symbols-outlined text-xs">open_in_new</span></a>
</div>
</div>
{/* Agency Readiness & Stockpile Radar */}
<div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm flex flex-col justify-between gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-indigo-600 text-lg">inventory</span>
<span className="font-headline-sm text-sm text-slate-900 font-bold">Critical Strategic Stockpiles</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">STABLE</span>
</div>
{/* Stockpile Bars */}
<div className="flex flex-col gap-3 my-auto">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-mono text-xs">
<span className="text-slate-700 font-medium">Potable Water &amp; Chlorine Kits</span>
<span className="text-sky-700 font-bold">82% (420k Units)</span>
</div>
<div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full bg-sky-600 rounded-full" style={{ width: "82%" }}></div>
</div>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-mono text-xs">
<span className="text-slate-700 font-medium">MRE / Dry Rations (7-Day Packs)</span>
<span className="text-indigo-700 font-bold">71% (310k Units)</span>
</div>
<div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full bg-indigo-600 rounded-full" style={{ width: "71%" }}></div>
</div>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-mono text-xs">
<span className="text-slate-700 font-medium">Amphibious Evac Craft (Motorized)</span>
<span className="text-amber-700 font-bold">44% (128 / 290 Active)</span>
</div>
<div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full bg-amber-500 rounded-full" style={{ width: "44%" }}></div>
</div>
</div>
</div>
<div className="pt-2 border-t border-slate-200 flex items-center justify-between font-mono text-xs text-slate-500">
<span className="">Supplies depot: Muzaffarpur Airbase</span>
<span className="text-slate-800 font-semibold">C-130J Sortie #4 ETA 03:40</span>
</div>
</div>
</div>
</div>
</div></main></div>




    </div>
  );
}
