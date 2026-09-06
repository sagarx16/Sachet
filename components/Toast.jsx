'use client';

import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Toast() {
  const { toast } = useAuth();

  if (!toast) return null;

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

  return (
    <div
      className={`fixed bottom-6 right-6 z-[9999] flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-lg transition-all duration-300 transform translate-y-0 opacity-100 ${
        colors[toast.type] || colors.info
      }`}
    >
      <span className="material-symbols-outlined text-[20px]">
        {icons[toast.type] || 'info'}
      </span>
      <span className="text-sm font-medium font-sans">{toast.message}</span>
    </div>
  );
}
