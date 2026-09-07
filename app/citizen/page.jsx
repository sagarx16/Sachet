'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import PortalTopbar from '../../components/PortalTopbar';
import { useAuth } from '../../context/AuthContext';

/* ── MODULE 1: Overview Dashboard ── */
function OverviewModule({ setActiveModule, openSos }) {
  return (
    <div className="flex flex-col gap-6">
      <div id="live-channel-banner" className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-800 p-6 text-white shadow-xl">
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-sky-200">Live Civilian Channel • Grid 4B</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight mb-1">Namaskar, Aarav Sharma</h1>
            <p className="text-sky-200 text-sm">Patna Sadar, Bihar • Hydrology Station #BR-09</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <button onClick={openSos} className="sos-glow flex items-center gap-2 px-5 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm shadow-lg transition-all hover:scale-105 cursor-pointer">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>sos</span>
              Emergency SOS
            </button>
            <button onClick={() => setActiveModule('report')} className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-[18px]">add_alert</span>
              Report Flood
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-200">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
            <span className="material-symbols-outlined text-[24px] animate-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white text-xs font-bold">Orange Alert</span>
              <span className="font-bold text-slate-900 text-sm">Ganga Upstream Surge — Patna Ward 12–18</span>
            </div>
            <p className="text-slate-600 text-xs mt-0.5">River rising 1.8 cm/hr • Evacuation may be ordered within 6 hrs</p>
          </div>
        </div>
        <button onClick={() => setActiveModule('warning')} className="shrink-0 ml-auto text-xs font-bold text-amber-700 hover:underline flex items-center gap-1">
          See Details <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'River Level', value: '84.2m', sub: '+1.8cm/hr Rising', color: 'text-red-600', bg: 'bg-red-50', icon: 'water_do', iconColor: 'text-red-500' },
          { label: 'Nearest Shelter', value: '2.1 km', sub: 'Patna College Camp • 84% free', color: 'text-emerald-700', bg: 'bg-emerald-50', icon: 'holiday_village', iconColor: 'text-emerald-500' },
          { label: 'Active Rescuers', value: '24 Squads', sub: 'NDRF + SDRF deployed', color: 'text-sky-700', bg: 'bg-sky-50', icon: 'groups', iconColor: 'text-sky-500' },
          { label: 'Your Reports', value: '3 Filed', sub: '2 resolved • 1 pending', color: 'text-indigo-700', bg: 'bg-indigo-50', icon: 'report', iconColor: 'text-indigo-500' },
        ].map((s) => (
          <div key={s.label} className={`p-4 rounded-2xl ${s.bg} border border-slate-100 flex flex-col gap-2 card-hover`}>
            <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm ${s.iconColor}`}>
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
            </div>
            <div>
              <div className={`text-xl font-extrabold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-slate-500 font-medium">{s.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{s.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">All Modules</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { id: 'warning', label: 'Early Warning', desc: 'CWC/IMD live river data', icon: 'cell_tower', color: 'from-red-500 to-orange-500' },
            { id: 'report', label: 'Report Flooding', desc: 'Crowdsource flood data', icon: 'report_problem', color: 'from-amber-500 to-yellow-500' },
            { id: 'sos', label: 'SOS Center', desc: 'One-tap emergency dispatch', icon: 'sos', color: 'from-rose-600 to-red-600' },
            { id: 'shelter', label: 'Find Shelter', desc: 'Nearest camps & hospitals', icon: 'holiday_village', color: 'from-emerald-500 to-teal-500' },
            { id: 'missing', label: 'Missing Persons', desc: 'Report & reunite family', icon: 'family_restroom', color: 'from-purple-500 to-violet-600' },
            { id: 'damage', label: 'Damage Claims', desc: 'File compensation claim', icon: 'home_repair_service', color: 'from-sky-500 to-blue-600' },
            { id: 'pwa', label: 'Offline PWA', desc: 'Works without internet', icon: 'wifi_off', color: 'from-slate-600 to-slate-800' },
          ].map((m) => (
            <button key={m.id} onClick={() => setActiveModule(m.id)} className="text-left p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group card-hover">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>{m.icon}</span>
              </div>
              <div className="font-bold text-slate-900 text-sm">{m.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{m.desc}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">notifications_active</span>
            <h2 className="font-bold text-slate-900">Live Alerts Feed</h2>
          </div>
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { time: '2m ago', tag: 'EMERGENCY', title: 'High discharge from Gandak Barrage', body: '3.8L cusecs at 18:00 IST. Ward 12–15 residents move to safe zones.', color: 'bg-red-500', icon: 'campaign' },
            { time: '18m ago', tag: 'RELIEF', title: 'Water tankers at Gandhi Maidan Gate 4', body: '5,000L purified water. Free ORS packets distributed.', color: 'bg-sky-500', icon: 'water_drop' },
            { time: '1hr ago', tag: 'MEDICAL', title: 'Mobile Health Unit at Rajendra Nagar', body: 'Anti-venom, ORS, tetanus shots at St. Paul School ground.', color: 'bg-emerald-500', icon: 'local_hospital' },
          ].map((a, i) => (
            <div key={i} className="flex items-start gap-4 px-5 py-4 hover:bg-slate-50 transition-colors">
              <div className={`w-8 h-8 rounded-lg ${a.color} flex items-center justify-center text-white shrink-0`}>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>{a.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                  <span className={`px-2 py-0.5 rounded-full ${a.color} text-white text-xs font-bold`}>{a.tag}</span>
                  <span className="text-xs text-slate-400">{a.time}</span>
                </div>
                <p className="text-sm font-semibold text-slate-900">{a.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{a.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── MODULE 2: Early Warning System ── */
function EarlyWarningModule() {
  const [selected, setSelected] = useState('ganga');
  const rivers = [
    { id: 'ganga', name: 'Ganga — Patna', level: 84.2, danger: 85.0, warning: 83.5, trend: '+1.8cm/hr', status: 'ORANGE', sc: 'bg-amber-500' },
    { id: 'gandak', name: 'Gandak — Hajipur', level: 61.4, danger: 60.0, warning: 58.5, trend: '+2.4cm/hr', status: 'RED', sc: 'bg-red-600' },
    { id: 'kosi', name: 'Kosi — Supaul', level: 53.8, danger: 56.0, warning: 54.0, trend: '+0.4cm/hr', status: 'YELLOW', sc: 'bg-yellow-500' },
    { id: 'bagmati', name: 'Bagmati — Sitamarhi', level: 71.2, danger: 73.5, warning: 71.0, trend: '+0.2cm/hr', status: 'GREEN', sc: 'bg-emerald-500' },
  ];
  const r = rivers.find((x) => x.id === selected);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">Early Warning System</h2>
          <p className="text-sm text-slate-500">Live CWC India & Nepal DHM data • Updated every 60s</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">CWC Feed Live</span>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {rivers.map((rv) => (
          <button key={rv.id} onClick={() => setSelected(rv.id)} className={`text-left p-4 rounded-2xl border transition-all ${selected === rv.id ? 'border-indigo-400 bg-indigo-50 shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`px-2 py-0.5 rounded-full ${rv.sc} text-white text-xs font-bold`}>{rv.status}</span>
              <span className="text-xs text-slate-400 font-mono">{rv.trend}</span>
            </div>
            <div className="text-base font-extrabold text-slate-900">{rv.level}m</div>
            <div className="text-xs text-slate-500 mt-0.5">{rv.name}</div>
            <div className="mt-2 w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div className={`h-full rounded-full ${rv.sc}`} style={{ width: `${Math.min((rv.level / rv.danger) * 100, 100)}%` }} />
            </div>
          </button>
        ))}
      </div>
      {r && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between flex-wrap gap-3">
            <div>
              <h3 className="font-bold text-slate-900">{r.name} — Water Level Telemetry</h3>
              <p className="text-xs text-slate-500">Source: CWC Flood Forecasting Unit</p>
            </div>
            <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${r.sc} text-white text-xs font-bold`}>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />{r.status} ALERT
            </span>
          </div>
          <div className="p-6 grid grid-cols-3 gap-4 border-b border-slate-100">
            {[['Current Level', `${r.level}m`, 'text-slate-900'], ['Danger Mark', `${r.danger}m`, 'text-red-600'], ['Warning Mark', `${r.warning}m`, 'text-amber-600']].map(([l, v, c]) => (
              <div key={l} className="text-center p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className={`text-2xl font-extrabold ${c}`}>{v}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold mt-1">{l}</div>
              </div>
            ))}
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-semibold uppercase tracking-wider">
              <span>72-Hour Trend</span><span className="text-red-600 font-bold">{r.trend}</span>
            </div>
            <svg className="w-full h-24" viewBox="0 0 400 80" preserveAspectRatio="none">
              <defs>
                <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,60 L50,55 L100,58 L150,48 L200,40 L250,35 L300,22 L350,15 L400,10" stroke="#6366f1" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M0,60 L50,55 L100,58 L150,48 L200,40 L250,35 L300,22 L350,15 L400,10 L400,80 L0,80 Z" fill="url(#wg)" />
              <line x1="0" y1="5" x2="400" y2="5" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6,4" />
              <text x="3" y="4" fill="#ef4444" fontSize="8" fontWeight="bold">DANGER</text>
            </svg>
          </div>
        </div>
      )}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
        <div className="px-6 py-4 border-b border-slate-100">
          <h3 className="font-bold text-slate-900">District-wise Risk Score (AI Model)</h3>
          <p className="text-xs text-slate-500 mt-0.5">CWC gauge + IMD rainfall + elevation DEM fusion</p>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { d: 'Supaul', s: 92, l: 'CRITICAL', c: 'bg-red-600 text-white', b: 'bg-red-500' },
            { d: 'Madhubani', s: 78, l: 'HIGH', c: 'bg-orange-500 text-white', b: 'bg-orange-400' },
            { d: 'Saharsa', s: 65, l: 'MODERATE', c: 'bg-amber-500 text-white', b: 'bg-amber-400' },
            { d: 'Patna', s: 48, l: 'WATCH', c: 'bg-yellow-500 text-white', b: 'bg-yellow-400' },
            { d: 'Darbhanga', s: 71, l: 'HIGH', c: 'bg-orange-500 text-white', b: 'bg-orange-400' },
            { d: 'Sitamarhi', s: 34, l: 'LOW', c: 'bg-emerald-600 text-white', b: 'bg-emerald-400' },
          ].map((x) => (
            <div key={x.d} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className={`px-2 py-1 rounded-lg text-xs font-bold shrink-0 ${x.c}`}>{x.l}</div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-semibold text-slate-900">{x.d}</span>
                  <span className="text-sm font-bold text-slate-700">{x.s}/100</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className={`h-full rounded-full ${x.b}`} style={{ width: `${x.s}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>sms</span>
          </div>
          <div>
            <div className="font-bold text-indigo-900 text-sm">Twilio SMS Alerts Active</div>
            <div className="text-xs text-indigo-700">Auto SMS when your area crosses danger threshold</div>
          </div>
        </div>
        <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition-colors shrink-0 cursor-pointer">Manage</button>
      </div>
    </div>
  );
}

/* ── MODULE 3: Crowdsourced Flood Reporting ── */
function FloodReportingModule({ showToast }) {
  const [form, setForm] = useState({ type: 'waterlogging', location: '', depth: '', desc: '' });
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
    showToast('Report logged! Forwarded to NDRF & GIS heatmap.', 'success');
    setTimeout(() => setDone(false), 3000);
  };
  const reports = [
    { id: 'RPT-0421', type: 'Waterlogging', loc: 'Bailey Road, Patna', time: '8m ago', status: 'VERIFIED', sc: 'text-emerald-700 bg-emerald-100' },
    { id: 'RPT-0420', type: 'People Trapped', loc: 'Kankarbagh Colony', time: '22m ago', status: 'RESCUE EN ROUTE', sc: 'text-orange-700 bg-orange-100' },
    { id: 'RPT-0419', type: 'Dyke Seepage', loc: 'NH-57 near Supaul', time: '1hr ago', status: 'FIELD TEAM SENT', sc: 'text-sky-700 bg-sky-100' },
    { id: 'RPT-0418', type: 'Medical Emergency', loc: 'Rajendra Nagar Sec 2', time: '2hr ago', status: 'RESOLVED', sc: 'text-slate-600 bg-slate-100' },
  ];
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-extrabold text-slate-900">Crowdsourced Flood Reporting</h2>
        <p className="text-sm text-slate-500">Report flooding — geo-tagged & shown on live community heatmap (MongoDB GeoJSON + Leaflet.js)</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
            <span className="material-symbols-outlined text-indigo-600 text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>add_alert</span>
            <h3 className="font-bold text-slate-900">Submit New Report</h3>
          </div>
          <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Incident Type</label>
              <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition">
                <option value="waterlogging">Severe Waterlogging / Road Inundated</option>
                <option value="trapped">People Trapped — Boat Evacuation Needed</option>
                <option value="dyke">Embankment / Dyke Seepage or Breach</option>
                <option value="medical">Medical Emergency in Flood Zone</option>
                <option value="power">Power Line Down / Electrocution Risk</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Location / Landmark</label>
              <div className="relative">
                <input type="text" required placeholder="e.g. Kankarbagh, Ward 14" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full text-sm px-3 py-2.5 pr-10 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition" />
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">my_location</span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Water Depth (Feet)</label>
              <input type="number" min="0.5" max="30" step="0.5" placeholder="e.g. 4.5" value={form.depth} onChange={(e) => setForm({ ...form, depth: e.target.value })} className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Description</label>
              <textarea rows={3} placeholder="Number of people, elderly/children present..." value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition resize-none" />
            </div>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 flex flex-col items-center gap-2 text-center hover:border-indigo-300 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-slate-400 text-[28px]">add_photo_alternate</span>
              <p className="text-xs text-slate-500 font-medium">Attach photo evidence<br /><span className="text-indigo-600 font-semibold">Upload from camera or gallery</span></p>
            </div>
            <button type="submit" className={`w-full py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${done ? 'bg-emerald-600 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-200'}`}>
              {done ? '✓ Report Submitted!' : 'Submit Flood Report'}
            </button>
          </form>
        </div>
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="bg-slate-800 rounded-2xl overflow-hidden relative h-52 flex flex-col justify-between p-4 shadow-lg">
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%"><defs><pattern id="pg" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 30" fill="none" stroke="#64748b" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#pg)" /></svg>
            </div>
            <div className="absolute top-8 left-12 w-20 h-16 bg-red-500/50 rounded-full blur-xl" />
            <div className="absolute top-16 left-32 w-28 h-20 bg-orange-400/40 rounded-full blur-xl" />
            <div className="absolute bottom-10 right-16 w-16 h-12 bg-amber-400/40 rounded-full blur-xl" />
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white text-xs font-bold uppercase tracking-wider">LIVE FLOOD HEATMAP — PATNA</span>
              </div>
              <span className="text-slate-400 text-xs">Leaflet.js + Mapbox</span>
            </div>
            <div className="relative z-10 flex items-center gap-3 text-xs font-semibold">
              {[['bg-red-500', 'Critical'], ['bg-orange-400', 'High'], ['bg-amber-400', 'Moderate'], ['bg-emerald-400', 'Low']].map(([c, l]) => (
                <div key={l} className="flex items-center gap-1 text-white"><span className={`w-2.5 h-2.5 rounded-sm ${c}`} />{l}</div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex-1">
            <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm">Live Community Reports</h3>
              <span className="text-xs text-slate-400">Socket.io realtime</span>
            </div>
            <div className="divide-y divide-slate-100">
              {reports.map((r) => (
                <div key={r.id} className="flex items-center gap-3 px-5 py-3 hover:bg-slate-50 transition-colors">
                  <div className="flex flex-col items-center min-w-[52px]">
                    <span className="text-xs font-mono text-slate-400">{r.id}</span>
                    <span className="text-xs text-slate-400">{r.time}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-900">{r.type}</p>
                    <p className="text-xs text-slate-500 truncate">{r.loc}</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold shrink-0 ${r.sc}`}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── MODULE 4: SOS Center ── */
function SOSModule({ openSos, showToast }) {
  const [sent, setSent] = useState(false);
  const handleSOS = () => {
    setSent(true);
    openSos();
    showToast('SOS dispatched! NDRF Squad 9 notified. ETA: 12 minutes.', 'error');
    setTimeout(() => setSent(false), 5000);
  };
  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-xl font-extrabold text-slate-900">SOS Emergency Center</h2>
        <p className="text-sm text-slate-500 mt-1">One tap sends your GPS coordinates to nearest NDRF rescue team via Socket.io + Twilio SMS backup</p>
      </div>
      <div className="relative flex flex-col items-center py-10 rounded-3xl bg-gradient-to-b from-red-50 to-rose-100 border-2 border-red-200">
        <div className="relative">
          {sent && <><span className="absolute -inset-8 rounded-full border-2 border-red-300 animate-ping opacity-40" /><span className="absolute -inset-14 rounded-full border border-red-200 animate-ping opacity-20" /></>}
          <button onClick={handleSOS} className={`sos-glow relative w-40 h-40 rounded-full flex flex-col items-center justify-center text-white font-extrabold shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer ${sent ? 'bg-red-700' : 'bg-gradient-to-br from-red-500 to-red-700'}`}>
            <span className="material-symbols-outlined text-[48px] mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>sos</span>
            <span className="text-lg tracking-widest">SOS</span>
          </button>
        </div>
        <p className="mt-6 text-sm font-semibold text-red-700 relative z-10">{sent ? '✓ Help is on the way!' : 'Press to dispatch emergency beacon'}</p>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-indigo-600 text-[18px]">info</span>
          What Happens When You Press SOS
        </h3>
        <div className="flex flex-col gap-3">
          {[
            { title: 'GPS Coordinates Captured', desc: 'Exact latitude/longitude (±3m) captured instantly', icon: 'my_location', color: 'bg-blue-500' },
            { title: 'Real-time via Socket.io', desc: 'Location sent live to NDRF command — zero delay', icon: 'wifi_tethering', color: 'bg-indigo-500' },
            { title: 'Twilio SMS Backup', desc: 'Simultaneous SMS to rescue hotline — works on 2G', icon: 'sms', color: 'bg-emerald-500' },
            { title: 'Rescue Team Routed', desc: 'Nearest NDRF/SDRF gets turn-by-turn route to you', icon: 'directions_boat', color: 'bg-sky-500' },
          ].map((s) => (
            <div key={s.title} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
              <div className={`w-8 h-8 rounded-lg ${s.color} flex items-center justify-center text-white shrink-0`}>
                <span className="material-symbols-outlined text-[16px]">{s.icon}</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{s.title}</p>
                <p className="text-xs text-slate-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[['NDRF Helpline', '011-24363260', 'emergency'], ['India Emergency', '112', 'call'], ['Nepal Emergency', '1149', 'call']].map(([l, n, ic]) => (
          <a key={l} href={`tel:${n}`} className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:bg-red-50 transition-all text-center group">
            <span className="material-symbols-outlined text-red-500 text-[24px] group-hover:scale-110 transition-transform">{ic}</span>
            <span className="font-extrabold text-slate-900 text-base">{n}</span>
            <span className="text-xs text-slate-500 font-semibold uppercase tracking-wide">{l}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ── MODULE 5: Shelter Locator ── */
function ShelterModule() {
  const [filter, setFilter] = useState('all');
  const shelters = [
    { id: 1, name: 'Patna College Relief Camp', type: 'camp', dist: '2.1 km', cap: 1200, occ: 340, amenities: ['Water', 'Food', 'Medical', 'Power'], status: 'OPEN' },
    { id: 2, name: 'IGIMS Emergency Ward', type: 'hospital', dist: '3.4 km', cap: 80, occ: 61, amenities: ['ICU', 'Surgery', 'Oxygen'], status: 'PARTIAL' },
    { id: 3, name: 'NH-57 Elevated Highway', type: 'highland', dist: '1.2 km', cap: 3500, occ: 2100, amenities: ['Dry Ground', 'Open Air'], status: 'OPEN' },
    { id: 4, name: 'Gandhi Maidan Tent City', type: 'camp', dist: '4.0 km', cap: 2000, occ: 1980, amenities: ['Water', 'Food', 'Sanitation'], status: 'FULL' },
    { id: 5, name: 'Rajendra Nagar CHC', type: 'hospital', dist: '5.6 km', cap: 40, occ: 18, amenities: ['OPD', 'Medicines', 'Ambulance'], status: 'OPEN' },
    { id: 6, name: 'Bankipore Club Highland', type: 'highland', dist: '6.1 km', cap: 800, occ: 120, amenities: ['Dry Ground', 'Shade'], status: 'OPEN' },
  ];
  const filtered = filter === 'all' ? shelters : shelters.filter((s) => s.type === filter);
  const sc = (s) => ({ OPEN: 'bg-emerald-100 text-emerald-700', PARTIAL: 'bg-amber-100 text-amber-700', FULL: 'bg-red-100 text-red-700' }[s]);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">Shelter & Resource Locator</h2>
          <p className="text-sm text-slate-500">Verified camps, hospitals & dry zones — live capacity</p>
        </div>
        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
          {[['all', 'All'], ['camp', 'Camps'], ['hospital', 'Hospitals'], ['highland', 'Safe Zones']].map(([v, l]) => (
            <button key={v} onClick={() => setFilter(v)} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${filter === v ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>{l}</button>
          ))}
        </div>
      </div>
      <div className="bg-slate-800 rounded-2xl h-44 relative overflow-hidden flex items-end p-4">
        <div className="absolute inset-0 opacity-10"><svg width="100%" height="100%"><defs><pattern id="mg" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#64748b" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#mg)" /></svg></div>
        <div className="absolute top-8 left-16 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white shadow-lg flex items-center justify-center text-xs text-white font-bold">C</div>
        <div className="absolute top-16 right-20 w-4 h-4 rounded-full bg-sky-400 border-2 border-white shadow-lg flex items-center justify-center text-xs text-white font-bold">H</div>
        <div className="absolute bottom-16 left-1/2 flex flex-col items-center gap-1">
          <span className="w-4 h-4 rounded-full bg-red-400 border-2 border-white shadow-lg animate-pulse" />
          <span className="text-xs text-white font-bold">YOU</span>
        </div>
        <div className="relative z-10 flex items-center gap-4 text-xs font-semibold text-white">
          {[['bg-emerald-400', 'Camp'], ['bg-sky-400', 'Hospital'], ['bg-amber-400', 'Safe Zone'], ['bg-red-400', 'You']].map(([c, l]) => (
            <div key={l} className="flex items-center gap-1"><span className={`w-2.5 h-2.5 rounded-full ${c}`} />{l}</div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((s) => {
          const pct = Math.round((s.occ / s.cap) * 100);
          const bar = pct >= 95 ? 'bg-red-500' : pct >= 75 ? 'bg-amber-500' : 'bg-emerald-500';
          return (
            <div key={s.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-col gap-3 card-hover">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm leading-tight">{s.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1"><span className="material-symbols-outlined text-[13px]">near_me</span>{s.dist} away</p>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold shrink-0 ${sc(s.status)}`}>{s.status}</span>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-500">{s.occ} / {s.cap}</span>
                  <span className={pct >= 95 ? 'text-red-600 font-bold' : 'text-slate-700'}>{100 - pct}% free</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className={`h-full rounded-full ${bar}`} style={{ width: `${pct}%` }} />
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {s.amenities.map((a) => <span key={a} className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">{a}</span>)}
              </div>
              <div className="flex gap-2 pt-1">
                <button className="flex-1 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[14px]">directions</span> Navigate
                </button>
                <button className="flex-1 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[14px]">info</span> Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── MODULE 6: Missing Persons ── */
function MissingPersonsModule({ showToast }) {
  const [tab, setTab] = useState('board');
  const [form, setForm] = useState({ name: '', age: '', location: '', contact: '', desc: '' });
  const missing = [
    { id: 'MP-0041', name: 'Ramnath Yadav', age: 67, lastSeen: 'Supaul Ghaat, near ferry', since: '14 hrs ago', status: 'SEARCHING' },
    { id: 'MP-0040', name: 'Priya Kumari', age: 9, lastSeen: 'Madhubani district road', since: '1 day ago', status: 'FOUND' },
    { id: 'MP-0039', name: 'Shyam Lal & family (4)', age: 45, lastSeen: 'Darbhanga embankment', since: '2 days ago', status: 'SEARCHING' },
    { id: 'MP-0038', name: 'Savitri Devi', age: 72, lastSeen: 'Saharsa relief camp #3', since: '3 days ago', status: 'REUNITED' },
  ];
  const handleSubmit = (e) => { e.preventDefault(); showToast('Missing person filed! Broadcasted to 24 rescue teams.', 'success'); setTab('board'); };
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">Missing Persons & Family Reunification</h2>
          <p className="text-sm text-slate-500">Report or find missing family members in flood-affected areas</p>
        </div>
        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
          <button onClick={() => setTab('board')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${tab === 'board' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}>Board</button>
          <button onClick={() => setTab('report')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${tab === 'report' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}>Report Missing</button>
        </div>
      </div>
      {tab === 'board' ? (
        <div className="flex flex-col gap-3">
          {missing.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex items-start gap-4 card-hover">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-extrabold shrink-0 ${p.status === 'SEARCHING' ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'}`}>{p.name[0]}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="font-bold text-slate-900 text-sm">{p.name}</span>
                  <span className="text-xs text-slate-400">{p.id}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${p.status === 'SEARCHING' ? 'bg-red-100 text-red-700' : p.status === 'FOUND' ? 'bg-sky-100 text-sky-700' : 'bg-emerald-100 text-emerald-700'}`}>{p.status}</span>
                </div>
                <p className="text-xs text-slate-600">Age: {p.age} • Last seen: {p.lastSeen}</p>
                <p className="text-xs text-slate-400 mt-0.5">Since: {p.since}</p>
              </div>
              {p.status === 'SEARCHING' && (
                <button onClick={() => showToast('Report forwarded to rescue network.', 'success')} className="px-3 py-1.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs flex items-center gap-1 transition-colors shrink-0 cursor-pointer">
                  <span className="material-symbols-outlined text-[14px]">share</span> Share
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 max-w-lg">
          <h3 className="font-bold text-slate-900 mb-4">File Missing Person Report</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {[
              { label: 'Full Name', key: 'name', type: 'text', ph: 'Ramnath Yadav' },
              { label: 'Age', key: 'age', type: 'number', ph: '67' },
              { label: 'Last Known Location', key: 'location', type: 'text', ph: 'Supaul Ghaat, near ferry' },
              { label: 'Your Contact Number', key: 'contact', type: 'tel', ph: '+91 98765 43210' },
            ].map((f) => (
              <div key={f.key}>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">{f.label}</label>
                <input type={f.type} required placeholder={f.ph} value={form[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition" />
              </div>
            ))}
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Description</label>
              <textarea rows={3} placeholder="Physical description, last seen wearing..." value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition resize-none" />
            </div>
            <button type="submit" className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm cursor-pointer">Submit Missing Person Report</button>
          </form>
        </div>
      )}
    </div>
  );
}

/* ── MODULE 7: Damage Claims ── */
function DamageClaimsModule({ showToast }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ type: 'house', address: '', damage: '', estimate: '', aadhaar: '', district: '' });
  const claims = [
    { id: 'CLM-2024-0841', type: 'Agricultural Loss', status: 'Under Review', filed: 'Sep 2', amount: '₹48,000', sc: 'bg-amber-100 text-amber-700' },
    { id: 'CLM-2024-0612', type: 'House Damage', status: 'Approved', filed: 'Aug 28', amount: '₹1,20,000', sc: 'bg-emerald-100 text-emerald-700' },
  ];
  const handleNext = () => {
    if (step < 3) setStep(s => s + 1);
    else { showToast('Claim filed! Ref: CLM-2024-0' + Math.floor(Math.random() * 900 + 100), 'success'); setStep(1); }
  };
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-extrabold text-slate-900">Post-Disaster Damage Claims</h2>
        <p className="text-sm text-slate-500">File your flood damage — photos + details create a govt compensation digital record</p>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
          <span className="material-symbols-outlined text-indigo-600 text-[18px]">receipt_long</span>
          <h3 className="font-bold text-slate-900 text-sm">My Filed Claims</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {claims.map((c) => (
            <div key={c.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <span className="font-bold text-slate-900 text-sm">{c.type}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${c.sc}`}>{c.status}</span>
                </div>
                <p className="text-xs text-slate-500">{c.id} • Filed: {c.filed}</p>
              </div>
              <div className="text-right">
                <div className="font-bold text-slate-900 text-sm">{c.amount}</div>
                <div className="text-xs text-slate-400">Claimed</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h3 className="font-bold text-slate-900 text-sm">File New Claim</h3>
          <div className="flex items-center gap-2 mt-3">
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= s ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'}`}>{s}</div>
                {s < 3 && <div className={`flex-1 h-0.5 ${step > s ? 'bg-indigo-600' : 'bg-slate-200'}`} />}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-between text-xs text-slate-400 font-semibold mt-1 uppercase">
            <span>Damage Type</span><span>Details & Photos</span><span>Identity</span>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-4">
          {step === 1 && (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Type of Damage</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[['house', 'House/Property', 'home'], ['agriculture', 'Agriculture/Crops', 'grass'], ['vehicle', 'Vehicle', 'directions_car'], ['business', 'Business/Shop', 'storefront']].map(([v, l, ic]) => (
                    <button key={v} onClick={() => setForm({ ...form, type: v })} className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 text-xs font-semibold transition-all cursor-pointer ${form.type === v ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}>
                      <span className="material-symbols-outlined text-[22px]">{ic}</span>{l}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Property Address</label>
                <input type="text" placeholder="Full address of damaged property" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 outline-none transition" />
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Damage Description</label>
                <textarea rows={4} placeholder="Describe damage — walls collapsed, crops submerged, flood duration..." value={form.damage} onChange={(e) => setForm({ ...form, damage: e.target.value })} className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 outline-none transition resize-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Estimated Loss (₹)</label>
                <input type="number" placeholder="120000" value={form.estimate} onChange={(e) => setForm({ ...form, estimate: e.target.value })} className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 outline-none transition" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Before Photo', 'After Photo'].map((l) => (
                  <div key={l} className="border-2 border-dashed border-slate-200 rounded-xl p-4 flex flex-col items-center gap-2 text-center cursor-pointer hover:border-indigo-300 transition-colors">
                    <span className="material-symbols-outlined text-slate-400 text-[24px]">add_photo_alternate</span>
                    <p className="text-xs text-slate-500 font-medium">{l}</p>
                  </div>
                ))}
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs font-medium">
                <strong>Privacy:</strong> Aadhaar is used only to verify identity. Last 4 digits only required.
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Aadhaar Last 4 Digits</label>
                <input type="text" maxLength={4} placeholder="XXXX" value={form.aadhaar} onChange={(e) => setForm({ ...form, aadhaar: e.target.value })} className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 outline-none transition" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">District / Tehsil</label>
                <input type="text" placeholder="e.g. Patna Sadar" value={form.district} onChange={(e) => setForm({ ...form, district: e.target.value })} className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 outline-none transition" />
              </div>
            </>
          )}
          <div className="flex gap-3 pt-2">
            {step > 1 && <button onClick={() => setStep(s => s - 1)} className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors cursor-pointer">Back</button>}
            <button onClick={handleNext} className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm cursor-pointer">
              {step === 3 ? 'Submit Claim' : 'Next Step →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── MODULE 8: Offline PWA ── */
function PWAModule({ showToast }) {
  const [installing, setInstalling] = useState(false);
  const handleInstall = () => {
    setInstalling(true);
    setTimeout(() => { setInstalling(false); showToast('Sachet installed as PWA! Works offline now.', 'success'); }, 2000);
  };
  const cached = [
    { item: 'Shelter locations (342 camps)', size: '1.2 MB', icon: 'holiday_village', ok: true },
    { item: 'Emergency contacts & hotlines', size: '12 KB', icon: 'contacts', ok: true },
    { item: 'SOS dispatch engine', size: '84 KB', icon: 'sos', ok: true },
    { item: 'Evacuation route maps (Patna)', size: '4.8 MB', icon: 'map', ok: true },
    { item: 'Flood alerts (last 7 days)', size: '240 KB', icon: 'notifications_active', ok: true },
    { item: 'Damage claim form', size: '32 KB', icon: 'receipt_long', ok: false },
  ];
  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div>
        <h2 className="text-xl font-extrabold text-slate-900">Offline-First PWA Mode</h2>
        <p className="text-sm text-slate-500">Flood zones have patchy internet. Install Sachet as PWA — core features work completely offline.</p>
      </div>
      <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>install_mobile</span>
          </div>
          <div>
            <div className="font-bold text-base">Sachet | जलरक्षा</div>
            <div className="text-slate-400 text-xs">Progressive Web App • v1.4.2 • Firebase Cloud Messaging</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[['Offline SOS', 'check_circle'], ['Cached Maps', 'check_circle'], ['Push Alerts', 'check_circle']].map(([l, ic]) => (
            <div key={l} className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5">
              <span className="material-symbols-outlined text-[20px] text-emerald-400" style={{ fontVariationSettings: "'FILL' 1" }}>{ic}</span>
              <span className="text-xs text-slate-300 font-semibold text-center">{l}</span>
            </div>
          ))}
        </div>
        <button onClick={handleInstall} disabled={installing} className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-70 cursor-pointer">
          <span className="material-symbols-outlined text-[18px]">{installing ? 'downloading' : 'download'}</span>
          {installing ? 'Installing...' : 'Install Sachet App (PWA)'}
        </button>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-sm">Cached Resources</h3>
          <span className="text-xs text-slate-500">6.4 MB total</span>
        </div>
        <div className="divide-y divide-slate-100">
          {cached.map((c) => (
            <div key={c.item} className="flex items-center gap-3 px-5 py-3">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">{c.icon}</span>
              <div className="flex-1">
                <p className="text-sm text-slate-900 font-medium">{c.item}</p>
                <p className="text-xs text-slate-400">{c.size}</p>
              </div>
              {c.ok ? <span className="material-symbols-outlined text-emerald-500 text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                : <span className="material-symbols-outlined text-amber-400 text-[20px]">pending</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>sms</span>
          </div>
          <div>
            <h4 className="font-bold text-sky-900 text-sm">SMS Fallback via Twilio (Zero-Data)</h4>
            <p className="text-xs text-sky-700 mt-0.5">No internet? SMS to <strong>14567</strong> — Format: <code className="bg-sky-100 px-1 rounded font-mono">SOS [your location]</code></p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── MAIN PAGE ── */
export default function CitizenPage() {
  const { openSos, showToast } = useAuth();
  const [active, setActive] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const modules = [
    { id: 'overview', label: 'Overview', icon: 'grid_view' },
    { id: 'warning', label: 'Early Warning', icon: 'cell_tower', dot: true },
    { id: 'report', label: 'Report Flooding', icon: 'report_problem' },
    { id: 'sos', label: 'SOS Center', icon: 'sos', badge: '24/7' },
    { id: 'shelter', label: 'Find Shelter', icon: 'holiday_village' },
    { id: 'missing', label: 'Missing Persons', icon: 'family_restroom' },
    { id: 'damage', label: 'Damage Claims', icon: 'home_repair_service' },
    { id: 'pwa', label: 'Offline / PWA', icon: 'wifi_off' },
  ];

  const colors = { overview: 'text-indigo-600', warning: 'text-red-600', report: 'text-amber-600', sos: 'text-rose-600', shelter: 'text-emerald-600', missing: 'text-purple-600', damage: 'text-sky-600', pwa: 'text-slate-600' };

  const render = () => {
    switch (active) {
      case 'overview': return <OverviewModule setActiveModule={setActive} openSos={openSos} />;
      case 'warning': return <EarlyWarningModule />;
      case 'report': return <FloodReportingModule showToast={showToast} />;
      case 'sos': return <SOSModule openSos={openSos} showToast={showToast} />;
      case 'shelter': return <ShelterModule />;
      case 'missing': return <MissingPersonsModule showToast={showToast} />;
      case 'damage': return <DamageClaimsModule showToast={showToast} />;
      case 'pwa': return <PWAModule showToast={showToast} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-on-surface">
      <Navbar />
      <PortalTopbar
        portal="citizen"
        menuOpen={mobileMenuOpen}
        onMenuClick={() => setMobileMenuOpen((open) => !open)}
      />
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-14 z-50 bg-slate-900/25" onClick={() => setMobileMenuOpen(false)}>
          <aside className="w-[min(88vw,320px)] h-full bg-white shadow-2xl border-r border-slate-200" onClick={(event) => event.stopPropagation()}>
            <div className="px-4 py-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">person_pin_circle</span>
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">Citizen Portal</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">IN-NP Disaster Grid</div>
                </div>
              </div>
            </div>
            <div className="px-3.5 py-3">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">Modules</div>
              <nav className="flex flex-col gap-1.5">
                {modules.map((m) => {
                  const isActive = active === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => { setActive(m.id); setMobileMenuOpen(false); }}
                      className={`group w-full h-10 px-3 rounded-xl flex items-center gap-3 text-left text-[13px] transition-all cursor-pointer ${
                        isActive ? 'bg-indigo-600 text-white font-semibold shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-[19px] ${isActive ? 'text-white' : colors[m.id]}`}>{m.icon}</span>
                      <span className="flex-1 truncate">{m.label}</span>
                      {m.dot && !isActive && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />}
                      {m.badge && !isActive && <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded-full shrink-0">{m.badge}</span>}
                    </button>
                  );
                })}
              </nav>
            </div>
            <div className="p-3.5 border-t border-slate-100">
              <button onClick={openSos} className="sos-glow w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-sm shadow-md cursor-pointer">
                <span className="material-symbols-outlined text-[18px]">sos</span>
                <span>Emergency SOS</span>
              </button>
            </div>
          </aside>
        </div>
      )}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-start">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-full lg:w-64 shrink-0 bg-white border-b lg:border-b-0 lg:border-r border-slate-200/80 shadow-[1px_0_6px_rgba(0,0,0,0.03)] z-30 flex-col lg:sticky lg:top-[120px] lg:h-[calc(100vh-120px)] pt-4">
          {/* Header Identity Block - flush with main content banner */}
          <div id="portal-header-block" className="px-4 pb-4 border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>person_pin_circle</span>
              </div>
              <div className="min-w-0">
                <div className="text-sm font-extrabold text-slate-900 leading-tight">Citizen Portal</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">IN-NP Disaster Grid</div>
              </div>
            </div>
          </div>

          {/* Scrollable Middle: Modules List with clean vertical spacing */}
          <div className="flex-1 overflow-y-auto px-3.5 py-3 flex flex-col">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
              Modules
            </div>
            <nav className="grid grid-cols-2 lg:flex lg:flex-col gap-1.5">
              {modules.map((m) => {
                const isActive = active === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActive(m.id)}
                    className={`group w-full h-10 px-3 rounded-xl flex items-center gap-3 text-left text-[13px] transition-all cursor-pointer ${
                      isActive
                        ? 'bg-indigo-600 text-white font-semibold shadow-sm'
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
                    {m.dot && !isActive && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />}
                    {m.badge && !isActive && (
                      <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded-full shrink-0">
                        {m.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Proper Sticky Footer Element */}
          <div className="p-3.5 border-t border-slate-100 bg-white shrink-0">
            <button
              onClick={openSos}
              className="sos-glow w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>sos</span>
              <span>Emergency SOS</span>
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
