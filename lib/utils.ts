import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToId(id: string, focusFirstInput = false) {
  const el = document.querySelector(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (focusFirstInput) {
    setTimeout(() => {
      const input = el.querySelector<HTMLElement>('input, select, textarea');
      input?.focus();
    }, 600);
  }
}
