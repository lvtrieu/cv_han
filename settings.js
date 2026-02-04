const STORAGE_KEY = "cv_data_v1";
const AVATAR_KEY = "cv_avatar_v1";

const loginBox = document.getElementById("loginBox");
const settingsBox = document.getElementById("settingsBox");

const userEl = document.getElementById("user");
const passEl = document.getElementById("pass");
const btnLogin = document.getElementById("btnLogin");

const avatarFile = document.getElementById("avatarFile");
const jsonText = document.getElementById("jsonText");
const btnSave = document.getElementById("btnSave");
const btnReset = document.getElementById("btnReset");

/** Default JSON (phải giống defaultData trong app.js) */
const defaultJson = `{
  "name": "Huỳnh Thị Kim Hân",
  "headline": "Ứng tuyển vị trí nhân viên Telesale, Nhân viên văn phòng",
  "meta": [
    { "label": "Ngày sinh", "value": "13/06/1998" },
    { "label": "Giới tính", "value": "Nữ" },
    { "label": "Số điện thoại", "value": "0702925779" },
    { "label": "Email", "value": "huynhhan504@gmail.com" },
    { "label": "Địa chỉ", "value": "Cần Thơ" }
  ],
  "education": [
    { "time": "2016 – 2021", "title": "Trường Đại Học Nam Cần Thơ", "sub": "Ngành Dược Học" },
    { "time": "2023 – 2025", "title": "Trường Đại Học Cửu Long", "sub": "Ngôn Ngữ Anh - Văn bằng 2" }
  ],
  "experiences": [
    {
      "time": "09/2021 – 01/2022",
      "company": "Công Ty Luật TNHH MTV Đại Long",
      "role": "Nhân viên Telesale",
      "bullets": [
        "Liên hệ xác minh thông tin và hỗ trợ khách hàng từ danh sách do công ty cung cấp",
        "Tiếp nhận điện thoại và giải đáp thắc mắc cho khách hàng",
        "Hỗ trợ hòa giải, tư vấn khách hàng thực hiện đúng nghĩa vụ"
      ]
    },
    {
      "time": "01/2022 – 12/2024",
      "company": "Công TY TNHH SX TM DV Nhật Huy",
      "role": "Nhân viên văn phòng",
      "bullets": [
        "Nhận viên kho: nhập phiếu xuất, phiếu nhập hàng hóa, kiểm tra xuất nhập hàng hóa",
        "Nhận viên hành chính: soạn thảo văn bản, công văn, soạn thảo hợp đồng (dựa trên mẫu có sẵn của công ty và theo ý kiến của ban lãnh đạo)",
        "Tra cứu, kiểm tra giá cũ, lưu hành sản phẩm trên thị trường từ số đăng ký thuốc hoặc xác minh thông tin thuốc dựa trên số đăng ký do Cục Quản lý Dược (Bộ Y tế) cấp",
        "Theo dõi, kiểm tra thông tin hàng hóa theo các gói thầu của các Bệnh viện theo từng đợt thầu",
        "Theo dõi thông tin mời thầu trên Hệ thống mạng đấu thầu quốc gia, Sở Y tế, bệnh viện...",
        {
          "bold": "Chuẩn bị hồ sơ dự thầu:",
          "sub": [
            "Nghiên cứu yêu cầu kỹ thuật, pháp lý của hồ sơ mời thầu.",
            "Soạn thảo, sắp xếp, sao y phân loại và đóng quyển hồ sơ (hồ sơ năng lực, hồ sơ kỹ thuật, báo giá...).",
            "Phối hợp với bộ phận liên quan để hoàn thiện tài liệu, đảm bảo chính xác và đầy đủ.",
            "Cập nhật kết quả trúng thầu của các đơn vị có kết quả và gửi mail cho các bộ phận có liên quan."
          ]
        }
      ]
    },
    {
      "time": "01/2025 – 07/2025",
      "company": "Công ty CP Hải Dược Phẩm Nguyên Gia",
      "role": "Nhân Viên Kinh Doanh - Trình dược viên kênh ETC",
      "bullets": [
        "Thực hiện chào thầu",
        "Tiếp cận, giới thiệu các loại thuốc mới, thuốc kê đơn (ETC) cho bác sĩ, dược sĩ trong bệnh viện",
        "Thường xuyên thăm hỏi, giải đáp thắc mắc về tác dụng, thành phần, liều dùng và tác dụng phụ của thuốc cho bác sĩ",
        "Nhắc thuốc, xin số lượng từ bác sĩ",
        "Theo dõi tình hình đấu thầu thuốc",
        "Xin số lượng dự trù thuốc của các khoa để đảm bảo cung ứng đầy đủ",
        "Duy trì các mối quan hệ cũ, phát triển và mở rộng các mối quan hệ mới",
        "Lập kế hoạch, triển khai các hoạt động bán hàng để đạt chỉ tiêu (KPIs) được giao",
        "Lập báo cáo công việc định kỳ, theo dõi thông tin đối thủ cạnh tranh, và khảo sát tình hình tiêu thụ thuốc tại bệnh viện."
      ]
    },
    {
      "time": "07/2025 – 02/2026",
      "company": "Công Ty Cổ Phần Dược Phẩm Nguyên Gia",
      "role": "Nhân viên nhà thuốc Bệnh Viện",
      "bullets": [
        "Nhập thông tin từ hóa đơn, phiếu bán hàng của các công ty",
        "Kiểm tra, sắp xếp thuốc",
        "Nhận đơn thuốc, thanh toán, phát thuốc",
        "Nhập hóa đơn thuốc lên hệ thống",
        "Gửi thông tin mới, cập nhật thông tin ưu đãi đến các bác sĩ, phòng ban có liên quan"
      ]
    }
  ],
  "certificates": [
    "Kỹ năng mềm",
    "Ứng dụng công nghệ thông tin cơ bản",
    "Chứng chỉ trình độ tiếng Anh A2"
  ],
  "skills": [
    "Kỹ năng làm việc nhóm tốt",
    "Đặt mục tiêu, tổ chức và lập kế hoạch đạt hiệu quả trong công việc",
    "Sắp xếp thời gian làm việc hiệu quả",
    "Kỹ năng đàm phán"
  ]
}`;

function showSettings() {
  loginBox.classList.add("hide");
  settingsBox.classList.remove("hide");

  // load current data
  const raw = localStorage.getItem(STORAGE_KEY);
  jsonText.value = raw
    ? JSON.stringify(JSON.parse(raw), null, 2)
    : JSON.stringify(JSON.parse(defaultJson), null, 2);
}

btnLogin.addEventListener("click", () => {
  const u = (userEl.value || "").trim();
  const p = (passEl.value || "").trim();

  if (u === "admin" && p === "123") {
    showSettings();
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
  }
});

// upload avatar -> base64
avatarFile.addEventListener("change", async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  if (file.size > 2 * 1024 * 1024) {
    alert("Ảnh quá lớn. Vui lòng chọn ảnh < 2MB.");
    avatarFile.value = "";
    return;
  }

  const dataUrl = await fileToDataURL(file);
  localStorage.setItem(AVATAR_KEY, dataUrl);
  alert("Upload avatar thành công!");
});

btnSave.addEventListener("click", () => {
  try {
    const parsed = JSON.parse(jsonText.value);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    alert("Đã lưu nội dung CV!");
  } catch (err) {
    alert("JSON không hợp lệ. Bạn kiểm tra lại dấu phẩy / ngoặc { } nhé.");
  }
});

btnReset.addEventListener("click", () => {
  if (!confirm("Reset về mặc định?")) return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(AVATAR_KEY);
  jsonText.value = JSON.stringify(JSON.parse(defaultJson), null, 2);
  alert("Đã reset!");
});

function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
const btnExport = document.getElementById("btnExport");
const btnImport = document.getElementById("btnImport");
const importFile = document.getElementById("importFile");

btnExport?.addEventListener("click", () => {
  const dataRaw = localStorage.getItem(STORAGE_KEY) || defaultJson;
  const avatarRaw = localStorage.getItem(AVATAR_KEY) || null;

  const pack = {
    version: 1,
    savedAt: new Date().toISOString(),
    data: JSON.parse(dataRaw),
    avatar: avatarRaw,
  };

  const blob = new Blob([JSON.stringify(pack, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "cv-backup.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

btnImport?.addEventListener("click", async () => {
  const file = importFile?.files?.[0];
  if (!file) return alert("Chọn file cv-backup.json trước đã.");

  try {
    const text = await file.text();
    const pack = JSON.parse(text);

    if (!pack?.data) return alert("File không đúng định dạng backup.");

    localStorage.setItem(STORAGE_KEY, JSON.stringify(pack.data));
    if (pack.avatar) localStorage.setItem(AVATAR_KEY, pack.avatar);

    jsonText.value = JSON.stringify(pack.data, null, 2);
    alert("Import thành công! Quay lại CV để xem.");
  } catch (e) {
    alert("Import thất bại. File JSON lỗi hoặc sai định dạng.");
  }
});
