import Link from 'next/link';

export default function DashboardHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          aria-label="MoodFLOW - Back to home"
        >
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-slate-50">
            MoodFLOW
          </span>
        </Link>
      </div>
    </header>
  );
}
