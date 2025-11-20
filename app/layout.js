import "./globals.css";

export const metadata = {
  title: "Ravi Sharma — Full Stack Developer",
  description: "Premium side-panel portfolio — Ravi Sharma"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-white dark:bg-[#0b0f14] text-slate-900 dark:text-slate-200">
        {children}
      </body>
    </html>
  );
}
