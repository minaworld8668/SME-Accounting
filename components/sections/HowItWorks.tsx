'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Route,
  Search,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { HOW_IT_WORKS } from '@/lib/constants';
import { cn, scrollToId } from '@/lib/utils';
import SectionWrapper from '@/components/ui/SectionWrapper';

const ICONS: Record<string, LucideIcon> = { Calendar, Search, ShieldCheck };

export default function HowItWorks() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-x">
        <SectionWrapper className="mx-auto mb-12 max-w-3xl text-center">
          <p className="eyebrow mb-3 inline-flex items-center gap-2">
            <Route size={15} className="text-accent" />
            {HOW_IT_WORKS.label}
          </p>
          <h2 className="text-3xl font-bold md:text-[2.5rem]">{HOW_IT_WORKS.heading}</h2>
          <p className="mt-5 text-muted">{HOW_IT_WORKS.subDesc}</p>
        </SectionWrapper>

        <div className="grid gap-6 md:grid-cols-3">
          {HOW_IT_WORKS.steps.map((step, i) => {
            const Icon = ICONS[step.icon] ?? Calendar;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={cn(
                  'relative flex flex-col rounded-2xl p-8 shadow-card',
                  step.dark ? 'bg-primary text-white' : 'border border-line bg-white',
                )}
              >
                <span
                  className={cn(
                    'font-heading text-5xl font-extrabold',
                    step.dark ? 'text-white/25' : 'text-primary/15',
                  )}
                >
                  {step.number}
                </span>
                <span
                  className={cn(
                    'mt-4 flex h-14 w-14 items-center justify-center rounded-xl',
                    step.dark ? 'bg-white/15 text-white' : 'bg-primary-light text-primary',
                  )}
                >
                  <Icon size={26} />
                </span>
                <h3
                  className={cn(
                    'mt-5 text-xl font-bold',
                    step.dark ? 'text-white' : 'text-dark',
                  )}
                >
                  {step.title}
                </h3>
                <p
                  className={cn(
                    'mt-3 text-sm leading-relaxed',
                    step.dark ? 'text-white/80' : 'text-muted',
                  )}
                >
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button onClick={() => scrollToId('#services')} className="btn-primary">
            {HOW_IT_WORKS.cta}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
