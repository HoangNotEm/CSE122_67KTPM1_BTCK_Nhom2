# Đề xuất dự án – CropMate AI

## 1. Tên sản phẩm
**CropMate AI – Nhật ký mùa vụ và trợ lý canh tác** (AgriTech)

## 2. Ngữ cảnh & vấn đề
Nông hộ nhỏ ghi chép rồi rạc (sổ tay, tin nhắn, ảnh lưu rải rác trong điện thoại) nên:
- **P1.** Nhật ký mùa vụ phân tán, khôi phục lịch sử canh tác mất nhiều công sức.
- **P2.** Khó theo dõi công việc theo giai đoạn (làm đất → gieo trồng → chăm sóc → thu hoạch).
- **P3.** Ảnh hiện trường (sâu bệnh, tình trạng cây) không gắn với đồng ruộng/mùa vụ nên khó đối chiếu.
- **P4.** Khi nhờ chuyên gia, chuyên gia thiếu bối cảnh (lịch sử mùa vụ, ảnh, giai đoạn) nên tư vấn chậm và chung chung.

## 3. Giải pháp
Sản phẩm **Frontend nguyên mẫu** (không cần máy chủ) với:
- 4 vai trò: Nông dân, Chuyên gia nông nghiệp, Điều phối HTX, Quản trị viên.
- Nhật ký đồng ruộng gắn với mùa vụ + thư viện ảnh có tổ chức.
- Luồng yêu cầu hỗ trợ: Nông dân tạo → AI phân loại → Chuyên gia xem tóm tắt AI → phản hồi + gắn tài nguyên.
- 3 trải nghiệm AI mô phỏng (rule-based + dữ liệu giả), đủ chu trình Nhập → Xử lý → Kết quả → Giải thích → Người dùng kiểm soát, kèm trạng thái thất bại.
- Dữ liệu: mock module `js/data.js` + LocalStorage (giả lập độ trễ), không hard-code rải rác.

## 4. Mục tiêu (mapping O1–O7 của đề bài)
| Mục tiêu đề bài | Cách thực hiện |
|---|---|
| O1. Hành trình người dùng rõ | §2 hành trình theo vai trò trong `screen-inventory.md` |
| O2. ≥ 3 màn hình/vai trò | 3–6 màn hình/vai trò, tổng 21 (xem `screen-inventory.md`) |
| O3. CRUD/trạng thái có ý nghĩa | Thay Xóa bằng Hủy/Khóa/Lưu trữ khi hợp lý (yêu cầu hỗ trợ, báo cáo, tài khoản) |
| O4. JavaScript/DOM | Tìm kiếm, lọc, validation, modal, tab, toast, render dữ liệu |
| O5. Dữ liệu giả | `js/data.js` + `js/api.js` (LocalStorage, giả lập độ trễ) |
| O6. ≥ 3 trải nghiệm AI | AI-1 Issue Classifier, AI-2 Checklist Generator, AI-3 Log Summarizer |
| O7. Teamwork | GitHub branch/PR + Trello (xem `git-workflow.md`, `roadmap.md`) |

## 5. Phạm vi MVP
Xem mục 21 đề bài. Tất cả mục "BẮT BUỘC PHẢI CÓ" được bao phủ bởi 21 màn hình trong bảng kiểm kê.
