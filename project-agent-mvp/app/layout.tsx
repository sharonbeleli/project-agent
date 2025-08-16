import "./globals.css";

export const metadata: import("next").Metadata = {
  title: "Project Agent",
  icons: { icon: "/favicon.svg" },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className="bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
