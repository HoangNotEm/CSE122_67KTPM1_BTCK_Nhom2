# Báo cáo sử dụng AI – CropMate AI

> Nhóm điền dần trong quá trình làm BTL. Cập nhật lần cuối: _(điền ngày)_.

## 1. Công cụ AI đã dùng
| Công cụ | Mục đích |
|---|---|
| Qoder (AI coding assistant) | Khởi tạo khung dự án, design system CSS, mock data, 21 trang HTML/CSS/JS nguyên mẫu |
| _(sinh viên bổ sung: ChatGPT/Claude/Gemini/Copilot…)_ | |

## 2. Câu lệnh (prompt) chính
1. "Đọc file đề BTL-04 CropMate AI và lập bảng kiểm kê màn hình đầy đủ 4 vai trò."
2. "Dựng design system CSS dùng chung (token màu xanh nông nghiệp, header/sidebar, card, table, form, modal, toast) cho prototype mở bằng file://, không dùng ES module."
3. "Viết mock data + API LocalStorage giả lập độ trễ cho các entity farms/fields/seasons/fieldLogs/helpRequests/resources/users/crops."
4. "Triển khai trang farmer-season-dashboard.html với AI-2 Season Checklist Generator đủ chu trình Nhập→Xử lý→Kết quả→Giải thích→Chấp nhận/Sửa/Từ chối/Tạo lại/Lưu, kèm trạng thái thất bại."
5. _(sinh viên bổ sung các prompt khác)_

## 3. Phần AI sinh ra
- Toàn bộ khung ban đầu: cấu trúc thư mục, `css/style.css`, `css/responsive.css`, `js/data.js`, `js/api.js`, `js/main.js`, `js/modules/*`, 21 file HTML.
- Rule-based engine mô phỏng AI-1/AI-2/AI-3 trong `js/modules/ai.js`.

## 4. Phần sinh viên chỉnh sửa / tự viết
- _(ví dụ: chỉnh lại màu theo mockup Figma; viết lại validation số điện thoại Việt Nam; thêm dữ liệu mẫu đúng địa phương)_
- _(bắt buộc ghi rõ để tránh vi phạm quy chế)_

## 5. Lỗi AI gặp phải & cách khắc phục
| Lỗi | Cách khắc phục |
|---|---|
| _(ví dụ: AI sinh ES module không chạy được trên file:// → đổi sang script thường gắn window)_ | |
| _(ví dụ: AI hard-code dữ liệu vào HTML → chuyển hết sang render từ mock API)_ | |

## 6. Cách sinh viên kiểm chứng kết quả AI
- Mở từng trang bằng trình duyệt, kiểm console không lỗi.
- Thử đủ trạng thái: rỗng/đang tải/lỗi/thành công.
- Test validation form, thử bật/tắt LocalStorage.
- _(bổ sung)_

## 7. Điều sinh viên học được
- _(bắt buộc viết, ví dụ: hiểu rõ chu trình UX cho tính năng AI; cách tổ chức token CSS; vì sao không hard-code dữ liệu)_

## 8. Tính năng mock vs API thật
| Tính năng | Loại |
|---|---|
| AI-1 Field Issue Classifier | **Mock** (rule-based từ khóa, độ tin cậy giả lập) |
| AI-2 Season Checklist Generator | **Mock** (template theo danh mục cây trồng/giai đoạn) |
| AI-3 Farm Log Summarizer | **Mock** (gộp nhật ký theo giai đoạn) |
| Đăng nhập/đăng ký | Mock (LocalStorage, không máy chủ) |
| _(nếu tích hợp LLM API thật, ghi vào đây kèm endpoint)_ | |
