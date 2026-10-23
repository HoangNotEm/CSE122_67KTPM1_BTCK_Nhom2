/* ============================================================
   CropMate AI – UI helpers (modules/ui.js)
   Toast, modal, badge, validation, tab, placeholder ảnh, v.v.
   ============================================================ */
window.CM = window.CM || {};

CM.ui = (function () {

  /* ---------- Icon SVG (stroke, 24 viewBox, feather-like) ---------- */
  const P = {
    check:    '<polyline points="20 6 9 17 4 12"/>',
    x:        '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    alert:    '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    info:     '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    search:   '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    inbox:    '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.5 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.7 4H7.3a2 2 0 0 0-1.8 1.1z"/>',
    book:     '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    file:     '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
    trash:    '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    edit:     '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4z"/>',
    eye:      '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    users:    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    leaf:     '<path d="M6 21c0-9 4-15 14-16-1 10-5 15-14 16z"/><path d="M6 21c3-6 7-9 11-11"/>',
    sprout:   '<path d="M12 21v-8"/><path d="M12 13c0-4 3-7 8-7 0 4-3 7-8 7z"/><path d="M12 13c0-3-2.5-5-6-5 0 3 2.5 5 6 5z"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 1.9-.3h0a1.7 1.7 0 0 0 1 1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    bell:     '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
    logout:   '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
    chart:    '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
    menu:     '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
    plus:     '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    image:    '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    grid:     '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    shield:   '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    clock:    '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    send:     '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
    ban:      '<circle cx="12" cy="12" r="10"/><line x1="4.9" y1="4.9" x2="19.1" y2="19.1"/>',
    archive:  '<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>',
    refresh:  '<polyline points="23 4 23 10 17 10"/><path d="M20.5 15a9 9 0 1 1-2-9.4L23 10"/>',
    mapPin:   '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    home:     '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    filter:   '<polygon points="22 3 2 3 10 12.5 10 19 14 21 14 12.5 22 3"/>',
    arrowL:   '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
    camera:   '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>'
  };
  function icon(name, attrs) {
    const body = P[name] || P.info;
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ' + (attrs || '') + '>' + body + '</svg>';
  }

  /* ---------- Toast ---------- */
  function ensureToastZone() {
    let zone = document.querySelector('.toast-zone');
    if (!zone) { zone = document.createElement('div'); zone.className = 'toast-zone'; zone.setAttribute('aria-live', 'polite'); document.body.appendChild(zone); }
    return zone;
  }
  function toast(message, type) {
    type = type || 'success';
    const iconName = { success: 'check', error: 'x', warning: 'alert', info: 'info' }[type] || 'info';
    const el = document.createElement('div');
    el.className = 'toast toast--' + type;
    el.setAttribute('role', 'status');
    el.innerHTML = icon(iconName) + '<div>' + message + '</div>';
    ensureToastZone().appendChild(el);
    setTimeout(function () {
      el.classList.add('is-leaving');
      setTimeout(function () { el.remove(); }, 260);
    }, 3400);
  }

  /* ---------- Modal ---------- */
  function openModal(opts) {
    closeModal();
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.id = 'cm-modal';
    backdrop.innerHTML =
      '<div class="modal ' + (opts.size === 'lg' ? 'modal--lg' : opts.size === 'sm' ? 'modal--sm' : '') + '" role="dialog" aria-modal="true" aria-label="' + (opts.title || 'Hộp thoại') + '">' +
        '<div class="modal__head"><h3>' + (opts.title || '') + '</h3>' +
        '<button type="button" class="modal__close" data-close aria-label="Đóng">' + icon('x') + '</button></div>' +
        '<div class="modal__body">' + (opts.body || '') + '</div>' +
        (opts.footer ? '<div class="modal__foot">' + opts.footer + '</div>' : '') +
      '</div>';
    document.body.appendChild(backdrop);
    requestAnimationFrame(function () { backdrop.classList.add('is-open'); });
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop || e.target.closest('[data-close]')) closeModal();
    });
    document.addEventListener('keydown', escClose);
    const first = backdrop.querySelector('input, select, textarea, button:not(.modal__close)');
    if (first) first.focus();
    return backdrop;
  }
  function escClose(e) { if (e.key === 'Escape') closeModal(); }
  function closeModal() {
    const m = document.getElementById('cm-modal');
    if (m) { m.remove(); document.removeEventListener('keydown', escClose); }
  }
  /* Hộp xác nhận "Bạn chắc chắn?" - trả về Promise để trang gọi có thể
     viết: CM.ui.confirmModal({...}).then(function (ok) { if (ok) ... }) */
  function confirmModal(opts) {
    return new Promise(function (resolve) {
      const bd = openModal({
        title: opts.title || 'Xác nhận',
        size: 'sm',
        body: '<p class="mt-0">' + (opts.message || 'Bạn chắc chắn?') + '</p>',
        footer: '<button type="button" class="btn btn--secondary" data-close>Hủy</button>' +
                '<button type="button" class="btn ' + (opts.danger ? 'btn--danger' : 'btn--primary') + '" data-ok>' + (opts.okText || 'Đồng ý') + '</button>'
      });
      bd.querySelector('[data-ok]').addEventListener('click', function () { closeModal(); resolve(true); });
      bd.addEventListener('click', function (e) {
        if (e.target === bd || e.target.closest('[data-close]')) setTimeout(function () { resolve(false); }, 0);
      });
    });
  }

  /* ---------- Badge trạng thái ---------- */
  const STATUS = {
    active:    { label: 'Hoạt động',     cls: 'success' },
    ongoing:   { label: 'Đang diễn ra',  cls: 'info' },
    completed: { label: 'Hoàn thành',    cls: 'success' },
    scheduled: { label: 'Đã lên lịch',   cls: 'info' },
    pending:   { label: 'Đang chờ',      cls: 'warning' },
    assigned:  { label: 'Đang xử lý',    cls: 'info' },
    resolved:  { label: 'Đã tư vấn',     cls: 'success' },
    rejected:  { label: 'Bị từ chối',    cls: 'danger' },
    cancelled: { label: 'Đã hủy',        cls: 'neutral' },
    locked:    { label: 'Đã khóa',       cls: 'danger' },
    archived:  { label: 'Đã lưu trữ',    cls: 'neutral' },
    high:      { label: 'Ưu tiên cao',   cls: 'danger' },
    medium:    { label: 'Ưu tiên trung bình', cls: 'warning' },
    low:       { label: 'Ưu tiên thấp',  cls: 'neutral' }
  };
  function badge(status) {
    const s = STATUS[status] || { label: status, cls: 'neutral' };
    return '<span class="badge badge--' + s.cls + '">' + s.label + '</span>';
  }
  function statusLabel(status) { return (STATUS[status] || { label: status }).label; }

  /* ---------- Ngày tháng ---------- */
  function fmtDate(iso) {
    if (!iso) return '—';
    const d = new Date(iso.length === 10 ? iso + 'T00:00:00' : iso);
    if (isNaN(d)) return iso;
    return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }
  function fmtDateTime(iso) {
    if (!iso) return '—';
    const d = new Date(iso);
    if (isNaN(d)) return iso;
    return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' ' +
           d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  }
  function todayISO() { return new Date().toISOString().slice(0, 10); }

  /* ---------- Ảnh placeholder (SVG data URI, không cần file thật) ----------
     Thay vì chụp ảnh ruộng thật, ta tạo ảnh SVG ngay trong code rồi đổi
     sang dạng data URI để gán vào thuộc tính src. Nhờ vậy repo không
     cần thư mục ảnh nặng mà giao diện vẫn có ảnh minh họa. */
  const PALETTE = [['#2e7d32', '#a5d6a7'], ['#0277bd', '#90caf9'], ['#b26a00', '#ffe082'], ['#6a1b9a', '#ce93d8'], ['#c62828', '#ef9a9a'], ['#00695c', '#80cbc4']];
  function placeholder(label, seed, w, h) {
    w = w || 400; h = h || 300;
    const pair = PALETTE[(seed || 0) % PALETTE.length];
    const text = String(label || 'Ảnh hiện trường').replace(/[<>&"]/g, '');
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="' + pair[0] + '"/><stop offset="1" stop-color="' + pair[1] + '"/></linearGradient></defs>' +
      '<rect width="100%" height="100%" fill="url(#g)"/>' +
      '<g fill="rgba(255,255,255,.25)"><circle cx="' + (w * 0.8) + '" cy="' + (h * 0.25) + '" r="' + (w * 0.16) + '"/></g>' +
      '<text x="50%" y="52%" font-family="Segoe UI, Arial" font-size="' + Math.round(w / 16) + '" fill="#fff" text-anchor="middle" font-weight="600">' + text + '</text>' +
      '<text x="50%" y="64%" font-family="Segoe UI, Arial" font-size="' + Math.round(w / 26) + '" fill="rgba(255,255,255,.85)" text-anchor="middle">CropMate AI</text>' +
      '</svg>';
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  }

  /* ---------- Trạng thái rỗng / lỗi / loading ---------- */
  function emptyState(opts) {
    return '<div class="state">' +
      '<div class="state__icon ' + (opts.tone === 'error' ? 'state__icon--error' : opts.tone === 'neutral' ? 'state__icon--neutral' : '') + '">' + icon(opts.icon || 'inbox') + '</div>' +
      '<h3>' + (opts.title || 'Chưa có dữ liệu') + '</h3>' +
      '<p>' + (opts.desc || '') + '</p>' +
      (opts.action || '') + '</div>';
  }
  function errorState(message, retryAttr) {
    return emptyState({ icon: 'alert', tone: 'error', title: 'Có lỗi xảy ra', desc: message || 'Không tải được dữ liệu.', action: '<button type="button" class="btn btn--secondary" ' + (retryAttr || 'data-retry') + '>' + icon('refresh') + ' Thử lại</button>' });
  }
  function skeletonList(n) {
    let out = '';
    for (let i = 0; i < (n || 3); i++) out += '<div class="skeleton skeleton--card" style="margin-bottom:12px"></div>';
    return out;
  }

  /* ---------- Form & validation ---------- */
  const RULES = {
    required: function (v) { return v.trim() ? '' : 'Trường này không được để trống.'; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Email không hợp lệ.'; },
    phone: function (v) { return /^(0|\+84)[\s.\d]{8,12}$/.test(v.trim()) ? '' : 'Số điện thoại không hợp lệ (VD: 0901 234 567).'; },
    min20: function (v) { return v.trim().length >= 20 ? '' : 'Cần ít nhất 20 ký tự để hệ thống hiểu rõ vấn đề.'; },
    number: function (v) { return v === '' || !isNaN(Number(v)) ? '' : 'Phải là số.'; },
    date: function (v) { return /^\d{4}-\d{2}-\d{2}$/.test(v) ? '' : 'Ngày không hợp lệ.'; }
  };
  /* data-rules="required|email" trên input; hiển thị .field__error trong .field */
  function validateField(input) {
    const field = input.closest('.field');
    if (!field) return true;
    const names = (input.dataset.rules || '').split('|').filter(Boolean);
    let msg = '';
    for (const name of names) {
      if (input.disabled) continue;
      if (name.startsWith('min')) { msg = vMin(input.value, parseInt(name.slice(3), 10)); }
      else if (RULES[name]) msg = RULES[name](input.value);
      if (msg) break;
    }
    field.classList.toggle('has-error', !!msg);
    const errEl = field.querySelector('.field__error');
    if (errEl) errEl.textContent = msg;
    return !msg;
  }
  function vMin(v, n) { return v.trim().length >= n ? '' : 'Cần ít nhất ' + n + ' ký tự.'; }
  function validateForm(form) {
    const inputs = form.querySelectorAll('[data-rules]');
    let ok = true, first = null;
    inputs.forEach(function (i) { if (!validateField(i)) { ok = false; first = first || i; } });
    if (first) first.focus();
    return ok;
  }
  function serializeForm(form) {
    const out = {};
    form.querySelectorAll('input, select, textarea').forEach(function (el) {
      if (!el.name || el.type === 'file') return;
      if (el.type === 'checkbox') out[el.name] = el.checked;
      else out[el.name] = el.value;
    });
    return out;
  }
  function bindLiveValidation(form) {
    form.querySelectorAll('[data-rules]').forEach(function (el) {
      el.addEventListener('blur', function () { validateField(el); });
      el.addEventListener('input', function () { if (el.closest('.field').classList.contains('has-error')) validateField(el); });
    });
  }

  /* ---------- Tabs ----------
     Cấu trúc: wrapper [data-tabs-scope]
       > .tabs[data-tabs] > .tabs__btn[data-tab="<id>"]
       > .tab-pane[data-pane="<id>"]                                   */
  function initTabs(root) {
    (root || document).querySelectorAll('[data-tabs]').forEach(function (tabs) {
      const scope = tabs.closest('[data-tabs-scope]') || tabs.parentElement;
      const btns = tabs.querySelectorAll('.tabs__btn');
      btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          btns.forEach(function (b) { b.classList.remove('is-active'); b.setAttribute('aria-selected', 'false'); });
          btn.classList.add('is-active'); btn.setAttribute('aria-selected', 'true');
          const paneId = btn.getAttribute('data-tab');
          scope.querySelectorAll('.tab-pane').forEach(function (p) {
            p.classList.toggle('is-active', p.getAttribute('data-pane') === paneId);
          });
        });
      });
    });
  }

  /* ---------- Khác ---------- */
  /* Chống gõ phím liên tục làm tìm kiếm chạy quá nhiều lần:
     chỉ chạy hàm fn sau khi người dùng ngừng gõ ms mili giây */
  function debounce(fn, ms) {
    let timer;
    return function () {
      const args = arguments, self = this;
      clearTimeout(timer);
      timer = setTimeout(function () { fn.apply(self, args); }, ms || 250);
    };
  }
  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }
  function initials(name) {
    return String(name || '?').trim().split(/\s+/).map(function (w) { return w[0]; }).slice(0, 2).join('').toUpperCase();
  }

  return {
    icon: icon, toast: toast, openModal: openModal, closeModal: closeModal, confirmModal: confirmModal,
    badge: badge, statusLabel: statusLabel,
    fmtDate: fmtDate, fmtDateTime: fmtDateTime, todayISO: todayISO,
    placeholder: placeholder, emptyState: emptyState, errorState: errorState, skeletonList: skeletonList,
    validateForm: validateForm, validateField: validateField, serializeForm: serializeForm, bindLiveValidation: bindLiveValidation,
    initTabs: initTabs, debounce: debounce, escapeHtml: escapeHtml, initials: initials
  };
})();
