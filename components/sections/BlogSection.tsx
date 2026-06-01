'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Newspaper } from 'lucide-react';
import { BLOG } from '@/lib/constants';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function BlogSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <SectionWrapper className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow mb-3 inline-flex items-center gap-2">
            <Newspaper size={15} className="text-accent" />
            {BLOG.label}
          </p>
          <h2 className="text-3xl font-bold md:text-[2.5rem]">{BLOG.heading}</h2>
        </SectionWrapper>

        <div className="grid gap-6 md:grid-cols-3">
          {BLOG.posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-base group flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-cardHover"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width:768px) 100vw, 380px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs text-muted">{post.date}</span>
                <h3 className="mt-2 text-lg font-bold leading-snug transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-semibold text-primary">
                  Đọc Tiếp
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
