/* ============================================================
   CropMate AI – Mock API (api.js)
   CRUD trên LocalStorage, giả lập độ trễ mạng để hiển thị
   trạng thái "đang tải". Không cần máy chủ, chạy qua file://
   ============================================================ */
window.CM = window.CM || {};

CM.api = (function () {
  const DB_KEY = 'cropmate_db_v1';
  const SES_KEY = 'cropmate_session_v1';
  let db = null;

  /* ---------- DB bootstrap ---------- */
  function load() {
    try {
      const raw = localStorage.getItem(DB_KEY);
      if (raw) { db = JSON.parse(raw); return; }
    } catch (e) { /* hỏng thì nạp lại seed */ }
    db = JSON.parse(JSON.stringify(CM.seed));
    save();
  }
  function save() { localStorage.setItem(DB_KEY, JSON.stringify(db)); }

  /* ---------- Giả lập mạng ---------- */
  function delay(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  const DEFAULT_DELAY = 450;

  /* Đặt true trước khi gọi 1 lệnh để mô phỏng lỗi mạng (demo trạng thái lỗi) */
  let forceFailNext = false;
  function maybeFail() {
    if (forceFailNext) { forceFailNext = false; throw new Error('Không thể kết nối máy chủ (mô phỏng lỗi mạng).'); }
  }

  function clone(x) { return JSON.parse(JSON.stringify(x)); }
  function nextId(entity) {
    const prefix = { users: 'u', crops: 'c', farms: 'f', fields: 'd', seasons: 's', fieldLogs: 'l', helpRequests: 'r', resources: 'res', events: 'e', notifications: 'n' }[entity] || 'x';
    const max = (db[entity] || []).reduce(function (m, it) {
      const num = parseInt(String(it.id).replace(prefix, ''), 10);
      return isNaN(num) ? m : Math.max(m, num);
    }, 0);
    return prefix + (max + 1);
  }

  /* ---------- CRUD chung ---------- */
  async function list(entity, opts) {
    opts = opts || {};
    await delay(opts.delay != null ? opts.delay : DEFAULT_DELAY);
    maybeFail();
    return clone(db[entity] || []);
  }
  async function get(entity, id, opts) {
    opts = opts || {};
    await delay(opts.delay != null ? opts.delay : DEFAULT_DELAY);
    maybeFail();
    const it = (db[entity] || []).find(function (x) { return x.id === id; });
    if (!it) throw new Error('Không tìm thấy bản ghi ' + entity + '/' + id);
    return clone(it);
  }
  async function create(entity, data, opts) {
    opts = opts || {};
    await delay(opts.delay != null ? opts.delay : DEFAULT_DELAY);
    maybeFail();
    const it = Object.assign({}, data, { id: nextId(entity) });
    db[entity].unshift(it);
    save();
    return clone(it);
  }
  async function update(entity, id, patch, opts) {
    opts = opts || {};
    await delay(opts.delay != null ? opts.delay : DEFAULT_DELAY);
    maybeFail();
    const idx = (db[entity] || []).findIndex(function (x) { return x.id === id; });
    if (idx < 0) throw new Error('Không tìm thấy bản ghi ' + entity + '/' + id);
    db[entity][idx] = Object.assign({}, db[entity][idx], patch);
    save();
    return clone(db[entity][idx]);
  }
  async function remove(entity, id, opts) {
    opts = opts || {};
    await delay(opts.delay != null ? opts.delay : DEFAULT_DELAY);
    maybeFail();
    const idx = (db[entity] || []).findIndex(function (x) { return x.id === id; });
    if (idx < 0) throw new Error('Không tìm thấy bản ghi ' + entity + '/' + id);
    db[entity].splice(idx, 1);
    save();
    return { ok: true };
  }

  /* ---------- Session / Auth (mock) ---------- */
  function login(email, role) {
    let user = db.users.find(function (u) { return u.email.toLowerCase() === String(email).toLowerCase(); });
    if (!user) {
      const name = String(email).split('@')[0].replace(/[._-]/g, ' ');
      user = { id: nextId('users'), name: name.charAt(0).toUpperCase() + name.slice(1), email: email, role: role || 'farmer', phone: '', location: '', status: 'active', joinedAt: new Date().toISOString().slice(0, 10) };
      db.users.push(user); save();
    }
    const session = { userId: user.id, role: user.role };
    localStorage.setItem(SES_KEY, JSON.stringify(session));
    return clone(session);
  }
  function logout() { localStorage.removeItem(SES_KEY); }
  function current() {
    try {
      const s = JSON.parse(localStorage.getItem(SES_KEY) || 'null');
      if (!s) return null;
      const user = db.users.find(function (u) { return u.id === s.userId; });
      return user ? clone(user) : null;
    } catch (e) { return null; }
  }
  /* Đổi vai trò nhanh để demo (prototype nhiều role) */
  function switchRole(role) {
    const u = current() || login('farmer@cropmate.dev', 'farmer');
    const user = db.users.find(function (x) { return x.id === u.id; });
    user.role = role; save();
    localStorage.setItem(SES_KEY, JSON.stringify({ userId: user.id, role: role }));
    return clone(user);
  }

  load();

  return {
    list: list, get: get, create: create, update: update, remove: remove,
    login: login, logout: logout, current: current, switchRole: switchRole,
    /* Đọc đồng bộ (không giả lập độ trễ) — dùng cho app chrome */
    read: function (entity) { return clone(db[entity] || []); },
    forceFailNext: function () { forceFailNext = true; },
    reset: function () { localStorage.removeItem(DB_KEY); load(); }
  };
})();
