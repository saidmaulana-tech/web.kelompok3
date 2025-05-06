function bukaModal() {
    document.getElementById("modalPembelian").style.display = "flex";
  }
  
  function tutupModal() {
    document.getElementById("modalPembelian").style.display = "none";
  }
  
  function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
  }
  
  // Tutup modal jika klik di luar
  window.onclick = function(event) {
    const modal = document.getElementById("modalPembelian");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  
  // Tampilkan notifikasi saat buat pesanan
  document.addEventListener("DOMContentLoaded", function () {
    const btnSubmit = document.querySelector(".btn-submit");
    btnSubmit.addEventListener("click", function () {
      tutupModal();
      document.getElementById("notifikasiPembayaran").style.display = "flex";
    });
  });