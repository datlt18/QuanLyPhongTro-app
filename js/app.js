const roomList = document.getElementById('roomList');

if (roomList) {
  rooms.forEach((item, index) => {

    const roomCard = document.createElement('div');
    roomCard.className = 'room-card';

    roomCard.innerHTML = `
      <div class="room-left">
        <div class="room-badge">P${index + 1}</div>

        <div>
          <div class="room-name">${item.room}</div>
          <div class="room-tenant">${item.tenant}</div>
          <div class="room-price">${item.price}</div>
        </div>
      </div>

      <div class="status ${item.className}">
        ${item.status}
      </div>
    `;

    roomList.appendChild(roomCard);
  });
}