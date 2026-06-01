'use client';

import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { COMPANY, CONTACT, MAPS_EMBED_URL } from '@/lib/constants';
import ContactForm from '@/components/forms/ContactForm';
import SectionWrapper from '@/components/ui/SectionWrapper';

const contactInfo = [
  { icon: MapPin, label: 'Địa chỉ', value: COMPANY.address, href: undefined as string | undefined },
  { icon: Phone, label: 'Điện thoại', value: COMPANY.phone, href: COMPANY.phoneHref },
  { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: Clock, label: 'Giờ làm việc', value: COMPANY.workingHours, href: undefined },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-pad bg-surface">
      <div className="container-x">
        <SectionWrapper className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow mb-3 inline-flex items-center gap-2">
            <Send size={15} className="text-accent" />
            {CONTACT.label}
          </p>
          <h2 className="text-3xl font-bold md:text-[2.5rem]">{CONTACT.heading}</h2>
          <p className="mt-4 text-muted">{CONTACT.subDesc}</p>
        </SectionWrapper>

        <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
          {/* LEFT: form */}
          <SectionWrapper>
            <ContactForm />
          </SectionWrapper>

          {/* RIGHT: maps + info */}
          <SectionWrapper delay={0.1} className="flex flex-col gap-6">
            <div className="h-[260px] w-full overflow-hidden rounded-2xl shadow-card">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vị trí Công ty TNHH Dịch Vụ Kế Toán SME"
              />
            </div>

            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <ul className="space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                        <Icon size={20} />
                      </span>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-muted">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-ink transition-colors hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="whitespace-pre-line font-medium text-ink">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
