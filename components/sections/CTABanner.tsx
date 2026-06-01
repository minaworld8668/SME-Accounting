'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { CTA_BANNER } from '@/lib/constants';
import { scrollToId } from '@/lib/utils';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function CTABanner() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-x">
        <SectionWrapper className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-dark px-8 py-12 md:px-14 md:py-16">
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="max-w-xl text-2xl font-bold leading-snug text-white md:text-4xl">
                {CTA_BANNER.heading}
              </h2>
              <button
                onClick={() => scrollToId('#contact', true)}
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 font-semibold text-primary shadow-md transition-all hover:shadow-lg"
              >
                {CTA_BANNER.cta}
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="relative hidden h-56 md:block">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80"
                alt="Chuyên viên tư vấn SME"
                fill
                sizes="400px"
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-white/5" />
        </SectionWrapper>
      </div>
    </section>
  );
}
