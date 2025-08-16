export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <a href="/" className="text-xl font-bold text-blue-700">
          Project Agent
        </a>
        <div className="flex-1" />
        <input
          aria-label="חיפוש"
          className="hidden md:block w-72 rounded-xl border border-slate-300 px-4 py-2"
          placeholder="חיפוש..."
        />
        <a className="rounded-full p-2 hover:bg-slate-100" title="התראות">
          🔔
        </a>
        <a className="rounded-full p-2 hover:bg-slate-100" title="סוכן AI">
          🤖
        </a>
        <img
          alt="User"
          src="/avatar.svg"
          className="w-9 h-9 rounded-full border"
        />
      </div>
    </header>
  );
}
