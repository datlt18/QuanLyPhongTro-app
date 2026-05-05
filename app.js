const API_URL = "https://docs.google.com/spreadsheets/d/10oHoU4QOl17oRTXcWHlvtG0TPpNvLufcUCpXPXEQy7o/edit?usp=sharing";

async function loadRooms() {
  const res = await fetch(API_URL);
  const data = await res.json();
  renderRooms(data);
}

function renderRooms(rooms) {
  const list = document.getElementById("roomList");
  list.innerHTML = "";

  rooms.forEach(r => {
    const div = document.createElement("div");

    div.className = "room-card " + (r.status || "empty");

    div.innerHTML = `
      <b>${r.room}</b> - ${r.name || "Trống"}<br>
      💵 ${format(r.rent)} | ⚡ ${r.electric || 0}
    `;

    list.appendChild(div);
  });
}

function format(n) {
  return n ? Number(n).toLocaleString("vi-VN") + "đ" : "-";
}

function addRoom() {
  alert("Chức năng sẽ làm sau");
}

loadRooms();