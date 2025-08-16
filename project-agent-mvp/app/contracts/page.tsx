import Header from "@/components/Header";

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-3">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <h2 className="font-bold text-lg mb-3">חוזים וחשבוניות</h2>
            <p className="text-sm text-slate-600">העלה מסמכים להשוואה אוטומטית מול חוזה ושלבי ביצוע.</p>
            <div className="mt-4 space-y-2">
              <label className="block">
                <span className="text-sm text-slate-700">העלה חוזה</span>
                <input type="file" className="mt-1 block w-full text-sm border border-slate-300 rounded-xl px-3 py-2 bg-white" />
              </label>
              <label className="block">
                <span className="text-sm text-slate-700">העלה חשבונית</span>
                <input type="file" className="mt-1 block w-full text-sm border border-slate-300 rounded-xl px-3 py-2 bg-white" />
              </label>
              <button className="w-full bg-blue-600 text-white py-2 rounded-xl">השווה מסמכים</button>
            </div>
          </div>
        </aside>

        <section className="lg:col-span-6 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <h3 className="font-bold text-lg mb-2">תוצאות השוואה</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border p-3">
                <div className="text-sm text-slate-600 mb-1">סכום חשבונית</div>
                <div className="text-2xl font-bold">₪ 148,600</div>
              </div>
              <div className="rounded-xl border p-3">
                <div className="text-sm text-slate-600 mb-1">סכום מותר לפי חוזה</div>
                <div className="text-2xl font-bold">₪ 150,000</div>
              </div>
              <div className="rounded-xl border p-3">
                <div className="text-sm text-slate-600 mb-1">אחוז ביצוע מאושר</div>
                <div className="text-2xl font-bold">92%</div>
              </div>
              <div className="rounded-xl border p-3">
                <div className="text-sm text-slate-600 mb-1">התאמה כוללת</div>
                <div className="text-2xl font-bold text-emerald-600">✔️ תקין</div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold">שורות חשבונית</h3>
              <div className="text-sm text-slate-500">התאמות מול כתב כמויות</div>
            </div>
            <div className="overflow-auto">
              <table className="min-w-full text-sm">
                <thead className="text-slate-600">
                  <tr className="border-b">
                    <th className="text-right py-2">קוד</th>
                    <th className="text-right py-2">תיאור</th>
                    <th className="text-right py-2">כמות</th>
                    <th className="text-right py-2">מחיר יח'</th>
                    <th className="text-right py-2">סכום</th>
                    <th className="text-right py-2">התאמה</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-slate-50">
                    <td className="py-3">P-104</td>
                    <td className="py-3">צנרת נירוסטה DN100</td>
                    <td className="py-3">120 מ'</td>
                    <td className="py-3">₪ 210</td>
                    <td className="py-3">₪ 25,200</td>
                    <td className="py-3 text-emerald-700">✔️</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3">V-307</td>
                    <td className="py-3">שסתום פרפר 6"</td>
                    <td className="py-3">24</td>
                    <td className="py-3">₪ 1,850</td>
                    <td className="py-3">₪ 44,400</td>
                    <td className="py-3 text-amber-700">⚠️ בדיקה</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3">C-205</td>
                    <td className="py-3">בידוד תרמי</td>
                    <td className="py-3">300 מ'</td>
                    <td className="py-3">₪ 95</td>
                    <td className="py-3">₪ 28,500</td>
                    <td className="py-3 text-red-700">❌ חריגה</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <aside className="lg:col-span-3">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm sticky top-24">
            <h2 className="font-bold text-lg mb-3">ציר זמן תשלומים</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>ינואר</span><span>₪ 120,000</span></li>
              <li className="flex justify-between"><span>פברואר</span><span>₪ 80,000</span></li>
              <li className="flex justify-between"><span>מרץ</span><span>₪ 95,000</span></li>
            </ul>
          </div>
        </aside>
      </main>
    </>
  );
}
