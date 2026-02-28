"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, GraduationCap, Book, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Courses', href: '/courses' },
    { name: 'Books', href: '/books' },
    { name: 'Thesis Support', href: '/thesis' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 pt-6 px-6">
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md border border-slate-200 rounded-full px-8 py-3 flex items-center justify-between shadow-sm">
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-slate-950 rounded-lg flex items-center justify-center text-white transition-all group-hover:bg-blue-600">
            <Code2 size={20} />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">CS with Fred</span>
            <span className="text-lg font-medium text-slate-950">Academy</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-500 hover:text-slate-950 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/register" 
            className="group flex items-center gap-2 bg-slate-950 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all"
          >
            Enroll Now
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-900">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-24 left-6 right-6 bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-2xl font-medium text-slate-900 border-b border-slate-100 pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/register" 
                onClick={() => setIsOpen(false)} 
                className="w-full bg-slate-950 text-white py-5 rounded-2xl text-center font-medium"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}