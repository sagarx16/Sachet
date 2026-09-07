'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import PortalTopbar from '../../components/PortalTopbar';
import { useAuth } from '../../context/AuthContext';

/* ── MODULE 1: Overview ── */
function OverviewModule({ setActive, openSos }) {
  return (
    <div className="flex flex-col gap-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-700 via-sky-800 to-slate-900 p-6 text-white shadow-xl">
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-sky-200">OPS GRID • LIVE • L3 SURGE ACTIVE</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight mb-1">Responder Command — NDRF Unit 9</h1>
            <p className="text-sky-200 text-sm">Bihar–Nepal Flood Operations • Supaul Forward Base • Shift B</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <button onClick={openSos} className="sos-glow flex items-center gap-2 px-5 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm shadow-lg transition-all hover:scale-105 cursor-pointer">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>e911_emergency</span>
              Distress Beacon
            </button>
            <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-[18px]">download</span>
              SITREP
            </button>
          </div>
        </div>
      </div>

      {/* Telemetry Ticker */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-red-100 text-red-700">
            <span className="material-symbols-outlined text-[16px] animate-pulse">crisis_alert</span>
            <span className="text-xs font-bold uppercase tracking-wider">L3 SURGE</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <span className="material-symbols-outlined text-[16px] text-sky-600">water_drop</span>
            <span className="font-bold text-slate-900">3.48L Cusec</span>
            <span className="material-symbols-outlined text-[14px] text-red-500">trending_up</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <span className="material-symbols-outlined text-[16px] text-emerald-600">wifi_tethering</span>
            <span className="font-bold text-emerald-700">99.4% Uptime</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-slate-600">
            <span className="material-symbols-outlined text-[16px] text-sky-600">sailing</span>
            <span className="font-bold text-slate-900">112 Boats</span>
            <span className="text-slate-400">deployed</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[14px]">tune</span>Telemetry
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Active Camps', value: '38', sub: 'of 42 • 19.1k occupants', icon: 'holiday_village', color: 'text-sky-700', bg: 'bg-sky-50', iconColor: 'text-sky-500', bar: 78, barColor: 'bg-amber-500' },
          { label: 'Squads Deployed', value: '24', sub: '19 Active • 5 Standby', icon: 'groups', color: 'text-emerald-700', bg: 'bg-emerald-50', iconColor: 'text-emerald-500', bar: 100, barColor: 'bg-emerald-500' },
          { label: 'Inventory', value: '88%', sub: '42.3k rations • 112 boats', icon: 'inventory_2', color: 'text-indigo-700', bg: 'bg-indigo-50', iconColor: 'text-indigo-500', bar: 88, barColor: 'bg-indigo-500' },
          { label: 'Reunited', value: '1,840', sub: '412 pending match', icon: 'family_restroom', color: 'text-purple-700', bg: 'bg-purple-50', iconColor: 'text-purple-500', bar: 82, barColor: 'bg-purple-500' },
        ].map((s) => (
          <div key={s.label} className={`p-4 rounded-2xl ${s.bg} border border-slate-100 flex flex-col gap-3 card-hover`}>
            <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm ${s.iconColor}`}>
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
            </div>
            <div>
              <div className={`text-2xl font-extrabold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-slate-500 font-medium">{s.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{s.sub}</div>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/80 overflow-hidden">
              <div className={`h-full rounded-full ${s.barColor}`} style={{ width: `${s.bar}%` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Quick Module Access */}
      <div>
        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Quick Access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { id: 'camps', label: 'Camps & Shelters', desc: 'Capacity, occupancy & facility status', icon: 'holiday_village', color: 'from-sky-500 to-blue-600' },
            { id: 'dispatch', label: 'Squad Dispatch', desc: 'Assign, track & coordinate squads', icon: 'assignment_turned_in', color: 'from-emerald-500 to-teal-600' },
            { id: 'reunite', label: 'Kin Reunification', desc: 'Match & reunite separated families', icon: 'family_restroom', color: 'from-purple-500 to-violet-600' },
          ].map((m) => (
            <button key={m.id} onClick={() => setActive(m.id)} className="text-left p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all group card-hover">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>{m.icon}</span>
              </div>
              <div className="font-bold text-slate-900">{m.label}</div>
              <div className="text-xs text-slate-500 mt-1">{m.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Active Incidents Feed */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sky-600 text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>crisis_alert</span>
            <h2 className="font-bold text-slate-900">Active Incidents</h2>
          </div>
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { priority: 'P1', title: 'Levee breach — Sector 4, Supaul', squad: 'Alpha', eta: 'En-route', color: 'bg-red-600', icon: 'flood' },
            { priority: 'P2', title: 'Triage overflow — Birpur CHC', squad: 'Bravo', eta: 'ETA 12m', color: 'bg-orange-500', icon: 'local_hospital' },
            { priority: 'P3', title: 'Supply drop — Camp #08 Madhubani', squad: 'Team C', eta: '60% done', color: 'bg-amber-500', icon: 'local_shipping' },
            { priority: 'P4', title: 'Missing 4 persons — Kosi riverbank', squad: 'Delta', eta: 'Staged', color: 'bg-sky-500', icon: 'search' },
          ].map((inc, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-3.5 hover:bg-slate-50 transition-colors">
              <div className={`w-8 h-8 rounded-lg ${inc.color} flex items-center justify-center text-white shrink-0`}>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>{inc.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900">{inc.title}</p>
                <p className="text-xs text-slate-500">Squad: {inc.squad}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className={`px-2 py-0.5 rounded-full ${inc.color} text-white text-xs font-bold`}>{inc.priority}</span>
                <span className="text-xs text-slate-500 font-medium">{inc.eta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── MODULE 2: Camps & Shelters ── */
function CampsModule({ showToast }) {
  const [filter, setFilter] = useState('all');
  const camps = [
    { id: 'SUP-4921', name: 'Supaul Shelter #08', type: 'camp', dist: '2.4 km NE', cap: 1200, occ: 980, water: 94, food: 3, medics: 2, status: 'ACTIVE', power: true },
    { id: 'BRP-1002', name: 'Birpur CHC', type: 'hospital', dist: '5.8 km N', cap: 22, occ: 18, water: 100, food: 7, medics: 4, status: 'TIER-2', power: true },
    { id: 'NH57-KM14', name: 'NH-57 Flyover Highland', type: 'highland', dist: '1.2 km W', cap: 3500, occ: 2300, water: 0, food: 0, medics: 0, status: 'HIGHLAND', power: false },
    { id: 'MDH-0041', name: 'Madhubani College', type: 'camp', dist: '8.1 km S', cap: 800, occ: 793, water: 72, food: 1, medics: 1, status: 'FULL', power: true },
    { id: 'SAH-0022', name: 'Saharsa Govt School', type: 'camp', dist: '12.3 km SE', cap: 600, occ: 290, water: 88, food: 5, medics: 2, status: 'ACTIVE', power: true },
    { id: 'DBG-CHC-3', name: 'Darbhanga CHC Block-3', type: 'hospital', dist: '18.0 km W', cap: 30, occ: 12, water: 100, food: 10, medics: 6, status: 'OPEN', power: true },
  ];
  const filtered = filter === 'all' ? camps : camps.filter((c) => c.type === filter);
  const statusColor = (s) => ({
    ACTIVE: 'bg-emerald-100 text-emerald-700',
    FULL: 'bg-red-100 text-red-700',
    'TIER-2': 'bg-sky-100 text-sky-700',
    HIGHLAND: 'bg-amber-100 text-amber-700',
    OPEN: 'bg-teal-100 text-teal-700',
  }[s] || 'bg-slate-100 text-slate-600');

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">Camps & Shelters Management</h2>
          <p className="text-sm text-slate-500">Live capacity, supply status & facility management for all safe zones</p>
        </div>
        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
          {[['all', 'All'], ['camp', 'Camps'], ['hospital', 'CHC'], ['highland', 'Highlands']].map(([v, l]) => (
            <button key={v} onClick={() => setFilter(v)} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${filter === v ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>{l}</button>
          ))}
        </div>
      </div>

      {/* Summary row */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Total Sheltered', value: '19,100', icon: 'group', color: 'text-sky-700 bg-sky-50' },
          { label: 'Total Capacity', value: '24,500', icon: 'holiday_village', color: 'text-slate-700 bg-slate-50' },
          { label: 'Full / Critical', value: '4 Sites', icon: 'warning', color: 'text-red-700 bg-red-50' },
        ].map((s) => (
          <div key={s.label} className={`p-4 rounded-2xl ${s.color} border border-slate-100 flex items-center gap-3`}>
            <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
            <div>
              <div className="text-lg font-extrabold">{s.value}</div>
              <div className="text-xs font-semibold opacity-70">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Camp Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filtered.map((c) => {
          const pct = Math.round((c.occ / c.cap) * 100);
          const barColor = pct >= 98 ? 'bg-red-500' : pct >= 80 ? 'bg-amber-500' : 'bg-emerald-500';
          return (
            <div key={c.id} className={`bg-white rounded-2xl border shadow-sm overflow-hidden ${pct >= 98 ? 'border-red-200' : 'border-slate-200'}`}>
              <div className={`h-1.5 w-full ${barColor}`} />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <h3 className="font-bold text-slate-900 text-sm">{c.name}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${statusColor(c.status)}`}>{c.status}</span>
                    </div>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">near_me</span>
                      {c.dist} • {c.id}
                    </p>
                  </div>
                  <span className={`text-lg font-extrabold ${pct >= 98 ? 'text-red-600' : pct >= 80 ? 'text-amber-600' : 'text-emerald-600'}`}>{pct}%</span>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-500">{c.occ.toLocaleString()} / {c.cap.toLocaleString()} occupied</span>
                    <span className={pct >= 98 ? 'text-red-600 font-bold' : 'text-slate-600'}>{(c.cap - c.occ).toLocaleString()} free</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className={`h-full rounded-full ${barColor} transition-all`} style={{ width: `${Math.min(pct, 100)}%` }} />
                  </div>
                </div>
                {c.type !== 'highland' && (
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'Water', val: c.water > 0 ? `${c.water}%` : '—', icon: 'water_drop', color: c.water < 50 ? 'text-red-600' : 'text-sky-600' },
                      { label: 'Food (days)', val: c.food > 0 ? `${c.food}d` : '—', icon: 'restaurant', color: c.food < 2 ? 'text-red-600' : 'text-emerald-600' },
                      { label: 'Medics', val: c.medics > 0 ? `${c.medics}` : '—', icon: 'medical_services', color: 'text-indigo-600' },
                    ].map((stat) => (
                      <div key={stat.label} className="flex flex-col items-center p-2 rounded-xl bg-slate-50 border border-slate-100">
                        <span className={`material-symbols-outlined text-[16px] ${stat.color}`}>{stat.icon}</span>
                        <span className={`font-bold text-sm ${stat.color}`}>{stat.val}</span>
                        <span className="text-xs text-slate-400">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-[14px]">directions</span>Route
                  </button>
                  <button onClick={() => showToast(`${c.name} — divert order sent to all nearby squads.`, 'success')} className="flex-1 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-[14px]">person_add</span>Direct
                  </button>
                  {c.status === 'FULL' && (
                    <button onClick={() => showToast(`${c.name} — halt order issued.`, 'error')} className="flex-1 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-[14px]">block</span>Halt
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Supply Inventory Summary */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-indigo-600 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
            <h3 className="font-bold text-slate-900 text-sm">Supply Inventory — All Sites</h3>
          </div>
          <button className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold hover:bg-indigo-100 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[14px] align-middle">swap_horiz</span> Shift Supplies
          </button>
        </div>
        <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Food & Water', val: '42,300 packs', pct: 66, color: 'bg-sky-500' },
            { label: 'Medicines & AV', val: '8,450 units', pct: 45, color: 'bg-red-500', warn: true },
            { label: 'Boats (OED)', val: '112 vessels', pct: 84, color: 'bg-teal-500' },
            { label: 'Life Vests & Kits', val: '15,200 units', pct: 78, color: 'bg-indigo-500' },
          ].map((s) => (
            <div key={s.label} className={`p-3 rounded-xl ${s.warn ? 'bg-red-50 border border-red-200' : 'bg-slate-50 border border-slate-100'} flex flex-col gap-2`}>
              <div className="text-sm font-bold text-slate-900">{s.val}</div>
              <div className="text-xs text-slate-500 font-medium">{s.label}</div>
              {s.warn && <div className="text-xs text-red-600 font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">warning</span>LOW — Madhubani: 45u</div>}
              <div className="w-full h-1.5 rounded-full bg-white overflow-hidden">
                <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── MODULE 3: Squad Dispatch ── */
function DispatchModule({ showToast }) {
  const [squads, setSquads] = useState([
    { id: 'SQ-A', name: 'Squad Alpha', type: 'RESCUE', mission: 'Sec-4 Levee breach', status: 'EN-ROUTE', eta: 'Arriving', boat: '#14', members: 8, channel: 'CH-8', priority: 'P1' },
    { id: 'SQ-B', name: 'Squad Bravo', type: 'MEDICAL', mission: 'Birpur CHC Triage', status: 'ACTIVE', eta: 'ETA 12m', boat: '#22', members: 4, channel: 'CH-11', priority: 'P2' },
    { id: 'SQ-C', name: 'Team Charlie', type: 'LOGISTICS', mission: 'Camp #08 supply drop', status: 'IN-PROGRESS', eta: '60% done', boat: null, members: 12, channel: 'CH-5', priority: 'P3' },
    { id: 'SQ-D', name: 'Team Delta', type: 'SEARCH', mission: 'Kosi riverbank — 4 missing', status: 'STAGED', eta: 'Awaiting orders', boat: '#31', members: 6, channel: 'CH-9', priority: 'P4' },
    { id: 'SQ-E', name: 'Squad Echo', type: 'RESCUE', mission: 'Unassigned', status: 'STANDBY', eta: '—', boat: '#18', members: 8, channel: 'CH-3', priority: null },
    { id: 'SQ-F', name: 'Team Foxtrot', type: 'MEDICAL', mission: 'Unassigned', status: 'STANDBY', eta: '—', boat: null, members: 5, channel: 'CH-7', priority: null },
  ]);
  const [form, setForm] = useState({ squad: '', mission: '', priority: 'P2', location: '' });

  const statusColors = {
    'EN-ROUTE': 'bg-sky-100 text-sky-700',
    ACTIVE: 'bg-emerald-100 text-emerald-700',
    'IN-PROGRESS': 'bg-indigo-100 text-indigo-700',
    STAGED: 'bg-amber-100 text-amber-700',
    STANDBY: 'bg-slate-100 text-slate-600',
  };
  const typeColors = {
    RESCUE: 'bg-red-100 text-red-700',
    MEDICAL: 'bg-sky-100 text-sky-700',
    LOGISTICS: 'bg-amber-100 text-amber-700',
    SEARCH: 'bg-purple-100 text-purple-700',
  };
  const pColors = { P1: 'bg-red-600', P2: 'bg-orange-500', P3: 'bg-amber-500', P4: 'bg-sky-500' };

  const handleAssign = (e) => {
    e.preventDefault();
    setSquads((prev) => prev.map((s) => s.id === form.squad ? { ...s, mission: form.location, status: 'EN-ROUTE', eta: 'Dispatched', priority: form.priority } : s));
    showToast(`${form.squad} dispatched → ${form.location}`, 'success');
    setForm({ squad: '', mission: '', priority: 'P2', location: '' });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">Squad Dispatch Board</h2>
          <p className="text-sm text-slate-500">Real-time rescue team coordination, mission assignment & tracking</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-emerald-700">24 Squads Online</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Squad list */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider">All Units</h3>
          {squads.map((s) => (
            <div key={s.id} className={`bg-white rounded-2xl border shadow-sm p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 card-hover ${s.status === 'EN-ROUTE' ? 'border-sky-200' : s.status === 'STANDBY' ? 'border-slate-200' : 'border-slate-200'}`}>
              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm shrink-0 ${s.status === 'STANDBY' ? 'bg-slate-100 text-slate-400' : 'bg-sky-100 text-sky-700'}`}>
                  {s.name[6] || s.name[5]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-bold text-slate-900 text-sm">{s.name}</span>
                    <span className={`px-1.5 py-0.5 rounded text-xs font-bold ${typeColors[s.type]}`}>{s.type}</span>
                    {s.priority && <span className={`px-1.5 py-0.5 rounded-full ${pColors[s.priority]} text-white text-xs font-bold`}>{s.priority}</span>}
                  </div>
                  <p className="text-xs text-slate-600 font-medium">{s.mission}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-1 flex-wrap">
                    <span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px]">groups</span>{s.members} members</span>
                    {s.boat && <span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px]">sailing</span>Boat {s.boat}</span>}
                    <span className="flex items-center gap-0.5 text-sky-600 font-semibold"><span className="material-symbols-outlined text-[12px]">sensors</span>{s.channel}</span>
                    <span className="font-semibold text-slate-500">{s.eta}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${statusColors[s.status]}`}>{s.status}</span>
                <button onClick={() => showToast(`Hailing ${s.name} on ${s.channel}...`, 'info')} className="h-8 px-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[14px]">radio</span>Hail
                </button>
                {s.status !== 'STANDBY' && (
                  <button onClick={() => { setSquads((prev) => prev.map((sq) => sq.id === s.id ? { ...sq, status: 'STANDBY', mission: 'Unassigned', priority: null, eta: '—' } : sq)); showToast(`${s.name} marked done.`, 'success'); }}
                    className="h-8 px-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-[14px]">check</span>Done
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Assign Form */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden sticky top-24">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2 bg-sky-50">
              <span className="material-symbols-outlined text-sky-600 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>add_task</span>
              <h3 className="font-bold text-slate-900 text-sm">Assign New Mission</h3>
            </div>
            <form onSubmit={handleAssign} className="p-5 flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Select Squad</label>
                <select required value={form.squad} onChange={(e) => setForm({ ...form, squad: e.target.value })} className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 outline-none transition">
                  <option value="">-- Select unit --</option>
                  {squads.map((s) => <option key={s.id} value={s.id}>{s.name} ({s.status})</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Mission Location</label>
                <input type="text" required placeholder="e.g. Sector 4 Levee, Supaul" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 outline-none transition" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Priority</label>
                <div className="grid grid-cols-4 gap-2">
                  {['P1', 'P2', 'P3', 'P4'].map((p) => (
                    <button type="button" key={p} onClick={() => setForm({ ...form, priority: p })} className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${form.priority === p ? `${pColors[p]} text-white border-transparent` : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}>{p}</button>
                  ))}
                </div>
                <div className="text-xs text-slate-400 mt-1">P1: Life-threat • P2: Urgent • P3: Moderate • P4: Routine</div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Mission Notes</label>
                <textarea rows={3} placeholder="Equipment needed, number of persons, route..." value={form.mission} onChange={(e) => setForm({ ...form, mission: e.target.value })} className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 outline-none transition resize-none" />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md shadow-sky-100 transition-all cursor-pointer">
                Dispatch Squad
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── MODULE 4: Kin Reunification ── */
function ReuniteModule({ showToast }) {
  const [tab, setTab] = useState('board');
  const [form, setForm] = useState({ name: '', age: '', location: '', contact: '', desc: '' });

  const cases = [
    { id: 'RU-0841', name: 'Ramnath Yadav', age: 67, lastSeen: 'Supaul Ghaat ferry crossing', since: '14 hrs', status: 'SEARCHING', reporter: '+91 987XXXXX', squads: ['Alpha'] },
    { id: 'RU-0840', name: 'Priya Kumari (minor)', age: 9, lastSeen: 'Madhubani Chowk', since: '1 day', status: 'FOUND', reporter: '+91 876XXXXX', squads: ['Bravo'] },
    { id: 'RU-0839', name: 'Shyam Lal & family (4)', age: 45, lastSeen: 'Darbhanga embankment', since: '2 days', status: 'SEARCHING', reporter: '+91 765XXXXX', squads: ['Delta'] },
    { id: 'RU-0838', name: 'Savitri Devi', age: 72, lastSeen: 'Saharsa relief camp #3', since: '3 days', status: 'REUNITED', reporter: '+91 654XXXXX', squads: ['Charlie'] },
    { id: 'RU-0837', name: 'Mohd. Irfan (child)', age: 7, lastSeen: 'Patna railway overbridge', since: '5 hrs', status: 'SEARCHING', reporter: '+91 543XXXXX', squads: [] },
  ];

  const statusColor = (s) => ({
    SEARCHING: 'bg-red-100 text-red-700',
    FOUND: 'bg-sky-100 text-sky-700',
    REUNITED: 'bg-emerald-100 text-emerald-700',
  }[s]);

  const handleSubmit = (e) => { e.preventDefault(); showToast('Missing person registered & broadcast to all active squads.', 'success'); setTab('board'); };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">Kin Reunification Board</h2>
          <p className="text-sm text-slate-500">Track, search and reunite families separated during the disaster</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm font-bold text-slate-900">1,840 <span className="text-emerald-600">Reunited</span> • 412 <span className="text-red-600">Searching</span></div>
          <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
            <button onClick={() => setTab('board')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${tab === 'board' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}>Board</button>
            <button onClick={() => setTab('register')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${tab === 'register' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}>Register</button>
          </div>
        </div>
      </div>

      {tab === 'board' ? (
        <div className="flex flex-col gap-3">
          {/* Progress */}
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between text-sm font-bold mb-2">
              <span className="text-slate-700">Overall Reunification Progress</span>
              <span className="text-emerald-600">82%</span>
            </div>
            <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden flex gap-0.5">
              <div className="h-full bg-emerald-500 rounded-l-full" style={{ width: '82%' }} />
              <div className="h-full bg-red-400 rounded-r-full" style={{ width: '18%' }} />
            </div>
            <div className="flex gap-4 mt-2 text-xs text-slate-500 font-semibold">
              <span className="text-emerald-600">■ 1,840 Reunited</span>
              <span className="text-red-500">■ 412 Still searching</span>
            </div>
          </div>

          {cases.map((c) => (
            <div key={c.id} className={`bg-white rounded-2xl border shadow-sm p-4 flex items-start gap-4 card-hover ${c.status === 'SEARCHING' ? 'border-red-200' : 'border-slate-200'}`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-extrabold shrink-0 ${statusColor(c.status)}`}>
                {c.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="font-bold text-slate-900 text-sm">{c.name}</span>
                  <span className="text-xs text-slate-400 font-mono">{c.id}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${statusColor(c.status)}`}>{c.status}</span>
                </div>
                <p className="text-xs text-slate-600">Age: {c.age} • Last seen: {c.lastSeen}</p>
                <p className="text-xs text-slate-400 mt-0.5">Missing since: {c.since} • Reporter: {c.reporter}</p>
                {c.squads.length > 0 && (
                  <div className="flex items-center gap-1 mt-1 flex-wrap">
                    <span className="text-xs text-slate-400">Assigned:</span>
                    {c.squads.map((sq) => <span key={sq} className="text-xs px-1.5 py-0.5 rounded bg-sky-100 text-sky-700 font-semibold">Squad {sq}</span>)}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                {c.status === 'SEARCHING' && (
                  <>
                    <button onClick={() => showToast(`Broadcast sent for ${c.name} to all active squads.`, 'success')} className="px-3 py-1.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-[14px]">campaign</span>Broadcast
                    </button>
                    <button onClick={() => showToast(`${c.name} marked as Found!`, 'success')} className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span>Found
                    </button>
                  </>
                )}
                {c.status === 'FOUND' && (
                  <button onClick={() => showToast(`${c.name} reunited with family!`, 'success')} className="px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-[14px]">favorite</span>Reunite
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 max-w-lg">
          <h3 className="font-bold text-slate-900 mb-4">Register Missing Person</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {[
              { label: 'Full Name', key: 'name', type: 'text', ph: 'Ramnath Yadav' },
              { label: 'Age', key: 'age', type: 'number', ph: '67' },
              { label: 'Last Known Location', key: 'location', type: 'text', ph: 'Supaul Ghaat, near ferry' },
              { label: 'Reporter Contact', key: 'contact', type: 'tel', ph: '+91 98765 43210' },
            ].map((f) => (
              <div key={f.key}>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">{f.label}</label>
                <input type={f.type} required placeholder={f.ph} value={form[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 outline-none transition" />
              </div>
            ))}
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Physical Description</label>
              <textarea rows={3} placeholder="Clothing, features, any distinguishing marks..." value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 outline-none transition resize-none" />
            </div>
            <button type="submit" className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm cursor-pointer">Register & Broadcast to All Squads</button>
          </form>
        </div>
      )}
    </div>
  );
}

/* ── MAIN PAGE ── */
export default function ResponderPage() {
  const { openSos, showToast } = useAuth();
  const [active, setActive] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const modules = [
    { id: 'overview', label: 'Overview', icon: 'grid_view' },
    { id: 'camps', label: 'Camps & Shelters', icon: 'holiday_village' },
    { id: 'dispatch', label: 'Squad Dispatch', icon: 'assignment_turned_in' },
    { id: 'reunite', label: 'Kin Reunification', icon: 'family_restroom' },
  ];

  const colors = {
    overview: 'text-sky-600',
    camps: 'text-emerald-600',
    dispatch: 'text-indigo-600',
    reunite: 'text-purple-600',
  };

  const render = () => {
    switch (active) {
      case 'overview': return <OverviewModule setActive={setActive} openSos={openSos} />;
      case 'camps': return <CampsModule showToast={showToast} />;
      case 'dispatch': return <DispatchModule showToast={showToast} />;
      case 'reunite': return <ReuniteModule showToast={showToast} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-on-surface">
      <Navbar />
      <PortalTopbar
        portal="responder"
        menuOpen={mobileMenuOpen}
        onMenuClick={() => setMobileMenuOpen((open) => !open)}
      />
      <div className="flex flex-col lg:flex-row items-stretch lg:items-start">
        {/* Sidebar */}
        <aside className={`${mobileMenuOpen ? 'flex fixed inset-x-0 top-14 bottom-0' : 'hidden'} lg:flex w-full lg:w-64 shrink-0 bg-white border-b lg:border-b-0 lg:border-r border-slate-200/80 shadow-[1px_0_6px_rgba(0,0,0,0.03)] z-30 flex-col lg:sticky lg:top-[120px] lg:h-[calc(100vh-120px)] pt-4`}>
          {/* Header Identity Block */}
          <div id="responder-header-block" className="px-4 pb-4 border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sky-700 flex items-center justify-center text-white shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>emergency_home</span>
              </div>
              <div className="min-w-0">
                <div className="text-sm font-extrabold text-slate-900 leading-tight">Responder Hub</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">NDRF OPS COMMAND</div>
              </div>
            </div>
          </div>

          {/* Scrollable Middle: Operations Desks & Live Status */}
          <div className="flex-1 overflow-y-auto px-3.5 py-3 flex flex-col">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
              Operations Desks
            </div>
            <nav className="grid grid-cols-2 lg:flex lg:flex-col gap-1.5">
              {modules.map((m) => {
                const isActive = active === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => { setActive(m.id); setMobileMenuOpen(false); }}
                    className={`group w-full h-10 px-3 rounded-xl flex items-center gap-3 text-left text-[13px] transition-all cursor-pointer ${
                      isActive
                        ? 'bg-sky-700 text-white font-semibold shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium'
                    }`}
                  >
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      <span
                        className={`material-symbols-outlined text-[19px] ${
                          isActive ? 'text-white' : colors[m.id]
                        }`}
                        style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                      >
                        {m.icon}
                      </span>
                    </div>
                    <span className="flex-1 truncate">{m.label}</span>
                    {m.id === 'dispatch' && !isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />}
                  </button>
                );
              })}
            </nav>

            {/* Live Status Card */}
            <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">OPS STATUS</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-600">LIVE</span>
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                {[['Squads Active', '19/24'], ['Camps Online', '38/42'], ['Incidents Open', '4']].map(([l, v]) => (
                  <div key={l} className="flex justify-between text-xs">
                    <span className="text-slate-500">{l}</span>
                    <span className="font-bold text-slate-900">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Footer Element */}
          <div className="p-3.5 border-t border-slate-100 bg-white shrink-0">
            <button
              onClick={openSos}
              className="sos-glow w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] animate-pulse">e911_emergency</span>
              <span>Distress Beacon</span>
            </button>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 min-h-[calc(100vh-120px)] pt-4 px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-5xl mx-auto">{render()}</div>
        </main>
      </div>
    </div>
  );
}
