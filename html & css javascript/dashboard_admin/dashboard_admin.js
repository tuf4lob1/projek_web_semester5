
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.sidebar ul li a');
  const sections = document.querySelectorAll('.content-section');
  const pageTitle = document.getElementById('page-title');

  // Data contoh permohonan
  const verificationData = [
    { no: 1, nama: "Budi Santoso", nim: "12345678", asal: "Teknik Elektro", tujuan: "Teknik Informatika", alasan: "Tertarik dengan pemrograman", status: "Menunggu Verifikasi" },
    { no: 2, nama: "Siti Aminah", nim: "87654321", asal: "Teknik Mesin", tujuan: "Teknik Industri", alasan: "Keselarasan minat", status: "Disetujui" },
    { no: 3, nama: "Andi Wijaya", nim: "11223344", asal: "Akuntansi", tujuan: "Manajemen", alasan: "Peluang karir lebih luas", status: "Ditolak" },
  ];

  // Render data ke tabel
  const tableBody = document.getElementById('verification-table-body');
  verificationData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.no}</td>
      <td>${item.nama}</td>
      <td>${item.nim}</td>
      <td>${item.asal}</td>
      <td>${item.tujuan}</td>
      <td>${item.alasan}</td>
      <td>${item.status}</td>
    `;
    tableBody.appendChild(row);
  });

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
      target.classList.add('active');

      // Update page title
      pageTitle.textContent = link.textContent.trim();
    });
  });
});
// dashboard
document.addEventListener('DOMContentLoaded', () => {
  // Data contoh (nanti diambil dari API)
  const summaryData = {
    total: 25,
    new: 5,
    approved: 15,
    rejected: 5,
  };

  // Isi data ke elemen dashboard
  document.querySelector('.summary-card:nth-child(1) p').textContent = summaryData.total;
  document.querySelector('.summary-card:nth-child(2) p').textContent = summaryData.new;
  document.querySelector('.summary-card:nth-child(3) p').textContent = summaryData.approved;
  document.querySelector('.summary-card:nth-child(4) p').textContent = summaryData.rejected;
});


// perbahuan status permohonan
document.addEventListener('DOMContentLoaded', () => {
  const updateButtons = document.querySelectorAll('.update-btn');

  updateButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const row = e.target.closest('tr');
      const name = row.cells[1].innerText; // Nama mahasiswa
      const newStatus = row.querySelector('.status-dropdown').value; // Status baru

      alert(`Status untuk ${name} berhasil diubah menjadi: ${newStatus}`);
      // Implementasikan fungsi untuk mengirim status ke backend di sini
    });
  });
});


// perubahan status permohonan untuk pesan
function openMessageForm(studentName) {
  // Tampilkan form pesan
  const messageForm = document.getElementById("message-form");
  const studentNameDisplay = document.getElementById("student-name");

  // Tampilkan form dengan nama mahasiswa
  messageForm.style.display = "block";
  studentNameDisplay.textContent = `Pesan untuk: ${studentName}`;
}

function sendMessage() {
  const textarea = document.getElementById("admin-message");
  const message = textarea.value;

  if (message.trim()) {
    alert(`Pesan untuk mahasiswa terkirim: "${message}"`);
    textarea.value = ""; // Bersihkan textarea
  } else {
    alert("Pesan tidak boleh kosong!");
  }
}

function updateStatus(studentName) {
  alert(`Status untuk ${studentName} telah diperbarui!`);
}

// notifikasi
document.addEventListener('DOMContentLoaded', () => {
  const markReadButtons = document.querySelectorAll('.mark-read-btn');

  markReadButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const notificationItem = e.target.closest('.notification-item');
      notificationItem.classList.remove('unread');
      e.target.remove(); // Hapus tombol setelah ditandai
      alert('Notifikasi telah ditandai sebagai sudah dibaca.');
    });
  });
});

//<!-- logout -->
document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logout-button');

  logoutButton.addEventListener('click', () => {
    // Simulasi penghapusan sesi (di-backend ini biasanya melibatkan penghapusan token)
    alert('Anda telah berhasil logout.');

    // Arahkan ke halaman login
    window.location.href = 'login.html'; // Ganti dengan URL halaman login Anda
  });
});




