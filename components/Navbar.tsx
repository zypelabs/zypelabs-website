"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/lib/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '/services', sub: siteConfig.services.map(s => ({ name: s.title, href: `/services/${s.slug}` })) },
    { name: 'Industries', href: '/industries', sub: siteConfig.industries.map(i => ({ name: i.title, href: `/industries/${i.slug}` })) },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/insights' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold font-display tracking-tighter text-white">
            ZYPE<span className="text-blue-600">LABS</span>.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link href={item.href} className="flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide">
                  {item.name}
                  {item.sub && <ChevronDown size={14} className="ml-1" />}
                </Link>
                {/* Dropdown */}
                {item.sub && (
                  <div className="absolute left-0 mt-4 w-56 bg-neutral-900 border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {item.sub.map((subItem) => (
                        <Link key={subItem.name} href={subItem.href} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5">
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold uppercase tracking-widest rounded-sm transition-all">
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-black z-40 pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link href={item.href} onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white block mb-2">{item.name}</Link>
                  {item.sub && (
                    <div className="pl-4 flex flex-col space-y-2 border-l border-white/10">
                      {item.sub.map((sub) => (
                        <Link key={sub.name} href={sub.href} onClick={() => setIsOpen(false)} className="text-gray-400 text-sm">{sub.name}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-blue-500 font-bold uppercase">Get in Touch</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
