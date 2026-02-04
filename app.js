const STORAGE_KEY = "cv_data_v1";
const AVATAR_KEY = "cv_avatar_v1";

const defaultData = {
  name: "Huỳnh Thị Kim Hân",
  headline: "Ứng tuyển vị trí nhân viên Telesale, Nhân viên văn phòng",
  meta: [
    { label: "Ngày sinh", value: "13/06/1998" },
    { label: "Giới tính", value: "Nữ" },
    { label: "Số điện thoại", value: "0702925779" },
    { label: "Email", value: "huynhhan504@gmail.com" },
    { label: "Địa chỉ", value: "Cần Thơ" },
  ],
  education: [
    {
      time: "2016 – 2021",
      title: "Trường Đại Học Nam Cần Thơ",
      sub: "Ngành Dược Học",
    },
    {
      time: "2023 – 2025",
      title: "Trường Đại Học Cửu Long",
      sub: "Ngôn Ngữ Anh - Văn bằng 2",
    },
  ],
  experiences: [
    {
      time: "09/2021 – 01/2022",
      company: "Công Ty Luật TNHH MTV Đại Long",
      role: "Nhân viên Telesale",
      bullets: [
        "Liên hệ xác minh thông tin và hỗ trợ khách hàng từ danh sách do công ty cung cấp",
        "Tiếp nhận điện thoại và giải đáp thắc mắc cho khách hàng",
        "Hỗ trợ hòa giải, tư vấn khách hàng thực hiện đúng nghĩa vụ",
      ],
    },
    {
      time: "01/2022 – 12/2024",
      company: "Công TY TNHH SX TM DV Nhật Huy",
      role: "Nhân viên văn phòng",
      bullets: [
        "Nhận viên kho: nhập phiếu xuất, phiếu nhập hàng hóa, kiểm tra xuất nhập hàng hóa",
        "Nhận viên hành chính: soạn thảo văn bản, công văn, soạn thảo hợp đồng (dựa trên mẫu có sẵn của công ty và theo ý kiến của ban lãnh đạo)",
        "Tra cứu, kiểm tra giá cũ, lưu hành sản phẩm trên thị trường từ số đăng ký thuốc hoặc xác minh thông tin thuốc dựa trên số đăng ký do Cục Quản lý Dược (Bộ Y tế) cấp",
        "Theo dõi, kiểm tra thông tin hàng hóa theo các gói thầu của các Bệnh viện theo từng đợt thầu",
        "Theo dõi thông tin mời thầu trên Hệ thống mạng đấu thầu quốc gia, Sở Y tế, bệnh viện...",
        {
          bold: "Chuẩn bị hồ sơ dự thầu:",
          sub: [
            "Nghiên cứu yêu cầu kỹ thuật, pháp lý của hồ sơ mời thầu.",
            "Soạn thảo, sắp xếp, sao y phân loại và đóng quyển hồ sơ (hồ sơ năng lực, hồ sơ kỹ thuật, báo giá...).",
            "Phối hợp với bộ phận liên quan để hoàn thiện tài liệu, đảm bảo chính xác và đầy đủ.",
            "Cập nhật kết quả trúng thầu của các đơn vị có kết quả và gửi mail cho các bộ phận có liên quan.",
          ],
        },
      ],
    },
    {
      time: "01/2025 – 07/2025",
      company: "Công ty CP Hải Dược Phẩm Nguyên Gia",
      role: "Nhân Viên Kinh Doanh - Trình dược viên kênh ETC",
      bullets: [
        "Thực hiện chào thầu",
        "Tiếp cận, giới thiệu các loại thuốc mới, thuốc kê đơn (ETC) cho bác sĩ, dược sĩ trong bệnh viện",
        "Thường xuyên thăm hỏi, giải đáp thắc mắc về tác dụng, thành phần, liều dùng và tác dụng phụ của thuốc cho bác sĩ",
        "Nhắc thuốc, xin số lượng từ bác sĩ",
        "Theo dõi tình hình đấu thầu thuốc",
        "Xin số lượng dự trù thuốc của các khoa để đảm bảo cung ứng đầy đủ",
        "Duy trì các mối quan hệ cũ, phát triển và mở rộng các mối quan hệ mới",
        "Lập kế hoạch, triển khai các hoạt động bán hàng để đạt chỉ tiêu (KPIs) được giao",
        "Lập báo cáo công việc định kỳ, theo dõi thông tin đối thủ cạnh tranh, và khảo sát tình hình tiêu thụ thuốc tại bệnh viện.",
      ],
    },
    {
      time: "07/2025 – 02/2026",
      company: "Công Ty Cổ Phần Dược Phẩm Nguyên Gia",
      role: "Nhân viên nhà thuốc Bệnh Viện",
      bullets: [
        "Nhập thông tin từ hóa đơn, phiếu bán hàng của các công ty",
        "Kiểm tra, sắp xếp thuốc",
        "Nhận đơn thuốc, thanh toán, phát thuốc",
        "Nhập hóa đơn thuốc lên hệ thống",
        "Gửi thông tin mới, cập nhật thông tin ưu đãi đến các bác sĩ, phòng ban có liên quan",
      ],
    },
  ],
  certificates: [
    "Kỹ năng mềm",
    "Ứng dụng công nghệ thông tin cơ bản",
    "Chứng chỉ trình độ tiếng Anh A2",
  ],
  skills: [
    "Kỹ năng làm việc nhóm tốt",
    "Đặt mục tiêu, tổ chức và lập kế hoạch đạt hiệu quả trong công việc",
    "Sắp xếp thời gian làm việc hiệu quả",
  ],
};

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultData;
    const parsed = JSON.parse(raw);
    return parsed;
  } catch (e) {
    console.warn("Invalid cv data in storage, fallback default.", e);
    return defaultData;
  }
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  const data = loadData();

  const avatarImg = document.getElementById("avatarImg");
  if (!avatarImg) return; // nếu thiếu id thì thôi khỏi render
  const storedAvatar = localStorage.getItem(AVATAR_KEY);
  if (storedAvatar) avatarImg.src = storedAvatar;

  // header
  document.getElementById("cvName").textContent = data.name || "";
  document.getElementById("cvHeadline").textContent = data.headline || "";

  const metaEl = document.getElementById("cvMeta");
  metaEl.innerHTML = (data.meta || [])
    .map(
      (m) => `<li><b>${escapeHtml(m.label)}:</b> ${escapeHtml(m.value)}</li>`,
    )
    .join("");

  // education
  const eduEl = document.getElementById("eduRows");
  eduEl.innerHTML = (data.education || [])
    .map(
      (e) => `
      <div class="row">
        <div class="time">${escapeHtml(e.time)}</div>
        <div class="content">
          <div class="content-title">${escapeHtml(e.title)}</div>
          <div class="content-sub">${escapeHtml(e.sub)}</div>
        </div>
      </div>`,
    )
    .join("");

  // experiences
  const expEl = document.getElementById("expRows");
  expEl.innerHTML = (data.experiences || [])
    .map((x) => {
      const bullets = (x.bullets || [])
        .map((b) => {
          // item dạng {bold, sub[]}
          if (typeof b === "object" && b && b.bold) {
            const sub = (b.sub || [])
              .map((s) => `<li>${escapeHtml(s)}</li>`)
              .join("");
            return `
              <li class="no-dot">
                <b>${escapeHtml(b.bold)}</b>
                <ul class="sub-bullets">${sub}</ul>
              </li>`;
          }
          return `<li>${escapeHtml(b)}</li>`;
        })
        .join("");

      return `
      <div class="row">
        <div class="time">${escapeHtml(x.time)}</div>
        <div class="content">
          <div class="content-title">${escapeHtml(x.company)}</div>
          <div class="content-role">${escapeHtml(x.role)}</div>
          <ul class="bullets">${bullets}</ul>
        </div>
      </div>`;
    })
    .join("");

  // certificates
  const certEl = document.getElementById("certList");
  certEl.innerHTML = (data.certificates || [])
    .map((t) => `<div class="plain-item">• ${escapeHtml(t)}</div>`)
    .join("");

  // skills
  const skillEl = document.getElementById("skillList");
  skillEl.innerHTML = (data.skills || [])
    .map((t) => `<div class="plain-item">• ${escapeHtml(t)}</div>`)
    .join("");
}

render();
