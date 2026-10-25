# Lộ trình thực hiện – CropMate AI (20–26/10/2026)

> **Nguồn Task ID duy nhất:** [`docs/trello-board.md`](trello-board.md). Roadmap này chỉ xếp thứ tự thời gian; không tự đánh số task mới.
> Mỗi thẻ Trello gồm: mã – tên – người thực hiện – hạn – nhánh – link PR – link OBS.

## Bảng Trello
`TỒN ĐỌNG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT (PR) → HOÀN THÀNH`

## Ngày 1–2 (20–21/10) – Đề + thiết kế

| Ngày | Việc | Người | Thẻ Trello | Nhánh |
|---|---|---|---|---|
| 20/10 | Duyệt đề cương, vấn đề, vai trò, user flow với giảng viên | Cả nhóm | TASK-00, TASK-29 | – |
| 20/10 | Khởi tạo repo, cấu trúc thư mục, `.gitignore`, quyền 3 thành viên | Cả nhóm | TASK-01 | `main`, `dev` |
| 21/10 | Sơ đồ trang + user flow + bảng kiểm kê 12 cột | Cả nhóm | TASK-02, TASK-30 | `docs/screen-inventory` |
| 21/10 | Wireframe, mockup desktop 21 màn, responsive, trạng thái lỗi/rỗng/đang tải, nguyên mẫu AI | SV1 lead, SV2/SV3 phần màn mình | TASK-03, TASK-04 | `design/figma` |

## Ngày 2–3 (21–22/10) – Khung dự án

| Ngày | Việc | Người | Thẻ Trello | Nhánh |
|---|---|---|---|---|
| 21/10 | Design system CSS + audit a11y | SV1 | TASK-09 | `feature/farmer-screens` |
| 22/10 | Mock data + API LocalStorage (độ trễ, `forceFailNext`, reset) | SV2 | TASK-13 | `feature/expert-screens` |
| 22/10 | Trang auth: index (SV3), login/register (SV1), forgot-password (SV2) | SV1, SV2, SV3 | TASK-08 | ba nhánh feature |

## Ngày 3–5 (22–24/10) – Triển khai theo vai trò

Mỗi SV tự làm trọn vẹn HTML → CSS → JS → dữ liệu → responsive cho phần mình.

| Việc | Người | Thẻ Trello | Nhánh |
|---|---|---|---|
| Nông dân: season dashboard (AI-2), field log, help request (AI-1) | SV1 | TASK-05, TASK-06, TASK-07 | `feature/farmer-screens` |
| Chuyên gia: request queue, request detail (AI-3), resource library | SV2 | TASK-10, TASK-11, TASK-12 | `feature/expert-screens` |
| Engine AI dùng chung (`js/modules/ai.js`) + trạng thái thất bại | SV2 | TASK-14 | `feature/expert-screens` |
| Điều phối HTX: farm overview, calendar, season summary | SV3 | TASK-16, TASK-17, TASK-18 | `feature/coordinator-admin-screens` |
| Quản trị: dashboard, crop management, user management | SV3 | TASK-19, TASK-20, TASK-21 | `feature/coordinator-admin-screens` |
| Trang cá nhân: profile/settings (SV2), notifications (SV1), 403/404 (SV3) | SV1, SV2, SV3 | TASK-22 | ba nhánh feature |
| Review chéo PR theo checklist màn hình | SV2 review SV1/SV3, SV3 review SV2, SV1 review SV3 | TASK-15 | – |

## Ngày 5–6 (25–26/10) – Tích hợp & kiểm thử

| Ngày | Việc | Người | Thẻ Trello | Nhánh |
|---|---|---|---|---|
| 25/10 | Merge `dev`, test tích hợp toàn luồng (nông dân tạo yêu cầu → chuyên gia phản hồi) | SV3 + cả nhóm | TASK-23 | `dev` |
| 25/10 | Kiểm tra bảng kiểm kê: đủ trạng thái, đúng tên tệp, a11y | SV1 | TASK-15 | `dev` |
| 25/10 | Merge `dev` → `main`, tag `v1.0`, bật GitHub Pages, kiểm tra live demo | SV3 | TASK-23 | `main` |
| 26/10 | Hoàn thiện `docs/ai-usage-report.md`, điền link OBS vào README | Cả nhóm (SV3 tổng hợp) | TASK-28 | `main` |

## Ngày 6 (26/10) – Minh chứng & nộp bài

| Việc | Người | Thẻ Trello |
|---|---|---|
| Quay OBS **mỗi màn hình 1 video**: mặt + giọng SV, mockup Figma, mở đúng HTML/CSS/JS, giải thích, **sửa code trực tiếp**, chạy thử + responsive, commit/push, nêu Task ID/nhánh/commit | SV1 (6 video) | TASK-24 |
|  | SV2 (6 video) + SV3 (9 video) | TASK-25 |
| Đặt tên đúng `SVx-XX-screen-name.mp4`, dán link Drive/YouTube vào README + Trello | Mỗi SV | TASK-24, TASK-25 |
| Luyện "chỉnh sửa ngẫu nhiên 5–10 phút" (thêm filter, table→card, field + validation, API rỗng, layout responsive, trạng thái mới) | Cả nhóm | TASK-26 |
| Tổng duyệt chuỗi: Ngữ cảnh → Vấn đề → Vai trò → Màn hình → Mockup → Task → Nhánh → Commit → PR → OBS → Sản phẩm; đối chiếu README + `screen-inventory.md` | Cả nhóm | TASK-27, TASK-28 |
| **Nộp bài (deadline 26/10)** | Cả nhóm | – |

## Quy tắc commit (không commit kiểu `update`, `done`, `final`)
```text
feat: add responsive dashboard layout
feat: render data from mock json
feat: add ai recommendation state
fix: validate empty form inputs
style: improve mobile navigation
refactor: split reusable ui modules
docs: update screen list and obs links
```
