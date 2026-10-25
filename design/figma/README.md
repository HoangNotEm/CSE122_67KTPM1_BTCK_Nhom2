# Bộ mockup UI/UX Figma-ready – CropMate AI

> **Học phần:** CSE122 – BTL-04 · Nhóm 2 – 67KTPM1
> **Nội dung:** 30 ảnh PNG xuất từ chính giao diện đã code + hướng dẫn đưa lên Figma.
> **Cập nhật:** 25/10/2026

Thư mục này là **bộ dựng sẵn để nhập vào Figma**. Nhóm chưa có tài khoản Figma dùng chung nên chưa thể tạo file `.fig` hoặc link chia sẻ thay bạn — bạn chỉ cần làm theo mục 3 (khoảng 10–15 phút) rồi dán link vào `design/figma-link.txt`.

Ảnh được chụp từ giao diện thật trong `pages/` (Chrome, bề rộng 1440px; mobile 390px), không phải hình vẽ lại. Nhờ vậy chữ tiếng Việt, màu, component và bố cục khớp 100% với bản chạy thử.

---

## 1. Danh sách ảnh

### 1.1. Bìa và design system

| Tệp | Kích thước | Nội dung |
|---|---|---|
| `screens/00-cover.png` | 1440×900 | Bìa bộ mockup: tên sản phẩm, 4 vai trò, 3 tính năng AI |
| `screens/00-design-system.png` | 1440×1006 | Màu, typography, component, trạng thái, khoảng cách, breakpoint |

Hai ảnh này được xuất từ `cover.html` và `style-guide.html` trong cùng thư mục. Có thể mở trực tiếp bằng trình duyệt để xem bản gốc.

### 1.2. 21 màn hình theo `docs/screen-list.md`

| # | Tệp | Kích thước | Vai trò | Ghi chú |
|---:|---|---|---|---|
| 1 | `screens/01-landing.png` | 1440×2255 | Khách | Toàn bộ landing page (cuộn hết trang) |
| 2 | `screens/02-login.png` | 1440×900 | Khách | Đăng nhập + chọn vai trò demo |
| 3 | `screens/03-register.png` | 1440×1106 | Khách | Đăng ký, validation |
| 4 | `screens/04-forgot-password.png` | 1440×900 | Khách | Quên mật khẩu |
| 5 | `screens/05-profile.png` | 1440×900 | Tất cả | Hồ sơ + đổi mật khẩu |
| 6 | `screens/06-settings.png` | 1440×900 | Tất cả | Cài đặt, reset dữ liệu mẫu |
| 7 | `screens/07-notifications.png` | 1440×900 | Tất cả | Thông báo, đánh dấu đã đọc |
| 8 | `screens/08-403.png` | 1440×900 | Tất cả | Lỗi phân quyền |
| 9 | `screens/09-404.png` | 1440×900 | Tất cả | Không tìm thấy trang |
| 10 | `screens/10-farmer-dashboard.png` | 1440×1010 | Nông dân | Tổng quan mùa vụ |
| 11 | `screens/11-farmer-field-log.png` | 1440×1602 | Nông dân | Nhật ký đồng ruộng + thư viện ảnh |
| 12 | `screens/12-farmer-help-request.png` | 1440×926 | Nông dân | Danh sách yêu cầu hỗ trợ |
| 13 | `screens/13-expert-queue.png` | 1440×1864 | Chuyên gia | Hàng đợi yêu cầu |
| 14 | `screens/14-expert-detail-ai3.png` | 1440×1902 | Chuyên gia | Chi tiết yêu cầu + kết quả AI-3 |
| 15 | `screens/15-expert-resource-library.png` | 1440×1022 | Chuyên gia | Thư viện tài nguyên |
| 16 | `screens/16-coordinator-overview.png` | 1440×1346 | Điều phối HTX | Tổng quan nông hộ |
| 17 | `screens/17-coordinator-calendar.png` | 1440×900 | Điều phối HTX | Lịch hoạt động HTX |
| 18 | `screens/18-coordinator-season-summary.png` | 1440×1253 | Điều phối HTX | Báo cáo tổng kết mùa vụ |
| 19 | `screens/19-admin-dashboard.png` | 1440×1595 | Quản trị viên | Dashboard hệ thống |
| 20 | `screens/20-admin-crop-management.png` | 1440×900 | Quản trị viên | Danh mục cây trồng |
| 21 | `screens/21-admin-user-management.png` | 1440×1015 | Quản trị viên | Quản lý tài khoản |

### 1.3. Trạng thái AI (bắt buộc theo đề bài)

| Tệp | Kích thước | Nội dung |
|---|---|---|
| `screens/10b-farmer-dashboard-ai2.png` | 1440×1300 | AI-2 tạo checklist thành công |
| `screens/10c-farmer-dashboard-ai2-error.png` | 1440×1060 | AI-2 lỗi mạng + Thử lại / Dùng thủ công |
| `screens/12b-ai1-classifier.png` | 1440×1000 | AI-1 phân loại thành công trong modal |
| `screens/12c-ai1-classifier-error.png` | 1440×1000 | AI-1 lỗi mạng + Thử lại / Dùng thủ công |
| `screens/14-expert-detail-ai3.png` | 1440×1902 | AI-3 tóm tắt nhật ký thành công |
| `screens/14b-expert-detail-ai3-error.png` | 1440×900 | AI-3 lỗi mạng + Thử lại |

### 1.4. Mobile

| Tệp | Kích thước | Nội dung |
|---|---|---|
| `screens/m1-mobile-farmer-dashboard.png` | 390×844 | Dashboard nông dân trên di động |
| `screens/m2-mobile-login.png` | 390×1044 | Đăng nhập trên di động |

---

## 2. Quy ước đặt tên

- Số đầu khớp với **bảng kiểm kê màn hình** trong `docs/screen-list.md` (1–21).
- Hậu tố `b` / `c` là **trạng thái bổ sung** của cùng màn hình: `b` = AI thành công, `c` = AI thất bại.
- `m1`, `m2` là ảnh mobile; `00` là bìa và design system.

Khi đặt tên frame trong Figma, dùng cùng số thứ tự để đối chiếu với báo cáo, ví dụ: `12 · Farmer – Help Request`.

---

## 3. Đưa bộ ảnh lên Figma (10–15 phút)

### Bước 1 – Tạo file

1. Mở **https://www.figma.com** → đăng nhập (gói Free là đủ).
2. Ở trang **Drafts**, bấm **+ New design file**.
3. Bấm vào tên file trên thanh trên cùng, đổi thành: `CropMate AI – UI/UX Mockup (BTL-04)`.

### Bước 2 – Tạo 3 page

Ở panel trái, mục **Pages**, bấm dấu **+** ba lần và đổi tên:

1. `00 – Bìa & Design System`
2. `01 – Desktop (21 màn hình)`
3. `02 – AI states & Mobile`

> Muốn đổi tên page: double-click vào tên page trong panel trái.

### Bước 3 – Nhập ảnh

1. Mở thư mục `design/figma/screens` bằng File Explorer.
2. Chọn các ảnh cần nhập, kéo thả vào canvas Figma.
3. Với **từng ảnh**, bấm chọn ảnh → nhấn `Ctrl + Alt + G` (Windows) để bọc ảnh trong một frame. Frame sẽ tự có đúng kích thước ảnh.
4. Double-click tên frame ở panel trái và đặt theo quy ước, ví dụ `01 · Landing`.

> Có thể nhập nhiều ảnh cùng lúc. Figma xếp chúng thành một hàng ngang; sau đó kéo từng frame vào vị trí.

**Cách nhanh hơn nếu không cần frame:** kéo ảnh trực tiếp, đổi tên layer trong panel **Layers**. Ảnh đã đúng kích thước nên vẫn dùng để trình bày được; chỉ là thiếu khung frame.

### Bước 4 – Sắp xếp

1. Page `00`: đặt `00-cover` và `00-design-system` cạnh nhau.
2. Page `01`: xếp 21 ảnh theo thứ tự 01 → 21, mỗi ảnh cách nhau khoảng **80px** theo chiều dọc. Có thể chia thành 5 nhóm và thêm text tiêu đề:
   - Khách & tài khoản: 01–09
   - Nông dân: 10–12
   - Chuyên gia: 13–15
   - Điều phối HTX: 16–18
   - Quản trị viên: 19–21
3. Page `02`: đặt 6 ảnh trạng thái AI và 2 ảnh mobile. Mobile đặt trong frame điện thoại nếu muốn (Figma có plugin "Device Mockups", không bắt buộc).
4. Nhấn `Shift + 1` để zoom vừa toàn bộ nội dung.

**Thêm nhãn trên canvas:** nhấn `T`, bấm vào canvas, gõ tên màn hình; đặt phía trên mỗi frame. Chỉ cần nhãn cho các nhóm và 3 tính năng AI, không cần 30 nhãn.

### Bước 5 – Thêm luồng người dùng (khuyến nghị)

Cách dễ nhất là dùng **FigJam**:

1. Trong Figma, bấm **New** → **FigJam board**.
2. Tạo 5 sticky note cho 5 nhóm: Khách, Nông dân, Chuyên gia, Điều phối HTX, Quản trị viên.
3. Ghi các bước chính (lấy từ `docs/screen-list.md` mục 2) và nối bằng mũi tên.
4. Đặt tên board: `CropMate AI – User Flow`.

Không cần nối prototype từng màn hình; ảnh mockup + FigJam là đủ minh chứng.

### Bước 6 – Chia sẻ link

1. Bấm nút **Share** ở góc phải trên.
2. Chọn **Anyone with the link** → quyền **Can view**.
3. Bấm **Copy link**.
4. Dán link vào `design/figma-link.txt` (mục "Mockup desktop + responsive").
5. Nếu có link FigJam, dán vào mục "Sơ đồ trang + luồng người dùng".

> Không để chế độ "Only people invited" vì giảng viên sẽ không mở được.

---

## 4. Mẹo trình bày

- **Không kéo giãn ảnh** để vừa frame; ảnh đã đúng tỉ lệ. Nếu cần thu nhỏ để xem, dùng zoom của Figma, không scale layer.
- Bật **Clip content** cho frame nếu ảnh dài hơn khung.
- Ảnh full-page khá dài (`01-landing` 2255px, `14-expert-detail-ai3` 1902px). Giữ nguyên để thấy đủ nội dung; khi trình bày chỉ cần zoom vào phần chính.
- Có thể đổi màu nền page sang `#F4F7F3` để ảnh nổi bật.
- Nếu muốn nhập giao diện đang chạy thay vì ảnh: cài plugin **html.to.design**, nhưng cần URL công khai (GitHub Pages). Cách này không cần thiết cho bài nộp.

---

## 5. Checklist trước khi nộp

- [ ] Đã tạo file Figma và nhập đủ **21 màn hình**.
- [ ] Có **3 ảnh AI thành công** và **3 ảnh AI thất bại** (Thử lại / Dùng thủ công).
- [ ] Có **2 ảnh mobile** 390px.
- [ ] Có bìa + design system.
- [ ] Đã dán link vào `design/figma-link.txt` và cập nhật bảng trong README.
- [ ] Link chia sẻ ở chế độ **Anyone with the link – Can view**.
- [ ] Tên frame khớp số thứ tự trong `docs/screen-list.md`.

---

## 6. Vì sao dùng ảnh chụp giao diện thật?

- Chữ tiếng Việt có dấu hiển thị chính xác, không bị lỗi font như khi vẽ lại.
- Màu sắc, khoảng cách, component khớp tuyệt đối với bản code mà giảng viên sẽ chạy thử.
- Thể hiện được cả trạng thái động: kết quả AI, lỗi mạng, modal, responsive.
- Trong quá trình chụp, nhóm đã phát hiện và sửa 4 lỗi giao diện thật: icon kết quả AI bị phóng to, icon ảnh trong nhật ký bị phóng to, thiếu logo trên mobile, nút CTA cuối trang bị chìm màu. Đây là minh chứng cho bước kiểm thử UI.

Nếu sau này sửa giao diện, chụp lại ảnh tương ứng và thay file trong `screens/`; không cần tạo lại toàn bộ bộ ảnh.
