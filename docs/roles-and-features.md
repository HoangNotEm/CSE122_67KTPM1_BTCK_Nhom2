# Vai trò & tính năng – CropMate AI

## 1. Nông dân (Farmer)
**Trách nhiệm:** Quản lý mùa vụ và yêu cầu hỗ trợ.
- `farmer-season-dashboard.html`: tiến độ giai đoạn mùa vụ, task sắp tới, thống kê nhanh; **AI-2 Season Checklist Generator** (chọn cây trồng + giai đoạn → checklist công việc kèm giải thích → Chấp nhận/Sửa/Từ chối/Tạo lại/Lưu).
- `farmer-field-log.html`: CRUD nhật ký đồng ruộng (C/R/U, xóa = đánh dấu xóa), gắn mùa vụ/đồng ruộng, upload ảnh hiện trường, tab Thư viện ảnh, tìm kiếm/lọc.
- `farmer-help-request.html`: CRUD yêu cầu hỗ trợ (hủy thay xóa), **AI-1 Field Issue Classifier** (mô tả/ảnh → phân loại sâu bệnh/dinh dưỡng/tưới tiêu/đất/thời tiết + độ tin cậy + giải thích → người dùng kiểm soát), theo dõi trạng thái: Đang chờ → Đang xử lý → Đã tư vấn / Bị từ chối / Đã hủy.

## 2. Chuyên gia nông nghiệp (Expert)
**Trách nhiệm:** Review vấn đề và cung cấp tài nguyên.
- `expert-request-queue.html`: hàng đợi yêu cầu, lọc theo mức độ ưu tiên/trạng thái/cây trồng, nhận xử lý.
- `expert-request-detail.html`: xem mô tả + ảnh hiện trường + lịch sử mùa vụ; **AI-3 Farm Log Summarizer** (tóm tắt diễn biến mùa vụ từ fieldLogs → gợi ý hướng xử lý); soạn phản hồi, gắn tài nguyên từ thư viện, đóng yêu cầu.
- `expert-resource-library.html`: CRUD tài nguyên (bài viết/video/hướng dẫn), lọc theo cây trồng/chủ đề/định dạng.

## 3. Điều phối HTX (Coordinator)
**Trách nhiệm:** Theo dõi nông hộ và hoạt động.
- `coordinator-farm-overview.html`: danh sách nông hộ (cards/bảng), tìm kiếm, lọc theo trạng thái mùa vụ, hoạt động gần đây của HTX.
- `coordinator-calendar.html`: lịch công việc HTX (chế độ tuần/tháng), CRUD sự kiện (hợp tác xã, kỹ thuật, thu mua), gắn nông hộ liên quan.
- `coordinator-season-summary.html`: báo cáo tổng kết mùa vụ theo nông hộ (chỉ tiêu: diện tích, năng suất ước tính, tỷ lệ hoàn thành công việc), chỉnh sửa ghi chú, xuất CSV (giả lập), lưu trữ báo cáo.

## 4. Quản trị viên (Admin)
**Trách nhiệm:** Quản lý danh mục và tài khoản.
- `admin-dashboard.html`: thống kê hệ thống (tổng tài khoản theo vai trò, yêu cầu hỗ trợ theo trạng thái, hoạt động gần đây, danh mục cây trồng).
- `admin-crop-management.html`: CRUD danh mục cây trồng + giai đoạn sinh trưởng, vô hiệu hóa/lưu trữ mục.
- `admin-user-management.html`: CRUD tài khoản, phân vai trò, khóa/mở khóa (thay xóa khi có dữ liệu nghiệp vụ), tìm kiếm/lọc/phân trang.

## 5. Tính năng AI (mô phỏng Frontend)

| Mã | Tên | Trang | Cách mô phỏng | Trạng thái thất bại |
|---|---|---|---|---|
| AI-1 | Field Issue Classifier | `farmer-help-request.html` | Rule-based: từ khóa trong mô tả → nhóm vấn đề + độ tin cậy giả lập | Mô tả quá ngắn → "Không đủ dữ liệu"; độ tin cậy < 60% → "Chưa chắc chắn"; nút Thử lại giả lập lỗi mạng |
| AI-2 | Season Checklist Generator | `farmer-season-dashboard.html` | Template + rule theo cây trồng/giai đoạn từ danh mục `crops` | Cây trồng/giai đoạn thiếu dữ liệu → "Không đủ dữ liệu"; tạo lại trả bộ khác |
| AI-3 | Farm Log Summarizer | `expert-request-detail.html` | Gộp/tóm tắt fieldLogs của nông dân theo giai đoạn, đếm sự kiện bất thường | Mùa vụ chưa có nhật ký → "Không đủ dữ liệu"; cho phép Dùng thủ công |

Chu trình bắt buộc của cả 3: **Nhập → Kiểm tra hợp lệ → Đang xử lý → Kết quả + Giải thích → Chấp nhận/Sửa/Từ chối/Tạo lại → Lưu vào ứng dụng**. Kết quả AI phải ghi vào trạng thái ứng dụng (lưu phân loại vào yêu cầu, lưu checklist vào mùa vụ, lưu tóm tắt vào phiên tư vấn).
