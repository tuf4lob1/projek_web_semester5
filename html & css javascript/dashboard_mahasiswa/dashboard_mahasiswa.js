document.addEventListener('DOMContentLoaded', () => {
    // Mengelola navigasi sidebar
    const links = document.querySelectorAll('.sidebar ul li a');
    const sections = document.querySelectorAll('.content-section');
    const pageTitle = document.getElementById('page-title');
  
    // Sidebar navigation
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        // Update active link
        links.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
  
        // Show the corresponding section
        sections.forEach(section => section.classList.remove('active'));
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.classList.add('active');
        }
  
        // Update page title
        pageTitle.textContent = link.textContent.trim();
      });
    });
  
    // Mengelola tabel pengajuan pindah jurusan
    const pengajuanData = [
      { no: 1, tanggal: "2024-11-01", alasan: "Ingin fokus ke bidang pemrograman", status: "Diproses" },
      { no: 2, tanggal: "2024-10-15", alasan: "Keselarasan dengan cita-cita", status: "Disetujui" },
      { no: 3, tanggal: "2024-09-20", alasan: "Permasalahan akademik", status: "Ditolak" },
    ];
  
    const tableBody = document.getElementById('pengajuan-table-body');
    pengajuanData.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.no}</td>
        <td>${item.tanggal}</td>
        <td>${item.alasan}</td>
        <td>${item.status}</td>
      `;
      tableBody.appendChild(row);
    });
  
    // Notifikasi
    const markReadButtons = document.querySelectorAll('.mark-read-btn');
  
    markReadButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const notificationItem = e.target.closest('.notification-item');
        notificationItem.classList.remove('unread');
        e.target.remove(); // Hapus tombol setelah ditandai
        alert('Notifikasi telah ditandai sebagai sudah dibaca.');
      });
    });
  
    // Logout
    const logoutButton = document.getElementById('logout-button');
  
    logoutButton.addEventListener('click', () => {
      // Simulasi penghapusan sesi (di-backend ini biasanya melibatkan penghapusan token)
      alert('Anda telah berhasil logout.');
  
      // Arahkan ke halaman login
      window.location.href = 'login.html'; // Ganti dengan URL halaman login Anda
    });
  });
  

  // pesan admin

  // Ambil pesan dari localStorage
const feedback = localStorage.getItem('pesanMahasiswa') || '';

// Ambil elemen feedback-container dan elemen <p> di dalamnya
const feedbackContainer = document.getElementById('feedback-container');
const feedbackParagraph = feedbackContainer.querySelector('p');

// Jika ada pesan, tampilkan, jika tidak gunakan default
if (feedback.trim()) {
    feedbackParagraph.textContent = feedback; // Masukkan pesan ke elemen <p>
    feedbackParagraph.classList.remove('no-feedback'); // Hapus kelas "no-feedback" jika ada
} else {
    feedbackParagraph.textContent = 'Belum ada pesan dari admin.'; // Pesan default
}

  