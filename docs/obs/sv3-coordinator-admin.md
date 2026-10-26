# Kịch bản quay OBS – SV3 (Điều phối HTX, Quản trị & hệ thống)

**9 video**, mỗi video 60–120 giây, quay 1280×720 hoặc 1920×1080, bật webcam + micro.
Tên tệp khớp cột "Video OBS" trong [`../screen-inventory.md`](../screen-inventory.md):
`SV3-01-index.mp4`, `SV3-02-403.mp4`, `SV3-03-404.mp4`, `SV3-04-coordinator-farm-overview.mp4`,
`SV3-05-coordinator-calendar.mp4`, `SV3-06-coordinator-season-summary.mp4`,
`SV3-07-admin-dashboard.mp4`, `SV3-08-admin-crop-management.mp4`, `SV3-09-admin-user-management.mp4`.

## Chuẩn bị trước khi quay

- **Cài đặt → Reset dữ liệu mẫu**; đóng bớt tab, ẩn bookmark bar, zoom trình duyệt 100%.
- Mở sẵn 4 cửa sổ: trình duyệt, Figma (đúng mockup), VS Code (đúng 3 tệp HTML/CSS/JS), Git Bash tại thư mục repo.
- Với video 403: đăng nhập Nông dân trước rồi dán URL `pages/expert-request-queue.html` để xuất hiện đúng luồng phân quyền.
- Mỗi video phải có **mặt sinh viên + giọng nói**, không quay màn hình câm.

## 8 bước bắt buộc trong mỗi video

| Bước | Thực hiện | Minh chứng thấy trên video |
|---:|---|---|
| 1 | Bật webcam, chào và nói: họ tên, màn hình, **Task ID** | Mặt SV + lời giới thiệu |
| 2 | Chuyển sang Figma, mở đúng mockup của màn hình | Ảnh mockup desktop/mobile khớp giao diện |
| 3 | Mở file HTML, CSS, JS trong VS Code; giải thích bố cục và logic chính | Đúng 3 tệp, không mở nhầm |
| 4 | **Chỉnh sửa code trực tiếp** (xem gợi ý từng màn hình bên dưới) | Có thay đổi thật, lưu tệp |
| 5 | Tải lại trang, chạy tương tác chính + 1 trạng thái rỗng/lỗi | Toast/kết quả/empty state |
| 6 | Mở DevTools → 420px, kiểm tra menu drawer và bảng chuyển card | Giao diện mobile |
| 7 | `git add` → `git commit` → `git push` trên nhánh `feature/coordinator-admin-screens` | Commit hash trên terminal/GitHub |
| 8 | Nói rõ **Task ID – nhánh – commit**, kết thúc video | Khớp thẻ Trello |

## Kịch bản từng màn hình

| # | Tệp video | Màn hình | Luồng thao tác | Trạng thái/điểm cần nhấn | Gợi ý sửa code trực tiếp |
|---:|---|---|---|---|---|
| 1 | `SV3-01-index.mp4` | `index.html` | Cuộn landing → bấm "Xem bản demo" | Điều hướng sang `pages/login.html`, bố cục responsive | Đổi một tiêu đề khối tính năng hoặc nhãn nút CTA |
| 2 | `SV3-02-403.mp4` | `pages/403.html` | Đang là Nông dân, mở trang Chuyên gia → bấm "Đổi vai trò ngay" | Thông báo đúng vai trò cần, tự chuyển vai trò và quay lại trang đích | Đổi câu mô tả lỗi quyền |
| 3 | `SV3-03-404.mp4` | `pages/404.html` | Mở một URL sai → về trang chủ | Trạng thái lỗi + liên kết khôi phục | Đổi câu thông báo 404 hoặc nhãn nút về trang chủ |
| 4 | `SV3-04-coordinator-farm-overview.mp4` | `pages/coordinator-farm-overview.html` | Tìm/lọc nông hộ → mở chi tiết | Thẻ thống kê, tiến độ mùa vụ, trạng thái rỗng khi lọc không khớp | Đổi nhãn một thẻ thống kê hoặc câu mô tả trạng thái rỗng |
| 5 | `SV3-05-coordinator-calendar.mp4` | `pages/coordinator-calendar.html` | Chuyển tuần/tháng → thêm sự kiện → sửa → hủy | Validation, modal xác nhận, sự kiện hiển thị đúng ngày | Đổi nhãn nút thêm sự kiện hoặc tên một loại sự kiện |
| 6 | `SV3-06-coordinator-season-summary.mp4` | `pages/coordinator-season-summary.html` | Chỉnh ghi chú → xuất CSV → lưu trữ báo cáo | Toast, tệp CSV tải về, nút lưu trữ chuyển disabled | Đổi tiêu đề báo cáo hoặc câu ghi chú mặc định |
| 7 | `SV3-07-admin-dashboard.mp4` | `pages/admin-dashboard.html` | Xem thống kê tài khoản/yêu cầu | Biểu đồ CSS, số liệu khớp dữ liệu mẫu | Đổi tiêu đề một khối biểu đồ hoặc nhãn chú giải |
| 8 | `SV3-08-admin-crop-management.mp4` | `pages/admin-crop-management.html` | Thêm cây trồng + giai đoạn → sửa → lưu trữ | Validation, trạng thái vô hiệu hóa/lưu trữ | Đổi nhãn nút thêm cây trồng hoặc câu mô tả trạng thái rỗng |
| 9 | `SV3-09-admin-user-management.mp4` | `pages/admin-user-management.html` | Tìm tài khoản → đổi vai trò → khóa/mở khóa | Phân trang, badge trạng thái, không cho khóa chính mình | Đổi nhãn một vai trò hoặc số dòng mỗi trang |

> Sau mỗi video: dán link Drive/YouTube vào cột "Video OBS" của README và mô tả thẻ Trello TASK-08/16–21/22/23 tương ứng. Không push tệp `.mp4` lên repo.
