# CropMate AI – Nhật ký mùa vụ và trợ lý canh tác

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122
> **Mã nhóm/lớp:** 67KTPM1 – Nhóm 2
> **Loại sản phẩm:** Web Frontend (nguyên mẫu) · 4 vai trò · 21 màn hình · CRUD mô phỏng · 3 trải nghiệm AI · Responsive
> **Ngành:** Nông nghiệp / AgriTech

Sản phẩm giải quyết 4 vấn đề thực tế của nông hộ nhỏ: **P1** nhật ký mùa vụ phân tán · **P2** khó theo dõi công việc theo giai đoạn · **P3** ảnh hiện trường không được tổ chức · **P4** chuyên gia thiếu bối cảnh khi tư vấn.

## Thông tin nhóm

| Thành viên | Họ tên – MSSV | Vai trò chính | Trách nhiệm xuyên suốt |
|---|---|---|---|
| SV1 | Lương Hoàng Anh – 2551170848 | Nông dân + auth/notifications | Design system, điều hướng, khả năng tiếp cận |
| SV2 | Nguyễn Duy Chinh - 2551170866 | Chuyên gia + tài khoản | JavaScript, dữ liệu giả lập, 3 tính năng AI |
| SV3 | Trần Mạnh Quỳnh - 2551170940 | Điều phối HTX + Quản trị + hệ thống | Responsive, tích hợp, phát hành, QA |

## Bản chạy thử (live demo)

- **GitHub Pages:** <https://hoangnotem.github.io/CSE122_67KTPM1_BTCK_Nhom2/>
- Tự triển khai: đẩy `main` lên GitHub → **Settings → Pages → Build and deployment → Source: GitHub Actions** (workflow `.github/workflows/pages.yml` đã có trong repo). Mỗi lần push `main`, trang được deploy lại tự động.
- Chạy offline: mở `index.html` bằng Chrome/Edge, hoặc VS Code → Live Server. Các màn hình nghiệp vụ nằm trong `pages/`.

Đăng nhập bằng tài khoản demo dưới đây (mật khẩu bất kỳ). Có thể **đổi vai trò nhanh** ở menu tài khoản (góc phải trên) để duyệt toàn bộ vai trò. Dữ liệu mẫu tự nạp lần đầu vào LocalStorage; reset tại **Cài đặt → Reset dữ liệu mẫu**.

| Vai trò | Email demo | Trang vào |
|---|---|---|
| Nông dân | `farmer@cropmate.dev` | `pages/farmer-season-dashboard.html` |
| Chuyên gia | `expert@cropmate.dev` | `pages/expert-request-queue.html` |
| Điều phối HTX | `coordinator@cropmate.dev` | `pages/coordinator-farm-overview.html` |
| Quản trị viên | `admin@cropmate.dev` | `pages/admin-dashboard.html` |

## Cấu trúc thư mục
```text
project-root/
├── README.md
├── index.html              ← landing page
├── .github/workflows/      ← deploy GitHub Pages
├── docs/                   ← kiểm kê màn hình, đề xuất, phân công, Trello, OBS, báo cáo AI
├── design/                 ← figma-link.txt + figma/ (30 ảnh mockup)
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

## Danh mục 21 màn hình (bảng kiểm kê chốt)

Bảng đầy đủ 12 cột (mục tiêu, nhiệm vụ, CRUD, trạng thái, AI, người phụ trách, Task ID, nhánh, tên video OBS): [`docs/screen-inventory.md`](docs/screen-inventory.md).

| # | Tệp | Vai trò | AI | Task ID | Video OBS |
|---:|---|---|---|---|---|
| 1 | `index.html` | Dùng chung | – | TASK-08 | `SV3-01-index.mp4` |
| 2 | `pages/login.html` | Dùng chung | – | TASK-08 | [SV1-01-login.mp4](https://github.com/HoangNotEm/CSE122_67KTPM1_BTCK_Nhom2/releases/download/obs-sv1/SV1-01-login.mp4) |
| 3 | `pages/register.html` | Dùng chung | – | TASK-08 | [SV1-02-register.mp4](https://github.com/HoangNotEm/CSE122_67KTPM1_BTCK_Nhom2/releases/download/obs-sv1/SV1-02-register.mp4) |
| 4 | `pages/forgot-password.html` | Dùng chung | – | TASK-08 | [SV2-04-forgot-password.mp4]https://youtu.be/JkDr4bPjfCQ?si=nkakUVux2SFOtD1_ |
| 5 | `pages/profile.html` | Dùng chung | – | TASK-22 | [SV2-05-profile.mp4]https://youtu.be/esZeZu1hxc4?si=VNlN2ZC11QyTDx7Z |
| 6 | `pages/settings.html` | Dùng chung | – | TASK-22 | [SV2-06-settings.mp4]https://youtu.be/8_nCXK4uqIY?si=NTTS_CtS8omUvU6b |
| 7 | `pages/notifications.html` | Dùng chung | – | TASK-22 | [SV1-03-notifications.mp4](https://github.com/HoangNotEm/CSE122_67KTPM1_BTCK_Nhom2/releases/download/obs-sv1/SV1-03-notifications.mp4) |
| 8 | `pages/403.html` | Dùng chung | – | TASK-22 | `SV3-02-403.mp4` |
| 9 | `pages/404.html` | Dùng chung | – | TASK-22 | `SV3-03-404.mp4` |
| 10 | `pages/farmer-season-dashboard.html` | Nông dân | **AI-2** Checklist Generator | TASK-05 | [SV1-04-farmer-season-dashboard.mp4](https://github.com/HoangNotEm/CSE122_67KTPM1_BTCK_Nhom2/releases/download/obs-sv1/SV1-04-farmer-season-dashboard.mp4) |
| 11 | `pages/farmer-field-log.html` | Nông dân | – | TASK-06 | `SV1-05-farmer-field-log.mp4` |
| 12 | `pages/farmer-help-request.html` | Nông dân | **AI-1** Issue Classifier | TASK-07 | `SV1-06-farmer-help-request.mp4` |
| 13 | `pages/expert-request-queue.html` | Chuyên gia | – | TASK-10 | `SV2-01-expert-request-queue.mp4` |
| 14 | `pages/expert-request-detail.html` | Chuyên gia | **AI-3** Log Summarizer | TASK-11 | `SV2-02-expert-request-detail.mp4` |
| 15 | `pages/expert-resource-library.html` | Chuyên gia | – | TASK-12 | `SV2-03-expert-resource-library.mp4` |
| 16 | `pages/coordinator-farm-overview.html` | Điều phối HTX | – | TASK-16 | `SV3-04-coordinator-farm-overview.mp4` |
| 17 | `pages/coordinator-calendar.html` | Điều phối HTX | – | TASK-17 | `SV3-05-coordinator-calendar.mp4` |
| 18 | `pages/coordinator-season-summary.html` | Điều phối HTX | – | TASK-18 | `SV3-06-coordinator-season-summary.mp4` |
| 19 | `pages/admin-dashboard.html` | Quản trị viên | – | TASK-19 | `SV3-07-admin-dashboard.mp4` |
| 20 | `pages/admin-crop-management.html` | Quản trị viên | – | TASK-20 | `SV3-08-admin-crop-management.mp4` |
| 21 | `pages/admin-user-management.html` | Quản trị viên | – | TASK-21 | `SV3-09-admin-user-management.mp4` |

Link video sau khi quay: dán vào cột "Video OBS" của README này và mô tả thẻ Trello tương ứng.

## 3 trải nghiệm AI (mô phỏng rule-based, có trạng thái thất bại)

Mỗi tính năng đi đủ chu trình **Nhập → Kiểm tra hợp lệ → Đang xử lý → Kết quả + Độ tin cậy + Giải thích → Chấp nhận/Sửa/Từ chối/Tạo lại → Lưu vào dữ liệu ứng dụng**, kèm bộ chọn "Mô phỏng: Thiếu dữ liệu / AI không chắc chắn / Lỗi mạng" để demo trạng thái thất bại (Thử lại / Dùng thủ công).

| Mã | Tính năng | Trang | Kết quả được lưu ở đâu |
|---|---|---|---|
| AI-1 | Field Issue Classifier – phân loại vấn đề từ mô tả triệu chứng | `pages/farmer-help-request.html` | `helpRequests`: `aiClassification` + trạng thái yêu cầu |
| AI-2 | Season Checklist Generator – checklist công việc theo cây trồng/giai đoạn | `pages/farmer-season-dashboard.html` | `cropmate_checklists` (hiển thị ở khối "Checklist đã lưu", xóa được) |
| AI-3 | Farm Log Summarizer – tóm tắt diễn biến mùa vụ cho chuyên gia | `pages/expert-request-detail.html` | `helpRequests.aiSummary` (hiển thị lại sau khi tải trang, sửa/từ chối được) |

## Mockup UI/UX (Figma)
Bộ mockup **30 ảnh** đã đưa lên Figma, chia 3 page (link công khai, không cần đăng nhập):

- [File mockup UI/UX](https://www.figma.com/design/hb6zDXTpZwGPe6IQ00bCHX/CropMate-AI-%E2%80%93-UI-UX-Mockup)
- [Page 00 – Bìa & Design System](https://www.figma.com/design/hb6zDXTpZwGPe6IQ00bCHX/CropMate-AI-%E2%80%93-UI-UX-Mockup?node-id=0-1)
- [Page 01 – Desktop (21 màn hình)](https://www.figma.com/design/hb6zDXTpZwGPe6IQ00bCHX/CropMate-AI-%E2%80%93-UI-UX-Mockup?node-id=1-3269)
- [Page 02 – AI states & Mobile](https://www.figma.com/design/hb6zDXTpZwGPe6IQ00bCHX/CropMate-AI-%E2%80%93-UI-UX-Mockup?node-id=1-3270)

Ảnh gốc 1x (desktop 1440px, mobile 390px) nằm trong [`design/figma/screens/`](design/figma/screens); link lưu tại [`design/figma-link.txt`](design/figma-link.txt).

Hai sơ đồ bổ trợ (đã vẽ sẵn dạng SVG, mở trực tiếp bằng trình duyệt hoặc kéo vào Figma Page 00):
- [Sitemap 21 màn hình](design/figma/sitemap.svg) — sơ đồ cây theo 4 vai trò, đánh số khớp bảng kiểm kê.
- [User Flow 7 bước](design/figma/user-flow.svg) — luồng Nông dân → AI → Chuyên gia → Điều phối → Quản trị, kèm nhánh AI thất bại và quy ước trạng thái.

## Công nghệ & kiến trúc
- HTML5 ngữ nghĩa + CSS thuần (design system token trong `css/style.css`, responsive trong `css/responsive.css`), **không framework ngoài** — chạy offline qua `file://` và trên GitHub Pages.
- JavaScript ES5+/DOM: `js/data.js` (seed), `js/api.js` (CRUD LocalStorage + giả lập độ trễ), `js/modules/ui.js` (toast/modal/validation...), `js/modules/ai.js` (rule-based AI), `js/main.js` (app chrome + phân quyền theo phiên).
- Trạng thái bắt buộc: đang tải (skeleton), rỗng, lỗi + thử lại, thành công (toast), vô hiệu hóa, đang chờ/bị từ chối/hoàn thành/đã hủy theo nghiệp vụ.
- Phân quyền phía client: mỗi trang khai báo vai trò được phép; sai vai trò chuyển tới `pages/403.html` kèm nút đổi vai trò.

## Tài liệu nhóm (`docs/`)
- [`screen-inventory.md`](docs/screen-inventory.md) — bảng kiểm kê 21 màn hình (12 cột) + ma trận bao phủ trạng thái + mapping CRUD
- [`project-proposal.md`](docs/project-proposal.md) · [`roles-and-features.md`](docs/roles-and-features.md)
- [`team-assignment.md`](docs/team-assignment.md) — phân công 3 SV + trách nhiệm xuyên suốt
- [`roadmap.md`](docs/roadmap.md) — lộ trình 20–26/10 (Task ID lấy theo [`trello-board.md`](docs/trello-board.md))
- [`trello-board.md`](docs/trello-board.md) — nội dung 5 list / 33 thẻ (TASK-00…TASK-32) + chi tiết thẻ, dùng để tạo board Trello
- [`git-workflow.md`](docs/git-workflow.md) — chiến lược nhánh + quy ước commit
- [`ai-usage-report.md`](docs/ai-usage-report.md) — khai báo sử dụng AI

## Bảng Trello
Board công khai: _(dán link Trello sau khi tạo board từ `docs/trello-board.md`)_

## Quy trình Git (rút gọn — xem chi tiết trong `docs/git-workflow.md`)
```text
main ← dev ← feature/<nhóm-màn-hình> (PR + review chéo + merge)
```
Ba nhánh tính năng tương ứng ba thành viên: `feature/farmer-screens`, `feature/expert-screens`, `feature/coordinator-admin-screens`.
Commit đúng kiểu `feat:/fix:/style:/refactor:/docs:` — cấm `update`, `done`, `final`.

## Minh chứng OBS
Mỗi màn hình 1 video, đặt tên `SVx-XX-screen-name.mp4` (xem cột "Video OBS" ở bảng trên). Mỗi video cần: mặt + giọng sinh viên, mở mockup Figma, mở đúng HTML/CSS/JS, giải thích bố cục/logic, **chỉnh sửa code trực tiếp**, chạy thử + responsive, commit/push, nêu Task ID – nhánh – commit.
Kịch bản quay theo từng thành viên: [`docs/obs/sv1-farmer.md`](docs/obs/sv1-farmer.md) · [`docs/obs/sv2-expert.md`](docs/obs/sv2-expert.md) · [`docs/obs/sv3-coordinator-admin.md`](docs/obs/sv3-coordinator-admin.md).

## Chuỗi minh chứng khi bảo vệ
```text
Ngữ cảnh → Vấn đề → Vai trò → Màn hình (screen-inventory) → Mockup (Figma)
→ Task (Trello) → Nhánh → Commit → PR → Review chéo → OBS → Sản phẩm (Pages)
```
