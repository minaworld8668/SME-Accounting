import type { ContactFormData } from './types';

/**
 * Lưu lead vào Google Sheets qua Google Apps Script Web App (webhook POST).
 * Xem hướng dẫn deploy Apps Script ở cuối file này.
 */
export async function saveToGoogleSheets(
  data: ContactFormData,
  source = 'Website Contact Form',
) {
  const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error('Google Sheets webhook chưa được cấu hình.');
  }

  const payload = {
    timestamp: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
    fullName: data.fullName,
    phone: data.phone,
    email: data.email,
    company: data.company || '',
    service: data.service,
    message: data.message,
    source,
  };

  // Apps Script Web App: dùng text/plain để tránh CORS preflight.
  await fetch(webhookUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  });
}

/**
 * Lưu email đăng ký newsletter vào Google Sheets (tab "Newsletter").
 */
export async function saveNewsletterEmail(email: string) {
  const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) throw new Error('Google Sheets webhook chưa được cấu hình.');

  await fetch(webhookUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({
      timestamp: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
      email,
      source: 'Newsletter Signup',
      type: 'newsletter',
    }),
  });
}
