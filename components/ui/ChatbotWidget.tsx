'use client';

import { useEffect, useRef, useState } from 'react';
import { Bot, Send, X } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import { saveToGoogleSheets } from '@/lib/googleSheets';
import type { ContactFormData } from '@/lib/types';
import { cn } from '@/lib/utils';

interface Message {
  role: 'bot' | 'user';
  text: string;
}

const VN_PHONE_REGEX = /(0[3-9][0-9]{8})\b/;
const STORAGE_KEY = 'sme_chat_history';

const WELCOME: Message = {
  role: 'bot',
  text: 'Xin chào! Tôi là trợ lý AI của SME Accounting. Tôi có thể giúp gì cho bạn về dịch vụ kế toán, thuế hay lương & BHXH?',
};

/** Trợ lý dạng rule-based, hoạt động hoàn toàn client-side (không cần API key).
 *  Tự động phát hiện SĐT trong hội thoại để lưu lead vào Google Sheets. */
function botReply(input: string, turn: number): string {
  const t = input.toLowerCase();
  if (VN_PHONE_REGEX.test(input)) {
    return 'Cảm ơn bạn đã để lại số điện thoại! Chuyên viên của SME Accounting sẽ liên hệ tư vấn miễn phí trong thời gian sớm nhất. 📞';
  }
  if (t.includes('giá') || t.includes('phí') || t.includes('bao nhiêu')) {
    return 'Chi phí dịch vụ được tính linh hoạt theo khối lượng chứng từ và quy mô doanh nghiệp. Để nhận báo giá chính xác, bạn vui lòng để lại số điện thoại nhé!';
  }
  if (t.includes('thuế')) {
    return 'SME cung cấp dịch vụ Kê khai & Quyết toán thuế trọn gói: kê khai định kỳ, quyết toán năm, hoàn thuế và giải trình với cơ quan thuế. Bạn muốn được tư vấn cụ thể chứ?';
  }
  if (t.includes('lương') || t.includes('bhxh') || t.includes('bảo hiểm')) {
    return 'Dịch vụ Tiền lương & BHXH của SME xử lý tính lương, thuế TNCN và toàn bộ thủ tục BHXH/BHYT/BHTN – chính xác, đúng hạn, bảo mật tuyệt đối.';
  }
  if (t.includes('kế toán') || t.includes('sổ sách') || t.includes('trọn gói')) {
    return 'Dịch vụ Kế toán Trọn gói giúp bạn yên tâm toàn bộ sổ sách, báo cáo và tuân thủ pháp luật. Có các gói Basic/Standard/Premium tùy quy mô. Bạn để lại SĐT để được tư vấn gói phù hợp nhé!';
  }
  if (turn >= 2) {
    return `Để được tư vấn chi tiết và miễn phí, bạn vui lòng để lại số điện thoại, hoặc gọi ngay ${COMPANY.phone}. Đội ngũ SME luôn sẵn sàng hỗ trợ!`;
  }
  return 'Rất vui được hỗ trợ bạn! SME cung cấp 6 nhóm dịch vụ: Kế toán trọn gói, Kê khai & quyết toán thuế, Tiền lương & BHXH, Báo cáo tài chính, Tư vấn tài chính và Dịch vụ theo yêu cầu. Bạn quan tâm dịch vụ nào?';
}

export default function ChatbotWidget({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const userTurns = useRef(0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setMessages(JSON.parse(saved));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      /* ignore */
    }
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    setMessages((m) => [...m, { role: 'user', text }]);
    setInput('');
    userTurns.current += 1;

    // Lead capture: phát hiện SĐT → lưu Google Sheets
    const phoneMatch = text.match(VN_PHONE_REGEX);
    if (phoneMatch) {
      const lead: ContactFormData = {
        fullName: 'Khách từ Chatbot',
        phone: phoneMatch[1],
        email: 'chatbot@lead.local',
        service: 'Tư vấn qua AI Chatbot',
        message: messages.map((m) => `${m.role}: ${m.text}`).join('\n') + `\nuser: ${text}`,
        privacyAgreed: true,
      };
      saveToGoogleSheets(lead, 'AI Chatbot').catch(() => {});
    }

    setTyping(true);
    const reply = botReply(text, userTurns.current);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: 'bot', text: reply }]);
    }, 800);
  };

  return (
    <div className="flex h-[480px] w-[min(360px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between bg-gradient-to-r from-primary to-primary-dark px-4 py-3 text-white">
        <div className="flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
            <Bot size={20} />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-primary bg-[color:var(--color-success)]" />
          </span>
          <div>
            <div className="text-sm font-semibold leading-tight">SME AI Assistant</div>
            <div className="text-xs text-white/80">Đang hoạt động</div>
          </div>
        </div>
        <button onClick={onClose} aria-label="Đóng chat" className="rounded-full p-1 hover:bg-white/15">
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-surface p-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={cn('flex', m.role === 'user' ? 'justify-end' : 'justify-start')}
          >
            <div
              className={cn(
                'max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed',
                m.role === 'user'
                  ? 'rounded-br-sm bg-primary text-white'
                  : 'rounded-bl-sm border border-line bg-white text-ink',
              )}
            >
              {m.text}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="flex gap-1 rounded-2xl rounded-bl-sm border border-line bg-white px-4 py-3">
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="h-2 w-2 animate-bounce rounded-full bg-muted/60"
                  style={{ animationDelay: `${d * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={send} className="flex items-center gap-2 border-t border-line bg-white p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập tin nhắn..."
          className="w-full rounded-full border border-line px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
        <button
          type="submit"
          aria-label="Gửi"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark"
        >
          <Send size={17} />
        </button>
      </form>
    </div>
  );
}
