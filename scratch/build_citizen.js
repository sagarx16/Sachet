const fs = require('fs');

const raw = fs.readFileSync('/Users/saga16/Desktop/Sachet/scratch/citizen_raw.html', 'utf8');
let body = raw.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];

// Clean script tags
body = body.replace(/<script[\s\S]*?<\/script>/gi, '');

// Enhanced Header
const newHeader = `
<header class="fixed top-0 left-0 right-0 z-50 h-20 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
  <div class="h-full w-full px-layout-margin-desktop flex items-center justify-between gap-space-lg">
    <div class="flex items-center gap-space-xl">
      <a href="#/" class="flex items-center gap-space-sm hover:opacity-90 transition-opacity">
        <img alt="JalRaksha Emblem" class="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1UTJm79yxpbIABqzRjDtIkwtCnKmRMt58ssFi8rRpUdhMk0SpB2wP1UIPF0XVKi37jzz0mAzOJSBmieQeyVGBg5M6ZFa01i6Wdyan0tR_N_bo5t5raIBxUC7xtrW7heUwGDvCc112BVTFg7DnssB6C2c4SBU3IztEX0XkGut6e-c_9xGCoTCWzZGlZZBnq9Y-aoMaiIAQH34ClPO227JgWSTF27716AdAxemMPRL4dEUsMdZvajnuiaZ9_7">
        <div class="flex flex-col">
          <div class="flex items-center gap-space-xs">
            <span class="font-headline-sm text-headline-sm text-slate-900 tracking-tight font-bold">JalRaksha</span>
            <span class="font-headline-sm text-headline-sm text-indigo-700 tracking-tight font-bold">| जलरक्षा</span>
          </div>
          <span class="font-label-xs-mono text-label-xs-mono text-sky-700 uppercase tracking-widest font-semibold">IN-NP Disaster Grid</span>
        </div>
      </a>
    </div>

    <!-- Navigation -->
    <nav class="hidden md:flex items-center gap-1.5 p-1 bg-slate-100 rounded-full border border-slate-200">
      <a href="#/" class="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-slate-600 hover:text-slate-900 font-label-md text-xs font-semibold transition-colors">
        <span class="material-symbols-outlined text-base">home</span>
        <span>Overview</span>
      </a>
      <a href="#/citizen" class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-indigo-700 font-label-md text-xs font-bold shadow-sm transition-all">
        <span class="material-symbols-outlined text-base">person_pin_circle</span>
        <span>Citizen Dashboard</span>
      </a>
      <a href="#/responder" class="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-slate-600 hover:text-indigo-700 font-label-md text-xs font-semibold transition-colors">
        <span class="material-symbols-outlined text-base">emergency</span>
        <span>Responder Hub</span>
      </a>
      <a href="#/admin" class="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-slate-600 hover:text-indigo-700 font-label-md text-xs font-semibold transition-colors">
        <span class="material-symbols-outlined text-base">shield_person</span>
        <span>Admin Desk</span>
      </a>
    </nav>

    <!-- Right Cluster -->
    <div class="flex items-center gap-space-md">
      <!-- SOS Button -->
      <button onclick="SachetRouter.triggerSOS()" class="relative inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-lg bg-red-600 text-white font-label-md text-xs font-bold shadow-[0_4px_14px_rgba(220,38,38,0.35)] hover:bg-red-700 transition-all active:scale-95 cursor-pointer">
        <span class="w-2 h-2 rounded-full bg-white animate-ping"></span>
        <span>SOS 24/7</span>
      </button>

      <!-- Auth State Container -->
      <div id="citizen-auth-state" class="flex items-center gap-2 pl-2 border-l border-slate-200">
        <div class="flex items-center gap-2">
          <img alt="User Profile" class="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500 shadow-sm" src="https://lh3.googleusercontent.com/aida/AEtjO1Vz_b4eAwEmdiLYNOtONVqMlRzM3lhCucsWT60Urz8PH1-SqQp9nsVxgpOTjq9B-RPsuDu7oOncCsPXsobbqCDOfu12Vjx5awhjKgHgDRSFm6-EQthIverQiHpfOK2PKENt90v98smrbY4YAgavLhGXylPePxexveZt5AUQ5kq3lXjn6GkmXB9c62OfHpeoi68YRpdd_24ogSlmpBxoT6A4SDu8ojVo5QFF3jxXQK17Ls7KpkoTW5RhwJqg">
          <div class="hidden sm:flex flex-col text-left">
            <span class="text-xs font-bold text-slate-800" id="citizen-user-name">Aarav Sharma</span>
            <span class="text-[10px] text-indigo-600 font-medium">Citizen (Bihar Sec-4)</span>
          </div>
          <button onclick="SachetRouter.logout()" class="ml-1 p-1 text-slate-400 hover:text-red-600 transition-colors" title="Log Out">
            <span class="material-symbols-outlined text-[18px]">logout</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
`;

body = body.replace(/<header[\s\S]*?<\/header>/i, newHeader);

// Wire SOS button click on the giant SOS concentric card
body = body.replace(/data-path="sos-center"/gi, 'onclick="SachetRouter.triggerSOS()"');
body = body.replace(/href="#sos-direct"/gi, 'href="javascript:void(0)" onclick="SachetRouter.triggerSOS()"');

// Make helpline cards dialable or show toast
body = body.replace(/href="tel:1078"/gi, 'href="javascript:void(0)" onclick="window.CitizenPage.callHelpline(\'1078 - NDRF National Disaster Response\')"');
body = body.replace(/href="tel:1070"/gi, 'href="javascript:void(0)" onclick="window.CitizenPage.callHelpline(\'1070 - Bihar State Disaster Management\')"');
body = body.replace(/href="tel:1149"/gi, 'href="javascript:void(0)" onclick="window.CitizenPage.callHelpline(\'1149 - Nepal Armed Police Force\')"');
body = body.replace(/href="tel:112"/gi, 'href="javascript:void(0)" onclick="window.CitizenPage.callHelpline(\'112 - National Emergency Response\')"');

// Add interactive damage reporting modal / trigger
const damageReportModal = `
<!-- Incident Reporting Modal -->
<div id="damage-report-modal" class="hidden fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
  <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100">
    <div class="flex items-center justify-between pb-4 border-b border-slate-100">
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined text-indigo-600 text-[24px]">report_problem</span>
        <h3 class="font-bold text-lg text-slate-800">Submit Flood Incident / SOS Report</h3>
      </div>
      <button onclick="window.CitizenPage.closeReportModal()" class="text-slate-400 hover:text-slate-600">
        <span class="material-symbols-outlined text-[20px]">close</span>
      </button>
    </div>
    <form onsubmit="window.CitizenPage.submitDamageReport(event)" class="mt-4 space-y-4">
      <div>
        <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Incident Category</label>
        <select id="report-type" class="w-full text-sm rounded-xl border-slate-300 focus:border-indigo-600 focus:ring-indigo-600">
          <option value="waterlogging">Severe Waterlogging / Road Inundated</option>
          <option value="trapped">People Trapped / Require Boat Evacuation</option>
          <option value="dyke">Embankment / Dyke Seepage or Breach</option>
          <option value="medical">Medical Emergency in Flood Zone</option>
        </select>
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Location / Landmark</label>
        <input id="report-location" type="text" value="Supaul Sector 4, near NH-57 overbridge" class="w-full text-sm rounded-xl border-slate-300 focus:border-indigo-600 focus:ring-indigo-600" required />
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Estimated Water Depth (Feet)</label>
        <input id="report-depth" type="number" min="1" max="25" value="4.5" step="0.5" class="w-full text-sm rounded-xl border-slate-300 focus:border-indigo-600 focus:ring-indigo-600" required />
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Urgent Description</label>
        <textarea id="report-desc" rows="3" class="w-full text-sm rounded-xl border-slate-300 focus:border-indigo-600 focus:ring-indigo-600" placeholder="Number of family members, elderly/children, power cuts..."></textarea>
      </div>
      <div class="flex items-center justify-end gap-3 pt-2">
        <button type="button" onclick="window.CitizenPage.closeReportModal()" class="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl">Cancel</button>
        <button type="submit" class="px-5 py-2 text-sm font-bold text-white bg-indigo-700 hover:bg-indigo-800 rounded-xl shadow-md">Dispatch to NDRF Hub</button>
      </div>
    </form>
  </div>
</div>
`;

body = body + '\n' + damageReportModal;

const citizenModuleCode = `// ================================================
// Sachet Citizen Dashboard Module
// ================================================

window.CitizenPage = {
  render: function() {
    const auth = SachetRouter.getAuthState();
    const container = document.createElement("div");
    container.className = "page-enter";
    container.innerHTML = ${JSON.stringify(body)};

    // Update user info
    const nameEl = container.querySelector("#citizen-user-name");
    if (nameEl && auth.name) {
      nameEl.textContent = auth.name;
    }

    return container;
  },

  callHelpline: function(line) {
    SachetRouter.showToast("Connecting to " + line + "...", "info");
  },

  openReportModal: function() {
    const m = document.getElementById("damage-report-modal");
    if (m) m.classList.remove("hidden");
  },

  closeReportModal: function() {
    const m = document.getElementById("damage-report-modal");
    if (m) m.classList.add("hidden");
  },

  submitDamageReport: function(e) {
    e.preventDefault();
    const type = document.getElementById("report-type").value;
    const loc = document.getElementById("report-location").value;
    this.closeReportModal();
    SachetRouter.showToast("Incident report logged successfully! Forwarded to NDRF Squad 9.", "success");
  },

  navigateShelter: function(name) {
    SachetRouter.showToast("Displaying GPS evacuation route to: " + name, "info");
  }
};
`;

fs.writeFileSync('/Users/saga16/Desktop/Sachet/pages/citizen.js', citizenModuleCode, 'utf8');
console.log('Successfully wrote /Users/saga16/Desktop/Sachet/pages/citizen.js');
