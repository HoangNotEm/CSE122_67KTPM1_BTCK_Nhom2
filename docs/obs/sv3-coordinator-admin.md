# Kịch bản quay OBS – SV3 (Điều phối HTX, Quản trị & hệ thống)

Quy ước tên video: `SV3-01-coordinator-farm-overview.mp4`, `SV3-02-coordinator-calendar.mp4`…
Mỗi video 60–120 giây, quay 1280×720 hoặc 1920×1080, bật micro và nêu rõ màn hình.

| # | Màn hình | Luồng thao tác | Trạng thái/điểm cần nhấn |
|---:|---|---|---|
| 1 | `index.html` | Cuộn landing → bấm "Xem bản demo" | Điều hướng sang `pages/login.html`, bố cục responsive |
| 2 | `pages/403.html` | Đang là Nông dân, mở trang Chuyên gia → bấm "Đổi vai trò ngay" | Thông báo đúng vai trò cần, tự chuyển vai trò và quay lại trang đích |
| 3 | `pages/404.html` | Mở một URL sai → về trang chủ | Trạng thái lỗi + liên kết khôi phục |
| 4 | `pages/coordinator-farm-overview.html` | Tìm/lọc nông hộ → mở chi tiết | Thẻ thống kê, tiến độ mùa vụ, trạng thái rỗng khi lọc không khớp |
| 5 | `pages/coordinator-calendar.html` | Chuyển tuần/tháng → thêm sự kiện → sửa → hủy | Validation, modal xác nhận, sự kiện hiển thị đúng ngày |
| 6 | `pages/coordinator-season-summary.html` | Chỉnh ghi chú → xuất CSV → lưu trữ báo cáo | Toast, tệp CSV tải về, nút lưu trữ chuyển disabled |
| 7 | `pages/admin-dashboard.html` | Xem thống kê tài khoản/yêu cầu | Biểu đồ CSS, số liệu khớp dữ liệu mẫu |
| 8 | `pages/admin-crop-management.html` | Thêm cây trồng + giai đoạn → sửa → lưu trữ | Validation, trạng thái vô hiệu hóa/lưu trữ |
| 9 | `pages/admin-user-management.html` | Tìm tài khoản → đổi vai trò → khóa/mở khóa | Phân trang, badge trạng thái, không cho khóa chính mình |

Trước khi quay: **Cài đặt → Reset dữ liệu mẫu**. Với video 403, hãy đăng nhập Nông dân trước rồi dán URL `pages/expert-request-queue.html` để xuất hiện đúng luồng phân quyền.
