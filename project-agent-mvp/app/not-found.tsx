import Link from 'next/link';

export default function NotFound() {
  return (
    <html dir="rtl" lang="he">
      <body className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">העמוד לא נמצא</h2>
          <p className="mb-6">הדף שחיפשת לא קיים. לחזרה ללוח הבקרה לחץ על הקישור הבא.</p>
          <Link href="/" className="text-blue-600 hover:underline">חזרה לדשבורד</Link>
        </div>
      </body>
    </html>
  );
}

