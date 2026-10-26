# Bảng kiểm kê màn hình – CropMate AI

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122
> **Trạng thái:** Bản chốt 21 màn hình của nhóm, dùng làm checklist nghiệm thu và đối chiếu video OBS.
> **Cấu trúc bảng:** 12 cột theo yêu cầu BTL-04 (Vai trò → Video OBS). Cột **Video OBS** ghi tên tệp quy ước; sau khi quay, dán link Drive/YouTube vào cột "Video OBS" của `README.md`.
> **Nguyên tắc:** Độ đầy đủ của nghiệp vụ > số lượng giao diện. Danh sách 12 tệp ở mục 8 đề bài là **nền tảng tối thiểu**, không phải mục tiêu.

---

## 1. Phân tích ngữ cảnh → màn hình

| Vấn đề | Vai trò chịu ảnh hưởng | Màn hình giải quyết |
|---|---|---|
| P1. Nhật ký mùa vụ phân tán | Nông dân | `pages/farmer-field-log.html`, `pages/farmer-season-dashboard.html` |
| P2. Khó theo dõi task theo giai đoạn | Nông dân, Điều phối HTX | `pages/farmer-season-dashboard.html` (checklist giai đoạn, AI-2), `pages/coordinator-calendar.html` |
| P3. Ảnh hiện trường không được tổ chức | Nông dân, Chuyên gia | `pages/farmer-field-log.html` (thư viện ảnh theo đồng ruộng/mùa vụ) |
| P4. Chuyên gia thiếu bối cảnh khi tư vấn | Chuyên gia | `pages/expert-request-detail.html` (AI-3 tóm tắt nhật ký, xem ảnh, lịch sử mùa vụ) |

## 2. Hành trình người dùng theo vai trò

```text
KHÁCH: index → register/login → (chuyển vai trò tương ứng)
NÔNG DÂN: dashboard mùa vụ → ghi nhật ký (field-log) → tạo yêu cầu hỗ trợ (AI-1 phân loại)
   → theo dõi trạng thái yêu cầu → nhận phản hồi/thông báo
CHUYÊN GIA: hàng đợi yêu cầu → mở chi tiết (AI-3 tóm tắt nhật ký) → phản hồi + gắn tài nguyên
   → quản lý thư viện tài nguyên
ĐIỀU PHỐI HTX: tổng quan nông hộ → lịch hoạt động HTX → tổng kết/báo cáo mùa vụ
QUẢN TRỊ VIÊN: dashboard hệ thống → danh mục cây trồng → quản lý tài khoản & phân quyền
DÙNG CHUNG: profile, settings, notifications, 403, 404
```

---

## 3. Bảng kiểm kê màn hình (12 cột)

| Vai trò | Mục tiêu người dùng | Nhiệm vụ người dùng | Màn hình | Tệp | CRUD | Trạng thái chính | AI | Người phụ trách | Task ID | Nhánh | Video OBS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Khách | Hiểu sản phẩm, bắt đầu dùng | Xem giới thiệu, chọn đăng nhập/đăng ký | 1. Landing | `index.html` | R | Bình thường; responsive 1024/768/420 | – | SV3 | TASK-08 | `feature/coordinator-admin-screens` | `SV3-01-index.mp4` |
| Khách/Tất cả | Truy cập hệ thống | Đăng nhập (validation, chọn vai trò demo) | 2. Login | `pages/login.html` | R | Validation email/mật khẩu; đang đăng nhập; lỗi; thành công | – | SV1 | TASK-08 | `feature/farmer-screens` | `SV1-01-login.mp4` |
| Khách | Có tài khoản | Đăng ký (validation đầy đủ) | 3. Register | `pages/register.html` | C | Validation required/email/phone/điều khoản; thành công | – | SV1 | TASK-08 | `feature/farmer-screens` | `SV1-02-register.mp4` |
| Khách | Lấy lại mật khẩu | Nhập email, xác nhận gửi link (giả lập) | 4. Forgot password | `pages/forgot-password.html` | R | Email sai; đang gửi; gửi thành công (giả lập) | – | SV2 | TASK-08 | `feature/expert-screens` | `SV2-04-forgot-password.mp4` |
| Tất cả | Quản lý thông tin cá nhân | Xem/sửa hồ sơ, đổi mật khẩu | 5. Profile | `pages/profile.html` | R/U | Xem; sửa; validation; lưu thành công; lỗi | – | SV2 | TASK-22 | `feature/expert-screens` | `SV2-05-profile.mp4` |
| Tất cả | Cá nhân hóa ứng dụng | Bật/tắt thông báo, cỡ chữ, giảm chuyển động, reset dữ liệu mẫu | 6. Settings | `pages/settings.html` | U | Áp dụng tức thì; xác nhận reset; reset thành công | – | SV2 | TASK-22 | `feature/expert-screens` | `SV2-06-settings.mp4` |
| Tất cả | Không bỏ lỡ sự kiện | Xem/danh dấu đã đọc thông báo | 7. Notifications | `pages/notifications.html` | R/U | Chưa đọc/đã đọc; lọc rỗng; đánh dấu tất cả | – | SV1 | TASK-22 | `feature/farmer-screens` | `SV1-03-notifications.mp4` |
| Tất cả | Hiểu lỗi phân quyền | Xem thông báo 403, đổi vai trò/quay lại | 8. Error 403 | `pages/403.html` | R | Lỗi quyền; đổi vai trò thành công | – | SV3 | TASK-22 | `feature/coordinator-admin-screens` | `SV3-02-403.mp4` |
| Tất cả | Xử lý liên kết hỏng | Xem thông báo 404, về trang chủ | 9. Error 404 | `pages/404.html` | R | Lỗi liên kết; liên kết khôi phục | – | SV3 | TASK-22 | `feature/coordinator-admin-screens` | `SV3-03-404.mp4` |
| Nông dân | Nắm tình hình mùa vụ | Xem tiến độ, tạo checklist, xem checklist đã lưu | 10. Season Dashboard | `pages/farmer-season-dashboard.html` | R (AI-2 lưu checklist) | Loading skeleton; rỗng; bình thường; AI-2 xử lý/kết quả/thiếu dữ liệu/không chắc chắn/lỗi mạng; checklist đã lưu/rỗng | **AI-2 Checklist Generator** | SV1 | TASK-05 | `feature/farmer-screens` | `SV1-04-farmer-season-dashboard.mp4` |
| Nông dân | Ghi chép có tổ chức | Tạo/xem/sửa nhật ký, gắn ảnh, lọc theo mùa vụ | 11. Field Log | `pages/farmer-field-log.html` | C/R/U/D (xóa mềm) | Loading; rỗng; bình thường; validation; sửa; xóa mềm; gallery ảnh; lọc không kết quả | – | SV1 | TASK-06 | `feature/farmer-screens` | `SV1-05-farmer-field-log.mp4` |
| Nông dân | Được tư vấn kịp thời | Tạo/xem/sửa/hủy yêu cầu, phân loại tự động | 12. Help Request | `pages/farmer-help-request.html` | C/R/U/D (hủy) | Loading; rỗng; pending/assigned/resolved/rejected/cancelled; AI-1 xử lý/kết quả/độ tin cậy thấp/thiếu dữ liệu/lỗi mạng; form 2 pha | **AI-1 Issue Classifier** | SV1 | TASK-07 | `feature/farmer-screens` | `SV1-06-farmer-help-request.mp4` |
| Chuyên gia | Ưu tiên xử lý đúng | Xem hàng đợi, lọc mức độ/trạng thái, nhận xử lý | 13. Request Queue | `pages/expert-request-queue.html` | R/U (nhận việc) | Loading; rỗng; lọc không kết quả; nhận xử lý thành công; lỗi | – | SV2 | TASK-10 | `feature/expert-screens` | `SV2-01-expert-request-queue.mp4` |
| Chuyên gia | Tư vấn có bối cảnh | Xem chi tiết + ảnh + nhật ký (AI-3), gửi phản hồi, gắn tài nguyên | 14. Request Detail | `pages/expert-request-detail.html` | R/U (phản hồi) | Loading; không tìm thấy; bình thường; AI-3 xử lý/kết quả/đã sửa/đã lưu/thiếu dữ liệu/lỗi mạng; gửi phản hồi; resolved/rejected/cancelled | **AI-3 Log Summarizer** | SV2 | TASK-11 | `feature/expert-screens` | `SV2-02-expert-request-detail.mp4` |
| Chuyên gia | Tái sử dụng kiến thức | Tạo/xem/sửa/xóa mềm tài nguyên, lọc theo cây trồng | 15. Resource Library | `pages/expert-resource-library.html` | C/R/U/D (lưu trữ) | Loading; rỗng; lọc không kết quả; CRUD modal; đã lưu trữ | – | SV2 | TASK-12 | `feature/expert-screens` | `SV2-03-expert-resource-library.mp4` |
| Điều phối HTX | Giám sát nông hộ | Xem danh sách nông hộ, lọc, xem hoạt động gần đây | 16. Farm Overview | `pages/coordinator-farm-overview.html` | R | Loading; rỗng; bình thường; lọc không kết quả; modal chi tiết | – | SV3 | TASK-16 | `feature/coordinator-admin-screens` | `SV3-04-coordinator-farm-overview.mp4` |
| Điều phối HTX | Điều phối công việc | Tạo/xem/sửa/hủy lịch công việc HTX (tuần/tháng) | 17. Calendar | `pages/coordinator-calendar.html` | C/R/U/D (hủy) | Tuần/tháng; lịch rỗng; CRUD; validation; hủy sự kiện | – | SV3 | TASK-17 | `feature/coordinator-admin-screens` | `SV3-05-coordinator-calendar.mp4` |
| Điều phối HTX | Tổng kết mùa vụ | Xem/chỉnh sửa báo cáo, xuất CSV, lưu trữ | 18. Season Summary | `pages/coordinator-season-summary.html` | R/U (lưu trữ) | Loading; rỗng; bình thường; sửa ghi chú; xuất CSV; đã lưu trữ (nút disabled) | – | SV3 | TASK-18 | `feature/coordinator-admin-screens` | `SV3-06-coordinator-season-summary.mp4` |
| Quản trị viên | Giám sát hệ thống | Xem thống kê tài khoản, yêu cầu, hoạt động | 19. Admin Dashboard | `pages/admin-dashboard.html` | R | Loading; bình thường; lỗi | – | SV3 | TASK-19 | `feature/coordinator-admin-screens` | `SV3-07-admin-dashboard.mp4` |
| Quản trị viên | Chuẩn hóa dữ liệu nền | Tạo/xem/sửa danh mục cây trồng/giai đoạn | 20. Crop Management | `pages/admin-crop-management.html` | C/R/U (lưu trữ) | Loading; rỗng; lọc không kết quả; CRUD; vô hiệu hóa/lưu trữ | – | SV3 | TASK-20 | `feature/coordinator-admin-screens` | `SV3-08-admin-crop-management.mp4` |
| Quản trị viên | Kiểm soát truy cập | Tạo/xem/sửa/khóa tài khoản, phân vai trò | 21. User Management | `pages/admin-user-management.html` | C/R/U/D (khóa) | Loading; rỗng; lọc không kết quả; CRUD; khóa/mở khóa; phân trang | – | SV3 | TASK-21 | `feature/coordinator-admin-screens` | `SV3-09-admin-user-management.mp4` |

**Tổng: 21 màn hình** (12 màn hình nền tảng mục 8 đề bài + 9 màn hình dùng chung được phân tích là cần thiết). Phân bổ video: SV1 6, SV2 6, SV3 9 — khớp đúng danh sách màn hình phụ trách.

### Vì sao không cần thêm màn hình nông dân thứ 4?

- Chi tiết một mùa vụ/giai đoạn: hiển thị **trong** `pages/farmer-season-dashboard.html` (mở rộng/collapse từng giai đoạn) thay vì tách trang rỗng.
- Chi tiết một nhật ký + ảnh: **modal chi tiết** trong `pages/farmer-field-log.html`.
- Ảnh hiện trường (P3): thư viện ảnh là một chế độ xem (tab) trong `pages/farmer-field-log.html`, không tách trang.
- Như vậy đủ mô phỏng trọn vẹn luồng nghiệp vụ nông dân từ đầu đến cuối mà không tách chức năng đơn giản thành nhiều trang.

---

## 4. Bao phủ trạng thái theo màn hình

Ký hiệu: ● bắt buộc có, ○ có khi hợp lý, – không cần.

| Màn hình | Bình thường | Đang tải | Rỗng | Thành công | Lỗi | Vô hiệu hóa | Đang chờ | Bị từ chối | Hoàn thành | Đã hủy/Lưu trữ |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| index | ● | – | – | – | – | – | – | – | – | – |
| login/register/forgot | ● | ○ | – | ● | ● (validation) | ● (nút khi form lỗi) | ○ | – | – | – |
| profile/settings | ● | ○ | – | ● | ● | – | – | – | – | – |
| notifications | ● | ○ | ● | ● | ○ | – | – | – | ● (đã đọc) | – |
| farmer-season-dashboard | ● | ● (skeleton) | ● (chưa có mùa vụ) | ● | ● | – | – | – | ● | – |
| farmer-field-log | ● | ● | ● | ● | ● | – | – | – | ● | ● (xóa nhật ký) |
| farmer-help-request | ● | ● | ● | ● | ● | ● (chờ xử lý) | ● | ● (bị từ chối) | ● (đã tư vấn) | ● (đã hủy) |
| expert-request-queue | ● | ● | ● (hàng đợi trống) | ● | ● | – | ● | – | ● | – |
| expert-request-detail | ● | ● | ● | ● | ● | ● (đã đóng) | ● | ● | ● | ● (đóng yêu cầu) |
| expert-resource-library | ● | ● | ● | ● | ● | – | – | – | – | ● (xóa/lưu trữ) |
| coordinator-farm-overview | ● | ● | ● | ● | ● | – | – | – | – | – |
| coordinator-calendar | ● | ● | ● (lịch trống) | ● | ● | – | – | – | ● | ● (hủy sự kiện) |
| coordinator-season-summary | ● | ● | ● | ● | ● | – | – | – | ● | ● (lưu trữ báo cáo) |
| admin-dashboard | ● | ● | – | ● | ● | – | – | – | – | – |
| admin-crop-management | ● | ● | ● | ● | ● | – | – | ● (vô hiệu hóa mục) | – | ● (lưu trữ) |
| admin-user-management | ● | ● | ● | ● | ● | ● (khóa TK) | – | – | – | ● (khóa/xóa) |
| 403/404 | ● | – | – | – | ● | – | – | – | – | – |

### Trạng thái AI bắt buộc (áp dụng cho AI-1, AI-2, AI-3)

```text
NHẬP → KIỂM TRA HỢP LỆ → AI ĐANG XỬ LÝ (skeleton/spinner + tiến độ giả lập)
→ KẾT QUẢ + ĐỘ TIN CẬY + GIẢI THÍCH → CHẤP NHẬN / SỬA / TỪ CHỐI / TẠO LẠI
→ LƯU VÀO ỨNG DỤNG
```

Trạng thái thất bại bắt buộc (mỗi AI feature ≥ 1): "Không đủ dữ liệu để đưa ra đề xuất" (ví dụ mô tả < 20 ký tự hoặc mùa vụ chưa có nhật ký), "AI chưa chắc chắn về kết quả này" (độ tin cậy thấp), "Không thể xử lý yêu cầu lúc này" (mô phỏng lỗi mạng, nút Thử lại). Thao tác kèm theo: Chỉnh sửa / Thử lại / Bỏ qua / Báo cáo / Dùng thủ công.

---

## 5. Mapping CRUD ↔ thực thể ↔ màn hình

| Thực thể | Tạo | Đọc | Sửa | Xóa/Lưu trữ | Màn hình |
|---|:-:|:-:|:-:|:-:|---|
| `farms` | ○ | ● | ○ | Archive | 16, 18 |
| `fields` | ● | ● | ● | Archive | 11, 16 |
| `seasons` | ○ | ● | ○ | Archive | 10, 18 |
| `fieldLogs` | ● | ● | ● | ● | 11 |
| `helpRequests` | ● | ● | ● | Hủy | 12, 13, 14 |
| `resources` | ● | ● | ● | ● | 15, 14 |
| `users` | ● | ● | ● | Khóa | 19, 21 |
| `crops` (danh mục) | ● | ● | ● | Archive | 20 |
| `events` (lịch HTX) | ● | ● | ● | Hủy | 17 |

Dữ liệu: module `js/data.js` (seed) + LocalStorage qua `js/api.js` (giả lập độ trễ để hiển thị trạng thái đang tải). Không cần máy chủ.

---

## 6. Checklist DONE cho từng màn hình

- [x] HTML ngữ nghĩa (header/nav/main/section/table/form) — đã rà 21 trang
- [x] CSS hoàn chỉnh theo design system dùng chung
- [x] Responsive desktop + tablet/mobile (breakpoint 1024/768/420)
- [x] ≥ 1 tương tác JavaScript có ý nghĩa
- [x] Validation mọi biểu mẫu
- [x] Dữ liệu từ mock module (không hard-code rải rác)
- [x] Trạng thái rỗng; đang tải/lỗi khi hợp lý
- [x] Khả năng tiếp cận cơ bản (label, alt, aria, tương phản)
- [ ] Bản mô phỏng Figma/Canva được giảng viên duyệt
- [ ] PR được review chéo → merge `dev` → test tích hợp → `main`
- [ ] Video OBS (có mặt SV, đúng quy tắc đặt tên) — đã có kịch bản tại `docs/obs/`
- [x] Bảng này + README được cập nhật

> Ba mục còn trống phụ thuộc thao tác bên ngoài repo: giảng viên duyệt mockup, PR của 3 thành viên và quay OBS. Không đánh dấu hoàn thành khi chưa có minh chứng.
