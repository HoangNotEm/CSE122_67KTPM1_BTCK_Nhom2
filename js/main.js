/* ============================================================
   CropMate AI – main.js
   Tự dựng topbar + sidebar theo vai trò (body[data-role]),
   bảo vệ trang theo phiên đăng nhập, đổi vai trò nhanh (demo).
   Trang public (không có data-role) không bị ảnh hưởng.
   ============================================================ */
(function () {
  const ROLE_META = {
    farmer:      { label: 'Nông dân',        icon: 'sprout' },
    expert:      { label: 'Chuyên gia',      icon: 'leaf' },
    coordinator: { label: 'Điều phối HTX',   icon: 'users' },
    admin:       { label: 'Quản trị viên',   icon: 'shield' }
  };

  const NAV = {
    farmer: [
      { href: 'farmer-season-dashboard.html', icon: 'grid',    label: 'Tổng quan mùa vụ' },
      { href: 'farmer-field-log.html',        icon: 'file',    label: 'Nhật ký đồng ruộng' },
      { href: 'farmer-help-request.html',     icon: 'inbox',   label: 'Yêu cầu hỗ trợ' }
    ],
    expert: [
      { href: 'expert-request-queue.html',    icon: 'inbox',   label: 'Hàng đợi yêu cầu' },
      { href: 'expert-resource-library.html', icon: 'book',    label: 'Thư viện tài nguyên' }
    ],
    coordinator: [
      { href: 'coordinator-farm-overview.html',  icon: 'users',    label: 'Tổng quan nông hộ' },
      { href: 'coordinator-calendar.html',       icon: 'calendar', label: 'Lịch HTX' },
      { href: 'coordinator-season-summary.html', icon: 'chart',    label: 'Báo cáo mùa vụ' }
    ],
    admin: [
      { href: 'admin-dashboard.html',        icon: 'grid',  label: 'Dashboard hệ thống' },
      { href: 'admin-crop-management.html',  icon: 'leaf',  label: 'Danh mục cây trồng' },
      { href: 'admin-user-management.html',  icon: 'users', label: 'Quản lý tài khoản' }
    ]
  };
  const PERSONAL = [
    { href: 'profile.html',       icon: 'edit', label: 'Hồ sơ cá nhân' },
    { href: 'notifications.html', icon: 'bell', label: 'Thông báo', badge: true },
    { href: 'settings.html',      icon: 'settings', label: 'Cài đặt' }
  ];

  document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const bodyRole = body.getAttribute('data-role');
    if (!bodyRole) return; /* trang public: main.js không can thiệp */
    const page = body.getAttribute('data-page') || location.pathname.split('/').pop();

    /* ----- Bảo vệ trang ----- */
    const me = CM.api.current();
    if (!me) {
      location.href = 'login.html?next=' + encodeURIComponent(page);
      return;
    }
    /* data-role="*" : trang cá nhân dùng chung cho mọi vai trò (profile/settings/notifications) */
    const role = bodyRole === '*' ? me.role : bodyRole;
    if (me.role !== role) {
      location.href = '403.html?from=' + encodeURIComponent(page) + '&need=' + role;
      return;
    }

    renderChrome(me, role, page);
    initDrawer();
    markActive(page);
  });

  /* ================= Chrome: topbar + sidebar ================= */
  function renderChrome(me, role, page) {
    const ui = CM.ui;
    const meta = ROLE_META[role];
    const unread = CM.api.read('notifications').filter(function (n) { return n.userId === me.id && !n.read; }).length;

    const navLinks = (NAV[role] || []).map(function (l) {
      return '<a class="nav-link" href="' + l.href + '" data-nav="' + l.href + '">' + ui.icon(l.icon) + '<span>' + l.label + '</span></a>';
    }).join('');
    const personalLinks = PERSONAL.map(function (l) {
      return '<a class="nav-link" href="' + l.href + '" data-nav="' + l.href + '">' + ui.icon(l.icon) + '<span>' + l.label + '</span>' +
        (l.badge && unread ? '<span class="badge badge--danger" style="margin-left:auto">' + unread + '</span>' : '') + '</a>';
    }).join('');

    const roleSwitch = Object.keys(ROLE_META).map(function (r) {
      return '<button type="button" class="dropdown__item" data-switch-role="' + r + '">' + ui.icon(ROLE_META[r].icon) + ' ' + ROLE_META[r].label +
        (r === role ? ' <span class="badge badge--success" style="margin-left:auto">Đang dùng</span>' : '') + '</button>';
    }).join('');

    const chrome = document.createElement('div');
    chrome.innerHTML =
      '<a class="skip-link" href="#main">Bỏ qua điều hướng</a>' +
      '<header class="topbar">' +
        '<button type="button" class="topbar__burger" id="burger" aria-label="Mở menu">' + ui.icon('menu') + '</button>' +
        '<a class="brand" href="index.html"><span class="brand__logo">' + ui.icon('sprout') + '</span><span>CropMate AI</span></a>' +
        '<span class="topbar__spacer"></span>' +
        '<span class="role-badge">' + ui.icon(meta.icon) + ' ' + meta.label + '</span>' +
        '<a class="icon-btn" href="notifications.html" aria-label="Thông báo">' + ui.icon('bell') + (unread ? '<span class="icon-btn__dot">' + unread + '</span>' : '') + '</a>' +
        '<div class="dropdown" data-dropdown>' +
          '<button type="button" class="avatar-btn" data-dropdown-toggle aria-haspopup="true" aria-expanded="false">' +
            '<span class="avatar">' + ui.initials(me.name) + '</span><span class="avatar-btn__name small">' + ui.escapeHtml(me.name.split(' ').pop()) + '</span>' +
          '</button>' +
          '<div class="dropdown__menu">' +
            '<div class="dropdown__label">' + ui.escapeHtml(me.name) + '</div>' +
            '<a class="dropdown__item" href="profile.html">' + ui.icon('edit') + ' Hồ sơ cá nhân</a>' +
            '<a class="dropdown__item" href="settings.html">' + ui.icon('settings') + ' Cài đặt</a>' +
            '<div class="dropdown__sep"></div>' +
            '<div class="dropdown__label">Đổi vai trò (demo)</div>' + roleSwitch +
            '<div class="dropdown__sep"></div>' +
            '<button type="button" class="dropdown__item" id="btn-logout">' + ui.icon('logout') + ' Đăng xuất</button>' +
          '</div>' +
        '</div>' +
      '</header>' +
      '<div class="app-shell">' +
        '<aside class="sidebar" id="sidebar" aria-label="Điều hướng chính">' +
          '<nav class="sidebar__group"><div class="sidebar__title">Nghiệp vụ</div>' + navLinks + '</nav>' +
          '<nav class="sidebar__group"><div class="sidebar__title">Cá nhân</div>' + personalLinks + '</nav>' +
          '<div class="sidebar__group"><p class="small muted" style="padding:0 12px">Nguyên mẫu CSE122 · dữ liệu mô phỏng LocalStorage</p></div>' +
        '</aside>' +
        '<div class="sidebar__overlay" id="sidebar-overlay"></div>' +
      '</div>';

    /* Chèn topbar + mở app-shell bọc <main> có sẵn của trang */
    const main = document.getElementById('main') || document.querySelector('main');
    main.classList.add('main');
    main.id = 'main';
    main.setAttribute('tabindex', '-1');

    document.body.prepend(chrome.querySelector('.topbar'));
    document.body.prepend(chrome.querySelector('.skip-link'));
    const shell = chrome.querySelector('.app-shell');
    main.replaceWith(shell);
    shell.appendChild(main);

    /* Dropdown avatar */
    const dd = document.querySelector('[data-dropdown]');
    dd.querySelector('[data-dropdown-toggle]').addEventListener('click', function (e) {
      e.stopPropagation();
      dd.classList.toggle('is-open');
      this.setAttribute('aria-expanded', dd.classList.contains('is-open'));
    });
    document.addEventListener('click', function (e) { if (!dd.contains(e.target)) dd.classList.remove('is-open'); });

    /* Đổi vai trò / đăng xuất */
    document.querySelectorAll('[data-switch-role]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        CM.api.switchRole(btn.getAttribute('data-switch-role'));
        const target = ((NAV[btn.getAttribute('data-switch-role')] || [])[0] || {}).href || 'index.html';
        location.href = target;
      });
    });
    document.getElementById('btn-logout').addEventListener('click', function () {
      CM.api.logout(); location.href = 'login.html';
    });
  }

  function markActive(page) {
    document.querySelectorAll('[data-nav]').forEach(function (a) {
      if (a.getAttribute('data-nav') === page) a.classList.add('is-active');
    });
  }

  /* ----- Drawer mobile ----- */
  function initDrawer() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (!sidebar) return;
    document.getElementById('burger').addEventListener('click', function () {
      sidebar.classList.toggle('is-open'); overlay.classList.toggle('is-open');
    });
    overlay.addEventListener('click', function () {
      sidebar.classList.remove('is-open'); overlay.classList.remove('is-open');
    });
    sidebar.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { sidebar.classList.remove('is-open'); overlay.classList.remove('is-open'); });
    });
  }
})();
