"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Milestone, 
  Terminal, 
  Cpu, 
  Globe, 
  Database, 
  Shield, 
  Layers,
  ChevronRight,
  Circle,
  Link,
  Download
} from 'lucide-react';

const roadmapData = [
  {
    phase: "Phase 01",
    title: "Foundations & Logic",
    status: "Standard",
    icon: <Terminal size={24} />,
    color: "bg-blue-600",
    topics: ["Discrete Mathematics", "C Programming & Memory", "Asymptotic Analysis (Big O)", "Basic Data Structures"]
  },
  {
    phase: "Phase 02",
    title: "Deep Systems",
    status: "Intermediate",
    icon: <Cpu size={24} />,
    color: "bg-slate-900",
    topics: ["Operating Systems Kernels", "Computer Architecture", "Assembly Language", "Concurrency & Multi-threading"]
  },
  {
    phase: "Phase 03",
    title: "Distributed Architecture",
    status: "Advanced",
    icon: <Globe size={24} />,
    color: "bg-blue-600",
    topics: ["Networking Protocols (TCP/UDP)", "Microservices Design", "CAP Theorem & Consensus", "Load Balancing Strategies"]
  },
  {
    phase: "Phase 04",
    title: "Data & Intelligence",
    status: "Specialization",
    icon: <Database size={24} />,
    color: "bg-slate-900",
    topics: ["Relational vs NoSQL Theory", "Neural Network Foundations", "Vector Databases", "Large Language Models"]
  }
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <header className="max-w-3xl mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4"
          >
            <Milestone size={16} /> The Path to Mastery
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-medium tracking-tight text-slate-950 mb-6"
          >
            Engineering <span className="text-slate-400 italic font-light">Roadmap.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 font-light leading-relaxed"
          >
            A structured, non-linear guide to becoming a world-class engineer. Follow the sequence or dive into specific specializations.
          </motion.p>
        </header>

        {/* Roadmap Timeline */}
        <section className="relative">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-100 hidden lg:block" />

          <div className="space-y-24">
            {roadmapData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`relative flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className={`p-10 rounded-[2.5rem] border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all group ${
                    index % 2 !== 0 ? 'lg:text-right lg:items-end' : 'lg:text-left lg:items-start'
                  } flex flex-col`}>
                    <span className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-2">
                      {item.phase} • {item.status}
                    </span>
                    <h3 className="text-3xl font-medium mb-6 text-slate-950">{item.title}</h3>
                    
                    <ul className={`space-y-4 mb-8 ${index % 2 !== 0 ? 'lg:items-end' : 'lg:items-start'} flex flex-col w-full`}>
                      {item.topics.map((topic, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-500 font-light">
                          {index % 2 === 0 ? <Circle size={6} className="fill-blue-600 text-blue-600" /> : null}
                          {topic}
                          {index % 2 !== 0 ? <Circle size={6} className="fill-blue-600 text-blue-600" /> : null}
                        </li>
                      ))}
                    </ul>

                    <button className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                      Explore Module <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Center Icon Circle */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex w-16 h-16 rounded-full bg-white border border-slate-100 items-center justify-center z-10 shadow-sm">
                   <div className={`w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center`}>
                    {item.icon}
                   </div>
                </div>

                {/* Empty Side (For Layout Balance) */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Specialization CTA */}
        <section className="mt-40 p-12 lg:p-24 bg-slate-950 rounded-[4rem] text-center text-white overflow-hidden relative">
          <div className="relative z-10">
            <Layers className="mx-auto mb-8 text-blue-500" size={48} />
            <h2 className="text-4xl lg:text-5xl font-medium mb-6">Build your own path.</h2>
            <p className="text-slate-400 text-lg font-light mb-12 max-w-xl mx-auto">
              Our curriculum is modular. Whether you want to focus on Security, Cloud Infrastructure, or AI, we have specific labs ready for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <Link href="/register">
                <button className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all">
                  Join the Lab
                </button>
              </Link>
              <a 
                href="/cs_roadmap.pdf" 
                download="CS_with_Fred_Roadmap.pdf"
                className="inline-flex items-center gap-2 px-10 py-4 border border-slate-700 text-white rounded-full font-bold hover:bg-slate-900 transition-all text-center cursor-pointer"
              >
                <Download size={18} /> Download PDF Roadmap
              </a>
            </div>
          </div>
          {/* Subtle background decoration */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </section>

      </div>
    </main>
  );
}