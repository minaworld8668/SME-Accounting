'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Loader2 } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaCommentDots } from 'react-icons/fa';
import { COMPANY, FOOTER, SOCIAL } from '@/lib/constants';
import { saveNewsletterEmail } from '@/lib/googleSheets';
import { scrollToId } from '@/lib/utils';

const socials = [
  { Icon: FaFacebookF, href: SOCIAL.facebook, label: 'Facebook' },
  { Icon: FaLinkedinIn, href: SOCIAL.linkedin, label: 'LinkedIn' },
  { Icon: FaYoutube, href: SOCIAL.youtube, label: 'YouTube' },
  { Icon: FaCommentDots, href: `https://zalo.me/${SOCIAL.zaloPhone}`, label: 'Zalo' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle');

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setState('loading');
    try {
      await saveNewsletterEmail(email);
    } catch {
      /* bỏ qua lỗi trong môi trường demo */
    }
    setState('done');
    setEmail('');
  };

  return (
    <footer className="relative overflow-hidden bg-dark text-white">
      {/* Big watermark text */}
      <div
        aria-hidden
        className="pointer-events-none select-none whitespace-nowrap text-center font-heading text-[18vw] font-extrabold leading-none text-white/[0.04] md:text-[12rem]"
      >
        {FOOTER.bigText}
      </div>

      <div className="container-x relative z-10 -mt-12 pb-10 md:-mt-24">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Col 1 */}
          <div>
            <Image
              src="/images/logo-light.png"
              alt={COMPANY.shortName}
              width={200}
              height={89}
              className="h-14 w-auto object-contain"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              {FOOTER.description}
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div className="md:pl-8">
            <h3 className="text-lg font-semibold text-white">Liên Kết Nhanh</h3>
            <ul className="mt-4 space-y-3">
              {FOOTER.quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(l.href);
                    }}
                    className="text-sm text-white/65 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white">{FOOTER.newsletterTitle}</h3>
            {state === 'done' ? (
              <p className="mt-4 text-sm text-accent">
                Cảm ơn bạn đã đăng ký! Chúng tôi sẽ gửi cập nhật mới nhất qua email.
              </p>
            ) : (
              <form onSubmit={subscribe} className="mt-4 flex overflow-hidden rounded-lg bg-white/10 p-1.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={FOOTER.newsletterPlaceholder}
                  className="w-full bg-transparent px-3 text-sm text-white outline-none placeholder:text-white/45"
                />
                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="flex shrink-0 items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  {state === 'loading' ? (
                    <Loader2 size={15} className="animate-spin" />
                  ) : (
                    <>
                      {FOOTER.newsletterCTA}
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
            <p className="mt-4 text-sm text-white/65">
              {COMPANY.address}
              <br />
              <a href={COMPANY.phoneHref} className="hover:text-accent">
                {COMPANY.phone}
              </a>{' '}
              ·{' '}
              <a href={`mailto:${COMPANY.email}`} className="hover:text-accent">
                {COMPANY.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row">
          <span>{FOOTER.copyright}</span>
          <div className="flex gap-5">
            {FOOTER.legalLinks.map((l) => (
              <a key={l} href="#" className="hover:text-accent">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
