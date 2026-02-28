"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Loader2, 
  Sparkles, 
  GraduationCap, 
  ShieldCheck,
  Globe,
  Award
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export default function EnrollPage() {
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
        
        {/* Enrollment Header */}
        <header className="max-w-3xl mx-auto text-center mb-16">
          <motion.div 
            initial="initial" 
            animate="animate" 
            variants={fadeIn}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={14} /> Academic Session 2026
          </motion.div>
          <motion.h1 
            initial="initial" 
            animate="animate" 
            variants={fadeIn}
            className="text-5xl lg:text-7xl font-medium tracking-tight text-slate-950 mb-6"
          >
            Start your <span className="text-slate-400 italic font-light">Enrollment.</span>
          </motion.h1>
          <motion.p 
            initial="initial" 
            animate="animate" 
            variants={fadeIn}
            className="text-xl text-slate-500 font-light leading-relaxed"
          >
            Join a global community of engineers and researchers. Complete the form below to begin your journey with CS with Fred.
          </motion.p>
        </header>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Why Enroll? */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-medium">Member Benefits</h3>
              <ul className="space-y-6">
                <BenefitItem 
                  icon={<Globe size={20} />} 
                  title="Global Network" 
                  desc="Connect with senior engineers from top tech hubs worldwide." 
                />
                <BenefitItem 
                  icon={<Award size={20} />} 
                  title="Certified Paths" 
                  desc="Earn industry-recognized certificates upon module completion." 
                />
                <BenefitItem 
                  icon={<ShieldCheck size={20} />} 
                  title="Priority Support" 
                  desc="Direct access to thesis mentors and technical leads." 
                />
              </ul>
            </div>

            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <p className="text-slate-600 italic font-light leading-relaxed">
                "Our goal isn't just to teach syntax, but to build the architectural mindset required for the next decade of computing."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200" />
                <div>
                  <p className="text-sm font-bold text-slate-950">Fredrick O. Mensah</p>
                  <p className="text-xs text-slate-500">Founder, CS with Fred</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Enrollment Form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 bg-blue-600 rounded-[3rem] text-center text-white space-y-6"
                >
                  <CheckCircle2 size={60} className="mx-auto text-blue-200" />
                  <h2 className="text-3xl font-medium">Application Received</h2>
                  <p className="text-blue-100 font-light text-lg">
                    Welcome to the academy. We've sent a confirmation email to your inbox. Your learning dashboard will be ready shortly.
                  </p>
                  <button 
                    onClick={() => window.location.href = '/'}
                    className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold"
                  >
                    Go to Dashboard
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-sm"
                >
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <FormGroup label="First Name" name="first_name" placeholder="Fredrick" required />
                    <FormGroup label="Last Name" name="last_name" placeholder="Mensah" required />
                  </div>

                  <div className="space-y-6 mb-8">
                    <FormGroup label="Academic Email" name="email" type="email" placeholder="fred@university.edu" required />
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Primary Interest</label>
                      <select 
                        name="pathway"
                        className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 transition-all outline-none appearance-none cursor-pointer"
                      >
                        <option>Advanced Algorithms & Data Structures</option>
                        <option>Artificial Intelligence & Neural Networks</option>
                        <option>Thesis & Research Mentorship</option>
                        <option>Full-Stack Engineering (Next.js/Laravel)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Current Status</label>
                      <div className="flex flex-wrap gap-3">
                        {['Student', 'Professional', 'Researcher'].map((status) => (
                          <label key={status} className="flex-1 cursor-pointer group">
                            <input type="radio" name="status" value={status} className="peer hidden" defaultChecked={status === 'Student'} />
                            <div className="text-center py-3 px-4 rounded-xl border border-slate-100 bg-slate-50 text-slate-500 text-sm font-medium peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-600 transition-all">
                              {status}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm mb-6 bg-red-50 p-4 rounded-xl">
                      An error occurred. Please check your connection and try again.
                    </p>
                  )}

                  <button 
                    disabled={status === 'loading'}
                    type="submit" 
                    className="w-full py-5 bg-slate-950 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl active:scale-[0.98] disabled:opacity-50"
                  >
                    {status === 'loading' ? <Loader2 className="animate-spin" /> : (
                      <>
                        Complete Enrollment <ArrowRight size={20} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400 mt-6">
                    By enrolling, you agree to our Terms of Service and Honor Code.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </main>
  );
}

function FormGroup({ label, name, type = "text", placeholder, required = false }: any) {
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

function BenefitItem({ icon, title, desc }: any) {
  return (
    <li className="flex gap-4">
      <div className="w-10 h-10 shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900">{title}</h4>
        <p className="text-sm text-slate-500 font-light">{desc}</p>
      </div>
    </li>
  );
}