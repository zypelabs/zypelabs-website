import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import { Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold font-display mb-6">ZYPE<span className="text-blue-600">LABS</span>.</h2>
            <p className="text-gray-400 max-w-md leading-relaxed mb-8">
              Enterprise-grade AI solutions, automation, and digital transformation services driving measurable business outcomes globally.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-600 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-600 transition-colors"><Github size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-blue-500 transition-colors">Careers</Link></li>
              <li><Link href="/insights" className="hover:text-blue-500 transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} ZYPELabs Technologies Pvt Ltd. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for the Future.</p>
        </div>
      </div>
    </footer>
  );
}