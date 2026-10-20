/* ============================================================
   CropMate AI – AI engine mô phỏng (modules/ai.js)
   AI-1 Issue Classifier / AI-2 Checklist Generator / AI-3 Log Summarizer
   Rule-based, trả Promise (giả lập độ trễ). Hỗ trợ ép trạng thái
   thất bại qua opts.mode: 'ok' | 'insufficient' | 'uncertain' | 'network'
   ============================================================ */
window.CM = window.CM || {};

CM.ai = (function () {
  function delay(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  /* Lỗi mang mã để giao diện phân biệt cách khắc phục */
  function AiError(code, message) { this.code = code; this.message = message; }
  function fail(mode, msg) { throw new AiError(mode, msg); }

  /* Từ khóa → nhóm vấn đề cho AI-1 */
  const LEXICON = [
    { cat: 'sâu bệnh',   kw: ['sâu', 'rầy', 'bọ trĩ', 'đốm', 'đạo ôn', 'vàng lá', 'cháy lá', 'thối', 'mốc', 'rụng trái', 'cô trùng', 'cuốn lá', 'bệnh', 'ún thân', 'khô vằn'], base: 0.55 },
    { cat: 'dinh dưỡng', kw: ['vàng lá', 'thiếu', 'bón phân', 'héo', 'còi cọc', 'cháy lá mép', 'lục', 'nấm đốm', 'rụng hoa', 'nhiễm phèn', 'không ra rễ'], base: 0.55 },
    { cat: 'tưới tiêu',  kw: ['nước', 'tưới', 'ngập', 'khô', 'mực nước', 'úng', 'rạch', 'cống', 'xả nước', 'độ ẩm'], base: 0.55 },
    { cat: 'đất',        kw: ['đất', 'phèn', 'chua', 'mặn', 'cải tạo', 'xốp', 'cứng', 'bạc màu'], base: 0.55 },
    { cat: 'thờ�i tiết', kw: ['mưa', 'nắng', 'gió', 'sương', 'rét', 'nóng', 'bão', 'hạn', 'độ ẩm không khí'], base: 0.55 }
  ];

  function norm(s) { return String(s || '').toLowerCase(); }

  /* ==================== AI-1: Field Issue Classifier ==================== */
  async function classifyIssue(text, opts) {
    opts = opts || {};
    await delay(1400 + Math.random() * 800);
    const t = norm(text);

    if (opts.mode === 'network') fail('network', 'Không thể xử lý yêu cầu lúc này. Kết nối tới máy chủ AI bị gián đoạn.');
    if (opts.mode === 'insufficient' || t.trim().length < 20)
      fail('insufficient', 'Không đủ dữ liệu để đưa ra đề xuất. Mô tả cần ít nhất 20 ký tự và nên kèm triệu chứng quan sát được (màu sắc, vị trí, tỷ lệ cây bị ảnh hưởng).');

    let best = { cat: 'khác', hits: 0, base: 0.5 };
    LEXICON.forEach(function (g) {
      const hits = g.kw.filter(function (k) { return t.indexOf(k) >= 0; }).length;
      if (hits > best.hits) best = { cat: g.cat, hits: hits, base: g.base };
    });

    let confidence = best.base + Math.min(best.hits, 3) * 0.11 + (t.length > 90 ? 0.06 : 0);
    if (opts.mode === 'uncertain') confidence = 0.52;
    confidence = Math.min(0.96, Math.round(confidence * 100) / 100);

    const why = best.hits === 0
      ? 'Không khớp từ khóa đặc trưng của nhóm nào trong từ điển bệnh/tác nhân — phân loại dựa trên ngữ cảnh chung.'
      : 'Phát hiện ' + best.hits + ' từ khóa thuộc nhóm "' + best.cat + '" (ví dụ: ' +
        LEXICON.find(function (g) { return g.cat === best.cat; }).kw.filter(function (k) { return t.indexOf(k) >= 0; }).slice(0, 2).join(', ') + ').';

    return {
      category: best.cat,
      confidence: confidence,
      why: why,
      uncertain: confidence < 0.6,
      suggestions: suggestFor(best.cat),
      disclaimer: 'Kết quả phân loại bằng AI mô phỏng, chỉ mang tính gợi ý — vui lòng đợi xác nhận của chuyên gia.'
    };
  }
  function suggestFor(cat) {
    const map = {
      'sâu bệnh':  'Chụp ảnh cận cảnh vùng bị hại, ghi tỷ lệ cây nhiễm, kiểm tra lịch phun thuốc gần nhất.',
      'dinh dưỡng': 'Ghi lại loại phân đã bón, liều lượng, thờ�i điểm; chụp ảnh lá (mặt trên/dưới) để chuyên gia nhận định.',
      'tưới tiêu':  'Ghi mực nước hiện tại, tần suất cấp nước, tình trạng rạch/cống.',
      'đất':         'Mô tả màu sắc, độ chặt, mùi đất; nếu có kết quả xét nghiệm đất hãy đính kèm.',
      'thờ�i tiết':  'Ghi thờ�i điểm bắt đầu triệu chứng liên quan đợt thờ�i tiết gần nhất.',
      'khác':        'Bổ sung ảnh hiện trường và nhật ký gần nhất để chuyên gia có bối cảnh.'
    };
    return map[cat] || map['khác'];
  }

  /* ==================== AI-2: Season Checklist Generator ==================== */
  const CHECKLIST_BANK = {
    'Làm đất':    [['Cày/xới kỹ, phơi đất 5-7 ngày', 'Phá cấu trúc ổ bệnh, làm chết mầm cỏ'],
                   ['Rả vôi nếu pH < 5.5 (100-150kg/ha)', 'Giảm chua, hạn chế phèn hoạt hóa'],
                   ['Bón lót hữu cơ + NPK lót', 'Đảm bão dinh dưỡng nền cho 2 tuần đầu']],
    'Gieo sạ':    [['Ngâm ủ mạ, gieo mật độ 100-120 kg/ha', 'Mạ khỏe giúp đồng đều, chống cỏ'],
                   ['Cấp nước nông 2-3cm sau sạ', 'Ổn định nhiệt độ mạ, tránh trôi phân'],
                   ['Kiểm tra rệp sáng/ruồi vàng 3 ngày/lần', 'Phát hiện sớm dịch hại giai đoạn mạ']],
    'Đẻ nhánh':   [['Bón thúc N đợt 1 (60-70kg ure/ha)', 'Đúng giai đoạn đẻ nhánh quyết định số bông'],
                   ['Áp dụng tưới AWD (ngập - khô xen kẽ)', 'Tiết kiệm nước, tạo rễ sâu chống đổ'],
                   ['Phun phòng rầy nâu nếu > 2 con/m²', 'Rầy gây cháy rầy, virus lùn sọc đen']],
    'Làm đồng':   [['Bón thúc Kali + Silic', 'Tăng sức chống đổ, cứng cây'],
                   ['Phun phòng đạo ôn thân, lá đợt 1', 'Giai đoạn cực kỳ nhạy với đạo ôn khi trở�i âm'],
                   ['Duy trì mực nước 3-5cm', 'Ổn định điều kiện làm đồng']],
    'Trổ - chín': [['Phun phòng đạo ôn cổ bông (0.3-0.5 lít/ha)', 'Bảo vệ cổ bông quyết định năng suất'],
                   ['Ngừng bón đạm, giảm nước dần', 'Tránh lá đỏ, rầy bùng phát cuối vụ'],
                   ['Quan sát ốc bươu vàng, chuột', 'Đối tượng hạng nặng giai đoạn chín']],
    'Thu hoạch':  [['Ngừng nước 7-10 ngày trước gặt', 'Độ ẩm hạt đạt chuẩn, máy gặt hiệu quả'],
                   ['Gặt đúng độ chín 85-90%', 'Giảm đứt hạt, tổn thất thu hoạch'],
                   ['Phơi/sấy ngay sau thu hoạch', 'Độ ẩm xuống ≤ 14% trước khi nhập kho']],
    'Kiến thiết cơ bàn': [['Đào hố, bón hữu cơ + lân nền', 'Nền tảng cho bộ rễ xoài phát triển'],
                   ['Tưới ổn định 7 ngày đầu', 'Cây ra rễ nhanh, giảm héo']],
    'Ra hoa':     [['Phun Bo + Ca nâng cao đậu trái', 'Giảm rụng hoa, rụng trái non'],
                   ['Ngừng tưới 10-15 ngày trước kích hoa', 'Tạo stress sinh lý cân bằng cho ra hoa đồng loạt']],
    'Đậu trái':   [['Bẫy bướm đục trái, bọ trĩ', 'Giai đoạn trái non dễ bị đục, dính phân'],
                   ['Tưới đủ ẩm, tránh ngập gốc', 'Rụng trái non chủ yếu do thiếu nước/úng']],
    'Nuôi trái':  [['Bón cân đối NPK + vi lượng', 'Nuôi trái phát triển đồng đều'],
                   ['Tỉa trái dày, bao trái', 'Giảm cạnh tranh dinh dưỡng, phòng sâu đục thịt'],
                   ['Vệ sinh vườn đầu mùa mưa', 'Phòng nấm hồng, thối trái']]
  };
  async function generateChecklist(crop, stage, opts) {
    opts = opts || {};
    await delay(1500 + Math.random() * 900);
    if (opts.mode === 'network') fail('network', 'Không thể xử lý yêu cầu lúc này. Máy chủ AI đang quá tải.');
    if (!crop || !stage) fail('insufficient', 'Không đủ dữ liệu để đưa ra đề xuất. Cần chọn cây trồng và giai đoạn sinh trưởng.');
    if (opts.mode === 'insufficient') fail('insufficient', 'Không đủ dữ liệu: danh mục cây trồng chưa có bộ checklist cho giai đoạn này.');

    const bank = CHECKLIST_BANK[stage];
    if (!bank) fail('insufficient', 'Không đủ dữ liệu: chưa có bộ checklist cho giai đoạn "' + stage + '".');

    const items = bank.map(function (b, i) {
      return { id: 't' + (i + 1), task: b[0], reason: b[1], done: false, priority: i === 0 ? 'high' : (i === 1 ? 'medium' : 'low') };
    });

    return {
      cropName: crop.name, stage: stage, items: items,
      why: 'Checklist được tạo từ bộ quy tắc canh tác "' + crop.name + '" cho giai đoạn "' + stage + '", ưu tiên thao tác ảnh hưởng trực tiếp đến năng suất.',
      disclaimer: 'Gợi ý tham khảo — điều chỉnh theo thực tế ruộng vườn và khuyến cáo địa phương.'
    };
  }

  /* ==================== AI-3: Farm Log Summarizer ==================== */
  async function summarizeSeason(logs, season, crop, opts) {
    opts = opts || {};
    await delay(1600 + Math.random() * 900);
    if (opts.mode === 'network') fail('network', 'Không thể xử lý yêu cầu lúc này. Kết nối tới dịch vụ AI bị gián đoạn.');
    if (!logs || logs.length === 0)
      fail('insufficient', 'Không đủ dữ liệu để tóm tắt: mùa vụ chưa có nhật ký nào. Có thể dùng "Dùng thủ công" để xem từng nhật ký.');

    const issues = logs.filter(function (l) { return l.type === 'issue'; });
    const activities = logs.filter(function (l) { return l.type === 'activity'; });
    const sorted = logs.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; });
    const first = sorted[0], last = sorted[sorted.length - 1];

    const lines = [];
    lines.push('Mùa vụ "' + (season ? season.name : '') + ' (' + (crop ? crop.name : '') + ')" ghi nhận ' + logs.length + ' nhật ký từ ' + first.date + ' đến ' + last.date + '.');
    lines.push('Hoạt động chính: ' + (activities.length ? activities.map(function (a) { return a.title.toLowerCase(); }).slice(0, 3).join('; ') : 'chưa ghi nhận') + '.');
    if (issues.length) {
      lines.push('Có ' + issues.length + ' sự cố: ' + issues.map(function (i) { return i.title.toLowerCase(); }).join('; ') + '.');
    } else {
      lines.push('Chưa ghi nhận sự cố bất thường — diễn biến ổn định.');
    }
    const risk = issues.filter(function (i) { return /rầy|đạo ôn|thối|mốc/.test(norm(i.title)); }).length;
    return {
      summary: lines.join(' '),
      highlights: issues.map(function (i) { return i.title; }),
      risks: risk > 0
        ? ['Tồn đọng yếu tố sâu bệnh (rầy/đạo ôn) — cần xác nhận đã xử lý xong trước giai đoạn sau.', 'Tần suất ghi nhật ký thấp có thể bỏ sót dấu hiệu sớm.']
        : ['Theo dõi sát độ ẩm giai đoạn sắp tới theo dự báo thờ�i tiết.'],
      why: 'Tóm tắt được tạo bằng cách gộp ' + logs.length + ' nhật ký theo trục thờ�i gian, đếm sự kiện loại "sự cố" và đối chiếu ngân hàng từ khóa rủi ro.',
      disclaimer: 'Tóm tắt hỗ trợ chuyên gia nắm nhanh bối cảnh — không thay thế việc đọc nhật ký đầy đủ.'
    };
  }

  return { classifyIssue: classifyIssue, generateChecklist: generateChecklist, summarizeSeason: summarizeSeason, AiError: AiError };
})();
