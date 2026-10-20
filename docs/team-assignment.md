# Phân công nhóm – CropMate AI (3 sinh viên)

## Nguyên tắc
- Mỗi SV tự hoàn thành ít nhất **1 luồng end-to-end**: Figma → HTML → CSS → JS → dữ liệu → responsive → nhánh Git → commit → PR → OBS.
- Mỗi SV có **1 trách nhiệm xuyên suốt** (tránh ba "website con" rời rạc).
- Có thể chia lại nhưng phải bảo đảm cân bằng khối lượng và mỗi người đều có HTML+CSS+JS+Git+OBS.

## Phân công theo màn hình (21 màn hình)

| Sinh viên | Vai trò chính | Màn hình phụ trách | Số màn hình |
|---|---|---|---:|
| **SV1** | Nông dân | `farmer-season-dashboard`, `farmer-field-log`, `farmer-help-request` (kèm AI-1, AI-2) | 3 |
| | Giao diện dùng chung | `login.html`, `register.html`, `notifications.html` | 3 |
| **SV2** | Chuyên gia nông nghiệp | `expert-request-queue`, `expert-request-detail` (kèm AI-3), `expert-resource-library` | 3 |
| | Tài khoản | `forgot-password.html`, `profile.html`, `settings.html` | 3 |
| **SV3** | Điều phối HTX | `coordinator-farm-overview`, `coordinator-calendar`, `coordinator-season-summary` | 3 |
| | Quản trị viên | `admin-dashboard`, `admin-crop-management`, `admin-user-management` | 3 |
| | Hệ thống | `index.html`, `403.html`, `404.html` + tích hợp toàn dự án | 3 |
| | **Tổng** | | **21** |

## Trách nhiệm chéo xuyên suốt

| Sinh viên | Trách nhiệm xuyên suốt | Minh chứng bắt buộc |
|---|---|---|
| SV1 | **Design system / Điều hướng / Khả năng tiếp cận** | Token màu–typography–spacing trong `css/style.css`; header/sidebar nhất quán; label/alt/aria, tương phản; review a11y trong mọi PR |
| SV2 | **JavaScript / Dữ liệu / Tương tác AI** | `js/data.js`, `js/api.js`, `js/modules/ai.js`; chu trình AI đúng chuẩn; review PR của SV1/SV3 |
| SV3 | **Responsive / Tích hợp / Phát hành / QA** | `css/responsive.css`; merge `dev`, test tích hợp, kiểm tra đa trình duyệt; viết README, đối chiếu bảng kiểm kê |

## Đánh giá chéo PR
- SV1 review PR của SV3, SV2 review PR của SV1, SV3 review PR của SV2 (luân chuyển).
- PR chỉ được merge vào `dev` khi: đúng design system, đủ trạng thái rỗng/đang tải, validation hoạt động, không lỗi console.
