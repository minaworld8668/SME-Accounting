'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { FaViber, FaWhatsapp } from 'react-icons/fa';
import { SOCIAL } from '@/lib/constants';
import { cn } from '@/lib/utils';

// Chatbot tải động để không block main thread.
const ChatbotWidget = dynamic(() => import('./ChatbotWidget'), { ssr: false });

const WA_TEXT =
  'Xin%20ch%C3%A0o%20SME%20Accounting%2C%20t%C3%B4i%20mu%E1%BB%91n%20t%C6%B0%20v%E1%BA%A5n%20d%E1%BB%8Bch%20v%E1%BB%A5%20k%E1%BA%BF%20to%C3%A1n.';

const socialButtons = [
  {
    name: 'Zalo',
    href: `https://zalo.me/${SOCIAL.zaloPhone}`,
    bg: 'bg-[#0068FF]',
    icon: <span className="text-sm font-bold text-white">Z</span>,
  },
  {
    name: 'Viber',
    href: `viber://chat?number=${SOCIAL.viberPhone}`,
    bg: 'bg-[#7360F2]',
    icon: <FaViber size={22} className="text-white" />,
  },
  {
    name: 'WhatsApp',
    href: `https://wa.me/${SOCIAL.whatsappPhone}?text=${WA_TEXT}`,
    bg: 'bg-[#25D366]',
    icon: <FaWhatsapp size={22} className="text-white" />,
  },
];

export default function FloatingCTA() {
  const [socialOpen, setSocialOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {/* Chatbot panel */}
      {chatOpen && (
        <div className="animate-slide-up">
          <ChatbotWidget onClose={() => setChatOpen(false)} />
        </div>
      )}

      {/* Social buttons (expand) */}
      {socialOpen && !chatOpen && (
        <div className="flex flex-col items-end gap-3">
          {socialButtons.map((b, i) => (
            <a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 animate-slide-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="rounded-lg bg-dark px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                {b.name}
              </span>
              <span
                className={cn(
                  'flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110',
                  b.bg,
                )}
              >
                {b.icon}
              </span>
            </a>
          ))}
        </div>
      )}

      {/* Bottom controls */}
      <div className="flex items-center gap-3">
        {/* Social toggle */}
        {!chatOpen && (
          <button
            onClick={() => setSocialOpen((v) => !v)}
            aria-label="Mở kênh nhắn tin"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-success)] text-white shadow-lg transition-transform hover:scale-105"
          >
            {socialOpen ? <X size={24} /> : <MessageCircle size={24} />}
          </button>
        )}

        {/* AI Chat button */}
        <button
          onClick={() => {
            setChatOpen((v) => !v);
            setSocialOpen(false);
          }}
          aria-label="Trợ lý AI"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg transition-transform hover:scale-105"
        >
          {!chatOpen && (
            <span className="absolute inset-0 animate-pulseRing rounded-full bg-primary" />
          )}
          <span className="relative">
            {chatOpen ? <X size={24} /> : <MessageCircle size={24} fill="currentColor" />}
          </span>
        </button>
      </div>
    </div>
  );
}
