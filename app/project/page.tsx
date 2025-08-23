import Header from "@/components/Header";

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-3">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <h2 className="font-bold text-lg mb-3">פרטי פרויקט</h2>
            <ul className="space-y-2 text-sm">
              <li><span className="text-slate-500">שם: </span>Alpha Refinery Upgrade</li>
              <li><span className="text-slate-500">לקוח: </span>PetroChem</li>
              <li><span className="text-slate-500">מנהל: </span>דנה כהן</li>
              <li><span className="text-slate-500">שלב: </span>ביצוע</li>
              <li><span className="text-slate-500">דד־ליין: </span>2025‑12‑15</li>
            </ul>
            <div className="mt-4">
              <div className="text-sm text-slate-600 mb-2">התקדמות</div>
              <div className="w-full bg-slate-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full" style={{width:"64%"}}></div></div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm mt-6">
            <h3 className="font-bold mb-3">קישורים מהירים</h3>
            <div className="grid grid-cols-2 gap-2">
              <a className="rounded-xl border p-3 hover:bg-slate-50 text-center" href="/contracts">חוזים</a>
              <a className="rounded-xl border p-3 hover:bg-slate-50 text-center" href="#">לוח זמנים</a>
              <a className="rounded-xl border p-3 hover:bg-slate-50 text-center" href="#">משימות</a>
              <a className="rounded-xl border p-3 hover:bg-slate-50 text-center" href="#">דוחות</a>
            </div>
          </div>
        </aside>

        <section className="lg:col-span-6 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h2 className="font-bold text-lg mb-2">מיילסטונים</h2>
            <div className="space-y-4">
              {["תכנון","רכש","ביצוע","הפעלה"].map((lbl,i)=>{
                const widths = ["100%","70%","40%","10%"];
                const notes = ["✔️ הושלם","בהתקדמות","בהתקדמות","טרם החל"];
                return (
                  <div key={i} className="flex items-center justify-between gap-3">
                    <div className="font-semibold">{lbl}</div>
                    <div className="flex-1">
                      <div className="w-full bg-slate-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full" style={{width:widths[i]}}></div></div>
                    </div>
                    <div className="text-sm text-slate-600">{notes[i]}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold mb-2">סיכונים פתוחים</h3>
              <ul className="list-disc pr-5 space-y-1 text-sm">
                <li>עיכוב אספקת משאבות</li>
                <li>עומס קבלן אזרחי בשבוע הבא</li>
                <li>חריגה תקציבית בסעיף פלדה</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold mb-2">אישורים ממתינים</h3>
              <ul className="space-y-2 text-sm">
                <li className="p-2 rounded-lg border flex justify-between"><span>RFI‑24 — שינוי צנרת</span><button className="text-blue-700">פתח</button></li>
                <li className="p-2 rounded-lg border flex justify-between"><span>חשבונית #204 — קבלן Y</span><button className="text-blue-700">פתח</button></li>
                <li className="p-2 rounded-lg border flex justify-between"><span>Submittal — משאבות</span><button className="text-blue-700">פתח</button></li>
              </ul>
            </div>
          </div>
        </section>

        <aside className="lg:col-span-3">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm sticky top-24">
            <h2 className="font-bold text-lg mb-3">🤖 תובנות הסוכן</h2>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">SPI ירד ל‑0.94 — בדוק עומסים בלו"ז</div>
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">CPI 1.02 — עומד בתקציב</div>
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">המלצה: להקדים הזמנת מסננים</div>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
}
