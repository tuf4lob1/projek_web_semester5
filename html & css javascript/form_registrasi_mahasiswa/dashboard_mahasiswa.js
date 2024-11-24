document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".sidebar ul li a");
    const pageTitle = document.getElementById("page-title");
    const mainContent = document.getElementById("main-content");
  
    const contentMap = {
      "menu-dashboard": {
        title: "Dashboard",
        content: "<p>Selamat datang di Dashboard Mahasiswa!</p>",
      },
      "menu-pindah-jurusan": {
        title: "Pengajuan Pindah Jurusan",
        content: "<p>Isi form untuk mengajukan pindah jurusan.</p>",
      },
      "menu-status-pengajuan": {
        title: "Status Pengajuan",
        content: "<p>Lihat status pengajuan pindah jurusan Anda.</p>",
      },
      "menu-profil": {
        title: "Profil",
        content: "<p>Lihat dan edit informasi profil Anda.</p>",
      },
      "menu-logout": {
        title: "Logout",
        content: "<p>Anda telah keluar dari sistem.</p>",
      },
    };
  
    menuItems.forEach((menu) => {
      menu.addEventListener("click", (e) => {
        e.preventDefault();
        const menuId = e.target.id;
  
        if (contentMap[menuId]) {
          pageTitle.textContent = contentMap[menuId].title;
          mainContent.innerHTML = contentMap[menuId].content;
        }
      });
    });
  });
  