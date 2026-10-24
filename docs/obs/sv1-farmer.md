# Kịch bản quay OBS – SV1 (Nông dân & giao diện dùng chung)

Quy ước tên video: `SV1-01-farmer-season-dashboard.mp4`, `SV1-02-farmer-field-log.mp4`…
Mỗi video 60–120 giây, quay 1280×720 hoặc 1920×1080, bật micro và nói rõ màn hình đang kiểm thử.

| # | Màn hình | Luồng thao tác | Trạng thái/điểm cần nhấn |
|---:|---|---|---|
| 1 | `pages/login.html` | Chọn tài khoản demo Nông dân → Đăng nhập | Bỏ trống email để thấy lỗi validation; đăng nhập thành công vào dashboard |
| 2 | `pages/register.html` | Submit form thiếu → sửa → submit lại | Lỗi required/email/phone/số điện thoại; toast đăng ký thành công |
| 3 | `pages/notifications.html` | Lọc "Chưa đọc" → đánh dấu đã đọc từng thông báo | Badge số chưa đọc giảm; trạng thái rỗng khi đã đọc hết |
| 4 | `pages/farmer-season-dashboard.html` | Chọn cây trồng + giai đoạn → "Tạo checklist bằng AI" | AI-2: đang xử lý → kết quả kèm lý do → Chấp nhận/Sửa/Từ chối; thử "Lỗi mạng" → Thử lại/Dùng thủ công |
| 5 | `pages/farmer-field-log.html` | Thêm nhật ký kèm ảnh → lưu; mở tab Thư viện ảnh | Validation, toast thành công, ảnh gắn đúng mùa vụ/đồng ruộng, bộ lọc theo mùa vụ |
| 6 | `pages/farmer-help-request.html` | Tạo yêu cầu (mô tả ≥ 20 ký tự) → chạy AI-1 | Phân loại + độ tin cậy + giải thích; thử "Thiếu dữ liệu" → Dùng thủ công; hủy yêu cầu |

Trước khi quay: **Cài đặt → Reset dữ liệu mẫu**, đóng bớt tab, ẩn bookmark bar. Nếu quay 6 video, đổi tên theo đúng mẫu trên để điền vào cột "Video OBS" trong README.
