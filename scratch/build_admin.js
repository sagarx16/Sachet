const fs = require('fs');

const raw = fs.readFileSync('/Users/saga16/Desktop/Sachet/scratch/admin_raw.html', 'utf8');
let body = raw.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];

// Clean script tags
body = body.replace(/<script[\s\S]*?<\/script>/gi, '');

// Enhanced Header
const newHeader = `
<header class="fixed top-0 left-0 right-0 z-50 h-20 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm">
  <div class="h-full w-full px-8 flex items-center justify-between gap-6">
    <div class="flex items-center gap-8">
      <a href="#/" class="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
        <img alt="Sachet Emblem" class="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1UTJm79yxpbIABqzRjDtIkwtCnKmRMt58ssFi8rRpUdhMk0SpB2wP1UIPF0XVKi37jzz0mAzOJSBmieQeyVGBg5M6ZFa01i6Wdyan0tR_N_bo5t5raIBxUC7xtrW7heUwGDvCc112BVTFg7DnssB6C2c4SBU3IztEX0XkGut6e-c_9xGCoTCWzZGlZZBnq9Y-aoMaiIAQH34ClPO227JgWSTF27716AdAxemMPRL4dEUsMdZvajnuiaZ9_7">
        <div class="flex flex-col">
          <div class="flex items-center gap-1.5">
            <span class="font-headline-sm text-lg font-bold text-slate-900 tracking-tight">Sachet</span>
            <span class="font-headline-sm text-lg font-bold text-indigo-700 tracking-tight">| सचेत</span>
          </div>
          <span class="font-mono text-[10px] text-sky-700 font-semibold uppercase tracking-widest">IN-NP Disaster Grid</span>
        </div>
      </a>

      <!-- Navigation Links -->
      <nav class="hidden md:flex items-center gap-1.5 p-1 bg-slate-100 rounded-full border border-slate-200">
        <a href="#/" class="flex items-center gap-2 px-3.5 py-1 rounded-full text-slate-600 hover:text-slate-900 font-label-md text-xs font-semibold transition-colors">
          <span class="material-symbols-outlined text-base">home</span>
          <span>Overview</span>
        </a>
        <a href="#/citizen" class="flex items-center gap-2 px-3.5 py-1 rounded-full text-slate-600 hover:text-indigo-700 font-label-md text-xs font-semibold transition-colors">
          <span class="material-symbols-outlined text-base">person</span>
          <span>Citizen Portal</span>
        </a>
        <a href="#/responder" class="flex items-center gap-2 px-3.5 py-1 rounded-full text-slate-600 hover:text-indigo-700 font-label-md text-xs font-semibold transition-colors">
          <span class="material-symbols-outlined text-base">emergency</span>
          <span>Responder Hub</span>
        </a>
        <a href="#/admin" class="flex items-center gap-2 px-4 py-1 rounded-full bg-white text-indigo-700 font-label-md text-xs font-bold shadow-sm transition-all">
          <span class="material-symbols-outlined text-base">shield_person</span>
          <span>Command Desk</span>
        </a>
      </nav>
    </div>

    <div class="flex items-center gap-4">
      <div class="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200">
        <span class="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
        <span class="font-mono text-[11px] text-red-700 font-bold uppercase tracking-wider">Level 4 Critical Alert</span>
      </div>

      <button onclick="SachetRouter.triggerSOS()" class="relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-600 text-white font-label-md text-xs font-bold shadow-sm hover:bg-red-700 transition-all active:scale-95 cursor-pointer">
        <span class="w-2 h-2 rounded-full bg-white animate-ping"></span>
        <span>SOS</span>
      </button>

      <!-- Profile Container -->
      <div class="flex items-center gap-2 pl-3 border-l border-slate-200">
        <img alt="Commander" class="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500/30" src="https://lh3.googleusercontent.com/aida/AEtjO1Vz_b4eAwEmdiLYNOtONVqMlRzM3lhCucsWT60Urz8PH1-SqQp9nsVxgpOTjq9B-RPsuDu7oOncCsPXsobbqCDOfu12Vjx5awhjKgHgDRSFm6-EQthIverQiHpfOK2PKENt90v98smrbY4YAgavLhGXylPePxexveZt5AUQ5kq3lXjn6GkmXB9c62OfHpeoi68YRpdd_24ogSlmpBxoT6A4SDu8ojVo5QFF3jxXQK17Ls7KpkoTW5RhwJqg">
        <div class="hidden sm:flex flex-col text-left">
          <span class="text-xs font-bold text-slate-900 leading-tight" id="admin-user-name">Director V. K. Singh</span>
          <span class="font-mono text-[10px] text-indigo-600 leading-tight font-semibold">Govt Command Desk</span>
        </div>
        <button onclick="SachetRouter.logout()" class="ml-1 p-1 text-slate-400 hover:text-red-600 transition-colors" title="Log Out">
          <span class="material-symbols-outlined text-[18px]">logout</span>
        </button>
      </div>
    </div>
  </div>
</header>
`;

body = body.replace(/<header[\s\S]*?<\/header>/i, newHeader);

// Wire SOS triggers
body = body.replace(/data-path="sos-center"/gi, 'onclick="SachetRouter.triggerSOS()"');

// Interactive gate protocol and broadcast actions
const broadcastModal = `
<!-- CAP Broadcast Modal -->
<div id="cap-broadcast-modal" class="hidden fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
  <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100">
    <div class="flex items-center justify-between pb-4 border-b border-slate-100">
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined text-red-600 text-[24px]">campaign</span>
        <h3 class="font-bold text-lg text-slate-800">Transmit National CAP Emergency Broadcast</h3>
      </div>
      <button onclick="window.AdminPage.closeBroadcastModal()" class="text-slate-400 hover:text-slate-600">
        <span class="material-symbols-outlined text-[20px]">close</span>
      </button>
    </div>
    <div class="mt-4 space-y-3 text-sm">
      <div class="p-3 bg-red-50 border border-red-200 rounded-xl text-red-800 text-xs">
        <strong>CRITICAL TARGETING:</strong> Cross-Border Koshi & Gandak Corridors (4.2M cell towers, FM transmitters, SMS gateways).
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Alert Severity</label>
        <select class="w-full text-sm rounded-xl border-slate-300">
          <option>RED ALERT (Immediate Evacuation Order)</option>
          <option>ORANGE ALERT (Standby & Secure Livestock)</option>
          <option>YELLOW WATCH (River Swell Approaching Warning)</option>
        </select>
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 uppercase mb-1">CAP Alert Message (Bilingual)</label>
        <textarea rows="3" class="w-full text-sm rounded-xl border-slate-300" readonly>RED ALERT: Koshi Barrage discharge will exceed 420,000 cusecs at 19:00 hrs. Evacuate low-lying sectors of Supaul, Saharsa, and Sunsari immediately. Move to nearest designated safe camp.</textarea>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 mt-4">
      <button type="button" onclick="window.AdminPage.closeBroadcastModal()" class="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl">Cancel</button>
      <button type="button" onclick="window.AdminPage.sendBroadcast()" class="px-5 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-md flex items-center gap-1.5">
        <span class="material-symbols-outlined text-[18px]">cell_tower</span>
        <span>Broadcast Immediately</span>
      </button>
    </div>
  </div>
</div>
`;

body = body + '\n' + broadcastModal;

// Wire buttons in top action ribbon
body = body.replace(/Discharge Gate Controls/gi, '<span onclick="window.AdminPage.toggleGateSimulation()">Discharge Gate Controls</span>');
body = body.replace(/National Alert Broadcast/gi, '<span onclick="window.AdminPage.openBroadcastModal()">National Alert Broadcast</span>');

const adminModuleCode = `// ================================================
// Sachet Government Admin Command Desk Module
// ================================================

window.AdminPage = {
  render: function() {
    const auth = SachetRouter.getAuthState();
    const container = document.createElement("div");
    container.className = "page-enter";
    container.innerHTML = ${JSON.stringify(body)};

    const nameEl = container.querySelector("#admin-user-name");
    if (nameEl && auth.name) {
      nameEl.textContent = auth.name;
    }

    return container;
  },

  openBroadcastModal: function() {
    const m = document.getElementById("cap-broadcast-modal");
    if (m) m.classList.remove("hidden");
  },

  closeBroadcastModal: function() {
    const m = document.getElementById("cap-broadcast-modal");
    if (m) m.classList.add("hidden");
  },

  sendBroadcast: function() {
    this.closeBroadcastModal();
    SachetRouter.showToast("CAP Broadcast transmitted to 4.2M citizens across Bihar & Nepal border corridors!", "success");
  },

  toggleGateSimulation: function() {
    SachetRouter.showToast("Koshi Barrage: Gates 12 to 28 opened to 6.2m. Flow rate increased to 385,000 cusecs.", "warning");
  }
};
`;

fs.writeFileSync('/Users/saga16/Desktop/Sachet/pages/admin.js', adminModuleCode, 'utf8');
console.log('Successfully wrote /Users/saga16/Desktop/Sachet/pages/admin.js');
