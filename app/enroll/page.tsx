"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Video, 
  MessageSquare, 
  CheckCircle2, 
  Loader2, 
  ArrowRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export default function ConsultationPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formspreeUrl = process.env.NEXT_PUBLIC_FORMSPREE_ID || "https://formspree.io/f/xvzbngln";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <header className="max-w-3xl mx-auto text-center mb-20">
          <motion.div 
            initial="initial" animate="animate" variants={fadeIn}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Calendar size={14} /> Expert Advisory
          </motion.div>
          <motion.h1 
            initial="initial" animate="animate" variants={fadeIn}
            className="text-5xl lg:text-7xl font-medium tracking-tight text-slate-950 mb-6"
          >
            Book your <span className="text-slate-400 italic font-light">Consultation.</span>
          </motion.h1>
          <motion.p 
            initial="initial" animate="animate" variants={fadeIn}
            className="text-xl text-slate-500 font-light leading-relaxed"
          >
            Get direct technical guidance on your research, architecture, or career path. Let's solve the complex parts together.
          </motion.p>
        </header>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Consultation Specs */}
          <div className="lg:col-span-5 space-y-12">
            <section className="space-y-8">
              <h3 className="text-2xl font-medium text-slate-950">What to expect</h3>
              <div className="space-y-6">
                <ConsultationFeature 
                  icon={<Video size={20} />} 
                  title="Virtual Deep-Dive" 
                  desc="A 45-minute high-intensity session via Google Meet or Zoom." 
                />
                <ConsultationFeature 
                  icon={<MessageSquare size={20} />} 
                  title="Technical Audit" 
                  desc="We review your current code, thesis draft, or system design live." 
                />
                <ConsultationFeature 
                  icon={<Clock size={20} />} 
                  title="Actionable Roadmap" 
                  desc="Receive a summary document with clear next steps after our call." 
                />
              </div>
            </section>

            <div className="p-10 bg-slate-950 rounded-[2.5rem] text-white relative overflow-hidden">
               <Sparkles className="text-blue-500 mb-6" size={32} />
               <h4 className="text-xl font-medium mb-4">Research Specialization</h4>
               <p className="text-slate-400 font-light leading-relaxed mb-6 text-sm">
                 I specialize in helping students navigate the gap between "working code" and "academic contribution" for BSc, MSc, and PhD levels.
               </p>
               <div className="flex flex-wrap gap-2">
                 {['Neural Nets', 'Dist. Systems', 'Kernel Dev'].map(tag => (
                   <span key={tag} className="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-bold uppercase tracking-wider">{tag}</span>
                 ))}
               </div>
            </div>
          </div>

          {/* Right Side: Intake Form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 bg-slate-50 border border-slate-200 rounded-[3rem] text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl font-medium text-slate-950">Request Sent</h2>
                  <p className="text-slate-500 font-light text-lg">
                    I've received your consultation request. I'll review your details and send a calendar invite within 24 hours.
                  </p>
                  <button 
                    onClick={() => window.location.href = '/'}
                    className="px-8 py-4 bg-slate-950 text-white rounded-full font-bold"
                  >
                    Return Home
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-sm"
                >
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <FormInput label="Full Name" name="full_name" placeholder="Fredrick Mensah" required />
                    <FormInput label="Email Address" name="email" type="email" placeholder="fred@research.com" required />
                  </div>

                  <div className="space-y-6 mb-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Consultation Category</label>
                      <select 
                        name="category"
                        className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 transition-all outline-none cursor-pointer appearance-none"
                      >
                        <option>Thesis & Research Guidance</option>
                        <option>Architecture & System Design Audit</option>
                        <option>Career Strategy (CS/Software Eng)</option>
                        <option>Custom Technical Problem</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Brief Description of your problem</label>
                      <textarea 
                        name="problem_description"
                        required
                        rows={4}
                        placeholder="Tell me a bit about what you're stuck on..."
                        className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 transition-all outline-none resize-none"
                      />
                    </div>

                    <div className="p-4 bg-blue-50 rounded-2xl flex gap-3 items-start">
                      <HelpCircle className="text-blue-600 shrink-0 mt-1" size={18} />
                      <p className="text-xs text-blue-700 leading-relaxed font-medium">
                        Consultation slots are limited. Providing a detailed description helps me prepare specifically for our call.
                      </p>
                    </div>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm mb-6 bg-red-50 p-4 rounded-xl">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}

                  <button 
                    disabled={status === 'loading'}
                    type="submit" 
                    className="w-full py-5 bg-slate-950 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl active:scale-[0.98] disabled:opacity-50"
                  >
                    {status === 'loading' ? <Loader2 className="animate-spin" /> : (
                      <>
                        Request Session <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}

function FormInput({ label, name, type = "text", placeholder, required = false }: any) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">{label}</label>
      <input 
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none"
      />
    </div>
  );
}

function ConsultationFeature({ icon, title, desc }: any) {
  return (
    <div className="flex gap-4 group">
      <div className="w-12 h-12 shrink-0 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900">{title}</h4>
        <p className="text-sm text-slate-500 font-light">{desc}</p>
      </div>
    </div>
  );
}