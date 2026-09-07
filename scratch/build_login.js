const fs = require('fs');

const raw = fs.readFileSync('/Users/saga16/Desktop/Sachet/scratch/login_raw.html', 'utf8');
let body = raw.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];

// Clean out existing inline script tags
body = body.replace(/<script[\s\S]*?<\/script>/gi, '');

// Add top nav bar with Back to Home & live uplink
const topBar = `
  <div class="w-full max-w-xl flex items-center justify-between mb-4 px-2">
    <a href="#/" class="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
      <span class="material-symbols-outlined text-[18px]">arrow_back</span>
      <span>Back to Overview</span>
    </a>
    <div class="flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      <span class="text-xs font-mono text-slate-500 uppercase">SAT-UPLINK ACTIVE</span>
    </div>
  </div>
`;
body = body.replace(/<div class="relative w-full max-w-xl">/i, topBar + '\n<div class="relative w-full max-w-xl">');

// 3-way Role Selector (Citizen, Responder, Admin)
const enhancedRoleSelector = `
<!-- ROLE SELECTOR: Citizen vs Field Responder vs Admin -->
<div class="mb-space-xl">
  <div class="flex items-center justify-between mb-space-xs">
    <label class="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant flex items-center gap-1">
      <span class="material-symbols-outlined text-[16px] text-secondary">badge</span>
      Select Operational Profile
    </label>
    <span class="font-label-sm text-label-sm text-secondary flex items-center gap-0.5">
      <span class="material-symbols-outlined text-[14px]">touch_app</span> Required
    </span>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
    <!-- Role 1: Citizen -->
    <div class="cursor-pointer relative rounded-xl p-3 bg-surface-container-low transition-all duration-200 shadow-sm flex flex-col justify-between border-2 border-primary" id="role-card-citizen" onclick="window.LoginPage.selectRole('citizen')">
      <div class="flex items-start justify-between mb-2">
        <div class="w-8 h-8 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center shadow-sm">
          <span class="material-symbols-outlined text-[20px]">home_pin</span>
        </div>
        <div class="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-on-primary" id="radio-citizen">
          <span class="material-symbols-outlined text-[14px]">check</span>
        </div>
      </div>
      <div>
        <div class="font-bold text-sm text-on-surface">Citizen</div>
        <p class="text-[11px] text-on-surface-variant mt-0.5 leading-tight">
          Alerts, shelters & family SOS beacon.
        </p>
      </div>
    </div>

    <!-- Role 2: Responder -->
    <div class="cursor-pointer relative rounded-xl p-3 bg-surface-container-lowest transition-all duration-200 shadow-sm flex flex-col justify-between opacity-80 hover:opacity-100 border border-slate-200" id="role-card-responder" onclick="window.LoginPage.selectRole('responder')">
      <div class="flex items-start justify-between mb-2">
        <div class="w-8 h-8 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center shadow-sm">
          <span class="material-symbols-outlined text-[20px]">emergency</span>
        </div>
        <div class="w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center text-transparent" id="radio-responder">
          <span class="material-symbols-outlined text-[14px]">check</span>
        </div>
      </div>
      <div>
        <div class="font-bold text-sm text-on-surface">Responder</div>
        <p class="text-[11px] text-on-surface-variant mt-0.5 leading-tight">
          Camps, squad dispatch & relief aid.
        </p>
      </div>
    </div>

    <!-- Role 3: Admin -->
    <div class="cursor-pointer relative rounded-xl p-3 bg-surface-container-lowest transition-all duration-200 shadow-sm flex flex-col justify-between opacity-80 hover:opacity-100 border border-slate-200" id="role-card-admin" onclick="window.LoginPage.selectRole('admin')">
      <div class="flex items-start justify-between mb-2">
        <div class="w-8 h-8 rounded-lg bg-surface-container-high text-purple-700 flex items-center justify-center shadow-sm">
          <span class="material-symbols-outlined text-[20px]">shield_person</span>
        </div>
        <div class="w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center text-transparent" id="radio-admin">
          <span class="material-symbols-outlined text-[14px]">check</span>
        </div>
      </div>
      <div>
        <div class="font-bold text-sm text-on-surface">Admin Desk</div>
        <p class="text-[11px] text-on-surface-variant mt-0.5 leading-tight">
          Gate release, CAP grid & national oversight.
        </p>
      </div>
    </div>
  </div>
</div>
`;

body = body.replace(/<!-- ROLE SELECTOR: Citizen vs Field Responder -->[\s\S]*?<!-- Auth Method Switcher/i, enhancedRoleSelector + '\n<!-- Auth Method Switcher');

// Wire up event handlers
body = body.replace(/onsubmit="handleAuthSubmit\(event\)"/gi, 'onsubmit="window.LoginPage.handleSubmit(event)"');
body = body.replace(/onclick="switchAuthTab\('login'\)"/gi, 'onclick="window.LoginPage.switchAuthTab(\'login\')"');
body = body.replace(/onclick="switchAuthTab\('signup'\)"/gi, 'onclick="window.LoginPage.switchAuthTab(\'signup\')"');
body = body.replace(/onclick="switchMethod\('otp'\)"/gi, 'onclick="window.LoginPage.switchMethod(\'otp\')"');
body = body.replace(/onclick="switchMethod\('pwd'\)"/gi, 'onclick="window.LoginPage.switchMethod(\'pwd\')"');
body = body.replace(/onclick="resendOtp\(\)"/gi, 'onclick="window.LoginPage.resendOtp()"');
body = body.replace(/onclick="togglePasswordVisibility\(\)"/gi, 'onclick="window.LoginPage.togglePasswordVisibility()"');
body = body.replace(/href="#sos-direct"/gi, 'href="javascript:void(0)" onclick="SachetRouter.triggerSOS()"');

// Instant 1-Click Demo Buttons
const quickDemoButtons = `
  <div class="mt-4 pt-4 border-t border-slate-100">
    <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider text-center mb-2">⚡ 1-Click Instant Demo Access</div>
    <div class="grid grid-cols-3 gap-2">
      <button type="button" onclick="window.LoginPage.quickLogin('citizen')" class="px-2 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors text-center cursor-pointer">
        Citizen Portal
      </button>
      <button type="button" onclick="window.LoginPage.quickLogin('responder')" class="px-2 py-1.5 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors text-center cursor-pointer">
        Responder Hub
      </button>
      <button type="button" onclick="window.LoginPage.quickLogin('admin')" class="px-2 py-1.5 text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-center cursor-pointer">
        Govt Admin
      </button>
    </div>
  </div>
`;

body = body.replace(/<\/form>/i, quickDemoButtons + '\n</form>');

const loginModuleCode = `// ================================================
// Sachet Login / Signup & Role Gateway Module
// ================================================

window.LoginPage = {
  activeRole: 'citizen',
  activeMethod: 'otp',
  activeTab: 'login',

  render: function() {
    const params = SachetRouter.getQueryParams();
    if (params.role && ['citizen', 'responder', 'admin'].includes(params.role)) {
      this.activeRole = params.role;
    }

    const container = document.createElement("div");
    container.className = "page-enter";
    container.innerHTML = ${JSON.stringify(body)};

    setTimeout(() => {
      this.initOtpHandlers();
      this.selectRole(this.activeRole);
    }, 50);

    return container;
  },

  selectRole: function(role) {
    this.activeRole = role;
    const cards = {
      citizen: document.getElementById('role-card-citizen'),
      responder: document.getElementById('role-card-responder'),
      admin: document.getElementById('role-card-admin')
    };
    const radios = {
      citizen: document.getElementById('radio-citizen'),
      responder: document.getElementById('radio-responder'),
      admin: document.getElementById('radio-admin')
    };

    const colors = {
      citizen: 'border-primary',
      responder: 'border-secondary',
      admin: 'border-purple-600'
    };

    ['citizen', 'responder', 'admin'].forEach(r => {
      const card = cards[r];
      const radio = radios[r];
      if (!card || !radio) return;

      if (r === role) {
        card.className = 'cursor-pointer relative rounded-xl p-3 bg-surface-container-low transition-all duration-200 shadow-sm flex flex-col justify-between border-2 ' + colors[r];
        radio.className = 'w-5 h-5 rounded-full bg-primary flex items-center justify-center text-on-primary';
      } else {
        card.className = 'cursor-pointer relative rounded-xl p-3 bg-surface-container-lowest transition-all duration-200 shadow-sm flex flex-col justify-between opacity-70 hover:opacity-100 border border-slate-200';
        radio.className = 'w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center text-transparent';
      }
    });

    const submitText = document.getElementById('submit-text');
    if (submitText) {
      if (role === 'citizen') {
        submitText.textContent = this.activeTab === 'login' ? 'Verify & Access Citizen Portal' : 'Register Citizen Account';
      } else if (role === 'responder') {
        submitText.textContent = this.activeTab === 'login' ? 'Verify & Enter Field Ops Hub' : 'Register Responder Profile';
      } else {
        submitText.textContent = this.activeTab === 'login' ? 'Verify & Enter Command Desk' : 'Request Official Clearance';
      }
    }
  },

  switchMethod: function(method) {
    this.activeMethod = method;
    const btnOtp = document.getElementById('method-otp');
    const btnPwd = document.getElementById('method-pwd');
    const otpSection = document.getElementById('otp-section');
    const pwdSection = document.getElementById('pwd-section');

    if (!btnOtp || !btnPwd) return;

    if (method === 'otp') {
      btnOtp.className = 'px-space-md py-1.5 rounded-full font-label-md text-label-md bg-secondary text-on-secondary transition-all flex items-center gap-1';
      btnPwd.className = 'px-space-md py-1.5 rounded-full font-label-md text-label-md bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1';
      if (otpSection) otpSection.classList.remove('hidden');
      if (pwdSection) pwdSection.classList.add('hidden');
    } else {
      btnPwd.className = 'px-space-md py-1.5 rounded-full font-label-md text-label-md bg-secondary text-on-secondary transition-all flex items-center gap-1';
      btnOtp.className = 'px-space-md py-1.5 rounded-full font-label-md text-label-md bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1';
      if (pwdSection) pwdSection.classList.remove('hidden');
      if (otpSection) otpSection.classList.add('hidden');
    }
  },

  switchAuthTab: function(tab) {
    this.activeTab = tab;
    const tabLogin = document.getElementById('tab-login');
    const tabSignup = document.getElementById('tab-signup');

    if (!tabLogin || !tabSignup) return;

    if (tab === 'login') {
      tabLogin.className = 'flex-1 py-2 rounded-lg font-title-md text-title-md text-center transition-all bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center gap-space-xs';
      tabSignup.className = 'flex-1 py-2 rounded-lg font-title-md text-title-md text-center transition-all text-on-surface-variant hover:text-on-surface flex items-center justify-center gap-space-xs';
    } else {
      tabSignup.className = 'flex-1 py-2 rounded-lg font-title-md text-title-md text-center transition-all bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center gap-space-xs';
      tabLogin.className = 'flex-1 py-2 rounded-lg font-title-md text-title-md text-center transition-all text-on-surface-variant hover:text-on-surface flex items-center justify-center gap-space-xs';
    }
    this.selectRole(this.activeRole);
  },

  togglePasswordVisibility: function() {
    const input = document.getElementById('pwd-input');
    const icon = document.getElementById('eye-icon');
    if (!input || !icon) return;
    if (input.type === 'password') {
      input.type = 'text';
      icon.textContent = 'visibility_off';
    } else {
      input.type = 'password';
      icon.textContent = 'visibility';
    }
  },

  resendOtp: function() {
    SachetRouter.showToast('New 6-digit verification code dispatched via NDMA gateway.', 'info');
  },

  initOtpHandlers: function() {
    const otpBoxes = document.querySelectorAll('.otp-box');
    otpBoxes.forEach((box, index) => {
      box.addEventListener('keyup', (e) => {
        if (e.key >= '0' && e.key <= '9') {
          if (index < otpBoxes.length - 1) {
            otpBoxes[index + 1].focus();
          }
        } else if (e.key === 'Backspace') {
          if (index > 0) {
            otpBoxes[index - 1].focus();
          }
        }
      });
    });
  },

  quickLogin: function(role) {
    SachetRouter.loginAs(role);
    const paths = { citizen: '/citizen', responder: '/responder', admin: '/admin' };
    SachetRouter.navigate(paths[role] || '/');
  },

  handleSubmit: function(e) {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    if (!btn) return;
    const originalContent = btn.innerHTML;

    btn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[20px]">autorenew</span><span>Verifying Cryptographic Beacon...</span>';
    btn.disabled = true;

    const phoneInput = document.querySelector("input[type=tel]");
    const phone = phoneInput ? phoneInput.value : "+91 98765 43210";

    setTimeout(() => {
      btn.innerHTML = '<span class="material-symbols-outlined text-[20px]">check_circle</span><span>Authenticated! Launching...</span>';
      setTimeout(() => {
        btn.innerHTML = originalContent;
        btn.disabled = false;
        SachetRouter.loginAs(this.activeRole, null, phone);
        const paths = { citizen: '/citizen', responder: '/responder', admin: '/admin' };
        SachetRouter.navigate(paths[this.activeRole] || '/');
      }, 600);
    }, 900);
  }
};
`;

fs.writeFileSync('/Users/saga16/Desktop/Sachet/pages/login.js', loginModuleCode, 'utf8');
console.log('Successfully wrote /Users/saga16/Desktop/Sachet/pages/login.js');
