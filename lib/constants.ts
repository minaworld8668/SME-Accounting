/**
 * lib/constants.ts
 * Tập trung toàn bộ nội dung & cấu hình cho website SME Accounting.
 * Mọi giá trị [ĐIỀN ...] cần được khách hàng xác nhận và thay bằng dữ liệu thực tế.
 */

export const COMPANY = {
  name: 'Công ty TNHH Dịch Vụ Kế Toán SME',
  shortName: 'SME Accounting',
  tagline: 'Giải Pháp Kế Toán Chuyên Nghiệp.',
  phone: process.env.NEXT_PUBLIC_PHONE || '0909 123 456',
  phoneHref: 'tel:' + (process.env.NEXT_PUBLIC_PHONE || '0909123456').replace(/\s/g, ''),
  email: process.env.NEXT_PUBLIC_EMAIL || 'lienhe@smeaccounting.vn',
  address:
    process.env.NEXT_PUBLIC_ADDRESS ||
    'Tầng 5, Tòa nhà ABC, Quận 1, TP. Hồ Chí Minh',
  workingHours: 'Thứ 2 – Thứ 6: 8:00 – 17:30\nThứ 7: 8:00 – 12:00',
} as const;

export const SOCIAL = {
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com',
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || 'https://youtube.com',
  zaloPhone: process.env.NEXT_PUBLIC_ZALO_PHONE || '84909123456',
  viberPhone: process.env.NEXT_PUBLIC_VIBER_PHONE || '+84909123456',
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '84909123456',
} as const;

export const NAV_LINKS = [
  { label: 'Trang Chủ', href: '#home' },
  { label: 'Về Chúng Tôi', href: '#about' },
  { label: 'Dịch Vụ', href: '#services', dropdown: true },
  { label: 'Khách Hàng', href: '#testimonials' },
  { label: 'Đặt Lịch', href: '#contact' },
  { label: 'Liên Hệ', href: '#contact' },
] as const;

export const SERVICE_MENU = [
  { label: 'Kế Toán Trọn Gói', href: '#dich-vu-1' },
  { label: 'Kê Khai & Quyết Toán Thuế', href: '#dich-vu-2' },
  { label: 'Tiền Lương & BHXH', href: '#dich-vu-3' },
  { label: 'Báo Cáo Tài Chính Cuối Năm', href: '#dich-vu-4' },
  { label: 'Tư Vấn Tài Chính', href: '#dich-vu-5' },
  { label: 'Dịch Vụ Theo Yêu Cầu', href: '#dich-vu-6' },
] as const;

export const HERO = {
  tagline: 'Đối Tác Kế Toán Tin Cậy Của Doanh Nghiệp Bạn.',
  headline: ['Giải Pháp Kế Toán & Thuế', 'Toàn Diện Cho Doanh Nghiệp.'],
  description:
    'Công ty TNHH Dịch Vụ Kế Toán SME đồng hành cùng doanh nghiệp trong mọi nghiệp vụ kế toán – từ hạch toán sổ sách hàng ngày đến tư vấn chiến lược tài chính dài hạn. Chúng tôi giúp bạn tuân thủ pháp luật, tối ưu thuế và yên tâm tập trung phát triển kinh doanh.',
  ctaPrimary: 'Khám Phá Dịch Vụ',
  ctaSecondary: 'Đặt Lịch Tư Vấn Miễn Phí',
  stats: [
    { number: 8, suffix: '+', label: 'Năm Kinh Nghiệm' },
    { number: 300, suffix: '+', label: 'Doanh Nghiệp Đã Tin Dùng' },
    { number: 98, suffix: '%', label: 'Khách Hàng Hài Lòng' },
  ],
} as const;

export const SERVICES = [
  {
    id: 'dich-vu-1',
    icon: 'BookOpen',
    title: 'Kế Toán Trọn Gói',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    description:
      'Dịch vụ kế toán thuê ngoài toàn diện – từ hạch toán sổ sách hàng ngày đến lập báo cáo tài chính cuối năm, giúp doanh nghiệp vận hành trơn tru và tuân thủ pháp luật.',
    intro:
      'Giải pháp kế toán thuê ngoài toàn diện cho doanh nghiệp SME. Công ty TNHH Dịch Vụ Kế Toán SME thay bạn đảm nhận toàn bộ công việc kế toán – từ ghi sổ sách hàng ngày đến lập báo cáo tài chính cuối năm. Chúng tôi cung cấp các gói Basic, Standard, Premium linh hoạt tùy quy mô doanh nghiệp.',
    includes: [
      'Hạch toán & sổ sách: Thu thập, kiểm tra mọi hóa đơn, chứng từ; ghi sổ kế toán đầy đủ, chính xác.',
      'Kê khai thuế định kỳ: Lập và nộp tờ khai GTGT, TNCN định kỳ và tạm tính, tạm nộp thuế TNDN hàng quý.',
      'Báo cáo tài chính & quyết toán năm: Lập đầy đủ bộ BCTC và hồ sơ quyết toán thuế năm.',
      'Hỗ trợ kiểm toán & cơ quan thuế: Đại diện doanh nghiệp giải trình số liệu khi có kiểm toán, thanh tra.',
    ],
    benefits: [
      'Tiết kiệm chi phí & nhân lực: Không cần thuê kế toán nội bộ toàn thời gian.',
      'Yên tâm tuân thủ pháp luật: Sổ sách, báo cáo luôn chính xác, nộp đúng hạn.',
      'Tập trung phát triển kinh doanh: Bạn có thêm thời gian cho hoạt động cốt lõi.',
      'Linh hoạt theo nhu cầu: Gói dịch vụ dễ dàng điều chỉnh khi công ty thay đổi quy mô.',
    ],
  },
  {
    id: 'dich-vu-2',
    icon: 'Receipt',
    title: 'Kê Khai & Quyết Toán Thuế',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80',
    description:
      'Xử lý toàn bộ công việc kê khai và quyết toán thuế định kỳ – đảm bảo doanh nghiệp luôn nộp thuế đúng hạn, đúng quy định và tránh rủi ro bị phạt.',
    intro:
      'Giải pháp thuê ngoài nghĩa vụ thuế nhanh chóng, chính xác. Dịch vụ tập trung xử lý toàn bộ công việc kê khai và quyết toán thuế định kỳ, giúp chủ doanh nghiệp giảm tải gánh nặng thủ tục thuế.',
    includes: [
      'Kê khai thuế định kỳ: Chuẩn bị và nộp tờ khai GTGT, TNCN đúng hạn; tạm tính & tạm nộp thuế TNDN.',
      'Quyết toán thuế cuối năm: Rà soát sổ sách, đối chiếu chứng từ và lập hồ sơ quyết toán thuế năm.',
      'Hỗ trợ hoàn thuế: Lập hồ sơ hoàn thuế GTGT, TNCN và theo dõi đến khi nhận được khoản hoàn.',
      'Tư vấn & giải trình thuế: Tư vấn tối ưu nghĩa vụ thuế hợp pháp; đại diện làm việc với cơ quan thuế.',
    ],
    benefits: [
      'Giảm thiểu rủi ro: Kê khai chính xác, nộp đúng hạn giúp tránh bị phạt.',
      'Tiết kiệm thời gian: Không mất thời gian tự tìm hiểu thủ tục thuế phức tạp.',
      'Chuyên môn & kinh nghiệm: Đội ngũ chuyên viên thuế luôn cập nhật quy định mới nhất.',
      'Chi phí linh hoạt: Phí dịch vụ theo số lượng hóa đơn và mức độ phát sinh thực tế.',
    ],
  },
  {
    id: 'dich-vu-3',
    icon: 'Users',
    title: 'Tiền Lương & BHXH',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80',
    description:
      'Tính lương nhân viên chính xác, quản lý bảo hiểm xã hội minh bạch – đúng hạn mỗi tháng, bảo mật tuyệt đối thông tin nhân sự.',
    intro:
      'Thuê ngoài tính lương & quản lý bảo hiểm – chính xác, bảo mật. Chúng tôi giúp doanh nghiệp xử lý toàn bộ công việc tính lương nhân viên và thủ tục bảo hiểm mỗi tháng.',
    includes: [
      'Tính lương hàng tháng: Tổng hợp ngày công, tính lương, tăng ca, phụ cấp, thưởng; lập bảng lương chi tiết.',
      'Kê khai & nộp thuế TNCN: Tính toán thuế TNCN phải khấu trừ; chuẩn bị và nộp tờ khai TNCN định kỳ.',
      'Quản lý BHXH, BHYT, BHTN: Đăng ký, báo tăng/giảm lao động, hồ sơ chế độ và chốt sổ BHXH.',
    ],
    benefits: [
      'Chính xác & đúng hạn: Lương được tính đúng từng tháng; bảo hiểm đóng đầy đủ.',
      'Bảo mật & chuyên nghiệp: Thông tin lương và dữ liệu nhân sự được bảo mật tuyệt đối.',
      'Tiết kiệm nhân lực & chi phí: Không cần nhân sự riêng tính lương và bảo hiểm nội bộ.',
      'Tuân thủ pháp luật lao động: Mọi quy trình đúng quy định, tránh vi phạm chế độ NLĐ.',
    ],
  },
  {
    id: 'dich-vu-4',
    icon: 'FileBarChart',
    title: 'Báo Cáo Tài Chính Cuối Năm',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    description:
      'Hỗ trợ lập Báo cáo Tài chính cuối năm chính xác, đúng chuẩn mực – đặc biệt hữu ích nếu doanh nghiệp cần trợ giúp khi quyết toán năm.',
    intro:
      'Hoàn tất báo cáo năm dễ dàng, chính xác. Dịch vụ hỗ trợ doanh nghiệp lập Báo cáo Tài chính (BCTC) cuối năm, đặc biệt hữu ích nếu bạn chưa sử dụng dịch vụ kế toán thường xuyên.',
    includes: [
      'Rà soát & hoàn thiện sổ sách: Kiểm tra toàn bộ chứng từ cả năm; điều chỉnh các bút toán sai lệch.',
      'Lập báo cáo tài chính năm: Chuẩn bị đầy đủ bộ BCTC theo chuẩn mực kế toán hiện hành.',
      'Quyết toán thuế năm: Lập tờ khai quyết toán thuế TNDN, TNCN đúng hạn.',
      'Bàn giao & hỗ trợ sau báo cáo: Cung cấp bộ BCTC hoàn chỉnh; hỗ trợ giải thích số liệu.',
    ],
    benefits: [
      'BCTC chính xác & đáng tin cậy: Tạo niềm tin với đối tác, ngân hàng và cơ quan thuế.',
      'Tuân thủ & tránh rủi ro: Nộp BCTC và quyết toán thuế đúng thời hạn.',
      'Tiết kiệm thời gian: Không phải lo tổng hợp số liệu phức tạp cuối năm.',
      'Tư vấn cải thiện tài chính: Nhận xét & khuyến nghị cho năm tiếp theo.',
    ],
  },
  {
    id: 'dich-vu-5',
    icon: 'LineChart',
    title: 'Tư Vấn Tài Chính – Kế Toán – Thuế',
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1000&q=80',
    description:
      'Đồng hành chiến lược tài chính, tối ưu thuế dài hạn – tư vấn chuyên sâu theo giờ hoặc theo dự án cho những quyết định quan trọng.',
    intro:
      'Đồng hành chiến lược tài chính, tối ưu thuế dài hạn. Cho những quyết định quan trọng về tài chính hoặc tối ưu thuế, chúng tôi cung cấp dịch vụ tư vấn chuyên sâu theo giờ hoặc theo dự án.',
    includes: [
      'Tư vấn chiến lược tài chính: Phân tích tình hình, tối ưu dòng tiền; hỗ trợ hồ sơ vay vốn/gọi vốn.',
      'Tư vấn thuế doanh nghiệp: Xây dựng kế hoạch thuế tối ưu, cập nhật quy định thuế mới.',
      'Áp dụng chuẩn mực kế toán mới: Hướng dẫn chuyển đổi IFRS hoặc nâng cấp hệ thống theo VAS.',
      'CFO/Kế toán trưởng thuê ngoài: Cung cấp nhân sự quản lý tài chính cấp cao theo dự án.',
    ],
    benefits: [
      'Chuyên gia đồng hành: Định hình chiến lược và ra quyết định chính xác.',
      'Tối ưu nguồn lực & chi phí: Tiếp cận kiến thức chuyên sâu không cần thuê nhân sự cấp cao.',
      'Tăng trưởng bền vững: Quản lý tài chính hiệu quả và kế hoạch thuế bài bản.',
      'Điều chỉnh linh hoạt: Đặt lịch tư vấn bất kỳ khi nào cần.',
    ],
  },
  {
    id: 'dich-vu-6',
    icon: 'Settings2',
    title: 'Dịch Vụ Theo Yêu Cầu',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80',
    description:
      'Linh hoạt cho mọi nhu cầu kế toán – thuế đặc thù: rà soát sổ sách, hỗ trợ thanh tra hay các thủ tục đột xuất.',
    intro:
      'Linh hoạt cho mọi nhu cầu kế toán – thuế đặc thù. Không phải mọi công việc kế toán đều nằm gọn trong các gói cố định. SME Accounting sẵn sàng hỗ trợ mọi nghiệp vụ phát sinh hoặc tình huống đặc biệt.',
    includes: [
      'Rà soát & hoàn thiện sổ sách: Kiểm tra và gỡ rối sổ sách các năm trước.',
      'Hỗ trợ quyết toán khi bị thanh tra thuế: Chuẩn bị hồ sơ; đại diện giải trình với cơ quan thuế.',
      'Đăng ký & thủ tục BHXH, thuế ban đầu: Đăng ký mã số thuế và BHXH cho doanh nghiệp mới.',
      'Hoàn thuế & thủ tục đặc biệt: Lập hồ sơ hoàn thuế; tư vấn xử lý vi phạm, khoản phạt.',
    ],
    benefits: [
      'Giải quyết kịp thời mọi phát sinh: Luôn có giải pháp sẵn sàng.',
      'Linh hoạt & tiết kiệm: Chỉ sử dụng dịch vụ khi cần; chi phí theo khối lượng công việc.',
      'An tâm & tin cậy: Đội ngũ chuyên gia giàu kinh nghiệm đồng hành.',
    ],
  },
] as const;

export const SERVICES_SECTION = {
  label: 'Dịch Vụ Của Chúng Tôi',
  leftDescription:
    'Chúng tôi cung cấp giải pháp kế toán và thuế toàn diện, được thiết kế phù hợp với từng loại hình và quy mô doanh nghiệp, giúp bạn vận hành hiệu quả và tuân thủ pháp luật.',
  rightHeading: 'Giải Pháp Tài Chính Chuyên Nghiệp Cho Doanh Nghiệp Của Bạn',
  viewAll: 'Xem Tất Cả Dịch Vụ',
} as const;

export const QUOTE_BANNER = {
  quote:
    'Kế toán tốt không chỉ là những con số – đó là nền tảng cho mọi quyết định kinh doanh tự tin và bền vững.',
  subtext: 'Được tin dùng bởi 200+ Doanh Nghiệp',
  videoLabel: 'Xem Video Giới Thiệu',
} as const;

export const WHY_CHOOSE = {
  label: 'Tại Sao Chọn Chúng Tôi',
  heading: 'Lý Do Doanh Nghiệp Tin Tưởng Giao Phó Kế Toán & Thuế Cho SME',
  blueBox: {
    text: 'Đội ngũ của chúng tôi luôn sẵn sàng cung cấp hướng dẫn chuyên môn và giải pháp thực tế cho mọi vấn đề tài chính – kế toán của doanh nghiệp bạn.',
    cta: 'Bắt Đầu Ngay',
  },
  description:
    'Chúng tôi kết hợp chuyên môn sâu với cách tiếp cận cá nhân hóa để cung cấp dịch vụ kế toán và thuế đáng tin cậy. Sứ mệnh của chúng tôi là giúp doanh nghiệp luôn tự tin về tài chính, tuân thủ pháp luật và sẵn sàng tăng trưởng bền vững.',
  checkpoints: [
    {
      title: 'Chuyên Viên Kế Toán Giàu Kinh Nghiệm',
      desc: 'Đội ngũ kế toán viên và chuyên gia thuế được đào tạo bài bản, am hiểu sâu sắc quy định kế toán – thuế Việt Nam và nhu cầu thực tế của từng loại hình doanh nghiệp.',
    },
    {
      title: 'Quy Trình Chính Xác & Minh Bạch',
      desc: 'Mọi con số đều được kiểm soát chặt chẽ. Chúng tôi đảm bảo báo cáo chính xác, giao tiếp rõ ràng và tuân thủ đầy đủ các quy định hiện hành.',
    },
    {
      title: 'Giải Pháp Tùy Chỉnh Theo Từng Doanh Nghiệp',
      desc: 'Từ doanh nghiệp siêu nhỏ đến quy mô vừa, dịch vụ của chúng tôi linh hoạt điều chỉnh để phù hợp với mục tiêu, đặc thù và giai đoạn phát triển của từng đơn vị.',
    },
  ],
} as const;

export const ABOUT = {
  label: 'Đối Tác Kế Toán & Thuế Đáng Tin Cậy Của Bạn',
  heading: 'Xây Dựng Niềm Tin Qua Giải Pháp Kế Toán & Thuế Chính Xác',
  description:
    'Với nhiều năm kinh nghiệm chuyên sâu, Công ty TNHH Dịch Vụ Kế Toán SME cung cấp dịch vụ kế toán và tư vấn thuế đáng tin cậy, được thiết kế để giúp doanh nghiệp luôn tuân thủ pháp luật và vững mạnh về tài chính. Đội ngũ kế toán viên chuyên nghiệp của chúng tôi mang đến chiến lược rõ ràng, báo cáo minh bạch và hướng dẫn chuyên môn sát thực để bạn yên tâm tập trung phát triển doanh nghiệp.',
  cta: 'Tìm Hiểu Thêm Về Chúng Tôi',
  imageQuote:
    'Phía sau mỗi doanh nghiệp thành công là một người kế toán đáng tin cậy – người hiểu hơn cả những con số.',
  imageQuoteCta: 'Khám Phá Câu Chuyện Của Chúng Tôi',
  statBox: {
    label: 'Đội ngũ kế toán viên chuyên nghiệp của chúng tôi mang đến chiến lược rõ ràng',
    number: '200+',
    desc: 'Doanh Nghiệp Đã Được Đồng Hành',
  },
} as const;

export const TESTIMONIALS_SECTION = {
  label: 'Được Khách Hàng Tin Tưởng',
  heading: 'Khách Hàng Nói Gì Về Dịch Vụ Kế Toán Của Chúng Tôi',
} as const;

export const TESTIMONIALS = [
  { title: 'Dịch Vụ Xuất Sắc!', body: 'Đội ngũ SME xử lý toàn bộ thuế cho doanh nghiệp tôi rất chuyên nghiệp. Từ khi hợp tác, tôi chưa một lần lo lắng về kỳ kê khai thuế.', name: 'Nguyễn Minh Tuấn', role: 'Chủ Doanh Nghiệp Nhỏ', initials: 'NT' },
  { title: 'Đối Tác Thực Sự Đáng Tin', body: 'SME không chỉ làm kế toán – họ còn giúp tôi lên kế hoạch tài chính thông minh hơn và tiết kiệm chi phí đáng kể. Tôi rất khuyến nghị!', name: 'Trần Thị Lan Anh', role: 'Nhà Sáng Lập Startup', initials: 'LA' },
  { title: 'Chuyên Nghiệp & Hiệu Quả', body: 'Tôi đánh giá cao sự tỉ mỉ và tốc độ phản hồi của đội ngũ SME. Sổ sách của công ty tôi luôn trong trạng thái sẵn sàng và minh bạch.', name: 'Lê Văn Hải', role: 'Giám Đốc Công ty Thương Mại', initials: 'VH' },
  { title: 'Tiết Kiệm Thời Gian & Giảm Căng Thẳng', body: 'Trước khi làm việc với SME, sổ sách của tôi rất rối. Giờ đây mọi thứ được sắp xếp gọn gàng, chính xác và luôn đúng hạn.', name: 'Phạm Thị Hương', role: 'Chủ Cửa Hàng Thương Mại Điện Tử', initials: 'TH' },
  { title: 'Chiến Lược Thuế Hiệu Quả', body: 'Nhờ tư vấn thuế của SME, chúng tôi đã tối ưu được đáng kể chi phí thuế một cách hoàn toàn hợp pháp. Rất biết ơn đội ngũ!', name: 'Hoàng Đức Minh', role: 'Giám Đốc Điều Hành', initials: 'DM' },
  { title: 'Hỗ Trợ Tận Tình', body: 'Đội ngũ SME xử lý toàn bộ lương & BHXH cho nhân viên chúng tôi rất trơn tru. Thông tin luôn bảo mật và chính xác tuyệt đối.', name: 'Vũ Thị Mai', role: 'Giám Đốc Nhân Sự', initials: 'TM' },
  { title: 'Kết Quả Nhất Quán', body: 'Chúng tôi đã hợp tác với SME được 3 năm. Mỗi kỳ kê khai thuế đều diễn ra suôn sẻ, không một lần bị phạt hay sai sót.', name: 'Đặng Quốc Bảo', role: 'Chủ Doanh Nghiệp Sản Xuất', initials: 'QB' },
  { title: 'Rất Đáng Tin Tưởng', body: 'Công ty kế toán chuyên nghiệp nhất tôi từng hợp tác. Minh bạch, trách nhiệm cao và luôn hỗ trợ kịp thời khi có vấn đề phát sinh.', name: 'Ngô Thị Thanh', role: 'Tư Vấn Kinh Doanh', initials: 'TT' },
] as const;

export const HOW_IT_WORKS = {
  label: 'Quy Trình Làm Việc',
  heading: 'Quy Trình Kế Toán Đơn Giản & Minh Bạch Của Chúng Tôi',
  subDesc:
    'Chúng tôi giúp bạn quản lý tài chính dễ dàng hơn thông qua quy trình rõ ràng, có cấu trúc – từ buổi tư vấn ban đầu đến báo cáo tài chính định kỳ. Mỗi bước đều được thiết kế để tối ưu thời gian và giảm thiểu rủi ro cho doanh nghiệp.',
  cta: 'Xem Tất Cả Dịch Vụ',
  steps: [
    { number: '01', icon: 'Calendar', title: 'Đặt Lịch Tư Vấn Miễn Phí', desc: 'Chúng tôi lắng nghe nhu cầu doanh nghiệp của bạn, tìm hiểu đặc thù hoạt động và quy mô, từ đó đề xuất giải pháp kế toán phù hợp nhất.', dark: true },
    { number: '02', icon: 'Search', title: 'Phân Tích & Lập Kế Hoạch', desc: 'Đội ngũ chuyên gia rà soát hồ sơ tài chính hiện tại, xác định cơ hội tối ưu thuế hợp pháp và xây dựng phương án kế toán hiệu quả, minh bạch.', dark: false },
    { number: '03', icon: 'ShieldCheck', title: 'Triển Khai & Hỗ Trợ Liên Tục', desc: 'Chúng tôi đảm nhận toàn bộ công việc kế toán hàng ngày, kê khai thuế định kỳ và lập báo cáo tài chính – để bạn yên tâm tập trung phát triển doanh nghiệp.', dark: true },
  ],
} as const;

export const ACHIEVEMENTS = {
  label: 'Kết Quả Đã Được Kiểm Chứng',
  heading: 'Những Con Số Nói Lên Tất Cả',
  desc:
    'Chúng tôi tự hào mang lại kết quả tài chính thực tế và có thể đo lường được. Với nhiều năm kinh nghiệm và dịch vụ được tin dùng, SME Accounting đã đồng hành cùng hàng trăm doanh nghiệp duy trì sự tuân thủ, vận hành hiệu quả và phát triển bền vững về tài chính.',
  cta: 'Tìm Hiểu Thêm Về Chúng Tôi',
  stats: [
    { number: 300, suffix: '+', label: 'Doanh Nghiệp Được Phục Vụ' },
    { number: 50000, suffix: '+', label: 'Chứng Từ Đã Được Xử Lý' },
    { number: 98, suffix: '%', label: 'Tỷ Lệ Khách Hàng Hài Lòng' },
    { number: 500, suffix: '+', label: 'Hồ Sơ Thuế Đã Hoàn Thành' },
  ],
} as const;

export const BLOG = {
  label: 'Kiến Thức & Cập Nhật',
  heading: 'Khám Phá Tài Nguyên Kế Toán & Thuế Mới Nhất',
  posts: [
    { date: 'Tháng 6, 2026', category: 'Chiến Lược Kinh Doanh', title: 'Tại Sao Kiểm Tra Sổ Sách Định Kỳ Giúp Tăng Uy Tín Doanh Nghiệp', excerpt: 'Rà soát sổ sách không chỉ là nghĩa vụ pháp lý – đây là công cụ mạnh mẽ giúp doanh nghiệp minh bạch tài chính và tạo dựng niềm tin với đối tác, ngân hàng và cơ quan thuế...', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80', href: '#' },
    { date: 'Tháng 6, 2026', category: 'Chiến Lược Kinh Doanh', title: 'Cách Đọc Báo Cáo Tài Chính Để Ra Quyết Định Kinh Doanh Thông Minh Hơn', excerpt: 'Hiểu được báo cáo tài chính là chìa khóa để chủ doanh nghiệp nắm bắt sức khỏe tài chính, phát hiện cơ hội và đưa ra quyết định chiến lược đúng đắn cho từng giai đoạn...', image: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1000&q=80', href: '#' },
    { date: 'Tháng 6, 2026', category: 'Chiến Lược Kinh Doanh', title: 'Xây Dựng Chiến Lược Tài Chính Thúc Đẩy Tăng Trưởng Doanh Nghiệp', excerpt: 'Một chiến lược tài chính bài bản không chỉ giúp doanh nghiệp tồn tại mà còn tạo nền tảng vững chắc để mở rộng quy mô, kiểm soát dòng tiền và nắm bắt cơ hội thị trường...', image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1000&q=80', href: '#' },
  ],
} as const;

export const CTA_BANNER = {
  heading: 'Đặt Lịch Tư Vấn Kế Toán & Thuế Miễn Phí Ngay Hôm Nay',
  cta: 'Đặt Lịch Tư Vấn',
} as const;

export const CONTACT = {
  label: 'Liên Hệ Với Chúng Tôi',
  heading: 'Sẵn Sàng Đồng Hành Cùng Doanh Nghiệp Bạn',
  subDesc:
    'Điền thông tin bên dưới để được tư vấn miễn phí. Chúng tôi sẽ phản hồi trong vòng 2 giờ làm việc.',
  serviceOptions: [
    'Kế Toán Trọn Gói (Basic/Standard/Premium)',
    'Kê Khai & Quyết Toán Thuế',
    'Tiền Lương & BHXH',
    'Lập Báo Cáo Tài Chính Cuối Năm',
    'Tư Vấn Tài Chính – Kế Toán – Thuế',
    'Dịch Vụ Theo Yêu Cầu',
    'Chưa rõ – cần tư vấn thêm',
  ],
} as const;

export const FOOTER = {
  bigText: 'Hãy Kết Nối',
  description:
    'Công ty TNHH Dịch Vụ Kế Toán SME – đối tác kế toán chuyên nghiệp, đồng hành cùng doanh nghiệp Việt Nam vận hành hiệu quả, tuân thủ pháp luật và phát triển bền vững.',
  quickLinks: [
    { label: 'Trang Chủ', href: '#home' },
    { label: 'Về Chúng Tôi', href: '#about' },
    { label: 'Dịch Vụ', href: '#services' },
    { label: 'Đặt Lịch', href: '#contact' },
    { label: 'Liên Hệ', href: '#contact' },
  ],
  newsletterTitle: 'Nhận Cập Nhật Mới Nhất Từ Chúng Tôi',
  newsletterPlaceholder: 'Nhập địa chỉ email của bạn',
  newsletterCTA: 'Đăng Ký',
  copyright: '© 2026 Bản Quyền Thuộc Công ty TNHH Dịch Vụ Kế Toán SME',
  legalLinks: ['Chính Sách Bảo Mật', 'Điều Khoản & Điều Kiện'],
} as const;

export const MAPS_EMBED_URL =
  process.env.NEXT_PUBLIC_MAPS_EMBED_URL ||
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4267060334147!2d106.69829731533417!3d10.776530162088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a8a7f0c1d%3A0x0!2zUXXhuq1uIDEsIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1700000000000';
