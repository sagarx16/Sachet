'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import PortalTopbar from '../../components/PortalTopbar';
import { useAuth } from '../../context/AuthContext';

/* ── MODULE 1: Overview / Command Dashboard ── */
function OverviewModule({ setActive, showToast }) {
  const handleGate = () => showToast('Koshi Barrage: Gates 12-28 telemetry synced. Flow: 385,000 cusecs.', 'warning');

  return (
    <div className="flex flex-col gap-6">
      {/* Command Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 p-6 text-white shadow-xl">
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-purple-200">Govt Command Desk • Level 4</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight mb-1">Bihar–Nepal Disaster Command</h1>
            <p className="text-purple-200 text-sm">National Disaster Management Authority • Bihar SDMA • Incident: IN-2024-F09</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <button
              onClick={() => setActive('broadcast')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] animate-pulse">cell_tower</span>
              CAP Broadcast
            </button>
            <button
              onClick={handleGate}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">valve</span>
              Gate Telemetry
            </button>
          </div>
        </div>
      </div>

      {/* Threat Alert Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-2xl bg-red-50 border border-red-200">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0">
            <span className="material-symbols-outlined text-[24px] animate-pulse">crisis_alert</span>
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white text-xs font-bold">RED ALERT</span>
              <span className="font-bold text-slate-900 text-sm">Koshi & Gandak simultaneous surge — Bihar Districts 12, 14 & 17</span>
            </div>
            <p className="text-slate-600 text-xs mt-0.5">Estimated 4.2M citizens in impact zone • NDRF Level-3 deployed • Barrage discharge: 3.85L cusecs</p>
          </div>
        </div>
        <button
          onClick={() => setActive('broadcast')}
          className="shrink-0 px-4 py-2 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 transition-colors cursor-pointer"
        >
          Issue Alert
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Population at Risk', value: '4.2M', sub: 'Districts 12, 14, 17, 21', icon: 'groups', color: 'text-red-700', bg: 'bg-red-50', iconColor: 'text-red-600' },
          { label: 'NDRF Units Active', value: '38', sub: '24 rescue • 14 medical', icon: 'emergency_home', color: 'text-purple-700', bg: 'bg-purple-50', iconColor: 'text-purple-600' },
          { label: 'Damage Claims Filed', value: '2,841', sub: '1,204 approved • ₹18.4Cr', icon: 'receipt_long', color: 'text-sky-700', bg: 'bg-sky-50', iconColor: 'text-sky-600' },
          { label: 'Barrage Discharge', value: '3.85L', sub: 'Cusecs • Rising +2.4%/hr', icon: 'valve', color: 'text-amber-700', bg: 'bg-amber-50', iconColor: 'text-amber-600' },
        ].map((s) => (
          <div key={s.label} className={`p-4 rounded-2xl ${s.bg} border border-slate-100 flex flex-col gap-2 card-hover`}>
            <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm ${s.iconColor}`}>
              <span className="material-symbols-outlined text-[20px]">{s.icon}</span>
            </div>
            <div>
              <div className={`text-2xl font-extrabold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-slate-500 font-medium">{s.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{s.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Module Access */}
      <div>
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Command Modules</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { id: 'heatmap', label: 'Live Heatmap', desc: 'GIS flood intelligence', icon: 'map', color: 'from-sky-500 to-blue-600' },
            { id: 'broadcast', label: 'CAP Broadcast', desc: 'Alerts to 4.2M citizens', icon: 'cell_tower', color: 'from-red-600 to-rose-700' },
            { id: 'barrage', label: 'Barrage Control', desc: 'Koshi gate operations', icon: 'valve', color: 'from-amber-500 to-orange-600' },
            { id: 'ngo', label: 'NGO Coordination', desc: 'Volunteers & task board', icon: 'volunteer_activism', color: 'from-emerald-500 to-teal-600' },
            { id: 'damage', label: 'Damage Reports', desc: 'Claims & compensation', icon: 'analytics', color: 'from-purple-500 to-violet-600' },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => setActive(m.id)}
              className="text-left p-4 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all group card-hover cursor-pointer"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white mb-3 group-hover:scale-105 transition-transform`}>
                <span className="material-symbols-outlined text-[20px]">{m.icon}</span>
              </div>
              <div className="font-bold text-slate-900 text-sm">{m.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{m.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Command Actions */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-purple-600 text-[20px]">history_edu</span>
            <h2 className="font-bold text-slate-900 text-sm">Recent Command Actions</h2>
          </div>
          <span className="text-xs text-slate-400">Past 24 Hours</span>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { time: '06:42', action: 'CAP Broadcast — RED ALERT', detail: 'Districts 12, 14, 17 • 4.2M notified via SMS & App', icon: 'cell_tower', color: 'bg-red-500' },
            { time: '05:18', action: 'Koshi Barrage — Gate 12–28 opened', detail: 'Gates raised to 6.2m • Flow: 385,000 cusecs', icon: 'valve', color: 'bg-amber-500' },
            { time: '04:55', action: 'NDRF Squad 9 deployed — Supaul', detail: 'Level-3 response • 38 personnel + 14 boats', icon: 'emergency_home', color: 'bg-sky-600' },
            { time: '03:20', action: 'Evacuation Order — Ward 12–18 Patna', detail: 'Mandatory evacuation order issued for low-lying areas', icon: 'directions_run', color: 'bg-purple-600' },
          ].map((a, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-3.5 hover:bg-slate-50 transition-colors">
              <div className={`w-8 h-8 rounded-lg ${a.color} flex items-center justify-center text-white shrink-0`}>
                <span className="material-symbols-outlined text-[16px]">{a.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900">{a.action}</p>
                <p className="text-xs text-slate-500 truncate">{a.detail}</p>
              </div>
              <span className="text-xs text-slate-400 font-mono shrink-0">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── MODULE 2: Live Heatmap / GIS ── */
function HeatmapModule() {
  const [layer, setLayer] = useState('flood');

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">Live Flood Intelligence — GIS Map</h2>
          <p className="text-sm text-slate-500">Bihar–Nepal cross-border hydrology • Satellite + CWC telemetry fusion</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Satellite Feed Live</span>
        </div>
      </div>

      {/* Layer Toggle */}
      <div className="flex gap-2 bg-slate-100 p-1 rounded-xl w-fit">
        {[['flood', 'Flood Depth'], ['risk', 'Risk Score'], ['shelter', 'Shelters & Safe Zones']].map(([v, l]) => (
          <button
            key={v}
            onClick={() => setLayer(v)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${layer === v ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Clean Map Viewport */}
      <div className="relative bg-slate-900 rounded-2xl overflow-hidden h-96 flex flex-col justify-between shadow-lg p-5">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%"><defs><pattern id="gmapclean" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#gmapclean)"/></svg>
        </div>

        {/* Inundation zones */}
        <div className="absolute top-12 left-16 w-36 h-28 bg-red-500/30 rounded-full blur-2xl" />
        <div className="absolute top-24 left-44 w-44 h-32 bg-orange-500/25 rounded-full blur-2xl" />
        <div className="absolute bottom-16 right-20 w-32 h-24 bg-amber-400/20 rounded-full blur-xl" />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between text-xs text-white">
          <span className="font-bold uppercase tracking-wider text-slate-300">Corridor: Koshi–Gandak Basin</span>
          <span className="bg-white/10 px-2.5 py-1 rounded-lg text-slate-200 uppercase font-mono">{layer} Layer Active</span>
        </div>

        {/* Location Pins */}
        <div className="relative z-10 inset-0 pointer-events-none">
          {[
            { x: '24%', y: '28%', label: 'Supaul', depth: '4.2m', color: 'bg-red-500' },
            { x: '48%', y: '36%', label: 'Patna Sadar', depth: '1.6m', color: 'bg-amber-400' },
            { x: '68%', y: '24%', label: 'Madhubani', depth: '3.1m', color: 'bg-orange-500' },
            { x: '76%', y: '52%', label: 'Saharsa', depth: '2.8m', color: 'bg-amber-400' },
          ].map((p) => (
            <div key={p.label} className="absolute flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2" style={{ left: p.x, top: p.y }}>
              <div className={`w-3.5 h-3.5 rounded-full ${p.color} ring-4 ring-white/20`} />
              <div className="bg-white text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow">
                {p.label} • {p.depth}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Legend */}
        <div className="relative z-10 flex items-center justify-between text-xs text-white pt-2 border-t border-white/10">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /> Critical (&gt;3.5m)</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-orange-400" /> High (2-3.5m)</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Moderate (&lt;2m)</span>
          </div>
          <span className="text-slate-400">ISRO NRSC • Mapbox</span>
        </div>
      </div>

      {/* District Intelligence Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-sm">District Inundation & Field Status</h3>
          <span className="text-xs text-slate-400">6 Districts Monitored</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <tr>
                <th className="px-5 py-3 text-left">District</th>
                <th className="px-4 py-3 text-left">Flood Depth</th>
                <th className="px-4 py-3 text-left">Population Affected</th>
                <th className="px-4 py-3 text-left">Alert Level</th>
                <th className="px-4 py-3 text-left">NDRF Units</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { d: 'Supaul', depth: '4.2m', pop: '3.8 Lakh', alert: 'CRITICAL', rc: 'bg-red-600', ndrf: '8 Squads' },
                { d: 'Madhubani', depth: '3.1m', pop: '2.9 Lakh', alert: 'HIGH', rc: 'bg-orange-500', ndrf: '6 Squads' },
                { d: 'Darbhanga', depth: '2.4m', pop: '2.1 Lakh', alert: 'HIGH', rc: 'bg-orange-500', ndrf: '5 Squads' },
                { d: 'Saharsa', depth: '2.8m', pop: '1.8 Lakh', alert: 'MODERATE', rc: 'bg-amber-500', ndrf: '4 Squads' },
                { d: 'Patna Sadar', depth: '1.6m', pop: '4.1 Lakh', alert: 'WATCH', rc: 'bg-yellow-500', ndrf: '7 Squads' },
              ].map((r) => (
                <tr key={r.d} className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-slate-900">{r.d}</td>
                  <td className="px-4 py-3.5 font-mono font-bold text-slate-700">{r.depth}</td>
                  <td className="px-4 py-3.5 text-slate-600">{r.pop}</td>
                  <td className="px-4 py-3.5"><span className={`px-2.5 py-0.5 rounded-full ${r.rc} text-white text-xs font-bold`}>{r.alert}</span></td>
                  <td className="px-4 py-3.5 text-slate-700 font-semibold">{r.ndrf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ── MODULE 3: CAP Emergency Broadcast ── */
function BroadcastModule({ showToast }) {
  const [severity, setSeverity] = useState('RED');
  const [msg, setMsg] = useState('');
  const [districts, setDistricts] = useState(['Supaul', 'Madhubani']);
  const [channel, setChannel] = useState({ sms: true, app: true, ivr: true, tv: false });
  const [sent, setSent] = useState(false);

  const allDistricts = ['Supaul', 'Madhubani', 'Darbhanga', 'Patna', 'Saharsa', 'Sitamarhi'];
  const toggleDistrict = (d) => setDistricts((prev) => prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]);

  const handleSend = () => {
    setSent(true);
    showToast(`CAP Broadcast — ${severity} Alert transmitted to ${(districts.length * 820000).toLocaleString()} citizens!`, 'success');
    setTimeout(() => setSent(false), 3000);
  };

  const sevColor = { RED: 'bg-red-600', ORANGE: 'bg-orange-500', YELLOW: 'bg-amber-500' };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-extrabold text-slate-900">CAP Emergency Broadcast System</h2>
        <p className="text-sm text-slate-500">Common Alerting Protocol — Transmit to citizens via Twilio SMS, Push, and IVR calls</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Compose Panel */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-5">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <span className="material-symbols-outlined text-red-600 text-[22px]">campaign</span>
            <h3 className="font-bold text-slate-900 text-sm">Compose Emergency Alert</h3>
          </div>

          {/* Severity */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Alert Severity</label>
            <div className="grid grid-cols-3 gap-2">
              {['RED', 'ORANGE', 'YELLOW'].map((s) => (
                <button
                  key={s}
                  onClick={() => setSeverity(s)}
                  className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${severity === s ? `${sevColor[s]} text-white border-transparent shadow-sm` : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}
                >
                  {s} ALERT
                </button>
              ))}
            </div>
          </div>

          {/* Districts */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Target Districts</label>
            <div className="flex flex-wrap gap-2">
              {allDistricts.map((d) => (
                <button
                  key={d}
                  onClick={() => toggleDistrict(d)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${districts.includes(d) ? 'bg-purple-700 text-white border-transparent' : 'border-slate-200 text-slate-600 hover:border-purple-300'}`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Alert Message (Hindi/English)</label>
            <textarea
              rows={4}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="EMERGENCY BROADCAST — Govt of Bihar / आपातकालीन संदेश: Flood water rising rapidly. Evacuate low-lying areas now. Move to nearest relief camp. बाढ़ का पानी तेजी से बढ़ रहा है, सुरक्षित स्थान पर जाएं।"
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition resize-none"
            />
          </div>

          {/* Channels */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Transmission Channels</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { key: 'sms', label: 'Twilio SMS', desc: 'Works on 2G/Basic phones', icon: 'sms' },
                { key: 'app', label: 'Push Notification', desc: 'Sachet Mobile App', icon: 'notifications_active' },
                { key: 'ivr', label: 'IVR Voice Call', desc: 'Automated Regional Voice', icon: 'record_voice_over' },
                { key: 'tv', label: 'Media & TV Crawl', desc: 'Doordarshan & AIR', icon: 'live_tv' },
              ].map((ch) => (
                <button
                  key={ch.key}
                  onClick={() => setChannel({ ...channel, [ch.key]: !channel[ch.key] })}
                  className={`flex items-start gap-2.5 p-3 rounded-xl border text-left transition-all cursor-pointer ${channel[ch.key] ? 'border-purple-300 bg-purple-50' : 'border-slate-200 hover:border-slate-300'}`}
                >
                  <span className={`material-symbols-outlined text-[18px] ${channel[ch.key] ? 'text-purple-700' : 'text-slate-400'}`}>{ch.icon}</span>
                  <div>
                    <div className="font-bold text-slate-900 text-xs">{ch.label}</div>
                    <div className="text-[11px] text-slate-500">{ch.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleSend}
            className={`w-full py-3.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 ${sent ? 'bg-emerald-600 text-white' : 'bg-red-600 hover:bg-red-700 text-white'}`}
          >
            <span className="material-symbols-outlined text-[18px]">{sent ? 'check_circle' : 'cell_tower'}</span>
            {sent ? 'Broadcast Transmitted Successfully' : `Transmit ${severity} Alert (${districts.length} Districts)`}
          </button>
        </div>

        {/* History Panel */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm">Recent Broadcasts</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { id: 'CAP-2024-0291', severity: 'RED', districts: 'Supaul, Madhubani', channels: 'SMS + App', reach: '4.2M', time: '06:42 today' },
                { id: 'CAP-2024-0290', severity: 'ORANGE', districts: 'Darbhanga, Patna', channels: 'SMS + Push', reach: '2.3M', time: '03:15 today' },
                { id: 'CAP-2024-0289', severity: 'YELLOW', districts: 'Sitamarhi', channels: 'App', reach: '0.8M', time: 'Sep 6' },
              ].map((h) => (
                <div key={h.id} className="p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold text-white ${h.severity === 'RED' ? 'bg-red-600' : 'bg-orange-500'}`}>{h.severity}</span>
                    <span className="text-xs font-mono text-slate-400">{h.id}</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">{h.districts}</p>
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>{h.channels}</span>
                    <span className="font-bold text-emerald-600">Reach: {h.reach}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── MODULE 4: Barrage Control ── */
function BarrageModule({ showToast }) {
  const [gates, setGates] = useState([
    { from: 1, to: 8, open: false, level: 0 },
    { from: 9, to: 18, open: true, level: 5.4 },
    { from: 19, to: 28, open: true, level: 6.2 },
    { from: 29, to: 38, open: true, level: 4.8 },
    { from: 39, to: 56, open: false, level: 0 },
  ]);

  const toggleGate = (index) => {
    const updated = [...gates];
    updated[index].open = !updated[index].open;
    updated[index].level = updated[index].open ? 5.0 : 0;
    setGates(updated);
    showToast(`Koshi Barrage: Gates ${updated[index].from}–${updated[index].to} ${updated[index].open ? 'OPENED' : 'CLOSED'}.`, updated[index].open ? 'warning' : 'info');
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-extrabold text-slate-900">Koshi Barrage — Gate Operations</h2>
        <p className="text-sm text-slate-500">Remote crest gate telemetry & discharge control (56 radial gates)</p>
      </div>

      {/* Summary Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Flow', value: '385,000 cusecs', color: 'text-amber-700 bg-amber-50' },
          { label: 'Active Gates', value: '30 of 56 Open', color: 'text-purple-700 bg-purple-50' },
          { label: 'Reservoir Level', value: '84.2m (HDSL)', color: 'text-red-700 bg-red-50' },
          { label: 'Downstream Alert', value: 'ORANGE SURGE', color: 'text-orange-700 bg-orange-50' },
        ].map((s) => (
          <div key={s.label} className={`p-4 rounded-2xl border border-slate-100 ${s.color}`}>
            <div className="text-xl font-extrabold">{s.value}</div>
            <div className="text-xs opacity-75 font-medium mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Gate Controls */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h3 className="font-bold text-slate-900 text-sm">Radial Gate Actuators</h3>
          <p className="text-xs text-slate-500 mt-0.5">Click to toggle gate groups and regulate downstream discharge</p>
        </div>

        <div className="divide-y divide-slate-100">
          {gates.map((g, idx) => (
            <div key={idx} className="p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${g.open ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-500'}`}>
                  {g.from}-{g.to}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Gates {g.from}–{g.to}</h4>
                  <p className="text-xs text-slate-500">{g.open ? `${g.level}m opening • ~75,000 cusecs` : 'Gates fully closed'}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${g.open ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-600'}`}>
                  {g.open ? 'OPEN' : 'CLOSED'}
                </span>
                <button
                  onClick={() => toggleGate(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${g.open ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-sky-600 text-white hover:bg-sky-700'}`}
                >
                  {g.open ? 'Close Gate' : 'Open Gate'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── MODULE 5: NGO & Volunteers ── */
function NGOModule({ showToast }) {
  const tasks = [
    { id: 'TSK-0841', org: 'Red Cross Bihar', task: 'Medical camp setup — Supaul Camp 08', status: 'IN-PROGRESS', due: 'Today 18:00' },
    { id: 'TSK-0840', org: 'Goonj Foundation', task: 'Dry ration distribution — 4 flood villages', status: 'PENDING', due: 'Tomorrow 10:00' },
    { id: 'TSK-0839', org: 'SEEDS India', task: 'Water purification kit delivery — 12 shelters', status: 'IN-PROGRESS', due: 'Today 16:00' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-extrabold text-slate-900">NGO & Volunteer Coordination</h2>
        <p className="text-sm text-slate-500">Relief organizations task assignment and resource coordination</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Active NGOs', value: '14 Orgs', color: 'bg-emerald-50 text-emerald-700' },
          { label: 'Volunteers on Ground', value: '420 Personnel', color: 'bg-sky-50 text-sky-700' },
          { label: 'Open Tasks', value: '28 Assignments', color: 'bg-purple-50 text-purple-700' },
        ].map((s) => (
          <div key={s.label} className={`p-4 rounded-2xl border border-slate-100 ${s.color}`}>
            <div className="text-xl font-extrabold">{s.value}</div>
            <div className="text-xs opacity-75 font-medium mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-sm">Relief Task Board</h3>
          <button onClick={() => showToast('New relief task form opened.', 'info')} className="text-xs font-bold text-purple-700 hover:underline cursor-pointer">
            + Assign Task
          </button>
        </div>

        <div className="divide-y divide-slate-100">
          {tasks.map((t) => (
            <div key={t.id} className="p-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-slate-900 text-sm">{t.org}</span>
                  <span className="text-xs font-mono text-slate-400">{t.id}</span>
                </div>
                <p className="text-xs text-slate-600">{t.task}</p>
                <span className="text-[11px] text-slate-400 mt-1 block">Due: {t.due}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-50 text-sky-700">{t.status}</span>
                <button onClick={() => showToast(`Task ${t.id} marked completed.`, 'success')} className="px-3 py-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs cursor-pointer">
                  Mark Done
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── MODULE 6: Damage Reports & Compensation ── */
function DamageModule({ showToast }) {
  const [claims, setClaims] = useState([
    { id: 'CLM-2024-1041', name: 'Ramesh Kumar', district: 'Supaul', type: 'Residential Collapse', amount: '₹1,80,000', status: 'PENDING' },
    { id: 'CLM-2024-1040', name: 'Kavita Devi', district: 'Madhubani', type: 'Paddy Crop Loss', amount: '₹92,000', status: 'UNDER REVIEW' },
    { id: 'CLM-2024-1039', name: 'Santosh Yadav', district: 'Darbhanga', type: 'Boat & Gear Loss', amount: '₹45,000', status: 'APPROVED' },
    { id: 'CLM-2024-1038', name: 'Meena Singh', district: 'Patna', type: 'House Damage', amount: '₹2,20,000', status: 'APPROVED' },
  ]);

  const approveClaim = (id) => {
    setClaims((prev) => prev.map((c) => c.id === id ? { ...c, status: 'APPROVED' } : c));
    showToast(`Claim ${id} approved. DBT disbursement initiated.`, 'success');
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-extrabold text-slate-900">Damage Claims & Compensation (DBT)</h2>
        <p className="text-sm text-slate-500">Review civilian flood loss claims and authorize Direct Benefit Transfers</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Claims', value: '2,841', sub: '₹18.4 Cr outlay', color: 'bg-purple-50 text-purple-700' },
          { label: 'Approved Claims', value: '1,204', sub: '₹8.2 Cr disbursed', color: 'bg-emerald-50 text-emerald-700' },
          { label: 'Pending Review', value: '1,412', sub: 'Awaiting inspection', color: 'bg-amber-50 text-amber-700' },
          { label: 'Rejected', value: '225', sub: 'Non-flood related', color: 'bg-slate-100 text-slate-600' },
        ].map((s) => (
          <div key={s.label} className={`p-4 rounded-2xl border border-slate-100 ${s.color}`}>
            <div className="text-2xl font-extrabold">{s.value}</div>
            <div className="text-xs font-semibold mt-0.5">{s.label}</div>
            <div className="text-[11px] opacity-75 mt-0.5">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-sm">Incoming Claims Queue</h3>
          <span className="text-xs text-slate-400 font-mono">Aadhaar Verified</span>
        </div>

        <div className="divide-y divide-slate-100">
          {claims.map((c) => (
            <div key={c.id} className="p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-bold text-slate-900 text-sm">{c.name}</span>
                  <span className="text-xs font-mono text-slate-400">{c.id}</span>
                </div>
                <p className="text-xs text-slate-500">{c.type} • {c.district}</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-extrabold text-slate-900 text-sm">{c.amount}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${c.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                  {c.status}
                </span>
                {c.status !== 'APPROVED' ? (
                  <button
                    onClick={() => approveClaim(c.id)}
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    Approve
                  </button>
                ) : (
                  <span className="text-xs font-bold text-emerald-600">✓ Disbursed</span>
                )}
              </div>
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
  const [active, setActive] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const modules = [
    { id: 'overview', label: 'Overview', icon: 'shield_person' },
    { id: 'heatmap', label: 'Live Heatmap', icon: 'map' },
    { id: 'broadcast', label: 'CAP Broadcast', icon: 'cell_tower', dot: true },
    { id: 'barrage', label: 'Barrage Control', icon: 'valve' },
    { id: 'ngo', label: 'NGO Coordination', icon: 'volunteer_activism' },
    { id: 'damage', label: 'Damage Reports', icon: 'analytics' },
  ];

  const colors = {
    overview: 'text-purple-600',
    heatmap: 'text-sky-600',
    broadcast: 'text-red-600',
    barrage: 'text-amber-600',
    ngo: 'text-emerald-600',
    damage: 'text-indigo-600',
  };

  const renderModule = () => {
    switch (active) {
      case 'overview': return <OverviewModule setActive={setActive} showToast={showToast} />;
      case 'heatmap': return <HeatmapModule />;
      case 'broadcast': return <BroadcastModule showToast={showToast} />;
      case 'barrage': return <BarrageModule showToast={showToast} />;
      case 'ngo': return <NGOModule showToast={showToast} />;
      case 'damage': return <DamageModule showToast={showToast} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-on-surface">
      <Navbar />
      <PortalTopbar
        portal="admin"
        menuOpen={mobileMenuOpen}
        onMenuClick={() => setMobileMenuOpen((open) => !open)}
      />

      <div className="flex flex-col lg:flex-row items-stretch lg:items-start">
        {/* Sidebar */}
        <aside className={`${mobileMenuOpen ? 'flex fixed inset-x-0 top-14 bottom-0' : 'hidden'} lg:flex w-full lg:w-64 shrink-0 bg-white border-b lg:border-b-0 lg:border-r border-slate-200/80 shadow-[1px_0_6px_rgba(0,0,0,0.03)] z-30 flex-col lg:sticky lg:top-[120px] lg:h-[calc(100vh-120px)] pt-4`}>
          {/* Header Identity */}
          <div id="admin-header-block" className="px-4 pb-4 border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-700 to-slate-900 flex items-center justify-center text-white shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">shield_person</span>
              </div>
              <div className="min-w-0">
                <div className="text-sm font-extrabold text-slate-900 leading-tight">Admin Desk</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">NDMA • SDMA Command</div>
              </div>
            </div>
          </div>

          {/* Scrollable Middle: Command Modules & Incident Pill */}
          <div className="flex-1 overflow-y-auto px-3.5 py-3 flex flex-col">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
              Command Modules
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
                        ? 'bg-gradient-to-r from-purple-700 to-slate-800 text-white font-semibold shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium'
                    }`}
                  >
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      <span
                        className={`material-symbols-outlined text-[19px] ${isActive ? 'text-white' : colors[m.id]}`}
                        style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                      >
                        {m.icon}
                      </span>
                    </div>
                    <span className="flex-1 truncate">{m.label}</span>
                    {m.dot && !isActive && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />}
                  </button>
                );
              })}
            </nav>

            {/* Active Incident Pill */}
            <div className="mt-4 p-3.5 rounded-xl bg-red-50 border border-red-200">
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider">Active Incident</span>
              </div>
              <div className="font-bold text-slate-900 text-xs">IN-2024-F09</div>
              <div className="text-xs text-slate-500 mt-0.5">Bihar Flood — Level 3</div>
              <div className="flex justify-between text-xs mt-2">
                <span className="text-red-600 font-bold">RED ALERT</span>
                <span className="text-slate-400">72hr active</span>
              </div>
            </div>
          </div>

          {/* Sticky Footer Element */}
          <div className="p-3.5 border-t border-slate-100 bg-white shrink-0">
            <button
              onClick={() => setActive('broadcast')}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] animate-pulse">cell_tower</span>
              <span>CAP Broadcast</span>
            </button>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 min-h-[calc(100vh-120px)] pt-4 px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-5xl mx-auto">{renderModule()}</div>
        </main>
      </div>
    </div>
  );
}
