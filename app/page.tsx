"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/lib/data';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center px-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight mb-6"
          >
            {siteConfig.tagline}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            {siteConfig.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2">
              Talk to Experts <ArrowRight size={20} />
            </Link>
            <Link href="/services" className="px-8 py-4 bg-transparent border border-white/30 hover:border-white hover:bg-white/5 text-white font-bold uppercase tracking-widest rounded-sm transition-all">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust & Metrics */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-12">Trusted by Industry Leaders</p>
          {/* Placeholder Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {[1,2,3,4].map((i) => (
               <div key={i} className="h-12 bg-white/10 rounded flex items-center justify-center text-xs text-gray-500">Client Logo {i}</div>
             ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {siteConfig.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">{m.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="py-32 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Our Capabilities</h2>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service, i) => (
              <Link href={`/services/${service.slug}`} key={i} className="group p-8 bg-black border border-white/10 hover:border-blue-600/50 transition-all duration-300 hover:-translate-y-2">
                <service.icon className="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3 font-display">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.shortDesc}</p>
                <span className="text-blue-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2">Learn More <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why ZYPELabs */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-900/5 blur-[100px]"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Why Global Enterprises Choose ZYPELabs</h2>
            <p className="text-gray-400 text-lg mb-8">We combine deep technical expertise with business acumen to deliver results that matter.</p>
            <ul className="space-y-6">
              {[
                { t: "AI-First Mindset", d: "Every solution leverages AI to maximize efficiency." },
                { t: "Enterprise-Grade Delivery", d: "Proven methodologies with ISO-certified processes." },
                { t: "Rapid Implementation", d: "Agile delivery with 40% faster time-to-market." },
                { t: "Global Talent Ecosystem", d: "Access to 500+ certified experts worldwide." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle className="text-blue-500 shrink-0" />
                  <div>
                    <strong className="block text-white font-display">{item.t}</strong>
                    <span className="text-gray-400 text-sm">{item.d}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-[500px] bg-neutral-900 rounded-lg border border-white/10 flex items-center justify-center relative overflow-hidden">
             {/* Abstract Visual Placeholder */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/20 to-transparent"></div>
             <span className="text-gray-500 font-mono">Strategy & Innovation Visual</span>
          </div>
        </div>
      </section>

      {/* 5. Industries */}
      <section className="py-32 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.industries.map((ind, i) => (
              <Link href={`/industries/${ind.slug}`} key={i} className="relative group h-64 bg-black border border-white/10 overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 p-8 z-20">
                  <ind.icon className="text-blue-500 mb-4 w-10 h-10" />
                  <h3 className="text-xl font-bold font-display">{ind.title}</h3>
                </div>
                <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-32 px-6 bg-blue-900/20 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-8">Ready to Transform?</h2>
          <p className="text-xl text-gray-300 mb-10">Let's build the future of your enterprise together.</p>
          <Link href="/contact" className="inline-block px-10 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all rounded-sm">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}