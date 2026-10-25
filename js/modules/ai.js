/* ============================================================
   CropMate AI - AI gia lap (modules/ai.js)
   Phu trach: SV2

   Vi day la prototype Frontend, "AI" khong goi server that ma
   chay bang cach so khop tu khoa (rule-based):
     - AI-1 classifyIssue:      phan loai van de o ruong
     - AI-2 generateChecklist:  tao checklist cong viec theo giai doan
     - AI-3 summarizeSeason:    tom tat nhat ky mua vu

   Moi ham deu tra ve Promise va delay vai giay de giao dien
   hien trang thai "Dang xu ly..." giong nhu goi API that.
   Them opts.mode de ep cac trang thai that bai khi demo:
     'ok' | 'insufficient' (khong du du lieu) | 'uncertain'
     (AI khong chac chan) | 'network' (loi ket noi)

   Luu y: comment viet khong dau de tranh loi font khi mo bang
   trinh soan thao khac, con chuoi hien thi len man hinh van
   gi day du dau tieng Viet.
   ============================================================ */
window.CM = window.CM || {};

CM.ai = (function () {

  /* Ham tien ich: doi ms giay roi moi chay tiep (giong setTimeout) */
  function delay(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }

  /* Loi rieng cua AI, co them ma (code) de giao dien biet nen
     hien thong bao gi va nut khac phuc nao (Thu lai / Dung thu cong) */
  function AiError(code, message) {
    this.code = code;       // 'insufficient' | 'uncertain' | 'network'
    this.message = message;
  }
  function fail(code, msg) {
    throw new AiError(code, msg);
  }

  /* Tu dien tu khoa cho AI-1: moi nhom van de co mot bo tu khoa
     dac trung. Mota cua nong dan khop tu khoa nao nhieu thi roi
     vao nhom do. Day la cach "may quet tu khoa" don gian nhat. */
  var KEYWORDS = [
    { group: 'sâu bệnh',   words: ['sâu', 'rầy', 'bọ trĩ', 'đốm', 'đạo ôn', 'vàng lá', 'cháy lá', 'thối', 'mốc', 'rụng trái', 'cô trùng', 'cuốn lá', 'bệnh', 'ún thân', 'khô vằn'] },
    { group: 'dinh dưỡng', words: ['vàng lá', 'thiếu', 'bón phân', 'héo', 'còi cọc', 'rụng hoa', 'nhiễm phèn', 'không ra rễ'] },
    { group: 'tưới tiêu',  words: ['nước', 'tưới', 'ngập', 'khô', 'mực nước', 'úng', 'rạch', 'cống', 'xả nước', 'độ ẩm'] },
    { group: 'đất',        words: ['đất', 'phèn', 'chua', 'mặn', 'cải tạo', 'xốp', 'cứng', 'bạc màu'] },
    { group: 'thời tiết',  words: ['mưa', 'nắng', 'gió', 'sương', 'rét', 'nóng', 'bão', 'hạn', 'độ ẩm không khí'] }
  ];

  function toLower(s) {
    return String(s || '').toLowerCase();
  }

  /* ==================== AI-1: Phan loai van de ==================== */
  async function classifyIssue(description, opts) {
    opts = opts || {};

    // Buoc "Dang xu ly...": delay 1.4 - 2.2 giay nhu dang goi server AI
    await delay(1400 + Math.random() * 800);

    var text = toLower(description);

    // Cac trang thai that bai co the xay ra (demo theo yeu cau de)
    if (opts.mode === 'network') {
      fail('network', 'Không thể xử lý yêu cầu lúc này. Kết nối tới máy chủ AI bị gián đoạn.');
    }
    if (opts.mode === 'insufficient' || text.trim().length < 20) {
      fail('insufficient', 'Không đủ dữ liệu để đưa ra đề xuất. Mô tả cần ít nhất 20 ký tự và nên kèm triệu chứng quan sát được (màu sắc, vị trí, tỷ lệ cây bị ảnh hưởng).');
    }

    // Quet tu khoa: dem so tu cua moi nhom xuat hien trong mo ta
    var bestGroup = 'khác';
    var bestHits = 0;
    var matchedWords = [];

    for (var i = 0; i < KEYWORDS.length; i++) {
      var hits = 0;
      var words = KEYWORDS[i].words;
      for (var j = 0; j < words.length; j++) {
        if (text.indexOf(words[j]) >= 0) {
          hits++;
          matchedWords.push(words[j]);
        }
      }
      // Nhom nao nhieu tu khoa nhat (va >= 1) thi thang
      if (hits > bestHits) {
        bestHits = hits;
        bestGroup = KEYWORDS[i].group;
      }
    }

    // Do tin cay: diem nen 0.5 + thuong them moi tu khoa khop (toi da 3),
    // mo ta dai > 90 ky tu thi cong them chut it. Kep lai 0.52-0.96.
    var confidence = 0.5 + Math.min(bestHits, 3) * 0.11;
    if (text.length > 90) confidence = confidence + 0.06;
    if (opts.mode === 'uncertain') confidence = 0.52; // ep AI "khong chac chan"
    confidence = Math.min(0.96, Math.round(confidence * 100) / 100);

    // Giai thich "vi sao co ket qua nay" - bat buoc theo nguyen tac AI cua de
    var why;
    if (bestHits === 0) {
      why = 'Không khớp từ khóa đặc trưng của nhóm nào trong từ điển bệnh/tác nhân - phân loại dựa trên ngữ cảnh chung.';
    } else {
      why = 'Phát hiện ' + bestHits + ' từ khóa thuộc nhóm "' + bestGroup + '" (ví dụ: ' + matchedWords.slice(0, 2).join(', ') + ').';
    }

    return {
      category: bestGroup,
      confidence: confidence,
      why: why,
      uncertain: confidence < 0.6,   // < 60% thi danh dau la chua chac
      suggestions: suggestFor(bestGroup),
      disclaimer: 'Kết quả phân loại bằng AI mô phỏng, chỉ mang tính gợi ý - vui lòng đợi xác nhận của chuyên gia.'
    };
  }

  /* Goi y buoc tiep theo cho nong dan, tuy theo nhom van de */
  function suggestFor(group) {
    var map = {
      'sâu bệnh':   'Chụp ảnh cận cảnh vùng bị hại, ghi tỷ lệ cây nhiễm, kiểm tra lịch phun thuốc gần nhất.',
      'dinh dưỡng': 'Ghi lại loại phân đã bón, liều lượng, thời điểm; chụp ảnh lá (mặt trên/dưới) để chuyên gia nhận định.',
      'tưới tiêu':  'Ghi mực nước hiện tại, tần suất cấp nước, tình trạng rạch/cống.',
      'đất':        'Mô tả màu sắc, độ chặt, mùi đất; nếu có kết quả xét nghiệm đất hãy đính kèm.',
      'thời tiết':  'Ghi thời điểm bắt đầu triệu chứng liên quan đợt thời tiết gần nhất.',
      'khác':       'Bổ sung ảnh hiện trường và nhật ký gần nhất để chuyên gia có bối cảnh.'
    };
    return map[group] || map['khác'];
  }

  /* ==================== AI-2: Tao checklist cong viec ==================== */
  /* Ngan hang checklist: moi giai doan sinh truong co san 3 viec.
     Khi nguoi dung chon cay trong + giai doan, AI chi "lay ra" bo
     checklist tuong ung - don gian nhung dung dung nghiep vu. */
  var CHECKLIST_BANK = {
    'Làm đất':    [['Cày/xới kỹ, phơi đất 5-7 ngày', 'Phá cấu trúc ổ bệnh, làm chết mầm cỏ'],
                   ['Rải vôi nếu pH < 5.5 (100-150kg/ha)', 'Giảm chua, hạn chế phèn hoạt hóa'],
                   ['Bón lót hữu cơ + NPK lót', 'Đảm bảo dinh dưỡng nền cho 2 tuần đầu']],
    'Gieo sạ':    [['Ngâm ủ mạ, gieo mật độ 100-120 kg/ha', 'Mạ khỏe giúp đồng đều, chống cỏ'],
                   ['Cấp nước nông 2-3cm sau sạ', 'Ổn định nhiệt độ mạ, tránh trôi phân'],
                   ['Kiểm tra rệp sáng/ruồi vàng 3 ngày/lần', 'Phát hiện sớm dịch hại giai đoạn mạ']],
    'Đẻ nhánh':   [['Bón thúc N đợt 1 (60-70kg ure/ha)', 'Đúng giai đoạn đẻ nhánh quyết định số bông'],
                   ['Áp dụng tưới AWD (ngập - khô xen kẽ)', 'Tiết kiệm nước, tạo rễ sâu chống đổ'],
                   ['Phun phòng rầy nâu nếu > 2 con/m²', 'Rầy gây cháy rầy, virus lùn sọc đen']],
    'Làm đồng':   [['Bón thúc Kali + Silic', 'Tăng sức chống đổ, cứng cây'],
                   ['Phun phòng đạo ôn thân, lá đợt 1', 'Giai đoạn cực kỳ nhạy với đạo ôn khi trời âm'],
                   ['Duy trì mực nước 3-5cm', 'Ổn định điều kiện làm đồng']],
    'Trổ - chín': [['Phun phòng đạo ôn cổ bông (0.3-0.5 lít/ha)', 'Bảo vệ cổ bông quyết định năng suất'],
                   ['Ngừng bón đạm, giảm nước dần', 'Tránh lá đỏ, rầy bùng phát cuối vụ'],
                   ['Quan sát ốc bươu vàng, chuột', 'Đối tượng hạng nặng giai đoạn chín']],
    'Thu hoạch':  [['Ngừng nước 7-10 ngày trước gặt', 'Độ ẩm hạt đạt chuẩn, máy gặt hiệu quả'],
                   ['Gặt đúng độ chín 85-90%', 'Giảm đứt hạt, tổn thất thu hoạch'],
                   ['Phơi/sấy ngay sau thu hoạch', 'Độ ẩm xuống ≤ 14% trước khi nhập kho']],
    'Kiến thiết cơ bản': [['Đào hố, bón hữu cơ + lân nền', 'Nền tảng cho bộ rễ xoài phát triển'],
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
    await delay(1500 + Math.random() * 900); // trang thai "Dang tao..."

    if (opts.mode === 'network') {
      fail('network', 'Không thể xử lý yêu cầu lúc này. Máy chủ AI đang quá tải.');
    }
    if (!crop || !stage) {
      fail('insufficient', 'Không đủ dữ liệu để đưa ra đề xuất. Cần chọn cây trồng và giai đoạn sinh trưởng.');
    }
    if (opts.mode === 'insufficient') {
      fail('insufficient', 'Không đủ dữ liệu: danh mục cây trồng chưa có bộ checklist cho giai đoạn này.');
    }

    var bank = CHECKLIST_BANK[stage];
    if (!bank) {
      fail('insufficient', 'Không đủ dữ liệu: chưa có bộ checklist cho giai đoạn "' + stage + '".');
    }

    // Boc tach ngan hang thanh tung viec lam kem ly do
    var items = [];
    for (var i = 0; i < bank.length; i++) {
      items.push({
        id: 't' + (i + 1),
        task: bank[i][0],
        reason: bank[i][1],
        done: false,
        priority: i === 0 ? 'high' : (i === 1 ? 'medium' : 'low')
      });
    }

    return {
      cropName: crop.name,
      stage: stage,
      items: items,
      why: 'Checklist được tạo từ bộ quy tắc canh tác "' + crop.name + '" cho giai đoạn "' + stage + '", ưu tiên thao tác ảnh hưởng trực tiếp đến năng suất.',
      disclaimer: 'Gợi ý tham khảo - điều chỉnh theo thực tế ruộng vườn và khuyến cáo địa phương.'
    };
  }

  /* ==================== AI-3: Tom tat nhat ky mua vu ==================== */
  async function summarizeSeason(logs, season, crop, opts) {
    opts = opts || {};
    await delay(1600 + Math.random() * 900);

    if (opts.mode === 'network') {
      fail('network', 'Không thể xử lý yêu cầu lúc này. Kết nối tới dịch vụ AI bị gián đoạn.');
    }
    if (!logs || logs.length === 0) {
      fail('insufficient', 'Không đủ dữ liệu để tóm tắt: mùa vụ chưa có nhật ký nào. Có thể dùng "Dùng thủ công" để xem từng nhật ký.');
    }

    // Chia nhat ky thanh 2 loai: su co (issue) va hoat dong binh thuong
    var issues = [];
    var activities = [];
    for (var i = 0; i < logs.length; i++) {
      if (logs[i].type === 'issue') issues.push(logs[i]);
      else activities.push(logs[i]);
    }

    // Sap xep theo ngay de biet moc dau - cuoi
    var sorted = logs.slice().sort(function (a, b) {
      return a.date < b.date ? -1 : 1;
    });
    var first = sorted[0];
    var last = sorted[sorted.length - 1];

    // Ghep cau tom tat tu cac so lieu dem duoc
    var lines = [];
    lines.push('Mùa vụ "' + (season ? season.name : '') + ' (' + (crop ? crop.name : '') + ')" ghi nhận ' + logs.length + ' nhật ký từ ' + first.date + ' đến ' + last.date + '.');
    if (activities.length > 0) {
      var titles = activities.map(function (a) { return a.title.toLowerCase(); }).slice(0, 3).join('; ');
      lines.push('Hoạt động chính: ' + titles + '.');
    } else {
      lines.push('Hoạt động chính: chưa ghi nhận.');
    }
    if (issues.length > 0) {
      lines.push('Có ' + issues.length + ' sự cố: ' + issues.map(function (x) { return x.title.toLowerCase(); }).join('; ') + '.');
    } else {
      lines.push('Chưa ghi nhận sự cố bất thường - diễn biến ổn định.');
    }

    // Dem su co nguy hiem (co tu khoa ray / dao on / thoi / moc)
    var risky = 0;
    for (var k = 0; k < issues.length; k++) {
      if (/rầy|đạo ôn|thối|mốc/.test(toLower(issues[k].title))) risky++;
    }

    var risks;
    if (risky > 0) {
      risks = [
        'Tồn đọng yếu tố sâu bệnh (rầy/đạo ôn) - cần xác nhận đã xử lý xong trước giai đoạn sau.',
        'Tần suất ghi nhật ký thấp có thể bỏ sót dấu hiệu sớm.'
      ];
    } else {
      risks = ['Theo dõi sát độ ẩm giai đoạn sắp tới theo dự báo thời tiết.'];
    }

    return {
      summary: lines.join(' '),
      highlights: issues.map(function (x) { return x.title; }),
      risks: risks,
      why: 'Tóm tắt được tạo bằng cách gộp ' + logs.length + ' nhật ký theo trục thời gian, đếm sự kiện loại "sự cố" và đối chiếu ngân hàng từ khóa rủi ro.',
      disclaimer: 'Tóm tắt hỗ trợ chuyên gia nắm nhanh bối cảnh - không thay thế việc đọc nhật ký đầy đủ.'
    };
  }

  /* Chi lo ra dung 3 ham + loi AiError cho trang HTML dung */
  return {
    classifyIssue: classifyIssue,
    generateChecklist: generateChecklist,
    summarizeSeason: summarizeSeason,
    AiError: AiError
  };
})();
