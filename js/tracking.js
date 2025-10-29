document.addEventListener("DOMContentLoaded", () => {
  const hasil = JSON.parse(localStorage.getItem("hasilTracking"));

  if (!hasil) {
    document.body.innerHTML = "<h3>Data tidak ditemukan!</h3>";
    return;
  }

  // tampilkan nama & status
  document.getElementById("namaPenerima").textContent = hasil.nama;
  document.getElementById("statusPengiriman").textContent = hasil.status;

  // isi tabel detail ekspedisi
  const detailTable = document.getElementById("detailTable");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${hasil.ekspedisi}</td>
    <td>${hasil.tanggalKirim}</td>
    <td>${hasil.paket}</td>
    <td>${hasil.total}</td>
  `;
  detailTable.appendChild(tr);

  // isi timeline perjalanan
  const timelineContainer = document.getElementById("timelineContainer");
  hasil.perjalanan.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("timeline-item");
    div.innerHTML = `
      <strong>${item.keterangan}</strong>
      <span>${item.waktu}</span>
    `;
    timelineContainer.appendChild(div);
  });

  // hapus data agar tidak tersimpan terus
  localStorage.removeItem("hasilTracking");
});
