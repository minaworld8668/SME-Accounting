'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  User,
} from 'lucide-react';
import { contactSchema, type ContactFormData } from '@/lib/types';
import { sendEmailViaEmailJS } from '@/lib/emailjs';
import { saveToGoogleSheets } from '@/lib/googleSheets';
import { CONTACT } from '@/lib/constants';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: '' },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    const [email, sheets] = await Promise.allSettled([
      sendEmailViaEmailJS(data),
      saveToGoogleSheets(data),
    ]);

    if (email.status === 'rejected' && sheets.status === 'rejected') {
      // Cả hai kênh đều thất bại (thường do chưa cấu hình env trong môi trường demo).
      setStatus('error');
      return;
    }
    setStatus('success');
    reset();
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-white p-10 text-center shadow-card">
        <CheckCircle2 className="text-[color:var(--color-success)]" size={56} />
        <h3 className="mt-4 text-2xl font-bold">Gửi Yêu Cầu Thành Công!</h3>
        <p className="mt-2 text-muted">
          Cảm ơn bạn đã liên hệ với SME Accounting. Chúng tôi sẽ phản hồi trong vòng 2 giờ làm việc.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-secondary mt-6">
          Gửi Yêu Cầu Khác
        </button>
      </div>
    );
  }

  const fieldClass = (hasError?: boolean) =>
    cn(
      'w-full rounded-lg border bg-white py-3 pl-11 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-muted/70',
      hasError
        ? 'border-[color:var(--color-error)] focus:border-[color:var(--color-error)]'
        : 'border-line focus:border-primary',
    );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-line bg-white p-6 shadow-card md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Full name */}
        <div>
          <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-ink">
            Họ và tên <span className="text-[color:var(--color-error)]">*</span>
          </label>
          <div className="relative">
            <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input
              id="fullName"
              {...register('fullName')}
              placeholder="Nguyễn Văn A"
              className={fieldClass(!!errors.fullName)}
            />
          </div>
          {errors.fullName && (
            <p className="mt-1 text-xs text-[color:var(--color-error)]">{errors.fullName.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Số điện thoại <span className="text-[color:var(--color-error)]">*</span>
          </label>
          <div className="relative">
            <Phone size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input
              id="phone"
              {...register('phone')}
              placeholder="0901234567"
              inputMode="tel"
              className={fieldClass(!!errors.phone)}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-xs text-[color:var(--color-error)]">{errors.phone.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email <span className="text-[color:var(--color-error)]">*</span>
          </label>
          <div className="relative">
            <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input
              id="email"
              {...register('email')}
              placeholder="email@congty.com"
              inputMode="email"
              className={fieldClass(!!errors.email)}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs text-[color:var(--color-error)]">{errors.email.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink">
            Tên công ty
          </label>
          <div className="relative">
            <Building2 size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input
              id="company"
              {...register('company')}
              placeholder="Công ty của bạn"
              className={fieldClass(false)}
            />
          </div>
        </div>
      </div>

      {/* Service */}
      <div className="mt-5">
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
          Dịch vụ quan tâm <span className="text-[color:var(--color-error)]">*</span>
        </label>
        <select
          id="service"
          {...register('service')}
          className={cn(
            'w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors',
            errors.service ? 'border-[color:var(--color-error)]' : 'border-line focus:border-primary',
          )}
        >
          <option value="">— Chọn dịch vụ —</option>
          {CONTACT.serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1 text-xs text-[color:var(--color-error)]">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Nội dung cần tư vấn <span className="text-[color:var(--color-error)]">*</span>
        </label>
        <div className="relative">
          <MessageSquare size={18} className="absolute left-3.5 top-3.5 text-muted" />
          <textarea
            id="message"
            {...register('message')}
            rows={4}
            placeholder="Mô tả ngắn nhu cầu của doanh nghiệp bạn (tối thiểu 20 ký tự)..."
            className={cn(
              'w-full rounded-lg border bg-white py-3 pl-11 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-muted/70',
              errors.message
                ? 'border-[color:var(--color-error)]'
                : 'border-line focus:border-primary',
            )}
          />
        </div>
        {errors.message && (
          <p className="mt-1 text-xs text-[color:var(--color-error)]">{errors.message.message}</p>
        )}
      </div>

      {/* Privacy */}
      <label className="mt-5 flex cursor-pointer items-start gap-2.5 text-sm text-muted">
        <input
          type="checkbox"
          {...register('privacyAgreed')}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[color:var(--color-primary)]"
        />
        <span>
          Tôi đồng ý với{' '}
          <a href="#" className="font-medium text-primary underline">
            Chính Sách Bảo Mật
          </a>{' '}
          của SME Accounting.
        </span>
      </label>
      {errors.privacyAgreed && (
        <p className="mt-1 text-xs text-[color:var(--color-error)]">{errors.privacyAgreed.message}</p>
      )}

      {status === 'error' && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-[color:var(--color-error)]">
          Gửi không thành công. Vui lòng gọi trực tiếp hoặc thử lại sau ít phút.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Đang gửi...
          </>
        ) : (
          <>
            Gửi Yêu Cầu Tư Vấn <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
}
