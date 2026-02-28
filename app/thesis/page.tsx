"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  FileSearch, 
  MessageSquare, 
  Binary, 
  Microscope, 
  CheckCircle2,
  Calendar,
  ArrowRight
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const SERVICES = [
  {
    title: "Topic Refinement",
    desc: "Transforming a broad interest into a narrow, defensible research question.",
    icon: <FileSearch className="text-blue-600" size={24} />,
  },
  {
    title: "Methodology Design",
    desc: "Rigorous selection of algorithms, datasets, and evaluation metrics.",
    icon: <Binary className="text-blue-600" size={24} />,
  },
  {
    title: "Implementation Support",
    desc: "Technical guidance for your prototype, simulation, or proof-of-concept.",
    icon: <Microscope className="text-blue-600" size={24} />,
  },
  {
    title: "Defense Preparation",
    desc: "Mock vivas and presentation coaching to handle the toughest committees.",
    icon: <MessageSquare className="text-blue-600" size={24} />,
  }
];

export default function ThesisPage() {
  return (
    <main className="min-h-screen bg-white pt-32">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="initial" animate="animate" className="space-y-8">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest">
              <GraduationCap size={16} /> Research & Academia
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-6xl lg:text-7xl font-medium tracking-tight leading-tight">
              Elevate your <span className="text-slate-400 italic font-light">Academic Legacy.</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-slate-500 font-light leading-relaxed max-w-xl">
              From initial abstract to final defense. We provide high-level mentorship for Computer Science students navigating complex research frontiers.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-950 text-white rounded-full font-bold hover:bg-blue-600 transition-all flex items-center gap-2">
                Book a Consultation <Calendar size={18} />
              </button>
              <button className="px-8 py-4 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all">
                View Past Projects
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop" 
              fill 
              className="object-cover" 
              alt="Academic research environment" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-50 py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-medium mb-6">How we assist</h2>
            <p className="text-slate-500 font-light">Specialized support across the entire research lifecycle, ensuring your work meets international academic standards.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The "Fred's Philosophy" Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2 relative">
             <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg z-10">
                <Image 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
                  fill
                  className="object-cover"
                  alt="Researcher working"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20 -z-10" />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-medium">The Methodology of Success</h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              Academic research in Computer Science isn't just about coding; it's about <span className="text-slate-900 font-medium italic">contribution</span>. We help you identify the gap in current literature and bridge it with rigorous evidence.
            </p>
            <ul className="space-y-4 pt-4">
              {['BSc Computer Science', 'MSc Artificial Intelligence', 'PhD Thesis Defense'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-blue-600" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="pb-32 container mx-auto px-6">
        <div className="bg-slate-950 rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-medium mb-8">Ready to start your research?</h2>
            <p className="text-slate-400 text-xl font-light mb-12 max-w-xl mx-auto">
              Limited slots available for the 2026 academic session. Book an initial 15-minute alignment call.
            </p>
            <button className="px-12 py-5 bg-blue-600 rounded-full font-bold hover:bg-blue-700 transition-all inline-flex items-center gap-3">
              Apply for Mentorship <ArrowRight size={20} />
            </button>
          </div>
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
             <div className="absolute bottom-20 right-20 w-64 h-64 border border-white rounded-full" />
          </div>
        </div>
      </section>

    </main>
  );
}