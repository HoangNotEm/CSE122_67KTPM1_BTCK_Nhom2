# Kịch bản quay OBS – SV2 (Chuyên gia & tài khoản)

Quy ước tên video: `SV2-01-expert-request-queue.mp4`, `SV2-02-expert-request-detail.mp4`…
Mỗi video 60–120 giây, quay 1280×720 hoặc 1920×1080, bật micro và giới thiệu ngắn màn hình.

| # | Màn hình | Luồng thao tác | Trạng thái/điểm cần nhấn |
|---:|---|---|---|
| 1 | `pages/expert-request-queue.html` | Lọc theo ưu tiên + phân loại AI → "Nhận xử lý" một yêu cầu | Thống kê thay đổi, trạng thái chuyển sang Đang xử lý, tìm kiếm không có kết quả → trạng thái rỗng |
| 2 | `pages/expert-request-detail.html` | Mở yêu cầu → chạy AI-3 tóm tắt nhật ký → soạn phản hồi + gắn tài nguyên → gửi | AI-3: đang xử lý → tóm tắt + lý do; thử "Lỗi mạng" → Dùng thủ công; toast gửi thành công |
| 3 | `pages/expert-resource-library.html` | Thêm tài nguyên mới → sửa → xóa (có xác nhận) | Validation, modal xác nhận, lọc theo cây trồng/định dạng |
| 4 | `pages/forgot-password.html` | Nhập email sai → sửa → gửi | Lỗi email, trạng thái gửi thành công (giả lập) |
| 5 | `pages/profile.html` | Sửa họ tên/số điện thoại → lưu; đổi mật khẩu | Validation, toast, dữ liệu giữ sau khi tải lại trang |
| 6 | `pages/settings.html` | Bật/tắt thông báo, đổi cỡ chữ, bật giảm chuyển động | Hiệu ứng áp dụng ngay; nút Reset dữ liệu mẫu có xác nhận |

Trước khi quay: đăng nhập `expert@cropmate.dev`, **Cài đặt → Reset dữ liệu mẫu** để hàng đợi có đủ trạng thái. Video AI-3 nên mở từ một yêu cầu có nhiều nhật ký (ví dụ yêu cầu của Ruộng Bắc) để phần tóm tắt rõ ý.
