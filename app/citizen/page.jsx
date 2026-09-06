'use client';

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

      <aside className="fixed left-0 top-20 bottom-0 w-64 bg-white border-r border-slate-200 z-40 flex flex-col justify-between py-space-md shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="px-space-md flex flex-col gap-space-xs">
          <div className="px-space-xs py-space-xs font-label-xs-mono text-label-xs-mono uppercase tracking-wider text-slate-400 font-semibold">
            Tactical Navigation
          </div>
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              className="flex items-center gap-space-sm px-3 py-2 rounded-lg font-label-md text-label-md text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">dashboard</span>
              <span>Overview (Home)</span>
            </Link>

            <Link
              href="/citizen"
              className="flex items-center gap-space-sm px-3 py-2 transition-colors bg-indigo-50 text-indigo-700 font-semibold rounded-lg shadow-sm border border-indigo-100"
            >
              <span className="material-symbols-outlined text-lg text-indigo-700">person</span>
              <span>Citizen Portal</span>
            </Link>

            <button
              onClick={() => setIsReportModalOpen(true)}
              className="flex items-center gap-space-sm px-3 py-2 rounded-lg font-label-md text-label-md text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors text-left w-full cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">warning</span>
              <span>Report Incident</span>
            </button>

            <button
              onClick={openSos}
              className="flex items-center gap-space-sm px-3 py-2 rounded-lg font-label-md text-label-md text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors text-left w-full cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg text-red-600">emergency</span>
              <span>SOS Center</span>
            </button>

            <Link
              href="/responder"
              className="flex items-center gap-space-sm px-3 py-2 rounded-lg font-label-md text-label-md text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">holiday_village</span>
              <span>Shelters & Camps</span>
            </Link>

            <Link
              href="/responder"
              className="flex items-center gap-space-sm px-3 py-2 rounded-lg font-label-md text-label-md text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">emergency</span>
              <span>Responder Hub</span>
            </Link>

            <Link
              href="/admin"
              className="flex items-center gap-space-sm px-3 py-2 rounded-lg font-label-md text-label-md text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">shield_person</span>
              <span>Govt Command Desk</span>
            </Link>

            <Link
              href="/admin"
              className="flex items-center gap-space-sm px-3 py-2 rounded-lg font-label-md text-label-md text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">map</span>
              <span>Live Heatmap / GIS</span>
            </Link>

            <Link
              href="/login"
              className="flex items-center gap-space-sm px-3 py-2 rounded-lg font-label-md text-label-md text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">login</span>
              <span>Switch / Login</span>
            </Link>
          </nav>
        </div>

        <div className="px-space-md pt-space-md border-t border-slate-200 flex flex-col gap-space-xs">
          <div className="flex items-center justify-between font-label-xs-mono text-label-xs-mono text-slate-400 font-semibold">
            <span>STATION STATUS</span>
            <span className="text-sky-600 font-bold">SYNCED</span>
          </div>
          <div className="p-space-sm rounded-lg bg-slate-50 border border-slate-200 flex flex-col gap-1">
            <span className="font-label-md text-label-md text-slate-900 font-semibold">Civilian Portal Mode</span>
            <span className="font-body-sm text-body-sm text-slate-500">Patna, Bihar & Sunsari, Nepal</span>
          </div>
        </div>
      </aside>
      <div className="pl-64"><main className="relative w-full pt-20 bg-slate-50 min-h-screen"><div className="flex flex-col w-full">
<div className="w-full px-layout-margin-mobile md:px-layout-margin-tablet lg:px-layout-margin-desktop py-space-xl max-w-7xl mx-auto flex flex-col gap-space-2xl">
{/* Top Row: Welcome & Ambient Hazard Banner */}
<div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-space-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] backdrop-blur-md">
<div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-sky-100/60 blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-16 -left-12 w-72 h-72 rounded-full bg-indigo-50/80 blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse"></span>
<span className="font-label-xs-mono text-label-xs-mono text-sky-700 uppercase tracking-widest font-semibold">Live Civilian Channel • Grid Sector 4B</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-slate-900 tracking-tight font-bold">Welcome back, Aarav Sharma</h1>
<div className="flex items-center gap-space-sm text-slate-600 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-base text-indigo-600">pin_drop</span>
<span className="">Patna Sadar (Ward 14), Bihar • Hydrology Station #BR-09</span>
<span className="hidden sm:inline text-slate-300">•</span>
<span className="hidden sm:inline text-sky-700 font-label-md text-label-md font-semibold">GPS Lock Active (±3m)</span>
</div>
</div>
{/* Vicinity Flood Threat Pill Badge */}
<div className="flex items-center gap-space-md bg-amber-50/80 border border-amber-200 px-space-lg py-space-md rounded-xl shadow-sm">
<div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-amber-100 text-amber-700">
<span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
<span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"></span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-xs-mono text-label-xs-mono uppercase tracking-wider text-slate-500 font-semibold">Vicinity Flood Threat</span>
<span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 font-label-xs-mono text-label-xs-mono uppercase font-bold">Moderate (Yellow)</span>
</div>
<span className="font-headline-sm text-headline-sm text-slate-900 font-bold">Rising 1.2 cm/hr</span>
<span className="font-body-sm text-body-sm text-slate-600">Ganga basin upstream swelling</span>
</div>
</div>
</div>
</div>
{/* Central Tactical Hub: Telemetry Dial + SOS Command Core */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
{/* Focal Hydrological Dial Panel (7 Cols) */}
<div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-space-xl flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] relative overflow-hidden">
<div className="flex items-center justify-between pb-space-md border-b border-slate-100">
<div className="flex flex-col">
<span className="font-label-xs-mono text-label-xs-mono uppercase tracking-widest text-slate-400 font-semibold">Hydrological Risk Index</span>
<h2 className="font-headline-md text-headline-md text-slate-900 font-bold">Ward 14 River Gauge Analysis</h2>
</div>
<div className="flex items-center gap-space-xs bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full">
<span className="material-symbols-outlined text-base text-sky-600">radar</span>
<span className="font-label-xs-mono text-label-xs-mono text-slate-600 font-medium">Auto-updating: 4s</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg items-center my-space-md">
{/* Circular Progress-Ring Gauge */}
<div className="md:col-span-6 flex flex-col items-center justify-center relative">
<div className="relative w-56 h-56 flex items-center justify-center">
<svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
<circle className="text-slate-100" cx="100" cy="100" fill="none" r="82" stroke="currentColor" stroke-width="14"></circle>
<circle className="text-sky-600" cx="100" cy="100" fill="none" r="82" stroke="currentColor" stroke-dasharray="515.2" stroke-dashoffset="298.8" stroke-linecap="round" stroke-width="14"></circle>
<circle className="text-slate-200" cx="100" cy="100" fill="none" r="68" stroke="currentColor" stroke-dasharray="4 6" stroke-width="2"></circle>
</svg>
{/* Center Metric Stack */}
<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-space-sm">
<span className="font-label-xs-mono text-label-xs-mono uppercase tracking-wider text-slate-400 font-semibold">Composite Threat</span>
<span className="font-display-hero-mobile text-display-hero-mobile md:text-display-hero text-slate-900 font-extrabold tracking-tight">42<span className="text-sky-600 font-headline-md text-headline-md">%</span></span>
<span className="font-label-md text-label-md text-sky-700 font-bold uppercase tracking-wider">Moderate</span>
</div>
</div>
<div className="mt-space-sm flex items-center gap-space-xs text-slate-500 font-label-xs-mono text-label-xs-mono font-medium">
<span className="w-2 h-2 rounded-full bg-sky-600"></span>
<span className="">Next Threshold: Red Alert @ 65%</span>
</div>
</div>
{/* River Gauges Breakdown */}
<div className="md:col-span-6 flex flex-col gap-space-sm">
<div className="p-space-md rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="p-2 rounded-lg bg-sky-100 text-sky-700">
<span className="material-symbols-outlined text-xl">waves</span>
</div>
<div className="flex flex-col">
<span className="font-label-xs-mono text-label-xs-mono uppercase text-slate-500 font-semibold">Current Stage</span>
<span className="font-telemetry-metric text-telemetry-metric text-slate-900 font-bold">48.90 <span className="font-body-sm text-body-sm text-slate-500 font-normal">m</span></span>
</div>
</div>
<div className="text-right flex flex-col">
<span className="font-label-xs-mono text-label-xs-mono uppercase text-red-600 font-semibold">Danger Mark</span>
<span className="font-label-lg text-label-lg text-slate-900 font-bold">50.20 m</span>
<span className="font-body-sm text-body-sm text-sky-700 font-medium">1.30m cushion</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="p-2 rounded-lg bg-indigo-100 text-indigo-700">
<span className="material-symbols-outlined text-xl">rainy</span>
</div>
<div className="flex flex-col">
<span className="font-label-xs-mono text-label-xs-mono uppercase text-slate-500 font-semibold">Rainfall Inundation</span>
<span className="font-telemetry-metric text-telemetry-metric text-slate-900 font-bold">38.0 <span className="font-body-sm text-body-sm text-slate-500 font-normal">mm/hr</span></span>
</div>
</div>
<div className="text-right flex flex-col">
<span className="font-label-xs-mono text-label-xs-mono uppercase text-slate-500 font-semibold">Precipitation Type</span>
<span className="font-label-lg text-label-lg text-indigo-700 font-bold">Heavy Downpour</span>
<span className="font-body-sm text-body-sm text-slate-500">Cloudburst risk low</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="p-2 rounded-lg bg-sky-100 text-sky-700">
<span className="material-symbols-outlined text-xl">timer</span>
</div>
<div className="flex flex-col">
<span className="font-label-xs-mono text-label-xs-mono uppercase text-slate-500 font-semibold">Apex Projection</span>
<span className="font-telemetry-metric text-telemetry-metric text-slate-900 font-bold">~6.5 <span className="font-body-sm text-body-sm text-slate-500 font-normal">hrs</span></span>
</div>
</div>
<div className="text-right flex flex-col">
<span className="font-label-xs-mono text-label-xs-mono uppercase text-slate-500 font-semibold">Peak Time</span>
<span className="font-label-lg text-label-lg text-slate-900 font-bold">21:30 IST</span>
<span className="font-body-sm text-body-sm text-slate-500">49.45m forecasted</span>
</div>
</div>
</div>
</div>
{/* Basal Progress Indicator */}
<div className="pt-space-sm flex flex-col gap-space-xs">
<div className="flex justify-between font-label-xs-mono text-label-xs-mono text-slate-500 font-semibold">
<span className="">Normal (42.0m)</span>
<span className="">Warning (48.0m)</span>
<span className="text-amber-700 font-bold">Danger Mark (50.2m)</span>
<span className="text-red-600 font-bold">HFL (52.5m)</span>
</div>
<div className="w-full h-2.5 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex">
<div className="h-full bg-sky-600" style={{ width: "58%" }}></div>
<div className="h-full bg-amber-500" style={{ width: "16%" }}></div>
<div className="h-full bg-slate-200" style={{ width: "26%" }}></div>
</div>
</div>
</div>
{/* Emergency Trigger Center & Hotline Quick-Action (5 Cols) */}
<div className="lg:col-span-5 flex flex-col gap-space-lg">
{/* High-Impact SOS Button Card */}
<div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-red-50 via-white to-white border border-red-200 p-space-xl flex flex-col items-center text-center justify-center shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
<div className="absolute inset-0 bg-radial from-red-100/40 via-transparent to-transparent pointer-events-none"></div>
<div className="flex items-center gap-space-xs mb-space-sm">
<span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
<span className="font-label-xs-mono text-label-xs-mono uppercase tracking-widest text-red-700 font-bold">Direct Command Uplink</span>
</div>
<h3 className="font-headline-md text-headline-md text-slate-900 font-bold max-w-xs mb-space-xs">Life-Threatening Emergency?</h3>
<p className="font-body-sm text-body-sm text-slate-600 max-w-sm mb-space-xl">
            Transmits GPS coordinates, family headcount, and live telemetry to Bihar SDRF &amp; NDRF 9th Battalion boat assets.
          </p>
{/* Concentric Ring Pulsing Trigger */}
<div className="relative flex items-center justify-center my-space-sm">
<div className="absolute w-44 h-44 rounded-full bg-red-200/50 animate-ping pointer-events-none"></div>
<div className="absolute w-36 h-36 rounded-full bg-red-200/70 pointer-events-none"></div>
<button className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white shadow-[0_10px_25px_-5px_rgba(220,38,38,0.5)] flex flex-col items-center justify-center gap-1 hover:scale-105 active:scale-95 transition-transform duration-150 cursor-pointer" id="sosButton" type="button">
<span className="material-symbols-outlined text-4xl font-bold">e911_emergency</span>
<span className="font-label-lg text-label-lg tracking-wider font-extrabold">SOS</span>
</button>
</div>
<div className="mt-space-lg flex flex-col items-center gap-space-2xs">
<span className="font-label-xs-mono text-label-xs-mono uppercase tracking-wider text-slate-500 font-semibold">Press &amp; hold 2 seconds to dispatch</span>
<div className="flex items-center gap-space-xs text-slate-600 font-label-md text-label-md">
<span className="material-symbols-outlined text-sm text-sky-600">shield</span>
<span className="font-medium">Encrypted Geo-Relay • Priority Response Zone</span>
</div>
</div>
</div>
{/* Rapid Emergency Helplines Matrix */}
<div className="p-space-lg rounded-2xl bg-white border border-slate-200 flex flex-col gap-space-sm shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
<div className="flex items-center justify-between">
<span className="font-label-xs-mono text-label-xs-mono uppercase tracking-widest text-slate-400 font-semibold">Direct Emergency Hotlines</span>
<span className="font-label-xs-mono text-label-xs-mono text-sky-700 font-bold">Toll-Free 24x7</span>
</div>
<div className="grid grid-cols-2 gap-space-xs">
<a className="flex items-center justify-between p-space-sm rounded-xl bg-slate-50 border border-slate-200 hover:bg-indigo-50 hover:border-indigo-200 transition-all group" onClick={() => showToast("Connecting to 1078 - NDRF Disaster Helpline...", "info")} href="javascript:void(0)">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-lg text-indigo-700">support_agent</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-slate-900 group-hover:text-indigo-700 font-semibold">NDRF HQ</span>
<span className="font-label-xs-mono text-label-xs-mono text-slate-500">National Grid</span>
</div>
</div>
<span className="font-label-lg text-label-lg text-indigo-700 font-bold">1078</span>
</a>
<a className="flex items-center justify-between p-space-sm rounded-xl bg-slate-50 border border-slate-200 hover:bg-sky-50 hover:border-sky-200 transition-all group" onClick={() => showToast("Connecting to 1070 - Bihar SDRF...", "info")} href="javascript:void(0)">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-lg text-sky-600">local_police</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-slate-900 group-hover:text-sky-700 font-semibold">SDRF Bihar</span>
<span className="font-label-xs-mono text-label-xs-mono text-slate-500">State Control</span>
</div>
</div>
<span className="font-label-lg text-label-lg text-sky-700 font-bold">1070</span>
</a>
<a className="flex items-center justify-between p-space-sm rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-all group" href="tel:1114">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-lg text-slate-500">security</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-slate-900 font-semibold">Nepal APF</span>
<span className="font-label-xs-mono text-label-xs-mono text-slate-500">Border Coord</span>
</div>
</div>
<span className="font-label-lg text-label-lg text-slate-700 font-bold">1114</span>
</a>
<a className="flex items-center justify-between p-space-sm rounded-xl bg-slate-50 border border-slate-200 hover:bg-red-50 hover:border-red-200 transition-all group" href="tel:108">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-lg text-red-600">ambulance</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-slate-900 group-hover:text-red-600 font-semibold">Medical</span>
<span className="font-label-xs-mono text-label-xs-mono text-slate-500">Ambulance</span>
</div>
</div>
<span className="font-label-lg text-label-lg text-red-600 font-bold">108</span>
</a>
</div>
</div>
</div>
</div>
{/* Middle Section: Bento Grid Quick Actions */}
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-xs-mono text-label-xs-mono uppercase tracking-widest text-slate-400 font-semibold">Actionable Operations</span>
<h2 className="font-headline-md text-headline-md text-slate-900 font-bold">Citizen Crisis Assistance</h2>
</div>
<span className="font-body-sm text-body-sm text-slate-500 font-medium hidden sm:inline">Offline-ready cached profiles enabled</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-lg">
{/* Card 1: Report Flood Incident */}
<div className="rounded-2xl bg-white border border-slate-200 p-space-lg flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:border-indigo-300 hover:shadow-md transition-all duration-200 group cursor-pointer">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl">add_a_photo</span>
</div>
<span className="px-2.5 py-1 rounded-full bg-slate-100 text-indigo-700 font-label-xs-mono text-label-xs-mono font-bold uppercase">Takes ~30s</span>
</div>
<div className="flex flex-col gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-slate-900 group-hover:text-indigo-700 transition-colors font-bold">Report Incident</h3>
<p className="font-body-sm text-body-sm text-slate-600 line-clamp-2">
                Submit geo-tagged photos and estimated water depth to deploy municipal drainage teams.
              </p>
</div>
</div>
<div className="pt-space-md mt-space-md border-t border-slate-100 flex items-center justify-between">
<span className="font-label-md text-label-md text-indigo-700 font-bold group-hover:underline">Start Report →</span>
<div className="flex items-center gap-1 text-slate-400 font-label-xs-mono text-label-xs-mono font-medium">
<span className="material-symbols-outlined text-sm">location_on</span>
<span className="">Auto-GPS</span>
</div>
</div>
</div>
{/* Card 2: Find Nearest Shelter */}
<div className="rounded-2xl bg-white border border-slate-200 p-space-lg flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:border-sky-300 hover:shadow-md transition-all duration-200 group cursor-pointer">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-700 flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl">cabin</span>
</div>
<span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-800 font-label-xs-mono text-label-xs-mono font-bold uppercase border border-sky-100">1.4 km Safe Route</span>
</div>
<div className="flex flex-col gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-slate-900 group-hover:text-sky-700 transition-colors font-bold">Find Safe Shelter</h3>
<p className="font-body-sm text-body-sm text-slate-600 line-clamp-2">
                Patna Community Hall Camp • 68 dry beds available with infant formula and drinking water.
              </p>
</div>
</div>
<div className="pt-space-md mt-space-md border-t border-slate-100 flex items-center justify-between">
<span className="font-label-md text-label-md text-sky-700 font-bold group-hover:underline">Navigate Evac Route →</span>
<div className="flex items-center gap-1 text-sky-700 font-label-xs-mono text-label-xs-mono font-semibold">
<span className="w-2 h-2 rounded-full bg-sky-500"></span>
<span className="">Dry roads</span>
</div>
</div>
</div>
{/* Card 3: Missing Person Directory */}
<div className="rounded-2xl bg-white border border-slate-200 p-space-lg flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:border-indigo-300 hover:shadow-md transition-all duration-200 group cursor-pointer">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-indigo-700 flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl">person_search</span>
</div>
<span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-label-xs-mono text-label-xs-mono font-bold uppercase">NGO • Police Sync</span>
</div>
<div className="flex flex-col gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-slate-900 group-hover:text-indigo-700 transition-colors font-bold">Missing Persons</h3>
<p className="font-body-sm text-body-sm text-slate-600 line-clamp-2">
                Trace evacuated relatives across shelter registries or file an emergency identification report.
              </p>
</div>
</div>
<div className="pt-space-md mt-space-md border-t border-slate-100 flex items-center justify-between">
<span className="font-label-md text-label-md text-indigo-700 font-bold group-hover:underline">Search Register →</span>
<div className="flex items-center gap-1 text-slate-500 font-label-xs-mono text-label-xs-mono font-medium">
<span className="">3,410 Verified</span>
</div>
</div>
</div>
{/* Card 4: Live Doppler & Radar */}
<div className="rounded-2xl bg-white border border-slate-200 p-space-lg flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:border-sky-300 hover:shadow-md transition-all duration-200 group cursor-pointer">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-700 flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl">satellite_alt</span>
</div>
<span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-800 font-label-xs-mono text-label-xs-mono font-bold uppercase border border-sky-100">IMD Radar Live</span>
</div>
<div className="flex flex-col gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-slate-900 group-hover:text-sky-700 transition-colors font-bold">Rain &amp; Flood Radar</h3>
<p className="font-body-sm text-body-sm text-slate-600 line-clamp-2">
                Review high-resolution satellite precipitation reflectivity for Patna &amp; Kosi Basin.
              </p>
</div>
</div>
<div className="pt-space-md mt-space-md border-t border-slate-100 flex items-center justify-between">
<span className="font-label-md text-label-md text-sky-700 font-bold group-hover:underline">Inspect Radar →</span>
<div className="flex items-center gap-1 text-slate-400 font-label-xs-mono text-label-xs-mono font-medium">
<span className="">Sweep: 14m ago</span>
</div>
</div>
</div>
</div>
</div>
{/* Bottom Section: Map Insight & Live Feed */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/* Visual Map & Radar Preview (7 cols) */}
<div className="lg:col-span-7 flex flex-col gap-space-md rounded-2xl bg-white border border-slate-200 p-space-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-indigo-700 text-2xl">layers</span>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-slate-900 font-bold">Local Inundation Heatmap</h3>
<span className="font-body-sm text-body-sm text-slate-500">Ward 14 perimeter, Patna • High resolution</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-label-md text-label-md hover:bg-slate-200 transition-colors font-semibold">Shelters</button>
<button className="px-3 py-1 rounded-lg bg-indigo-700 text-white font-label-md text-label-md font-semibold shadow-sm">Flood Depth</button>
</div>
</div>
{/* Map Container */}
<div className="relative w-full h-80 rounded-xl overflow-hidden shadow-inner border border-slate-200">
<div className="w-full h-full bg-cover bg-center rounded-xl" data-location="Patna Sadar, Bihar, India" style={{ backgroundImage: "url('https" }}></div>
{/* Map Overlay Telemetry Card */}
<div className="absolute bottom-4 left-4 right-4 p-space-md rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-3 h-3 rounded-full bg-sky-500 animate-pulse"></span>
<div className="flex flex-col">
<span className="font-label-xs-mono text-label-xs-mono uppercase text-slate-400 font-semibold">Active Route Safety</span>
<span className="font-label-lg text-label-lg text-slate-900 font-bold">Bailey Road Elevated • Unobstructed</span>
</div>
</div>
<div className="flex items-center gap-space-md">
<div className="flex flex-col text-right">
<span className="font-label-xs-mono text-label-xs-mono text-slate-400 uppercase font-semibold">Active Rescue Rafts</span>
<span className="font-label-lg text-label-lg text-sky-700 font-bold">14 Vessels Active</span>
</div>
<Link href="/admin" className="px-3 py-1.5 rounded-lg bg-indigo-700 text-white font-label-md text-label-md font-semibold hover:bg-indigo-800 transition-colors shadow-sm">Full GIS View</Link>
</div>
</div>
</div>
{/* Quick Status Metrics Below Map */}
<div className="grid grid-cols-3 gap-space-sm pt-space-xs">
<div className="p-space-sm rounded-xl bg-slate-50 border border-slate-200 flex flex-col">
<span className="font-label-xs-mono text-label-xs-mono text-slate-500 uppercase font-semibold">Pumping Stations</span>
<span className="font-label-lg text-label-lg text-slate-900 font-bold">12/14 Operational</span>
</div>
<div className="p-space-sm rounded-xl bg-slate-50 border border-slate-200 flex flex-col">
<span className="font-label-xs-mono text-label-xs-mono text-slate-500 uppercase font-semibold">Power Substation</span>
<span className="font-label-lg text-label-lg text-sky-700 font-bold">Grid Stable (220kV)</span>
</div>
<div className="p-space-sm rounded-xl bg-slate-50 border border-slate-200 flex flex-col">
<span className="font-label-xs-mono text-label-xs-mono text-slate-500 uppercase font-semibold">Emergency Radio</span>
<span className="font-label-lg text-label-lg text-indigo-700 font-bold">FM 100.1 MHz Active</span>
</div>
</div>
</div>
{/* Feed & Broadcast Advisories (5 cols) */}
<div className="lg:col-span-5 flex flex-col gap-space-md rounded-2xl bg-white border border-slate-200 p-space-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-red-600 text-2xl">campaign</span>
<h3 className="font-headline-sm text-headline-sm text-slate-900 font-bold">Official Advisories &amp; Relief</h3>
</div>
<span className="font-label-xs-mono text-label-xs-mono uppercase text-sky-700 font-bold">Verified Feeds</span>
</div>
<div className="flex flex-col gap-space-sm">
{/* Alert 1: Barrage Water Release */}
<div className="p-space-md rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-space-xs shadow-sm hover:bg-red-50/50 hover:border-red-200 transition-colors">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-label-xs-mono text-label-xs-mono uppercase font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
                Emergency Broadcast
              </span>
<span className="font-label-xs-mono text-label-xs-mono text-slate-400 font-medium">15 mins ago</span>
</div>
<h4 className="font-label-lg text-label-lg text-slate-900 font-bold">High Water Discharge from Valmiki Barrage</h4>
<p className="font-body-sm text-body-sm text-slate-600">
              Discharge of 380,000 cusecs anticipated at 16:00 IST. Low-lying riverbank settlements along Ward 12–15 must shift valuable assets above ground floor.
            </p>
<div className="pt-1 flex items-center justify-between text-slate-500 font-label-xs-mono text-label-xs-mono font-medium">
<span className="">Source: Bihar Water Resources Dept</span>
<span className="text-red-600 font-semibold hover:underline cursor-pointer">Official PDF →</span>
</div>
</div>
{/* Alert 2: Relief Distribution */}
<div className="p-space-md rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-space-xs shadow-sm hover:bg-sky-50/50 hover:border-sky-200 transition-colors">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 font-label-xs-mono text-label-xs-mono uppercase font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
                Relief Distribution
              </span>
<span className="font-label-xs-mono text-label-xs-mono text-slate-400 font-medium">42 mins ago</span>
</div>
<h4 className="font-label-lg text-label-lg text-slate-900 font-bold">Clean Drinking Water Tankers Arrived</h4>
<p className="font-body-sm text-body-sm text-slate-600">
              Two 5,000L clean drinking water tankers stationed at Gandhi Maidan gate 4 relief hub. Free halogen water purification tablets also distributed.
            </p>
<div className="pt-1 flex items-center justify-between text-slate-500 font-label-xs-mono text-label-xs-mono font-medium">
<span className="">Source: Red Cross Society Bihar</span>
<span className="text-sky-700 font-semibold hover:underline cursor-pointer">View Point →</span>
</div>
</div>
{/* Alert 3: Medical Mobile Clinic */}
<div className="p-space-md rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-space-xs shadow-sm hover:bg-indigo-50/50 hover:border-indigo-200 transition-colors">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-label-xs-mono text-label-xs-mono uppercase font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-700"></span>
                Medical Alert
              </span>
<span className="font-label-xs-mono text-label-xs-mono text-slate-400 font-medium">1 hr ago</span>
</div>
<h4 className="font-label-lg text-label-lg text-slate-900 font-bold">Mobile Health Unit Stationed at Rajendra Nagar</h4>
<p className="font-body-sm text-body-sm text-slate-600">
              Doctor team equipped with anti-venom, ORS packets, tetanus toxoids, and primary wound dressings available at St. Paul School ground.
            </p>
<div className="pt-1 flex items-center justify-between text-slate-500 font-label-xs-mono text-label-xs-mono font-medium">
<span className="">Source: National Health Mission</span>
<span className="text-indigo-700 font-semibold hover:underline cursor-pointer">Route Map →</span>
</div>
</div>
</div>
<button className="w-full py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 font-label-md text-label-md font-semibold transition-colors text-center" type="button">
          View All 18 Regional Advisories
        </button>
</div>
</div>
</div>

</div></main></div>


    </div>
  );
}
