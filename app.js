const API_URL = "https://docs.google.com/spreadsheets/d/10oHoU4QOl17oRTXcWHlvtG0TPpNvLufcUCpXPXEQy7o/edit?usp=sharing";

function renderRooms(rooms) {
  const list = document.getElementById("roomList");
  list.innerHTML = "";

  rooms.forEach(r => {
    const div = document.createElement("div");

    const status = r.status || "empty";
    div.className = "room-card " + status;

    let badgeText = {
      paid: "Đã đóng",
      unpaid: "Chưa đóng",
      empty: "Phòng trống"
    }[status];

    div.innerHTML = `
      <div class="room-header">${r.room} - ${r.name || "Trống"}</div>
      <div class="room-sub">
        💵 ${format(r.rent)} | ⚡ ${r.electric || 0} | 💧 ${r.water || 0}
      </div>
      <div class="badge ${status}">${badgeText}</div>
    `;

    list.appendChild(div);
  });
}
