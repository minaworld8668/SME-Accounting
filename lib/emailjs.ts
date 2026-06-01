import emailjs from '@emailjs/browser';
import type { ContactFormData } from './types';

/**
 * Gửi email thông báo lead mới qua EmailJS (client-side, không cần backend).
 * Cấu hình tại emailjs.com → điền các biến NEXT_PUBLIC_EMAILJS_* trong .env.local.
 */
export async function sendEmailViaEmailJS(data: ContactFormData) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS chưa được cấu hình (thiếu env vars).');
  }

  const submittedAt = new Date().toLocaleString('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
  });

  return emailjs.send(
    serviceId,
    templateId,
    {
      from_name: data.fullName,
      from_phone: data.phone,
      from_email: data.email,
      company: data.company || 'Không có',
      service: data.service,
      message: data.message,
      to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      reply_to: data.email,
      submitted_at: submittedAt,
    },
    publicKey,
  );
}
