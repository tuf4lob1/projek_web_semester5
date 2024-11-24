// Ambil elemen input dan ikon
const passwordInput = document.getElementById('password');
const toggleEye = document.getElementById('toggleEye');

// Tambahkan event listener untuk klik ikon
toggleEye.addEventListener('click', () => {
  // Cek tipe input (password atau text)
  const isPassword = passwordInput.type === 'password';

  // Ubah tipe input
  passwordInput.type = isPassword ? 'text' : 'password';

  // Ubah ikon
  toggleEye.classList.toggle('fa-eye-slash', isPassword); // Mata dengan garis miring
  toggleEye.classList.toggle('fa-eye', !isPassword);     // Mata terbuka
});
