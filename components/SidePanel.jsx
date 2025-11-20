"use client";

import SocialLinks from "./SocialLinks";

export default function SidePanel() {
  return (
    <>
      {/* Desktop Side Panel (sticky) */}
      <aside className="hidden md:flex w-full md:w-80 p-6 border-r flex-col gap-6 sticky top-6 h-[calc(100vh-48px)]">
        <div className="flex flex-col items-center text-center">
          <div className="w-36 h-36 rounded-xl overflow-hidden border">
            <img src="/profile.jpg" alt="Ravi Sharma" className="w-full h-full object-cover" />
          </div>
          <h2 className="mt-4 text-xl font-semibold">Ravi Sharma</h2>
          <p className="text-sm text-slate-500 mt-1">Java • MERN • Full-Stack Developer</p>
        </div>

        <div className="space-y-3">
          <a
            href="/resume.pdf"
            download="Ravi_Sharma_Resume.pdf"
            className="block text-center px-4 py-2 border rounded-md shadow-sm hover:shadow-md"
          >
            Download Resume
          </a>

          <a href="mailto:ravi82639f@gmail.com" className="block text-center px-4 py-2 rounded-md bg-accent text-white">
            Email Me
          </a>

          <a
            href="https://wa.me/917039917040"
            target="_blank"
            rel="noreferrer"
            className="block text-center px-4 py-2 rounded-md border hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="mt-auto">
          <h4 className="text-sm text-slate-500 mb-2">Connect</h4>
          <SocialLinks />
        </div>
      </aside>

      {/* Mobile Side Panel (compact, centered) */}
      <aside className="md:hidden w-full p-6 flex flex-col items-center text-center gap-4">
        <div className="w-32 h-32 rounded-xl overflow-hidden border">
          <img src="/profile.jpg" alt="Ravi Sharma" className="w-full h-full object-cover" />
        </div>

        <h2 className="mt-2 text-xl font-semibold">Ravi Sharma</h2>
        <p className="text-sm text-slate-400">Java • MERN • Full-Stack Developer</p>

        <div className="w-full space-y-3 mt-3">
          <a
            href="/resume.pdf"
            download="Ravi_Sharma_Resume.pdf"
            className="block text-center px-4 py-2 border rounded-md shadow-sm hover:shadow-md"
          >
            Download Resume
          </a>

          <a href="mailto:ravi82639f@gmail.com" className="block text-center px-4 py-2 rounded-md bg-accent text-white">
            Email Me
          </a>

          <a
            href="https://wa.me/917039917040"
            target="_blank"
            rel="noreferrer"
            className="block text-center px-4 py-2 rounded-md border hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="mt-4">
          <SocialLinks />
        </div>
      </aside>
    </>
  );
}
