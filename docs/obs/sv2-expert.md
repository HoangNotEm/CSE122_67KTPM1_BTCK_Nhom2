# Kịch bản quay OBS – SV2 (Chuyên gia & tài khoản)

**6 video**, mỗi video 60–120 giây, quay 1280×720 hoặc 1920×1080, bật webcam + micro.
Tên tệp khớp cột "Video OBS" trong [`../screen-inventory.md`](../screen-inventory.md):
`SV2-01-expert-request-queue.mp4`, `SV2-02-expert-request-detail.mp4`, `SV2-03-expert-resource-library.mp4`,
`SV2-04-forgot-password.mp4`, `SV2-05-profile.mp4`, `SV2-06-settings.mp4`.

## Chuẩn bị trước khi quay

- Đăng nhập `expert@cropmate.dev`; **Cài đặt → Reset dữ liệu mẫu** để hàng đợi đủ trạng thái.
- Mở sẵn 4 cửa sổ: trình duyệt, Figma (đúng mockup), VS Code (đúng 3 tệp HTML/CSS/JS), Git Bash tại thư mục repo.
- Video AI-3 nên mở yêu cầu có nhiều nhật ký (ví dụ yêu cầu của Ruộng Bắc) để phần tóm tắt rõ ý.
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
| 7 | `git add` → `git commit` → `git push` trên nhánh `feature/expert-screens` | Commit hash trên terminal/GitHub |
| 8 | Nói rõ **Task ID – nhánh – commit**, kết thúc video | Khớp thẻ Trello |

## Kịch bản từng màn hình

| # | Tệp video | Màn hình | Luồng thao tác | Trạng thái/điểm cần nhấn | Gợi ý sửa code trực tiếp |
|---:|---|---|---|---|---|
| 1 | `SV2-01-expert-request-queue.mp4` | `pages/expert-request-queue.html` | Lọc theo ưu tiên + phân loại AI → "Nhận xử lý" một yêu cầu | Thống kê thay đổi, trạng thái chuyển sang Đang xử lý, tìm kiếm không có kết quả → trạng thái rỗng | Đổi nhãn nút nhận xử lý hoặc thêm một mức ưu tiên vào bộ lọc |
| 2 | `SV2-02-expert-request-detail.mp4` | `pages/expert-request-detail.html` | Mở yêu cầu → chạy AI-3 → sửa tóm tắt → lưu → tải lại trang → soạn phản hồi + gắn tài nguyên → gửi | AI-3: đang xử lý → tóm tắt + lý do; sửa được; **tóm tắt vẫn còn sau reload**; "Lỗi mạng" → Dùng thủ công; toast gửi thành công | Đổi tiêu đề khối tóm tắt hoặc câu mô tả "Tóm tắt đã lưu" |
| 3 | `SV2-03-expert-resource-library.mp4` | `pages/expert-resource-library.html` | Thêm tài nguyên mới → sửa → xóa (có xác nhận) | Validation, modal xác nhận, lọc theo cây trồng/định dạng, trạng thái rỗng | Đổi nhãn một loại tài nguyên hoặc câu mô tả trạng thái rỗng |
| 4 | `SV2-04-forgot-password.mp4` | `pages/forgot-password.html` | Nhập email sai → sửa → gửi | Lỗi email; trạng thái đang gửi; gửi thành công (giả lập) | Đổi câu thông báo gửi thành công |
| 5 | `SV2-05-profile.mp4` | `pages/profile.html` | Sửa họ tên/số điện thoại → lưu; đổi mật khẩu | Validation, toast, dữ liệu giữ sau khi tải lại trang | Đổi nhãn nút lưu hoặc thêm `maxlength` cho ô họ tên |
| 6 | `SV2-06-settings.mp4` | `pages/settings.html` | Bật/tắt thông báo, đổi cỡ chữ, bật giảm chuyển động; reset dữ liệu mẫu | Hiệu ứng áp dụng ngay; nút Reset có xác nhận | Đổi nhãn một mục cài đặt hoặc câu mô tả giảm chuyển động |

> Sau mỗi video: dán link Drive/YouTube vào cột "Video OBS" của README và mô tả thẻ Trello TASK-08/10/11/12/22 tương ứng. Không push tệp `.mp4` lên repo.
