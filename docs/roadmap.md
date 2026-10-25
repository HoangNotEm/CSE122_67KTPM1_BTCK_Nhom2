# Lộ trình thực hiện – CropMate AI (1 tuần: 20–26/10/2026)

> Dùng làm khung Trello/Jira/Notion. Mỗi task gồm: mã – tên – người thực hiện – hạn – nhánh – link PR – link OBS.

## Bảng Trello tối thiểu
`TỒN ĐỌG → CẦN LÀM → ĐANG LÀM → CHỜ DUYỆT (PR) → HOÀN THÀNH`

## Ngày 1–2 (20–21/10) – Đề + thiết kế
| Mã | Task | Người | Nhánh gợi ý |
|---|---|---|---|
| TASK-01 | Khung dây + mockup Figma/Canva trang đầu tiên (farmer dashboard) | Cả nhóm | `docs/wireframes` |
| TASK-02 | Hoàn thiện bảng kiểm kê màn hình + luồng người dùng, nộp giảng viên duyệt | Cả nhóm | `docs/screen-list` |
| TASK-03 | Mockup desktop + bản responsive chính + trạng thái loading/empty/error + mockup tương tác AI | SV1 (lead), cả nhóm review | `design/figma` |

## Ngày 2–3 (21–22/10) – Khung dự án
| Mã | Task | Người | Nhánh gợi ý |
|---|---|---|---|
| TASK-04 | Khởi tạo repo GitHub, cấu trúc thư mục, README, design system CSS (token, header/sidebar, component) | SV1 | `feature/design-system` |
| TASK-05 | Mock data module + API LocalStorage (giả lập độ trễ) | SV2 | `feature/mock-data-api` |
| TASK-06 | Trang public: index, login, register, forgot-password, 403, 404 | SV3 | `feature/public-pages` |

## Ngày 3–5 (22–24/10) – Triển khai theo vai trò (mỗi SV tự làm trọn vẹn HTML→CSS→JS→data của phần mình)
| Mã | Task | Người | Nhánh gợi ý |
|---|---|---|---|
| TASK-07 | Nông dân: season dashboard (AI-2), field log, help request (AI-1) | SV1 | `feature/farmer-*` |
| TASK-08 | Chuyên gia: request queue, request detail (AI-3), resource library | SV2 | `feature/expert-*` |
| TASK-09 | Điều phối HTX: farm overview, calendar, season summary | SV3 | `feature/coordinator-*` |
| TASK-10 | Quản trị: admin dashboard, crop management, user management | SV3 | `feature/admin-*` |
| TASK-11 | Trang tài khoản: profile, settings, notifications | SV2 | `feature/account-pages` |
| TASK-12 | AI engine dùng chung (`js/modules/ai.js`): đủ chu trình + trạng thái thất bại | SV2 | `feature/ai-engine` |
| TASK-13 | Responsive toàn hệ thống + kiểm thử đa trình duyệt/di động | SV3 | `feature/responsive-qa` |

## Ngày 5–6 (25–26/10) – Tích hợp & kiểm thử
| Mã | Task | Người | Nhánh gợi ý |
|---|---|---|---|
| TASK-14 | Merge `dev`, test tích hợp toàn luồng (nông dân tạo yêu cầu → chuyên gia phản hồi) | SV3 + cả nhóm | `dev` |
| TASK-15 | Kiểm tra lại bảng kiểm kê: đủ trạng thái, đúng tên tệp, a11y | SV1 | `fix/screen-audit` |
| TASK-16 | Điền `docs/ai-usage-report.md` | SV2 | `docs/ai-report` |

## Ngày 6 (26/10) – Minh chứng
| Mã | Task | Người |
|---|---|---|
| TASK-17 | Quay OBS **mỗi màn hình 1 video** (có mặt SV, hiện Figma + code + chỉnh sửa trực tiếp + chạy thử + commit, nói rõ TASK/nhánh/commit) | Mỗi SV cho phần mình |
| TASK-18 | Đặt tên video đúng chuẩn `SV1-01-screen-name.mp4`, dán link vào Trello + README | Mỗi SV |

## Ngày 6 (26/10) – Dự phòng & nộp bài
| Mã | Task | Người |
|---|---|---|
| TASK-19 | Luyện "chỉnh sửa ngẫu nhiên 5–10 phút" (thêm filter, đổi table→card, thêm field+validation, xử lý API rỗng, đổi layout responsive, thêm trạng thái) | Cả nhóm |
| TASK-20 | Merge `main`, hoàn thiện README, kiểm chuỗi: Ngữ cảnh→…→OBS→Sản phẩm | Cả nhóm |

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
