import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-sky-700">
          <span className="material-symbols-outlined text-[32px]">travel_explore</span>
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">ISKA</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900">Page not found</h1>
        <p className="mt-3 text-sm text-slate-600">
          The route you requested could not be located in the resilience grid.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
        >
          Return to home
        </Link>
      </div>
    </main>
  );
}
