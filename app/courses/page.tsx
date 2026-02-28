"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Clock, 
  BarChart, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const COURSES = [
  {
    id: 1,
    title: "Advanced Data Structures",
    category: "Computer Science",
    level: "Intermediate",
    duration: "12 Weeks",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop",
    desc: "Move beyond arrays and lists. Master B-Trees, Graphs, and Heaps."
  },
  {
    id: 2,
    title: "Neural Networks from Scratch",
    category: "Artificial Intelligence",
    level: "Advanced",
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    desc: "Build backpropagation and optimizers without heavy libraries."
  },
  {
    id: 3,
    title: "Distributed Systems",
    category: "Architecture",
    level: "Advanced",
    duration: "10 Weeks",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2026&auto=format&fit=crop",
    desc: "Consensus algorithms, replication, and CAP theorem in practice."
  },
  {
    id: 4,
    title: "Modern Web Engineering",
    category: "Software Engineering",
    level: "Beginner",
    duration: "6 Weeks",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    desc: "The full stack, optimized for performance and accessibility."
  },
  {
    id: 5,
    title: "Operating System Kernels",
    category: "Systems",
    level: "Intermediate",
    duration: "14 Weeks",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1974&auto=format&fit=crop",
    desc: "Understand memory management, scheduling, and I/O cycles."
  },
  {
    id: 6,
    title: "Applied Cryptography",
    category: "Security",
    level: "Intermediate",
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    desc: "From AES-256 to Zero-Knowledge Proofs and Blockchain."
  }
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <header className="max-w-3xl mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4"
          >
            <Layers size={14} /> Knowledge Base
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-medium tracking-tight text-slate-950 mb-6"
          >
            Comprehensive <span className="text-slate-400 italic font-light">Curriculum.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 font-light leading-relaxed"
          >
            Structured learning paths designed to take you from fundamentals to architectural mastery. No shortcuts, just depth.
          </motion.p>
        </header>

        {/* Toolbar: Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12 py-6 border-y border-slate-100">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search courses (e.g. 'Systems')" 
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none"
            />
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-950 text-white rounded-full text-sm font-medium whitespace-nowrap">
              All Courses
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-slate-900 transition-all whitespace-nowrap">
              Computer Science
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-slate-900 transition-all whitespace-nowrap">
              AI & ML
            </button>
          </div>
        </div>

        {/* Course Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {COURSES.map((course) => (
            <motion.div key={course.id} variants={itemVariants} className="group">
              <Link href={`/courses/${course.id}`}>
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-slate-100 mb-6">
                  <Image 
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                      {course.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1"><Clock size={14} /> {course.duration}</span>
                    <span className="flex items-center gap-1"><BarChart size={14} /> {course.level}</span>
                  </div>
                  <h3 className="text-2xl font-medium text-slate-950 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                    {course.title}
                    <ArrowRight size={20} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-slate-500 font-light leading-relaxed line-clamp-2">
                    {course.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 lg:p-20 rounded-[3rem] bg-blue-600 text-white relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-medium mb-6">Can't find what you're looking for?</h2>
            <p className="text-blue-100 text-lg mb-10 font-light">
              We're constantly adding new modules. Suggest a topic or join the waiting list for our upcoming "Quantum Computing Foundations" series.
            </p>
            <button className="flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-slate-100 transition-all">
              <Sparkles size={18} /> Suggest a Topic
            </button>
          </div>
          <div className="absolute right-[-10%] top-[-10%] opacity-10 rotate-12 pointer-events-none">
            <Layers size={400} />
          </div>
        </motion.div>

      </div>
    </main>
  );
}