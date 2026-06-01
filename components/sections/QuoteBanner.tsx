'use client';

import { useState } from 'react';
import { Play, Quote, X } from 'lucide-react';
import { QUOTE_BANNER } from '@/lib/constants';

export default function QuoteBanner() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative overflow-hidden bg-dark">
      {/* Building image overlay */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt="Tòa nhà văn phòng"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-dark/70" />
      </div>

      <div className="container-x relative z-10 flex flex-col items-center py-20 text-center md:py-28">
        <Quote className="mb-6 text-accent" size={40} />
        <blockquote className="max-w-3xl font-serif text-3xl font-medium italic leading-snug text-white md:text-[2.6rem]">
          “{QUOTE_BANNER.quote}”
        </blockquote>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex -space-x-3">
            {['AB', 'CD', 'EF'].map((n) => (
              <span
                key={n}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dark bg-primary text-xs font-bold text-white"
              >
                {n}
              </span>
            ))}
          </div>
          <span className="text-sm font-medium text-white/80">{QUOTE_BANNER.subtext}</span>
        </div>

        <button
          onClick={() => setShowVideo(true)}
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/30 py-2 pl-2 pr-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary">
            <Play size={16} className="ml-0.5" fill="currentColor" />
          </span>
          {QUOTE_BANNER.videoLabel}
        </button>
      </div>

      {showVideo && (
        <div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideo(false)}
              aria-label="Đóng video"
              className="absolute -top-10 right-0 text-white hover:text-accent"
            >
              <X size={28} />
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video giới thiệu SME Accounting"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
