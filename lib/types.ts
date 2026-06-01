import { z } from 'zod';

export const contactSchema = z.object({
  fullName: z.string().min(2, 'Vui lòng nhập họ tên (tối thiểu 2 ký tự).'),
  phone: z
    .string()
    .regex(/^(0[3-9][0-9]{8})$/, 'Số điện thoại không hợp lệ (VD: 0901234567).'),
  email: z.string().email('Email không hợp lệ.'),
  company: z.string().optional(),
  service: z.string().min(1, 'Vui lòng chọn dịch vụ quan tâm.'),
  message: z.string().min(20, 'Nội dung cần tối thiểu 20 ký tự.'),
  privacyAgreed: z.literal(true, {
    errorMap: () => ({ message: 'Bạn cần đồng ý với Chính Sách Bảo Mật.' }),
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
