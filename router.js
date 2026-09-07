// ================================================
// Sachet / JalRaksha – SPA Hash Router & State
// ================================================

const SachetRouter = (() => {
  // Auth state
  let authState = {
    isLoggedIn: false,
    role: 'citizen', // 'citizen', 'responder', 'admin'
    phone: '',
    name: 'Guest Citizen'
  };

  // Route registry
  const routes = {};

  function register(path, renderFn) {
    routes[path] = renderFn;
  }

  function getAuthState() {
    return { ...authState };
  }

  function setAuthState(state) {
    authState = { ...authState, ...state };
    sessionStorage.setItem('sachet_auth', JSON.stringify(authState));
    window.dispatchEvent(new CustomEvent('auth-changed', { detail: authState }));
  }

  function loadAuthState() {
    const saved = sessionStorage.getItem('sachet_auth');
    if (saved) {
      try {
        authState = JSON.parse(saved);
      } catch (e) {
        authState = { isLoggedIn: false, role: 'citizen', phone: '', name: 'Guest Citizen' };
      }
    }
  }

  function loginAs(role, name, phone) {
    const defaultNames = {
      citizen: 'Aarav Sharma (Bihar Sector 4)',
      responder: 'Squad Lead Rajesh Kumar (NDRF Unit 9)',
      admin: 'Director V. K. Singh (Central Water Commission)'
    };
    setAuthState({
      isLoggedIn: true,
      role: role,
      name: name || defaultNames[role] || 'Authorized User',
      phone: phone || '+91 98765 43210'
    });
    showToast(`Welcome ${authState.name}! Logged in as ${role.toUpperCase()}.`, 'success');
  }

  function logout() {
    authState = { isLoggedIn: false, role: 'citizen', phone: '', name: 'Guest Citizen' };
    sessionStorage.removeItem('sachet_auth');
    showToast('Signed out of Sachet Disaster Grid.', 'info');
    navigate('/');
  }

  function navigate(path) {
    window.location.hash = '#' + path;
  }

  function getCurrentPath() {
    const hash = window.location.hash.slice(1) || '/';
    // Strip query string if any
    return hash.split('?')[0] || '/';
  }

  function getQueryParams() {
    const hash = window.location.hash.slice(1);
    const queryIdx = hash.indexOf('?');
    if (queryIdx === -1) return {};
    const queryStr = hash.slice(queryIdx + 1);
    const params = {};
    queryStr.split('&').forEach(pair => {
      const [k, v] = pair.split('=');
      if (k) params[decodeURIComponent(k)] = decodeURIComponent(v || '');
    });
    return params;
  }

  async function handleRoute() {
    const path = getCurrentPath();
    const app = document.getElementById('app');
    if (!app) return;

    // Fade out
    app.classList.add('fade-out');
    await new Promise(r => setTimeout(r, 150));

    // Find matching route
    const renderFn = routes[path] || routes['/'];
    if (renderFn) {
      app.innerHTML = '';
      try {
        const content = renderFn();
        if (typeof content === 'string') {
          app.innerHTML = content;
        } else if (content instanceof HTMLElement) {
          app.appendChild(content);
        }
      } catch (err) {
        console.error('Route render error:', err);
        app.innerHTML = `<div class="min-h-screen flex items-center justify-center p-8 text-center">
          <div>
            <h2 class="text-2xl font-bold text-red-600 mb-2">Error loading view</h2>
            <p class="text-slate-600 mb-4">${err.message}</p>
            <a href="#/" class="px-4 py-2 bg-primary text-white rounded-lg">Return to Home</a>
          </div>
        </div>`;
      }
    }

    // Fade in
    app.classList.remove('fade-out');

    // Scroll to top
    window.scrollTo(0, 0);

    // Re-initialize any dynamic components on current page
    if (window.onPageLoaded) {
      window.onPageLoaded(path);
    }
  }

  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    const colors = {
      success: 'bg-emerald-600 text-white shadow-emerald-500/20',
      error: 'bg-red-600 text-white shadow-red-500/20',
      warning: 'bg-amber-600 text-white shadow-amber-500/20',
      info: 'bg-indigo-700 text-white shadow-indigo-500/20'
    };
    const icons = {
      success: 'check_circle',
      error: 'error',
      warning: 'warning',
      info: 'info'
    };
    toast.className = `fixed bottom-6 right-6 z-[9999] flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-lg transition-all duration-300 transform translate-y-2 opacity-0 ${colors[type] || colors.info}`;
    toast.innerHTML = `
      <span class="material-symbols-outlined text-[20px]">${icons[type] || 'info'}</span>
      <span class="text-sm font-medium font-sans">${message}</span>
    `;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-2', 'opacity-0');
    });

    setTimeout(() => {
      toast.classList.add('translate-y-2', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  function triggerSOS() {
    const modal = document.getElementById('sos-emergency-modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  function closeSOS() {
    const modal = document.getElementById('sos-emergency-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  function init() {
    loadAuthState();
    window.addEventListener('hashchange', handleRoute);
    if (!window.location.hash) {
      window.location.hash = '#/';
    }
    handleRoute();
  }

  return {
    register,
    navigate,
    init,
    getAuthState,
    setAuthState,
    loginAs,
    logout,
    getCurrentPath,
    getQueryParams,
    showToast,
    triggerSOS,
    closeSOS
  };
})();
