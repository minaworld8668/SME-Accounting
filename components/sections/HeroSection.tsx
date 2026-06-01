'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { HERO } from '@/lib/constants';
import { scrollToId } from '@/lib/utils';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-dark"
    >
      {/* Background image + dark overlay */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80"
          alt="Đội ngũ kế toán chuyên nghiệp SME"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
      </div>

      <div className="container-x relative z-10 pt-28 pb-16 md:pt-32">
        <div className="max-w-3xl">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {HERO.tagline}
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[3.75rem]"
          >
            {HERO.headline[0]}
            <br />
            <span className="text-accent">{HERO.headline[1]}</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
          >
            {HERO.description}
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap gap-4"
          >
            <button onClick={() => scrollToId('#services')} className="btn-primary">
              {HERO.ctaPrimary}
              <ArrowUpRight size={18} />
            </button>
            <button
              onClick={() => scrollToId('#contact', true)}
              className="btn-ghost-light"
            >
              <Calendar size={18} />
              {HERO.ctaSecondary}
            </button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8"
          >
            {HERO.stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-white md:text-4xl">
                  <AnimatedCounter target={s.number} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-white/60 md:text-sm">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
