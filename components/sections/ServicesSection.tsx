'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  FileBarChart,
  LineChart,
  Receipt,
  Settings2,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { SERVICES, SERVICES_SECTION } from '@/lib/constants';
import { scrollToId } from '@/lib/utils';

const ICONS: Record<string, LucideIcon> = {
  BookOpen,
  Receipt,
  Users,
  FileBarChart,
  LineChart,
  Settings2,
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-x">
        {/* Header: 2 cột */}
        <div className="mb-12 grid items-end gap-6 md:grid-cols-2 md:gap-12">
          <div>
            <p className="eyebrow mb-3 flex items-center gap-2">
              <Sparkles size={15} className="text-accent" />
              {SERVICES_SECTION.label}
            </p>
            <p className="max-w-md text-muted">{SERVICES_SECTION.leftDescription}</p>
            <button
              onClick={() => scrollToId('#services')}
              className="group mt-4 inline-flex items-center gap-1 font-semibold text-primary hover:text-primary-dark"
            >
              {SERVICES_SECTION.viewAll}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <h2 className="text-3xl font-bold md:text-[2.5rem]">
            {SERVICES_SECTION.rightHeading}
          </h2>
        </div>

        {/* 6 service cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? BookOpen;
            return (
              <motion.article
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cardHover"
              >
                {/* top accent bar */}
                <span className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-x-100" />

                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/55 via-dark/10 to-transparent" />

                  {/* gradient icon badge */}
                  <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg ring-4 ring-white/25">
                    <Icon size={22} />
                  </span>
                  {/* index symbol */}
                  <span className="absolute right-5 top-4 font-heading text-2xl font-extrabold text-white/85 drop-shadow">
                    0{i + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
                    {s.description}
                  </p>
                  <button
                    onClick={() => scrollToId('#contact', true)}
                    className="inline-flex items-center gap-2 self-start font-semibold text-primary"
                  >
                    Tìm Hiểu Thêm
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-light text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <ArrowUpRight size={15} />
                    </span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
