const fs = require('fs');

function extractMain(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const m = html.match(/<main[^>]*>([\s\S]*)<\/main>/i);
  return m ? m[1] : '';
}

const raw = fs.readFileSync('/Users/saga16/Desktop/Sachet/scratch/responder_raw.html', 'utf8');
let body = raw.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];

// Clean out script tags
body = body.replace(/<script[\s\S]*?<\/script>/gi, '');

// Extract sub-screen mains
const campsContent = extractMain('/Users/saga16/Desktop/Sachet/scratch/responder_camps_raw.html');
const dispatchContent = extractMain('/Users/saga16/Desktop/Sachet/scratch/responder_dispatch_raw.html');
const inventoryContent = extractMain('/Users/saga16/Desktop/Sachet/scratch/responder_inventory_raw.html');
const reuniteContent = extractMain('/Users/saga16/Desktop/Sachet/scratch/responder_reunite_raw.html');

// Enhanced Header
const newHeader = `
<header class="fixed top-0 left-0 right-0 h-16 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm">
  <div class="h-16 w-full px-gutter-desktop flex items-center justify-between">
    <div class="flex items-center gap-space-sm">
      <a href="#/" class="flex items-center gap-2 hover:opacity-90 transition-opacity">
        <img alt="Sachet Logo" class="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1UTJm79yxpbIABqzRjDtIkwtCnKmRMt58ssFi8rRpUdhMk0SpB2wP1UIPF0XVKi37jzz0mAzOJSBmieQeyVGBg5M6ZFa01i6Wdyan0tR_N_bo5t5raIBxUC7xtrW7heUwGDvCc112BVTFg7DnssB6C2c4SBU3IztEX0XkGut6e-c_9xGCoTCWzZGlZZBnq9Y-aoMaiIAQH34ClPO227JgWSTF27716AdAxemMPRL4dEUsMdZvajnuiaZ9_7">
        <div class="flex items-center gap-space-xs">
          <span class="font-headline-sm text-lg font-extrabold tracking-tight text-slate-900">Sachet</span>
          <span class="px-space-xs py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-primary font-label-sm text-[11px] font-bold uppercase tracking-wider">VOLUNTEER OPS</span>
        </div>
      </a>
    </div>

    <!-- Navigation Hub -->
    <nav class="hidden md:flex items-center gap-1.5 p-1 bg-slate-100 rounded-full border border-slate-200">
      <a href="#/" class="flex items-center gap-2 px-3.5 py-1 rounded-full text-slate-600 hover:text-slate-900 font-label-md text-xs font-semibold transition-colors">
        <span class="material-symbols-outlined text-base">home</span>
        <span>Overview</span>
      </a>
      <a href="#/citizen" class="flex items-center gap-2 px-3.5 py-1 rounded-full text-slate-600 hover:text-indigo-700 font-label-md text-xs font-semibold transition-colors">
        <span class="material-symbols-outlined text-base">person</span>
        <span>Citizen Portal</span>
      </a>
      <a href="#/responder" class="flex items-center gap-2 px-4 py-1 rounded-full bg-white text-primary font-label-md text-xs font-bold shadow-sm transition-all">
        <span class="material-symbols-outlined text-base">emergency</span>
        <span>Responder Hub</span>
      </a>
      <a href="#/admin" class="flex items-center gap-2 px-3.5 py-1 rounded-full text-slate-600 hover:text-indigo-700 font-label-md text-xs font-semibold transition-colors">
        <span class="material-symbols-outlined text-base">shield_person</span>
        <span>Admin Desk</span>
      </a>
    </nav>

    <!-- Right Controls -->
    <div class="flex items-center gap-space-md">
      <button onclick="SachetRouter.triggerSOS()" class="px-space-md h-9 rounded-lg bg-red-600 hover:bg-red-700 text-white font-label-md text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-[0_2px_8px_rgba(220,38,38,0.25)] cursor-pointer">
        <span class="material-symbols-outlined text-[16px]">sos</span>
        <span>SOS TRIGGER</span>
      </button>

      <div class="flex items-center gap-2 pl-2 border-l border-slate-200">
        <img alt="Officer Profile" class="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500 shadow-sm" src="https://lh3.googleusercontent.com/aida/AEtjO1VHZJSGcrRY3Gbs3U4BwLL6_ZO3NQTZuFN6aDCtIpwhcH2NcEJr0pBxXd9T8q7K7HET2f9CGGgUWAM8os5Adr-GT4Y22SBKYQu5yXOkUmtZ6dyMV1bbZ71rvUh__IUEzdYp56_hgXZXlQtE5cBG2XI3l_3kA7bDPrZBZbCB2zd8CpEpjAI7aN22aIno46BacVyl7P7Lle8vDBvLfwjkaGAo-x3NEayyNpokt270EXhWqPdKmNE8cangDul1">
        <div class="hidden sm:flex flex-col text-left">
          <span class="text-xs font-bold text-slate-800" id="responder-user-name">Rajesh Kumar</span>
          <span class="text-[10px] text-indigo-600 font-medium">NDRF Squad Lead (Unit 9)</span>
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

// Enhanced Sidebar with Tab Switching
const newSidebar = `
<aside class="fixed left-0 top-16 bottom-0 w-64 bg-surface-container-lowest z-40 flex flex-col justify-between p-space-md shadow-[1px_0_8px_rgba(0,0,0,0.02)] border-r border-slate-200/80">
  <nav class="flex flex-col gap-1">
    <button onclick="window.ResponderPage.switchTab('overview')" id="resp-tab-btn-overview" class="resp-tab-btn flex items-center gap-space-sm px-space-md py-2.5 rounded-xl bg-primary text-white font-title-md text-sm transition-colors text-left w-full cursor-pointer">
      <span class="material-symbols-outlined text-[20px]">grid_view</span>
      <span>Overview</span>
    </button>
    <button onclick="window.ResponderPage.switchTab('camps')" id="resp-tab-btn-camps" class="resp-tab-btn flex items-center gap-space-sm px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-title-md text-sm transition-colors text-left w-full cursor-pointer">
      <span class="material-symbols-outlined text-[20px]">holiday_village</span>
      <span>Camps & Shelters</span>
    </button>
    <button onclick="window.ResponderPage.switchTab('dispatch')" id="resp-tab-btn-dispatch" class="resp-tab-btn flex items-center gap-space-sm px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-title-md text-sm transition-colors text-left w-full cursor-pointer">
      <span class="material-symbols-outlined text-[20px]">assignment_turned_in</span>
      <span>Squad Dispatch</span>
    </button>
    <button onclick="window.ResponderPage.switchTab('inventory')" id="resp-tab-btn-inventory" class="resp-tab-btn flex items-center gap-space-sm px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-title-md text-sm transition-colors text-left w-full cursor-pointer">
      <span class="material-symbols-outlined text-[20px]">medical_services</span>
      <span>Relief Inventory</span>
    </button>
    <button onclick="window.ResponderPage.switchTab('reunite')" id="resp-tab-btn-reunite" class="resp-tab-btn flex items-center gap-space-sm px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-title-md text-sm transition-colors text-left w-full cursor-pointer">
      <span class="material-symbols-outlined text-[20px]">family_restroom</span>
      <span>Kin Reunite</span>
    </button>
  </nav>

  <div class="flex flex-col gap-space-md">
    <button onclick="SachetRouter.triggerSOS()" class="w-full flex items-center justify-center gap-2 py-2.5 px-space-md rounded-xl bg-red-100 text-red-700 hover:bg-red-600 hover:text-white transition-all font-label-md text-xs font-bold uppercase tracking-wider cursor-pointer">
      <span class="material-symbols-outlined text-[18px] animate-pulse">e911_emergency</span>
      <span>Distress Beacon</span>
    </button>
    <div class="flex items-center justify-between px-space-xs py-space-xs border-t border-surface-container-high pt-space-sm">
      <div class="flex items-center gap-2">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
        </span>
        <span class="font-label-sm text-[11px] tracking-wider text-slate-500 uppercase font-semibold">OPS GRID • LIVE</span>
      </div>
      <span class="material-symbols-outlined text-slate-400 text-[16px]">wifi_tethering</span>
    </div>
  </div>
</aside>
`;

body = body.replace(/<aside[\s\S]*?<\/aside>/i, newSidebar);

// Replace the main area with tabs wrapper
const originalMain = body.match(/<div class="pl-64">[\s\S]*?<\/main>\s*<\/div>/i);

const tabsWrapper = `
<div class="pl-64">
  <div id="resp-view-overview" class="resp-view">
    ${originalMain ? originalMain[0].replace('<div class="pl-64">', '').replace(/<\/div>$/, '') : ''}
  </div>
  <div id="resp-view-camps" class="resp-view hidden">
    <main class="relative w-full pt-16 bg-background min-h-screen px-gutter-desktop py-space-xl">
      ${campsContent}
    </main>
  </div>
  <div id="resp-view-dispatch" class="resp-view hidden">
    <main class="relative w-full pt-16 bg-background min-h-screen px-gutter-desktop py-space-xl">
      ${dispatchContent}
    </main>
  </div>
  <div id="resp-view-inventory" class="resp-view hidden">
    <main class="relative w-full pt-16 bg-background min-h-screen px-gutter-desktop py-space-xl">
      ${inventoryContent}
    </main>
  </div>
  <div id="resp-view-reunite" class="resp-view hidden">
    <main class="relative w-full pt-16 bg-background min-h-screen px-gutter-desktop py-space-xl">
      ${reuniteContent}
    </main>
  </div>
</div>
`;

if (originalMain) {
  body = body.replace(originalMain[0], tabsWrapper);
}

const responderModuleCode = `// ================================================
// Sachet Volunteer Operations & Field Hub Module
// ================================================

window.ResponderPage = {
  currentTab: 'overview',

  render: function() {
    const auth = SachetRouter.getAuthState();
    const container = document.createElement("div");
    container.className = "page-enter";
    container.innerHTML = ${JSON.stringify(body)};

    const nameEl = container.querySelector("#responder-user-name");
    if (nameEl && auth.name) {
      nameEl.textContent = auth.name;
    }

    return container;
  },

  switchTab: function(tabId) {
    this.currentTab = tabId;
    const views = ['overview', 'camps', 'dispatch', 'inventory', 'reunite'];

    views.forEach(v => {
      const viewEl = document.getElementById('resp-view-' + v);
      const btnEl = document.getElementById('resp-tab-btn-' + v);

      if (viewEl) {
        if (v === tabId) {
          viewEl.classList.remove('hidden');
        } else {
          viewEl.classList.add('hidden');
        }
      }

      if (btnEl) {
        if (v === tabId) {
          btnEl.className = 'resp-tab-btn flex items-center gap-space-sm px-space-md py-2.5 rounded-xl bg-primary text-white font-title-md text-sm transition-colors text-left w-full cursor-pointer';
        } else {
          btnEl.className = 'resp-tab-btn flex items-center gap-space-sm px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-title-md text-sm transition-colors text-left w-full cursor-pointer';
        }
      }
    });

    window.scrollTo(0, 0);
  }
};
`;

fs.writeFileSync('/Users/saga16/Desktop/Sachet/pages/responder.js', responderModuleCode, 'utf8');
console.log('Successfully wrote /Users/saga16/Desktop/Sachet/pages/responder.js');
