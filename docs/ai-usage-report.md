# Báo cáo sử dụng AI – CropMate AI

> Nhóm 2 – 67KTPM1 · Cập nhật lần cuối: **25/10/2026**.
> Báo cáo mô tả đúng phần AI đã hỗ trợ trong quá trình làm BTL-04.

## 1. Công cụ AI đã dùng

| Công cụ | Mục đích | Phạm vi dùng |
|---|---|---|
| **Qoder** (AI coding assistant) | Khởi tạo khung dự án, design system CSS, mock data + API LocalStorage, 21 trang HTML/CSS/JS, engine AI rule-based, rà soát đề bài và tài liệu | Toàn bộ mã nguồn và tài liệu trong repo |
| **browser-use** (công cụ kiểm thử trong Qoder) | Mở trang bằng trình duyệt tự động, thao tác form, kiểm tra console, chụp trạng thái | Kiểm thử AI-2, AI-3 và các luồng chính |

Nhóm **không** dùng thêm ChatGPT/Claude/Gemini/Copilot cho mã nguồn. Nếu thành viên có dùng công cụ khác khi ôn tập/làm báo cáo, bổ sung vào bảng này trước khi nộp.

## 2. Câu lệnh (prompt) chính

1. "Đọc file đề BTL-04 CropMate AI và lập bảng kiểm kê màn hình đầy đủ 4 vai trò, kèm mục tiêu/nhiệm vụ/CRUD/trạng thái/AI."
2. "Dựng design system CSS dùng chung (token màu xanh nông nghiệp, header/sidebar, card, table, form, modal, toast) cho prototype mở bằng `file://`, không dùng ES module."
3. "Viết mock data + API LocalStorage giả lập độ trễ cho các entity farms/fields/seasons/fieldLogs/helpRequests/resources/users/crops; code theo văn phong sinh viên năm 2, chú thích tiếng Việt."
4. "Triển khai `pages/farmer-season-dashboard.html` với AI-2 Season Checklist Generator đủ chu trình Nhập → Xử lý → Kết quả → Giải thích → Chấp nhận/Sửa/Từ chối/Tạo lại/Lưu, kèm trạng thái thất bại."
5. "Triển khai `pages/expert-request-detail.html` với AI-3 Farm Log Summarizer, lưu tóm tắt vào đúng yêu cầu và hiển thị lại sau khi tải trang."
6. "Chỉnh AI-2/AI-3 để kết quả AI thực sự được lưu vào dữ liệu ứng dụng, không chỉ hiện toast rồi mất; đọc lại nội dung người dùng đã sửa trước khi lưu."
7. "Rà lại toàn bộ yêu cầu trong file bài tập lớn, đối chiếu repo xem còn thiếu mục nào."
8. "Sửa bảng kiểm kê màn hình về đúng 12 cột theo đề; đồng bộ Task ID, nhánh Git và tên video OBS giữa README, Trello, roadmap và kịch bản OBS."
9. "Sửa màu chữ nút đăng ký thành màu trắng" và "rút mốc thời gian dự án chỉ đến ngày 26/10 là deadline".

## 3. Phần AI sinh ra

- Khung thư mục, `README.md`, toàn bộ `docs/` (đề xuất, kiểm kê, phân công, roadmap, git workflow, Trello, kịch bản OBS, báo cáo này).
- `css/style.css`, `css/responsive.css`: token màu/typography/spacing và toàn bộ component dùng chung.
- `js/data.js`, `js/api.js`, `js/modules/ui.js`, `js/modules/ai.js`, `js/main.js`.
- 21 file HTML và phần JavaScript tương tác của từng màn hình.
- Rule-based engine mô phỏng AI-1/AI-2/AI-3, gồm các chế độ `ok / insufficient / uncertain / network`.
- Nội dung mockup (tiêu đề, nhãn, dữ liệu mẫu) và 30 ảnh mockup xuất từ HTML để đưa lên Figma.

## 4. Phần sinh viên chỉnh sửa / tự viết

Các thay đổi do nhóm yêu cầu trực tiếp trong quá trình review, được ghi nhận để đối chiếu:

- Đổi màu chữ nút **Đăng ký** sang trắng theo góp ý về tương phản.
- Rút gọn lộ trình 20–26/10 và cập nhật lại mốc deadline 26/10.
- Chốt lại bảng kiểm kê 21 màn hình theo 12 cột, phân công lại 6/6/9 màn hình cho 3 thành viên.
- Yêu cầu sửa AI-2/AI-3 để lưu kết quả thật vào dữ liệu và đọc lại nội dung đã chỉnh.
- Kiểm thử thủ công từng trạng thái, phát hiện lỗi và yêu cầu sửa.

Phần sinh viên **tự viết bổ sung** (ghi rõ trước khi nộp): _(họ tên – nội dung đoạn code/nội dung đã tự sửa, ví dụ: viết lại validation số điện thoại, chỉnh dữ liệu mẫu theo địa phương, tự viết phần ghi chú báo cáo)_.

## 5. Lỗi AI gặp phải & cách khắc phục

| Lỗi | Cách khắc phục |
|---|---|
| AI-2 khi bấm "Chấp nhận & lưu" lại lưu **nội dung gốc** của AI, làm mất phần người dùng đã sửa trong ô `contenteditable` | Đọc lại `textContent` của từng dòng đã tick trước khi lưu; thêm khối "Checklist đã lưu" đọc từ `cropmate_checklists` để kết quả tồn tại sau khi tải lại trang |
| AI-3 chỉ ghi tóm tắt vào một key LocalStorage riêng và **không hiển thị lại**; thiếu nút Sửa/Từ chối | Lưu vào `helpRequests.aiSummary` qua `api.update`, render khối "Tóm tắt đã lưu", bổ sung sửa/từ chối và giữ nguyên ngày lưu |
| AI ghi "Lưu bởi Nguyễn Văn Hùng" trên trang chuyên gia vì dùng chung tài khoản demo | Đổi thành "Lưu vào phiên tư vấn ngày …", bỏ biến người dùng không còn dùng |
| Tài liệu bị lệch nhau: Trello dùng TASK-00…32, roadmap dùng TASK-01…20; tên file `screen-list.md` khác `screen-inventory.md` | Chọn `docs/trello-board.md` làm nguồn Task ID duy nhất, sửa roadmap và mọi liên kết; đổi tên file kiểm kê về `screen-inventory.md` |
| AI đặt tên video OBS không khớp bảng kiểm kê (SV1/SV2/SV3 lệch màn hình) | Đồng bộ lại tên `SVx-XX-screen-name.mp4` theo bảng 12 cột và kịch bản OBS |
| Modal xác nhận chưa giữ focus bên trong (Tab có thể thoát ra ngoài) | Ghi nhận là lỗi a11y còn tồn tại; xử lý bằng `Esc`/nút trong modal khi demo, bổ sung focus trap nếu còn thời gian |

## 6. Cách sinh viên kiểm chứng kết quả AI

- Mở từng trang bằng Chrome/Edge từ `file://`, kiểm tra **Console không có lỗi**.
- Thử đủ trạng thái: đang tải (skeleton) → rỗng → lỗi mạng (bộ chọn mô phỏng) → thành công (toast).
- Thử AI-1/AI-2/AI-3 với 4 chế độ: bình thường, thiếu dữ liệu, AI không chắc chắn, lỗi mạng; kiểm tra Thử lại/Dùng thủ công.
- Kiểm tra kết quả AI **còn nguyên sau khi tải lại trang** (AI-2: checklist đã lưu; AI-3: tóm tắt trong phiên tư vấn).
- Kiểm tra validation: bỏ trống trường bắt buộc, email sai, số điện thoại sai, phản hồi dưới 20 ký tự, lý do từ chối bắt buộc.
- Tắt/bật LocalStorage, xóa dữ liệu và reset tại **Cài đặt → Reset dữ liệu mẫu**.
- Thu nhỏ cửa sổ về 1024 / 768 / 420px, kiểm tra menu drawer, bảng chuyển thành card.
- Đối chiếu từng màn hình với `docs/screen-inventory.md` và kịch bản OBS tương ứng.

## 7. Điều sinh viên học được

- Hiểu chu trình UX bắt buộc cho tính năng AI: nhập → xử lý → kết quả → **giải thích** → người dùng kiểm soát → **lưu vào dữ liệu thật**. Chỉ hiện kết quả đẹp mà không lưu là chưa đạt.
- Biết thiết kế trạng thái thất bại ngay từ đầu (thiếu dữ liệu, không chắc chắn, lỗi mạng) và luôn có đường thoát cho người dùng (thử lại/dùng thủ công).
- Hiểu vai trò của token CSS và component dùng chung: sửa một chỗ, toàn hệ thống đồng bộ.
- Thấy vì sao không nên hard-code dữ liệu vào HTML: mock API + LocalStorage giúp đổi dữ liệu, reset và kiểm thử trạng thái dễ hơn.
- Học cách dùng Git theo nhánh, viết commit đúng quy ước và chuẩn bị minh chứng OBS gắn với Task/nhánh/commit.
- Nhận ra AI có thể tạo ra mã "trông đúng" nhưng sai nghiệp vụ, nên phải đọc lại, chạy thử và kiểm chứng bằng dữ liệu thật.

## 8. Tính năng mock vs API thật

| Tính năng | Loại | Ghi chú |
|---|---|---|
| AI-1 Field Issue Classifier | **Mock** | Rule-based theo từ khóa trong mô tả; độ tin cậy và giải thích được tính từ số từ khóa khớp |
| AI-2 Season Checklist Generator | **Mock** | Template theo cây trồng + giai đoạn; không gọi mô hình ngôn ngữ |
| AI-3 Farm Log Summarizer | **Mock** | Gộp nhật ký theo giai đoạn, sinh gạch đầu dòng + rủi ro + lý do |
| Đăng nhập/đăng ký/quên mật khẩu | Mock | LocalStorage + phiên giả lập, không có máy chủ; mật khẩu bất kỳ |
| CRUD nông hộ/mùa vụ/nhật ký/yêu cầu/tài nguyên/người dùng/cây trồng | Mock | `js/api.js` trên LocalStorage, độ trễ giả lập ~450ms, có `forceFailNext()` |
| Phân quyền theo vai trò | Mock | Kiểm tra phiên ở client, chuyển tới `403.html`; không phải bảo mật thật |
| Xuất CSV báo cáo mùa vụ | Thật (phía trình duyệt) | Tạo `Blob` và tải file, dữ liệu vẫn từ mock API |
| Reset dữ liệu mẫu | Thật (phía trình duyệt) | Xóa LocalStorage và nạp lại seed |
| Gọi LLM/API thật (OpenAI, Gemini…) | **Không sử dụng** | Toàn bộ AI trong bài là mô phỏng rule-based, không có endpoint ngoài |
