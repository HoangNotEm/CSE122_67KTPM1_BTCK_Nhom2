# Quy trình Git/GitHub – CropMate AI

## 1. Repo
Repo nhóm: `CSE122_67KTPM1_BTCK_Nhom2` – https://github.com/HoangNotEm/CSE122_67KTPM1_BTCK_Nhom2

Cấu trúc chuẩn: landing `index.html` ở gốc; 20 màn hình còn lại trong `pages/`; dùng chung `css/`, `js/`, `assets/`.

## 2. Chiến lược nhánh
```text
main        ← chỉ nhận merge từ dev sau khi test tích hợp xong
dev         ← nhánh tích hợp, mọi PR merge vào đây
feature/<feature-name>
fix/<bug-name>
docs/<document-name>
```

Các nhánh đã tạo cho đồ án:
```text
feature/farmer-screens              → SV1: nông dân + login/register/notifications
feature/expert-screens              → SV2: chuyên gia + forgot-password/profile/settings
feature/coordinator-admin-screens   → SV3: điều phối + quản trị + landing/403/404
```

Ví dụ: `feature/farmer-season-dashboard`, `feature/expert-request-queue`, `feature/admin-user-management`, `fix/help-request-validation`.

## 3. Quy trình bắt buộc cho mỗi màn hình
```text
Trello (task ở CẦN LÀM)
→ kéo sang ĐANG LÀM
→ git checkout -b feature/<ten-man-hinh> từ dev
→ viết mã
→ commit đúng quy ước (không dùng update/done/final)
→ git push + tạo PR vào dev, gắn link task Trello
→ SV kia review chéo (checklist: design system, trạng thái rỗng/loading, validation, console sạch)
→ merge dev → kéo task CHỜ DUYỆT → HOÀN THÀNH kèm link PR + link OBS
```

## 4. Quy ước commit
```text
feat: ...    | fix: ...   | style: ... | refactor: ... | docs: ...
```
**Cấm:** `update`, `done`, `final`, `fix code`. Không spam commit — mỗi commit là một thay đổi hoàn chỉnh, có thể vẽ lại quan hệ Task ↔ Nhánh ↔ Commit ↔ PR ↔ Review ↔ Màn hình ↔ OBS.

## 5. Review checklist (dùng trong mỗi PR)
- [ ] Đúng tên tệp theo bảng kiểm kê
- [ ] Dùng đúng design system (class, token, header/sidebar)
- [ ] Có trạng thái rỗng; đang tải/lỗi khi hợp lý
- [ ] Form có validation
- [ ] Dữ liệu render từ mock API (không hard-code rải rác)
- [ ] Responsive không vỡ layout
- [ ] Không lỗi console; label/alt/aria đầy đủ
