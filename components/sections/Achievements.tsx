'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Award, Building2, FileCheck2, Smile, TrendingUp, type LucideIcon } from 'lucide-react';
import { ACHIEVEMENTS } from '@/lib/constants';
import { scrollToId } from '@/lib/utils';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import SectionWrapper from '@/components/ui/SectionWrapper';

const STAT_ICONS: LucideIcon[] = [Building2, FileCheck2, Smile, TrendingUp];

export default function Achievements() {
  return (
    <section className="relative overflow-hidden bg-dark-2 text-white section-pad">
      <div className="absolute inset-0 opacity-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="container-x relative z-10">
        <SectionWrapper className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-accent">
            <Award size={15} />
            {ACHIEVEMENTS.label}
          </p>
          <h2 className="text-3xl font-bold text-white md:text-[2.5rem]">
            {ACHIEVEMENTS.heading}
          </h2>
          <p className="mt-5 text-white/70">{ACHIEVEMENTS.desc}</p>
          <button onClick={() => scrollToId('#about')} className="btn-primary mt-7">
            {ACHIEVEMENTS.cta}
            <ArrowRight size={18} />
          </button>
        </SectionWrapper>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {ACHIEVEMENTS.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-white/[0.08]"
            >
              <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg">
                {(() => {
                  const Icon = STAT_ICONS[i % STAT_ICONS.length];
                  return <Icon size={22} />;
                })()}
              </span>
              <div className="text-4xl font-extrabold text-accent md:text-5xl">
                <AnimatedCounter target={s.number} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/70">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
