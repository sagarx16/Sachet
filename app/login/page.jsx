'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import BrandMark from '../../components/BrandMark';

export default function LoginPage() {
  const router = useRouter();
  const { loginAs, openSos, showToast } = useAuth();

  const [role, setRole] = useState('citizen');
  const [tab, setTab] = useState('login');
  const [method, setMethod] = useState('otp');
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('+91 98765 43210');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleOtpKeyUp = (index, e) => {
    if (e.key >= '0' && e.key <= '9') {
      if (index < otpRefs.length - 1 && otpRefs[index + 1].current) {
        otpRefs[index + 1].current.focus();
      }
    } else if (e.key === 'Backspace') {
      if (index > 0 && otpRefs[index - 1].current) {
        otpRefs[index - 1].current.focus();
      }
    }
  };

  const handleQuickLogin = (selectedRole) => {
    loginAs(selectedRole);
    const paths = { citizen: '/citizen', responder: '/responder', admin: '/admin' };
    router.push(paths[selectedRole] || '/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      loginAs(role, null, phone);
      const paths = { citizen: '/citizen', responder: '/responder', admin: '/admin' };
      router.push(paths[role] || '/');
    }, 1000);
  };

  return (
    <main className="w-full min-h-[100svh] overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/60 flex flex-col justify-start sm:justify-center items-center px-4 sm:px-6 py-4 sm:py-8">
      {/* Back to Home & Sat Uplink */}
      <div className="w-full max-w-xl flex flex-wrap items-center justify-between gap-3 mb-4 px-1 sm:px-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
        >
          <BrandMark />
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span>Back to Overview</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="hidden sm:inline text-xs font-mono text-slate-500 uppercase">SAT-UPLINK ACTIVE</span>
        </div>
      </div>

      <div className="relative w-full max-w-xl">
        {/* Glow Effects */}
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-primary-container/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Card */}
        <div className="relative w-full bg-surface-container-lowest rounded-2xl shadow-xl shadow-slate-900/10 overflow-hidden p-4 sm:p-6 md:p-8 border border-slate-200/80">
          {/* Header */}
          <div className="flex items-center justify-end pb-4 mb-5 bg-surface-container-low/60 -mx-4 sm:-mx-6 md:-mx-8 -mt-4 sm:-mt-6 md:-mt-8 px-4 sm:px-6 md:px-8 pt-4 sm:pt-5">
            <div className="flex items-center gap-space-xs bg-surface-container px-space-sm py-1.5 rounded-full">
              <span className="material-symbols-outlined text-tertiary-container text-[18px]">satellite_alt</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline font-semibold">SAT-SYNC LIVE</span>
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
            </div>
          </div>

          <div className="mb-5">
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">Access your response portal</h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Secure sign-in for citizens and emergency teams.</p>
          </div>

          {/* Mode Switcher: Log In / Register */}
          <div className="w-full bg-surface-container-high p-1 rounded-xl flex items-center mb-space-xl">
            <button
              type="button"
              onClick={() => setTab('login')}
              className={`flex-1 py-2 rounded-lg font-title-md text-title-md text-center transition-all flex items-center justify-center gap-space-xs cursor-pointer ${
                tab === 'login'
                  ? 'bg-surface-container-lowest text-primary shadow-sm font-bold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">login</span>
              <span>Log In</span>
            </button>
            <button
              type="button"
              onClick={() => setTab('signup')}
              className={`flex-1 py-2 rounded-lg font-title-md text-title-md text-center transition-all flex items-center justify-center gap-space-xs cursor-pointer ${
                tab === 'signup'
                  ? 'bg-surface-container-lowest text-primary shadow-sm font-bold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">person_add</span>
              <span>Register</span>
            </button>
          </div>

          {/* Role Selector */}
          <div className="mb-space-xl">
            <div className="flex items-center justify-between mb-space-xs">
              <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant flex items-center gap-1 font-bold">
                <span className="material-symbols-outlined text-[16px] text-secondary">badge</span>
                Select Operational Profile
              </label>
              <span className="font-label-sm text-label-sm text-secondary flex items-center gap-0.5 font-semibold">
                <span className="material-symbols-outlined text-[14px]">touch_app</span> Required
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Role: Citizen */}
              <div
                onClick={() => setRole('citizen')}
                className={`cursor-pointer relative rounded-xl p-3 transition-all duration-200 shadow-sm flex flex-col justify-between ${
                  role === 'citizen'
                    ? 'bg-surface-container-low border-2 border-primary'
                    : 'bg-surface-container-lowest border border-slate-200 opacity-75 hover:opacity-100'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">home_pin</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${role === 'citizen' ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-transparent'}`}>
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-sm text-on-surface">Citizen</div>
                  <p className="text-[11px] text-on-surface-variant mt-0.5 leading-tight">
                    Shelter maps, family SOS beacon, localized flood warnings.
                  </p>
                </div>
              </div>

              {/* Role: Responder */}
              <div
                onClick={() => setRole('responder')}
                className={`cursor-pointer relative rounded-xl p-3 transition-all duration-200 shadow-sm flex flex-col justify-between ${
                  role === 'responder'
                    ? 'bg-surface-container-low border-2 border-secondary'
                    : 'bg-surface-container-lowest border border-slate-200 opacity-75 hover:opacity-100'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">emergency</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${role === 'responder' ? 'bg-secondary text-on-secondary' : 'bg-surface-container-highest text-transparent'}`}>
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-sm text-on-surface">Responder</div>
                  <p className="text-[11px] text-on-surface-variant mt-0.5 leading-tight">
                    Camps, squads dispatch, relief supplies, kinematics.
                  </p>
                </div>
              </div>

              {/* Role: Admin */}
              <div
                onClick={() => setRole('admin')}
                className={`cursor-pointer relative rounded-xl p-3 transition-all duration-200 shadow-sm flex flex-col justify-between ${
                  role === 'admin'
                    ? 'bg-surface-container-low border-2 border-purple-600'
                    : 'bg-surface-container-lowest border border-slate-200 opacity-75 hover:opacity-100'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-surface-container-high text-purple-700 flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">shield_person</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${role === 'admin' ? 'bg-purple-700 text-white' : 'bg-surface-container-highest text-transparent'}`}>
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-sm text-on-surface">Admin Desk</div>
                  <p className="text-[11px] text-on-surface-variant mt-0.5 leading-tight">
                    Gate release, CAP national broadcasts, sensor telemetry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Auth Method Switcher */}
          <div className="flex items-center justify-between mb-space-md">
            <div className="flex items-center gap-space-xs">
              <button
                type="button"
                onClick={() => setMethod('otp')}
                className={`px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all flex items-center gap-1 cursor-pointer ${
                  method === 'otp'
                    ? 'bg-secondary text-on-secondary font-bold'
                    : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">sms</span>
                <span>Mobile OTP</span>
              </button>
              <button
                type="button"
                onClick={() => setMethod('pwd')}
                className={`px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all flex items-center gap-1 cursor-pointer ${
                  method === 'pwd'
                    ? 'bg-secondary text-on-secondary font-bold'
                    : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">key</span>
                <span>Password</span>
              </button>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
              Gateway Online
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Phone input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Registered Mobile Number (IN / NP)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                </span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-slate-200 rounded-xl text-sm font-semibold focus:border-primary focus:ring-primary"
                  required
                />
              </div>
            </div>

            {/* Method: OTP Section */}
            {method === 'otp' ? (
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase">
                    6-Digit Verification PIN
                  </label>
                  <button
                    type="button"
                    onClick={() => showToast('New 6-digit OTP code dispatched via NDMA gateway.', 'info')}
                    className="text-xs font-bold text-secondary hover:underline cursor-pointer"
                  >
                    Resend Code
                  </button>
                </div>
                <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <input
                      key={i}
                      ref={otpRefs[i]}
                      type="text"
                      maxLength={1}
                      defaultValue={i === 0 ? '7' : i === 1 ? '4' : i === 2 ? '2' : ''}
                      onKeyUp={(e) => handleOtpKeyUp(i, e)}
                      className="otp-box w-full text-center py-2.5 bg-surface-container-low border border-slate-200 rounded-xl text-lg font-bold focus:border-primary focus:ring-primary"
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Official Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    defaultValue="NDMA-Officer-2026"
                    className="w-full pl-4 pr-10 py-2.5 bg-surface-container-low border border-slate-200 rounded-xl text-sm font-semibold focus:border-primary focus:ring-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* Remember Checkbox */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600 font-medium">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-slate-300 text-primary focus:ring-primary"
                />
                <span>Trust this crisis terminal for 24h</span>
              </label>
              <button
                type="button"
                onClick={openSos}
                className="text-xs font-bold text-red-600 hover:underline flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[14px]">emergency</span>
                <span>Emergency SOS Bypass</span>
              </button>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-primary to-primary-container hover:from-primary-container hover:to-primary text-white font-bold text-sm shadow-md shadow-primary/20 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[20px]">autorenew</span>
                    <span>Verifying Cryptographic Beacon...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[20px]">verified</span>
                    <span>
                      {tab === 'login'
                        ? role === 'citizen'
                          ? 'Verify & Access Citizen Portal'
                          : role === 'responder'
                          ? 'Verify & Enter Field Ops Hub'
                          : 'Verify & Enter Command Desk'
                        : 'Register Official Profile'}
                    </span>
                  </>
                )}
              </button>
            </div>

            {/* 1-Click Instant Demo Access */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider text-center mb-2">
                ⚡ 1-Click Instant Demo Access
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickLogin('citizen')}
                  className="px-2 py-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors text-center cursor-pointer"
                >
                  Citizen Portal
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickLogin('responder')}
                  className="px-2 py-1.5 text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors text-center cursor-pointer"
                >
                  Responder Hub
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickLogin('admin')}
                  className="px-2 py-1.5 text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-center cursor-pointer"
                >
                  Govt Admin
                </button>
              </div>
            </div>
          </form>

          {/* Languages */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] text-slate-500">
            <span className="leading-tight">Transboundary Node: CWC-Patna & DHM-Kathmandu</span>
            <div className="flex items-center gap-2 font-semibold shrink-0">
              <span className="text-primary cursor-pointer">EN</span>
              <span>•</span>
              <span className="hover:text-primary cursor-pointer">हिन्दी</span>
              <span>•</span>
              <span className="hover:text-primary cursor-pointer">नेपाली</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
