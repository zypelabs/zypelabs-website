import { siteConfig } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// This tells Next.js which pages to build automatically
export async function generateStaticParams() {
  return siteConfig.industries.map((i) => ({ slug: i.slug }));
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  // Find the correct industry data
  const industry = siteConfig.industries.find((i) => i.slug === params.slug);
  
  if (!industry) notFound();

  return (
    <div className="pt-10 min-h-screen">
      {/* Hero Section */}
      <section className="py-32 px-6 bg-neutral-950 text-center border-b border-white/10 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <industry.icon className="w-24 h-24 text-blue-600 mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">{industry.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">{industry.desc}</p>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-24 px-6 bg-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-display mb-6">Transforming {industry.title}</h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            ZYPELabs delivers specialized AI and automation solutions tailored specifically for the challenges of the {industry.title.toLowerCase()} sector. 
            From data integration to process optimization, we drive measurable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest rounded-sm transition-all">
              Discuss Your Needs <ArrowRight size={20} />
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white font-bold uppercase tracking-widest rounded-sm transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}