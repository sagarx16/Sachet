'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../context/AuthContext';

/* ── MODULE 1: Overview / Command Dashboard ── */
function OverviewModule({ setActive, openSos, showToast }) {
  const handleGate = () => showToast('Koshi Barrage: Gates 12-28 opened to 6.2m. Flow: 385,000 cusecs.', 'warning');

  return (
    <div className="flex flex-col gap-6">
      {/* Command Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-purple-950 p-6 text-white shadow-xl">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%"><defs><pattern id="cmdgrid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#a78bfa" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#cmdgrid)"/></svg>
        </div>
        <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-purple-500/10 blur-2xl" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-purple-200">GOVT COMMAND DESK • CLASSIFIED L4</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight mb-1">Bihar–Nepal Disaster Command</h1>
            <p className="text-slate-300 text-sm">National Disaster Management Authority • Bihar SDMA • Active Incident: IN-2024-F09</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <button onClick={() => setActive('broadcast')} className="flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-lg transition-all hover:scale-105 cursor-pointer">
              <span className="material-symbols-outlined text-[18px] animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>cell_tower</span>
              CAP Broadcast
            </button>
            <button onClick={handleGate} className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-[18px]">valve</span>
              Gate Telemetry
            </button>
          </div>
        </div>
      </div>

      {/* Threat Level */}
      <div className="flex items-center gap-4 p-4 rounded-2xl bg-red-50 border border-red-200">
        <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0">
          <span className="material-symbols-outlined text-[26px] animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>crisis_alert</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <span className="px-2 py-0.5 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wide">RED ALERT</span>
            <span className="font-bold text-slate-900 text-sm">Koshi + Gandak simultaneous surge — Bihar districts 14 & 17</span>
          </div>
          <p className="text-slate-600 text-xs">Estimated 4.2M civilians in impact zone. NDRF Level-3 deployed. Barrage discharge: 3.85L cusecs.</p>
        </div>
        <button onClick={() => setActive('broadcast')} className="shrink-0 px-4 py-2 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 transition-colors cursor-pointer">Issue Alert</button>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Population at Risk', value: '4.2M', sub: 'Districts 12, 14, 17, 21', icon: 'groups', color: 'text-red-700', bg: 'bg-red-50', iconColor: 'text-red-500' },
          { label: 'NDRF Units Active', value: '38', sub: '24 rescue • 14 medical', icon: 'emergency_home', color: 'text-purple-700', bg: 'bg-purple-50', iconColor: 'text-purple-500' },
          { label: 'Damage Claims Filed', value: '2,841', sub: '1,204 approved • ₹18.4Cr', icon: 'receipt_long', color: 'text-sky-700', bg: 'bg-sky-50', iconColor: 'text-sky-500' },
          { label: 'Barrage Discharge', value: '3.85L', sub: 'Cusecs • Rising +2.4%/hr', icon: 'valve', color: 'text-amber-700', bg: 'bg-amber-50', iconColor: 'text-amber-500' },
        ].map((s) => (
          <div key={s.label} className={`p-4 rounded-2xl ${s.bg} border border-slate-100 flex flex-col gap-2 card-hover`}>
            <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm ${s.iconColor}`}>
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
            </div>
            <div>
              <div className={`text-2xl font-extrabold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-slate-500 font-medium">{s.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{s.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Module Quick Access */}
      <div>
        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Command Modules</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { id: 'heatmap', label: 'Live Heatmap', desc: 'GIS flood intelligence', icon: 'map', color: 'from-sky-500 to-blue-600' },
            { id: 'broadcast', label: 'CAP Broadcast', desc: 'Emergency alerts — 4.2M citizens', icon: 'cell_tower', color: 'from-red-600 to-rose-700' },
            { id: 'barrage', label: 'Barrage Control', desc: 'Koshi gate operations', icon: 'valve', color: 'from-amber-500 to-orange-600' },
            { id: 'ngo', label: 'NGO & Volunteers', desc: 'Coordination & task board', icon: 'volunteer_activism', color: 'from-emerald-500 to-teal-600' },
            { id: 'damage', label: 'Damage Reports', desc: 'Claims & compensation', icon: 'analytics', color: 'from-purple-500 to-violet-600' },
          ].map((m) => (
            <button key={m.id} onClick={() => setActive(m.id)} className="text-left p-4 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all group card-hover">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>{m.icon}</span>
              </div>
              <div className="font-bold text-slate-900 text-sm">{m.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{m.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Alerts Issued */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-purple-600 text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
            <h2 className="font-bold text-slate-900">Recent Command Actions</h2>
          </div>
          <span className="text-xs text-slate-400">Last 24 hours</span>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { time: '06:42', action: 'CAP Broadcast — RED ALERT', detail: 'Districts 12, 14, 17 • 4.2M notified via SMS + App', icon: 'cell_tower', color: 'bg-red-500' },
            { time: '05:18', action: 'Koshi Barrage — Gate 12–28 opened', detail: 'Gates raised to 6.2m • Flow: 385,000 cusecs', icon: 'valve', color: 'bg-amber-500' },
            { time: '04:55', action: 'NDRF Squad 9 deployed — Supaul', detail: 'Level-3 response • 38 personnel + 14 boats', icon: 'emergency_home', color: 'bg-sky-600' },
            { time: '03:20', action: 'Evacuation Order — Ward 12–18 Patna', detail: 'Mandatory evacuation. Bihar Govt Order #2024/F09-B', icon: 'directions_run', color: 'bg-purple-600' },
          ].map((a, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-3.5 hover:bg-slate-50 transition-colors">
              <div className={`w-8 h-8 rounded-lg ${a.color} flex items-center justify-center text-white shrink-0`}>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>{a.icon}</span>
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
          <h2 className="text-xl font-extrabold text-slate-900">Live Flood Intelligence — GIS Command View</h2>
          <p className="text-sm text-slate-500">Bihar–Nepal cross-border hydrology • Satellite + CWC telemetry fusion</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Satellite Feed Live</span>
        </div>
      </div>

      {/* Layer Toggle */}
      <div className="flex gap-2 bg-slate-100 p-1 rounded-xl w-fit">
        {[['flood', 'Flood Depth'], ['risk', 'Risk Score'], ['infra', 'Infrastructure'], ['shelter', 'Shelters']].map(([v, l]) => (
          <button key={v} onClick={() => setLayer(v)} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${layer === v ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>{l}</button>
        ))}
      </div>

      {/* Main Map Area */}
      <div className="relative bg-slate-900 rounded-2xl overflow-hidden h-96 flex flex-col justify-between shadow-xl">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%"><defs><pattern id="gmap" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="#64748b" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#gmap)"/></svg>
        </div>
        {/* Flood blobs */}
        <div className="absolute top-12 left-16 w-32 h-24 bg-red-500/40 rounded-full blur-2xl" />
        <div className="absolute top-24 left-40 w-44 h-28 bg-orange-500/30 rounded-full blur-2xl" />
        <div className="absolute top-8 right-24 w-28 h-20 bg-amber-400/30 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-12 w-20 h-16 bg-yellow-400/20 rounded-full blur-xl" />
        <div className="absolute bottom-12 left-1/2 w-24 h-18 bg-red-600/30 rounded-full blur-xl" />
        {/* Location pins */}
        {[
          { x: '20%', y: '25%', label: 'Supaul', color: 'bg-red-500', status: 'CRITICAL' },
          { x: '45%', y: '40%', label: 'Patna', color: 'bg-orange-400', status: 'HIGH' },
          { x: '65%', y: '20%', label: 'Madhubani', color: 'bg-amber-400', status: 'MODERATE' },
          { x: '75%', y: '55%', label: 'Saharsa', color: 'bg-yellow-400', status: 'WATCH' },
        ].map((p) => (
          <div key={p.label} className="absolute flex flex-col items-center gap-0.5" style={{ left: p.x, top: p.y }}>
            <div className={`w-3 h-3 rounded-full ${p.color} border-2 border-white shadow-lg`} />
            <div className="bg-white/90 text-xs font-bold text-slate-900 px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap" style={{ fontSize: '9px' }}>{p.label}</div>
          </div>
        ))}
        {/* Crosshair center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 relative">
            <div className="absolute inset-0 border border-white/30 rounded-full" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20" />
          </div>
        </div>
        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="text-white text-xs font-bold uppercase tracking-wider">LIVE GIS — Bihar–Nepal Border Corridor</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-white/10 text-white text-xs font-bold px-2 py-1 rounded-lg backdrop-blur-sm uppercase">{layer} layer</span>
            <span className="text-slate-400 text-xs">Mapbox GL • ISRO NRSC</span>
          </div>
        </div>
        {/* Bottom legend */}
        <div className="relative z-10 flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3 flex-wrap">
            {[['bg-red-500', 'Critical'], ['bg-orange-400', 'High'], ['bg-amber-400', 'Moderate'], ['bg-yellow-400', 'Watch'], ['bg-emerald-400', 'Safe']].map(([c, l]) => (
              <div key={l} className="flex items-center gap-1 text-white text-xs font-semibold"><span className={`w-2.5 h-2.5 rounded-sm ${c}`} />{l}</div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-2.5 py-1.5 rounded-lg backdrop-blur-sm transition-colors cursor-pointer flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">zoom_in</span>Zoom
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-2.5 py-1.5 rounded-lg backdrop-blur-sm transition-colors cursor-pointer flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">download</span>Export KMZ
            </button>
          </div>
        </div>
      </div>

      {/* District Stats Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-sm">District-wise Flood Intelligence</h3>
          <button className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors cursor-pointer flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">download</span>Export CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                {['District', 'Flood Depth', 'Pop. Affected', 'Risk Level', 'NDRF Status', 'Action'].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { d: 'Supaul', depth: '4.2m', pop: '3.8L', risk: 'CRITICAL', ndrf: 'Deployed', rc: 'bg-red-600', action: 'Evacuate' },
                { d: 'Madhubani', depth: '2.8m', pop: '2.1L', risk: 'HIGH', ndrf: 'En-route', rc: 'bg-orange-500', action: 'Alert' },
                { d: 'Darbhanga', depth: '1.9m', pop: '1.4L', risk: 'MODERATE', ndrf: 'Standby', rc: 'bg-amber-500', action: 'Monitor' },
                { d: 'Patna', depth: '1.1m', pop: '0.9L', risk: 'WATCH', ndrf: 'Staged', rc: 'bg-yellow-500', action: 'Prepare' },
                { d: 'Sitamarhi', depth: '0.4m', pop: '0.2L', risk: 'LOW', ndrf: 'Normal', rc: 'bg-emerald-500', action: '—' },
              ].map((r) => (
                <tr key={r.d} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-slate-900">{r.d}</td>
                  <td className="px-4 py-3 font-mono font-bold text-slate-700">{r.depth}</td>
                  <td className="px-4 py-3 text-slate-600">{r.pop}</td>
                  <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full ${r.rc} text-white text-xs font-bold`}>{r.risk}</span></td>
                  <td className="px-4 py-3 text-slate-600 text-xs font-semibold">{r.ndrf}</td>
                  <td className="px-4 py-3"><button className="text-xs font-bold text-purple-600 hover:underline cursor-pointer">{r.action}</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ── MODULE 3: CAP Broadcast ── */
function BroadcastModule({ showToast }) {
  const [severity, setSeverity] = useState('RED');
  const [msg, setMsg] = useState('');
  const [districts, setDistricts] = useState(['Supaul', 'Madhubani']);
  const [channel, setChannel] = useState({ sms: true, app: true, ivr: true, tv: false });
  const [sent, setSent] = useState(false);

  const allDistricts = ['Supaul', 'Madhubani', 'Darbhanga', 'Patna', 'Saharsa', 'Sitamarhi', 'Katihar', 'Purnia'];
  const toggleDistrict = (d) => setDistricts((prev) => prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]);

  const handleSend = () => {
    setSent(true);
    showToast(`CAP Broadcast — ${severity} ALERT transmitted to 4.2M citizens!`, 'success');
    setTimeout(() => setSent(false), 3000);
  };

  const history = [
    { id: 'CAP-2024-0291', severity: 'RED', districts: 'Supaul, Madhubani', channels: 'SMS+App+IVR', sent: '06:42 today', reach: '4.2M' },
    { id: 'CAP-2024-0290', severity: 'ORANGE', districts: 'Darbhanga, Patna', channels: 'SMS+App', sent: '03:15 today', reach: '2.3M' },
    { id: 'CAP-2024-0289', severity: 'YELLOW', districts: 'Sitamarhi', channels: 'App', sent: 'Sep 6, 22:10', reach: '0.8M' },
  ];

  const sevColor = { RED: 'bg-red-600', ORANGE: 'bg-orange-500', YELLOW: 'bg-yellow-500', GREEN: 'bg-emerald-500' };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-extrabold text-slate-900">CAP Emergency Broadcast System</h2>
        <p className="text-sm text-slate-500">Common Alerting Protocol — transmit to 4.2M+ citizens via SMS (Twilio), App push (FCM), IVR & TV crawl</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Compose Panel */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2 bg-red-50">
            <span className="material-symbols-outlined text-red-600 text-[20px] animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
            <h3 className="font-bold text-slate-900 text-sm">Compose Emergency Alert</h3>
          </div>
          <div className="p-5 flex flex-col gap-5">
            {/* Severity */}
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Alert Severity</label>
              <div className="grid grid-cols-4 gap-2">
                {['RED', 'ORANGE', 'YELLOW', 'GREEN'].map((s) => (
                  <button key={s} onClick={() => setSeverity(s)} className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${severity === s ? `${sevColor[s]} text-white border-transparent shadow-md` : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}>{s}</button>
                ))}
              </div>
              <div className="mt-2 text-xs text-slate-400 font-medium">RED: Immediate Evacuation • ORANGE: High Risk • YELLOW: Watch • GREEN: All Clear</div>
            </div>

            {/* Districts */}
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Target Districts</label>
              <div className="flex flex-wrap gap-2">
                {allDistricts.map((d) => (
                  <button key={d} onClick={() => toggleDistrict(d)} className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${districts.includes(d) ? 'bg-purple-600 text-white border-transparent' : 'border-slate-200 text-slate-600 hover:border-purple-300'}`}>{d}</button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Alert Message (Hindi/English)</label>
              <textarea rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="EMERGENCY BROADCAST — Government of Bihar / सरकार द्वारा आपातकालीन संदेश&#10;&#10;Flood water rising rapidly. Immediate evacuation mandatory for Ward 12–18 residents. Move to nearest shelter camp NOW.&#10;&#10;बाढ़ का पानी तेजी से बढ़ रहा है। कृपया तुरंत सुरक्षित स्थान पर जाएं।" className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition resize-none" />
            </div>

            {/* Channels */}
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Transmission Channels</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { key: 'sms', label: 'Twilio SMS', desc: 'Works on 2G — ~4.2M', icon: 'sms' },
                  { key: 'app', label: 'Firebase Push (FCM)', desc: 'App push notification', icon: 'notifications_active' },
                  { key: 'ivr', label: 'IVR Voice Call', desc: 'Hindi/regional language', icon: 'record_voice_over' },
                  { key: 'tv', label: 'TV/Radio Crawl', desc: 'Doordarshan + AIR', icon: 'live_tv' },
                ].map((ch) => (
                  <button key={ch.key} onClick={() => setChannel({ ...channel, [ch.key]: !channel[ch.key] })} className={`flex items-start gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${channel[ch.key] ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-slate-300'}`}>
                    <span className={`material-symbols-outlined text-[20px] mt-0.5 ${channel[ch.key] ? 'text-red-600' : 'text-slate-400'}`} style={{ fontVariationSettings: channel[ch.key] ? "'FILL' 1" : "'FILL' 0" }}>{ch.icon}</span>
                    <div>
                      <div className="font-bold text-slate-900 text-xs">{ch.label}</div>
                      <div className="text-xs text-slate-500">{ch.desc}</div>
                    </div>
                    {channel[ch.key] && <span className="ml-auto material-symbols-outlined text-emerald-500 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={handleSend} className={`w-full py-3.5 rounded-xl font-extrabold text-sm shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 ${sent ? 'bg-emerald-600 text-white' : 'bg-red-600 hover:bg-red-700 text-white shadow-red-200'}`}>
              <span className="material-symbols-outlined text-[18px] animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>{sent ? 'check_circle' : 'cell_tower'}</span>
              {sent ? '✓ Broadcast Transmitted!' : `TRANSMIT ${severity} ALERT → ${districts.length} Districts`}
            </button>
          </div>
        </div>

        {/* Broadcast History */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm">Broadcast Log</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {history.map((h) => (
                <div key={h.id} className="px-5 py-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className={`px-2 py-0.5 rounded-full ${sevColor[h.severity]} text-white text-xs font-bold`}>{h.severity}</span>
                    <span className="text-xs font-mono text-slate-400">{h.id}</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">{h.districts}</p>
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>{h.channels}</span>
                    <span className="font-bold text-emerald-600">Reached: {h.reach}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">Sent: {h.sent}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Reach Stats */}
          <div className="bg-gradient-to-br from-purple-600 to-violet-700 rounded-2xl p-5 text-white">
            <h4 className="font-bold text-sm mb-3">Today's Broadcast Reach</h4>
            <div className="grid grid-cols-2 gap-3">
              {[['4.2M', 'SMS Delivered'], ['3.8M', 'App Push'], ['1.2M', 'IVR Calls'], ['12.4M', 'TV/Radio']].map(([v, l]) => (
                <div key={l} className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-xl font-extrabold">{v}</div>
                  <div className="text-xs text-purple-200 mt-0.5">{l}</div>
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
    { id: 1, from: 1, to: 6, open: false, level: 0 },
    { id: 2, from: 7, to: 11, open: true, level: 4.2 },
    { id: 3, from: 12, to: 18, open: true, level: 6.2 },
    { id: 4, from: 19, to: 24, open: true, level: 5.8 },
    { id: 5, from: 25, to: 28, open: false, level: 0 },
  ]);
  const [selected, setSelected] = useState(null);

  const toggleGate = (id) => {
    setGates((prev) => prev.map((g) => g.id === id ? { ...g, open: !g.open, level: g.open ? 0 : 5.0 } : g));
    const g = gates.find((x) => x.id === id);
    showToast(`Gate group ${g.from}–${g.to} ${g.open ? 'CLOSED' : 'OPENED'} successfully.`, g.open ? 'info' : 'warning');
  };

  const totalFlow = gates.filter((g) => g.open).reduce((acc, g) => acc + (g.level * 12400), 0);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-extrabold text-slate-900">Koshi Barrage — Gate Operations</h2>
        <p className="text-sm text-slate-500">Remote gate control simulation • 28 radial gates • India–Nepal border crossing</p>
      </div>

      {/* Barrage Status Banner */}
      <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
          <span className="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>valve</span>
        </div>
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Total Flow', val: `${(totalFlow / 1000).toFixed(0)}k cusecs`, color: 'text-amber-700' },
            { label: 'Open Gates', val: `${gates.filter((g) => g.open).reduce((a, g) => a + (g.to - g.from + 1), 0)}/28`, color: 'text-red-600' },
            { label: 'Reservoir Level', val: '84.2m (HDSL)', color: 'text-slate-900' },
            { label: 'Downstream Alert', val: 'ORANGE', color: 'text-orange-600' },
          ].map((s) => (
            <div key={s.label}>
              <div className={`text-base font-extrabold ${s.color}`}>{s.val}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Gate Groups */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h3 className="font-bold text-slate-900 text-sm">Gate Control Panel — 28 Radial Gates</h3>
          <p className="text-xs text-slate-500 mt-0.5">Click a gate group to toggle. Each gate rated at ~12,400 cusecs/m.</p>
        </div>

        {/* Visual Gate Bar */}
        <div className="px-5 py-4 border-b border-slate-100">
          <div className="flex gap-1 h-16 items-end">
            {Array.from({ length: 28 }, (_, i) => {
              const gate = gates.find((g) => g.from <= i + 1 && i + 1 <= g.to);
              return (
                <div key={i} onClick={() => setSelected(gate?.id)} className={`flex-1 rounded-t-md transition-all cursor-pointer ${gate?.open ? 'bg-blue-500 hover:bg-blue-400' : 'bg-slate-200 hover:bg-slate-300'} ${selected === gate?.id ? 'ring-2 ring-purple-500' : ''}`}
                  style={{ height: gate?.open ? `${(gate.level / 7) * 100}%` : '20%' }}
                  title={`Gate ${i + 1}`} />
              );
            })}
          </div>
          <div className="flex justify-between text-xs text-slate-400 mt-1 font-mono">
            <span>Gate 1</span><span>Gate 14</span><span>Gate 28</span>
          </div>
        </div>

        {/* Gate Group Rows */}
        <div className="divide-y divide-slate-100">
          {gates.map((g) => (
            <div key={g.id} className={`flex items-center justify-between gap-4 px-5 py-4 hover:bg-slate-50 transition-colors ${selected === g.id ? 'bg-purple-50' : ''}`} onClick={() => setSelected(g.id)}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${g.open ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
                  {g.from}-{g.to}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Gates {g.from}–{g.to}</p>
                  <p className="text-xs text-slate-500">{g.to - g.from + 1} gates • {g.open ? `${g.level}m opening • ~${(g.level * 12400 * (g.to - g.from + 1) / 1000).toFixed(0)}k cusecs` : 'Closed'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${g.open ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>{g.open ? 'OPEN' : 'CLOSED'}</span>
                <button onClick={(e) => { e.stopPropagation(); toggleGate(g.id); }} className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${g.open ? 'bg-slate-800 hover:bg-slate-900 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                  {g.open ? 'Close Gates' : 'Open Gates'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Warning */}
      <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3">
        <span className="material-symbols-outlined text-red-500 text-[20px] mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
        <div>
          <p className="font-bold text-red-800 text-sm">Downstream Impact Warning</p>
          <p className="text-xs text-red-700 mt-0.5">Opening gates 12–28 increases downstream flow by ~385,000 cusecs. CAP alert must be issued to affected districts (Supaul, Madhubani, Nepal — Saptari) before any gate operation.</p>
        </div>
      </div>
    </div>
  );
}

/* ── MODULE 5: NGO & Volunteer Coordination ── */
function NGOModule({ showToast }) {
  const [tab, setTab] = useState('tasks');
  const tasks = [
    { id: 'TSK-0841', org: 'Red Cross Bihar', task: 'Medical camp setup — Supaul Camp 08', status: 'IN-PROGRESS', due: 'Today 18:00', priority: 'HIGH' },
    { id: 'TSK-0840', org: 'Goonj Foundation', task: 'Dry ration distribution — 4 villages', status: 'PENDING', due: 'Sep 8, 10:00', priority: 'MEDIUM' },
    { id: 'TSK-0839', org: 'CRY India', task: 'Child welfare assessment — Madhubani', status: 'COMPLETED', due: 'Sep 6', priority: 'HIGH' },
    { id: 'TSK-0838', org: 'HelpAge India', task: 'Elderly evacuation assist — Ward 14–16', status: 'IN-PROGRESS', due: 'Today 15:00', priority: 'CRITICAL' },
    { id: 'TSK-0837', org: 'SEEDS India', task: 'WASH kit distribution — 12 camps', status: 'PENDING', due: 'Sep 9', priority: 'MEDIUM' },
  ];
  const ngos = [
    { name: 'Red Cross Bihar', type: 'Medical', personnel: 42, vehicles: 8, status: 'ACTIVE', location: 'Supaul' },
    { name: 'Goonj Foundation', type: 'Relief Supply', personnel: 28, vehicles: 12, status: 'ACTIVE', location: 'Madhubani' },
    { name: 'HelpAge India', type: 'Elderly Care', personnel: 18, vehicles: 4, status: 'ACTIVE', location: 'Patna' },
    { name: 'CRY India', type: 'Child Welfare', personnel: 14, vehicles: 3, status: 'STANDBY', location: 'Darbhanga' },
    { name: 'SEEDS India', type: 'WASH & Infra', personnel: 35, vehicles: 6, status: 'ACTIVE', location: 'Saharsa' },
  ];
  const statusColor = (s) => ({ 'IN-PROGRESS': 'bg-sky-100 text-sky-700', PENDING: 'bg-amber-100 text-amber-700', COMPLETED: 'bg-emerald-100 text-emerald-700' }[s] || 'bg-slate-100 text-slate-600');
  const prioColor = (p) => ({ CRITICAL: 'bg-red-600', HIGH: 'bg-orange-500', MEDIUM: 'bg-amber-500', LOW: 'bg-slate-400' }[p]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">NGO & Volunteer Coordination</h2>
          <p className="text-sm text-slate-500">Task assignment, resource tracking & coordination board for all relief organisations</p>
        </div>
        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
          <button onClick={() => setTab('tasks')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${tab === 'tasks' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}>Task Board</button>
          <button onClick={() => setTab('ngos')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${tab === 'ngos' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}>Organisations</button>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-3">
        {[['5', 'Active NGOs', 'text-emerald-700 bg-emerald-50'], ['137', 'Personnel', 'text-sky-700 bg-sky-50'], ['33', 'Vehicles', 'text-indigo-700 bg-indigo-50'], ['18', 'Open Tasks', 'text-amber-700 bg-amber-50']].map(([v, l, c]) => (
          <div key={l} className={`p-3 rounded-2xl border border-slate-100 flex flex-col items-center text-center ${c}`}>
            <div className="text-2xl font-extrabold">{v}</div>
            <div className="text-xs font-semibold mt-0.5">{l}</div>
          </div>
        ))}
      </div>

      {tab === 'tasks' ? (
        <div className="flex flex-col gap-3">
          {tasks.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex items-center gap-4 card-hover">
              <div className={`w-2 self-stretch rounded-full shrink-0 ${prioColor(t.priority)}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="font-bold text-slate-900 text-sm">{t.org}</span>
                  <span className="text-xs text-slate-400 font-mono">{t.id}</span>
                  <span className={`px-1.5 py-0.5 rounded text-xs font-bold ${prioColor(t.priority)} text-white`}>{t.priority}</span>
                </div>
                <p className="text-xs text-slate-700">{t.task}</p>
                <p className="text-xs text-slate-400 mt-0.5">Due: {t.due}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${statusColor(t.status)}`}>{t.status}</span>
                {t.status !== 'COMPLETED' && (
                  <button onClick={() => showToast(`${t.org} task marked complete.`, 'success')} className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors">
                    <span className="material-symbols-outlined text-[14px]">check</span>Done
                  </button>
                )}
              </div>
            </div>
          ))}
          <button onClick={() => showToast('New task form — coming soon!', 'info')} className="w-full py-3 rounded-2xl border-2 border-dashed border-slate-200 hover:border-purple-300 text-slate-500 hover:text-purple-600 font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add_task</span> Assign New Task
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ngos.map((n) => (
            <div key={n.name} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-col gap-3 card-hover">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{n.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{n.type} • {n.location}</p>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${n.status === 'ACTIVE' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>{n.status}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded-xl bg-slate-50 text-center">
                  <div className="font-extrabold text-slate-900">{n.personnel}</div>
                  <div className="text-xs text-slate-500">Personnel</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 text-center">
                  <div className="font-extrabold text-slate-900">{n.vehicles}</div>
                  <div className="text-xs text-slate-500">Vehicles</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => showToast(`Contacting ${n.name} coordinator...`, 'info')} className="flex-1 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[14px]">call</span>Contact
                </button>
                <button onClick={() => showToast(`Task assigned to ${n.name}.`, 'success')} className="flex-1 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[14px]">add_task</span>Assign
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── MODULE 6: Damage Reports & Analytics ── */
function DamageModule({ showToast }) {
  const claims = [
    { id: 'CLM-2024-1041', name: 'Ramesh Kumar', type: 'House Damage', district: 'Supaul', amount: '₹1,80,000', status: 'PENDING', filed: '2 hrs ago' },
    { id: 'CLM-2024-1040', name: 'Kavita Devi', type: 'Agricultural Loss', district: 'Madhubani', amount: '₹92,000', status: 'UNDER REVIEW', filed: '4 hrs ago' },
    { id: 'CLM-2024-1039', name: 'Santosh Yadav', type: 'Vehicle', district: 'Darbhanga', amount: '₹45,000', status: 'APPROVED', filed: 'Sep 6' },
    { id: 'CLM-2024-1038', name: 'Meena Singh', type: 'House Damage', district: 'Patna', amount: '₹2,20,000', status: 'APPROVED', filed: 'Sep 6' },
    { id: 'CLM-2024-1037', name: 'Ram Bilas', type: 'Agricultural Loss', district: 'Supaul', amount: '₹68,000', status: 'REJECTED', filed: 'Sep 5' },
  ];
  const statusColor = (s) => ({ PENDING: 'bg-amber-100 text-amber-700', 'UNDER REVIEW': 'bg-sky-100 text-sky-700', APPROVED: 'bg-emerald-100 text-emerald-700', REJECTED: 'bg-red-100 text-red-700' }[s]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-extrabold text-slate-900">Damage Reports & Compensation Analytics</h2>
        <p className="text-sm text-slate-500">Incoming citizen damage claims • Review, approve & generate government compensation records</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Claims', value: '2,841', sub: '↑ 214 today', icon: 'receipt_long', color: 'text-slate-900 bg-slate-50' },
          { label: 'Total Liability', value: '₹18.4 Cr', sub: 'Estimated payout', icon: 'currency_rupee', color: 'text-purple-700 bg-purple-50' },
          { label: 'Approved', value: '1,204', sub: '₹8.2 Cr disbursed', icon: 'check_circle', color: 'text-emerald-700 bg-emerald-50' },
          { label: 'Pending Review', value: '1,412', sub: 'Requires action', icon: 'pending', color: 'text-amber-700 bg-amber-50' },
        ].map((s) => (
          <div key={s.label} className={`p-4 rounded-2xl border border-slate-100 flex items-center gap-3 ${s.color}`}>
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
            <div>
              <div className="text-xl font-extrabold">{s.value}</div>
              <div className="text-xs font-medium opacity-70">{s.label}</div>
              <div className="text-xs opacity-50 mt-0.5">{s.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* District Breakdown */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
        <h3 className="font-bold text-slate-900 text-sm mb-4">Claims by District & Type</h3>
        <div className="flex flex-col gap-3">
          {[
            { d: 'Supaul', house: 840, agri: 412, vehicle: 88, total: 1340 },
            { d: 'Madhubani', house: 421, agri: 310, vehicle: 42, total: 773 },
            { d: 'Darbhanga', house: 198, agri: 240, vehicle: 31, total: 469 },
            { d: 'Patna', house: 142, agri: 80, vehicle: 24, total: 246 },
          ].map((r) => (
            <div key={r.d} className="flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-900 w-20 shrink-0">{r.d}</span>
              <div className="flex-1 flex gap-1 h-6 rounded-lg overflow-hidden">
                <div className="bg-sky-400 flex items-center justify-center text-white text-xs font-bold" style={{ width: `${(r.house / r.total) * 100}%` }}>{r.house > 100 ? r.house : ''}</div>
                <div className="bg-emerald-400 flex items-center justify-center text-white text-xs font-bold" style={{ width: `${(r.agri / r.total) * 100}%` }}>{r.agri > 100 ? r.agri : ''}</div>
                <div className="bg-amber-400 flex items-center justify-center text-white text-xs font-bold" style={{ width: `${(r.vehicle / r.total) * 100}%` }}></div>
              </div>
              <span className="text-sm font-bold text-slate-700 w-16 text-right shrink-0">{r.total.toLocaleString()}</span>
            </div>
          ))}
          <div className="flex items-center gap-4 mt-1 text-xs font-semibold text-slate-500">
            <span className="w-20 shrink-0"></span>
            <div className="flex gap-4">
              {[['bg-sky-400', 'House'], ['bg-emerald-400', 'Agriculture'], ['bg-amber-400', 'Vehicle']].map(([c, l]) => (
                <span key={l} className="flex items-center gap-1"><span className={`w-2.5 h-2.5 rounded-sm ${c}`} />{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Claims Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-sm">Incoming Claims — Review Queue</h3>
          <button className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors cursor-pointer flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">download</span>Export
          </button>
        </div>
        <div className="divide-y divide-slate-100">
          {claims.map((c) => (
            <div key={c.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <span className="font-bold text-slate-900 text-sm">{c.name}</span>
                  <span className="text-xs font-mono text-slate-400">{c.id}</span>
                </div>
                <p className="text-xs text-slate-500">{c.type} • {c.district} • Filed {c.filed}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-bold text-slate-900 text-sm">{c.amount}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${statusColor(c.status)}`}>{c.status}</span>
                {c.status === 'PENDING' && (
                  <div className="flex gap-1">
                    <button onClick={() => showToast(`${c.id} APPROVED — ₹ disbursement initiated.`, 'success')} className="px-2 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs cursor-pointer transition-colors">Approve</button>
                    <button onClick={() => showToast(`${c.id} sent for field verification.`, 'info')} className="px-2 py-1 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs cursor-pointer transition-colors">Review</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── MAIN PAGE ── */
export default function AdminPage() {
  const { openSos, showToast } = useAuth();
  const [active, setActive] = useState('overview');

  const modules = [
    { id: 'overview', label: 'Overview', icon: 'shield_person' },
    { id: 'heatmap', label: 'Live Heatmap / GIS', icon: 'map' },
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

  const render = () => {
    switch (active) {
      case 'overview': return <OverviewModule setActive={setActive} openSos={openSos} showToast={showToast} />;
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
      <div className="flex">
        {/* Sidebar */}
        <aside className="fixed left-0 top-16 bottom-0 w-60 bg-white border-r border-slate-200 z-30 flex flex-col justify-between py-3 shadow-sm overflow-y-auto">
          <div className="flex flex-col gap-0.5 px-2">
            {/* Portal Header */}
            <div className="px-3 py-3 mb-1 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-700 to-slate-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>shield_person</span>
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">Admin Desk</div>
                  <div className="text-slate-400 font-semibold uppercase tracking-wider" style={{ fontSize: '9px' }}>NDMA · SDMA COMMAND</div>
                </div>
              </div>
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-2" style={{ fontSize: '10px' }}>Command Modules</div>
            {modules.map((m) => {
              const isActive = active === m.id;
              return (
                <button key={m.id} onClick={() => setActive(m.id)} className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left text-sm font-semibold transition-all cursor-pointer ${isActive ? 'bg-gradient-to-r from-purple-700 to-slate-800 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}>
                  <span className={`material-symbols-outlined text-[18px] ${isActive ? 'text-white' : colors[m.id]}`} style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{m.icon}</span>
                  <span className="flex-1">{m.label}</span>
                  {m.dot && !isActive && <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />}
                </button>
              );
            })}

            {/* Incident Box */}
            <div className="mx-2 mt-3 p-3 rounded-xl bg-red-50 border border-red-200">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider" style={{ fontSize: '10px' }}>Active Incident</span>
              </div>
              <div className="font-bold text-slate-900 text-xs">IN-2024-F09</div>
              <div className="text-xs text-slate-500 mt-0.5">Bihar Flood — L3 Response</div>
              <div className="flex justify-between text-xs mt-2">
                <span className="text-red-600 font-bold">RED ALERT</span>
                <span className="text-slate-400">72hr active</span>
              </div>
            </div>
          </div>

          {/* Bottom CAP Button */}
          <div className="px-3 pb-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button onClick={() => setActive('broadcast')} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md cursor-pointer transition-all">
              <span className="material-symbols-outlined text-[16px] animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>cell_tower</span>
              CAP Broadcast
            </button>
            <button onClick={() => showToast('Koshi Barrage: Gates 12-28 opened to 6.2m.', 'warning')} className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs cursor-pointer transition-all">
              <span className="material-symbols-outlined text-[14px]">valve</span>
              Gate Telemetry
            </button>
          </div>
        </aside>

        {/* Content */}
        <main className="ml-60 flex-1 min-h-[calc(100vh-64px)] p-6 lg:p-8">
          <div className="max-w-5xl mx-auto">{render()}</div>
        </main>
      </div>
    </div>
  );
}
