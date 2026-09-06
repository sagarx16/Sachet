// ================================================
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
    container.innerHTML = "<main class=\"w-full min-h-screen bg-background flex flex-col justify-center items-center px-margin-mobile\"><div class=\"flex flex-col w-full items-center justify-center py-space-xl px-margin-mobile\">\n<!-- Ambient Telemetry Grid Pattern Backdrop (Bounded Container) -->\n\n  <div class=\"w-full max-w-xl flex items-center justify-between mb-4 px-2\">\n    <a href=\"#/\" class=\"inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-primary transition-colors\">\n      <span class=\"material-symbols-outlined text-[18px]\">arrow_back</span>\n      <span>Back to Overview</span>\n    </a>\n    <div class=\"flex items-center gap-2\">\n      <span class=\"w-2 h-2 rounded-full bg-emerald-500 animate-pulse\"></span>\n      <span class=\"text-xs font-mono text-slate-500 uppercase\">SAT-UPLINK ACTIVE</span>\n    </div>\n  </div>\n\n<div class=\"relative w-full max-w-xl\">\n<!-- Subtle radial glow behind the main auth card -->\n<div class=\"absolute -top-12 -left-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none\"></div>\n<div class=\"absolute -bottom-10 -right-10 w-72 h-72 bg-primary-container/15 rounded-full blur-3xl pointer-events-none\"></div>\n<!-- Main Card -->\n<div class=\"relative w-full bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden p-space-xl md:p-space-2xl\">\n<!-- Top Brand Header with Shield Emblem -->\n<div class=\"flex items-center justify-between pb-space-lg mb-space-lg bg-surface-container-low/60 -mx-space-xl md:-mx-space-2xl -mt-space-xl md:-mt-space-2xl px-space-xl md:px-space-2xl pt-space-lg\">\n<div class=\"flex items-center gap-space-sm\">\n<!-- Inspired Shield Sachet SVG Logo -->\n<div class=\"w-11 h-11 relative flex items-center justify-center rounded-xl bg-primary shadow-sm flex-shrink-0\">\n<svg class=\"w-7 h-7 text-on-primary\" fill=\"none\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M50 8L16 22V48C16 71 30.5 88 50 94C69.5 88 84 71 84 48V22L50 8Z\" fill=\"currentColor\" fill-opacity=\"0.25\"></path>\n<path d=\"M50 14L22 25V47C22 66.5 34 81 50 86.5C66 81 78 66.5 78 47V25L50 14Z\" fill=\"#3B82F6\"></path>\n<path d=\"M50 30C43 40 37 49 37 57C37 64.2 42.8 70 50 70C57.2 70 63 64.2 63 57C63 49 57 40 50 30Z\" fill=\"#67E8F9\"></path>\n<circle cx=\"50\" cy=\"58\" fill=\"#FFFFFF\" r=\"4\"></circle>\n</svg>\n</div>\n<div>\n<div class=\"flex items-center gap-space-xs\">\n<span class=\"font-headline-sm text-headline-sm text-on-surface tracking-tight\">SACHET</span>\n<span class=\"inline-flex items-center px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm\">\n<span class=\"w-1.5 h-1.5 rounded-full bg-secondary mr-1 animate-ping\"></span>\n                v4.2 CAP\n              </span>\n</div>\n<p class=\"font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1\">\n<span class=\"material-symbols-outlined text-[15px] text-secondary\">verified_user</span>\n              NDMA • DHM Transboundary Portal\n            </p>\n</div>\n</div>\n<!-- Telemetry Uplink Ping -->\n<div class=\"flex items-center gap-space-xs bg-surface-container px-space-sm py-1.5 rounded-full\">\n<span class=\"material-symbols-outlined text-tertiary-container text-[18px]\">satellite_alt</span>\n<span class=\"font-label-sm text-label-sm text-on-surface-variant hidden sm:inline\">SAT-SYNC LIVE</span>\n<span class=\"w-2 h-2 rounded-full bg-tertiary-fixed-dim\"></span>\n</div>\n</div>\n<!-- Segmented Mode Control: Log In / Register -->\n<div class=\"w-full bg-surface-container-high p-1 rounded-xl flex items-center mb-space-xl\">\n<button class=\"flex-1 py-2 rounded-lg font-title-md text-title-md text-center transition-all bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center gap-space-xs\" id=\"tab-login\" onclick=\"window.LoginPage.switchAuthTab('login')\" type=\"button\">\n<span class=\"material-symbols-outlined text-[18px]\">login</span>\n<span>Log In</span>\n</button>\n<button class=\"flex-1 py-2 rounded-lg font-title-md text-title-md text-center transition-all text-on-surface-variant hover:text-on-surface flex items-center justify-center gap-space-xs\" id=\"tab-signup\" onclick=\"window.LoginPage.switchAuthTab('signup')\" type=\"button\">\n<span class=\"material-symbols-outlined text-[18px]\">person_add</span>\n<span>Register</span>\n</button>\n</div>\n\n<!-- ROLE SELECTOR: Citizen vs Field Responder vs Admin -->\n<div class=\"mb-space-xl\">\n  <div class=\"flex items-center justify-between mb-space-xs\">\n    <label class=\"font-label-md text-label-md uppercase tracking-wider text-on-surface-variant flex items-center gap-1\">\n      <span class=\"material-symbols-outlined text-[16px] text-secondary\">badge</span>\n      Select Operational Profile\n    </label>\n    <span class=\"font-label-sm text-label-sm text-secondary flex items-center gap-0.5\">\n      <span class=\"material-symbols-outlined text-[14px]\">touch_app</span> Required\n    </span>\n  </div>\n  <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3\">\n    <!-- Role 1: Citizen -->\n    <div class=\"cursor-pointer relative rounded-xl p-3 bg-surface-container-low transition-all duration-200 shadow-sm flex flex-col justify-between border-2 border-primary\" id=\"role-card-citizen\" onclick=\"window.LoginPage.selectRole('citizen')\">\n      <div class=\"flex items-start justify-between mb-2\">\n        <div class=\"w-8 h-8 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center shadow-sm\">\n          <span class=\"material-symbols-outlined text-[20px]\">home_pin</span>\n        </div>\n        <div class=\"w-5 h-5 rounded-full bg-primary flex items-center justify-center text-on-primary\" id=\"radio-citizen\">\n          <span class=\"material-symbols-outlined text-[14px]\">check</span>\n        </div>\n      </div>\n      <div>\n        <div class=\"font-bold text-sm text-on-surface\">Citizen</div>\n        <p class=\"text-[11px] text-on-surface-variant mt-0.5 leading-tight\">\n          Alerts, shelters & family SOS beacon.\n        </p>\n      </div>\n    </div>\n\n    <!-- Role 2: Responder -->\n    <div class=\"cursor-pointer relative rounded-xl p-3 bg-surface-container-lowest transition-all duration-200 shadow-sm flex flex-col justify-between opacity-80 hover:opacity-100 border border-slate-200\" id=\"role-card-responder\" onclick=\"window.LoginPage.selectRole('responder')\">\n      <div class=\"flex items-start justify-between mb-2\">\n        <div class=\"w-8 h-8 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center shadow-sm\">\n          <span class=\"material-symbols-outlined text-[20px]\">emergency</span>\n        </div>\n        <div class=\"w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center text-transparent\" id=\"radio-responder\">\n          <span class=\"material-symbols-outlined text-[14px]\">check</span>\n        </div>\n      </div>\n      <div>\n        <div class=\"font-bold text-sm text-on-surface\">Responder</div>\n        <p class=\"text-[11px] text-on-surface-variant mt-0.5 leading-tight\">\n          Camps, squad dispatch & relief aid.\n        </p>\n      </div>\n    </div>\n\n    <!-- Role 3: Admin -->\n    <div class=\"cursor-pointer relative rounded-xl p-3 bg-surface-container-lowest transition-all duration-200 shadow-sm flex flex-col justify-between opacity-80 hover:opacity-100 border border-slate-200\" id=\"role-card-admin\" onclick=\"window.LoginPage.selectRole('admin')\">\n      <div class=\"flex items-start justify-between mb-2\">\n        <div class=\"w-8 h-8 rounded-lg bg-surface-container-high text-purple-700 flex items-center justify-center shadow-sm\">\n          <span class=\"material-symbols-outlined text-[20px]\">shield_person</span>\n        </div>\n        <div class=\"w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center text-transparent\" id=\"radio-admin\">\n          <span class=\"material-symbols-outlined text-[14px]\">check</span>\n        </div>\n      </div>\n      <div>\n        <div class=\"font-bold text-sm text-on-surface\">Admin Desk</div>\n        <p class=\"text-[11px] text-on-surface-variant mt-0.5 leading-tight\">\n          Gate release, CAP grid & national oversight.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Auth Method Switcher: Mobile OTP vs Official Password -->\n<div class=\"flex items-center justify-between mb-space-md\">\n<div class=\"flex items-center gap-space-xs\">\n<button class=\"px-space-md py-1.5 rounded-full font-label-md text-label-md bg-secondary text-on-secondary transition-all flex items-center gap-1\" id=\"method-otp\" onclick=\"window.LoginPage.switchMethod('otp')\" type=\"button\">\n<span class=\"material-symbols-outlined text-[16px]\">sms</span>\n<span>Mobile OTP</span>\n</button>\n<button class=\"px-space-md py-1.5 rounded-full font-label-md text-label-md bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1\" id=\"method-pwd\" onclick=\"window.LoginPage.switchMethod('pwd')\" type=\"button\">\n<span class=\"material-symbols-outlined text-[16px]\">key</span>\n<span>Password</span>\n</button>\n</div>\n<span class=\"font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1\">\n<span class=\"w-2 h-2 rounded-full bg-tertiary-fixed-dim\"></span>\n          Gateway Online\n        </span>\n</div>\n<!-- FORM FIELDS -->\n<form class=\"space-y-space-md\" onsubmit=\"window.LoginPage.handleSubmit(event)\">\n<!-- Phone & Country Selector -->\n<div>\n<label class=\"block font-label-md text-label-md text-on-surface-variant mb-1.5\" for=\"phone-input\">\n            PHONE NUMBER / EMERGENCY ID\n          </label>\n<div class=\"relative flex items-center bg-surface-container-low rounded-xl focus-within:bg-surface-container-lowest transition-colors shadow-sm\">\n<!-- Indo-Nepal Corridor Picker -->\n<div class=\"flex items-center gap-1 pl-space-md pr-space-xs py-2.5 bg-surface-container-high/60 rounded-l-xl flex-shrink-0 cursor-pointer\">\n<span class=\"material-symbols-outlined text-secondary text-[20px]\">public</span>\n<select class=\"bg-transparent font-title-md text-title-md text-on-surface outline-none cursor-pointer pr-1\" id=\"country-code\">\n<option value=\"+91\">🇮🇳 +91 (IN)</option>\n<option value=\"+977\">🇳🇵 +977 (NP)</option>\n</select>\n</div>\n<input class=\"w-full bg-transparent px-space-md py-2.5 font-headline-sm text-headline-sm text-on-surface placeholder:text-outline/60 outline-none\" id=\"phone-input\" inputmode=\"numeric\" pattern=\"[0-9]*\" placeholder=\"98765 43210\" required=\"\" type=\"tel\">\n<div class=\"pr-space-md flex items-center\">\n<span class=\"material-symbols-outlined text-outline hover:text-primary cursor-pointer text-[20px]\" onclick=\"document.getElementById('phone-input').value=''\" title=\"Clear input\">cancel</span>\n</div>\n</div>\n</div>\n<!-- Dynamic Section: OTP Entry Fields (Default) -->\n<div class=\"block\" id=\"otp-section\">\n<div class=\"flex items-center justify-between mb-1.5\">\n<label class=\"font-label-md text-label-md text-on-surface-variant flex items-center gap-1\">\n<span class=\"material-symbols-outlined text-[16px] text-secondary\">pin</span>\n              6-DIGIT VERIFICATION CODE\n            </label>\n<button class=\"font-label-sm text-label-sm text-secondary hover:underline flex items-center gap-0.5\" onclick=\"window.LoginPage.resendOtp()\" type=\"button\">\n<span class=\"material-symbols-outlined text-[13px]\">refresh</span>\n              Resend SMS\n            </button>\n</div>\n<!-- 6-Pin Discrete Digit Boxes -->\n<div class=\"grid grid-cols-6 gap-space-xs sm:gap-space-sm\" id=\"otp-inputs\">\n<input class=\"otp-box h-12 w-full text-center font-display-lg-mobile text-display-lg-mobile bg-surface-container-low rounded-xl text-primary font-bold outline-none focus:bg-surface-container-lowest transition-all\" inputmode=\"numeric\" maxlength=\"1\" type=\"text\" value=\"4\">\n<input class=\"otp-box h-12 w-full text-center font-display-lg-mobile text-display-lg-mobile bg-surface-container-low rounded-xl text-primary font-bold outline-none focus:bg-surface-container-lowest transition-all\" inputmode=\"numeric\" maxlength=\"1\" type=\"text\" value=\"8\">\n<input class=\"otp-box h-12 w-full text-center font-display-lg-mobile text-display-lg-mobile bg-surface-container-low rounded-xl text-primary font-bold outline-none focus:bg-surface-container-lowest transition-all\" inputmode=\"numeric\" maxlength=\"1\" type=\"text\" value=\"2\">\n<input class=\"otp-box h-12 w-full text-center font-display-lg-mobile text-display-lg-mobile bg-surface-container-low rounded-xl text-primary font-bold outline-none focus:bg-surface-container-lowest transition-all\" inputmode=\"numeric\" maxlength=\"1\" placeholder=\"•\" type=\"text\">\n<input class=\"otp-box h-12 w-full text-center font-display-lg-mobile text-display-lg-mobile bg-surface-container-low rounded-xl text-primary font-bold outline-none focus:bg-surface-container-lowest transition-all\" inputmode=\"numeric\" maxlength=\"1\" placeholder=\"•\" type=\"text\">\n<input class=\"otp-box h-12 w-full text-center font-display-lg-mobile text-display-lg-mobile bg-surface-container-low rounded-xl text-primary font-bold outline-none focus:bg-surface-container-lowest transition-all\" inputmode=\"numeric\" maxlength=\"1\" placeholder=\"•\" type=\"text\">\n</div>\n<div class=\"flex items-center justify-between mt-space-xs text-on-surface-variant font-label-sm text-label-sm\">\n<span class=\"flex items-center gap-1\">\n<span class=\"material-symbols-outlined text-[15px] text-tertiary-container\">mark_chat_read</span>\n              Instant WhatsApp delivery ready\n            </span>\n<span class=\"text-secondary font-mono\">01:42s</span>\n</div>\n</div>\n<!-- Dynamic Section: Password Entry (Hidden initially) -->\n<div class=\"hidden\" id=\"pwd-section\">\n<div class=\"flex items-center justify-between mb-1.5\">\n<label class=\"font-label-md text-label-md text-on-surface-variant\" for=\"pwd-input\">\n              SECURE KEY / PASSPHRASE\n            </label>\n<a class=\"font-label-sm text-label-sm text-secondary hover:underline\" href=\"#\">Forgot?</a>\n</div>\n<div class=\"relative flex items-center bg-surface-container-low rounded-xl\">\n<span class=\"material-symbols-outlined text-outline pl-space-md text-[20px]\">lock</span>\n<input class=\"w-full bg-transparent px-space-md py-2.5 font-body-lg text-body-lg text-on-surface outline-none\" id=\"pwd-input\" placeholder=\"Enter government agency key\" type=\"password\">\n<button class=\"pr-space-md text-outline hover:text-on-surface\" onclick=\"window.LoginPage.togglePasswordVisibility()\" type=\"button\">\n<span class=\"material-symbols-outlined text-[20px]\" id=\"eye-icon\">visibility</span>\n</button>\n</div>\n</div>\n<!-- Device Trust & Rapid Verify Checkbox -->\n<div class=\"flex items-center justify-between pt-space-xs\">\n<label class=\"flex items-center gap-space-xs cursor-pointer select-none\">\n<input checked=\"\" class=\"w-4 h-4 rounded text-primary focus:ring-primary accent-primary\" type=\"checkbox\">\n<span class=\"font-body-sm text-body-sm text-on-surface-variant\">Remember terminal for 30 days</span>\n</label>\n<span class=\"inline-flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm bg-surface-container-high px-2 py-0.5 rounded\">\n<span class=\"material-symbols-outlined text-[14px]\">lock_clock</span>\n            256-bit AES\n          </span>\n</div>\n<!-- Primary Action Button -->\n<button class=\"w-full h-12 bg-primary-container hover:bg-primary text-on-primary rounded-xl font-title-md text-title-md transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-space-sm active:scale-[0.99]\" id=\"submit-btn\" type=\"submit\">\n<span class=\"material-symbols-outlined text-[20px]\">how_to_reg</span>\n<span id=\"submit-text\">Verify &amp; Enter Command Desk</span>\n<span class=\"material-symbols-outlined text-[20px]\">arrow_forward</span>\n</button>\n\n  <div class=\"mt-4 pt-4 border-t border-slate-100\">\n    <div class=\"text-[11px] font-semibold text-slate-400 uppercase tracking-wider text-center mb-2\">⚡ 1-Click Instant Demo Access</div>\n    <div class=\"grid grid-cols-3 gap-2\">\n      <button type=\"button\" onclick=\"window.LoginPage.quickLogin('citizen')\" class=\"px-2 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors text-center cursor-pointer\">\n        Citizen Portal\n      </button>\n      <button type=\"button\" onclick=\"window.LoginPage.quickLogin('responder')\" class=\"px-2 py-1.5 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors text-center cursor-pointer\">\n        Responder Hub\n      </button>\n      <button type=\"button\" onclick=\"window.LoginPage.quickLogin('admin')\" class=\"px-2 py-1.5 text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-center cursor-pointer\">\n        Govt Admin\n      </button>\n    </div>\n  </div>\n\n</form>\n<!-- Immediate Emergency SOS Bypass Link -->\n<div class=\"mt-space-lg p-space-sm rounded-xl bg-error-container/60 flex items-center justify-between\">\n<div class=\"flex items-center gap-space-xs\">\n<div class=\"w-8 h-8 rounded-lg bg-error text-on-error flex items-center justify-center flex-shrink-0 animate-pulse\">\n<span class=\"material-symbols-outlined text-[18px]\">emergency_share</span>\n</div>\n<div class=\"text-left\">\n<span class=\"font-title-md text-title-md text-on-error-container block leading-tight\">In Immediate Threat?</span>\n<span class=\"font-label-sm text-label-sm text-on-error-container/80 block\">No credentials required for lifeline view</span>\n</div>\n</div>\n<button class=\"bg-error hover:bg-red-700 text-on-error px-space-sm py-1.5 rounded-lg font-label-md text-label-md flex items-center gap-1 shadow-sm flex-shrink-0\" onclick=\"alert('Routing to public SOS beacon &amp; active evacuation shelter corridor...')\" type=\"button\">\n<span>SOS Bypass</span>\n<span class=\"material-symbols-outlined text-[16px]\">arrow_forward</span>\n</button>\n</div>\n<!-- Trust, Security, and Compliance Strip -->\n<div class=\"mt-space-xl pt-space-lg bg-surface-container-low/50 -mx-space-xl md:-mx-space-2xl -mb-space-xl md:-mb-space-2xl px-space-xl md:px-space-2xl pb-space-lg\">\n<div class=\"grid grid-cols-3 gap-space-xs text-center\">\n<div class=\"flex flex-col items-center p-space-xs\">\n<span class=\"material-symbols-outlined text-secondary text-[22px] mb-1\">security</span>\n<span class=\"font-label-sm text-label-sm text-on-surface font-semibold\">Govt Verified</span>\n<span class=\"font-body-sm text-[10px] text-on-surface-variant\">NDMA • CWC • DHM</span>\n</div>\n<div class=\"flex flex-col items-center p-space-xs\">\n<span class=\"material-symbols-outlined text-tertiary-container text-[22px] mb-1\">cell_tower</span>\n<span class=\"font-label-sm text-label-sm text-on-surface font-semibold\">Offline Mesh</span>\n<span class=\"font-body-sm text-[10px] text-on-surface-variant\">SMS/Ham Gateway</span>\n</div>\n<div class=\"flex flex-col items-center p-space-xs\">\n<span class=\"material-symbols-outlined text-primary text-[22px] mb-1\">accessibility_new</span>\n<span class=\"font-label-sm text-label-sm text-on-surface font-semibold\">WCAG AAA</span>\n<span class=\"font-body-sm text-[10px] text-on-surface-variant\">Voice &amp; High-Contrast</span>\n</div>\n</div>\n<!-- Multi-language Quick Strip -->\n<div class=\"mt-space-md pt-space-xs flex flex-wrap items-center justify-center gap-space-md font-label-sm text-label-sm text-on-surface-variant\">\n<span class=\"hover:text-primary cursor-pointer underline\">English</span>\n<span>•</span>\n<span class=\"hover:text-primary cursor-pointer\">हिन्दी (Hindi)</span>\n<span>•</span>\n<span class=\"hover:text-primary cursor-pointer\">नेपाली (Nepali)</span>\n<span>•</span>\n<span class=\"hover:text-primary cursor-pointer\">বাংলা (Bengali)</span>\n<span>•</span>\n<span class=\"hover:text-primary cursor-pointer\">অসমীয়া (Assamese)</span>\n</div>\n</div>\n</div>\n<!-- Live Telemetry Status Ticker Beneath Container -->\n<div class=\"mt-space-md px-space-sm flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm\">\n<div class=\"flex items-center gap-space-xs\">\n<span class=\"inline-block w-2 h-2 rounded-full bg-secondary animate-pulse\"></span>\n<span>Kosi-Ganga Basin Sensor Cluster #14: Operational</span>\n</div>\n<div class=\"flex items-center gap-1 font-mono\">\n<span class=\"material-symbols-outlined text-[14px]\">cloud_download</span>\n<span>Synced 12s ago</span>\n</div>\n</div>\n</div>\n</div>\n</main>";

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
