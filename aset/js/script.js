
function filterProduct(category, button) {

  // Menghapus status aktif dari semua tombol
  const buttons = document.querySelectorAll('.btn-filter');

  buttons.forEach(btn => {
      btn.classList.remove('active');
  });

  // Mengaktifkan tombol yang dipilih
  if (button) {
      button.classList.add('active');
  }

  // Mengambil semua kartu produk
  const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {

      if (category === 'all') {
          card.classList.remove('hide');
      } else {
          if (card.classList.contains('item-' + category)) {
              card.classList.remove('hide');
          } else {
              card.classList.add('hide');
          }
      }

  });
}
