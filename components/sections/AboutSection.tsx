'use client';

import Image from 'next/image';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { ABOUT } from '@/lib/constants';
import { scrollToId } from '@/lib/utils';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function AboutSection() {
  return (
    <section id="about" className="section-pad bg-dark text-white">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* LEFT: text */}
        <SectionWrapper>
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-accent">
            <ShieldCheck size={15} />
            {ABOUT.label}
          </p>
          <h2 className="text-3xl font-bold text-white md:text-[2.5rem]">{ABOUT.heading}</h2>
          <p className="mt-5 leading-relaxed text-white/70">{ABOUT.description}</p>
          <button
            onClick={() => scrollToId('#contact', true)}
            className="btn-primary mt-7"
          >
            {ABOUT.cta}
            <ArrowRight size={18} />
          </button>
        </SectionWrapper>

        {/* RIGHT: ảnh + quote overlay + stat box */}
        <SectionWrapper delay={0.1} className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
              alt="Tư vấn khách hàng qua bảng số liệu tài chính"
              fill
              sizes="(max-width:1024px) 100vw, 560px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-serif text-xl italic leading-snug text-white md:text-2xl">
                “{ABOUT.imageQuote}”
              </p>
              <button
                onClick={() => scrollToId('#about')}
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2"
              >
                {ABOUT.imageQuoteCta}
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Stat box */}
          <div className="mt-4 rounded-2xl bg-primary p-6 shadow-card sm:absolute sm:-bottom-8 sm:-right-4 sm:max-w-[240px]">
            <p className="text-xs leading-relaxed text-white/80">{ABOUT.statBox.label}</p>
            <div className="mt-3 text-4xl font-extrabold text-white">{ABOUT.statBox.number}</div>
            <div className="text-xs text-white/80">{ABOUT.statBox.desc}</div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
