# Bảng kiểm kê màn hình – CropMate AI

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122
> **Trạng thái:** Bản đầy đủ để giảng viên duyệt trước khi triển khai code chính thức.
> **Nguyên tắc:** Độ đầy đủ của nghiệp vụ > số lượng giao diện. Danh sách 12 tệp ở mục 8 đề bài là **nền tảng tối thiểu**, không phải mục tiêu.

---

## 1. Phân tích ngữ cảnh → màn hình

| Vấn đề | Vai trò chịu ảnh hưởng | Màn hình giải quyết |
|---|---|---|
| P1. Nhật ký mùa vụ phân tán | Nông dân | `farmer-field-log.html`, `farmer-season-dashboard.html` |
| P2. Khó theo dõi task theo giai đoạn | Nông dân, Điều phối HTX | `farmer-season-dashboard.html` (checklist giai đoạn, AI-2), `coordinator-calendar.html` |
| P3. Ảnh hiện trường không được tổ chức | Nông dân, Chuyên gia | `farmer-field-log.html` (thư viện ảnh theo đồng ruộng/mùa vụ) |
| P4. Chuyên gia thiếu bối cảnh khi tư vấn | Chuyên gia | `expert-request-detail.html` (AI-3 tóm tắt nhật ký, xem ảnh, lịch sử mùa vụ) |

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

## 3. Bảng kiểm kê màn hình (bắt buộc duyệt)

| # | Vai trò | Mục tiêu người dùng | Nhiệm vụ người dùng | Màn hình | Tệp | CRUD/Trạng thái | AI | Người phụ trách |
|---:|---|---|---|---|---|---|---|---|
| 1 | Khách | Hiểu sản phẩm, bắt đầu dùng | Xem giới thiệu, chọn đăng nhập/đăng ký | Landing | `index.html` | R | – | SV3 |
| 2 | Khách/Tất cả | Truy cập hệ thống | Đăng nhập (validation, chọn vai trò demo) | Login | `login.html` | R | – | SV1 |
| 3 | Khách | Có tài khoản | Đăng ký (validation đầy đủ) | Register | `register.html` | C | – | SV1 |
| 4 | Khách | Lấy lại mật khẩu | Nhập email, xác nhận gửi link (giả lập) | Forgot password | `forgot-password.html` | R | – | SV2 |
| 5 | Tất cả | Quản lý thông tin cá nhân | Xem/sửa hồ sơ, đổi mật khẩu | Profile | `profile.html` | R/U | – | SV2 |
| 6 | Tất cả | Cá nhân hóa ứng dụng | Bật/tắt thông báo, chế độ hiển thị, ngôn ngữ | Settings | `settings.html` | U | – | SV2 |
| 7 | Tất cả | Không bỏ lỡ sự kiện | Xem/danh dấu đã đọc thông báo | Notifications | `notifications.html` | R/U | – | SV1 |
| 8 | Tất cả | Hiểu lỗi phân quyền | Xem thông báo 403, quay lại | Error 403 | `403.html` | R | – | SV3 |
| 9 | Tất cả | Xử lý liên kết hỏng | Xem thông báo 404, tìm kiếm gợi ý | Error 404 | `404.html` | R | – | SV3 |
| 10 | Nông dân | Nắm tình hình mùa vụ | Xem tiến độ giai đoạn, task sắp tới, tạo checklist | Season Dashboard | `farmer-season-dashboard.html` | R | **AI-2 Checklist Generator** | SV1 |
| 11 | Nông dân | Ghi chép có tổ chức | Tạo/xem/sửa nhật ký, gắn ảnh, lọc theo mùa vụ | Field Log | `farmer-field-log.html` | C/R/U | – | SV1 |
| 12 | Nông dân | Được tư vấn kịp thời | Tạo/xem/sửa/hủy yêu cầu, phân loại tự động | Help Request | `farmer-help-request.html` | C/R/U/D (Hủy) | **AI-1 Issue Classifier** | SV1 |
| 13 | Chuyên gia | Ưu tiên xử lý đúng | Xem hàng đợi, lọc mức độ/trạng thái, nhận xử lý | Request Queue | `expert-request-queue.html` | R/U (nhận việc) | – | SV2 |
| 14 | Chuyên gia | Tư vấn có bối cảnh | Xem chi tiết + ảnh + nhật ký (AI-3), gửi phản hồi, gắn tài nguyên | Request Detail | `expert-request-detail.html` | C/R/U | **AI-3 Log Summarizer** | SV2 |
| 15 | Chuyên gia | Tái sử dụng kiến thức | Tạo/xem/sửa/xóa tài nguyên, lọc theo cây trồng | Resource Library | `expert-resource-library.html` | C/R/U/D | – | SV2 |
| 16 | Điều phối HTX | Giám sát nông hộ | Xem danh sách nông hộ, lọc, xem hoạt động gần đây | Farm Overview | `coordinator-farm-overview.html` | R | – | SV3 |
| 17 | Điều phối HTX | Điều phối công việc | Tạo/xem/sửa lịch công việc HTX (tuần/tháng) | Calendar | `coordinator-calendar.html` | C/R/U | – | SV3 |
| 18 | Điều phối HTX | Tổng kết mùa vụ | Xem/chỉnh sửa báo cáo, xuất CSV, đối chiếu chỉ tiêu | Season Summary | `coordinator-season-summary.html` | R/U/D (lưu trữ) | – | SV3 |
| 19 | Quản trị viên | Giám sát hệ thống | Xem thống kê tài khoản, yêu cầu, hoạt động | Admin Dashboard | `admin-dashboard.html` | R | – | SV3 |
| 20 | Quản trị viên | Chuẩn hóa dữ liệu nền | Tạo/xem/sửa danh mục cây trồng/giai đoạn | Crop Management | `admin-crop-management.html` | C/R/U | – | SV3 |
| 21 | Quản trị viên | Kiểm soát truy cập | Tạo/xem/sửa/khóa tài khoản, phân vai trò | User Management | `admin-user-management.html` | C/R/U/D (khóa) | – | SV3 |

**Tổng: 21 màn hình** (12 màn hình nền tảng mục 8 đề bài + 9 màn hình dùng chung được phân tích là cần thiết).

### Vì sao không cần thêm màn hình nông dân thứ 4?

- Chi tiết một mùa vụ/giai đoạn: hiển thị **trong** `farmer-season-dashboard.html` (mở rộng/collapse từng giai đoạn) thay vì tách trang rỗng.
- Chi tiết một nhật ký + ảnh: **modal chi tiết** trong `farmer-field-log.html`.
- Ảnh hiện trường (P3): thư viện ảnh là một chế độ xem (tab) trong `farmer-field-log.html`, không tách trang.
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

## 6. Checklist DONE cho từng màn hình (áp dụng khi triển khai)

- [ ] Bản mô phỏng Figma/Canva được duyệt
- [ ] HTML ngữ nghĩa (header/nav/main/section/table/form)
- [ ] CSS hoàn chỉnh theo design system dùng chung
- [ ] Responsive desktop + tablet/mobile
- [ ] ≥ 1 tương tác JavaScript có ý nghĩa
- [ ] Validation mọi biểu mẫu
- [ ] Dữ liệu từ mock module (không hard-code rải rác)
- [ ] Trạng thái rỗng; đang tải/lỗi khi hợp lý
- [ ] Khả năng tiếp cận cơ bản (label, alt, aria, tương phản)
- [ ] PR được review chéo → merge `dev` → test tích hợp → `main`
- [ ] Video OBS (có mặt SV, đúng quy tắc đặt tên)
- [ ] Bảng này + README được cập nhật
