"use client";

import { useState } from "react";
import SocialLinks from "./SocialLinks";
import FullScreenMenu from "./FullScreenMenu";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#0d0f14]/60 border-b border-slate-800/60 shadow-lg">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <a href="#home" className="text-2xl font-bold tracking-tight text-white">
                        Ravi<span className="text-accent">.</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10 text-lg font-medium text-slate-300">
                        <a href="#home" className="hover:text-accent transition">Home</a>
                        <a href="#projects" className="hover:text-accent transition">Projects</a>
                        <a href="#skills" className="hover:text-accent transition">Skills</a>
                        <a href="#contact" className="hover:text-accent transition">Contact</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:block"><SocialLinks /></div>

                        {/* Mobile Menu Button */}
                        <button
                            aria-label="Open menu"
                            onClick={() => setOpen(true)}
                            className="md:hidden p-2 rounded-md bg-white/5 hover:bg-white/10 transition"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <FullScreenMenu open={open} onClose={() => setOpen(false)} />
        </>
    );
}
