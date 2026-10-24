# CropMate AI – Nhật ký mùa vụ và trợ lý canh tác

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122
> **Mã nhóm/lớp:** 67KTPM1 – Nhóm 2 *(cập nhật nếu khác)*
> **Loại sản phẩm:** Web Frontend (nguyên mẫu) · 4 vai trò · 21 màn hình · CRUD mô phỏng · 3 trải nghiệm AI · Responsive
> **Ngành:** Nông nghiệp / AgriTech

Sản phẩm giải quyết 4 vấn đề thực tế của nông hộ nhỏ: **P1** nhật ký mùa vụ phân tán · **P2** khó theo dõi công việc theo giai đoạn · **P3** ảnh hiện trường không được tổ chức · **P4** chuyên gia thiếu bối cảnh khi tư vấn.

## Cách chạy
1. Không cần máy chủ: mở `index.html` ở thư mục gốc bằng trình duyệt (khuyến nghị Chrome/Edge), hoặc dùng VS Code → Live Server. Các màn hình ứng dụng nằm trong `pages/`.
2. Đăng nhập bằng tài khoản demo dưới đây (mật khẩu bất kỳ). Có thể **đổi vai trò nhanh** ở menu tài khoản (góc phải trên) để duyệt toàn bộ vai trò.
3. Dữ liệu mẫu tự nạp lần đầu vào LocalStorage; reset tại **Cài đặt → Reset dữ liệu mẫu**.

## Cấu trúc thư mục
```text
project-root/
├── README.md
├── index.html              ← landing page
├── docs/                   ← tài liệu nhóm (đề xuất, kiểm kê màn hình, phân công, Trello…)
├── design/                 ← figma-link.txt + mockups/
├── pages/                  ← 20 màn hình còn lại (login, register, farmer-*, expert-*, coordinator-*, admin-*, 403, 404…)
├── assets/
│   ├── images/             ← ảnh minh hoạ (nếu có)
│   ├── icons/              ← icon rời (nếu có)
│   └── data/               ← dữ liệu mẫu dạng JSON (nếu có)
├── css/
│   ├── style.css           ← design system + layout
│   └── responsive.css      ← breakpoint mobile/tablet
└── js/
    ├── main.js             ← app chrome + phân quyền theo phiên
    ├── api.js              ← CRUD LocalStorage + giả lập độ trễ
    └── modules/
        ├── ui.js           ← toast/modal/validation/…
        └── ai.js           ← 3 tính năng AI rule-based
```
Các trang trong `pages/` trỏ tới `../css/…`, `../js/…` và `../index.html`.

| Vai trò | Email demo | Trang vào |
|---|---|---|
| Nông dân | `farmer@cropmate.dev` | `pages/farmer-season-dashboard.html` |
| Chuyên gia | `expert@cropmate.dev` | `pages/expert-request-queue.html` |
| Điều phối HTX | `coordinator@cropmate.dev` | `pages/coordinator-farm-overview.html` |
| Quản trị viên | `admin@cropmate.dev` | `pages/admin-dashboard.html` |

## Danh mục 21 màn hình (theo bảng kiểm kê đã duyệt)
Chi tiết CRUD/trạng thái/AI từng màn hình xem [`docs/screen-list.md`](docs/screen-list.md). Cột "Video OBS" điền link sau khi quay.

| # | Tệp | Vai trò | AI | Video OBS |
|---:|---|---|---|---|
| 1 | `index.html` | Dùng chung | – | _(điền link)_ |
| 2 | `pages/login.html` | Dùng chung | – | |
| 3 | `pages/register.html` | Dùng chung | – | |
| 4 | `pages/forgot-password.html` | Dùng chung | – | |
| 5 | `pages/profile.html` | Dùng chung | – | |
| 6 | `pages/settings.html` | Dùng chung | – | |
| 7 | `pages/notifications.html` | Dùng chung | – | |
| 8 | `pages/403.html` | Dùng chung | – | |
| 9 | `pages/404.html` | Dùng chung | – | |
| 10 | `pages/farmer-season-dashboard.html` | Nông dân | **AI-2** Checklist Generator | |
| 11 | `pages/farmer-field-log.html` | Nông dân | – | |
| 12 | `pages/farmer-help-request.html` | Nông dân | **AI-1** Issue Classifier | |
| 13 | `pages/expert-request-queue.html` | Chuyên gia | – | |
| 14 | `pages/expert-request-detail.html` | Chuyên gia | **AI-3** Log Summarizer | |
| 15 | `pages/expert-resource-library.html` | Chuyên gia | – | |
| 16 | `pages/coordinator-farm-overview.html` | Điều phối HTX | – | |
| 17 | `pages/coordinator-calendar.html` | Điều phối HTX | – | |
| 18 | `pages/coordinator-season-summary.html` | Điều phối HTX | – | |
| 19 | `pages/admin-dashboard.html` | Quản trị viên | – | |
| 20 | `pages/admin-crop-management.html` | Quản trị viên | – | |
| 21 | `pages/admin-user-management.html` | Quản trị viên | – | |

## 3 trải nghiệm AI (mô phỏng rule-based, có trạng thái thất bại)
Mỗi tính năng đi đủ chu trình **Nhập → Kiểm tra hợp lệ → Đang xử lý → Kết quả + Giải thích → Chấp nhận/Sửa/Từ chối/Tạo lại → Lưu vào ứng dụng**, kèm bộ chọn "Mô phỏng: Thiếu dữ liệu / AI không chắc chắn / Lỗi mạng" để demo trạng thái thất bại (Thử lại / Dùng thủ công).

| Mã | Tính năng | Trang |
|---|---|---|
| AI-1 | Field Issue Classifier – phân loại vấn đề từ mô tả triệu chứng | `pages/farmer-help-request.html` |
| AI-2 | Season Checklist Generator – checklist công việc theo cây trồng/giai đoạn | `pages/farmer-season-dashboard.html` |
| AI-3 | Farm Log Summarizer – tóm tắt diễn biến mùa vụ cho chuyên gia | `pages/expert-request-detail.html` |

## Công nghệ & kiến trúc
- HTML5 ngữ nghĩa + CSS thuần (design system token trong `css/style.css`, responsive trong `css/responsive.css`), **không framework ngoài** — chạy offline qua `file://`.
- JavaScript ES5+/DOM: `js/data.js` (seed), `js/api.js` (CRUD LocalStorage + giả lập độ trễ), `js/modules/ui.js` (toast/modal/validation...), `js/modules/ai.js` (rule-based AI), `js/main.js` (app chrome + phân quyền theo phiên).
- Trạng thái bắt buộc: đang tải (skeleton), rỗng, lỗi + thử lại, thành công (toast), vô hiệu hóa, đang chờ/bị từ chối/hoàn thành/đã hủy theo nghiệp vụ.

## Tài liệu nhóm (`docs/`)
- [`screen-list.md`](docs/screen-list.md) — bảng kiểm kê 21 màn hình + ma trận bao phủ trạng thái + mapping CRUD
- [`project-proposal.md`](docs/project-proposal.md) · [`roles-and-features.md`](docs/roles-and-features.md)
- [`team-assignment.md`](docs/team-assignment.md) — phân công 3 SV + trách nhiệm xuyên suốt
- [`roadmap.md`](docs/roadmap.md) — lộ trình 8 tuần + bảng Trello
- [`git-workflow.md`](docs/git-workflow.md) — chiến lược nhánh + quy ước commit
- [`ai-usage-report.md`](docs/ai-usage-report.md) — khai báo sử dụng AI

## Quy trình Git (rút gọn — xem chi tiết trong `docs/git-workflow.md`)
```text
main ← dev ← feature/<tên-màn-hình> (PR + review chéo + merge)
```
Commit đúng kiểu `feat:/fix:/style:/refactor:/docs:` — cấm `update`, `done`, `final`.

## Minh chứng OBS
Mỗi màn hình 1 video, đặt tên `SV1-01-screen-name.mp4` …; link video điền vào cột "Video OBS" ở bảng trên + Trello.
Kịch bản quay theo từng thành viên: [`docs/obs/sv1-farmer.md`](docs/obs/sv1-farmer.md) · [`docs/obs/sv2-expert.md`](docs/obs/sv2-expert.md) · [`docs/obs/sv3-coordinator-admin.md`](docs/obs/sv3-coordinator-admin.md).
