"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Globe, ShieldCheck, Zap, Menu, X } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: <Cpu className="w-8 h-8 text-blue-500" />, title: "AI Solutions", desc: "Custom ML models and predictive analytics." },
    { icon: <Code className="w-8 h-8 text-purple-500" />, title: "Web Development", desc: "High-performance React & Next.js apps." },
    { icon: <Globe className="w-8 h-8 text-cyan-500" />, title: "Cloud Infrastructure", desc: "Scalable AWS/Azure architecture." },
    { icon: <ShieldCheck className="w-8 h-8 text-green-500" />, title: "Cybersecurity", desc: "Enterprise-grade security audits." },
    { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: "Automation", desc: "RPA and workflow optimization." },
    { icon: <ArrowRight className="w-8 h-8 text-red-500" />, title: "Digital Strategy", desc: "Roadmap for digital transformation." },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden font-sans">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">ZYPELabs</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {['Services', 'About', 'Process', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">{item}</a>
            ))}
            <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50">
              Get Started
            </button>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-4 flex flex-col space-y-4 shadow-xl">
             {['Services', 'About', 'Process', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white block">{item}</a>
            ))}
          </div>
        )}
      </nav>

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-sm font-medium mb-6">
              🚀 Innovating the Future of Tech
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Build Faster with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
                Intelligent Solutions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              ZYPELabs transforms businesses through cutting-edge AI, robust cloud infrastructure, and seamless digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                Start Project <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-full font-bold hover:bg-slate-700 transition-all">
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-slate-400">Comprehensive technology solutions tailored to your needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all group shadow-lg hover:shadow-blue-900/20">
                <div className="mb-6 p-4 bg-slate-900 rounded-xl inline-block group-hover:bg-slate-800 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-800 bg-slate-950 text-center text-slate-500 text-sm">
        <p>© 2026 ZYPELabs Technologies. All rights reserved.</p>
      </footer>
    </main>
  );
}