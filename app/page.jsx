'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

export default function LandingPage() {
  const { openSos } = useAuth();

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Navbar activePage="overview" />
      
<main className="w-full pt-20 min-h-screen">
<div className="flex flex-col w-full">
{/* Top Broadcast Ticker */}
<aside aria-label="Cross-Border Live Alert Strip" className="w-full bg-[#F8FAFC] border-b border-[#E2E8F0] py-space-xs px-margin-desktop overflow-hidden">
<div className="max-w-7xl mx-auto flex items-center justify-between gap-space-md text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-space-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
</span>
<span className="font-bold text-red-700 uppercase tracking-wider">CRITICAL RADAR FEED</span>
<span className="hidden sm:inline text-slate-300">/</span>
<span className="text-slate-800 font-medium truncate">Birgunj–Raxaul Sluice Gates opened 62% at 04:30 IST</span>
</div>
<div className="hidden lg:flex items-center gap-space-lg text-slate-500 font-medium">
<span className="">Nepal DHM: Narayani River (+0.74m Warning)</span>
<span className="">•</span>
<span className="">Bihar SDMA: 14 Relief NDRF Units Staged</span>
<span className="text-secondary font-bold">Uplink: 99.98% Healthy</span>
</div>
</div>
</aside>
{/* Hero Section with Tactical Spatial Depth */}
<section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF] pt-space-3xl pb-space-4xl px-margin-desktop">
{/* Atmospheric Grid Mesh */}
<div className="absolute inset-0 pointer-events-none opacity-40">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="48" id="tactical-grid" patternUnits="userSpaceOnUse" width="48">
<path className="text-slate-300" d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" stroke-width="0.75"></path>
<circle className="fill-primary/20" cx="0" cy="0" r="1.5"></circle>
</pattern>
</defs>
<rect fill="url(#tactical-grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute top-1/3 right-10 w-[420px] h-[280px] bg-sky-200/40 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
{/* Cross-border Regional Badge */}
<div className="inline-flex items-center gap-space-sm px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm mb-space-xl">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="font-label-sm text-label-sm text-emerald-700 font-bold uppercase tracking-wider">Hydrological Sync Active</span>
</div>
<span className="text-slate-300">|</span>
<span className="font-label-md text-label-md text-slate-600">Gangetic Plain &amp; Himalayan Foothills Grid</span>
</div>
{/* Hero Typography */}
<h1 className="max-w-5xl font-display-lg text-display-lg text-[#0F172A] tracking-tight leading-[1.12] mb-space-lg">
            Unified Flood Intelligence &amp; Crisis Coordination Grid across
            <span className="bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent"> India &amp; Nepal</span>
</h1>
<p className="max-w-3xl font-body-lg text-body-lg text-slate-600 mb-space-2xl">
            Empowering Citizens, First Responders, and Government Disaster Agencies with real-time hydrologic forecasting, crowd-sourced field reports, and life-saving evacuation pathways.
          </p>

{/* Primary Action Cluster */}
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

{/* Live Flood Risk Banner Card */}
<div className="w-full max-w-5xl rounded-2xl bg-white border border-red-200/80 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06)] p-space-md md:p-space-lg text-left">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="p-2.5 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[26px] animate-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
</div>
<div>
<div className="flex flex-wrap items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded-full bg-red-600 text-white font-label-sm text-label-sm uppercase tracking-wider font-bold">Severe Warning</span>
<span className="font-headline-sm text-headline-sm text-slate-900 font-bold">Kosi &amp; Gandak Basin (Bihar - Nepal border)</span>
</div>
<p className="font-body-sm text-body-sm text-slate-600">
                    Discharge: <span className="text-slate-900 font-semibold">4.82 Lakh Cusecs</span> • Stage: <span className="text-red-600 font-bold">+1.82m Danger Mark</span> • Inundation threat active across Supaul, Madhubani &amp; Sunsari districts.
                  </p>
</div>
</div>
<div className="flex items-center gap-space-md shrink-0 self-end lg:self-center">
<div className="text-right">
<span className="block font-label-sm text-label-sm text-secondary uppercase font-semibold">Evacuation Route</span>
<span className="font-label-md text-label-md text-slate-900 font-bold">Corridor #4 (NH-57 Elevated) Active</span>
</div>
<Link className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-label-md text-label-md font-semibold flex items-center gap-1 transition-colors" href="/citizen">
<span className="">Evacuation Protocol</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
</div>
</div>
</div>
</section>
{/* Live Hydrological Bento Grid */}
<section className="w-full py-space-3xl px-margin-desktop bg-white border-y border-[#E2E8F0]">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">Telemetry Stream</span>
<h2 className="font-headline-lg text-headline-lg text-[#0F172A] tracking-tight">Real-Time Sensor &amp; Relief Ledger</h2>
</div>
<div className="flex items-center gap-space-sm text-slate-600 font-label-md text-label-md font-medium">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="">Aggregated across CWC India &amp; Nepal DHM Gauges</span>
</div>
</div>
{/* Bento Layout */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/* Stat 1: Active Alert Zones */}
<div className="flex flex-col justify-between p-space-lg rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04)] hover:shadow-md transition-all">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-slate-500 font-semibold uppercase">Critical Reach</span>
<span className="p-1.5 rounded-lg bg-red-100 text-red-600">
<span className="material-symbols-outlined text-[18px]">crisis_alert</span>
</span>
</div>
<span className="block font-telemetry-num text-telemetry-num text-slate-900 mb-1">28 Districts</span>
<p className="font-body-sm text-body-sm text-slate-600">Assam, North Bihar &amp; Eastern Terai Nepal under active water-level watch.</p>
</div>
{/* Inline Sparkline Chart */}
<div className="mt-space-md pt-space-sm border-t border-slate-100">
<div className="flex items-center justify-between font-label-sm text-label-sm text-slate-500 mb-1.5">
<span className="">72h River Elevation</span>
<span className="text-red-600 font-bold">+34cm/hr</span>
</div>
<svg className="w-full h-10 text-red-500" fill="none" viewBox="0 0 160 36">
<path d="M 0,28 L 24,26 L 48,29 L 72,21 L 96,24 L 120,14 L 144,9 L 160,4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
<path d="M 0,28 L 24,26 L 48,29 L 72,21 L 96,24 L 120,14 L 144,9 L 160,4 L 160,36 L 0,36 Z" fill="currentColor" fill-opacity="0.12"></path>
</svg>
</div>
</div>
{/* Stat 2: Operational Shelters */}
<div className="flex flex-col justify-between p-space-lg rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04)] hover:shadow-md transition-all">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-slate-500 font-semibold uppercase">Emergency Logistics</span>
<span className="p-1.5 rounded-lg bg-sky-100 text-secondary">
<span className="material-symbols-outlined text-[18px]">night_shelter</span>
</span>
</div>
<span className="block font-telemetry-num text-telemetry-num text-slate-900 mb-1">342 Verified Camps</span>
<p className="font-body-sm text-body-sm text-slate-600">Supplied with solar purifiers, high-calorie ration, and sat-mesh comms.</p>
</div>
{/* Capacity Progress Visualization */}
<div className="mt-space-md pt-space-sm border-t border-slate-100">
<div className="flex items-center justify-between font-label-sm text-label-sm mb-2">
<span className="text-slate-500">Camps Capacity Free</span>
<span className="text-secondary font-bold">84% Available</span>
</div>
<div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full bg-secondary rounded-full" style={{ width: "84%" }}></div>
</div>
<span className="block mt-1.5 font-label-sm text-label-sm text-slate-500 text-right font-medium">41,200 beds unoccupied</span>
</div>
</div>
{/* Stat 3: Lives Assisted & Rescued */}
<div className="flex flex-col justify-between p-space-lg rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04)] hover:shadow-md transition-all">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-slate-500 font-semibold uppercase">Field Evacuations</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-label-sm text-label-sm font-bold">+18% (72h)</span>
</div>
<span className="block font-telemetry-num text-telemetry-num text-slate-900 mb-1">14,890 Citizens</span>
<p className="font-body-sm text-body-sm text-slate-600">Airlifted or boat-evacuated by combined SDRF, NDRF, and APF teams.</p>
</div>
{/* Status Pill Matrix */}
<div className="mt-space-md pt-space-sm border-t border-slate-100 flex flex-col gap-1.5 font-label-sm text-label-sm">
<div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
<span className="text-slate-600">Medical First Aid</span>
<span className="text-slate-900 font-bold">3,240 cases</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
<span className="text-slate-600">Livestock Relocated</span>
<span className="text-slate-900 font-bold">8,910 heads</span>
</div>
</div>
</div>
{/* Stat 4: IoT Water Telemetry */}
<div className="flex flex-col justify-between p-space-lg rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04)] hover:shadow-md transition-all">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-slate-500 font-semibold uppercase">Mesh Network</span>
<span className="p-1.5 rounded-lg bg-indigo-100 text-primary">
<span className="material-symbols-outlined text-[18px]">sensors</span>
</span>
</div>
<span className="block font-telemetry-num text-telemetry-num text-slate-900 mb-1">1,240 Gauge Stations</span>
<p className="font-body-sm text-body-sm text-slate-600">Continuous telemetry reporting cadence: 60s across Brahmaputra &amp; Ganges basins.</p>
</div>
<div className="mt-space-md pt-space-sm border-t border-slate-100 flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
<span className="font-label-sm text-label-sm text-slate-800 font-bold">Telemetry Feed</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold">0.4s Latency</span>
</div>
</div>
</div>
</div>
</section>
{/* Interactive GIS Preview & Field Intel Snapshot */}
<section className="w-full py-space-4xl px-margin-desktop bg-[#FAF8FF]">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
{/* Left Context & Features */}
<div className="lg:col-span-5 flex flex-col gap-space-lg">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">Cross-Border Command</span>
<h2 className="font-headline-lg text-headline-lg text-[#0F172A] tracking-tight mt-1 mb-space-sm">
                Actionable Spatial Intel Before River Levees Breach
              </h2>
<p className="font-body-md text-body-md text-slate-600">
                Cross-referencing high-resolution synthetic aperture radar (SAR) satellites with ultrasonic Himalayan river gauge sensors gives emergency coordinators a 36-hour predictive head start.
              </p>
</div>
<div className="space-y-space-md">
<div className="p-space-md rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-start gap-space-sm">
<div className="p-2 rounded-lg bg-indigo-100 text-primary shrink-0">
<span className="material-symbols-outlined text-[20px]">tsunami</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-slate-900 font-bold">Upstream Himalayan Surge Detection</h3>
<p className="font-body-sm text-body-sm text-slate-600">Monitors glacial lake outburst floods (GLOFs) and cloudburst volumes in Gandaki and Bagmati catchments before impact in Bihar plains.</p>
</div>
</div>
<div className="p-space-md rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-start gap-space-sm">
<div className="p-2 rounded-lg bg-sky-100 text-secondary shrink-0">
<span className="material-symbols-outlined text-[20px]">share_location</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-slate-900 font-bold">Automated Evacuation Corridors</h3>
<p className="font-body-sm text-body-sm text-slate-600">Dynamic routing detects inundated causeways and redirects military convoys and civilian columns to dry elevated embankments.</p>
</div>
</div>
<div className="p-space-md rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-start gap-space-sm">
<div className="p-2 rounded-lg bg-violet-100 text-primary-container shrink-0">
<span className="material-symbols-outlined text-[20px]">cell_tower</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-slate-900 font-bold">Hyperlocal Multilingual Broadcasts</h3>
<p className="font-body-sm text-body-sm text-slate-600">Broadcasts cell-tower level warning bulletins instantly in Maithili, Bhojpuri, Nepali, and Hindi over 2G/4G networks.</p>
</div>
</div>
</div>
<div>
<Link className="inline-flex items-center gap-space-xs px-space-xl py-3 rounded-lg bg-primary hover:bg-indigo-700 text-white font-label-md text-label-md font-bold shadow-md transition-colors" href="/admin">
<span className="">Launch Live GIS Heatmap Layer</span>
<span className="material-symbols-outlined text-[18px]">map</span>
</Link>
</div>
</div>
{/* Right Visual Map & Ground Stream */}
<div className="lg:col-span-7 flex flex-col gap-space-md">
{/* Interactive Map Container */}
<div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border border-[#E2E8F0] relative flex flex-col justify-between p-space-md bg-cover bg-center" data-location="Patna, Bihar, India" style={{ backgroundImage: "url('https" }}>
{/* Glass Top Bar inside Map */}
<div className="flex items-center justify-between p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 border border-slate-200 shadow-sm">
<div className="flex items-center gap-2 font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
<span className="text-slate-900 font-bold">LIVE CWC-DHM DATASET: REGION 07</span>
</div>
<div className="flex items-center gap-2 font-label-sm text-label-sm">
<span className="px-2 py-0.5 rounded bg-sky-100 text-secondary font-bold">SAR Inundation Mesh</span>
<span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">1:25,000 Scale</span>
</div>
</div>
{/* Bottom Floater Widget inside Map */}
<div className="p-space-sm rounded-xl bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 shadow-lg flex items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[28px]">water_do</span>
<div>
<span className="block font-label-sm text-label-sm text-slate-500">Kosi River Barahakshetra (Nepal)</span>
<span className="font-label-md text-label-md font-bold text-slate-900">Gauge: 164.20m (Danger: 165.00m)</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-md bg-red-600 text-white font-label-sm text-label-sm font-bold">RISING FAST</span>
</div>
</div>
{/* Field Intel Mini-Cards Strip */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="relative overflow-hidden rounded-xl bg-white border border-[#E2E8F0] shadow-sm p-space-md flex gap-space-md items-center">
<img className="w-20 h-20 rounded-lg object-cover shrink-0" data-alt="Rescue boat carrying families during flood relief operations in rural Bihar with cloudy monsoon skies, deep blue safety jackets, documentary photography style, high clarity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiWe-b2PqYEoMfiOHYLM3CH4YA_H9APbjaAHihRcicyzY9lJ1J3WGoDrt1yjl-9_4oP-LqyFDfshAn1cKW0X_uDat0m7qJYvD0PGxxY7dI6lpGfIuh21CmtqHoBbqPoMpSQIouQUi5sV0NC31YT8va5WTqCS79JLaPFVvxDpMX0wSW1hRzT8eN4uZctnMYg0EeCVnSeDdPtKJAv_tk75PLXZxaoyobEIAeb3KJqmRCTBuIdJzIW_XWiQ" />
<div className="min-w-0">
<span className="font-label-sm text-label-sm text-secondary font-bold">Verified Drone Recon</span>
<h4 className="font-title-md text-title-md text-slate-900 font-bold truncate">Biratnagar Embankment</h4>
<p className="font-body-sm text-body-sm text-slate-600 line-clamp-2">Seepage mitigated via sandbags. Structural integrity: 78% stable.</p>
</div>
</div>
<div className="relative overflow-hidden rounded-xl bg-white border border-[#E2E8F0] shadow-sm p-space-md flex gap-space-md items-center">
<img className="w-20 h-20 rounded-lg object-cover shrink-0" data-alt="Disaster response team staging satellite dish and communication equipment next to an inflatable rescue craft during monsoon flood crisis, dusk lighting with cool indigo tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA541Rz2egYFiFcBz_qC7Ca_P2TR6OwecJPDKg0VMhYhlqCsM2l5AxDiYch-7oX6m0ZzcXf84iY9z3R2aW2GiwxIl_9iIB-6FZZH8Dh_dXl5q6C71BOZi_2IHmeQY_J2cJbr0JoFJgYgQT-KNHVt1DNaEAtsthRLSUrTB5WIOXKxETEhegcLgMkeWVrZUA-ONZZq9V2eROmJn_UgCP0tk97sSU_TUfS99cYe9imVmluwo0sQyw_EkhEXQ" />
<div className="min-w-0">
<span className="font-label-sm text-label-sm text-primary font-bold">Emergency Comms Hub</span>
<h4 className="font-title-md text-title-md text-slate-900 font-bold truncate">Darbhanga Field Relay</h4>
<p className="font-body-sm text-body-sm text-slate-600 line-clamp-2">HAM radio link established with Janakpur Civil Protection outpost.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Core System Pillars / Feature Cards */}
<section className="w-full py-space-4xl px-margin-desktop bg-white border-y border-[#E2E8F0]">
<div className="max-w-7xl mx-auto flex flex-col gap-space-3xl">
<div className="text-center max-w-3xl mx-auto">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">Architectural Superiority</span>
<h2 className="font-headline-lg text-headline-lg text-[#0F172A] tracking-tight mt-1 mb-space-sm">
              Engineered for Severe Infrastructure Disruption
            </h2>
<p className="font-body-md text-body-md text-slate-600">When cellular towers collapse, power grids submerge, and roads wash out, Sachet’s decentralized topology keeps rescue assets coordinated and civilians guided.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
{/* Feature 1 */}
<div className="group p-space-lg rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-primary flex items-center justify-center mb-space-md group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">file_download_off</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-slate-900 font-bold mb-2">AI Inundation Forecasting</h3>
<p className="font-body-sm text-body-sm text-slate-600">
                  Deep hydrological simulation computes terrain elevation models (DEM) against precipitation forecasts, delivering 10-meter resolution flood depth estimations.
                </p>
</div>
<div className="pt-space-md mt-space-md border-t border-slate-100 flex items-center text-primary font-label-md text-label-md font-bold">
<span className="">Model Accuracy: 94.6%</span>
<span className="material-symbols-outlined text-[16px] ml-1">chevron_right</span>
</div>
</div>
{/* Feature 2 */}
<div className="group p-space-lg rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-sky-50 text-secondary flex items-center justify-center mb-space-md group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">sms</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-slate-900 font-bold mb-2">Offline SMS &amp; PWA Fallback</h3>
<p className="font-body-sm text-body-sm text-slate-600">
                  Full system capability operates offline through cached Progressive Web Apps. Citizens submit geo-tagged distress SOS queries via toll-free two-way SMS shortcodes.
                </p>
</div>
<div className="pt-space-md mt-space-md border-t border-slate-100 flex items-center text-secondary font-label-md text-label-md font-bold">
<span className="">Zero Data Required</span>
<span className="material-symbols-outlined text-[16px] ml-1">chevron_right</span>
</div>
</div>
{/* Feature 3 */}
<div className="group p-space-lg rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-space-md group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">inventory_2</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-slate-900 font-bold mb-2">Verified Relief Distribution</h3>
<p className="font-body-sm text-body-sm text-slate-600">
                  Auditable logistics ledger pairs incoming NGO donations with active shelter demands. Prevents supply bottlenecks and guarantees clean water and baby formula delivery.
                </p>
</div>
<div className="pt-space-md mt-space-md border-t border-slate-100 flex items-center text-emerald-700 font-label-md text-label-md font-bold">
<span className="">Zero-Duplication Ledger</span>
<span className="material-symbols-outlined text-[16px] ml-1">chevron_right</span>
</div>
</div>
{/* Feature 4 */}
<div className="group p-space-lg rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-violet-50 text-primary-container flex items-center justify-center mb-space-md group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">hub</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-slate-900 font-bold mb-2">Cross-Border Sensor Network</h3>
<p className="font-body-sm text-body-sm text-slate-600">
                  Harmonizes disparate data protocols between Indian and Nepalese meteorological agencies into a single unified JSON API pipeline for instantaneous coordinated response.
                </p>
</div>
<div className="pt-space-md mt-space-md border-t border-slate-100 flex items-center text-primary-container font-label-md text-label-md font-bold">
<span className="">Dual-Nation Treaty Protocol</span>
<span className="material-symbols-outlined text-[16px] ml-1">chevron_right</span>
</div>
</div>
</div>
</div>
</section>
{/* Ground Operational Photo Narrative Section */}
<section className="w-full py-space-3xl px-margin-desktop bg-[#FAF8FF]">
<div className="max-w-7xl mx-auto rounded-3xl bg-white border border-[#E2E8F0] p-space-xl overflow-hidden shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04)]">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
<div className="lg:col-span-5 flex flex-col gap-space-md">
<span className="px-3 py-1 rounded-full bg-sky-100 text-secondary font-label-sm text-label-sm font-bold w-max uppercase tracking-wider">Joint Command Standard</span>
<h2 className="font-headline-lg text-headline-lg text-[#0F172A] tracking-tight">Coordinated Response in Minutes, Not Hours</h2>
<p className="font-body-md text-body-md text-slate-600">From the moment flood gauges signal abnormal Himalayan surges, Sachet automatically prepares disaster management task forces, deploys warning sirens to endangered villages, and updates regional shelter rosters.</p>
<div className="flex items-center gap-space-lg pt-space-xs font-label-md text-label-md">
<div className="flex items-center gap-2 text-slate-800 font-semibold">
<span className="material-symbols-outlined text-secondary">check_circle</span>
<span className="">Sub-second alert dispatch</span>
</div>
<div className="flex items-center gap-2 text-slate-800 font-semibold">
<span className="material-symbols-outlined text-secondary">check_circle</span>
<span className="">100% verified shelter beds</span>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="w-full h-80 rounded-2xl overflow-hidden shadow-md border border-[#E2E8F0]">
<img className="w-full h-full object-cover" data-alt="National disaster response force officers in orange and indigo uniforms operating an emergency telemetry command console with multiple high resolution digital maps of river basins during an active flood monitoring mission, dramatic focused lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApG0wHBoh8gGAEMEJrWGHyX8EqOIY8wZFeyNSTqkZZ5DkYkNcTsOZuwV7vVexaTmDFgw4pkidwPMfJUxM34xaSIudJuODVTZqrq5ZxW8K3rYHZwXvRM1UpluHU4UrsSd2tw29IFEWjjhuzS7h4_KJhZPn-6hzt98X3lVYSzw2iLgwMb5Z5lUvMN6saOOkj35ynpeRBclL_Cu-xZ2Q8v7WXheuNPoHbBHLjakdLK775aH7UvCR0-a2Omg" />
</div>
</div>
</div>
</div>
</section>
{/* Institutional Endorsement & Treaty Partners */}
<section className="w-full py-space-2xl px-margin-desktop bg-white border-b border-[#E2E8F0]">
<div className="max-w-7xl mx-auto flex flex-col items-center gap-space-lg">
<span className="font-label-sm text-label-sm text-slate-500 uppercase tracking-widest text-center font-bold">
            Official Inter-Governmental Collaboration &amp; Sensor Telemetry Partners
          </span>
<div className="flex flex-wrap items-center justify-center gap-space-xl md:gap-space-3xl">
{/* NDRF India */}
<div className="flex items-center gap-space-xs group cursor-pointer hover:opacity-80 transition-opacity">
<div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 font-headline-sm font-bold">
                IN
              </div>
<div className="flex flex-col text-left">
<span className="font-label-md text-label-md text-slate-900 font-bold leading-tight">NDRF India</span>
<span className="font-label-sm text-label-sm text-slate-500">National Disaster Response</span>
</div>
</div>
{/* Armed Police Force Nepal */}
<div className="flex items-center gap-space-xs group cursor-pointer hover:opacity-80 transition-opacity">
<div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 font-headline-sm font-bold">
                NP
              </div>
<div className="flex flex-col text-left">
<span className="font-label-md text-label-md text-slate-900 font-bold leading-tight">APF Disaster Wing</span>
<span className="font-label-sm text-label-sm text-slate-500">Armed Police Force, Nepal</span>
</div>
</div>
{/* Central Water Commission */}
<div className="flex items-center gap-space-xs group cursor-pointer hover:opacity-80 transition-opacity">
<div className="w-9 h-9 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">water</span>
</div>
<div className="flex flex-col text-left">
<span className="font-label-md text-label-md text-slate-900 font-bold leading-tight">CWC India</span>
<span className="font-label-sm text-label-sm text-slate-500">Central Water Commission</span>
</div>
</div>
{/* Nepal DHM */}
<div className="flex items-center gap-space-xs group cursor-pointer hover:opacity-80 transition-opacity">
<div className="w-9 h-9 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">cloudy_snowing</span>
</div>
<div className="flex flex-col text-left">
<span className="font-label-md text-label-md text-slate-900 font-bold leading-tight">Nepal DHM</span>
<span className="font-label-sm text-label-sm text-slate-500">Dept of Hydrology &amp; Meteorology</span>
</div>
</div>
</div>
</div>
</section>
{/* Interactive Crisis Dispatch CTA Strip */}
<section className="w-full py-space-3xl px-margin-desktop bg-[#FAF8FF]">
<div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-primary-container via-indigo-900 to-slate-900 p-space-xl md:p-space-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-space-xl text-white">
<div className="flex flex-col gap-space-xs max-w-2xl text-left">
<span className="font-label-sm text-label-sm text-sky-300 font-bold uppercase tracking-wider">Are you trapped or coordinating relief?</span>
<h2 className="font-headline-lg text-headline-lg text-white font-extrabold tracking-tight">Emergency Response Channels are 100% Operational</h2>
<p className="font-body-md text-body-md text-slate-200">Dial <span className="text-white font-bold underline">112 (India)</span> or <span className="text-white font-bold underline">1149 (Nepal)</span> or report directly through the Sachet secure incident ledger for immediate geospatial relay.</p>
</div>
<div className="flex flex-wrap items-center gap-space-md shrink-0">
<a className="px-space-xl py-3.5 rounded-xl bg-white text-slate-900 font-label-md text-label-md font-bold hover:bg-slate-100 transition-colors shadow-lg" href="/citizen">
              Log Rescue Incident
            </a>
<a className="px-space-lg py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors font-label-md text-label-md font-bold" onClick={openSos} href="javascript:void(0)">
              Toll-Free Helplines
            </a>
</div>
</div>
</section>
</div>
</main>
<footer className="w-full bg-white border-t border-[#E2E8F0] py-space-xl">
<div className="w-full px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-slate-500">
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm uppercase text-secondary font-bold">Sachet IN-NP</span>
<span className="">Cross-Border Hydrological Early Warning &amp; Disaster Mitigation Network</span>
</div>
<div className="flex items-center gap-space-lg font-label-sm text-label-sm">
<span className="hover:text-primary cursor-pointer transition-colors font-medium">NDRF Relay</span>
<span className="hover:text-primary cursor-pointer transition-colors font-medium">Nepal DHM Api</span>
<span className="hover:text-primary cursor-pointer transition-colors font-medium">CWC Telemetry</span>
</div>
</div>
</footer>





    </div>
  );
}
