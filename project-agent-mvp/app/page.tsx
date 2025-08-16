"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { supabase } from "@/lib/supabase";

type Project = {
  id: string;
  name: string;
  client: string | null;
  progress: number;
  status: "green" | "yellow" | "red";
  owner: string | null;
  due_date: string | null;
  created_at: string;
};

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data) setProjects(data as Project[]);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6" dir="rtl">
        <nav className="lg:col-span-3">
          <ul className="bg-white border border-slate-200 rounded-2xl p-2 shadow-sm">
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-100 font-semibold" href="/">
                📊 דשבורד
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50" href="/project">
                📁 פרויקט
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50" href="/contracts">
                📄 חוזים וחשבוניות
              </a>
            </li>
          </ul>
        </nav>

        <section className="lg:col-span-9 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <KpiCard label="פרויקטים פעילים" value={projects.length} />
            <KpiCard label="בסיכון" value={projects.filter((p) => p.status !== "green").length} accent="amber" />
            <KpiCard label="במסגרת תקציב" value="—" />
            <KpiCard label="בזמן" value="—" />
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg">רשימת פרויקטים</h2>
              <AddProject onAdded={(p) => setProjects([p, ...projects])} />
            </div>
            {loading ? (
              <div className="p-6">טוען…</div>
            ) : (
              <div className="overflow-auto">
                <table className="min-w-full text-sm">
                  <thead className="text-slate-600">
                    <tr className="border-b">
                      <th className="text-right py-2">שם</th>
                      <th className="text-right py-2">לקוח</th>
                      <th className="text-right py-2">התקדמות</th>
                      <th className="text-right py-2">סטטוס</th>
                      <th className="text-right py-2">מנהל</th>
                      <th className="text-right py-2">דד־ליין</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {projects.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-50">
                        <td className="py-3 font-semibold">{p.name}</td>
                        <td className="py-3">{p.client ?? "—"}</td>
                        <td className="py-3">
                          <div className="w-40 bg-slate-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${p.progress}%` }} />
                          </div>
                        </td>
                        <td className="py-3">{statusDot(p.status)}</td>
                        <td className="py-3">{p.owner ?? "—"}</td>
                        <td className="py-3">{p.due_date ?? "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

function statusDot(s: Project["status"]) {
  const map = { green: "text-emerald-700", yellow: "text-amber-700", red: "text-red-700" } as const;
  const label = { green: "ירוק", yellow: "צהוב", red: "אדום" }[s];
  return <span className={`inline-flex items-center gap-2 ${map[s]}`}>● {label}</span>;
}

function KpiCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: number | string;
  accent?: "amber" | "emerald" | "blue";
}) {
  const color =
    accent === "amber" ? "text-amber-600" : accent === "emerald" ? "text-emerald-600" : accent === "blue" ? "text-blue-600" : "";
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
      <div className="text-sm text-slate-600">{label}</div>
      <div className={`text-3xl font-bold mt-2 ${color}`}>{value}</div>
    </div>
  );
}

function AddProject({ onAdded }: { onAdded: (p: any) => void }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    client: "",
    owner: "" as string,
    progress: 0,
    status: "green" as "green" | "yellow" | "red",
    due_date: "",
  });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const { data, error } = await supabase.from("projects").insert(form).select().single();
    if (!error && data) {
      onAdded(data);
      setOpen(false);
      setForm({ name: "", client: "", owner: "", progress: 0, status: "green", due_date: "" });
    }
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-xl">
        פרויקט חדש
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <form onSubmit={submit} className="bg-white rounded-2xl border border-slate-200 w-full max-w-lg p-4 space-y-3" dir="rtl">
            <div className="text-lg font-bold">הוסף פרויקט</div>
            <input
              required
              placeholder="שם פרויקט"
              className="w-full rounded-xl border px-3 py-2"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              placeholder="לקוח"
              className="w-full rounded-xl border px-3 py-2"
              value={form.client}
              onChange={(e) => setForm({ ...form, client: e.target.value })}
            />
            <input
              placeholder="מנהל"
              className="w-full rounded-xl border px-3 py-2"
              value={form.owner}
              onChange={(e) => setForm({ ...form, owner: e.target.value })}
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="number"
                min={0}
                max={100}
                placeholder="התקדמות %"
                className="rounded-xl border px-3 py-2"
                value={form.progress}
                onChange={(e) => setForm({ ...form, progress: Number(e.target.value) })}
              />
              <select
                className="rounded-xl border px-3 py-2"
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value as any })}
              >
                <option value="green">ירוק</option>
                <option value="yellow">צהוב</option>
                <option value="red">אדום</option>
              </select>
            </div>
            <input
              type="date"
              className="w-full rounded-xl border px-3 py-2"
              value={form.due_date}
              onChange={(e) => setForm({ ...form, due_date: e.target.value })}
            />
            <div className="pt-2 flex gap-3 justify-end">
              <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 rounded-xl border">
                בטל
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">שמור</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
