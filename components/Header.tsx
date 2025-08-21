"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/testimonials" },
   
    

  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl shadow-xl border-b border-indigo-700/40">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: [1, 1.08, 1], boxShadow: [
              '0 0 0px #6366f1',
              '0 0 16px #6366f1',
              '0 0 0px #6366f1'
            ] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="rounded-full border-2 border-indigo-500 shadow-indigo-500/40 shadow-lg"
          >
            <Image
              src="/images/logo.jfif"
              width={40}
              height={40}
              alt="Logo"
              className="w-10 h-10 rounded-full group-hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
          <span className="text-white text-2xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:text-indigo-300 transition-colors duration-300">
            MyPortfolio
          </span>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative text-gray-200 hover:text-indigo-400 font-semibold transition-colors px-2 py-1"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>{link.name}</span>
              <motion.span
                layoutId="underline"
                className="absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100"
                whileHover={{ opacity: 1, y: 2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-indigo-300 hover:text-white p-2 rounded-full bg-black/30 backdrop-blur"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9, rotate: 20 }}
          aria-label="Open menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </motion.div>
      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/80 backdrop-blur-lg px-6 py-4 space-y-4 border-b border-indigo-700/40 shadow-lg"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="block text-gray-200 hover:text-indigo-400 font-semibold text-lg transition-colors"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
