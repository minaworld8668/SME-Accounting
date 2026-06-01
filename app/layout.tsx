import type { Metadata, Viewport } from 'next';
import { Inter, Barlow_Semi_Condensed, Cormorant_Garamond } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

// Heading font — Barlow Semi Condensed (mạnh mẽ, hiện đại, cao cấp)
const barlow = Barlow_Semi_Condensed({
  subsets: ['latin', 'vietnamese'],
  weight: ['500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
});

// Elegant serif — Cormorant Garamond (dùng cho trích dẫn / điểm nhấn sang trọng)
const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://smeaccounting.vn'),
  title: {
    default: 'SME Accounting | Công ty Kế Toán Chuyên Nghiệp',
    template: '%s | SME Accounting',
  },
  description:
    'Công ty TNHH Dịch Vụ Kế Toán SME – cung cấp dịch vụ kế toán trọn gói, kê khai thuế, tiền lương & BHXH chuyên nghiệp cho doanh nghiệp vừa và nhỏ tại Việt Nam.',
  keywords: [
    'dịch vụ kế toán',
    'kế toán thuê ngoài',
    'kê khai thuế',
    'quyết toán thuế',
    'tính lương BHXH',
    'báo cáo tài chính',
    'SME accounting',
    'kế toán doanh nghiệp nhỏ',
    'kế toán TPHCM',
  ],
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://smeaccounting.vn',
    siteName: 'SME Accounting',
    title: 'SME Accounting | Giải Pháp Kế Toán Toàn Diện',
    description:
      'Dịch vụ kế toán thuê ngoài chuyên nghiệp – tiết kiệm chi phí, tuân thủ pháp luật, tập trung phát triển doanh nghiệp.',
    images: [{ url: '/images/logo.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1565C0',
};

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable} ${barlow.variable} ${cormorant.variable}`}>
      <body>
        {children}

        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}

        {/* Tidio Live Chat (tùy chọn — set NEXT_PUBLIC_TIDIO_KEY để bật) */}
        {process.env.NEXT_PUBLIC_TIDIO_KEY && (
          <Script
            src={`//code.tidio.co/${process.env.NEXT_PUBLIC_TIDIO_KEY}.js`}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
