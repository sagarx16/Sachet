'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
        <div className="flex flex-col gap-4 overflow-y-auto">
          {/* Sub-Desk Tabs */}
          <div>
            <div className="px-space-md text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Operations Desks
            </div>
            <nav className="flex flex-col gap-1">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      showToast(`Switched to ${tab.label} desk`, 'info');
                    }}
                    className={`flex items-center gap-space-sm px-space-md py-2.5 rounded-xl font-title-md text-sm transition-colors text-left w-full cursor-pointer ${
                      isActive
                        ? 'bg-primary text-white font-bold shadow-sm'
                        : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Quick Cross-Portal Switcher */}
          <div className="pt-3 border-t border-slate-200">
            <div className="px-space-md text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Other Portals
            </div>
            <nav className="flex flex-col gap-1">
              <Link
                href="/"
                className="flex items-center gap-space-sm px-space-md py-2 rounded-xl text-slate-600 hover:bg-surface-container-low hover:text-on-surface text-xs font-semibold transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">home</span>
                <span>Overview (Home)</span>
              </Link>
              <Link
                href="/citizen"
                className="flex items-center gap-space-sm px-space-md py-2 rounded-xl text-slate-600 hover:bg-surface-container-low hover:text-on-surface text-xs font-semibold transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">person</span>
                <span>Citizen Portal</span>
              </Link>
              <Link
                href="/admin"
                className="flex items-center gap-space-sm px-space-md py-2 rounded-xl text-slate-600 hover:bg-surface-container-low hover:text-on-surface text-xs font-semibold transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">shield_person</span>
                <span>Govt Command Desk</span>
              </Link>
              <Link
                href="/login"
                className="flex items-center gap-space-sm px-space-md py-2 rounded-xl text-slate-600 hover:bg-surface-container-low hover:text-on-surface text-xs font-semibold transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">login</span>
                <span>Switch / Login</span>
              </Link>
            </nav>
          </div>
        </div>

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
      <div className="pl-64">
        {activeTab === 'overview' && (
          <main className="relative w-full bg-background min-h-screen px-gutter-desktop py-space-xl">
            <div className="flex flex-col w-full gap-space-xl">
{/* Dynamic Operational Telemetry Ticker */}
<div className="w-full bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-wrap items-center justify-between gap-space-md"><div className="flex items-center gap-space-sm flex-wrap"><div className="flex items-center gap-1.5 px-space-xs py-1 rounded-md bg-error-container text-on-error-container"><span className="material-symbols-outlined text-[16px] animate-pulse">crisis_alert</span><span className="font-label-sm text-label-sm uppercase font-bold tracking-wider">L3 SURGE</span></div><div className="h-4 w-px bg-surface-container-high hidden sm:block"></div><div className="flex items-center gap-1.5 text-on-surface-variant font-label-md"><span className="material-symbols-outlined text-[16px] text-primary">water_drop</span><span className="text-on-surface font-bold">3.48L Cusec</span><span className="material-symbols-outlined text-[14px] text-error font-bold">trending_up</span></div><div className="h-4 w-px bg-surface-container-high hidden sm:block"></div><div className="flex items-center gap-1 text-on-surface-variant font-label-md"><span className="material-symbols-outlined text-[16px] text-tertiary">wifi_tethering</span><span className="text-tertiary font-bold">99.4%</span></div></div><div className="flex items-center gap-1.5"><button className="px-2.5 py-1 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-label-md flex items-center gap-1 transition-colors"><span className="material-symbols-outlined text-[16px]">tune</span>Telemetry</button><button className="px-2.5 py-1 rounded-lg bg-primary-container text-on-primary font-label-md flex items-center gap-1 shadow-sm hover:opacity-95 transition-opacity"><span className="material-symbols-outlined text-[16px]">download</span>SITREP</button></div></div>
{/* Top KPI Summary Metric Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-lg"><div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow"><div className="flex items-start justify-between"><div><span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-primary">holiday_village</span>Camps</span><div className="flex items-baseline gap-1.5 mt-1"><span className="font-telemetry-num text-telemetry-num text-on-surface">38</span><span className="font-label-sm text-label-sm text-secondary font-semibold">/ 42</span></div></div><div className="w-9 h-9 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed"><span className="material-symbols-outlined text-[20px]">roofing</span></div></div><div className="mt-space-sm flex flex-col gap-1.5"><div className="flex justify-between items-center font-label-sm text-label-sm"><span className="text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[13px]">group</span>19.1k / 24.5k</span><span className="text-amber-600 font-bold">78%</span></div><div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden flex"><div className="bg-amber-500 h-full rounded-full" style={{ width: "78%" }}></div></div><div className="flex items-center justify-between text-on-surface-variant font-label-sm text-[11px] pt-0.5"><span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>5.4k Free</span><span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-error"></span>4 Full</span></div></div></div><div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow"><div className="flex items-start justify-between"><div><span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-primary">sailing</span>Squads</span><div className="flex items-baseline gap-1.5 mt-1"><span className="font-telemetry-num text-telemetry-num text-on-surface">24</span><span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-0.5"><span className="material-symbols-outlined text-[13px]">verified</span>100%</span></div></div><div className="w-9 h-9 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed"><span className="material-symbols-outlined text-[20px]">groups</span></div></div><div className="mt-space-sm grid grid-cols-2 gap-2"><div className="bg-surface-container-low p-1.5 rounded-lg flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span><div><div className="font-title-md text-title-md leading-none text-on-surface font-bold">19</div><div className="text-[10px] text-on-surface-variant uppercase font-semibold">Active</div></div></div><div className="bg-surface-container-low p-1.5 rounded-lg flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary-container"></span><div><div className="font-title-md text-title-md leading-none text-on-surface font-bold">5</div><div className="text-[10px] text-on-surface-variant uppercase font-semibold">Standby</div></div></div></div></div><div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow"><div className="flex items-start justify-between"><div><span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-primary">inventory_2</span>Stock</span><div className="flex items-baseline gap-1.5 mt-1"><span className="font-telemetry-num text-telemetry-num text-on-surface">88%</span><span className="font-label-sm text-label-sm text-tertiary font-bold uppercase tracking-wider">OK</span></div></div><div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed"><span className="material-symbols-outlined text-[20px]">medical_services</span></div></div><div className="mt-space-sm flex items-center justify-between text-on-surface font-label-sm text-label-sm bg-surface-container-low p-1.5 rounded-lg"><div className="text-center"><div className="font-bold text-on-surface leading-tight">42.3k</div><div className="text-on-surface-variant text-[10px]">Rations</div></div><div className="h-4 w-px bg-surface-container-high"></div><div className="text-center"><div className="font-bold text-on-surface leading-tight">8.4k</div><div className="text-on-surface-variant text-[10px]">Meds</div></div><div className="h-4 w-px bg-surface-container-high"></div><div className="text-center"><div className="font-bold text-primary leading-tight">112</div><div className="text-on-surface-variant text-[10px]">Boats</div></div></div></div><div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow"><div className="flex items-start justify-between"><div><span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-primary">family_restroom</span>Reunited</span><div className="flex items-baseline gap-1.5 mt-1"><span className="font-telemetry-num text-telemetry-num text-on-surface">1,840</span><span className="font-label-sm text-label-sm text-tertiary font-bold">+24</span></div></div><div className="w-9 h-9 rounded-lg bg-tertiary-fixed-dim/30 flex items-center justify-center text-tertiary"><span className="material-symbols-outlined text-[20px]">how_to_reg</span></div></div><div className="mt-space-sm flex items-center justify-between font-label-sm text-label-sm"><div className="flex items-center gap-1 text-on-surface"><span className="w-2 h-2 rounded-full bg-error"></span><span className="text-[11px]">412 Pending</span></div><a className="text-primary hover:underline font-bold flex items-center text-[11px]" href="#reunification-board"><span className="material-symbols-outlined text-[14px]">arrow_forward</span></a></div></div></div>
{/* Primary Asymmetrical Grid: 7 Cols Left (Camps & Dispatch), 5 Cols Right (Inventory & Reunification) */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-xl">
{/* LEFT COLUMN (7 Cols) */}
<div className="xl:col-span-7 flex flex-col gap-space-xl">
{/* SECTION 1: Relief Camps, Hospitals & Safe Zones */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
{/* Panel Header */}
<div className="p-space-lg bg-surface-container-lowest flex flex-wrap items-center justify-between gap-space-sm"><div className="flex items-center gap-space-xs"><div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary"><span className="material-symbols-outlined text-[18px]">holiday_village</span></div><div className="flex items-center gap-2"><h2 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Safe Zones</h2><span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-[11px] font-bold">24 NODES</span></div></div><div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-lg"><button className="px-2 py-1 rounded-md bg-surface-container-lowest text-primary font-label-sm text-label-sm shadow-sm font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">grid_view</span> All</button><button className="px-2 py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors"><span className="material-symbols-outlined text-[14px]">cottage</span> Camps (14)</button><button className="px-2 py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors"><span className="material-symbols-outlined text-[14px]">local_hospital</span> CHCs (6)</button><button className="px-2 py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors"><span className="material-symbols-outlined text-[14px]">landscape</span> Highs (4)</button></div></div>
{/* Facilities List */}
<div className="p-space-lg pt-0 flex flex-col gap-space-md"><div className="p-space-md rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low transition-all flex flex-col gap-space-xs"><div className="flex flex-wrap items-center justify-between gap-2"><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm font-bold text-label-sm">#08</div><div><div className="flex items-center gap-2"><span className="font-title-md text-title-md text-on-surface font-semibold">Supaul Shelter</span><span className="px-1.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>Active</span></div><span className="font-body-sm text-[12px] text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[13px]">near_me</span> 2.4 km NE • SUP-4921</span></div></div><div className="flex items-center gap-1.5"><button className="h-8 px-2.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container-high font-label-sm flex items-center gap-1 shadow-sm transition-all"><span className="material-symbols-outlined text-[14px]">directions</span>Route</button><button className="h-8 px-2.5 rounded-lg bg-primary-container text-on-primary font-label-sm flex items-center gap-1 hover:opacity-90 shadow-sm transition-opacity"><span className="material-symbols-outlined text-[14px]">person_add</span>Direct</button></div></div><div className="bg-surface-container-lowest p-2 rounded-lg flex flex-col gap-1.5"><div className="flex justify-between items-center font-label-sm text-[12px]"><span className="text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">group</span>980 / 1.2k</span><span className="text-amber-600 font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">meeting_room</span>220 Free (81%)</span></div><div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden"><div className="bg-amber-500 h-full rounded-full" style={{ width: "81.6%" }}></div></div><div className="flex flex-wrap items-center justify-between gap-1 text-[11px] pt-0.5 text-on-surface-variant"><div className="flex items-center gap-2"><span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[13px] text-secondary">water_drop</span>94%</span><span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[13px] text-tertiary">restaurant</span>3d</span><span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[13px] text-primary">medical_services</span>2 Medics</span></div><span className="text-[10px]">4m ago</span></div></div></div><div className="p-space-md rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low transition-all flex flex-col gap-space-xs"><div className="flex flex-wrap items-center justify-between gap-2"><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-error shadow-sm font-bold"><span className="material-symbols-outlined text-[18px]">local_hospital</span></div><div><div className="flex items-center gap-2"><span className="font-title-md text-title-md text-on-surface font-semibold">Birpur CHC</span><span className="px-1.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Tier-2</span></div><span className="font-body-sm text-[12px] text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[13px]">near_me</span> 5.8 km N • BRP-1002</span></div></div><div className="flex items-center gap-1.5"><button className="h-8 px-2.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container-high font-label-sm flex items-center gap-1 shadow-sm transition-all"><span className="material-symbols-outlined text-[14px]">directions</span>Route</button><button className="h-8 px-2.5 rounded-lg bg-primary-container text-on-primary font-label-sm flex items-center gap-1 hover:opacity-90 shadow-sm transition-opacity"><span className="material-symbols-outlined text-[14px]">call</span>Triage</button></div></div><div className="bg-surface-container-lowest p-1.5 rounded-lg grid grid-cols-4 gap-1.5 text-center"><div className="p-1.5 rounded bg-surface-container-low"><div className="font-telemetry-num text-[15px] text-tertiary font-bold">4</div><div className="text-[10px] text-on-surface-variant uppercase font-semibold">ICU</div></div><div className="p-1.5 rounded bg-surface-container-low"><div className="font-telemetry-num text-[15px] text-on-surface font-bold">18</div><div className="text-[10px] text-on-surface-variant uppercase font-semibold">Beds</div></div><div className="p-1.5 rounded bg-surface-container-low"><div className="font-telemetry-num text-[15px] text-tertiary font-bold">ON</div><div className="text-[10px] text-on-surface-variant uppercase font-semibold">Power</div></div><div className="p-1.5 rounded bg-surface-container-low"><div className="font-telemetry-num text-[15px] text-secondary font-bold">320u</div><div className="text-[10px] text-on-surface-variant uppercase font-semibold">O₂</div></div></div></div><div className="p-space-md rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low transition-all flex flex-col gap-space-xs"><div className="flex flex-wrap items-center justify-between gap-2"><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-tertiary shadow-sm font-bold"><span className="material-symbols-outlined text-[18px]">terrain</span></div><div><div className="flex items-center gap-2"><span className="font-title-md text-title-md text-on-surface font-semibold">NH-57 Flyover</span><span className="px-1.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>Highland</span></div><span className="font-body-sm text-[12px] text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[13px]">near_me</span> 1.2 km W • NH57-KM14</span></div></div><div className="flex items-center gap-1.5"><button className="h-8 px-2.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container-high font-label-sm flex items-center gap-1 shadow-sm transition-all"><span className="material-symbols-outlined text-[14px]">directions</span>Route</button><button className="h-8 px-2.5 rounded-lg bg-primary-container text-on-primary font-label-sm flex items-center gap-1 hover:opacity-90 shadow-sm transition-opacity"><span className="material-symbols-outlined text-[14px]">alt_route</span>Divert</button></div></div><div className="bg-surface-container-lowest p-2 rounded-lg flex flex-col gap-1.5"><div className="flex justify-between items-center font-label-sm text-[12px]"><span className="text-on-surface-variant">2.3k / 3.5k</span><span className="text-tertiary font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[13px]">flight</span>1.2k Free</span></div><div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden"><div className="bg-tertiary h-full rounded-full" style={{ width: "65%" }}></div></div></div></div><div className="p-space-md rounded-xl bg-error-container/20 hover:bg-error-container/30 transition-all flex flex-col gap-space-xs"><div className="flex flex-wrap items-center justify-between gap-2"><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-error shadow-sm font-bold text-label-sm">!</div><div><div className="flex items-center gap-2"><span className="font-title-md text-title-md text-on-surface font-semibold">Madhubani College</span><span className="px-1.5 py-0.5 rounded-full bg-error text-on-error font-label-sm text-[10px] font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest animate-ping"></span>FULL</span></div><span className="font-body-sm text-[12px] text-error flex items-center gap-1"><span className="material-symbols-outlined text-[13px]">warning</span> 8.1 km S • Overflow Risk</span></div></div><div className="flex items-center gap-1.5"><button className="h-8 px-2.5 rounded-lg bg-error text-on-error font-label-sm flex items-center gap-1 hover:bg-error-container hover:text-on-error-container transition-colors"><span className="material-symbols-outlined text-[14px]">block</span>Halt</button></div></div><div className="bg-surface-container-lowest p-2 rounded-lg flex flex-col gap-1.5"><div className="flex justify-between items-center font-label-sm text-[12px]"><span className="text-error font-bold">790 / 800 (99%)</span><span className="text-error font-bold">10 Left</span></div><div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden"><div className="bg-error h-full rounded-full" style={{ width: "98.7%" }}></div></div></div></div></div>
</div>
{/* SECTION 2: Rescue Teams & Volunteer Live Dispatch Board */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<div className="p-space-lg flex flex-wrap items-center justify-between gap-space-sm"><div className="flex items-center gap-space-xs"><div className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary"><span className="material-symbols-outlined text-[18px]">assignment_turned_in</span></div><div className="flex items-center gap-2"><h2 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Squad Dispatch</h2><span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-bold">3 ACTIVE</span></div></div><button className="px-space-sm py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md flex items-center gap-1 shadow-sm hover:opacity-95 transition-opacity" id="btn-assign-squad"><span className="material-symbols-outlined text-[16px]">add_task</span>+ Assign</button></div>
<div className="p-space-lg pt-0 flex flex-col gap-space-sm"><div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-2 hover:bg-surface-container transition-colors"><div className="flex items-start gap-space-sm"><div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary font-bold shadow-sm shrink-0 text-label-md">A</div><div className="flex flex-col"><div className="flex items-center gap-1.5 flex-wrap"><span className="font-title-md text-title-md text-on-surface font-semibold">Squad Alpha</span><span className="px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-[10px] font-bold flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-error animate-ping"></span>URGENT</span></div><div className="text-[12px] text-on-surface-variant mt-0.5 flex items-center gap-1"><span className="font-semibold text-on-surface">Sec-4 Levee</span>•<span className="text-primary font-semibold">En-Route</span></div><div className="flex items-center gap-2 font-label-sm text-[11px] text-on-surface-variant mt-1"><span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[13px]">sailing</span>#14</span><span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[13px]">safety_check</span>30 Vests</span><span className="flex items-center gap-0.5 text-tertiary font-bold"><span className="material-symbols-outlined text-[13px]">sensors</span>CH 8</span></div></div></div><div className="flex items-center gap-1.5 shrink-0 self-end md:self-center"><button className="h-8 px-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-sm flex items-center gap-1 shadow-sm transition-all"><span className="material-symbols-outlined text-[14px]">radio</span>Hail</button><button className="h-8 px-2.5 rounded-lg bg-primary-container text-on-primary hover:opacity-90 font-label-sm flex items-center gap-1 shadow-sm transition-opacity"><span className="material-symbols-outlined text-[14px]">check</span>Done</button></div></div><div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-2 hover:bg-surface-container transition-colors"><div className="flex items-start gap-space-sm"><div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-error font-bold shadow-sm shrink-0 text-label-md">B</div><div className="flex flex-col"><div className="flex items-center gap-1.5 flex-wrap"><span className="font-title-md text-title-md text-on-surface font-semibold">Squad Bravo</span><span className="px-1.5 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[10px] font-bold">MED UNIT</span></div><div className="text-[12px] text-on-surface-variant mt-0.5 flex items-center gap-1"><span className="font-semibold text-on-surface">Birpur Triage</span>•<span className="text-tertiary font-semibold">ETA 12m</span></div><div className="flex items-center gap-2 font-label-sm text-[11px] text-on-surface-variant mt-1"><span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[13px]">medication</span>40 AV</span><span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[13px]">person</span>4 Medics</span></div></div></div><div className="flex items-center gap-1.5 shrink-0 self-end md:self-center"><button className="h-8 px-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-sm flex items-center gap-1 shadow-sm transition-all"><span className="material-symbols-outlined text-[14px]">map</span>Track</button><button className="h-8 px-2.5 rounded-lg bg-primary-container text-on-primary hover:opacity-90 font-label-sm flex items-center gap-1 shadow-sm transition-opacity"><span className="material-symbols-outlined text-[14px]">check</span>Done</button></div></div><div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-2 hover:bg-surface-container transition-colors"><div className="flex items-start gap-space-sm"><div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-tertiary font-bold shadow-sm shrink-0 text-label-md">C</div><div className="flex flex-col"><div className="flex items-center gap-1.5 flex-wrap"><span className="font-title-md text-title-md text-on-surface font-semibold">Team C</span><span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px] font-bold">LOGISTICS</span></div><div className="text-[12px] text-on-surface-variant mt-0.5 flex items-center gap-1"><span className="font-semibold text-on-surface">Camp #08</span>•<span className="text-secondary font-semibold">60% Done</span></div><div className="flex items-center gap-2 font-label-sm text-[11px] text-on-surface-variant mt-1"><span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[13px]">local_shipping</span>2 Trucks</span><span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[13px]">groups</span>12 Vols</span></div></div></div><div className="flex items-center gap-1.5 shrink-0 self-end md:self-center"><button className="h-8 px-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-sm flex items-center gap-1 shadow-sm transition-all"><span className="material-symbols-outlined text-[14px]">sync</span>Sync</button><button className="h-8 px-2.5 rounded-lg bg-primary-container text-on-primary hover:opacity-90 font-label-sm flex items-center gap-1 shadow-sm transition-opacity"><span className="material-symbols-outlined text-[14px]">check</span>Done</button></div></div></div>
</div>
</div>
{/* RIGHT COLUMN (5 Cols) */}
<div className="xl:col-span-5 flex flex-col gap-space-xl">
{/* SECTION 3: Relief Inventory & Supply Tracker */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col"><div className="p-space-md flex items-center justify-between"><div className="flex items-center gap-space-xs"><div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary"><span className="material-symbols-outlined text-[18px]">inventory_2</span></div><h2 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Inventory</h2></div><button className="px-2.5 py-1 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-label-sm font-semibold flex items-center gap-1 transition-colors"><span className="material-symbols-outlined text-[14px]">swap_horiz</span>Shift</button></div><div className="p-space-md pt-0 flex flex-col gap-2"><div className="p-2.5 rounded-xl bg-surface-container-low/60 flex flex-col gap-1.5"><div className="flex justify-between items-center"><div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-secondary">set_meal</span><span className="font-title-md text-[13px] text-on-surface font-semibold">Food &amp; Water</span></div><span className="font-telemetry-num text-[15px] font-bold text-on-surface">42.3k</span></div><div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden flex"><div className="bg-primary h-full" style={{ width: "66%" }}></div><div className="bg-secondary-container h-full" style={{ width: "24%" }}></div><div className="bg-tertiary h-full" style={{ width: "10%" }}></div></div><div className="flex items-center justify-between text-[10px] text-on-surface-variant font-semibold"><span className="">Patna: 28k</span><span className="">Transit: 10k</span><span className="">Camp 08: 4k</span></div></div><div className="p-2.5 rounded-xl bg-error-container/20 flex flex-col gap-1.5"><div className="flex justify-between items-center"><div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-error">medical_services</span><span className="font-title-md text-[13px] text-on-surface font-semibold">Meds &amp; AV</span></div><span className="font-telemetry-num text-[15px] text-error font-bold">8,450</span></div><div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden"><div className="bg-error h-full rounded-full" style={{ width: "45%" }}></div></div><div className="flex items-center justify-between font-label-sm text-[11px]"><span className="text-error font-bold flex items-center gap-0.5"><span className="material-symbols-outlined text-[13px]">warning</span>Madhubani: 45</span><button className="text-primary hover:underline font-bold text-[11px] flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px]">flight</span>Drop</button></div></div><div className="p-2.5 rounded-xl bg-surface-container-low/60 flex flex-col gap-1.5"><div className="flex justify-between items-center"><div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-tertiary">sailing</span><span className="font-title-md text-[13px] text-on-surface font-semibold">Boats (OED)</span></div><span className="font-telemetry-num text-[15px] font-bold text-on-surface">112</span></div><div className="grid grid-cols-2 gap-1.5"><div className="bg-surface-container-lowest p-1.5 rounded-lg text-center"><div className="font-bold text-on-surface text-[13px]">94</div><div className="text-[9px] text-tertiary font-bold uppercase">Active</div></div><div className="bg-surface-container-lowest p-1.5 rounded-lg text-center"><div className="font-bold text-on-surface text-[13px]">18</div><div className="text-[9px] text-secondary font-bold uppercase">Staged</div></div></div></div><div className="p-2.5 rounded-xl bg-surface-container-low/60 flex flex-col gap-1.5"><div className="flex justify-between items-center"><div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-primary">emergency</span><span className="font-title-md text-[13px] text-on-surface font-semibold">Vests &amp; Kits</span></div><span className="font-telemetry-num text-[15px] font-bold text-on-surface">15.2k</span></div><div className="flex items-center justify-between text-[10px] text-tertiary font-semibold"><span className="">Supply: 48h OK</span><span className="text-on-surface-variant font-normal">Restock: 06:00</span></div></div></div></div>
{/* SECTION 4: Family Reunification Board */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col" id="reunification-board"><div className="p-space-md flex items-center justify-between"><div className="flex items-center gap-space-xs"><div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary"><span className="material-symbols-outlined text-[18px]">how_to_reg</span></div><div className="flex items-center gap-2"><h2 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Kin Board</h2><span className="px-1.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px] font-bold">+24</span></div></div><button className="px-2.5 py-1 rounded-lg bg-primary text-on-primary hover:opacity-95 font-label-sm text-label-sm font-semibold flex items-center gap-1 shadow-sm transition-opacity"><span className="material-symbols-outlined text-[14px]">add</span>Log</button></div><div className="px-space-md pb-space-xs"><div className="relative"><span className="material-symbols-outlined absolute left-2.5 top-2 text-on-surface-variant text-[16px]">search</span><input className="w-full h-8 pl-8 pr-16 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-[12px] focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all" placeholder="UID / Name..." type="text" /><button className="absolute right-1 top-1 px-1.5 py-0.5 rounded bg-surface-container text-primary font-label-sm text-[10px] flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px]">photo_camera</span>ID</button></div></div><div className="p-space-md pt-0 flex flex-col gap-1.5"><div className="p-2 rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low transition-all flex items-center justify-between gap-2"><div className="flex items-center gap-2"><div className="relative shrink-0"><img className="w-9 h-9 rounded-lg object-cover" data-alt="Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE10cIoI0dwePJAU3M47XTp5vCuxj-buw6uIX6xwqtlsh7rzu0Vdj247fh851RqTGhJ6avTkNnv_wrG1RJ2--qSC5kzbbA-7678ff4iplaGDqC877kZKlqXAqhGH12Yih5C0gzWRMq64RcW1hPj3mILUROHpiMJiU5xyFgUvvUXQtRbk_Xr9tf507I4Lf_dIODEVIS2woS4e5wsxCw-_BxbZXx9XL8_XfNbccoqEs00yJQRI7s_mtOAw" /><span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center text-[8px] font-bold">✓</span></div><div><div className="font-title-md text-[13px] text-on-surface font-semibold flex items-center gap-1"><span className="">Aarav (12y)</span><span className="material-symbols-outlined text-[12px] text-tertiary">arrow_forward</span><span className="">Mother</span></div><div className="text-[11px] text-on-surface-variant flex items-center gap-1.5"><span className="text-tertiary font-bold">Camp #08</span><span className="">•</span><span className="">#IN-88912</span></div></div></div><span className="material-symbols-outlined text-[16px] text-tertiary">verified</span></div><div className="p-2 rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low transition-all flex items-center justify-between gap-2"><div className="flex items-center gap-2"><div className="relative shrink-0"><img className="w-9 h-9 rounded-lg object-cover" data-alt="Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkZ7-vuqzLpiIwfPzg9EUN7NS871im9-VwPyNCzTlOfU9gvUxhewQBCNbE87k6WrocS9FspaaUM1nelUbZVB2aOn3MpIx57gXsOln3wIWRR1OAFYiURHvZ1ipTvoe-PG7mAHVf0wN-8Jf8DIFlZW2uwcPlBoKAw111eamoH6UkrD8s72SqOuqB17NNnmugqHITHIl5Q7XzqBehGRphpodO32YkIIIt5uHKDNgvdGUGEOT3V3ZrpRVn6g" /><span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center text-[8px] font-bold">✓</span></div><div><div className="font-title-md text-[13px] text-on-surface font-semibold">Sharma Family (4)</div><div className="text-[11px] text-on-surface-variant flex items-center gap-1.5"><span className="text-tertiary font-bold">Birpur CHC</span><span className="">•</span><span className="">#IN-99201</span></div></div></div><span className="material-symbols-outlined text-[16px] text-tertiary">verified</span></div><div className="p-2 rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low transition-all flex items-center justify-between gap-2"><div className="flex items-center gap-2"><div className="relative shrink-0"><img className="w-9 h-9 rounded-lg object-cover" data-alt="Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJdBaJUnN9B_wPrRZKpMQfpijqUR-6v7b97kTPFvBU1Z94p5esJx0W41qH2vMRzkdGLx1JaDyaH1MehfuqMmw2Ipn0N7e79i4zSh9jXwKN97HuywDQ9jGEfIVRmpLk-C6QiHzGTbwm68ndBECvHjFCTCPipVXXP-yOapfxntUea4TnO_cR16ytgIZIgva25CkS9l2TgBFaYY2JL7xv4F_5i8BX3RlZF2ji8pQCpk7pm5ygb1bhud2nRQ" /><span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-[8px] font-bold">✆</span></div><div><div className="font-title-md text-[13px] text-on-surface font-semibold flex items-center gap-1"><span className="">Mohan Lal (68y)</span><span className="material-symbols-outlined text-[12px] text-secondary">phone_forwarded</span><span className="">Patna</span></div><div className="text-[11px] text-on-surface-variant flex items-center gap-1.5"><span className="text-secondary font-bold">Contacted</span><span className="">•</span><span className="">#IN-44219</span></div></div></div><span className="material-symbols-outlined text-[16px] text-secondary">phone_in_talk</span></div></div><div className="px-space-md py-2 bg-surface-container-low flex items-center justify-between text-on-surface-variant font-label-sm text-[11px]"><span className="">412 in queue</span><a className="text-primary font-bold hover:underline flex items-center gap-0.5" href="#">Roster <span className="material-symbols-outlined text-[12px]">chevron_right</span></a></div></div>
</div>
</div>
{/* Interactive Quick Dispatch Modal (Hidden by Default) */}
<div className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm hidden items-center justify-center p-space-md" id="dispatch-modal">
<div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-xl shadow-xl flex flex-col gap-space-md relative">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">add_task</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Direct Squad Assignment</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Configure tactical sortie &amp; reserve payload</p>
</div>
</div>
<button className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant" id="btn-close-modal">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
<div className="flex flex-col gap-space-sm mt-2">
<label className="font-label-md text-label-md text-on-surface font-semibold">Select Squad Unit</label>
<select className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none">
<option>Squad Delta (Civil Defence 8 Volunteers) - Standby</option>
<option>Squad Echo (High-Draft Boat Rescue Team) - Standby</option>
<option>Squad Fox (Drone Recon &amp; Med Drop) - Standby</option>
</select>
<label className="font-label-md text-label-md text-on-surface font-semibold mt-2">Target Sector / Evacuation Grid</label>
<input className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none" placeholder="e.g. Sector 5 West Embankment Breach Point" type="text" />
<label className="font-label-md text-label-md text-on-surface font-semibold mt-2">Urgency Priority</label>
<div className="grid grid-cols-3 gap-2">
<button className="py-2 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold hover:bg-surface-container-high" type="button">Standard</button>
<button className="py-2 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold" type="button">Priority</button>
<button className="py-2 rounded-lg bg-error text-on-error font-label-sm text-label-sm font-semibold shadow-sm" type="button">CRITICAL SOS</button>
</div>
</div>
<div className="flex items-center justify-end gap-2 mt-space-md pt-space-xs">
<button className="px-space-md py-2 rounded-lg text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-colors" id="btn-cancel-modal">
          Cancel
        </button>
<button className="px-space-lg py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:opacity-95 shadow-sm transition-opacity" id="btn-confirm-dispatch">
          Confirm &amp; Alert Squad
        </button>
</div>
</div>
</div>

</div>
          </main>
        )}

        {activeTab === 'camps' && (
          <main className="relative w-full bg-surface min-h-screen px-gutter-desktop py-space-xl">
            <div className="flex flex-col w-full">
{/* Top Ticker Bar */}
<section className="w-full bg-surface-container-low px-gutter-desktop py-space-xs flex flex-wrap items-center justify-between gap-space-sm shadow-sm">
<div className="flex items-center flex-wrap gap-space-md min-w-0">
<div className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold tracking-wider uppercase">
<span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
        Stage 3 Flood Surge
      </div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-secondary text-[18px]">waves</span>
<span>Kosi Discharge:</span>
<span className="font-telemetry-num text-body-md font-bold text-error flex items-center gap-0.5">
          3.48L Cusec
          <span className="material-symbols-outlined text-base">north_east</span>
</span>
</div>
<div className="hidden md:flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-secondary text-[18px]">rainy</span>
<span>Basin Rain:</span>
<span className="font-title-md text-title-md font-bold text-on-surface">142mm</span>
</div>
<div className="hidden lg:flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
<span>Sat-Mesh Grid:</span>
<span className="font-title-md text-title-md font-bold text-tertiary">99.4% Uplink</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<button className="inline-flex items-center gap-1 px-space-sm py-1 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md shadow-sm transition-colors" type="button">
<span className="material-symbols-outlined text-base text-secondary">sync</span>
<span>Poll Telemetry</span>
</button>
<button className="inline-flex items-center gap-1 px-space-sm py-1 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md shadow-sm transition-colors" type="button">
<span className="material-symbols-outlined text-base text-primary">download</span>
<span>SITREP.pdf</span>
</button>
</div>
</section>
{/* Metric Pulse Cards */}
<section className="w-full px-gutter-desktop pt-space-xl pb-space-sm">
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
{/* Metric 1 */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Total Shelter Cap</span>
<span className="font-telemetry-num text-telemetry-num text-on-surface mt-1">19,110 <span className="font-body-md text-body-md text-on-surface-variant font-normal">/ 24,500</span></span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">holiday_village</span>
</div>
</div>
<div className="mt-space-md">
<div className="flex justify-between items-center font-label-sm text-label-sm mb-1">
<span className="text-on-surface-variant font-semibold">78% Occupied</span>
<span className="text-secondary font-bold">5,390 Free</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
<div className="bg-primary-container h-2 rounded-full" style={{ width: "78%" }}></div>
</div>
</div>
</div>
{/* Metric 2 */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Active Safe Havens</span>
<span className="font-telemetry-num text-telemetry-num text-on-surface mt-1">38 <span className="font-body-md text-body-md text-on-surface-variant font-normal">/ 42 Ready</span></span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[22px]">verified_user</span>
</div>
</div>
<div className="mt-space-md flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm bg-surface-container-low p-space-xs rounded-lg">
<span className="flex items-center gap-1 font-semibold text-on-surface">
<span className="material-symbols-outlined text-[14px] text-primary">home</span>32 Camps
          </span>
<span className="flex items-center gap-1 font-semibold text-on-surface">
<span className="material-symbols-outlined text-[14px] text-secondary">local_hospital</span>6 Med
          </span>
<span className="flex items-center gap-1 font-semibold text-on-surface">
<span className="material-symbols-outlined text-[14px] text-tertiary">terrain</span>4 High
          </span>
</div>
</div>
{/* Metric 3 */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Core Reserves</span>
<span className="font-telemetry-num text-telemetry-num text-on-surface mt-1">94% <span className="font-body-md text-body-md text-on-surface-variant font-normal">Potable Avg</span></span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">water_drop</span>
</div>
</div>
<div className="mt-space-md grid grid-cols-2 gap-space-xs font-label-sm text-label-sm">
<div className="bg-surface-container-low px-space-xs py-1 rounded-md text-on-surface flex items-center justify-between">
<span>Rations:</span>
<span className="font-bold text-tertiary">3.2 Days</span>
</div>
<div className="bg-surface-container-low px-space-xs py-1 rounded-md text-on-surface flex items-center justify-between">
<span>Doctors:</span>
<span className="font-bold text-primary">18 On-Duty</span>
</div>
</div>
</div>
{/* Metric 4 */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Intake Pipeline</span>
<span className="font-telemetry-num text-telemetry-num text-on-surface mt-1">412 <span className="font-body-md text-body-md text-on-surface-variant font-normal">In Transit</span></span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[22px]">departure_board</span>
</div>
</div>
<div className="mt-space-md flex items-center justify-between font-label-sm text-label-sm bg-surface-container-low p-space-xs rounded-lg text-on-surface">
<span className="inline-flex items-center gap-1 text-error font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span>
            4 SDRF Convoys
          </span>
<span className="text-on-surface-variant">ETA: 22m - 45m</span>
</div>
</div>
</div>
</section>
{/* Filter & Action Strip */}
<section className="w-full px-gutter-desktop py-space-md">
<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-space-sm">
{/* Search Input */}
<div className="relative flex-1 min-w-[260px]">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input className="w-full h-10 pl-10 pr-space-md rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:shadow-inner transition-all" placeholder="Search camp name, district, grid code (e.g. SUP-4921)..." type="text" />
</div>
{/* Filter Chips */}
<div className="flex items-center gap-space-2xs overflow-x-auto py-1 scrollbar-none">
<button className="px-space-sm py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md flex items-center gap-1.5 shadow-sm shrink-0" type="button">
<span>All Safe Havens</span>
<span className="px-1.5 py-0.2 rounded-full bg-on-primary/20 text-on-primary text-[10px]">42</span>
</button>
<button className="px-space-sm py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center gap-1.5 shrink-0 transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">holiday_village</span>
<span>Relief Camps</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-high text-on-surface-variant text-[10px]">32</span>
</button>
<button className="px-space-sm py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center gap-1.5 shrink-0 transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">local_hospital</span>
<span>Hospitals</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-high text-on-surface-variant text-[10px]">6</span>
</button>
<button className="px-space-sm py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center gap-1.5 shrink-0 transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">terrain</span>
<span>High-Grounds</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-high text-on-surface-variant text-[10px]">4</span>
</button>
<button className="px-space-sm py-1.5 rounded-full bg-error-container text-on-error-container font-label-md text-label-md flex items-center gap-1.5 shrink-0" type="button">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
<span>At Capacity</span>
<span className="px-1.5 py-0.2 rounded-full bg-error text-on-error text-[10px]">4</span>
</button>
</div>
{/* Quick Action Buttons */}
<div className="flex items-center gap-space-xs shrink-0 pt-space-2xs xl:pt-0">
<button className="h-10 px-space-md rounded-lg bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-1.5 hover:bg-surface-container-high transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">sort</span>
<span>Proximity ▾</span>
</button>
<button className="h-10 px-space-md rounded-lg bg-primary-container text-on-primary font-label-md text-label-md flex items-center gap-1.5 hover:bg-primary transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">add_location_alt</span>
<span>Register Camp</span>
</button>
</div>
</div>
</section>
{/* Main Split Layout (65% Camps / 35% Tactical Panel) */}
<section className="w-full px-gutter-desktop pb-space-3xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/* LEFT COLUMN: 65% (8 Cols) */}
<div className="lg:col-span-8 flex flex-col gap-space-md">
{/* Camp Card A: Active Normal */}
<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-sm">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
                  Active Camp
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded-md font-semibold">Grid: SUP-4921</span>
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">near_me</span>2.4 km NE
                </span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">Supaul High School Relief Camp <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">#08</span></h2>
</div>
<div className="text-right sm:self-center">
<span className="font-telemetry-num text-title-md text-on-surface font-bold">980 <span className="text-on-surface-variant font-normal text-body-sm">/ 1,200</span></span>
<div className="font-label-sm text-label-sm text-tertiary font-semibold">220 Vacancies Available</div>
</div>
</div>
{/* Capacity Bar */}
<div className="py-space-2xs">
<div className="w-full bg-surface-container-high rounded-full h-2.5 overflow-hidden">
<div className="bg-primary-container h-2.5 rounded-full" style={{ width: "81%" }}></div>
</div>
</div>
{/* Status Indicator Chips */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs py-space-sm">
<div className="bg-surface-container-low p-space-xs rounded-lg flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">water_drop</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant">Potable Water</span>
<span className="font-title-md text-body-md font-bold text-on-surface truncate">94% Full</span>
</div>
</div>
<div className="bg-surface-container-low p-space-xs rounded-lg flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary text-[20px]">restaurant</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant">Rations</span>
<span className="font-title-md text-body-md font-bold text-on-surface truncate">3.5 Days</span>
</div>
</div>
<div className="bg-surface-container-low p-space-xs rounded-lg flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">medical_services</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant">Medical</span>
<span className="font-title-md text-body-md font-bold text-on-surface truncate">2 Dr / 4 Nurse</span>
</div>
</div>
<div className="bg-surface-container-low p-space-xs rounded-lg flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">bolt</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant">Power</span>
<span className="font-title-md text-body-md font-bold text-on-surface truncate">Solar + DG</span>
</div>
</div>
</div>
{/* Demographics & Action Footprint */}
<div className="pt-space-xs flex flex-col md:flex-row md:items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm"><span className="flex items-center gap-1 font-semibold text-on-surface"><span className="material-symbols-outlined text-[16px] text-primary">groups</span>340</span><span className="">•</span><span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px]">child_care</span>340</span><span className="">•</span><span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px]">person</span>410</span><span className="">•</span><span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px]">elderly</span>230</span></div><div className="flex items-center gap-space-2xs shrink-0"><button className="p-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="Map" type="button"><span className="material-symbols-outlined text-[18px]">map</span></button><button className="px-space-sm py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors shadow-sm flex items-center gap-1" type="button"><span className="material-symbols-outlined text-[16px]">near_me</span><span className="">Convoy</span></button><button className="px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-1" type="button"><span className="material-symbols-outlined text-[16px]">fact_check</span><span className="">Intake</span></button></div></div>
</article>
{/* Camp Card B: Medical Safe Haven */}
<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-sm">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">local_hospital</span>
                  Tier-2 Trauma Center
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded-md font-semibold">Grid: BRP-1002</span>
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">near_me</span>5.8 km N
                </span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">Birpur Community Health Center <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">#14</span></h2>
</div>
<div className="text-right sm:self-center">
<span className="font-telemetry-num text-title-md text-on-surface font-bold">18 <span className="text-on-surface-variant font-normal text-body-sm">/ 22 Beds</span></span>
<div className="font-label-sm text-label-sm text-secondary font-semibold">4 Critical ICU Beds Free</div>
</div>
</div>
{/* Capacity Bar */}
<div className="py-space-2xs">
<div className="w-full bg-surface-container-high rounded-full h-2.5 overflow-hidden">
<div className="bg-secondary h-2.5 rounded-full" style={{ width: "82%" }}></div>
</div>
</div>
{/* Status Indicator Chips */}
<div className="grid grid-cols-2 sm:grid-cols-3 gap-space-xs py-space-sm">
<div className="bg-surface-container-low p-space-xs rounded-lg flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">air</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant">O2 Cylinders</span>
<span className="font-title-md text-body-md font-bold text-on-surface truncate">320 Units (92%)</span>
</div>
</div>
<div className="bg-surface-container-low p-space-xs rounded-lg flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary text-[20px]">vaccines</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant">Anti-Venom</span>
<span className="font-title-md text-body-md font-bold text-on-surface truncate">40 Vials Ready</span>
</div>
</div>
<div className="bg-surface-container-low p-space-xs rounded-lg flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">electric_meter</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant">Emergency Backup</span>
<span className="font-title-md text-body-md font-bold text-on-surface truncate">Dual DG Online</span>
</div>
</div>
</div>
<div className="pt-space-xs flex flex-col md:flex-row md:items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm"><span className="inline-flex items-center gap-1 text-secondary font-semibold"><span className="material-symbols-outlined text-[16px]">emergency</span>Bay Open</span><span className="">•</span><span className="inline-flex items-center gap-1 text-tertiary font-semibold"><span className="material-symbols-outlined text-[16px]">water</span>0.12m Safe</span></div><div className="flex items-center gap-space-2xs shrink-0"><button className="p-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="Map" type="button"><span className="material-symbols-outlined text-[18px]">map</span></button><button className="px-space-sm py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold hover:bg-on-secondary-container transition-colors shadow-sm flex items-center gap-1" type="button"><span className="material-symbols-outlined text-[16px]">assignment</span><span className="">Triage</span></button><button className="px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-1" type="button"><span className="material-symbols-outlined text-[16px]">flight_takeoff</span><span className="">Med-Evac</span></button></div></div>
</article>
{/* Camp Card C: High Ground */}
<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-sm">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">landscape</span>
                  Safe High-Ground
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded-md font-semibold">Grid: NH57-KM14</span>
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">near_me</span>1.2 km W
                </span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">NH-57 Elevated Dry Bypass Flyover <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">Zone #03</span></h2>
</div>
<div className="text-right sm:self-center">
<span className="font-telemetry-num text-title-md text-on-surface font-bold">2,300 <span className="text-on-surface-variant font-normal text-body-sm">/ 3,500</span></span>
<div className="font-label-sm text-label-sm text-tertiary font-semibold">1,200 Spots Open</div>
</div>
</div>
{/* Capacity Bar */}
<div className="py-space-2xs">
<div className="w-full bg-surface-container-high rounded-full h-2.5 overflow-hidden">
<div className="bg-tertiary-container h-2.5 rounded-full" style={{ width: "65%" }}></div>
</div>
</div>
{/* Quick chips */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs py-space-sm">
<div className="bg-surface-container-low p-space-xs rounded-lg flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">helicopter</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant">Helipad</span>
<span className="font-title-md text-body-md font-bold text-on-surface truncate">Clear for Airdrop</span>
</div>
</div>
<div className="bg-surface-container-low p-space-xs rounded-lg flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">local_shipping</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant">Water Tankers</span>
<span className="font-title-md text-body-md font-bold text-on-surface truncate">4 Staged Live</span>
</div>
</div>
<div className="bg-surface-container-low p-space-xs rounded-lg flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary text-[20px]">cell_tower</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant">Mobile Tower</span>
<span className="font-title-md text-body-md font-bold text-on-surface truncate">4G Mesh Broadcaster</span>
</div>
</div>
</div>
<div className="pt-space-xs flex flex-col md:flex-row md:items-center justify-between gap-space-sm"><div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm"><span className="material-symbols-outlined text-[16px] text-tertiary">height</span><span className="font-bold text-on-surface">+14.2m</span><span className="text-on-surface-variant">Elev. Safe</span></div><div className="flex items-center gap-space-2xs shrink-0"><button className="p-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="Map" type="button"><span className="material-symbols-outlined text-[18px]">map</span></button><button className="px-space-sm py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors shadow-sm flex items-center gap-1" type="button"><span className="material-symbols-outlined text-[16px]">alt_route</span><span className="">Divert</span></button></div></div>
</article>
{/* Camp Card D: At Capacity / Critical Warning */}
<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-error/20 hover:shadow-md transition-shadow">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-sm">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="px-2 py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm font-bold flex items-center gap-1 animate-pulse">
<span className="material-symbols-outlined text-[14px]">warning</span>
                  AT CAPACITY (99%)
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded-md font-semibold">Grid: MDB-0812</span>
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">near_me</span>8.1 km S
                </span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">Madhubani Government College Complex <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">#21</span></h2>
</div>
<div className="text-right sm:self-center">
<span className="font-telemetry-num text-title-md text-error font-bold">790 <span className="text-on-surface-variant font-normal text-body-sm">/ 800</span></span>
<div className="font-label-sm text-label-sm text-error font-bold uppercase tracking-wider">Only 10 spots left</div>
</div>
</div>
{/* Capacity Bar (Red) */}
<div className="py-space-2xs">
<div className="w-full bg-surface-container-high rounded-full h-2.5 overflow-hidden">
<div className="bg-error h-2.5 rounded-full" style={{ width: "99%" }}></div>
</div>
</div>
<div className="bg-error-container/40 p-space-sm rounded-lg mt-space-sm flex items-start gap-space-xs text-on-error-container"><div className="flex flex-wrap items-center justify-between gap-space-xs w-full text-on-error-container font-label-sm text-label-sm"><div className="flex items-center gap-1.5 font-bold text-error"><span className="material-symbols-outlined text-[18px]">error</span><span className="">Breach Risk Imminent</span></div><div className="flex items-center gap-1.5"><span className="text-on-surface-variant font-medium">Reroute →</span><span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-bold shadow-sm">Camp #08</span><span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-bold shadow-sm">NH-57</span></div></div></div>
<div className="pt-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm"><div className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-error">block</span><span className="">Gate 02: Closed</span></div><div className="flex items-center gap-space-2xs shrink-0"><button className="px-space-sm py-1.5 rounded-lg bg-error text-on-error font-label-md text-label-md font-bold hover:bg-on-error-container transition-colors shadow-sm flex items-center gap-1" type="button"><span className="material-symbols-outlined text-[16px]">lock</span><span className="">Close</span></button><button className="px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-1" type="button"><span className="material-symbols-outlined text-[16px]">sync_alt</span><span className="">Transfer</span></button></div></div>
</article>
</div>
{/* RIGHT COLUMN: 35% (4 Cols) Tactical Ops Panel */}
<div className="lg:col-span-4 flex flex-col gap-space-md">
{/* Widget 1: GIS Map */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">explore</span>
<h3 className="font-title-md text-title-md text-on-surface font-bold">Terrain &amp; Shelter GIS</h3>
</div>
<button className="font-label-sm text-label-sm text-primary font-bold hover:underline flex items-center gap-0.5" type="button">
              Full Map <span className="material-symbols-outlined text-[14px]">open_in_new</span>
</button>
</div>
{/* Static Map Preview with Simulated Tactical Elements */}
<div className="relative w-full h-56 rounded-xl overflow-hidden shadow-inner" data-location="Supaul, Bihar, India" style={{ backgroundImage: "url('https" }}>
{/* Semi-transparent overlay with tactical markers */}
<div className="absolute inset-0 bg-surface-container-highest/20 backdrop-blur-[1px] p-space-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest/90 text-on-surface font-label-sm text-label-sm shadow-sm backdrop-blur">
                  Kosi Basin Flood Buffer
                </span>
<span className="px-2 py-0.5 rounded bg-error/90 text-on-error font-label-sm text-label-sm font-bold shadow-sm">
                  +1.8m Inundation
                </span>
</div>
{/* Map Overlay Dots Mockup */}
<div className="relative w-full h-24">
{/* Pin #08 */}
<div className="absolute top-6 left-12 flex items-center gap-1 group cursor-pointer">
<span className="w-3.5 h-3.5 rounded-full bg-tertiary shadow flex items-center justify-center text-[8px] text-on-tertiary font-bold">08</span>
<span className="hidden group-hover:inline-block px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-[10px] shadow">Supaul HS</span>
</div>
{/* Pin #14 */}
<div className="absolute top-2 right-16 flex items-center gap-1 group cursor-pointer">
<span className="w-3.5 h-3.5 rounded-full bg-secondary shadow flex items-center justify-center text-[8px] text-on-secondary font-bold">14</span>
<span className="hidden group-hover:inline-block px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-[10px] shadow">Birpur CHC</span>
</div>
{/* Pin #03 */}
<div className="absolute bottom-4 left-20 flex items-center gap-1 group cursor-pointer">
<span className="w-3.5 h-3.5 rounded-full bg-tertiary shadow flex items-center justify-center text-[8px] text-on-tertiary font-bold">03</span>
<span className="hidden group-hover:inline-block px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-[10px] shadow">NH-57</span>
</div>
{/* Pin #21 Critical */}
<div className="absolute bottom-6 right-8 flex items-center gap-1 group cursor-pointer">
<span className="w-3.5 h-3.5 rounded-full bg-error animate-ping"></span>
<span className="w-3.5 h-3.5 rounded-full bg-error shadow flex items-center justify-center text-[8px] text-on-error font-bold -ml-3.5">21</span>
</div>
</div>
<div className="flex items-center justify-between text-on-surface font-label-sm text-[10px] bg-surface-container-lowest/90 px-2 py-1 rounded backdrop-blur">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary"></span>Safe Cap</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary"></span>Medical</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-error"></span>Full Zone</span>
</div>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Datum: WGS-84 / NDM-ISRO</span>
<span className="text-tertiary font-semibold">Live GPS Trace Active</span>
</div>
</div>
{/* Widget 2: Live Supply Requests Dispatch */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col">
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-error text-[20px]">notifications_active</span>
<h3 className="font-title-md text-title-md text-on-surface font-bold">Camp Supply Needs</h3>
</div>
<span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
</div>
<div className="flex flex-col gap-space-xs"><div className="p-space-xs rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col gap-0.5"><div className="flex items-center justify-between"><span className="font-label-sm text-label-sm font-bold text-on-surface flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-primary">water_drop</span>#08 (+500L)</span><span className="px-1.5 py-0.2 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[10px] font-bold">15m ETA</span></div><div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant"><span className="text-[11px]">SDRF #04</span><span className="px-1 rounded bg-secondary/10 text-secondary font-bold text-[10px]">P1</span></div></div><div className="p-space-xs rounded-lg bg-error-container/30 hover:bg-error-container/50 transition-colors flex flex-col gap-0.5"><div className="flex items-center justify-between"><span className="font-label-sm text-label-sm font-bold text-on-surface flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-error">bed</span>#21 (300 Units)</span><span className="px-1.5 py-0.2 rounded-full bg-error text-on-error font-label-sm text-[10px] font-bold">Pending</span></div><div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant"><span className="text-error font-bold text-[10px]">Urgent</span><button className="text-primary font-bold hover:underline flex items-center gap-0.5 text-[11px]" type="button"><span className="">Assign</span><span className="material-symbols-outlined text-[12px]">arrow_forward</span></button></div></div><div className="p-space-xs rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col gap-0.5"><div className="flex items-center justify-between"><span className="font-label-sm text-label-sm font-bold text-on-surface flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-tertiary">medication</span>#14 (IV / Meds)</span><span className="px-1.5 py-0.2 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px] font-bold">8m ETA</span></div><div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant"><span className="text-tertiary font-semibold text-[11px]">Boat #03</span><span className="px-1 rounded bg-error/10 text-error font-bold text-[10px]">Critical</span></div></div></div>
</div>
{/* Widget 3: Field Mesh Radio & Hotline */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">radio</span>
<h3 className="font-title-md text-title-md text-on-surface font-bold">Tactical Comms &amp; Radios</h3>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">Mesh Active</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg my-space-xs flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Field Operations Net</span>
<span className="font-title-md text-title-md font-bold text-on-surface">VHF Channel 14</span>
</div>
<span className="font-telemetry-num text-body-md font-bold text-secondary">156.700 MHz</span>
</div>
<div className="grid grid-cols-2 gap-space-xs pt-space-xs font-label-md text-label-md">
<a className="p-space-xs rounded-lg bg-surface-container flex flex-col items-center justify-center text-center hover:bg-surface-container-high transition-colors" href="tel:1078">
<span className="font-label-sm text-label-sm text-on-surface-variant">Disaster Helpline</span>
<span className="font-title-md text-title-md font-bold text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-base">call</span>1078
              </span>
</a>
<a className="p-space-xs rounded-lg bg-surface-container flex flex-col items-center justify-center text-center hover:bg-surface-container-high transition-colors" href="tel:112">
<span className="font-label-sm text-label-sm text-on-surface-variant">Emergency Rescue</span>
<span className="font-title-md text-title-md font-bold text-error flex items-center gap-1">
<span className="material-symbols-outlined text-base">sos</span>112
              </span>
</a>
</div>
</div>
</div>
</div>
</section>
</div>
          </main>
        )}

        {activeTab === 'dispatch' && (
          <main className="relative w-full bg-background min-h-screen px-space-xl py-space-xl">
            <div className="flex flex-col w-full gap-space-lg">
{/* Operational Telemetry Ribbon */}
<section className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-wrap items-center justify-between gap-space-md">
<div className="flex flex-wrap items-center gap-space-sm">
<div className="flex items-center gap-space-xs bg-error-container text-on-error-container px-space-sm py-space-2xs rounded-full font-label-md text-label-md animate-pulse">
<span className="material-symbols-outlined text-base">emergency_home</span>
<span>STAGE 3 DISPATCH STATUS</span>
</div>
<div className="h-4 w-px bg-outline-variant hidden sm:block"></div>
<div className="flex items-center gap-space-xs text-on-surface font-label-md text-label-md bg-surface-container-low px-space-sm py-space-2xs rounded-lg">
<span className="material-symbols-outlined text-secondary text-base">waves</span>
<span className="text-on-surface-variant">Kosi Inflow:</span>
<span className="font-bold text-on-surface">3.48L Cusec</span>
<span className="text-error font-bold">↗</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface font-label-md text-label-md bg-surface-container-low px-space-sm py-space-2xs rounded-lg">
<span className="material-symbols-outlined text-secondary text-base">rainy</span>
<span className="text-on-surface-variant">Rainfall:</span>
<span className="font-bold text-on-surface">142mm</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface font-label-md text-label-md bg-surface-container-low px-space-sm py-space-2xs rounded-lg">
<span className="flex h-2 w-2 rounded-full bg-on-tertiary-container"></span>
<span className="text-on-surface-variant">Radio Mesh:</span>
<span className="font-bold text-tertiary">99.4% Uplink</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<button className="flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all" onclick="this.classList.toggle('rotate-180')" type="button">
<span className="material-symbols-outlined text-base">refresh</span>
<span>Refresh Queue</span>
</button>
<button className="flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:opacity-95 transition-all" type="button">
<span className="material-symbols-outlined text-base">assignment</span>
<span>SITREP Dispatch Log</span>
</button>
</div>
</section>
{/* High-Symbol Tactical KPI Cards */}
<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
{/* KPI 1 */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Active Squads</span>
<div className="flex items-baseline gap-space-xs mt-space-2xs">
<span className="font-telemetry-num text-telemetry-num text-on-surface font-extrabold">24</span>
<span className="text-on-surface-variant font-title-md">/ 28 Total</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-xl">shield_person</span>
</div>
</div>
<div className="mt-space-md flex flex-col gap-space-xs">
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden flex">
<div className="bg-primary h-full" style={{ width: "75%" }}></div>
<div className="bg-secondary-container h-full" style={{ width: "15%" }}></div>
<div className="bg-outline-variant h-full" style={{ width: "10%" }}></div>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-space-2xs">
<span className="text-primary font-semibold">18 Deployed (75%)</span>
<span>6 Standby</span>
<span>4 Maint.</span>
</div>
</div>
</div>
{/* KPI 2 */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Mission Triage Queue</span>
<div className="flex items-baseline gap-space-xs mt-space-2xs">
<span className="font-telemetry-num text-telemetry-num text-on-surface font-extrabold">37</span>
<span className="text-error font-label-md font-bold">Missions Open</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-error-container flex items-center justify-center text-error">
<span className="material-symbols-outlined text-xl">flag</span>
</div>
</div>
<div className="mt-space-md flex items-center gap-space-xs flex-wrap">
<span className="bg-error-container text-on-error-container font-label-sm text-label-sm px-space-xs py-0.5 rounded-md font-semibold">8 Priority 1</span>
<span className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm px-space-xs py-0.5 rounded-md">14 Supply</span>
<span className="bg-secondary-fixed text-on-secondary-container font-label-sm text-label-sm px-space-xs py-0.5 rounded-md">15 Medical</span>
</div>
</div>
{/* KPI 3 */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Evacuation Lifeline</span>
<div className="flex items-baseline gap-space-xs mt-space-2xs">
<span className="font-telemetry-num text-telemetry-num text-on-surface font-extrabold">1,420</span>
<span className="text-tertiary-container font-label-md font-bold bg-surface-container-low px-space-2xs rounded">+280 Today</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-xl">travel_explore</span>
</div>
</div>
<div className="mt-space-md flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm text-secondary">directions_boat</span>
          Joint SDRF / NDRF
        </span>
<span className="font-semibold text-on-surface">98.2% Safe Transit</span>
</div>
</div>
{/* KPI 4 */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Equipment In-Field</span>
<div className="flex items-baseline gap-space-xs mt-space-2xs">
<span className="font-telemetry-num text-telemetry-num text-on-surface font-extrabold">91%</span>
<span className="text-tertiary-container font-label-md font-semibold">Ready Rate</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-xl">home_repair_service</span>
</div>
</div>
<div className="mt-space-md flex items-center justify-between font-label-sm text-label-sm text-on-surface">
<span className="flex items-center gap-0.5"><strong className="font-bold">94</strong> Boats</span>
<span className="text-outline-variant">•</span>
<span className="flex items-center gap-0.5"><strong className="font-bold">480</strong> Vests</span>
<span className="text-outline-variant">•</span>
<span className="flex items-center gap-0.5"><strong className="font-bold">16</strong> Drones</span>
</div>
</div>
</section>
{/* Main Operational Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/* LEFT COLUMN: Main Task Dispatch Board (8 cols) */}
<main className="lg:col-span-8 flex flex-col gap-space-md">
{/* Filter & Action Bar */}
<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="relative w-full sm:w-80">
<span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-lg">search</span>
<input className="w-full pl-9 pr-3 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none placeholder:text-outline" placeholder="Filter missions, squads, sector grids..." type="text" />
</div>
<div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-space-xs">
<button className="px-space-sm py-2 rounded-lg bg-surface-container hover:bg-surface-container-high font-label-md text-label-md text-on-surface transition-colors flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-base">alt_route</span>
<span>Batch Re-route</span>
</button>
<button className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:opacity-95 transition-all flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-base">add</span>
<span>New Dispatch Ticket</span>
</button>
</div>
</section>
{/* Status Tabs Bar */}
<div className="flex items-center gap-space-2xs overflow-x-auto pb-1">
<button className="bg-primary-container text-on-primary px-space-md py-space-xs rounded-lg font-label-md text-label-md whitespace-nowrap shadow-sm" type="button">
          All Tasks (37)
        </button>
<button className="bg-surface-container-lowest text-on-surface-variant hover:text-on-surface px-space-md py-space-xs rounded-lg font-label-md text-label-md whitespace-nowrap flex items-center gap-1 shadow-sm" type="button">
<span className="h-2 w-2 rounded-full bg-error"></span>
          Priority 1 (8)
        </button>
<button className="bg-surface-container-lowest text-on-surface-variant hover:text-on-surface px-space-md py-space-xs rounded-lg font-label-md text-label-md whitespace-nowrap flex items-center gap-1 shadow-sm" type="button">
<span className="h-2 w-2 rounded-full bg-secondary"></span>
          En-Route (12)
        </button>
<button className="bg-surface-container-lowest text-on-surface-variant hover:text-on-surface px-space-md py-space-xs rounded-lg font-label-md text-label-md whitespace-nowrap flex items-center gap-1 shadow-sm" type="button">
<span className="h-2 w-2 rounded-full bg-tertiary-container"></span>
          Completed (17)
        </button>
</div>
{/* Live Mission & Squad Cards Stream */}
<div className="flex flex-col gap-space-md">
{/* CARD 1: Urgent Evacuation */}
<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col gap-space-sm">
<div className="absolute top-0 left-0 bottom-0 w-1.5 bg-error"></div>
<header className="flex flex-wrap items-center justify-between gap-space-xs pl-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="bg-error-container text-on-error-container px-space-xs py-0.5 rounded-full font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-error animate-ping"></span>
                PRIORITY 1
              </span>
<span className="font-title-md text-title-md text-on-surface font-bold">#D-401</span>
<span className="text-outline-variant">•</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Sector 4 Levee Breach - Supaul Ward 9</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="bg-surface-container-low px-space-xs py-0.5 rounded font-mono font-bold text-on-surface">GRID: SUP-9012</span>
<span>14 mins ago</span>
</div>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pl-space-xs pt-space-xs"><div className="flex flex-col gap-space-xs"><div className="flex items-center gap-space-xs text-on-surface font-body-sm"><span className="material-symbols-outlined text-error text-base">groups</span><span className="font-semibold text-on-surface">65</span><span className="text-on-surface-variant font-label-sm">(18<span className="material-symbols-outlined text-xs inline align-middle">child_care</span> • 12<span className="material-symbols-outlined text-xs inline align-middle">elderly</span>)</span></div><div className="flex items-center gap-space-xs text-on-surface font-body-sm"><span className="material-symbols-outlined text-primary text-base">military_tech</span><span className="font-semibold">Squad Alpha</span><span className="bg-surface-container-high text-on-surface-variant px-space-2xs py-0.5 rounded text-label-sm">NDRF+4</span></div><div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm"><span className="material-symbols-outlined text-base">directions_boat</span><span className="">Gemini #14</span><span className="text-outline-variant">•</span><span className="material-symbols-outlined text-base">safety_check</span><span className="">30</span><span className="text-outline-variant">•</span><span className="material-symbols-outlined text-base">medical_services</span><span className="">#09</span></div></div><div className="flex flex-col justify-between gap-space-xs bg-surface-container-low p-space-sm rounded-lg"><div className="flex items-center justify-between font-label-sm"><span className="flex items-center gap-1 text-on-surface font-mono"><span className="material-symbols-outlined text-base text-secondary">podcasts</span>Ch 08</span><span className="bg-surface-container-lowest text-tertiary-container px-space-xs py-0.5 rounded font-bold font-mono flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-on-tertiary-container"></span>12 km/h</span></div><div><div className="flex justify-between font-label-sm text-on-surface-variant mb-1"><span className="">Evac</span><span className="font-bold text-on-surface font-mono">45/65 (70%)</span></div><div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden"><div className="bg-error h-full rounded-full" style={{ width: "70%" }}></div></div></div></div></div>
<footer className="flex flex-wrap items-center justify-end gap-space-xs pt-space-xs pl-space-xs"><button className="px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md flex items-center gap-1 transition-colors" type="button"><span className="material-symbols-outlined text-base">call</span><span className="">Comms</span></button><button className="px-space-sm py-1.5 rounded-lg bg-secondary-fixed text-on-secondary-container hover:bg-secondary-fixed-dim font-label-md flex items-center gap-1 transition-colors" type="button"><span className="material-symbols-outlined text-base">sync_alt</span><span className="">Divert</span></button><button className="px-space-sm py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md flex items-center gap-1 shadow-sm hover:opacity-95 transition-all" type="button"><span className="material-symbols-outlined text-base">check_circle</span><span className="">Resolve</span></button></footer>
</article>
{/* CARD 2: Medical Triage Delivery */}
<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col gap-space-sm">
<div className="absolute top-0 left-0 bottom-0 w-1.5 bg-secondary"></div>
<header className="flex flex-wrap items-center justify-between gap-space-xs pl-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="bg-secondary-fixed text-on-secondary-container px-space-xs py-0.5 rounded-full font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-xs">local_hospital</span>
                MEDICAL TRIAGE
              </span>
<span className="font-title-md text-title-md text-on-surface font-bold">#D-404</span>
<span className="text-outline-variant">•</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Birpur Sector Outpost to Camp #08</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="bg-surface-container-low px-space-xs py-0.5 rounded font-mono font-bold text-on-surface">GRID: BRP-4401</span>
<span>32 mins ago</span>
</div>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pl-space-xs pt-space-xs"><div className="flex flex-col gap-space-xs"><div className="flex items-center gap-space-xs text-on-surface font-body-sm"><span className="material-symbols-outlined text-secondary text-base">vaccines</span><span className="">40 Anti-Venom</span><span className="text-outline-variant">•</span><span className="">12 ORS</span></div><div className="flex items-center gap-space-xs text-on-surface font-body-sm"><span className="material-symbols-outlined text-primary text-base">badge</span><span className="font-semibold">Squad Bravo</span><span className="bg-secondary-fixed text-on-secondary-container px-space-2xs py-0.5 rounded text-label-sm">MRR</span></div><div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm"><span className="material-symbols-outlined text-base">directions_car</span><span className="">Unimog 4x4 #03</span></div></div><div className="flex flex-col justify-between gap-space-xs bg-surface-container-low p-space-sm rounded-lg"><div className="flex items-center justify-between font-label-sm"><span className="text-on-surface font-mono flex items-center gap-1"><span className="material-symbols-outlined text-base text-secondary">podcasts</span>Ch 14</span><span className="bg-secondary-fixed text-on-secondary-container px-space-xs py-0.5 rounded font-bold font-mono">ETA 14m</span></div><div className="flex items-center gap-space-xs font-label-sm text-tertiary-container bg-surface-container-lowest p-space-xs rounded font-semibold"><span className="material-symbols-outlined text-base text-tertiary">route</span><span className="">Passable (NH-57)</span></div></div></div>
<footer className="flex flex-wrap items-center justify-end gap-space-xs pt-space-xs pl-space-xs"><button className="px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md flex items-center gap-1 transition-colors" type="button"><span className="material-symbols-outlined text-base">monitoring</span><span className="">Telemetry</span></button><button className="px-space-sm py-1.5 rounded-lg bg-secondary-fixed text-on-secondary-container hover:bg-secondary-fixed-dim font-label-md flex items-center gap-1 transition-colors" type="button"><span className="material-symbols-outlined text-base">minor_crash</span><span className="">Escort</span></button></footer>
</article>
{/* CARD 3: Surveillance Recon */}
<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col gap-space-sm">
<div className="absolute top-0 left-0 bottom-0 w-1.5 bg-primary"></div>
<header className="flex flex-wrap items-center justify-between gap-space-xs pl-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="bg-primary-fixed text-on-primary-fixed-variant px-space-xs py-0.5 rounded-full font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-xs">visibility</span>
                SURVEILLANCE &amp; RECON
              </span>
<span className="font-title-md text-title-md text-on-surface font-bold">#D-409</span>
<span className="text-outline-variant">•</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Kosi Embankment km 22-28</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="bg-surface-container-low px-space-xs py-0.5 rounded font-mono font-bold text-on-surface">GRID: KOS-2280</span>
</div>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pl-space-xs pt-space-xs"><div className="flex flex-col gap-space-xs"><div className="flex items-center gap-space-xs text-on-surface font-body-sm"><span className="material-symbols-outlined text-primary text-base">flight</span><span className="font-semibold">DJI M300</span><span className="bg-surface-container-high text-on-surface-variant px-space-2xs py-0.5 rounded text-label-sm">2x Thermal</span></div><div className="flex items-center gap-space-xs text-on-surface font-body-sm"><span className="material-symbols-outlined text-secondary text-base">group</span><span className="">Volunteer Unit 2</span></div></div><div className="bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between"><div className="flex items-center gap-space-xs font-label-sm text-on-surface"><span className="h-2 w-2 rounded-full bg-on-tertiary-container animate-pulse"></span><span className="font-semibold">Sector Clear</span><span className="text-on-surface-variant font-mono">(45m)</span></div><span className="font-mono text-label-sm text-secondary font-bold">1080p LIVE</span></div></div>
<footer className="flex flex-wrap items-center justify-end gap-space-xs pt-space-xs pl-space-xs"><button className="px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md flex items-center gap-1 transition-colors" type="button"><span className="material-symbols-outlined text-base">videocam</span><span className="">Feed</span></button><button className="px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md flex items-center gap-1 transition-colors" type="button"><span className="material-symbols-outlined text-base">published_with_changes</span><span className="">Rotate</span></button></footer>
</article>
{/* CARD 4: Logistics Ration Drop */}
<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col gap-space-sm">
<div className="absolute top-0 left-0 bottom-0 w-1.5 bg-on-tertiary-container"></div>
<header className="flex flex-wrap items-center justify-between gap-space-xs pl-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="bg-surface-container text-tertiary px-space-xs py-0.5 rounded-full font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-xs">package_2</span>
                LOGISTICS &amp; SUSTENANCE
              </span>
<span className="font-title-md text-title-md text-on-surface font-bold">#D-412</span>
<span className="text-outline-variant">•</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Supaul High School Helipad Zone</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="bg-surface-container-low px-space-xs py-0.5 rounded font-mono font-bold text-on-surface">AIR-MI17</span>
</div>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pl-space-xs pt-space-xs"><div className="flex flex-col gap-space-xs"><div className="flex items-center gap-space-xs text-on-surface font-body-sm"><span className="material-symbols-outlined text-tertiary text-base">inventory</span><span className="font-semibold text-on-surface">1,500 Rations</span><span className="bg-surface-container-high text-on-surface-variant px-space-2xs py-0.5 rounded text-label-sm">Air Drop</span></div><div className="flex items-center gap-space-xs text-on-surface font-body-sm"><span className="material-symbols-outlined text-secondary text-base">groups_2</span><span className="">Youth Brigade</span><span className="bg-surface-container-high text-on-surface-variant px-space-2xs py-0.5 rounded text-label-sm">24 Pax</span></div></div><div className="flex flex-col justify-between bg-surface-container-low p-space-sm rounded-lg"><div className="flex justify-between font-label-sm mb-1"><span className="text-on-surface flex items-center gap-1"><span className="material-symbols-outlined text-base text-tertiary">unarchive</span>Unload</span><span className="text-tertiary-container font-bold font-mono">100% (Sorting)</span></div><div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden"><div className="bg-tertiary h-full rounded-full" style={{ width: "100%" }}></div></div></div></div>
<footer className="flex flex-wrap items-center justify-end gap-space-xs pt-space-xs pl-space-xs"><button className="px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md flex items-center gap-1 transition-colors" type="button"><span className="material-symbols-outlined text-base">task_alt</span><span className="">Handover</span></button></footer>
</article>
</div>
</main>
{/* RIGHT COLUMN: Tactical Radar & Communications (4 cols) */}
<aside className="lg:col-span-4 flex flex-col gap-space-md">
{/* Sector Squad Deployment Matrix */}
<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-space-2xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-xl">grid_view</span>
<h2 className="font-title-md text-title-md text-on-surface font-bold">Sector Deployment Matrix</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">LIVE SYNC</span>
</div>
{/* Matrix Visualizer Blocks */}
<div className="grid grid-cols-2 gap-space-xs">
<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="font-bold text-on-surface">Sector 1 (North)</span>
<span className="h-2 w-2 rounded-full bg-on-tertiary-container"></span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="font-telemetry-num text-telemetry-num text-on-surface font-bold">8</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Squads Deployed</span>
</div>
<div className="w-full bg-surface-variant h-1 rounded-full overflow-hidden mt-1">
<div className="bg-tertiary h-full" style={{ width: "80%" }}></div>
</div>
</div>
<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="font-bold text-on-surface">Sector 2 (Basin)</span>
<span className="h-2 w-2 rounded-full bg-on-tertiary-container"></span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="font-telemetry-num text-telemetry-num text-on-surface font-bold">6</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Squads Deployed</span>
</div>
<div className="w-full bg-surface-variant h-1 rounded-full overflow-hidden mt-1">
<div className="bg-tertiary h-full" style={{ width: "60%" }}></div>
</div>
</div>
<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="font-bold text-on-surface">Sector 3 (East)</span>
<span className="h-2 w-2 rounded-full bg-secondary-container"></span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="font-telemetry-num text-telemetry-num text-on-surface font-bold">3</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Squads Deployed</span>
</div>
<div className="w-full bg-surface-variant h-1 rounded-full overflow-hidden mt-1">
<div className="bg-secondary h-full" style={{ width: "30%" }}></div>
</div>
</div>
<div className="bg-error-container rounded-lg p-space-sm flex flex-col gap-1">
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-error-container">
<span className="font-bold">Sector 4 (Breach)</span>
<span className="h-2 w-2 rounded-full bg-error animate-ping"></span>
</div>
<div className="flex items-baseline justify-between mt-1 text-on-error-container">
<span className="font-telemetry-num text-telemetry-num font-extrabold">7</span>
<span className="font-label-sm text-label-sm font-semibold">Alert Zone</span>
</div>
<div className="w-full bg-surface-variant h-1 rounded-full overflow-hidden mt-1">
<div className="bg-error h-full" style={{ width: "95%" }}></div>
</div>
</div>
</div>
</section>
{/* Standby Fast-Response Squads */}
<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-space-2xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-xl">bolt</span>
<h2 className="font-title-md text-title-md text-on-surface font-bold">Standby Ready Squads</h2>
</div>
<span className="bg-surface-container text-on-surface px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold">2 Ready</span>
</div>
<div className="flex flex-col gap-space-xs"><div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between gap-space-xs"><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary font-bold font-title-md">E</div><div className="flex flex-col"><span className="font-title-md text-title-md text-on-surface font-semibold leading-tight">Squad Echo</span><div className="flex items-center gap-1 text-label-sm text-on-surface-variant"><span className="material-symbols-outlined text-xs">scuba_diving</span><span className="">6 Diver</span><span className="text-outline-variant">•</span><span className="material-symbols-outlined text-xs">home_pin</span><span className="">Base A</span></div></div></div><button className="px-space-sm py-1.5 rounded-lg bg-primary text-on-primary font-label-md shadow-sm hover:opacity-95 transition-all" type="button">Deploy</button></div><div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between gap-space-xs"><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary font-bold font-title-md">F</div><div className="flex flex-col"><span className="font-title-md text-title-md text-on-surface font-semibold leading-tight">Team Fox</span><div className="flex items-center gap-1 text-label-sm text-on-surface-variant"><span className="material-symbols-outlined text-xs">medical_services</span><span className="">8 Medic</span><span className="text-outline-variant">•</span><span className="material-symbols-outlined text-xs">home_pin</span><span className="">Dist Ctr</span></div></div></div><button className="px-space-sm py-1.5 rounded-lg bg-primary text-on-primary font-label-md shadow-sm hover:opacity-95 transition-all" type="button">Deploy</button></div></div>
</section>
{/* Field Comms Channel HUD */}
<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-space-2xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary-container text-xl">cell_tower</span>
<h2 className="font-title-md text-title-md text-on-surface font-bold">Field Comms HUD</h2>
</div>
<span className="font-label-sm text-label-sm text-tertiary-container font-semibold flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-on-tertiary-container"></span>
            99.8% Mesh
          </span>
</div>
<div className="flex flex-col gap-space-xs font-label-md text-label-md">
<div className="flex items-center justify-between p-space-xs bg-surface-container-low rounded-md">
<span className="text-on-surface-variant">Ch 08: Rescue Evac</span>
<span className="font-mono font-bold text-on-surface">156.400 MHz</span>
</div>
<div className="flex items-center justify-between p-space-xs bg-surface-container-low rounded-md">
<span className="text-on-surface-variant">Ch 12: Logistics Relay</span>
<span className="font-mono font-bold text-on-surface">156.600 MHz</span>
</div>
<div className="flex items-center justify-between p-space-xs bg-surface-container-low rounded-md">
<span className="text-on-surface-variant">Ch 14: Medical Dispatch</span>
<span className="font-mono font-bold text-on-surface">156.700 MHz</span>
</div>
</div>
<div className="mt-space-xs pt-space-xs flex items-center justify-between gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Direct SOS Helplines</span>
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-error-container text-on-error-container font-bold font-label-sm text-label-sm">112</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface font-bold font-label-sm text-label-sm">1078 (Disaster)</span>
</div>
</div>
</section>
{/* Operational Field Drone Live Snapshot */}
<section className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="relative w-full h-44 bg-surface-variant">
<img className="w-full h-full object-cover" data-alt="Tactical aerial drone survey view of flooded river basin with floating rescue zodiac boats and sandbag embankment perimeter, daylight high contrast photojournalistic emergency management tone." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAslJacgB7CF8ojNlKylcMGe1KfDQBadYhiOOimCSOgUiuPxHjzEXl2LSdgEBUXVZNcVJ6rHF5Cw-QUXF70KOw2-bMzSF-FwkcjAS0huUmxa7EOJpaVro-sX7DTitsdbUcvB38dWZ2OWejXXOpawVBCO4ATnms_rHIs8dmO4M4Jsn-qoyQ1Mx4pVlxIJksFccqrxS3YSV3YCqurxGD42LUfl5uy4oHE22wUI06xScxCkW3WNeMDPxrrfw" />
<div className="absolute top-2 left-2 bg-surface-container-lowest/90 backdrop-blur-md px-space-xs py-0.5 rounded text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-error animate-pulse"></span>
            DRONE 02 CAM • CAM-SUP-01
          </div>
<div className="absolute bottom-2 right-2 bg-inverse-surface/80 text-inverse-on-surface px-space-xs py-0.5 rounded font-mono text-label-sm">
            ALT: 120m | HD STREAM
          </div>
</div>
<div className="p-space-sm flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm bg-surface-container-lowest">
<span>Kosi River Bend km 24</span>
<span className="text-tertiary-container font-semibold">Embankment Intact</span>
</div>
</section>
</aside>
</div>
</div>
          </main>
        )}

        {activeTab === 'inventory' && (
          <main className="relative w-full bg-background min-h-screen px-space-xl py-space-xl">
            <div className="flex flex-col w-full">
{/* Interactive Script for Filtering and Modal Micro-interactions */}

{/* Emergency Air-Drop Quick Confirmation Toast */}
<div className="hidden fixed bottom-6 right-6 z-50 bg-error text-on-error px-space-md py-space-sm rounded-xl shadow-xl flex items-center gap-space-sm animate-bounce" id="emergency-toast">
<span className="material-symbols-outlined text-2xl">local_shipping</span>
<div>
<p className="font-title-md text-title-md leading-tight">Emergency Air-Bridge Dispatch Logged</p>
<p className="font-label-sm text-label-sm opacity-90"><span id="toast-item-label">Polyvalent Anti-Venom</span> rerouted via Indian Air Force MI-17 #04.</p>
</div>
<button className="ml-space-sm text-on-error hover:opacity-80" onclick="document.getElementById('emergency-toast').classList.add('hidden')">
<span className="material-symbols-outlined text-lg">close</span>
</button>
</div>
{/* Sub-Header Telemetry Strip */}
<div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm mb-space-xl flex flex-col xl:flex-row items-start xl:items-center justify-between gap-space-md">
<div className="flex flex-wrap items-center gap-space-md">
<div className="flex items-center gap-space-xs bg-error-container text-on-error-container px-space-sm py-space-2xs rounded-full font-label-md text-label-md">
<span className="material-symbols-outlined text-base animate-pulse">crisis_alert</span>
<span className="tracking-wide">STAGE 3 FLOOD SUPPLY PIPELINE</span>
</div>
<div className="hidden sm:block h-5 w-px bg-outline-variant"></div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-base text-primary">warehouse</span>
<span className="text-on-surface font-semibold">Patna Hub Inflow:</span>
<span className="text-primary font-bold">42.8 MT/day</span>
</div>
<div className="hidden md:block h-5 w-px bg-outline-variant"></div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-base text-tertiary-container">water_drop</span>
<span className="text-on-surface font-semibold">Kosi Buffer Depots:</span>
<span className="bg-surface-container-low text-tertiary px-space-xs py-0.5 rounded font-bold">84% Stocked</span>
</div>
<div className="hidden lg:block h-5 w-px bg-outline-variant"></div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-base text-secondary">alt_route</span>
<span className="text-on-surface font-semibold">Convoy Mesh:</span>
<span className="text-on-surface">16 SDRF Trucks / 8 Air Drops</span>
</div>
</div>
{/* Quick Actions */}
<div className="flex items-center gap-space-xs w-full xl:w-auto justify-end">
<button className="flex items-center gap-space-2xs bg-surface-container-low hover:bg-surface-container text-on-surface px-space-sm py-space-xs rounded-xl font-label-md text-label-md transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-base">file_download</span>
<span>Export Manifest</span>
</button>
<button className="flex items-center gap-space-2xs bg-primary-container hover:bg-primary text-on-primary px-space-md py-space-xs rounded-xl font-label-md text-label-md transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-base">add_box</span>
<span>Log Inbound Shipment</span>
</button>
</div>
</div>
{/* Top 4 Pulse Metric Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">
{/* Card 1: Stock Total */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Staged Supplies</span>
<div className="flex items-baseline gap-space-2xs mt-space-2xs">
<span className="font-display-lg text-display-lg text-on-surface">128.4</span>
<span className="font-title-md text-title-md text-on-surface-variant font-medium">/ 160 MT</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">inventory</span>
</div>
</div>
<div className="mt-space-md">
<div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{ width: "80%" }}></div>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant mt-space-xs">
<span>64k Rations</span>
<span>48k L H₂O</span>
<span>12.8k Kits</span>
</div>
</div>
</div>
{/* Card 2: Critical Supply Alerts */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Depot Deficit Watch</span>
<div className="flex items-center gap-space-xs mt-space-2xs">
<span className="font-display-lg text-display-lg text-error">3</span>
<span className="bg-error-container text-on-error-container text-label-sm font-label-sm px-space-xs py-0.5 rounded-full uppercase tracking-wider font-bold">Depots Low</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-error-container text-on-error-container flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">warning</span>
</div>
</div>
<div className="mt-space-sm bg-surface-container-low rounded-xl p-space-xs flex flex-col gap-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface font-semibold">Madhubani Anti-Venom</span>
<span className="text-error font-bold">45 left</span>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface font-semibold">Supaul Life Jackets</span>
<span className="text-error font-bold">120 left</span>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface font-semibold">Birpur Chlorine Tabs</span>
<span className="text-error font-bold">300 left</span>
</div>
</div>
</div>
{/* Card 3: In-Transit Fleet */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">In-Transit Fleet</span>
<div className="flex items-baseline gap-space-2xs mt-space-2xs">
<span className="font-display-lg text-display-lg text-on-surface">28</span>
<span className="font-title-md text-title-md text-secondary font-medium">Moving Units</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-fixed text-on-secondary-container flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">local_shipping</span>
</div>
</div>
<div className="mt-space-md grid grid-cols-3 gap-space-xs text-center">
<div className="bg-surface-container-low rounded-lg p-space-2xs">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Ground</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">16</span>
</div>
<div className="bg-surface-container-low rounded-lg p-space-2xs">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Rescue Boat</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">8</span>
</div>
<div className="bg-surface-container-low rounded-lg p-space-2xs">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Air Drop</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">4</span>
</div>
</div>
</div>
{/* Card 4: Redistribution SLA */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Dispatch SLA Window</span>
<div className="flex items-baseline gap-space-2xs mt-space-2xs">
<span className="font-display-lg text-display-lg text-tertiary-container">94.2%</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-low text-tertiary-container flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">speed</span>
</div>
</div>
<div className="mt-space-md flex items-center justify-between">
<div className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-tertiary-container text-base">check_circle</span>
<span className="font-label-md text-label-md text-on-surface">&lt; 4 hr Triage Standard</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-space-xs py-0.5 rounded">189 Dispatched</span>
</div>
</div>
</div>
{/* Main Content Grid (65% Left, 35% Right) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
{/* LEFT COLUMN: Inventory Stock Ledger & Category Matrix (7/12 desktop ~ 60-65%) */}
<div className="lg:col-span-8 flex flex-col gap-space-md">
{/* Filter Bar & Search Container */}
<div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col gap-space-md">
{/* Category Filter Pills */}
<div className="flex flex-wrap items-center gap-space-xs overflow-x-auto pb-1">
<button className="supply-filter-pill px-space-md py-space-xs rounded-xl font-label-md text-label-md transition-all bg-primary-container text-on-primary shadow-sm" onclick="filterSupply('all', this)">
            All Supplies (8)
          </button>
<button className="supply-filter-pill px-space-md py-space-xs rounded-xl font-label-md text-label-md transition-all bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low" onclick="filterSupply('rations', this)">
            Dry Rations &amp; Water
          </button>
<button className="supply-filter-pill px-space-md py-space-xs rounded-xl font-label-md text-label-md transition-all bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low" onclick="filterSupply('medical', this)">
            Medical &amp; Anti-Venom
          </button>
<button className="supply-filter-pill px-space-md py-space-xs rounded-xl font-label-md text-label-md transition-all bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low" onclick="filterSupply('rescue', this)">
            Boats &amp; Life Vests
          </button>
<button className="supply-filter-pill px-space-md py-space-xs rounded-xl font-label-md text-label-md transition-all bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low" onclick="filterSupply('shelter', this)">
            Shelter &amp; Dosing
          </button>
</div>
{/* Search and Requisition Strip */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs">
<div className="relative w-full sm:w-80">
<span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-lg">search</span>
<input className="w-full pl-10 pr-space-md py-space-xs bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-sm placeholder:text-on-surface-variant" placeholder="Search depot, item code, batch ID..." type="text" />
</div>
<div className="flex items-center gap-space-xs w-full sm:w-auto justify-end">
<button className="p-space-xs rounded-xl bg-surface-container-low text-on-surface-variant hover:text-on-surface" type="button">
<span className="material-symbols-outlined text-lg">tune</span>
</button>
<button className="flex items-center gap-space-2xs bg-primary-container text-on-primary px-space-md py-space-xs rounded-xl font-label-md text-label-md hover:bg-primary shadow-sm transition-all" type="button">
<span className="material-symbols-outlined text-base">post_add</span>
<span>+ Requisition Stock</span>
</button>
</div>
</div>
</div>
{/* Inventory Item 1: Dry Rations & Water */}
<div className="inventory-item-card bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md hover:shadow-md transition-shadow" data-category="rations">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container-low text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">lunch_dining</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">High-Energy Dry Rations &amp; Potable Water Kits</span>
<span className="bg-surface-container text-tertiary-container text-label-sm font-label-sm px-space-xs py-0.5 rounded font-bold">88% Optimal</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Batch #DR-9021 • MRE packs with 2L water bladders (Standard 3-day survivor quota)</p>
</div>
</div>
<div className="text-right">
<span className="font-telemetry-num text-telemetry-num text-on-surface">42,300</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Total Units Available</span>
</div>
</div>
{/* Meter Bar */}
<div className="w-full bg-surface-container-low rounded-full h-2 overflow-hidden">
<div className="bg-tertiary-container h-full rounded-full" style={{ width: "88%" }}></div>
</div>
{/* Sub-Depot Micro Breakdown */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-xs bg-surface-container-low rounded-xl p-space-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Patna Central Hub</span>
<span className="font-title-md text-title-md text-on-surface">28,000 pk</span>
<span className="font-label-sm text-label-sm text-tertiary">Safe Reserve</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Transit Boat #12</span>
<span className="font-title-md text-title-md text-secondary">4,100 pk</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">En-route Kosi</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Supaul Camp #08</span>
<span className="font-title-md text-title-md text-on-surface">7,200 pk</span>
<span className="font-label-sm text-label-sm text-tertiary">48h Coverage</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Birpur Border Camp</span>
<span className="font-title-md text-title-md text-on-surface">3,000 pk</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Restock Scheduled</span>
</div>
</div>
{/* Footer Actions */}
<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
<span>Shelf Life: <strong>90 Days</strong></span>
<span>•</span>
<span>Inspection: <strong>Passed 06:00 IST</strong></span>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-sm py-space-xs rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" type="button">
              Transfer Stock
            </button>
<button className="px-space-sm py-space-xs rounded-xl bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors" type="button">
              Dispatch Batch
            </button>
</div>
</div>
</div>
{/* Inventory Item 2: Critical Anti-Venom & Trauma (RED ALERT) */}
<div className="inventory-item-card bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md hover:shadow-md transition-shadow" data-category="medical">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">medication</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Polyvalent Snake Anti-Venom &amp; Pediatric Trauma Kits</span>
<span className="bg-error-container text-on-error-container text-label-sm font-label-sm px-space-xs py-0.5 rounded-full font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span>
                  CRITICAL DEFICIT 18%
                </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">High-potency vials cold-chain stored • Essential during active flood inundation</p>
</div>
</div>
<div className="text-right">
<span className="font-telemetry-num text-telemetry-num text-error">845</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Total Vials Remaining</span>
</div>
</div>
{/* Meter Bar */}
<div className="w-full bg-surface-container-low rounded-full h-2 overflow-hidden">
<div className="bg-error h-full rounded-full" style={{ width: "18%" }}></div>
</div>
{/* Sub-Depot Micro Breakdown */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs bg-surface-container-low rounded-xl p-space-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Patna Central Medical Hub</span>
<span className="font-title-md text-title-md text-on-surface">700 vials</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Cold Chain Verified</span>
</div>
<div className="flex flex-col bg-error-container/40 p-space-xs rounded-lg">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Madhubani Field Clinic</span>
<span className="material-symbols-outlined text-error text-sm">error</span>
</div>
<span className="font-title-md text-title-md text-error font-bold">45 vials</span>
<span className="font-label-sm text-label-sm text-error font-semibold">&lt; 6 Hours Supply Left</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Birpur Community Health Ctr</span>
<span className="font-title-md text-title-md text-on-surface">100 vials</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Critical Burn Rate</span>
</div>
</div>
{/* Action Ribbon */}
<div className="flex flex-wrap items-center justify-between gap-space-xs pt-space-xs">
<span className="font-label-sm text-label-sm text-error font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-sm">notification_important</span>
            Immediate airlift required for Madhubani Field Ward 4
          </span>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-space-xs rounded-xl bg-error text-on-error font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center gap-space-2xs shadow-sm" onclick="triggerAirDropNotification('Polyvalent Anti-Venom')" type="button">
<span className="material-symbols-outlined text-base">flight_takeoff</span>
<span>Trigger Emergency Air-Drop</span>
</button>
<button className="px-space-sm py-space-xs rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors" type="button">
              Direct SDRF Courier
            </button>
</div>
</div>
</div>
{/* Inventory Item 3: Inflatable Rescue Boats */}
<div className="inventory-item-card bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md hover:shadow-md transition-shadow" data-category="rescue">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-secondary-fixed text-on-secondary-container flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">kayaking</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">OED Inflatable Rescue Boats (Gemini 40HP)</span>
<span className="bg-secondary-container text-on-secondary-container text-label-sm font-label-sm px-space-xs py-0.5 rounded font-bold">92% Deployed</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Rigid inflatable heavy evacuation craft • 8-person payload with twin fuel reserves</p>
</div>
</div>
<div className="text-right">
<span className="font-telemetry-num text-telemetry-num text-on-surface">112 Boats</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Total Fleet Strength</span>
</div>
</div>
<div className="w-full bg-surface-container-low rounded-full h-2 overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{ width: "92%" }}></div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm bg-surface-container-low rounded-xl p-space-sm">
<div className="flex items-center gap-space-md">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Active in Water (Rescue):</span>
<span className="font-headline-sm text-headline-sm text-secondary font-bold ml-1">94 Boats</span>
</div>
<div className="h-4 w-px bg-outline-variant"></div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Staged Reserve (Supaul Marina):</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold ml-1">18 Boats</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-sm py-space-xs rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container shadow-sm" type="button">
              Inspect Fleet
            </button>
<button className="px-space-sm py-space-xs rounded-xl bg-secondary text-on-secondary font-label-md text-label-md hover:opacity-90 shadow-sm" type="button">
              Request Staging
            </button>
</div>
</div>
</div>
{/* Inventory Item 4: High Buoyancy Life Vests */}
<div className="inventory-item-card bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md hover:shadow-md transition-shadow" data-category="rescue">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container-low text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">safety_check</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">High-Buoyancy Adult &amp; Child Life Vests</span>
<span className="bg-surface-container text-primary font-label-sm text-label-sm px-space-xs py-0.5 rounded font-bold">74% Stocked</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">EN ISO 12402 certified high-visibility orange vests with whistle &amp; emergency locator strobes</p>
</div>
</div>
<div className="text-right">
<span className="font-telemetry-num text-telemetry-num text-on-surface">15,200</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Total Units Staged</span>
</div>
</div>
<div className="w-full bg-surface-container-low rounded-full h-2 overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{ width: "74%" }}></div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs text-center">
<div className="bg-surface-container-low rounded-xl p-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Camp #08</span>
<span className="font-title-md text-title-md text-on-surface">4,200</span>
</div>
<div className="bg-surface-container-low rounded-xl p-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Camp #14</span>
<span className="font-title-md text-title-md text-on-surface">3,800</span>
</div>
<div className="bg-surface-container-low rounded-xl p-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant block">NDRF Base</span>
<span className="font-title-md text-title-md text-on-surface">5,200</span>
</div>
<div className="bg-surface-container-low rounded-xl p-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Transit Floats</span>
<span className="font-title-md text-title-md text-secondary">2,000</span>
</div>
</div>
</div>
{/* Inventory Item 5: Water Purification Tablets */}
<div className="inventory-item-card bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md hover:shadow-md transition-shadow" data-category="shelter">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container-low text-tertiary-container flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">sanitizer</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Water Purification Tablets &amp; Chlorine Dosing Kits</span>
<span className="bg-surface-container text-tertiary-container font-label-sm text-label-sm px-space-xs py-0.5 rounded font-bold">Adequate 96%</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">NaDCC 67mg rapid dissolving tablets (1 tablet purifies 20L turbid flood runoff)</p>
</div>
</div>
<div className="text-right">
<span className="font-telemetry-num text-telemetry-num text-on-surface">95,000</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Strips Available</span>
</div>
</div>
<div className="w-full bg-surface-container-low rounded-full h-2 overflow-hidden">
<div className="bg-tertiary-container h-full rounded-full" style={{ width: "96%" }}></div>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Active Batch: EXP SEP-2027</span>
<span className="text-tertiary-container font-semibold">Sufficient for 14+ Days Inundation Period</span>
<button className="px-space-sm py-space-2xs rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high" type="button">
            Log Usage
          </button>
</div>
</div>
</div>
{/* RIGHT COLUMN: Supply Logistics HUD & Active Convoy Tracking (4/12 desktop ~ 35%) */}
<div className="lg:col-span-4 flex flex-col gap-space-md">
{/* Card 1: Live Inbound Convoys (GPS Telemetry) */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-xl">satellite_alt</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Inbound Convoys</h3>
</div>
<span className="font-label-sm text-label-sm bg-surface-container text-primary font-semibold px-space-xs py-0.5 rounded-full flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            3 Active Drops
          </span>
</div>
<div className="flex flex-col gap-space-sm">
{/* Convoy 1 */}
<div className="bg-surface-container-low rounded-xl p-space-sm flex flex-col gap-space-2xs">
<div className="flex items-center justify-between">
<span className="font-title-md text-title-md text-on-surface font-bold">SDRF-Echo (4x4 Unimog)</span>
<span className="font-label-md text-label-md text-primary font-bold">ETA: 22m</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Payload: 2,000 Med Kits &amp; Anti-Septic</p>
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant pt-space-2xs">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm text-tertiary-container">check_circle</span> NH-57 Passable</span>
<span className="text-on-surface font-semibold">-&gt; Supaul Camp #08</span>
</div>
</div>
{/* Convoy 2 */}
<div className="bg-surface-container-low rounded-xl p-space-sm flex flex-col gap-space-2xs">
<div className="flex items-center justify-between">
<span className="font-title-md text-title-md text-on-surface font-bold">Air Drop MI-17 #04</span>
<span className="font-label-md text-label-md text-error font-bold">ETA: 45m</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Payload: 1,500 High-Calorie Rations</p>
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant pt-space-2xs">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm text-tertiary-container">helicopter</span> Helipad Alpha</span>
<span className="text-on-surface font-semibold">-&gt; Madhubani Ward 4</span>
</div>
</div>
{/* Convoy 3 */}
<div className="bg-surface-container-low rounded-xl p-space-sm flex flex-col gap-space-2xs">
<div className="flex items-center justify-between">
<span className="font-title-md text-title-md text-on-surface font-bold">Boat Flotilla Delta</span>
<span className="font-label-md text-label-md text-secondary font-bold">ETA: 1h 10m</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Payload: 800 Life Jackets + Tarp Kits</p>
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant pt-space-2xs">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm text-secondary">waves</span> River Drift Nominal</span>
<span className="text-on-surface font-semibold">-&gt; Birpur Embankment</span>
</div>
</div>
</div>
</div>
{/* Card 2: Depot Depletion Radar (Burn Rate Predictor) */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary-container text-xl">timelapse</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Depot Burn Rate Radar</h3>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">AI Consumption Model</span>
</div>
<div className="flex flex-col gap-space-md">
{/* Depot 1: Madhubani */}
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface font-bold">Madhubani Field Camp</span>
<span className="text-error font-bold">Critical (Meds 6h)</span>
</div>
<div className="grid grid-cols-2 gap-space-xs">
<div>
<div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant mb-1">
<span>Water</span>
<span>14h</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
<div className="bg-secondary h-full" style={{ width: "35%" }}></div>
</div>
</div>
<div>
<div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant mb-1">
<span>Meds</span>
<span className="text-error font-bold">6h</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
<div className="bg-error h-full" style={{ width: "15%" }}></div>
</div>
</div>
</div>
</div>
{/* Depot 2: Supaul Camp */}
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface font-bold">Supaul Camp #08</span>
<span className="text-tertiary font-bold">Stable</span>
</div>
<div className="grid grid-cols-2 gap-space-xs">
<div>
<div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant mb-1">
<span>Water</span>
<span>48h</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
<div className="bg-tertiary-container h-full" style={{ width: "85%" }}></div>
</div>
</div>
<div>
<div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant mb-1">
<span>Meds</span>
<span>36h</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
<div className="bg-tertiary-container h-full" style={{ width: "72%" }}></div>
</div>
</div>
</div>
</div>
{/* Depot 3: Birpur Camp */}
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface font-bold">Birpur Border Clinic</span>
<span className="text-on-surface-variant font-bold">Guarded</span>
</div>
<div className="grid grid-cols-2 gap-space-xs">
<div>
<div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant mb-1">
<span>Water</span>
<span>22h</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-full" style={{ width: "50%" }}></div>
</div>
</div>
<div>
<div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant mb-1">
<span>Meds</span>
<span>18h</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-full" style={{ width: "42%" }}></div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Card 3: Immediate Field Requisitions (Camp Triage) */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-xl">assignment_add</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Field Requisitions</h3>
</div>
<span className="font-label-sm text-label-sm bg-surface-container text-on-surface font-semibold px-space-xs py-0.5 rounded">2 Pending</span>
</div>
<div className="flex flex-col gap-space-sm">
{/* Request 1 */}
<div className="bg-surface-container-low rounded-xl p-space-sm flex flex-col gap-space-xs">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-error font-semibold">URGENT MEDICAL</span>
<p className="font-title-md text-title-md text-on-surface font-bold">50 Vials Anti-Venom</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Req by Dr. Anjali (Madhubani Sector 3)</p>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">12m ago</span>
</div>
<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 py-1.5 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary transition-colors text-center" onclick="triggerAirDropNotification('50 Vials Anti-Venom')" type="button">
                Approve Dispatch
              </button>
<button className="px-space-sm py-1.5 bg-surface-container text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-high" type="button">
                Hold
              </button>
</div>
</div>
{/* Request 2 */}
<div className="bg-surface-container-low rounded-xl p-space-sm flex flex-col gap-space-xs">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-secondary font-semibold">EVAC GEAR</span>
<p className="font-title-md text-title-md text-on-surface font-bold">120 Child Life Vests</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Req by Officer Negi (Supaul Camp #08)</p>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">38m ago</span>
</div>
<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 py-1.5 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary transition-colors text-center" type="button">
                Approve Dispatch
              </button>
<button className="px-space-sm py-1.5 bg-surface-container text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-high" type="button">
                Re-Route
              </button>
</div>
</div>
</div>
</div>
{/* Card 4: Logistics Comms & Air-Bridge Net */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-xl">cell_tower</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Comms &amp; Air-Bridge</h3>
</div>
<span className="font-label-sm text-label-sm text-tertiary-container bg-surface-container font-semibold px-space-xs py-0.5 rounded">Net Online</span>
</div>
<div className="flex flex-col gap-space-xs text-body-sm font-body-sm text-on-surface-variant pt-space-2xs">
<div className="flex items-center justify-between">
<span>Primary Tactical Supply Channel:</span>
<span className="font-label-md text-label-md text-on-surface font-mono font-semibold">VHF Ch 12 (156.600 MHz)</span>
</div>
<div className="flex items-center justify-between">
<span>Helipad Supaul Status:</span>
<span className="font-label-md text-label-md text-tertiary font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Active &amp; Landable
            </span>
</div>
<div className="flex items-center justify-between">
<span>Disaster Supply Toll-Free Helpline:</span>
<span className="font-label-md text-label-md text-primary font-bold">1078 (SEOC Bihar)</span>
</div>
</div>
</div>
</div>
</div>
</div>
          </main>
        )}

        {activeTab === 'reunite' && (
          <main className="relative w-full bg-background min-h-screen px-space-xl py-space-xl">
            <div className="flex flex-col w-full gap-space-lg">
{/* TOP STAGE ALERT & TICKER BANNER */}
<div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md flex-wrap">
<div className="flex items-center gap-space-xs px-space-sm py-space-2xs bg-error-container text-on-error-container rounded-lg">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-error"></span>
</span>
<span className="font-label-md text-label-md font-bold uppercase tracking-wide">Stage 3 Reunification Net</span>
</div>
<div className="hidden sm:flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-base text-secondary">manage_search</span>
<span className="">Active Inquiries: <strong className="text-on-surface">1,840</strong></span>
</div>
<span className="text-outline-variant font-bold">•</span>
<div className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-base text-tertiary-container">how_to_reg</span>
<span className="">Reunited: <strong className="text-on-surface">81.7% Rate</strong></span>
</div>
<span className="text-outline-variant font-bold">•</span>
<div className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-base text-primary">fingerprint</span>
<span className="">Biometric Queue: <strong className="text-on-surface">12 Pending</strong></span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs">
<button className="flex items-center gap-space-2xs px-space-sm py-space-xs bg-surface-container-low text-on-surface hover:bg-surface-container rounded-lg font-label-md text-label-md transition-colors" type="button">
<span className="material-symbols-outlined text-base">file_download</span>
<span className="">Export Roster</span>
</button>
<button className="flex items-center gap-space-2xs px-space-md py-space-xs bg-primary-container text-on-primary hover:bg-primary rounded-lg font-label-md text-label-md shadow-sm transition-colors" type="button">
<span className="material-symbols-outlined text-base">person_add</span>
<span className="">Register Missing / Found</span>
</button>
</div>
</div>
{/* 4 PULSE METRIC KPI COUNTERS */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
{/* Metric 1: Total Missing Inquiries */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Active Missing Inquiries</span>
<div className="h-8 w-8 rounded-lg bg-error-container text-on-error-container flex items-center justify-center">
<span className="material-symbols-outlined text-lg">crisis_alert</span>
</div>
</div>
<div>
<div className="flex items-baseline gap-space-2xs">
<span className="font-telemetry-num text-telemetry-num text-on-surface">412</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">/ 1,840 Total</span>
</div>
<div className="w-full bg-surface-container-low h-1.5 rounded-full mt-space-2xs overflow-hidden">
<div className="bg-error h-full rounded-full" style={{ width: "22.4%" }}></div>
</div>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm pt-space-2xs text-on-surface-variant">
<span className="text-error font-semibold">+18 logged today</span>
<span className="">22.4% Unresolved</span>
</div>
</div>
{/* Metric 2: Confirmed Reunions */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Confirmed Reunions</span>
<div className="h-8 w-8 rounded-lg bg-surface-container-high text-tertiary-container flex items-center justify-center">
<span className="material-symbols-outlined text-lg">verified_user</span>
</div>
</div>
<div>
<div className="flex items-baseline gap-space-2xs">
<span className="font-telemetry-num text-telemetry-num text-on-surface">1,428</span>
<span className="font-body-sm text-body-sm text-tertiary-container font-semibold">81.7% Rate</span>
</div>
<div className="w-full bg-surface-container-low h-1.5 rounded-full mt-space-2xs overflow-hidden">
<div className="bg-on-tertiary-container h-full rounded-full" style={{ width: "81.7%" }}></div>
</div>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm pt-space-2xs text-on-surface-variant">
<span className="text-tertiary-container font-semibold">Safe Handover Complete</span>
<span className="">+64 This Shift</span>
</div>
</div>
{/* Metric 3: AI Facial & Biometric Match */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">AI Recon Matches</span>
<div className="h-8 w-8 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-lg">face</span>
</div>
</div>
<div>
<div className="flex items-baseline gap-space-2xs">
<span className="font-telemetry-num text-telemetry-num text-on-surface">94 Matches</span>
<span className="font-body-sm text-body-sm text-primary font-semibold">96.4% Avg</span>
</div>
<div className="w-full bg-surface-container-low h-1.5 rounded-full mt-space-2xs overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{ width: "78%" }}></div>
</div>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm pt-space-2xs text-on-surface-variant">
<span className="text-primary font-semibold">12 Awaiting Signoff</span>
<span className="">Drone &amp; CCTV Feed</span>
</div>
</div>
{/* Metric 4: Safe Haven Locator Pings */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Safe Haven Locator Pings</span>
<div className="h-8 w-8 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-lg">radar</span>
</div>
</div>
<div>
<div className="flex items-baseline gap-space-2xs">
<span className="font-telemetry-num text-telemetry-num text-on-surface">284 Pings</span>
<span className="font-body-sm text-body-sm text-secondary font-semibold">Triangulating</span>
</div>
<div className="w-full bg-surface-container-low h-1.5 rounded-full mt-space-2xs overflow-hidden">
<div className="bg-secondary-container h-full rounded-full" style={{ width: "92%" }}></div>
</div>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm pt-space-2xs text-on-surface-variant">
<span className="text-secondary font-semibold">18 Camps Linked</span>
<span className="">COMSAT Carrier L3</span>
</div>
</div>
</div>
{/* FILTER & SEARCH CONTROL TOOLBAR */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm flex-1 max-w-xl bg-surface-container-low px-space-md py-space-xs rounded-lg">
<span className="material-symbols-outlined text-on-surface-variant text-xl">search</span>
<input className="bg-transparent w-full text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm focus:outline-none" placeholder="Search by name, UID, shelter camp, guardian phone, or facial tag..." type="text" />
<span className="px-space-2xs py-0.5 bg-surface-container-lowest text-on-surface-variant rounded text-[10px] uppercase font-mono font-semibold">Ctrl+K</span>
</div>
<div className="flex items-center gap-space-xs overflow-x-auto pb-1 lg:pb-0">
<button className="px-space-sm py-space-xs rounded-full font-label-sm text-label-sm bg-primary-container text-on-primary whitespace-nowrap" type="button">
        All Records (412)
      </button>
<button className="px-space-sm py-space-xs rounded-full font-label-sm text-label-sm bg-surface-container-low hover:bg-surface-container text-on-surface-variant whitespace-nowrap" type="button">
        Pending Match (64)
      </button>
<button className="px-space-sm py-space-xs rounded-full font-label-sm text-label-sm bg-surface-container-low hover:bg-surface-container text-on-surface-variant whitespace-nowrap" type="button">
        Biometric Verified (289)
      </button>
<button className="px-space-sm py-space-xs rounded-full font-label-sm text-label-sm bg-surface-container-low hover:bg-surface-container text-on-surface-variant whitespace-nowrap" type="button">
        Minors &amp; Unaccompanied (58)
      </button>
<button className="px-space-sm py-space-xs rounded-full font-label-sm text-label-sm bg-surface-container-low hover:bg-surface-container text-on-surface-variant whitespace-nowrap" type="button">
        Seniors (42)
      </button>
<div className="h-5 w-px bg-surface-variant mx-space-2xs"></div>
<button className="flex items-center gap-space-2xs px-space-sm py-space-xs bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-sm text-label-sm rounded-lg whitespace-nowrap transition-colors" type="button">
<span className="material-symbols-outlined text-base">photo_camera</span>
<span className="">Recon Scan</span>
</button>
</div>
</div>
{/* MAIN OPERATIONAL 2-COLUMN DISPLAY */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
{/* LEFT COLUMN: HIGH-FIDELITY REUNIFICATION & KIN TRACKING CARDS (7 COLUMNS) */}
<div className="xl:col-span-8 flex flex-col gap-space-md">
{/* Card 1: High Priority Minor Match */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md hover:shadow-md transition-shadow">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm pb-space-sm border-b border-surface-container-low">
<div className="flex items-center gap-space-md">
<div className="relative">
<img className="w-16 h-16 rounded-xl object-cover bg-surface-container-high shadow-sm" data-alt="High-contrast close-up portrait of a 12-year-old South Asian boy in a lightweight emergency relief blanket, gentle eyes, subtle warm lighting, natural skin tones, documentary photojournalism style, crisp detail." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCktQdQ4cz2TnT4KEIeDWbfL6uXECOqGUlsuS9lsU_B3XyyKwUlapCaBQUdyMfU4MuhEExYCo46tjDJfvKYuWwPui7JgOZvhBcjI1w1adDzXFGYj-S6Ud4WbC8V7BLVQQW75WExUiwvD0tpuse-0wMckJNUn9pqiYg464EMm4D67kTkjAb4NRcwqLlW_5f8jUlOcJZAnPaxQmnBoXBdV5WYxp44N5ivM1QvjSNjOnQCKaMW5cAm9zCgBA" />
<span className="absolute -bottom-1 -right-1 bg-primary-container text-on-primary rounded-full p-0.5 flex items-center justify-center">
<span className="material-symbols-outlined text-xs">face</span>
</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Aarav Kumar</h3>
<span className="font-label-md text-label-md text-on-surface-variant">12 yrs</span>
<span className="font-mono text-label-sm px-space-2xs py-0.5 bg-surface-container-low rounded text-primary font-bold">UID #802</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Reported missing: 38h ago • Ward 4, Supaul District</span>
</div>
</div>
<div className="flex items-center gap-space-xs self-start">
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs bg-secondary-container/20 text-on-secondary-container rounded-full font-label-sm text-label-sm font-semibold">
<span className="h-2 w-2 rounded-full bg-secondary"></span>
              SHELTER LOCATED - BLOCK B
            </span>
</div>
</div>
{/* Detail Matrix */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md p-space-md bg-surface-container-low/60 rounded-xl">
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Current Safe Haven</span>
<span className="font-title-md text-title-md text-on-surface">Supaul High School Camp #08</span>
<span className="font-body-sm text-body-sm text-secondary">Shelter Rep: S. Ranjan (Bed 42)</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Guardian Kin Inquiry</span>
<span className="font-title-md text-title-md text-on-surface">Rajesh Kumar (Father)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Searching via Patna SEOC Desk</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">AI Match Confidence</span>
<div className="flex items-center gap-space-xs">
<span className="font-title-md text-title-md text-primary font-bold">96.4%</span>
<span className="material-symbols-outlined text-base text-primary">verified</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">CCTV Frame #441 (Camp Gate 2)</span>
</div>
</div>
{/* Action Ribbon */}
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm text-tertiary-container">check_circle</span>
<span className="">Identity confirmed via Child Welfare Committee protocols</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="flex items-center gap-space-2xs px-space-sm py-space-xs bg-surface-container-lowest text-on-surface hover:bg-surface-container-low rounded-lg font-label-md text-label-md transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-base">call</span>
<span className="">Call Camp Rep</span>
</button>
<button className="flex items-center gap-space-2xs px-space-sm py-space-xs bg-surface-container-lowest text-on-surface hover:bg-surface-container-low rounded-lg font-label-md text-label-md transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-base">print</span>
<span className="">Print Slip</span>
</button>
<button className="flex items-center gap-space-2xs px-space-md py-space-xs bg-primary-container hover:bg-primary text-on-primary rounded-lg font-label-md text-label-md transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-base">handshake</span>
<span className="">Initiate Handover &amp; Reunite</span>
</button>
</div>
</div>
</div>
{/* Card 2: Critical Biometric Match Pending Officer Signoff */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md hover:shadow-md transition-shadow">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm pb-space-sm border-b border-surface-container-low">
<div className="flex items-center gap-space-md">
<div className="relative">
<img className="w-16 h-16 rounded-xl object-cover bg-surface-container-high shadow-sm" data-alt="Photorealistic portrait of a 45-year-old rural Indian woman with maroon sari drape, expressive resilient eyes, warm studio fill light, soft focus neutral background, documentary rescue operations aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFf9R--I2Fg4wvZfPRcRpf3eAO9gtNvAHRGZgEmzt6wfIVtLzyRAVGSMXXKbQbPvvscEiEgjz_Gnk0dq0PVVhFpMFbwdnAHO8C6_Qo5dFvkRSkElXdgHtr4w0BODGeDFeoqeL-PkXhs8yTk150RNeAYMzU24l_ieCqdyhO3Nx1C9rMzOCl-eKmmmyW6UPEy9En2DjFmgbGIPgMTjIqiAqDHD03xg_Vi9oaemOITrn1VRKNV7hSMicdzA" />
<span className="absolute -bottom-1 -right-1 bg-secondary text-on-secondary rounded-full p-0.5 flex items-center justify-center">
<span className="material-symbols-outlined text-xs">fingerprint</span>
</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Sunita Devi</h3>
<span className="font-label-md text-label-md text-on-surface-variant">45 yrs</span>
<span className="font-mono text-label-sm px-space-2xs py-0.5 bg-surface-container-low rounded text-primary font-bold">UID #819</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Origin: Birpur Embankment • Displaced by breach</span>
</div>
</div>
<div className="flex items-center gap-space-xs self-start">
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm font-semibold">
<span className="h-2 w-2 rounded-full bg-error"></span>
              MATCH FOUND - AWAITING SIGNOFF
            </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md p-space-md bg-surface-container-low/60 rounded-xl">
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Medical Safe Haven</span>
<span className="font-title-md text-title-md text-on-surface">Birpur Community Health #14</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Triage Ward - Stable</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Claiming Kin</span>
<span className="font-title-md text-title-md text-on-surface">Manoj Devi (Son)</span>
<span className="font-body-sm text-body-sm text-tertiary-container font-semibold">Verified Mobile OTP + Aadhaar</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Biometric Telemetry</span>
<div className="flex items-center gap-space-xs">
<span className="font-title-md text-title-md text-secondary font-bold">98.9% Iris Match</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Matched with Bihar EOC Database</span>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant">Lead Officer authorization mandatory before exit gate release</span>
<div className="flex items-center gap-space-xs">
<button className="px-space-sm py-space-xs bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low rounded-lg font-label-md text-label-md transition-colors shadow-sm" type="button">
              Hold Case
            </button>
<button className="px-space-sm py-space-xs bg-surface-container-low text-primary hover:bg-surface-container-high rounded-lg font-label-md text-label-md transition-colors" type="button">
              Compare AI Scan
            </button>
<button className="px-space-md py-space-xs bg-tertiary-container hover:bg-tertiary text-on-tertiary rounded-lg font-label-md text-label-md transition-colors shadow-sm" type="button">
              Verify &amp; Approve Handover
            </button>
</div>
</div>
</div>
{/* Card 3: Successful Reunion Case (Completed Handover) */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md hover:shadow-md transition-shadow opacity-95">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm pb-space-sm border-b border-surface-container-low">
<div className="flex items-center gap-space-md">
<div className="relative">
<img className="w-16 h-16 rounded-xl object-cover bg-surface-container-high shadow-sm" data-alt="Two 7-year-old twin Indian boys smiling together with relief worker in orange life vest background, high emotional documentary clarity, natural outdoor daylight, safe camp shelter setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGVpf8skhHEqqySs2UFIC2hO2JphxpOxXm7xpcJz84eSL5sosG9VFC6rX7Z79BWdsu_lRSf1NPsYF7L_y00V2Fc-5J5-nkn2SfFvQyFvqELyBvvCNlY0wOx8Y4fWM8VWgt-xqtM0M0AQmfaskLJ0Si2MvJIsBjF_C2rL1DV9OF3BU9Uhsz7ICMkoMgcGZz2bzc4MOhsoSuZWdn6kQui5Qw4QfOdbGD98x2g64hCKvUepO4EMnFGFv7rw" />
<span className="absolute -bottom-1 -right-1 bg-tertiary-container text-on-tertiary rounded-full p-0.5 flex items-center justify-center">
<span className="material-symbols-outlined text-xs">done_all</span>
</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Rohan &amp; Sohan</h3>
<span className="font-label-md text-label-md text-on-surface-variant">7 yrs (Twins)</span>
<span className="font-mono text-label-sm px-space-2xs py-0.5 bg-surface-container-low rounded text-on-surface-variant font-bold">UID #824</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Rescued via Zodiac Boat #03 from Kosi Floodplain</span>
</div>
</div>
<div className="flex items-center gap-space-xs self-start">
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs bg-surface-container-high text-tertiary-container rounded-full font-label-sm text-label-sm font-semibold">
<span className="h-2 w-2 rounded-full bg-on-tertiary-container"></span>
              REUNITED &amp; CASE CLOSED
            </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md p-space-md bg-surface-container-low/40 rounded-xl">
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Reunion Location</span>
<span className="font-title-md text-title-md text-on-surface">Camp #08 Welfare Desk</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Handover by SDRF Squad Echo</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Reunited With</span>
<span className="font-title-md text-title-md text-on-surface">Rekha Devi (Mother)</span>
<span className="font-body-sm text-body-sm text-tertiary-container font-semibold">Full Biometric Clearance</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Digital Handover Log</span>
<span className="font-title-md text-title-md text-on-surface">Today, 14:22 IST</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Signed: Lead Officer Roy</span>
</div>
</div>
<div className="flex items-center justify-between gap-space-sm pt-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant">Digital Certificate hash: 0x8a92...b4f1 (Immutable disaster ledger)</span>
<div className="flex items-center gap-space-xs">
<button className="flex items-center gap-space-2xs px-space-sm py-space-xs bg-surface-container-lowest text-on-surface hover:bg-surface-container-low rounded-lg font-label-md text-label-md transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-base">verified</span>
<span className="">View Certificate</span>
</button>
<button className="flex items-center gap-space-2xs px-space-sm py-space-xs bg-surface-container-low text-on-surface-variant hover:bg-surface-container rounded-lg font-label-md text-label-md transition-colors" type="button">
<span className="material-symbols-outlined text-base">archive</span>
<span className="">Archive Record</span>
</button>
</div>
</div>
</div>
{/* Card 4: Active Cell Tower Geo-Ping / Triangulation Beacon */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md hover:shadow-md transition-shadow">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm pb-space-sm border-b border-surface-container-low">
<div className="flex items-center gap-space-md">
<div className="relative">
<img className="w-16 h-16 rounded-xl object-cover bg-surface-container-high shadow-sm" data-alt="Profile portrait of a 24-year-old Indian woman student in casual attire, sharp clear photo, studio lighting, solid neutral blue backdrop, emergency missing registry portrait style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzHMWJ5SYSPl2UFsJnXB4Eu-sKGe5v0OAVbX9QYBqrI44cq_kj1ItweewVi2BQmjIUcdqH8edVFthkBPDdSf60WIKO2fcTCtlNuTdsrafaymqdcm9zUhAa9tmHDpg026bpJZm72kwggibL69kFAdgx9rAoHcuyzWalY2y2RKf7_5ed6ls-5mH6kl1qtNloK-aNj-vw4gYpgVKnVJ3ebb9gShcm91k-GzDAoGCLguoJCTIyj2tvkRKqoA" />
<span className="absolute -bottom-1 -right-1 bg-secondary text-on-secondary rounded-full p-0.5 flex items-center justify-center">
<span className="material-symbols-outlined text-xs">cell_tower</span>
</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Pooja Verma</h3>
<span className="font-label-md text-label-md text-on-surface-variant">24 yrs</span>
<span className="font-mono text-label-sm px-space-2xs py-0.5 bg-surface-container-low rounded text-primary font-bold">UID #839</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Last contact: Madhubani Sector B • Cellular Ping active</span>
</div>
</div>
<div className="flex items-center gap-space-xs self-start">
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs bg-secondary-container/30 text-on-secondary-container rounded-full font-label-sm text-label-sm font-semibold">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
</span>
              GEO-PING DETECTED
            </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md p-space-md bg-surface-container-low/60 rounded-xl">
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Triangulated Radius</span>
<span className="font-title-md text-title-md text-on-surface">2.1km North, Madhubani Ridge</span>
<span className="font-body-sm text-body-sm text-secondary">Airtel Tower #MD-94</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Beacon Timestamp</span>
<span className="font-title-md text-title-md text-on-surface">11 mins ago</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Battery Telemetry: 18%</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Searching Kin</span>
<span className="font-title-md text-title-md text-on-surface">Arun Verma (Brother)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">At Relief Camp #02 Staging</span>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant">Nearby SDRF Zodiac Squad Bravo en route to ridge area</span>
<div className="flex items-center gap-space-xs">
<button className="flex items-center gap-space-2xs px-space-sm py-space-xs bg-surface-container-lowest text-on-surface hover:bg-surface-container-low rounded-lg font-label-md text-label-md transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-base">sms</span>
<span className="">Send SMS Broadcast</span>
</button>
<button className="flex items-center gap-space-2xs px-space-md py-space-xs bg-secondary hover:bg-on-secondary-container text-on-secondary rounded-lg font-label-md text-label-md transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-base">near_me</span>
<span className="">Dispatch Rescue Squad</span>
</button>
</div>
</div>
</div>
</div>
{/* RIGHT COLUMN: TACTICAL REUNIFICATION OPERATIONS SIDE PANEL (5 COLUMNS) */}
<div className="xl:col-span-4 flex flex-col gap-space-md">
{/* Side Module 1: Live AI Recon & Video Stream Feed */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-space-xs border-b border-surface-container-low">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-xl">videocam</span>
<h4 className="font-title-md text-title-md text-on-surface">AI Recon Stream Feed</h4>
</div>
<span className="inline-flex items-center gap-space-2xs px-space-2xs py-0.5 bg-error-container text-on-error-container font-label-sm text-label-sm rounded uppercase font-bold">
<span className="h-1.5 w-1.5 rounded-full bg-error animate-pulse"></span>
            LIVE CCTV #04
          </span>
</div>
<div className="relative w-full h-44 rounded-xl overflow-hidden bg-inverse-surface flex items-center justify-center">
<img className="w-full h-full object-cover opacity-85" data-alt="High angle thermal-monochrome and color overlay surveillance feed showing crowded relief shelter entrance with green AI facial recognition bounding box around a young person, technical telemetry overlays and timestamps, modern command center UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_RIVGYbcZ2X4Lg1cVxe1H_ZSnlQPg--7XuoZxWgGgwf9oOVEpPNFA9hS-DHISLLlN_r49fvwB6AMvI-fQxC5URI5J9kOqV-5MxoZc3zwm4EPqWNCxIZfas8DOYkp_fIpmVZRJQcbKBH4Wwdytdx1usOO_qXGvgrJT2nAJICOYTASbcRxwcV48lX5XiWxy9QIVZZqNmcZPBP8RG5qITGO86kAzC5RTCTPsJBm31nokbC9txdKv2nsIig" />
{/* Bounding Box Overlay */}
<div className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none">
<div className="border-2 border-dashed border-tertiary-fixed-dim bg-tertiary-container/20 rounded-lg p-2 flex flex-col justify-between w-32 h-32">
<div className="bg-inverse-surface/90 text-on-tertiary-container px-1 py-0.5 rounded text-[10px] font-mono font-bold flex items-center justify-between">
<span className="">UID #802</span>
<span className="">96.4%</span>
</div>
<span className="text-[9px] font-mono text-tertiary-fixed font-bold bg-inverse-surface/80 px-1 rounded self-start">CCTV-GATE-02</span>
</div>
</div>
<div className="absolute bottom-2 left-2 bg-inverse-surface/90 text-inverse-on-surface px-2 py-0.5 rounded font-mono text-[10px]">
            REC 14:48:19 UTC+5:30
          </div>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm pt-space-2xs text-on-surface-variant">
<span className="">Target identified in Supaul Block B queue</span>
<span className="text-primary font-semibold">CCTV Feed #04</span>
</div>
<div className="grid grid-cols-2 gap-space-xs pt-space-xs">
<button className="py-space-xs px-space-sm bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md rounded-lg text-center transition-colors" type="button">
            Confirm Face Match
          </button>
<button className="py-space-xs px-space-sm bg-surface-container-low text-on-surface-variant hover:bg-surface-container font-label-md text-label-md rounded-lg text-center transition-colors" type="button">
            Dismiss False Positive
          </button>
</div>
</div>
{/* Side Module 2: Kin Search Query Hotspot Density */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-space-xs border-b border-surface-container-low">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-xl">hub</span>
<h4 className="font-title-md text-title-md text-on-surface">Kin Query Hotspot Density</h4>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">By District</span>
</div>
<div className="flex flex-col gap-space-sm pt-space-xs">
{/* District 1 */}
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface font-semibold">Supaul District</span>
<span className="text-on-surface-variant">142 Inquiries (34%)</span>
</div>
<div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{ width: "34%" }}></div>
</div>
</div>
{/* District 2 */}
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface font-semibold">Madhubani Basin</span>
<span className="text-on-surface-variant">98 Inquiries (23%)</span>
</div>
<div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{ width: "23%" }}></div>
</div>
</div>
{/* District 3 */}
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface font-semibold">Sunsari Transboundary Border</span>
<span className="text-on-surface-variant">76 Inquiries (18%)</span>
</div>
<div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
<div className="bg-secondary-container h-full rounded-full" style={{ width: "18%" }}></div>
</div>
</div>
{/* District 4 */}
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface font-semibold">Saharsa Central Corridor</span>
<span className="text-on-surface-variant">54 Inquiries (13%)</span>
</div>
<div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
<div className="bg-surface-tint h-full rounded-full" style={{ width: "13%" }}></div>
</div>
</div>
</div>
<div className="pt-space-xs flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span className="">Cross-referenced with SDRF Rescue logs</span>
<a className="text-primary font-semibold hover:underline" href="#">Full GIS Map</a>
</div>
</div>
{/* Side Module 3: Rapid Public SMS Query Gateway */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-space-xs border-b border-surface-container-low">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary-container text-xl">cell_tower</span>
<h4 className="font-title-md text-title-md text-on-surface">SMS Gateway &amp; Broadcast</h4>
</div>
<span className="px-space-2xs py-0.5 bg-surface-container-high text-tertiary-container font-mono text-[10px] font-bold rounded">1078 / 112</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Public Search Command</span>
<p className="font-mono text-body-sm text-on-surface font-bold">SACHET &lt;UID&gt; ➔ 56161</p>
<span className="font-body-sm text-body-sm text-on-surface-variant">Instant automated status return via transboundary SMS gateway.</span>
</div>
{/* Mini SMS Log Item */}
<div className="flex flex-col gap-space-2xs pt-space-xs font-body-sm text-body-sm">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="">Recent Broadcast Dispatches</span>
<span className="">2 min ago</span>
</div>
<div className="bg-surface-container-low/50 p-space-xs rounded font-mono text-xs text-on-surface-variant">
            &gt; [OUTBOUND BATCH] 820 SMS sent to registered guardians regarding Camp #08 &amp; #14 health rosters.
          </div>
</div>
<button className="w-full mt-space-xs py-space-xs px-space-sm bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-md text-label-md rounded-lg flex items-center justify-center gap-space-xs transition-colors" type="button">
<span className="material-symbols-outlined text-base">campaign</span>
<span className="">Broadcast Missing Bulletin to Field Squads</span>
</button>
</div>
{/* Side Module 4: Standby Reunification Squads */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-space-xs border-b border-surface-container-low">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-on-surface text-xl">groups</span>
<h4 className="font-title-md text-title-md text-on-surface">Standby Handover Squads</h4>
</div>
<span className="font-label-sm text-label-sm text-tertiary-container font-semibold">2 Active</span>
</div>
<div className="flex flex-col gap-space-xs pt-space-xs">
<div className="flex items-center justify-between p-space-xs bg-surface-container-low rounded-lg">
<div className="flex items-center gap-space-xs">
<div className="h-8 w-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-xs">
                α
              </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Squad Alpha (SDRF Basecamp)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">6 Escorts • 2 Ambulances</span>
</div>
</div>
<span className="px-space-xs py-0.5 bg-surface-container-lowest text-tertiary-container text-label-sm font-semibold rounded">Ready</span>
</div>
<div className="flex items-center justify-between p-space-xs bg-surface-container-low rounded-lg">
<div className="flex items-center gap-space-xs">
<div className="h-8 w-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs">
                β
              </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Social Welfare Desk Team</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Supaul Camp #08 • 4 Counselors</span>
</div>
</div>
<span className="px-space-xs py-0.5 bg-surface-container-lowest text-primary text-label-sm font-semibold rounded">Active</span>
</div>
</div>
</div>
</div>
</div>
</div>
          </main>
        )}
      </div>
    </div>
  );
}
