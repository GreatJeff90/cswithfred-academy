"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Book, 
  Download, 
  ExternalLink, 
  Star, 
  ArrowRight,
  Bookmark,
  Hash
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const BOOKS = [
  {
    id: "clean-code-logic",
    title: "Logic & Architecture",
    subtitle: "A Handbook for Scalable Software",
    author: "Fredrick O. Mensah",
    category: "Software Engineering",
    rating: 4.9,
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop",
    tags: ["Systems", "Best Practices"]
  },
  {
    id: "ai-foundations",
    title: "The AI Blueprint",
    subtitle: "Mathematical foundations of Modern ML",
    author: "Fredrick O. Mensah",
    category: "Artificial Intelligence",
    rating: 5.0,
    price: "$34.00",
    image: "https://images.unsplash.com/photo-1532012197367-6849811fb7d2?q=80&w=1974&auto=format&fit=crop",
    tags: ["Math", "Python"]
  },
  {
    id: "algo-v1",
    title: "Algorithms V1",
    subtitle: "Visualizing complex data structures",
    author: "Fredrick O. Mensah",
    category: "Computer Science",
    rating: 4.8,
    price: "Free",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2076&auto=format&fit=crop",
    tags: ["Algorithms", "Beginner"]
  }
];

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <section className="max-w-4xl mb-24">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="flex items-center gap-3 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6"
          >
            <span className="w-8 h-[2px] bg-blue-600"></span>
            The Printed Series
          </motion.div>
          <motion.h1 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-6xl lg:text-8xl font-medium tracking-tight text-slate-950 mb-8"
          >
            Written <span className="text-slate-400 italic font-light">Insights.</span>
          </motion.h1>
          <motion.p 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-xl text-slate-500 font-light max-w-2xl leading-relaxed"
          >
            A curated collection of deep-dive literature covering the bridge between academic theory and industry implementation.
          </motion.p>
        </section>

        {/* Featured Book / Spotlight */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-32 bg-slate-950 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-center"
        >
          <div className="w-full lg:w-1/2 relative aspect-[4/5] lg:aspect-square">
            <Image 
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2074&auto=format&fit=crop"
              fill
              className="object-cover opacity-80"
              alt="Featured Book Background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent" />
          </div>
          <div className="w-full lg:w-1/2 p-12 lg:p-20 space-y-8">
            <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-widest">
              Author's Choice
            </span>
            <h2 className="text-4xl lg:text-5xl font-medium text-white leading-tight">
              Mastering Distributed <br /> Consensus
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              Understand the complexity of Paxos, Raft, and Byzantine Fault Tolerance in a way that actually sticks.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <button className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold flex items-center gap-2 hover:bg-blue-50 transition-all">
                Pre-order Now <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 border border-slate-700 text-white rounded-full font-bold hover:bg-slate-900 transition-all">
                Read Abstract
              </button>
            </div>
          </div>
        </motion.div>

        {/* Book Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {BOOKS.map((book, index) => (
            <motion.div 
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* Book Cover Container */}
              <div className="relative aspect-[2/3] mb-8 bg-slate-100 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <Image 
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <button className="absolute bottom-6 right-6 p-4 bg-white rounded-full text-slate-950 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all shadow-xl">
                  <Download size={20} />
                </button>
              </div>

              {/* Book Info */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-1">{book.category}</p>
                    <h3 className="text-2xl font-medium text-slate-950 group-hover:text-blue-600 transition-colors">{book.title}</h3>
                  </div>
                  <span className="text-lg font-medium text-slate-400">{book.price}</span>
                </div>
                
                <p className="text-slate-500 font-light leading-relaxed">
                  {book.subtitle}
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold text-slate-900">{book.rating}</span>
                  </div>
                  <div className="flex gap-2">
                    {book.tags.map(tag => (
                      <span key={tag} className="text-[10px] bg-slate-50 text-slate-500 px-2 py-1 rounded-md flex items-center gap-1">
                        <Hash size={10} /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter / Join Section */}
        <section className="mt-40 text-center max-w-2xl mx-auto py-20 border-t border-slate-100">
          <Bookmark className="mx-auto mb-6 text-blue-600" size={32} />
          <h2 className="text-3xl font-medium mb-4">Never miss a new release.</h2>
          <p className="text-slate-500 font-light mb-10">
            Sign up for the "CS with Fred" newsletter to get free early-access chapters and coding cheat sheets.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="flex-1 px-6 py-4 bg-slate-50 rounded-full outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            />
            <button className="px-10 py-4 bg-slate-950 text-white rounded-full font-bold hover:bg-blue-600 transition-all">
              Join the List
            </button>
          </div>
        </section>
        
      </div>
    </main>
  );
}