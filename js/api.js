/* ============================================================
   CropMate AI - Mock API (api.js)
   Phu trach: SV2

   Vi prototype khong co server that, nen "API" o day chi la
   cac ham doc/ghi LocalStorage cho giong goi API that:
     - Co delay 450ms de giao dien hien trang thai "Dang tai..."
     - Co ham forceFailNext() de gia lap loi mang khi demo
     - CRUD chung: list / get / create / update / remove
     - Quan ly phien dang nhap: login / logout / current

   Cac trang HTML goi qua window.CM.api, vi du:
     CM.api.list('seasons').then(function (items) { ... })
   ============================================================ */
window.CM = window.CM || {};

CM.api = (function () {
  var DB_KEY = 'cropmate_db_v1';      // key luu toan bo du lieu mau
  var SES_KEY = 'cropmate_session_v1'; // key luu phien dang nhap
  var db = null;

  /* ---------- Nap du lieu lan dau ---------- */
  function load() {
    var raw = localStorage.getItem(DB_KEY);
    if (raw) {
      try {
        db = JSON.parse(raw);
        return; // co du lieu cu thi dung luon
      } catch (e) {
        // JSON hong thi nap lai du lieu mau ben duoi
      }
    }
    db = JSON.parse(JSON.stringify(CM.seed)); // chep sau seed de ko anh huong ban goc
    save();
  }
  function save() {
    localStorage.setItem(DB_KEY, JSON.stringify(db));
  }

  /* ---------- Gia lap do tre mang ---------- */
  function delay(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
  }
  var DEFAULT_DELAY = 450;

  /* Nhan truoc khi goi 1 lenh de lenh do nem loi (demo trang thai loi) */
  var willFailNext = false;
  function throwIfForced() {
    if (willFailNext) {
      willFailNext = false;
      throw new Error('Không thể kết nối máy chủ (mô phỏng lỗi mạng).');
    }
  }

  /* Chep sau 1 object/array de tranh tham chieu bi thay doi ngoai y muon */
  function clone(x) { return JSON.parse(JSON.stringify(x)); }

  /* Sinh id tu dong: lay tien to cua bang + so lon nhat hien co + 1
     Vi du bang seasons da co s1, s2, s3 -> id moi la s4 */
  var PREFIX = {
    users: 'u', crops: 'c', farms: 'f', fields: 'd', seasons: 's',
    fieldLogs: 'l', helpRequests: 'r', resources: 'res',
    events: 'e', notifications: 'n'
  };
  function nextId(entity) {
    var prefix = PREFIX[entity] || 'x';
    var rows = db[entity] || [];
    var max = 0;
    for (var i = 0; i < rows.length; i++) {
      // cat bo phan tien to, lay phan so: 's12' -> 12
      var num = parseInt(String(rows[i].id).replace(prefix, ''), 10);
      if (!isNaN(num) && num > max) max = num;
    }
    return prefix + (max + 1);
  }

  /* ---------- CRUD chung (5 ham giong nhau, chi khuc bang va cach xu ly) ---------- */
  async function list(entity, opts) {
    opts = opts || {};
    await delay(opts.delay != null ? opts.delay : DEFAULT_DELAY);
    throwIfForced();
    return clone(db[entity] || []);
  }

  async function get(entity, id, opts) {
    opts = opts || {};
    await delay(opts.delay != null ? opts.delay : DEFAULT_DELAY);
    throwIfForced();
    var rows = db[entity] || [];
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].id === id) return clone(rows[i]);
    }
    throw new Error('Không tìm thấy bản ghi ' + entity + '/' + id);
  }

  async function create(entity, data, opts) {
    opts = opts || {};
    await delay(opts.delay != null ? opts.delay : DEFAULT_DELAY);
    throwIfForced();
    var item = Object.assign({}, data, { id: nextId(entity) });
    db[entity].unshift(item); // them len dau danh sach
    save();
    return clone(item);
  }

  async function update(entity, id, patch, opts) {
    opts = opts || {};
    await delay(opts.delay != null ? opts.delay : DEFAULT_DELAY);
    throwIfForced();
    var rows = db[entity] || [];
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].id === id) {
        rows[i] = Object.assign({}, rows[i], patch); // ghi de cac truong moi
        save();
        return clone(rows[i]);
      }
    }
    throw new Error('Không tìm thấy bản ghi ' + entity + '/' + id);
  }

  async function remove(entity, id, opts) {
    opts = opts || {};
    await delay(opts.delay != null ? opts.delay : DEFAULT_DELAY);
    throwIfForced();
    var rows = db[entity] || [];
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].id === id) {
        rows.splice(i, 1);
        save();
        return { ok: true };
      }
    }
    throw new Error('Không tìm thấy bản ghi ' + entity + '/' + id);
  }

  /* ---------- Dang nhap / phien (mock, khong can mat khau that) ---------- */
  function login(email, role) {
    // Tim user theo email; chua co thi tu tao tai khoan moi
    var user = null;
    var rows = db.users;
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].email.toLowerCase() === String(email).toLowerCase()) {
        user = rows[i];
        break;
      }
    }
    if (!user) {
      // Lay phan truoc @ lam ten, vi du 'nguyen.van' -> 'Nguyen Van'
      var rawName = String(email).split('@')[0].replace(/[._-]/g, ' ');
      var prettyName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
      user = {
        id: nextId('users'),
        name: prettyName,
        email: email,
        role: role || 'farmer',
        phone: '',
        location: '',
        status: 'active',
        joinedAt: new Date().toISOString().slice(0, 10)
      };
      db.users.push(user);
      save();
    }
    var session = { userId: user.id, role: user.role };
    localStorage.setItem(SES_KEY, JSON.stringify(session));
    return clone(session);
  }

  function logout() {
    localStorage.removeItem(SES_KEY);
  }

  /* Lay thong tin user hien tai tu phien; chua dang nhap thi tra null */
  function current() {
    try {
      var s = JSON.parse(localStorage.getItem(SES_KEY) || 'null');
      if (!s) return null;
      var rows = db.users;
      for (var i = 0; i < rows.length; i++) {
        if (rows[i].id === s.userId) return clone(rows[i]);
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  /* Doi vai tro nhanh de demo het cac man hinh (prototype nhieu role).
     Luu y: day chi la tinh nang phuc vu demo, he thong that can dang
     nhap lai khi doi quyen. */
  function switchRole(role) {
    var me = current();
    if (!me) me = login('farmer@cropmate.dev', 'farmer'); // chua co ai thi tao 1 nong dan mac dinh
    var rows = db.users;
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].id === me.id) {
        rows[i].role = role;
        break;
      }
    }
    save();
    localStorage.setItem(SES_KEY, JSON.stringify({ userId: me.id, role: role }));
    return current();
  }

  load(); // nap du lieu ngay khi file duoc tai

  /* Chi lo ra ngoai dung nhung gi cac trang HTML can */
  return {
    list: list, get: get, create: create, update: update, remove: remove,
    login: login, logout: logout, current: current, switchRole: switchRole,
    /* Doc ngay khong delay - dung cho topbar/sidebar */
    read: function (entity) { return clone(db[entity] || []); },
    forceFailNext: function () { willFailNext = true; },
    reset: function () { localStorage.removeItem(DB_KEY); load(); }
  };
})();
