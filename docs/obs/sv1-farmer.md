# Kịch bản quay OBS – SV1 (Nông dân & giao diện dùng chung)

**6 video**, mỗi video 60–120 giây, quay 1280×720 hoặc 1920×1080, bật webcam + micro.
Tên tệp khớp cột "Video OBS" trong [`../screen-inventory.md`](../screen-inventory.md):
`SV1-01-login.mp4`, `SV1-02-register.mp4`, `SV1-03-notifications.mp4`,
`SV1-04-farmer-season-dashboard.mp4`, `SV1-05-farmer-field-log.mp4`, `SV1-06-farmer-help-request.mp4`.

## Chuẩn bị trước khi quay

- **Cài đặt → Reset dữ liệu mẫu**; đóng bớt tab, ẩn bookmark bar, zoom trình duyệt 100%.
- Mở sẵn 4 cửa sổ: trình duyệt (trang cần quay), Figma (đúng mockup), VS Code (đúng 3 tệp HTML/CSS/JS), Git Bash tại thư mục repo.
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
| 7 | `git add` → `git commit` → `git push` trên nhánh `feature/farmer-screens` | Commit hash trên terminal/GitHub |
| 8 | Nói rõ **Task ID – nhánh – commit**, kết thúc video | Khớp thẻ Trello |

## Kịch bản từng màn hình

| # | Tệp video | Màn hình | Luồng thao tác | Trạng thái/điểm cần nhấn | Gợi ý sửa code trực tiếp |
|---:|---|---|---|---|---|
| 1 | `SV1-01-login.mp4` | `pages/login.html` | Chọn tài khoản demo Nông dân → Đăng nhập | Bỏ trống email thấy lỗi validation; đăng nhập thành công vào dashboard | Đổi câu mô tả dưới tiêu đề hoặc placeholder email trong HTML |
| 2 | `SV1-02-register.mp4` | `pages/register.html` | Submit form thiếu → sửa → submit lại | Lỗi required/email/số điện thoại/điều khoản; toast đăng ký thành công | Đổi nhãn nút đăng ký hoặc thêm `minlength` cho ô họ tên |
| 3 | `SV1-03-notifications.mp4` | `pages/notifications.html` | Lọc "Chưa đọc" → đánh dấu đã đọc từng thông báo | Badge số chưa đọc giảm; trạng thái rỗng khi đã đọc hết | Đổi câu mô tả trạng thái rỗng hoặc thêm một mục lọc |
| 4 | `SV1-04-farmer-season-dashboard.mp4` | `pages/farmer-season-dashboard.html` | Chọn cây trồng + giai đoạn → "Tạo checklist bằng AI" → Sửa một dòng → tick chọn → "Chấp nhận & lưu" | AI-2: đang xử lý → kết quả + lý do → Sửa/Từ chối/Tạo lại; thử "Lỗi mạng" → Thử lại/Dùng thủ công; **checklist hiện ở khối "Checklist đã lưu" sau khi lưu và sau khi tải lại** | Đổi tiêu đề khối "Checklist đã lưu" hoặc nhãn nút tạo checklist |
| 5 | `SV1-05-farmer-field-log.mp4` | `pages/farmer-field-log.html` | Thêm nhật ký kèm ảnh → lưu; mở tab Thư viện ảnh; lọc theo mùa vụ | Validation, toast thành công, ảnh gắn đúng mùa vụ/đồng ruộng, lọc không kết quả | Đổi nhãn một loại hoạt động hoặc câu mô tả trạng thái rỗng |
| 6 | `SV1-06-farmer-help-request.mp4` | `pages/farmer-help-request.html` | Tạo yêu cầu (mô tả ≥ 20 ký tự) → chạy AI-1 → chấp nhận phân loại → gửi | Phân loại + độ tin cậy + giải thích; thử "Thiếu dữ liệu" → Dùng thủ công; hủy yêu cầu; trạng thái pending/cancelled | Đổi ngưỡng ký tự tối thiểu hoặc thêm một từ khóa vào gợi ý mô tả |

> Sau mỗi video: dán link Drive/YouTube vào cột "Video OBS" của README và mô tả thẻ Trello TASK-05/06/07/08/22 tương ứng. Không push tệp `.mp4` lên repo.
