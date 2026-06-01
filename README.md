# SME Accounting Website

Website doanh nghiệp cho **Công ty TNHH Dịch Vụ Kế Toán SME**, xây dựng theo template Matre (accounting firm theme).

## Tech stack
- **Next.js 14** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v3** + CSS variables
- **Framer Motion** (scroll animations)
- **React Hook Form + Zod** (form + validation)
- **EmailJS** + **Google Apps Script** (gửi form không cần backend)
- **Lucide React** + **React Icons**

## Chạy dev
```bash
npm install
cp .env.example .env.local   # rồi điền giá trị thực
npm run dev                  # http://localhost:3000
```
> Site chạy được ngay cả khi chưa cấu hình `.env.local` (dùng nội dung mặc định, ảnh placeholder picsum). Form sẽ báo lỗi khi gửi cho tới khi cấu hình EmailJS/Google Sheets.

## Build production
```bash
npm run build && npm start
```

## Cấu hình tích hợp
| Tích hợp | Biến môi trường | Ghi chú |
|---|---|---|
| EmailJS | `NEXT_PUBLIC_EMAILJS_*`, `NEXT_PUBLIC_CONTACT_EMAIL` | emailjs.com (free 200 email/tháng) |
| Google Sheets | `NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL` | deploy `google-apps-script.js` (xem file) |
| Google Maps | `NEXT_PUBLIC_MAPS_EMBED_URL` | maps.google.com → Share → Embed |
| Zalo/Viber/WhatsApp | `NEXT_PUBLIC_*_PHONE` | floating widget |
| Tidio (tùy chọn) | `NEXT_PUBLIC_TIDIO_KEY` | thay cho chatbot tích hợp sẵn |
| GA4 | `NEXT_PUBLIC_GA4_ID` | |

## Cấu trúc
```
app/            layout, page, globals.css, api/contact
components/     layout · sections · ui · forms
lib/            constants (toàn bộ nội dung) · emailjs · googleSheets · types · utils
public/images/  logo.jpg
```

## Số liệu cần khách hàng xác nhận
SĐT thực tế · địa chỉ văn phòng · email nhận form · link mạng xã hội · embed map ·
logo 3 khách hàng tiêu biểu · ảnh thật thay cho picsum placeholder.
Tất cả tập trung trong `lib/constants.ts` và `.env.local`.
