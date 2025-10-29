// =============================
// SISTEM LOGIN & AUTH SITTA
// =============================

// Nama key di localStorage untuk session
const SESSION_KEY = "userSession";


if (location.protocol === "file:") {
  alert("Harus dijalankan melalui server lokal (misal: Live Server).");
}

// --- LOGIN ---
// Dipanggil di index.html
function initLoginForm() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginError = document.getElementById("loginError");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Cari user di dataPengguna dari data.js
    const user = (window.dataPengguna || []).find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Simpan data session ke localStorage
      const sessionData = {
        id: user.id,
        nama: user.nama,
        email: user.email,
        role: user.role,
        lokasi: user.lokasi,
        loggedAt: new Date().toISOString(),
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));

      // Arahkan ke dashboard
      window.location.href = "./dashboard.html";
    } else {
      loginError.style.display = "block";
      loginError.textContent = "Email atau password salah.";
    }
  });
}

// --- CEK LOGIN DI HALAMAN LAIN ---
function getSession() {
  const raw = localStorage.getItem(SESSION_KEY);
  try {
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function isLoggedIn() {
  return !!getSession();
}

function checkAuth(redirectTo = "./index.html") {
  if (!isLoggedIn()) {
    alert("Silakan login terlebih dahulu!");
    window.location.href = redirectTo;
  }
}

// --- TAMPILKAN INFO USER DI HALAMAN SETELAH LOGIN ---
function showUserInfo(selector) {
  const el = document.querySelector(selector);
  const s = getSession();
  if (el && s) {
    el.textContent = s.nama || s.email;
  }
}

// --- LOGOUT ---
function logout(redirectTo = "./index.html") {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = redirectTo;
}

// --- AUTO-INISIALISASI DI HALAMAN LOGIN ---
document.addEventListener("DOMContentLoaded", initLoginForm);
