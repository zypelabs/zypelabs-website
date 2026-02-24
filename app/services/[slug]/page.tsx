import { siteConfig } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = siteConfig.services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <div className="pt-10">
      {/* Hero */}
      <section className="py-20 px-6 bg-neutral-950 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <service.icon className="w-20 h-20 text-blue-600 mx-auto mb-8" />
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">{service.title}</h1>
          <p className="text-xl text-gray-300">{service.fullDesc}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {service.features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded border border-white/10">
                <CheckCircle className="text-blue-500 shrink-0" size={20} />
                <span className="font-medium">{f}</span>
              </div>
            ))}
          </div>

          <div className="bg-neutral-900 p-10 rounded-lg border border-white/10 text-center">
            <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
            <p className="text-gray-400 mb-8">Our experts are ready to design a tailored strategy for your enterprise.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest hover:text-white">
              Contact Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}