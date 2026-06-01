'use client';

import Image from 'next/image';
import { ArrowRight, BadgeCheck, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE } from '@/lib/constants';
import { scrollToId } from '@/lib/utils';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* LEFT: ảnh stacked + blue box */}
        <SectionWrapper className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80"
                alt="Đội ngũ SME tư vấn khách hàng"
                fill
                sizes="(max-width:1024px) 50vw, 300px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                alt="Chuyên viên kế toán SME"
                fill
                sizes="(max-width:1024px) 50vw, 300px"
                className="object-cover"
              />
            </div>
          </div>
          {/* Blue box */}
          <div className="mt-4 rounded-2xl bg-primary p-6 text-white shadow-card md:absolute md:-bottom-6 md:left-6 md:max-w-xs">
            <p className="text-sm leading-relaxed">{WHY_CHOOSE.blueBox.text}</p>
            <button
              onClick={() => scrollToId('#contact', true)}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white hover:gap-2"
            >
              {WHY_CHOOSE.blueBox.cta}
              <ArrowRight size={16} />
            </button>
          </div>
        </SectionWrapper>

        {/* RIGHT: text + checkpoints */}
        <SectionWrapper delay={0.1}>
          <p className="eyebrow mb-3 flex items-center gap-2">
            <BadgeCheck size={15} className="text-accent" />
            {WHY_CHOOSE.label}
          </p>
          <h2 className="text-3xl font-bold md:text-[2.5rem]">{WHY_CHOOSE.heading}</h2>
          <p className="mt-5 text-muted">{WHY_CHOOSE.description}</p>

          <ul className="mt-8 space-y-6">
            {WHY_CHOOSE.checkpoints.map((c) => (
              <li key={c.title} className="flex gap-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={26} />
                <div>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{c.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </SectionWrapper>
      </div>
    </section>
  );
}
