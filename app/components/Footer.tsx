import Link from 'next/link';
import { Github, Twitter, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center text-white font-black italic">
                f.
              </div>
              <span className="font-medium text-2xl tracking-tight text-slate-950">CSwithFred</span>
            </div>
            <p className="text-slate-500 text-lg font-light leading-relaxed max-w-sm">
              Simplifying the architecture of tomorrow for the builders of today. 
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Github size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="font-bold text-slate-950 mb-8 uppercase text-xs tracking-widest">Learn</h4>
            <ul className="space-y-5 text-slate-500 font-light">
              <li><FooterLink href="/courses">All Courses</FooterLink></li>
              <li><FooterLink href="/books">Practical Books</FooterLink></li>
              <li><FooterLink href="/thesis">Thesis Support</FooterLink></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-slate-950 mb-8 uppercase text-xs tracking-widest">Academy</h4>
            <ul className="space-y-5 text-slate-500 font-light">
              <li><FooterLink href="/about">About Fred</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
              <li><FooterLink href="/privacy">Privacy Policy</FooterLink></li>
            </ul>
          </div>

          {/* Newsletter/CTA Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-slate-950 mb-8 uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-6 font-light italic">Weekly insights on CS and AI.</p>
            <Link href="/subscribe" className="text-sm font-bold text-blue-600 flex items-center gap-1 group">
              Join the list <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400 font-medium">
            © {currentYear} CSwithFred Academy. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            <span>London • Remote • Global</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="hover:text-blue-600 transition-colors flex items-center gap-1 group">
      {children}
    </Link>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all"
    >
      {icon}
    </Link>
  );
}