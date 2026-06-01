'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS, TESTIMONIALS_SECTION } from '@/lib/constants';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 4);

  return (
    <section id="testimonials" className="section-pad bg-white">
      <div className="container-x">
        <SectionWrapper className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow mb-3 inline-flex items-center gap-2">
            <Quote size={15} className="text-accent" />
            {TESTIMONIALS_SECTION.label}
          </p>
          <h2 className="text-3xl font-bold md:text-[2.5rem]">{TESTIMONIALS_SECTION.heading}</h2>
        </SectionWrapper>

        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              className="card-base flex flex-col p-7"
            >
              <div className="mb-3 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill="currentColor" />
                ))}
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold italic text-primary">
                “{t.title}”
              </h3>
              <blockquote className="flex-1 text-sm leading-relaxed text-muted">
                {t.body}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-light font-bold text-primary">
                  {t.initials}
                </span>
                <span>
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-xs text-primary">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {!showAll && (
          <div className="mt-10 text-center">
            <button onClick={() => setShowAll(true)} className="btn-secondary">
              Xem Thêm Đánh Giá
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
