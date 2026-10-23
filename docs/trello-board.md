# Bảng Trello phân công – CropMate AI (Nhóm 2 – 67KTPM1)

> File này là **bản thiết kế board Trello** + minh chứng phân công cho BTL-04.
> Cách dùng: tạo board mới trên Trello → tạo 5 list đúng tên cột bên dưới →
> copy từng khối "PASTE" vào ô *Add a card* của list tương ứng (Trello tự tách
> mỗi dòng thành 1 thẻ) → mở từng thẻ dán phần mô tả (checklist, member, hạn,
> nhánh, link PR/OBS) theo mục *Chi tiết thẻ*.

## Thành viên

- **SV1** – Nông dân (3 màn) + giao diện dùng chung auth + Design system & Khả năng tiếp cận
- **SV2** – Chuyên gia (3 màn) + JavaScript / Dữ liệu giả lập / Tương tác AI + Review PR của SV1, SV3
- **SV3** – Điều phối HTX + Quản trị viên (6 màn) + Responsive / Tích hợp / Phát hành / QA

---

## Cột 1 – TỒN ĐỌNG

**PASTE:**

```text
TASK-00 – Chờ duyệt đề cương & bảng kiểm kê màn hình với giảng viên
TASK-26 – Chỉnh sửa ngẫu nhiên khi bảo vệ (filter/card/field mới/empty state/layout)
TASK-27 – Tổng duyệt chuỗi nghiệp vụ end-to-end trước ngày nộp
```

## Cột 2 – CẦN LÀM

**PASTE:**

```text
TASK-01 – Khởi tạo repo, nhánh main/dev, cấu trúc thư mục, .gitignore
TASK-02 – Figma/Canva: sơ đồ trang + user flow + bảng kiểm kê (bản đầy đủ)
TASK-03 – Figma/Canva: wireframe + mockup desktop + bản responsive + trạng thái rỗng/đang tải/lỗi
TASK-04 – Figma/Canva: nguyên mẫu tương tác AI (AI-1, AI-2, AI-3)
TASK-24 – Quay OBS toàn bộ màn hình SV1 phụ trách
TASK-25 – Quay OBS toàn bộ màn hình SV2 & SV3 phụ trách
TASK-28 – Hoàn thiện README (điền link OBS thật) + docs/ai-usage-report.md + cập nhật screen-list.md
```

## Cột 3 – ĐANG LÀM

**PASTE:**

```text
(để trống – kéo thẻ vào đây khi bắt đầu làm)
```

## Cột 4 – CHỜ DUYỆT

**PASTE:**

```text
TASK-05 – farmer-season-dashboard.html (HTML+CSS+JS+data+responsive)
TASK-06 – farmer-field-log.html
TASK-07 – farmer-help-request.html (AI-1)
TASK-08 – Nhóm trang auth: index, login, register, forgot-password
TASK-09 – Design system css/style.css + audit khả năng tiếp cận
TASK-10 – expert-request-queue.html
TASK-11 – expert-request-detail.html (AI-3)
TASK-12 – expert-resource-library.html
TASK-13 – js/data.js + js/api.js (mock API, LocalStorage, trạng thái lỗi mạng)
TASK-14 – js/modules/ai.js (3 tính năng AI + trạng thái thất bại)
TASK-15 – Review PR chéo (SV2 review PR của SV1, SV3)
TASK-16 – coordinator-farm-overview.html
TASK-17 – coordinator-calendar.html
TASK-18 – coordinator-season-summary.html
TASK-19 – admin-dashboard.html
TASK-20 – admin-crop-management.html
TASK-21 – admin-user-management.html
TASK-22 – Nhóm trang cá nhân: profile, settings, notifications, 403, 404
TASK-23 – Tích hợp: navigation xuyên suốt, kiểm thử đa trình duyệt/di động, phát hành
```

## Cột 5 – HOÀN THÀNH

**PASTE:**

```text
TASK-29 – Phân tích ngữ cảnh, vấn đề, vai trò, user flow (docs/project-proposal.md)
TASK-30 – Bảng kiểm kê màn hình 21 màn hình được duyệt (docs/screen-list.md)
TASK-31 – Phân công nhóm & lộ trình 8 tuần (docs/team-assignment.md, docs/roadmap.md)
TASK-32 – Code prototype 21 màn hình trên nhánh tích hợp (commit 9f85b6e, refactor ac4a643)
```

---

## Chi tiết thẻ

Quy ước nhánh: `feature/<ten-man-hinh>` · Commit: `feat:/fix:/style:/refactor:/docs:` –
không dùng "update/done/final". Mỗi thẻ màn hình gồm checklist:

```text
[ ] Bản mô phỏng Figma/Canva
[ ] HTML ngữ nghĩa
[ ] CSS hoàn chỉnh
[ ] Responsive (desktop + tablet/mobile)
[ ] JavaScript tương tác (tìm kiếm/lọc/modal/form/trạng thái)
[ ] Kiểm tra hợp lệ biểu mẫu
[ ] Dữ liệu giả lập qua CM.api (không hard-code rải rác)
[ ] Trạng thái rỗng + đang tải/lỗi
[ ] Khả năng tiếp cận cơ bản
[ ] PR → review chéo → merge dev
[ ] Video OBS (có mặt SV, chỉnh sửa trực tiếp, commit, nêu TASK/nhánh/commit)
```

**TASK-01 – Khởi tạo repo & cấu trúc** · Cả nhóm · Hạn: 22/10/2026 · Nhánh: `main`, `dev`
Nội dung: repo `cse122-cropmate-ai-team02`, cấu trúc đề mục 19 (docs/, design/, css/, js/modules/, assets/), `.gitignore` (loại *.mp4), quyền truy cập 3 thành viên.

**TASK-02/03/04 – Figma/Canva** · SV1 lead, SV2/SV3 cùng thực hiện phần màn của mình · Hạn: 26/10/2026
Sơ đồ trang, user flow theo 7 bước mục 7 của đề; wireframe khung dây; mockup desktop 21 màn hình; bản responsive chính (mobile); trạng thái rỗng/đang tải/lỗi; nguyên mẫu tương tác AI-1/2/3 (nhập → đang xử lý → kết quả → giải thích → chấp nhận/sửa/từ chối). Điền link vào `design/figma-link.txt`.

**TASK-05 – farmer-season-dashboard.html** · SV1 · Hạn: 02/11/2026 · Nhánh: `feature/farmer-season-dashboard`
Dashboard mùa vụ: stat cards, tiến độ giai đoạn, checklist công việc, yêu cầu gần đây; **AI-2 Season Checklist Generator** (nhập cây trồng + giai đoạn → đang xử lý → checklist → giải thích → Chấp nhận/Sửa/Từ chối/Tạo lại/Lưu).

**TASK-06 – farmer-field-log.html** · SV1 · Hạn: 05/11/2026 · Nhánh: `feature/farmer-field-log`
CRUD nhật ký đồng ruộng: tạo/sửa/xóa (mềm), gắn ảnh placeholder SVG, timeline, lọc theo mùa vụ + loại hoạt động, tìm kiếm, phân trang; trạng thái rỗng/lỗi.

**TASK-07 – farmer-help-request.html** · SV1 · Hạn: 09/11/2026 · Nhánh: `feature/farmer-help-request`
CRUD yêu cầu hỗ trợ (2 pha: mô tả → AI phân loại → hoàn thiện gửi); **AI-1 Field Issue Classifier** (mô tả/ảnh → nhóm vấn đề + độ tin cậy + giải thích → Chấp nhận/Sửa/Từ chối/Tạo lại); trạng thái pending/assigned/resolved/rejected/cancelled; trạng thái thất bại: "Không đủ dữ liệu", "AI chưa chắc chắn", "Không thể xử lý lúc này" + Thử lại/Dùng thủ công.

**TASK-08 – Nhóm trang auth** · SV1 · Hạn: 12/11/2026 · Nhánh: `feature/shared-auth-pages`
`index.html` (landing: hero, tính năng, AI, hành trình), `login.html` (role-picker, demo accounts), `register.html` (validation: required/email/phone/đồng ý điều khoản), `forgot-password.html` (trạng thái thành công).

**TASK-09 – Design system & a11y** · SV1 · Hạn: 12/11/2026 · Nhánh: `feature/design-system`
`css/style.css` (tokens màu/typography/spacing, components: topbar, sidebar, btn, card, badge, table, form, modal, toast, tabs, skeleton, ai-panel), `css/responsive.css` (breakpoint 1024/768/420, drawer mobile, table→card); audit contrast, alt text, focus, skip-link, aria.

**TASK-10 – expert-request-queue.html** · SV2 · Hạn: 05/11/2026 · Nhánh: `feature/expert-request-queue`
Hàng đợi yêu cầu: tìm kiếm, lọc theo trạng thái/ưu tiên/cây trồng, sắp xếp, badge AI phân loại, mở chi tiết `?id=`; trạng thái rỗng/lỗi/thành công.

**TASK-11 – expert-request-detail.html** · SV2 · Hạn: 09/11/2026 · Nhánh: `feature/expert-request-detail`
Chi tiết yêu cầu: đầy đủ bối cảnh (ảnh, nhật ký liên quan, AI classification); **AI-3 Farm Log Summarizer** (tóm tắt diễn biến mùa vụ → giải thích → Chấp nhận/Sửa/Từ chối/Tạo lại); form phản hồi (validation min 20 ký tự), đính kèm tài nguyên từ thư viện, chuyển trạng thái assigned/resolved/rejected; lý do từ chối bắt buộc.

**TASK-12 – expert-resource-library.html** · SV2 · Hạn: 12/11/2026 · Nhánh: `feature/expert-resource-library`
CRUD tài nguyên tư vấn (tạo/sửa/lưu trữ), tìm kiếm + lọc theo loại/cây trồng, card view, đếm lượt dùng; trạng thái rỗng/lỗi; xóa mềm (archive).

**TASK-13 – Mock data + API** · SV2 · Hạn: 02/11/2026 · Nhánh: `feature/mock-api`
`js/data.js`: seed 10 thực thể (users, crops, farms, fields, seasons, fieldLogs, helpRequests, resources, events, notifications). `js/api.js`: list/get/create/update/remove async (độ trễ ~450ms), session, role switch, `forceFailNext()` mô phỏng lỗi mạng, `reset()`. **Yêu cầu code:** viết theo phong cách sinh viên năm 2 — vòng lặp `for` đơn giản thay hàm nâng cao, chú thích tiếng Việt giải thích từng bước, không dùng thư viện ngoài.

**TASK-14 – Engine AI** · SV2 · Hạn: 05/11/2026 · Nhánh: `feature/ai-engine`
`js/modules/ai.js`: `classifyIssue`, `generateChecklist`, `summarizeSeason` (rule-based, mode ok/insufficient/uncertain/network); `AiError.code` để UI render trạng thái thất bại kèm hành động Thử lại/Dùng thủ công/Báo cáo; kết quả AI phải lưu vào trạng thái ứng dụng. **Yêu cầu code:** từ điển từ khóa và ngân hàng checklist viết dạng mảng thường, vòng lặp đơn giản, chú thích tiếng Việt ở mỗi bước (đọc hiểu được khi bảo vệ).

**TASK-15 – Review PR chéo** · SV2 · Hạn: theo từng PR · Nhánh: –
SV2 review & approve PR của SV1 và SV3 theo checklist màn hình; ghi nhận review trong mô tả PR; không tự merge PR của mình.

**TASK-16/17/18 – Nhóm Điều phối** · SV3 · Hạn: 02–09/11/2026 · Nhánh: `feature/coordinator-*`
`coordinator-farm-overview.html` (stat nông hộ, cards mùa vụ + progress, modal chi tiết, timeline hợp nhất sự kiện/nhật ký); `coordinator-calendar.html` (lưới tháng/tuần, CRUD sự kiện, hủy mềm, validation); `coordinator-season-summary.html` (KPI, bảng nông hộ table→card, ghi chú lưu localStorage, xuất CSV, lưu trữ báo cáo → disabled).

**TASK-19/20/21 – Nhóm Quản trị** · SV3 · Hạn: 09–16/11/2026 · Nhánh: `feature/admin-*`
`admin-dashboard.html` (stat cards, biểu đồ CSS thuần: trạng thái yêu cầu, tài khoản theo vai trò, hoạt động gần đây); `admin-crop-management.html` (CRUD danh mục cây trồng, tìm kiếm/lọc); `admin-user-management.html` (CRUD tài khoản, khóa/mở khóa, phân trang 7/trang).

**TASK-22 – Nhóm trang cá nhân** · SV3 · Hạn: 16/11/2026 · Nhánh: `feature/shared-personal-pages`
`profile.html` (xem/sửa hồ sơ, đổi mật khẩu mock), `settings.html` (thông báo, cỡ chữ, giảm chuyển động, reset dữ liệu mẫu), `notifications.html` (segmented lọc loại/đã đọc, đánh dấu đọc, xóa), `403.html` (role guard, nút đổi vai trò), `404.html`.

**TASK-23 – Tích hợp & phát hành** · SV3 · Hạn: 19/11/2026 · Nhánh: `dev` → `main`
Navigation xuyên suốt 4 vai trò (`js/main.js`), role guard + switcher, kiểm thử đa trình duyệt (Chrome/Edge/Firefox) + di động 420px, sửa lỗi tích hợp, merge `dev` → `main`, đánh tag `v1.0`.

**TASK-24/25 – Video OBS** · SV1 / SV2+SV3 · Hạn: 26/11/2026
Mỗi màn hình 1 video đúng quy tắc mục 17 của đề: có mặt SV, hiển thị mockup Figma, mở đúng file HTML/CSS/JS, giải thích bố cục + logic, chỉnh sửa trực tiếp, chạy tương tác, commit lên GitHub, nêu TASK/nhánh/commit. Đặt tên `SV1-01-screen-name.mp4`… Không push video lên repo; chỉ dán link Drive/YouTube vào README (cột "Video OBS") và mô tả thẻ Trello.

**TASK-26 – Chỉnh sửa ngẫu nhiên khi bảo vệ** · Người được giảng viên chỉ định · Hạn: ngày bảo vệ
Luyện sẵn 5–10 phút cho: thêm filter, đổi table→card, thêm field + validation, xử lý API rỗng, đổi layout responsive, thêm trạng thái mới.

**TASK-27 – Tổng duyệt** · Cả nhóm · Hạn: 28/11/2026
Chạy lại chuỗi: Ngữ cảnh → Vấn đề → Vai trò → Màn hình → Mockup → TASK → Nhánh → Commit → PR → OBS → Sản phẩm; đối chiếu README + docs/screen-list.md.

**TASK-28 – Hoàn thiện hồ sơ** · Cả nhóm (SV3 tổng hợp) · Hạn: 30/11/2026
Điền link OBS thật vào README; hoàn thiện `docs/ai-usage-report.md` (công cụ AI, prompt, phần AI sinh/phần tự sửa, lỗi AI, cách kiểm chứng, tính năng mock vs API thật); cập nhật trạng thái 21 màn hình trong `docs/screen-list.md`.

**TASK-29/30/31/32 – Đã hoàn thành (ghi nhận)** · Cả nhóm
Phân tích đề + proposal; bảng kiểm kê 21 màn hình (mục 8 + màn hình dùng chung); phân công & lộ trình; prototype code 21 màn hình đã push (commit `9f85b6e`).

---

## Nhãn (Labels) đề xuất

`role-farmer` · `role-expert` · `role-coordinator` · `role-admin` · `shared` · `ai-feature` · `design-figma` · `obs` · `docs` · `urgent`

## Mốc thời gian tổng

| Tuần | Mốc |
|---|---|
| 1 (20–26/10) | Duyệt đề, repo, Figma/wireframe/mockup, bảng kiểm kê |
| 2–3 (27/10–09/11) | HTML/CSS/JS 12 màn theo vai trò + mock API |
| 4 (10–16/11) | 3 tính năng AI + 9 màn dùng chung + review chéo |
| 5 (17–23/11) | Tích hợp, responsive audit, test đa trình duyệt, merge main |
| 6–7 (24/11–07/12) | OBS từng màn, hoàn thiện docs, luyện chỉnh sửa ngẫu nhiên |
| 8 | Bảo vệ |
