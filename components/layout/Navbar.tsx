'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { COMPANY, NAV_LINKS, SERVICE_MENU } from '@/lib/constants';
import { cn, scrollToId } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNav = (e: React.MouseEvent, href: string, focusInput = false) => {
    e.preventDefault();
    setMobileOpen(false);
    scrollToId(href, focusInput);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-line bg-white/95 shadow-sm backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <nav className="container-x flex h-[72px] items-center justify-between md:h-[88px]">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNav(e, '#home')}
          className="flex items-center gap-2"
          aria-label={COMPANY.shortName}
        >
          <Image
            src={scrolled ? '/images/logo.png' : '/images/logo-light.png'}
            alt={COMPANY.shortName}
            width={200}
            height={89}
            priority
            className="h-12 w-auto object-contain drop-shadow-sm transition-all duration-300 md:h-16"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) =>
            'dropdown' in link && link.dropdown ? (
              <li key={link.label} className="group relative">
                <button
                  className={cn(
                    'flex items-center gap-1 text-sm font-medium transition-colors',
                    scrolled ? 'text-ink hover:text-primary' : 'text-white/90 hover:text-white',
                  )}
                >
                  {link.label}
                  <ChevronDown size={15} className="transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <ul className="overflow-hidden rounded-xl border border-line bg-white py-2 shadow-card">
                    {SERVICE_MENU.map((s) => (
                      <li key={s.href}>
                        <a
                          href={s.href}
                          onClick={(e) => handleNav(e, s.href)}
                          className="block px-5 py-2.5 text-sm text-ink transition-colors hover:bg-primary-light hover:text-primary"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href, link.label === 'Đặt Lịch')}
                  className={cn(
                    'group relative text-sm font-medium transition-colors',
                    scrolled ? 'text-ink hover:text-primary' : 'text-white/90 hover:text-white',
                  )}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ),
          )}
        </ul>

        {/* Phone + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href={COMPANY.phoneHref}
            className={cn(
              'hidden items-center gap-2 text-sm font-semibold transition-colors md:flex',
              scrolled ? 'text-primary hover:text-primary-dark' : 'text-white hover:text-white/80',
            )}
          >
            <span
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-full',
                scrolled ? 'bg-primary-light text-primary' : 'bg-white/15 text-white',
              )}
            >
              <Phone size={16} />
            </span>
            {COMPANY.phone}
          </a>

          <button
            aria-label="Mở menu"
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-lg lg:hidden',
              scrolled ? 'text-ink' : 'text-white',
            )}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          'overflow-hidden border-t border-line bg-white transition-[max-height] duration-300 lg:hidden',
          mobileOpen ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0',
        )}
      >
        <ul className="container-x flex flex-col py-4">
          {NAV_LINKS.filter((l) => !('dropdown' in l && l.dropdown)).map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href, link.label === 'Đặt Lịch')}
                className="block py-3 font-medium text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="flex w-full items-center justify-between py-3 font-medium text-ink"
            >
              Dịch Vụ
              <ChevronDown
                size={16}
                className={cn('transition-transform', servicesOpen && 'rotate-180')}
              />
            </button>
            {servicesOpen && (
              <ul className="pl-4">
                {SERVICE_MENU.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      onClick={(e) => handleNav(e, s.href)}
                      className="block py-2 text-sm text-muted"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="mt-3">
            <a href={COMPANY.phoneHref} className="btn-primary w-full">
              <Phone size={16} /> {COMPANY.phone}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
