document.addEventListener("DOMContentLoaded", () => {
  const cariBtn = document.getElementById("btnCari");
  const input = document.getElementById("inputDO");

  cariBtn.addEventListener("click", () => {
    const nomorDO = input.value.trim();

    if (!nomorDO) {
      alert("Masukkan nomor Delivery Order terlebih dahulu!");
      return;
    }

    // cari berdasarkan key di dataTracking
    const hasil = dataTracking[nomorDO];

    if (hasil) {
      // simpan data hasil pencarian ke localStorage
      localStorage.setItem("hasilTracking", JSON.stringify(hasil));
      // arahkan ke halaman tracking
      window.location.href = "tracking.html";
    } else {
      alert("Nomor DO tidak ditemukan!");
    }
  });
});