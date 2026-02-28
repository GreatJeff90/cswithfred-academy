"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  GraduationCap, 
  ChevronRight, 
  Zap, 
  Github,
  ArrowUpRight
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      
      {/* Hero Section: Focused on Whitespace and Typography */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial="initial"
              animate="animate"
              className="lg:col-span-7 space-y-10"
            >
              <motion.div variants={fadeIn} className="flex items-center gap-3 text-blue-600 font-semibold tracking-wide uppercase text-sm">
                <span className="w-12 h-[1px] bg-blue-600"></span>
                CS • AI • Programming
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-6xl lg:text-8xl font-medium tracking-tight leading-[0.95] text-slate-950">
                Learn Computer Science <span className="text-slate-400 italic font-light">the clear way.</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-xl text-slate-500 max-w-xl leading-relaxed font-light">
                Welcome to <span className="font-semibold text-slate-900">CS with Fred</span>. Master complex systems through structured courses, practical guides, and open-source labs.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-6 pt-4">
                <Link href="/courses" className="group flex items-center gap-3 px-8 py-5 bg-slate-950 text-white rounded-full font-medium transition-all hover:bg-blue-600">
                  Explore Courses <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/books" className="px-8 py-5 border border-slate-200 hover:border-slate-900 rounded-full font-medium transition-all">
                  View Books
                </Link>
              </motion.div>
            </motion.div>

            {/* Main Editorial Image */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100 relative shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  alt="Minimalist workspace with laptop" 
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] z-10">
                <p className="text-xs font-bold text-blue-600 mb-1">NEW WEEKLY</p>
                <p className="text-sm text-slate-600">Deep dives into Neural Networks just added.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Resource: Clean Grid with Image support */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-medium mb-4">Core Foundations</h2>
              <p className="text-slate-500 text-lg">We prioritize first principles. No fluff, just the logic that powers the world's most scalable systems.</p>
            </div>
            <Link href="/roadmap" className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 transition-colors">
              Full Curriculum <ArrowUpRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <ResourceCard 
              imageUrl="https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop"
              icon={<BookOpen size={20} />} 
              label="Courses" 
              title="Algorithm Mastery" 
              desc="From Big O notation to complex dynamic programming."
            />
            <ResourceCard 
              imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
              icon={<Code size={20} />} 
              label="Guides" 
              title="System Design" 
              desc="Learn how to architect applications for millions of users."
            />
            <ResourceCard 
              imageUrl="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop"
              icon={<Github size={20} />} 
              label="Community" 
              title="Open Source Lab" 
              desc="Free templates and boilerplate for your next big idea."
            />
          </div>
        </div>
      </section>

      {/* Institutional/Academic Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="border border-slate-200 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16">
             <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden bg-slate-100 relative shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop" 
                  fill 
                  className="object-cover" 
                  alt="Library and Research" 
                />
             </div>
             
             <div className="w-full lg:w-1/2 space-y-6">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <GraduationCap size={28} />
                </div>
                <h2 className="text-4xl font-medium">Thesis & Capstone Support</h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                  Stuck on your research? We provide structured mentorship for BSc, Masters, and PhD students. From topic selection to final defense preparation.
                </p>
                <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-blue-600 transition-all">
                  Book a Consultation
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface ResourceCardProps {
  icon: React.ReactNode;
  label: string;
  title: string;
  desc: string;
  imageUrl: string;
}

function ResourceCard({ icon, label, title, desc, imageUrl }: ResourceCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-video mb-8 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden relative group-hover:border-blue-300 transition-all duration-500">
        <Image 
          src={imageUrl} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105" 
          alt={title}
        />
        <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
          {icon} {label}
        </div>
        <h3 className="text-2xl font-medium group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-slate-500 font-light leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}