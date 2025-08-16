import Link from "next/link";

export default function NotFound() {
  return (
    <main dir="rtl" className="min-h-screen flex flex-col items-center justify-center text-center space-y-4 p-4">
      <h1 className="text-3xl font-bold">העמוד לא נמצא</h1>
      <p className="text-lg">הדף שחיפשת לא קיים. בדוק את הכתובת או חזור ללוח הבקרה.</p>
      <Link href="/" className="text-blue-600 hover:underline">
        חזרה לדשבורד
      </Link>
    </main>
  );
}
