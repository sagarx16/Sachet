'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

/* Per-portal config */
const portalConfig = {
  citizen: {
    verifiedLabel: 'Verified Citizen',
    verifiedBg: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    verifiedDot: 'bg-indigo-500',
    verifiedIcon: 'verified_user',
    searchPlaceholder: 'Search alerts, shelters, reports…',
    avatarBg: 'bg-indigo-600',
    notifCount: 3,
  },
  responder: {
    verifiedLabel: 'Verified Responder',
    verifiedBg: 'bg-sky-50 border-sky-200 text-sky-700',
    verifiedDot: 'bg-sky-500',
    verifiedIcon: 'emergency',
    searchPlaceholder: 'Search missions, camps, squads…',
    avatarBg: 'bg-sky-600',
    notifCount: 5,
  },
  admin: {
    verifiedLabel: 'Govt. Officer',
    verifiedBg: 'bg-purple-50 border-purple-200 text-purple-700',
    verifiedDot: 'bg-purple-500',
    verifiedIcon: 'shield_person',
    searchPlaceholder: 'Search districts, incidents, reports…',
    avatarBg: 'bg-purple-700',
    notifCount: 7,
  },
};

const mockNotifications = [
  { id: 1, icon: 'warning', color: 'text-amber-500', title: 'Orange Alert Upgraded', sub: 'Ganga – Patna Ward 12–18 • 2 min ago' },
  { id: 2, icon: 'sos', color: 'text-red-500', title: 'SOS Received Nearby', sub: 'Hajipur, Bihar • 8 min ago' },
  { id: 3, icon: 'holiday_village', color: 'text-emerald-500', title: 'Shelter Update', sub: 'Patna College Camp now 84% full • 15 min ago' },
  { id: 4, icon: 'cell_tower', color: 'text-indigo-500', title: 'New CAP Broadcast', sub: 'Evacuation Order — Ward 14 • 22 min ago' },
];

function getInitials(name = '') {
  return name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase() || 'U';
}

export default function PortalTopbar({ portal = 'citizen' }) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pc = portalConfig[portal] || portalConfig.citizen;
  const rc = portalConfig[user?.role] || pc;

  const [searchFocused, setSearchFocused] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifRead, setNotifRead] = useState(false);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) setNotifOpen(false);
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const displayName = user?.name || 'Guest User';
  const initials = getInitials(displayName);
  const unreadCount = notifRead ? 0 : pc.notifCount;

  const handleLogout = () => {
    setProfileOpen(false);
    logout();
    router.push('/');
  };

  return (
    <div className="sticky top-16 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-end gap-1.5 sm:gap-3 px-3 sm:px-4 md:px-8 h-14 max-w-screen-2xl mx-auto">

        {/* ── Search Bar: compact (260-300px), aligned to right near badges & profile ── */}
        <div
            className={`flex items-center gap-2 flex-1 min-w-0 sm:flex-none w-auto sm:w-72 h-9.5 px-3 sm:px-3.5 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] transition-all duration-200 ${
            searchFocused
              ? 'bg-white border-slate-300 ring-2 ring-indigo-100 shadow-sm'
              : 'hover:bg-slate-200/50 hover:border-slate-300'
          }`}
        >
          <span className="material-symbols-outlined text-[18px] text-slate-400 shrink-0 select-none">
            search
          </span>
          <input
            id="portal-search-input"
            type="text"
            placeholder={pc.searchPlaceholder}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="flex-1 bg-transparent border-0 border-none outline-none focus:outline-none focus:ring-0 text-xs sm:text-sm text-slate-700 placeholder:text-slate-400 min-w-0 leading-normal shadow-none"
            style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
          />
        </div>

        {/* ── Verified Badge ── */}
        <div className={`hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-semibold whitespace-nowrap ${pc.verifiedBg}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${pc.verifiedDot} animate-pulse`} />
            <span
              className="material-symbols-outlined text-[14px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {pc.verifiedIcon}
            </span>
            {pc.verifiedLabel}
          </div>

          {/* Notification Bell */}
          <div className="relative" ref={notifRef}>
            <button
              id="portal-notif-btn"
              onClick={() => { setNotifOpen((v) => !v); setNotifRead(true); }}
              className="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
              aria-label="Notifications"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 min-w-[15px] h-[15px] px-0.5 flex items-center justify-center rounded-full bg-red-500 text-white text-[9px] font-extrabold leading-none">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notification dropdown */}
            {notifOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl border border-slate-200 shadow-2xl z-50 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                  <span className="text-sm font-extrabold text-slate-900">Notifications</span>
                  <button
                    onClick={() => setNotifRead(true)}
                    className="text-[11px] font-bold text-indigo-600 hover:underline cursor-pointer"
                  >
                    Mark all read
                  </button>
                </div>
                <div className="flex flex-col divide-y divide-slate-50 max-h-72 overflow-y-auto">
                  {mockNotifications.map((n) => (
                    <button
                      key={n.id}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 text-left transition-colors w-full cursor-pointer"
                    >
                      <span
                        className={`material-symbols-outlined text-[20px] mt-0.5 shrink-0 ${n.color}`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {n.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-slate-900">{n.title}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{n.sub}</div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="px-4 py-2.5 border-t border-slate-100 text-center">
                  <button className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Logout Button */}
          <button
            id="portal-topbar-logout"
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-[16px]">logout</span>
            <span className="hidden sm:inline">Logout</span>
          </button>

          {/* Profile Avatar + Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              id="portal-topbar-profile"
              onClick={() => setProfileOpen((v) => !v)}
              className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all cursor-pointer"
              aria-label="Profile"
            >
              <div
                className={`w-8 h-8 rounded-full ${rc.avatarBg} flex items-center justify-center text-white text-xs font-extrabold shadow-sm select-none`}
              >
                {initials}
              </div>
              <div className="hidden md:flex flex-col items-start leading-tight">
                <span className="text-xs font-bold text-slate-900 max-w-[100px] truncate">
                  {displayName.split(' ').slice(0, 2).join(' ')}
                </span>
                {user?.phone ? (
                  <span className="text-[10px] text-slate-400 font-medium">{user.phone}</span>
                ) : (
                  <span className="text-[10px] text-slate-400 font-medium capitalize">{user?.role || 'Citizen'}</span>
                )}
              </div>
              <span
                className={`material-symbols-outlined text-[16px] text-slate-400 transition-transform duration-200 ${profileOpen ? 'rotate-180' : ''}`}
              >
                expand_more
              </span>
            </button>

            {/* Profile dropdown */}
            {profileOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl border border-slate-200 shadow-2xl z-50 overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full ${rc.avatarBg} flex items-center justify-center text-white text-xs font-extrabold select-none`}
                    >
                      {initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-slate-900 truncate">{displayName}</div>
                      <div className="text-[11px] text-slate-400">{user?.phone || ''}</div>
                    </div>
                  </div>
                </div>
                <div className="px-3 py-2">
                  {[
                    { icon: 'account_circle', label: 'My Profile' },
                    { icon: 'settings', label: 'Settings' },
                    { icon: 'help', label: 'Help & Support' },
                  ].map((item) => (
                    <button
                      key={item.label}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </div>
                <div className="px-3 pb-3 pt-1 border-t border-slate-100">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-bold text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">logout</span>
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
