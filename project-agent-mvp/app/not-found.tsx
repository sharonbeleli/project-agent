import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-3xl font-bold">הדף לא נמצא</h1>
      <p>בדקו את הכתובת או חזרו לדשבורד.</p>
      <Link href="/" className="text-blue-600 underline">חזרה לדשבורד</Link>
    </main>
  );
}
