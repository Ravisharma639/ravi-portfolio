"use client";

import { motion, AnimatePresence } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function FullScreenMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/80"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-2xl mx-6 bg-white/5 rounded-3xl p-10 text-center"
          >
            <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <nav className="space-y-6">
              <a href="home" onClick={onClose} className="text-2xl font-semibold block text-white">Home</a>
              <a href="projects" onClick={onClose} className="text-2xl font-semibold block text-white">Projects</a>
              <a href="skills" onClick={onClose} className="text-2xl font-semibold block text-white">Skills</a>
              <a href="contact" onClick={onClose} className="text-2xl font-semibold block text-white">Contact</a>
            </nav>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
