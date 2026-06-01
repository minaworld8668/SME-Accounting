import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/types';

/**
 * API route dự phòng nếu EmailJS (client-side) thất bại.
 * Forward dữ liệu form sang Google Apps Script webhook từ phía server.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: 'Dữ liệu không hợp lệ.', issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          timestamp: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
          ...parsed.data,
          source: 'API Fallback',
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : 'Lỗi máy chủ.' },
      { status: 500 },
    );
  }
}
