/* ============================================================
   CropMate AI – Mock data (data.js)
   Seed dữ liệu mẫu tiếng Việt cho toàn bộ entity.
   Chạy được qua file:// — không dùng ES module.
   ============================================================ */
window.CM = window.CM || {};

CM.seed = {
  users: [
    { id: 'u1', name: 'Nguyễn Văn Hùng',  email: 'farmer@cropmate.dev',      role: 'farmer',      phone: '0901 234 567', location: 'Xã Mỹ Thành, huyện Cao Lãnh, Đồng Tháp', status: 'active',   joinedAt: '2025-11-04' },
    { id: 'u2', name: 'Trần Thị Mai',     email: 'maitran.farmer@gmail.com', role: 'farmer',      phone: '0912 345 678', location: 'Xã Tân Hưng, huyện Tháp Mười, Đồng Tháp', status: 'active',   joinedAt: '2025-12-01' },
    { id: 'u3', name: 'TS. Lê Quốc Bảo',  email: 'expert@cropmate.dev',      role: 'expert',      phone: '0983 456 789', location: 'Viện Khoa học Nông nghiệp ĐBSCL, Cần Thơ',  status: 'active',   joinedAt: '2025-10-20' },
    { id: 'u4', name: 'KS. Phạm Thu Trang', email: 'trang.chuyengia@gmail.com', role: 'expert',    phone: '0974 567 890', location: 'Trung tâm Khuyến nông tỉnh Đồng Tháp',      status: 'active',   joinedAt: '2026-01-12' },
    { id: 'u5', name: 'Võ Minh Đức',      email: 'coordinator@cropmate.dev', role: 'coordinator', phone: '0965 678 901', location: 'HTX Nông nghiệp Phú Hưng, Cao Lãnh',        status: 'active',   joinedAt: '2025-09-15' },
    { id: 'u6', name: 'Đặng Thu Hà',      email: 'admin@cropmate.dev',       role: 'admin',       phone: '0936 789 012', location: 'Ban quản trị hệ thống CropMate',            status: 'active',   joinedAt: '2025-08-01' },
    { id: 'u7', name: 'Bùi Văn Tèo',      email: 'teo.bui@gmail.com',        role: 'farmer',      phone: '0947 890 123', location: 'Xã Phú Hưng, huyện Cao Lãnh, Đồng Tháp',    status: 'locked',   joinedAt: '2025-11-20' },
    { id: 'u8', name: 'Ngô Thị Sen',      email: 'sen.ngo@gmail.com',        role: 'farmer',      phone: '0958 901 234', location: 'Xã Mỹ Thọ, huyện Cao Lãnh, Đồng Tháp',      status: 'active',   joinedAt: '2026-02-05' }
  ],

  crops: [
    { id: 'c1', name: 'Lúa Đông Xuân (IR 50404)',   category: 'Cây lương thực', growthStages: ['Làm đất', 'Gieo sạ', 'Đẻ nhánh', 'Làm đồng', 'Trổ - chín', 'Thu hoạch'], status: 'active' },
    { id: 'c2', name: 'Lúa Hè Thu (OM 18)',          category: 'Cây lương thực', growthStages: ['Làm đất', 'Gieo sạ', 'Đẻ nhánh', 'Làm đồng', 'Trổ - chín', 'Thu hoạch'], status: 'active' },
    { id: 'c3', name: 'Xoài cát Hòa Lộc',            category: 'Cây ăn trái',    growthStages: ['Kiến thiết cơ bàn', 'Ra hoa', 'Đậu trái', 'Nuôi trái', 'Thu hoạch'], status: 'active' },
    { id: 'c4', name: 'Dưa hấu ruột đỏ',             category: 'Cây rau màu',    growthStages: ['Làm đất', 'Gieo hạt', 'Cây con', 'Ra hoa đậu trái', 'Thu hoạch'], status: 'active' },
    { id: 'c5', name: 'Ngô lai MHQ-7',               category: 'Cây lương thực', growthStages: ['Làm đất', 'Gieo hạt', 'Cây con', 'Trổ cờ', 'Thu hoạch'], status: 'archived' }
  ],

  farms: [
    { id: 'f1', ownerId: 'u1', name: 'Nông hộ Nguyễn Văn Hùng', area: 3.2,  location: 'ấp Mỹ Phú, xã Mỹ Thành, Cao Lãnh', status: 'active' },
    { id: 'f2', ownerId: 'u2', name: 'Nông hộ Trần Thị Mai',     area: 2.1,  location: 'ấp Tân Lộc, xã Tân Hưng, Tháp Mười', status: 'active' },
    { id: 'f3', ownerId: 'u7', name: 'Nông hộ Bùi Văn Tèo',     area: 1.5,  location: 'ấp Phú Thành, xã Phú Hưng, Cao Lãnh', status: 'active' },
    { id: 'f4', ownerId: 'u8', name: 'Nông hộ Ngô Thị Sen',     area: 2.8,  location: 'ấp Mỹ An, xã Mỹ Thọ, Cao Lãnh',      status: 'active' }
  ],

  fields: [
    { id: 'd1', farmId: 'f1', name: 'Ruộng Bắc (Mảnh 12)', area: 1.2, soilType: 'Đất phù sa',     status: 'active' },
    { id: 'd2', farmId: 'f1', name: 'Ruộng Nam (Mảnh 7)',  area: 2.0, soilType: 'Đất phèn nhẹ',   status: 'active' },
    { id: 'd3', farmId: 'f2', name: 'Ruộng 3 (Mảnh 21)',   area: 2.1, soilType: 'Đất phù sa',     status: 'active' },
    { id: 'd4', farmId: 'f4', name: 'Vườn xoài Bà Đắc',    area: 1.8, soilType: 'Đất đỏ bazan',   status: 'active' }
  ],

  seasons: [
    { id: 's1', fieldId: 'd1', cropId: 'c1', name: 'Đông Xuân 2025-2026', startDate: '2025-11-15', stage: 'Trổ - chín',  status: 'ongoing',  progress: 72, yieldEstimate: '6.5 tấn/ha' },
    { id: 's2', fieldId: 'd2', cropId: 'c2', name: 'Đông Xuân 2025-2026', startDate: '2025-12-01', stage: 'Làm đồng',    status: 'ongoing',  progress: 55, yieldEstimate: '6.0 tấn/ha' },
    { id: 's3', fieldId: 'd3', cropId: 'c1', name: 'Đông Xuân 2025-2026', startDate: '2025-11-20', stage: 'Thu hoạch',   status: 'completed', progress: 100, yieldEstimate: '6.8 tấn/ha' },
    { id: 's4', fieldId: 'd4', cropId: 'c3', name: 'Vụ xoài 2025-2026',   startDate: '2025-09-01', stage: 'Nuôi trái',   status: 'ongoing',  progress: 60, yieldEstimate: '18 tấn/ha' }
  ],

  /* type: note | activity | issue | photo — images là placeholder do ui.placeholder() sinh */
  fieldLogs: [
    { id: 'l1',  seasonId: 's1', fieldId: 'd1', date: '2026-09-28', type: 'activity', title: 'Bón thúc đợt 2 (NPK 16-16-8)', note: 'Bón lúc trời mát, lượng 150kg/ha. Cây hồi xanh tốt sau 3 ngày.', issueType: null,      images: ['Bon-phan-dot-2'] },
    { id: 'l2',  seasonId: 's1', fieldId: 'd1', date: '2026-10-02', type: 'issue',      title: 'Đốm lá xuất hiện trên phiến lá dưới', note: 'Quan sát thấy đốm nâu nhỏ ở lá dưới gần gốc, khoảng 5% diện tích. Lo ngại bệnh đạo ôn.', issueType: 'sâu bệnh', images: ['Dom-la-dao-on'] },
    { id: 'l3',  seasonId: 's1', fieldId: 'd1', date: '2026-10-03', type: 'activity', title: 'Phun phòng đạo ôn (Anvil 5SC)', note: 'Phun toàn bộ diện tích theo khuyến cáo 0.3 lít/ha.', issueType: null, images: [] },
    { id: 'l4',  seasonId: 's1', fieldId: 'd1', date: '2026-10-10', type: 'note',       title: 'Mực nước ruộng ổn định', note: 'Duy trì ngập nông 3-5cm, không để ruộng khô căng.', issueType: null, images: [] },
    { id: 'l5',  seasonId: 's2', fieldId: 'd2', date: '2026-10-01', type: 'activity',   title: 'Sạ lại đợt bổ sung', note: 'Sạ bổ sung khoảng 8% diện tích bị chết mạ.', issueType: null, images: ['Sa-bo-sung'] },
    { id: 'l6',  seasonId: 's2', fieldId: 'd2', date: '2026-10-09', type: 'issue',      title: 'Rầy nâu bùng phát', note: 'Mật độ rầy nâu cao ở chân ruộng, đã có đốm cháy lá. Cần xử lý gấp.', issueType: 'sâu bệnh', images: ['Ray-nau'] },
    { id: 'l7',  seasonId: 's3', fieldId: 'd3', date: '2026-03-02', type: 'activity',   title: 'Thu hoạch xong 90% diện tích', note: 'Năng suất ước đạt 6.8 tấn/ha, thương lái thu tại ruộng.', issueType: null, images: ['Thu-hoach-lua'] },
    { id: 'l8',  seasonId: 's4', fieldId: 'd4', date: '2026-10-05', type: 'issue',      title: 'Bọ trĩ hại lá non xoài', note: 'Bọ trĩ tấn công đọt non, lá quăn. Đã phun thuốc sinh học Neem.', issueType: 'sâu bệnh', images: ['Bo-tri-xoai'] },
    { id: 'l9',  seasonId: 's4', fieldId: 'd4', date: '2026-10-12', type: 'note',       title: 'Tỉa cành tạo tán', note: 'Tỉa cành chen chúc, vệ sinh vườn đầu mùa mưa.', issueType: null, images: [] },
    { id: 'l10', seasonId: 's1', fieldId: 'd1', date: '2026-10-14', type: 'note',       title: 'Cửa nước tuần 3', note: 'Tháo nước riêng 2 ngày rồi cấp lại nước mới.', issueType: null, images: [] }
  ],

  helpRequests: [
    { id: 'r1', farmerId: 'u1', fieldId: 'd1', seasonId: 's1', title: 'Đốm lá lan nhanh sau trổ', description: 'Ruộng Bắc xuất hiện đốm nâu lan từ lá dưới lên, khoảng 15% diện tích sau 5 ngày. Cây đang trổ - chín. Tôi đã phun Anvil nhưng chưa đỡ. Nhờ chuyên gia chỉ cách xử lý.', aiClassification: { category: 'sâu bệnh', confidence: 0.87, why: 'Mô tả triệu chứng đốm lan trên lá trưởng thành khớp mẫu bệnh đạo ôn cổ bông.' }, status: 'pending',  priority: 'high',   createdAt: '2026-10-15', assignedExpertId: null, response: null },
    { id: 'r2', farmerId: 'u1', fieldId: 'd2', seasonId: 's2', title: 'Lá vàng chân sau bón phân', description: 'Ruộng Nam lá vàng ở chân ruộng sau khi bón NPK 1 tuần. Liệu có phải thiếu sắt, kẽm không?', aiClassification: { category: 'dinh dưỡng', confidence: 0.74, why: 'Triệu chứng vàng lá sau bón phân gợi ý nhiễm độc hữu cơ / thiếu vi lượng.' }, status: 'assigned', priority: 'medium', createdAt: '2026-10-12', assignedExpertId: 'u3', response: null },
    { id: 'r3', farmerId: 'u2', fieldId: 'd3', seasonId: 's3', title: 'Lịch xả nước trước thu hoạch', description: 'Ruộng 3 sắp thu hoạch, xin hỏi lịch ngừng nước chuẩn để đạt độ ẩm tốt cho máy gặt.', aiClassification: { category: 'tưới tiêu', confidence: 0.81, why: 'Câu hỏi về lịch cấp/ngừng nước cuối vụ.' }, status: 'resolved', priority: 'low',    createdAt: '2026-03-01', assignedExpertId: 'u4', response: { expertId: 'u4', message: 'Ngừng nước hoàn toàn 7-10 ngày trước thu hoạch, tháo riêng 3 ngày rồi để ráo tự nhiên. Độ ẩm đất ở 70-75% là máy gặt chạy tốt.', resourceIds: ['res2'], respondedAt: '2026-03-02' } },
    { id: 'r4', farmerId: 'u8', fieldId: 'd4', seasonId: 's4', title: 'Xoài rụng trái non hàng loạt', description: 'Vườn xoài đang nuôi trái bị rụng non khoảng 20% trái. Giai đoạn trái bằng ngón tay. Do thiếu nước hay sâu bệnh?', aiClassification: { category: 'sâu bệnh', confidence: 0.52, why: 'Rụng trái non có thể do nhiều nguyên nhân (sâu đục trái, thiếu nước, nấm hồng) — độ tin cậy thấp.' }, status: 'pending',  priority: 'high',   createdAt: '2026-10-18', assignedExpertId: null, response: null },
    { id: 'r5', farmerId: 'u7', fieldId: 'd1', seasonId: 's1', title: 'Phèn hoạt hóa sau mưa lớn', description: 'Sau đợt mưa kéo dài ruộng bị ngập úng, đất chua bốc mùi. Cần biện pháp cải tạo nhanh.', aiClassification: { category: 'đất', confidence: 0.78, why: 'Mô tả đất chua, ngập úng sau mưa là dấu hiệu phèn hoạt hóa.' }, status: 'cancelled', priority: 'medium', createdAt: '2026-09-25', assignedExpertId: null, response: null },
    { id: 'r6', farmerId: 'u1', fieldId: 'd1', seasonId: 's1', title: 'Kết luận vụ mùa', description: 'Xin nhận xét tổng quát về tình hình vụ Đông Xuân của ruộng Bắc trước khi tổng kết.', aiClassification: { category: 'khác', confidence: 0.6, why: 'Yêu cầu tổng quát, không có triệu chứng cụ thể.' }, status: 'rejected', priority: 'low', createdAt: '2026-10-05', assignedExpertId: 'u3', response: { expertId: 'u3', message: 'Yêu cầu chưa đủ thông tin ảnh hiện trường. Anh vui lòng bổ sung ảnh giai đoạn trổ và nhật ký phun thuốc gần nhất.', resourceIds: [], respondedAt: '2026-10-06' } }
  ],

  resources: [
    { id: 'res1', title: 'Sổ tay nhận diện bệnh đạo ôn trên lúa', type: 'Bài viết', cropId: 'c1', topic: 'Sâu bệnh',    description: 'Hình ảnh và dấu hiệu nhận biết đạo ôn cổ bông, lá, thân đen; ngưỡng phun phòng.', url: '#', status: 'active', updatedAt: '2026-08-11' },
    { id: 'res2', title: 'Quy trình thâm canh lúa cải tiến (AWD)',    type: 'Hướng dẫn', cropId: 'c1', topic: 'Tưới tiêu', description: 'Kỹ thuật tưới ngập - khô xen kẽ tiết kiệm 30% nước, áp dụng từ giai đoạn đẻ nhánh.', url: '#', status: 'active', updatedAt: '2026-07-02' },
    { id: 'res3', title: 'Video: Kỹ thuật phun thuốc an toàn',        type: 'Video',    cropId: null, topic: 'An toàn thuốc BVTV', description: 'Cách pha, liều lượng, bảo hộ lao động và thời điểm phun phù hợp.', url: '#', status: 'active', updatedAt: '2026-05-19' },
    { id: 'res4', title: 'Dinh dưỡng cân đối cho xoài giai đoạn nuôi trái', type: 'Bài viết', cropId: 'c3', topic: 'Dinh dưỡng', description: 'Công thức NPK + vi lượng Bo, Kẽm giúp giảm rụng trái non.', url: '#', status: 'active', updatedAt: '2026-09-08' },
    { id: 'res5', title: 'Xử lý đất phèn trước vụ mới',               type: 'Hướng dẫn', cropId: 'c2', topic: 'Đất',      description: 'Rả vôi, lên liếp, thoát nước - bộ ba biện pháp giảm phèn hoạt hóa.', url: '#', status: 'active', updatedAt: '2026-04-14' },
    { id: 'res6', title: 'Dự báo thời tiết và lịch phòng bệnh',       type: 'Bài viết', cropId: null, topic: 'Thời tiết', description: 'Cách đọc dự báo để chủ động phòng bệnh theo diễn biến thời tiết.', url: '#', status: 'archived', updatedAt: '2025-12-20' }
  ],

  events: [
    { id: 'e1', title: 'Tập huấn kỹ thuật AWD',            date: '2026-10-22', time: '08:00', location: 'Nhà văn hóa ấp Mỹ Phú', organizer: 'HTX Phú Hưng', relatedFarmId: 'f1', note: 'Mang theo sổ ghi chép mùa vụ.', status: 'scheduled' },
    { id: 'e2', title: 'Thu mua lúa tươi đợt 1',           date: '2026-10-28', time: '06:30', location: 'Ruộng Bắc - nông hộ Hùng', organizer: 'HTX Phú Hưng', relatedFarmId: 'f1', note: 'Độ ẩm ≤ 26%.', status: 'scheduled' },
    { id: 'e3', title: 'Đợt phun phòng rầy nâu toàn HTX',  date: '2026-11-02', time: '05:30', location: 'Các ruộng Hè Thu khu vực Tân Hưng', organizer: 'Ban kỹ thuật HTX', relatedFarmId: 'f2', note: '', status: 'scheduled' },
    { id: 'e4', title: 'Kiểm tra vườn xoài xuất khẩu',     date: '2026-10-19', time: '09:00', location: 'Vườn xoài Bà Đắc', organizer: 'Chi cục BVTV', relatedFarmId: 'f4', note: 'Chuẩn bị sổ theo dõi.', status: 'completed' },
    { id: 'e5', title: 'Họp tổng kết vụ Đông Xuân',        date: '2026-11-15', time: '14:00', location: 'Trụ sở HTX', organizer: 'Ban quản lý HTX', relatedFarmId: null, note: 'Mỗi nông hộ mang báo cáo mùa vụ.', status: 'scheduled' }
  ],

  notifications: [
    { id: 'n1', userId: 'u1', title: 'Yêu cầu #r2 đã được chuyên gia nhận', body: 'TS. Lê Quốc Bảo sẽ phản hồi trong 24h.', type: 'helpRequest', read: false, createdAt: '2026-10-12' },
    { id: 'n2', userId: 'u1', title: 'Nhắc lịch: Thu mua lúa 28/10', body: 'Ruộng Bắc dự kiến thu hoạch trước 2 ngày.', type: 'event', read: false, createdAt: '2026-10-16' },
    { id: 'n3', userId: 'u1', title: 'Checklist giai đoạn Trổ - chín đã cập nhật', body: 'AI-2 đề xuất thêm bước phòng đạo ôn cổ bông.', type: 'ai', read: true, createdAt: '2026-10-10' },
    { id: 'n4', userId: 'u3', title: 'Yêu cầu mới từ Ngô Thị Sen', body: 'Xoài rụng trái non - mức ưu tiên cao.', type: 'helpRequest', read: false, createdAt: '2026-10-18' },
    { id: 'n5', userId: 'u3', title: 'Báo cáo AI sẵn sàng', body: 'Tóm tắt mùa vụ #r1 đã tạo, xem tại trang chi tiết.', type: 'ai', read: true, createdAt: '2026-10-15' },
    { id: 'n6', userId: 'u5', title: '2 sự kiện tuần này của HTX', body: 'Tập huấn AWD (22/10) và thu mua lúa (28/10).', type: 'event', read: false, createdAt: '2026-10-17' },
    { id: 'n7', userId: 'u6', title: 'Tài khoản mới chờ duyệt', body: 'sen.ngo@gmail.com vừa đăng ký vai trò Nông dân.', type: 'system', read: false, createdAt: '2026-02-05' },
    { id: 'n8', userId: 'u6', title: 'Báo cáo AI-usage cần cập nhật', body: 'Nhắc nhóm cập nhật docs/ai-usage-report.md.', type: 'system', read: true, createdAt: '2026-10-01' }
  ]
};
