'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../context/AuthContext';

/* ── MOCK DATA & CONSTANTS ── */
const RIVER_GAUGES = [
  { id: 'RG-01', river: 'Koshi', station: 'Birpur Barrage', current: 75.4, danger: 74.5, trend: '+3.2 cm/h', status: 'CRITICAL', discharge: '385,000 cusecs' },
  { id: 'RG-02', river: 'Gandak', station: 'Valmikinagar', current: 54.8, danger: 54.0, trend: '+2.1 cm/h', status: 'HIGH', discharge: '290,000 cusecs' },
  { id: 'RG-03', river: 'Bagmati', station: 'Dheng Bridge', current: 71.2, danger: 70.4, trend: '+4.0 cm/h', status: 'CRITICAL', discharge: '145,000 cusecs' },
  { id: 'RG-04', river: 'Ganga', station: 'Gandhi Ghat (Patna)', current: 48.9, danger: 48.6, trend: '+1.4 cm/h', status: 'HIGH', discharge: '520,000 cusecs' },
  { id: 'RG-05', river: 'Kamala Balan', station: 'Jhanjharpur', current: 50.8, danger: 50.0, trend: '-0.5 cm/h', status: 'MODERATE', discharge: '68,000 cusecs' },
];

const DISTRICT_INTEL = [
  { name: 'Supaul', code: 'BR-SUP', depth: '4.2m', popAtRisk: '382,000', evacuees: '124,500', alert: 'RED', ndrfTeams: 8, breachProb: '84%', campsActive: 16 },
  { name: 'Madhubani', code: 'BR-MDB', depth: '3.1m', popAtRisk: '294,000', evacuees: '96,200', alert: 'RED', ndrfTeams: 6, breachProb: '72%', campsActive: 12 },
  { name: 'Darbhanga', code: 'BR-DBG', depth: '2.4m', popAtRisk: '215,000', evacuees: '68,000', alert: 'ORANGE', ndrfTeams: 5, breachProb: '58%', campsActive: 9 },
  { name: 'Saharsa', code: 'BR-SAH', depth: '2.8m', popAtRisk: '180,000', evacuees: '54,300', alert: 'ORANGE', ndrfTeams: 4, breachProb: '61%', campsActive: 8 },
  { name: 'Patna Sadar', code: 'BR-PAT', depth: '1.6m', popAtRisk: '410,000', evacuees: '42,000', alert: 'YELLOW', ndrfTeams: 7, breachProb: '34%', campsActive: 14 },
  { name: 'Sitamarhi', code: 'BR-STM', depth: '1.2m', popAtRisk: '128,000', evacuees: '22,500', alert: 'YELLOW', ndrfTeams: 3, breachProb: '25%', campsActive: 5 },
];

/* ── MODULE 1: UNIFIED WAR ROOM / SITUATION OVERVIEW ── */
function WarRoomModule({ setActive, showToast }) {
  const [threatLevel, setThreatLevel] = useState('RED');

  return (
    <div className="flex flex-col gap-6">
      {/* Strategic Command Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-[#0d1527] to-[#1e1438] p-6 text-white border border-slate-700/60 shadow-2xl">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg width="100%" height="100%"><defs><pattern id="hudgrid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 30" fill="none" stroke="#60a5fa" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#hudgrid)"/></svg>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2 flex-wrap">
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-950/80 border border-red-500/50 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                DEFCON LEVEL 3 // LIVE EMERGENCY
              </span>
              <span className="px-2.5 py-1 rounded-md bg-purple-900/60 border border-purple-500/40 text-purple-300 font-mono text-xs font-medium">
                INC-2024-BR09 • BIHAR TRANSBOUNDARY
              </span>
              <span className="text-slate-400 text-xs font-mono">
                CWC • NDMA • IMD • SDMA UNIFIED COMMAND
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2">
              Joint National Flood Disaster Operations Center
            </h1>
            <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
              Real-time multi-agency command matrix coordinating transboundary river basin surges, aerial reconnaissance, NDRF tactical battalions, emergency cell broadcasts, and automated civil defence mobilization.
            </p>
          </div>

          <div className="flex flex-row lg:flex-col gap-2 shrink-0">
            <button 
              onClick={() => setActive('broadcast')}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-sm shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all cursor-pointer border border-red-400/30"
            >
              <span className="material-symbols-outlined text-[20px] animate-pulse">cell_tower</span>
              Broadcast CAP Alert
            </button>
            <button 
              onClick={() => setActive('barrage')}
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-95 text-slate-200 font-semibold text-xs border border-slate-600/60 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] text-amber-400">valve</span>
              Barrage Controls (Koshi/Gandak)
            </button>
          </div>
        </div>

        {/* Live Strategic Telemetry Bar */}
        <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
          <div className="flex flex-col gap-1">
            <span className="text-slate-400 uppercase">SAT-RADAR (INSAT-3DR)</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LOCK 99.8% • LIVE SCAN
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-slate-400 uppercase">KOSHI BARRAGE DISCHARGE</span>
            <span className="text-red-400 font-bold">385,000 CUSECS (RISING)</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-slate-400 uppercase">CIVILIAN POPULATION AT RISK</span>
            <span className="text-amber-300 font-bold">4.21 MILLION CITIZENS</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-slate-400 uppercase">FIELD UNITS DEPLOYED</span>
            <span className="text-sky-400 font-bold">38 SQUADS • 142 BOATS</span>
          </div>
        </div>
      </div>

      {/* Threat Level Quick Switcher */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${threatLevel === 'RED' ? 'bg-red-100 text-red-600' : threatLevel === 'ORANGE' ? 'bg-orange-100 text-orange-600' : 'bg-amber-100 text-amber-600'}`}>
            <span className="material-symbols-outlined text-[24px]">crisis_alert</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 text-sm">STATE CRISIS THREAT STATE:</span>
              <span className={`px-2 py-0.5 rounded font-mono text-xs font-extrabold ${threatLevel === 'RED' ? 'bg-red-600 text-white' : threatLevel === 'ORANGE' ? 'bg-orange-500 text-white' : 'bg-amber-500 text-white'}`}>
                {threatLevel} SURGE CONDITION
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">Mandatory Level-3 response protocol activated under National Disaster Management Act 2005.</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 self-stretch md:self-auto bg-slate-100 p-1 rounded-xl">
          {['RED', 'ORANGE', 'YELLOW', 'GREEN'].map((lvl) => (
            <button
              key={lvl}
              onClick={() => {
                setThreatLevel(lvl);
                showToast(`Threat State updated to ${lvl}. Central agencies notified.`, lvl === 'RED' ? 'error' : lvl === 'ORANGE' ? 'warning' : 'info');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${threatLevel === lvl ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Critical River Gauge Telemetry */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-indigo-600 text-[22px]">waves</span>
            <h2 className="font-extrabold text-slate-900 text-base">CWC Transboundary River Basin Gauges</h2>
            <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">5 Active Stations</span>
          </div>
          <span className="text-xs font-mono text-slate-400">Updated: Just now (via Central Water Commission API)</span>
        </div>

        <div className="divide-y divide-slate-100">
          {RIVER_GAUGES.map((g) => {
            const isCritical = g.current >= g.danger;
            const pct = Math.min(100, Math.max(30, ((g.current - (g.danger - 3)) / 5) * 100));
            return (
              <div key={g.id} className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors">
                <div className="flex items-center gap-4 min-w-[200px]">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${isCritical ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-amber-100 text-amber-700'}`}>
                    <span className="material-symbols-outlined text-[20px]">water_do</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-extrabold text-slate-900 text-sm">{g.river}</h4>
                      <span className="font-mono text-xs text-slate-400">({g.id})</span>
                    </div>
                    <p className="text-xs text-slate-500">{g.station}</p>
                  </div>
                </div>

                {/* Progress bar representing height vs danger mark */}
                <div className="flex-1 w-full max-w-xs md:max-w-md">
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-slate-700">Water Level: {g.current}m</span>
                    <span className="text-red-600 font-semibold">Danger: {g.danger}m</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${isCritical ? 'bg-gradient-to-r from-red-500 to-rose-600' : 'bg-gradient-to-r from-amber-400 to-orange-500'}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>Discharge: {g.discharge}</span>
                    <span className={`font-semibold ${g.trend.startsWith('+') ? 'text-red-500' : 'text-emerald-600'}`}>{g.trend}</span>
                  </div>
                </div>

                {/* Action button */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-extrabold ${g.status === 'CRITICAL' ? 'bg-red-600 text-white' : g.status === 'HIGH' ? 'bg-orange-500 text-white' : 'bg-amber-100 text-amber-800'}`}>
                    {g.status}
                  </span>
                  <button 
                    onClick={() => {
                      showToast(`Dispatched telemetry alert for ${g.river} Basin (${g.station}).`, 'info');
                    }}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Action
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Multi-Agency Force Readiness & Logistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">FORCE READINESS</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-1">NDRF 9th & 10th Battalion</h3>
            <p className="text-xs text-slate-500 mb-4">Tactical base Supaul & Bihta. Level-3 motorized rescue units deployed.</p>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Active Rescue Teams</span>
                <span className="font-bold text-slate-900">24 Teams (1,080 men)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Inflatable Boats (OED)</span>
                <span className="font-bold text-slate-900">112 Deployed • 30 Standby</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Medical First Responders</span>
                <span className="font-bold text-emerald-600">38 Doctors Onboard</span>
              </div>
            </div>
          </div>
          <button onClick={() => setActive('forces')} className="mt-4 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer">
            Deploy Force Reserve
          </button>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">AERIAL RECON & AIRLIFT</span>
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-1">IAF & Drone Task Unit</h3>
            <p className="text-xs text-slate-500 mb-4">Bihta AFS & Gorakhpur Base. Real-time LiDAR & airdrop missions.</p>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Mi-17 V5 Helicopters</span>
                <span className="font-bold text-slate-900">4 Active Sorties</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">High-Endurance Drones</span>
                <span className="font-bold text-slate-900">12 Thermal Sensor Drones</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Food Ration Airdrops</span>
                <span className="font-bold text-sky-600">14,200 Packets Delivered</span>
              </div>
            </div>
          </div>
          <button onClick={() => showToast('Air Tasking Order requested via IAF Bihta Command.', 'success')} className="mt-4 w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors cursor-pointer">
            Request Air Sortie
          </button>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">CIVIL RELIEF & SHELTERS</span>
              <span className="w-2 h-2 rounded-full bg-purple-500" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-1">Relief Camps & Logistics</h3>
            <p className="text-xs text-slate-500 mb-4">Bihar SDMA field camps across 6 worst-affected districts.</p>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Active Relief Camps</span>
                <span className="font-bold text-slate-900">67 Camps Operational</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Sheltered Civilians</span>
                <span className="font-bold text-purple-700">407,500 Evacuated</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Water Purification Kits</span>
                <span className="font-bold text-emerald-600">85,000 Liters/day</span>
              </div>
            </div>
          </div>
          <button onClick={() => setActive('ngo')} className="mt-4 w-full py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs transition-colors cursor-pointer">
            Manage NGO Relief Board
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── MODULE 2: LIVE GIS FLOOD INTELLIGENCE & SATELLITE RADAR ── */
function HeatmapModule({ showToast }) {
  const [activeLayer, setActiveLayer] = useState('radar');
  const [selectedDistrict, setSelectedDistrict] = useState(DISTRICT_INTEL[0]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-700">ISRO NRSC • SATELLITE TELEMETRY FUSION</span>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">Live GIS Inundation & Hydrological Heatmap</h2>
          <p className="text-sm text-slate-500">Transboundary optical & synthetic aperture radar (SAR) flood depth simulation</p>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl">
          {[
            { id: 'radar', label: 'SAR Sentinel-1', icon: 'radar' },
            { id: 'depth', label: 'Water Depth', icon: 'water' },
            { id: 'risk', label: 'Breach Vulnerability', icon: 'warning' },
          ].map((lyr) => (
            <button
              key={lyr.id}
              onClick={() => setActiveLayer(lyr.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeLayer === lyr.id ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              <span className="material-symbols-outlined text-[16px]">{lyr.icon}</span>
              {lyr.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Tactical Map Viewport */}
      <div className="relative h-[440px] rounded-3xl bg-[#090d16] border border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between p-5">
        {/* Background Grid & Radar Sweep */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%"><defs><pattern id="gismap" width="45" height="45" patternUnits="userSpaceOnUse"><path d="M 45 0 L 0 0 0 45" fill="none" stroke="#38bdf8" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#gismap)"/></svg>
        </div>

        {/* Dynamic Inundation Heat Blobs */}
        <div className="absolute top-10 left-20 w-72 h-44 rounded-full bg-red-600/35 blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute top-36 left-72 w-80 h-52 rounded-full bg-amber-500/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-16 right-28 w-60 h-40 rounded-full bg-orange-600/30 blur-2xl pointer-events-none" />
        <div className="absolute bottom-12 left-32 w-52 h-36 rounded-full bg-cyan-600/25 blur-2xl pointer-events-none" />

        {/* Radar concentric sweep circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[380px] h-[380px] rounded-full border border-cyan-500/15 flex items-center justify-center">
            <div className="w-[260px] h-[260px] rounded-full border border-cyan-500/20 flex items-center justify-center">
              <div className="w-[140px] h-[140px] rounded-full border border-cyan-500/30" />
            </div>
          </div>
        </div>

        {/* Top Overlay Bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-700/60 text-xs text-white">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono font-bold text-slate-200">GRID SECTOR: BIHAR-09B // NEPAL TRANSHYDRO</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 font-mono">
            <span>RES: 10m/px SAR</span>
            <span>LAT: 25.9644° N</span>
            <span>LON: 85.2722° E</span>
          </div>
        </div>

        {/* Interactive District Hotspot Pins */}
        <div className="relative z-10 inset-0 pointer-events-auto">
          {[
            { name: 'Supaul', x: '24%', y: '28%', alert: 'RED', depth: '4.2m' },
            { name: 'Madhubani', x: '52%', y: '22%', alert: 'RED', depth: '3.1m' },
            { name: 'Darbhanga', x: '68%', y: '48%', alert: 'ORANGE', depth: '2.4m' },
            { name: 'Patna Sadar', x: '35%', y: '68%', alert: 'YELLOW', depth: '1.6m' },
            { name: 'Saharsa', x: '78%', y: '32%', alert: 'ORANGE', depth: '2.8m' },
          ].map((pin) => {
            const isSel = selectedDistrict.name === pin.name;
            return (
              <div
                key={pin.name}
                onClick={() => {
                  const match = DISTRICT_INTEL.find((d) => d.name === pin.name);
                  if (match) setSelectedDistrict(match);
                }}
                className="absolute flex flex-col items-center cursor-pointer group -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110"
                style={{ left: pin.x, top: pin.y }}
              >
                <div className={`w-4 h-4 rounded-full flex items-center justify-center ${pin.alert === 'RED' ? 'bg-red-500 ring-4 ring-red-500/40 animate-pulse' : pin.alert === 'ORANGE' ? 'bg-orange-500 ring-4 ring-orange-500/40' : 'bg-amber-400 ring-4 ring-amber-400/40'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                <div className={`mt-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold whitespace-nowrap shadow-lg ${isSel ? 'bg-cyan-400 text-slate-950 ring-2 ring-white' : 'bg-slate-900/90 text-slate-200 border border-slate-700'}`}>
                  {pin.name} • {pin.depth}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Legend & Actions */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-700/60">
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <span className="text-slate-400 font-mono text-[11px]">INUNDATION DEPTH:</span>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-red-600" /> <span className="text-[11px]">&gt;3.5m (Critical)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-orange-500" /> <span className="text-[11px]">2.0-3.5m (Severe)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-amber-400" /> <span className="text-[11px]">0.5-2.0m (Moderate)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => showToast('Exported geo-spatial KMZ vector file to desktop.', 'success')}
              className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-600 transition-colors cursor-pointer flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">download</span> Export KMZ
            </button>
            <button 
              onClick={() => showToast('Satellite imagery refresh requested via ISRO Bhuvan gateway.', 'info')}
              className="px-3 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 text-xs font-extrabold transition-colors cursor-pointer flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">refresh</span> Re-scan Orbit
            </button>
          </div>
        </div>
      </div>

      {/* Selected District Drilldown Panel */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-extrabold text-slate-900">{selectedDistrict.name} District Intelligence</h3>
              <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-slate-100 text-slate-600">{selectedDistrict.code}</span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold ${selectedDistrict.alert === 'RED' ? 'bg-red-600 text-white' : 'bg-orange-500 text-white'}`}>
                {selectedDistrict.alert} WARNING
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Direct sensor feeds, embankment breach risk analysis, and rescue coverage</p>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => showToast(`Dispatched warning siren order for ${selectedDistrict.name}.`, 'warning')}
              className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow transition-all cursor-pointer"
            >
              Sound Civil Sirens
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 text-xs font-medium">Avg Flood Depth</span>
            <div className="text-xl font-extrabold text-slate-900 mt-0.5">{selectedDistrict.depth}</div>
            <span className="text-[11px] text-red-500 font-semibold">+18cm past 4h</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 text-xs font-medium">Population at Risk</span>
            <div className="text-xl font-extrabold text-red-600 mt-0.5">{selectedDistrict.popAtRisk}</div>
            <span className="text-[11px] text-slate-500">Across 8 blocks</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 text-xs font-medium">Evacuated to Date</span>
            <div className="text-xl font-extrabold text-emerald-600 mt-0.5">{selectedDistrict.evacuees}</div>
            <span className="text-[11px] text-emerald-600 font-semibold">32.6% achieved</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 text-xs font-medium">Embankment Breach Risk</span>
            <div className="text-xl font-extrabold text-orange-600 mt-0.5">{selectedDistrict.breachProb}</div>
            <span className="text-[11px] text-orange-500 font-semibold">High Vulnerability</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 text-xs font-medium">NDRF Units Assigned</span>
            <div className="text-xl font-extrabold text-indigo-600 mt-0.5">{selectedDistrict.ndrfTeams} Squads</div>
            <span className="text-[11px] text-indigo-600 font-semibold">{selectedDistrict.campsActive} Safe Camps</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── MODULE 3: CAP EMERGENCY BROADCAST (CELL BROADCAST / SMS / IVR) ── */
function BroadcastModule({ showToast }) {
  const [alertType, setAlertType] = useState('FLASH_FLOOD');
  const [severity, setSeverity] = useState('EXTREME');
  const [districts, setDistricts] = useState(['Supaul', 'Madhubani', 'Darbhanga']);
  const [channels, setChannels] = useState({ cellBroadcast: true, twilioSms: true, fcmPush: true, ivrVoice: true, sirens: false });
  const [customMsg, setCustomMsg] = useState('');
  const [transmitting, setTransmitting] = useState(false);
  const [broadcastLog, setBroadcastLog] = useState([
    { id: 'CAP-2024-912', timestamp: '10:14 AM', severity: 'EXTREME', scope: 'Supaul, Madhubani', reach: '3,840,000', status: 'TRANSMITTED' },
    { id: 'CAP-2024-911', timestamp: '06:30 AM', severity: 'SEVERE', scope: 'Patna Ward 12-18', reach: '920,000', status: 'TRANSMITTED' },
    { id: 'CAP-2024-910', timestamp: '01:15 AM', severity: 'MODERATE', scope: 'Sitamarhi Sector 4', reach: '410,000', status: 'ARCHIVED' },
  ]);

  const allDistricts = ['Supaul', 'Madhubani', 'Darbhanga', 'Saharsa', 'Patna Sadar', 'Sitamarhi', 'Katihar', 'Purnia'];

  const toggleDistrict = (d) => {
    setDistricts((prev) => prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]);
  };

  const handleBroadcast = () => {
    if (districts.length === 0) {
      showToast('Select at least one district to broadcast.', 'error');
      return;
    }
    setTransmitting(true);
    setTimeout(() => {
      setTransmitting(false);
      const newEntry = {
        id: `CAP-2024-${Math.floor(100 + Math.random() * 900)}`,
        timestamp: 'Just now',
        severity: severity,
        scope: districts.join(', '),
        reach: `${(districts.length * 820000).toLocaleString()}`,
        status: 'TRANSMITTED',
      };
      setBroadcastLog([newEntry, ...broadcastLog]);
      showToast(`CAP Alert successfully transmitted to ~${(districts.length * 820000).toLocaleString()} citizens!`, 'success');
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-red-700">COMMON ALERTING PROTOCOL (ITU-T X.1303)</span>
        </div>
        <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">National Emergency Alert Broadcaster</h2>
        <p className="text-sm text-slate-500">Authorized command gateway for instant nationwide Cell Broadcast, SMS gateway, audio sirens & IVR calls</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Compose Console */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-red-600 text-[22px]">cell_tower</span>
              <h3 className="font-extrabold text-slate-900 text-sm">Compose Emergency Broadcast</h3>
            </div>
            <span className="text-xs font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
              GATEWAY ARMED
            </span>
          </div>

          {/* Severity & Incident Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Alert Severity</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'EXTREME', label: 'Extreme (Red)', color: 'bg-red-600' },
                  { id: 'SEVERE', label: 'Severe (Orange)', color: 'bg-orange-500' },
                  { id: 'MODERATE', label: 'Watch (Amber)', color: 'bg-amber-500' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSeverity(s.id)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${severity === s.id ? `${s.color} text-white border-transparent shadow` : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Preset Template</label>
              <select 
                value={alertType}
                onChange={(e) => {
                  setAlertType(e.target.value);
                  if (e.target.value === 'FLASH_FLOOD') {
                    setCustomMsg('URGENT FLOOD EVACUATION NOTICE: Koshi river discharge exceeding danger marks. Immediate evacuation mandatory for all low-lying areas. Move to designated relief camps. Call 1070 for NDRF assistance. / तत्काल बाढ़ चेतावनी: तुरंत सुरक्षित स्थान पर जाएं।');
                  } else if (e.target.value === 'BARRAGE_RELEASE') {
                    setCustomMsg('BARRAGE DISCHARGE NOTICE: 24 gates opened at Koshi Barrage. Rapid water surge anticipated downstream within 3 hours. Fishermen and riverine villagers must evacuate immediately.');
                  } else {
                    setCustomMsg('BOIL WATER & MEDICAL ADVISORY: Flood waters contaminated. Use halogen chlorine tablets or boiled water only. Free medical aid available at district camps.');
                  }
                }}
                className="w-full text-xs font-semibold px-3 py-2.5 rounded-xl border border-slate-200 focus:border-red-400 outline-none"
              >
                <option value="FLASH_FLOOD">Flash Flood Evacuation Order (Hindi/Eng)</option>
                <option value="BARRAGE_RELEASE">Barrage High Discharge Advisory</option>
                <option value="BOIL_WATER">Drinking Water & Epidemic Prevention</option>
              </select>
            </div>
          </div>

          {/* District Geofencing */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Target Geofence Districts ({districts.length} Selected)</label>
              <span className="text-[11px] text-slate-400 font-mono">~{(districts.length * 820000).toLocaleString()} recipients</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {allDistricts.map((d) => {
                const active = districts.includes(d);
                return (
                  <button
                    key={d}
                    onClick={() => toggleDistrict(d)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${active ? 'bg-purple-700 text-white border-transparent shadow-sm' : 'border-slate-200 text-slate-600 hover:border-purple-300'}`}
                  >
                    {active && <span className="mr-1">✓</span>}
                    {d}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Alert Message Textarea */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Bilingual Emergency Message Payload</label>
            <textarea
              rows={4}
              value={customMsg || 'URGENT FLOOD EVACUATION NOTICE: Koshi river discharge exceeding danger marks. Immediate evacuation mandatory for all low-lying areas. Move to designated relief camps. Call 1070 for NDRF assistance. / तत्काल बाढ़ चेतावनी: तुरंत सुरक्षित स्थान पर जाएं।'}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="w-full text-xs md:text-sm p-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none resize-none font-sans"
            />
          </div>

          {/* Multi-Channel Distribution Grid */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Transmission Pipelines</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { key: 'cellBroadcast', label: 'Cell Broadcast', desc: 'Govt Siren Overwrite' },
                { key: 'twilioSms', label: 'Twilio / CDAC SMS', desc: 'Zero Data 2G/4G' },
                { key: 'fcmPush', label: 'Firebase Push', desc: 'Citizen App Alert' },
                { key: 'ivrVoice', label: 'Automated IVR', desc: 'Dial-out Voice Calls' },
              ].map((c) => (
                <button
                  key={c.key}
                  onClick={() => setChannels({ ...channels, [c.key]: !channels[c.key] })}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${channels[c.key] ? 'border-red-300 bg-red-50/70 text-red-900' : 'border-slate-200 text-slate-500'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs">{c.label}</span>
                    <span className={`w-2 h-2 rounded-full ${channels[c.key] ? 'bg-red-600' : 'bg-slate-300'}`} />
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">{c.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Execute Button */}
          <button
            onClick={handleBroadcast}
            disabled={transmitting}
            className={`w-full py-3.5 rounded-xl font-extrabold text-sm text-white shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 ${transmitting ? 'bg-slate-700' : 'bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 shadow-red-200 active:scale-98'}`}
          >
            <span className={`material-symbols-outlined text-[20px] ${transmitting ? 'animate-spin' : 'animate-pulse'}`}>
              {transmitting ? 'sync' : 'cell_tower'}
            </span>
            {transmitting ? 'Transmitting Over CAP Gateways...' : `TRANSMIT EMERGENCY BROADCAST → ${(districts.length * 820000).toLocaleString()} CITIZENS`}
          </button>
        </div>

        {/* Right: Broadcast Transmission Audit Log */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-extrabold text-slate-900 text-sm">CAP Transmission Audit Ledger</h3>
              <span className="text-xs text-slate-400 font-mono">ITU-T X.1303</span>
            </div>

            <div className="divide-y divide-slate-100 mt-2">
              {broadcastLog.map((log) => (
                <div key={log.id} className="py-3.5 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-purple-700">{log.id}</span>
                    <span className="text-[11px] text-slate-400">{log.timestamp}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${log.severity === 'EXTREME' ? 'bg-red-600 text-white' : 'bg-orange-500 text-white'}`}>
                      {log.severity}
                    </span>
                    <span className="text-xs font-semibold text-slate-800 truncate">{log.scope}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 mt-1 font-mono">
                    <span>Recipients: <strong className="text-slate-900">{log.reach}</strong></span>
                    <span className="text-emerald-600 font-bold">✓ {log.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-5 text-white border border-slate-800 shadow-lg">
            <h4 className="font-extrabold text-sm mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-400 text-[18px]">verified</span>
              Disaster Gateway Compliance
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Connected via National Disaster Management Services (NDMS) and C-DOT Sachet national cell broadcast engine. Tested for latency under 8 seconds to 4.2 million subscribers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── MODULE 4: BARRAGE & HYDROLOGICAL GATE OPERATIONS ── */
function BarrageModule({ showToast }) {
  const [gates, setGates] = useState([
    { group: '1–8', open: false, height: 0, flow: '0' },
    { group: '9–16', open: true, height: 4.8, flow: '68,000' },
    { group: '17–28', open: true, height: 6.2, flow: '142,000' },
    { group: '29–40', open: true, height: 5.5, flow: '115,000' },
    { group: '41–48', open: true, height: 3.5, flow: '42,000' },
    { group: '49–56', open: false, height: 0, flow: '0' },
  ]);

  const toggleGroup = (idx) => {
    const updated = [...gates];
    const g = updated[idx];
    g.open = !g.open;
    g.height = g.open ? 5.2 : 0;
    g.flow = g.open ? '98,000' : '0';
    setGates(updated);
    showToast(`Koshi Barrage: Gates ${g.group} ${g.open ? 'OPENED' : 'SHUT'}. Downstream flood model recalculated.`, g.open ? 'warning' : 'info');
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700">INDIA-NEPAL BILATERAL HYDRAULIC FEED</span>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">Koshi & Gandak Barrage Telemetry</h2>
          <p className="text-sm text-slate-500">Supervisory Control and Data Acquisition (SCADA) simulation for 56 radial crest gates</p>
        </div>

        <div className="px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold">
          TOTAL DISCHARGE: 367,000 CUSECS
        </div>
      </div>

      {/* Hydraulic Cross-Section & Reservoir Elevation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Upstream Reservoir Level</span>
          <div className="text-2xl font-black text-slate-900 mt-1">84.20 m <span className="text-xs font-normal text-slate-400">HDSL</span></div>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
            <div className="bg-red-500 h-full w-[88%]" />
          </div>
          <span className="text-[11px] text-red-500 font-semibold mt-1 block">0.8m below High Dam Safety Limit (85.0m)</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Radial Gates Status</span>
          <div className="text-2xl font-black text-amber-600 mt-1">40 of 56 Gates Active</div>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
            <div className="bg-amber-500 h-full w-[71%]" />
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block">71.4% capacity discharged</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Downstream Surge Arrival</span>
          <div className="text-2xl font-black text-indigo-700 mt-1">2.4 Hours</div>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
            <div className="bg-indigo-600 h-full w-[60%]" />
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block">Impact zone: Supaul, Nirmali & Madhubani</span>
        </div>
      </div>

      {/* 56 Gates Actuator Array */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <h3 className="font-extrabold text-slate-900 text-sm">Crest Gate Actuator Groups (Koshi Barrage, Birpur)</h3>
            <p className="text-xs text-slate-500 mt-0.5">Toggle actuator groups to adjust discharge flow curves</p>
          </div>
          <span className="text-xs font-mono text-slate-400">SCADA LINK: ENCRYPTED</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {gates.map((g, idx) => (
            <div 
              key={g.group} 
              className={`p-4 rounded-2xl border transition-all ${g.open ? 'border-sky-300 bg-sky-50/50' : 'border-slate-200 bg-slate-50'}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-extrabold text-slate-900 text-sm">Gates {g.group}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${g.open ? 'bg-sky-600 text-white' : 'bg-slate-300 text-slate-700'}`}>
                  {g.open ? 'OPEN' : 'CLOSED'}
                </span>
              </div>
              <div className="flex justify-between text-xs text-slate-600 font-mono mb-3">
                <span>Elevation: <strong>{g.height}m</strong></span>
                <span>Flow: <strong>{g.flow} cusecs</strong></span>
              </div>
              <button
                onClick={() => toggleGroup(idx)}
                className={`w-full py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${g.open ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-sky-600 text-white hover:bg-sky-700'}`}
              >
                {g.open ? 'Close Gate Actuators' : 'Authorize Gate Opening'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── MODULE 5: NDRF & MILITARY FORCE GRID ── */
function ForcesModule({ showToast }) {
  const battalions = [
    { unit: '9th Battalion NDRF (Alpha)', base: 'Supaul Sector', strength: '180 Personnel', boats: 18, missions: 24, status: 'ENGAGED' },
    { unit: '9th Battalion NDRF (Bravo)', base: 'Madhubani Sector', strength: '140 Personnel', boats: 14, missions: 19, status: 'ENGAGED' },
    { unit: '10th Battalion NDRF (Echo)', base: 'Darbhanga Reserve', strength: '220 Personnel', boats: 22, missions: 11, status: 'STAGED' },
    { unit: 'Bihar SDRF Water Rescue Unit', base: 'Patna Ghats', strength: '310 Personnel', boats: 34, missions: 42, status: 'ENGAGED' },
    { unit: 'Indian Army Engineer Task Force (ETF)', base: 'Danapur Cantonment', strength: '260 Personnel', boats: 28, missions: 8, status: 'STANDBY' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">ARMED FORCES & DISASTER BRIGADE</span>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">Tactical Force Grid & Air Sorties</h2>
          <p className="text-sm text-slate-500">Live operational command of NDRF, SDRF, Army ETF and IAF airlift squadrons</p>
        </div>

        <button 
          onClick={() => showToast('Requisitioned additional 4 NDRF teams from Ranchi hub.', 'success')}
          className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow transition-all cursor-pointer flex items-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[16px]">add_moderator</span> Requisition Reserve Teams
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-extrabold text-slate-900 text-sm">Active Battalion Roster</h3>
          <span className="text-xs text-slate-400 font-mono">1,110 Active Responders</span>
        </div>

        <div className="divide-y divide-slate-100">
          {battalions.map((b) => (
            <div key={b.unit} className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 font-bold shrink-0">
                  <span className="material-symbols-outlined text-[20px]">military_tech</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{b.unit}</h4>
                  <p className="text-xs text-slate-500">{b.base} • {b.strength}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-slate-600 font-mono">
                <span>Boats: <strong className="text-slate-900">{b.boats}</strong></span>
                <span>Rescues: <strong className="text-indigo-700">{b.missions}</strong></span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${b.status === 'ENGAGED' ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                  {b.status}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => showToast(`Encrypted comms opened with ${b.unit}.`, 'info')}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  Comms
                </button>
                <button 
                  onClick={() => showToast(`Re-assigned mission coordinates to ${b.unit}.`, 'success')}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Deploy Task
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── MODULE 6: NGO & VOLUNTEER RELIEF LOGISTICS ── */
function NGOModule({ showToast }) {
  const ngos = [
    { name: 'Indian Red Cross Society', role: 'Medical Triage & Field Surgery', personnel: 64, camps: 8, location: 'Supaul & Nirmali' },
    { name: 'Goonj Humanitarian Relief', role: 'Dry Rations & Clothing', personnel: 48, camps: 12, location: 'Madhubani' },
    { name: 'SEEDS India', role: 'WASH & Water Purification', personnel: 36, camps: 6, location: 'Darbhanga' },
    { name: 'Doctors Without Borders (MSF)', role: 'Epidemic Disease Control', personnel: 28, camps: 4, location: 'Saharsa' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple-700">CIVIL SOCIETY & HUMANITARIAN AID</span>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">NGO Task Allocation & Logistics Hub</h2>
          <p className="text-sm text-slate-500">Coordination dashboard for partner relief organizations and decentralized volunteers</p>
        </div>

        <button 
          onClick={() => showToast('New relief supply requisition requisitioned.', 'success')}
          className="px-4 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs shadow transition-all cursor-pointer flex items-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[16px]">add_task</span> Allocate New Sector
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {ngos.map((ngo) => (
          <div key={ngo.name} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-extrabold text-slate-900 text-sm">{ngo.name}</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">ACTIVE</span>
              </div>
              <p className="text-xs text-purple-700 font-semibold mb-3">{ngo.role}</p>
              <div className="space-y-1.5 text-xs text-slate-600 font-mono">
                <div className="flex justify-between"><span>Assigned Sector:</span> <strong className="text-slate-900">{ngo.location}</strong></div>
                <div className="flex justify-between"><span>Personnel on Ground:</span> <strong className="text-slate-900">{ngo.personnel} Staff</strong></div>
                <div className="flex justify-between"><span>Covered Shelters:</span> <strong className="text-slate-900">{ngo.camps} Camps</strong></div>
              </div>
            </div>

            <div className="flex gap-2 mt-4 pt-3 border-t border-slate-100">
              <button onClick={() => showToast(`Emergency supplies dispatched to ${ngo.name}.`, 'success')} className="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer">
                Dispatch Rations
              </button>
              <button onClick={() => showToast(`Connecting to ${ngo.name} field coordinator.`, 'info')} className="flex-1 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold transition-colors cursor-pointer">
                Contact Ops
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── MODULE 7: DAMAGE AUDIT & DBT COMPENSATION CLAIMS ── */
function DamageModule({ showToast }) {
  const [claims, setClaims] = useState([
    { id: 'CLM-BR-901', name: 'Rameshwar Yadav', district: 'Supaul', type: 'Residential Collapse', amount: '₹1,80,000', status: 'PENDING' },
    { id: 'CLM-BR-902', name: 'Sunita Devi', district: 'Madhubani', type: 'Crop/Paddy Loss (4 Acres)', amount: '₹75,000', status: 'VERIFIED' },
    { id: 'CLM-BR-903', name: 'Mahesh Sahni', district: 'Darbhanga', type: 'Fisheries & Boat Loss', amount: '₹1,20,000', status: 'APPROVED' },
    { id: 'CLM-BR-904', name: 'Kavita Kumari', district: 'Saharsa', type: 'Livestock Loss (3 Cattle)', amount: '₹90,000', status: 'PENDING' },
  ]);

  const approveClaim = (id) => {
    setClaims((prev) => prev.map((c) => c.id === id ? { ...c, status: 'APPROVED' } : c));
    showToast(`Claim ${id} authorized. Direct Benefit Transfer (DBT) queued.`, 'success');
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-600 animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700">SDRF / NDRF DISASTER REHABILITATION FUND</span>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">Damage Claims & DBT Compensation Engine</h2>
          <p className="text-sm text-slate-500">AI satellite verification vs Patwari on-ground claim validation with Aadhaar DBT payout</p>
        </div>

        <button 
          onClick={() => showToast('Batch DBT transfer of ₹1.42 Crore approved for 124 verified claims.', 'success')}
          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow transition-all cursor-pointer flex items-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[16px]">account_balance</span> Authorize Batch DBT Payout
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-extrabold text-slate-900 text-sm">Direct Benefit Transfer Queue</h3>
          <span className="text-xs text-slate-400 font-mono">PFMS / Aadhaar Enabled</span>
        </div>

        <div className="divide-y divide-slate-100">
          {claims.map((c) => (
            <div key={c.id} className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-slate-50">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-sm">{c.name}</span>
                  <span className="font-mono text-xs text-purple-700 font-semibold">{c.id}</span>
                  <span className="text-xs text-slate-400">({c.district})</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{c.type}</p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-base font-extrabold text-slate-900">{c.amount}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold ${c.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-700' : c.status === 'VERIFIED' ? 'bg-sky-100 text-sky-700' : 'bg-amber-100 text-amber-700'}`}>
                  {c.status}
                </span>
              </div>

              {c.status !== 'APPROVED' ? (
                <div className="flex items-center gap-2">
                  <button onClick={() => approveClaim(c.id)} className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold cursor-pointer transition-colors">
                    Approve DBT
                  </button>
                </div>
              ) : (
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span> Disbursed
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── MAIN ADMIN DESK COMPONENT ── */
export default function AdminPage() {
  const { showToast } = useAuth();
  const [active, setActive] = useState('warroom');

  const modules = [
    { id: 'warroom', label: 'Unified War Room', icon: 'shield_person', tag: 'LIVE' },
    { id: 'gis', label: 'GIS & Satellite Radar', icon: 'radar' },
    { id: 'broadcast', label: 'CAP Alert Broadcast', icon: 'cell_tower', dot: true },
    { id: 'barrage', label: 'Barrage & Dams (SCADA)', icon: 'valve' },
    { id: 'forces', label: 'NDRF & Force Grid', icon: 'military_tech' },
    { id: 'ngo', label: 'NGO Relief Logistics', icon: 'volunteer_activism' },
    { id: 'damage', label: 'Damage Claims (DBT)', icon: 'account_balance' },
  ];

  const renderModule = () => {
    switch (active) {
      case 'warroom': return <WarRoomModule setActive={setActive} showToast={showToast} />;
      case 'gis': return <HeatmapModule showToast={showToast} />;
      case 'broadcast': return <BroadcastModule showToast={showToast} />;
      case 'barrage': return <BarrageModule showToast={showToast} />;
      case 'forces': return <ForcesModule showToast={showToast} />;
      case 'ngo': return <NGOModule showToast={showToast} />;
      case 'damage': return <DamageModule showToast={showToast} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <Navbar />

      <div className="flex">
        {/* Command Sidebar */}
        <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-slate-200 z-30 flex flex-col justify-between py-4 shadow-sm overflow-y-auto">
          <div className="flex flex-col gap-1 px-3">
            {/* Command Crest / Identity */}
            <div className="px-3 py-3 mb-2 rounded-2xl bg-gradient-to-br from-slate-900 to-purple-950 text-white shadow-md">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300">
                  <span className="material-symbols-outlined text-[20px]">shield_person</span>
                </div>
                <div>
                  <div className="text-xs font-extrabold tracking-wide">NDMA ADMIN DESK</div>
                  <div className="text-[10px] text-purple-300 font-mono">GOVT OF BIHAR • L4</div>
                </div>
              </div>
            </div>

            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
              Command Modules
            </div>

            {/* Navigation Buttons */}
            {modules.map((m) => {
              const isActive = active === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActive(m.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-purple-700 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[18px] ${isActive ? 'text-white' : 'text-slate-500'}`}>
                    {m.icon}
                  </span>
                  <span className="flex-1 truncate">{m.label}</span>
                  {m.dot && !isActive && (
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  )}
                  {m.tag && !isActive && (
                    <span className="px-1.5 py-0.5 rounded font-mono text-[9px] font-bold bg-emerald-100 text-emerald-700">
                      {m.tag}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Quick Status Pill */}
            <div className="mx-1 mt-4 p-3 rounded-2xl bg-red-50 border border-red-200">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                <span className="text-[10px] font-extrabold text-red-700 uppercase tracking-wider">Active Incident</span>
              </div>
              <div className="text-xs font-bold text-slate-900">INC-2024-BR09</div>
              <p className="text-[11px] text-slate-500 mt-0.5">Koshi-Gandak Basin Surge (L3 Response)</p>
            </div>
          </div>

          {/* Bottom CAP Emergency Trigger */}
          <div className="px-4 pt-3 border-t border-slate-100">
            <button
              onClick={() => setActive('broadcast')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] animate-pulse">cell_tower</span>
              Broadcast CAP Alert
            </button>
          </div>
        </aside>

        {/* Main Content Viewport */}
        <main className="ml-64 flex-1 min-h-[calc(100vh-64px)] p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">{renderModule()}</div>
        </main>
      </div>
    </div>
  );
}
