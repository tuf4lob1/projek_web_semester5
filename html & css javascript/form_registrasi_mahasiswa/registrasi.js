// Event listener untuk form submit
document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah refresh halaman saat submit

    // Ambil nilai dari form input
    const name = document.getElementById("name").value.trim();
    const npm = document.getElementById("npm").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validasi sederhana untuk memastikan semua kolom terisi
    if (name && npm && username && password) {
        // Tampilkan pesan sukses
        const successMessage = document.getElementById("successMessage");
        successMessage.textContent = "Akun berhasil terdaftar!";
        successMessage.classList.remove("hidden");

        // Reset form setelah pendaftaran berhasil
        document.getElementById("registerForm").reset();
    } else {
        // Tampilkan alert jika ada kolom yang kosong
        alert("Semua kolom harus diisi!");
    }
});

// Fitur toggle untuk melihat/mengembunyikan password
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// Event listener untuk ikon mata
togglePassword.addEventListener("click", function () {
    // Ubah tipe input antara password dan text
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;

    // Ganti ikon (mata terbuka untuk melihat, mata tertutup untuk menyembunyikan)
    togglePassword.innerHTML = type === "password" ? "&#128065;" : "&#128065;";
});
