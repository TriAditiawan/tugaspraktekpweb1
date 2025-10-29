document.addEventListener("DOMContentLoaded", () => {
  const listContainer = document.getElementById("bahanList");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");

  // Fungsi buat nampilin semua bahan ajar
  dataBahanAjar.forEach((bahan, index) => {
    const item = document.createElement("div");
    item.classList.add("bahan-item");
    item.innerHTML = `
      <img src="${bahan.cover}" alt="${bahan.namaBarang}">
      <h4>${bahan.namaBarang}</h4>
      <button class="btn-detail" data-index="${index}">Lihat Detail</button>
    `;
    listContainer.appendChild(item);
  });

  // Ketika tombol "Lihat Detail" diklik
  listContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-detail")) {
      const index = e.target.dataset.index;
      const bahan = dataBahanAjar[index];
      
      // Isi popup
      document.getElementById("popupCover").src = bahan.cover;
      document.getElementById("popupNama").textContent = bahan.namaBarang;
      document.getElementById("popupLokasi").textContent = bahan.kodeLokasi;
      document.getElementById("popupKode").textContent = bahan.kodeBarang;
      document.getElementById("popupJenis").textContent = bahan.jenisBarang;
      document.getElementById("popupEdisi").textContent = bahan.edisi;
      document.getElementById("popupStok").textContent = bahan.stok;

      popup.style.display = "flex";
    }
  });

  // Tutup popup
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Tutup popup kalau klik luar area
  window.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
  });
});
