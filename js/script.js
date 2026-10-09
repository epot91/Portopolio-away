const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.work-card').forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

// Jika file foto ditemukan, tampilkan foto. Jika belum ada, placeholder tetap terlihat.
document.querySelectorAll('.work-image').forEach(tile => {
  const path = tile.dataset.image;
  const img = new Image();
  img.onload = () => {
    tile.classList.remove('placeholder');
    tile.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,.25), transparent 45%), url("${path}")`;
    tile.style.backgroundSize = 'cover';
    tile.style.backgroundPosition = 'center';
    tile.innerHTML = '<span class="placeholder-number">' + (tile.querySelector('.placeholder-number')?.textContent || '') + '</span>';
  };
  img.src = path;
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
document.querySelectorAll('.work-image').forEach(tile => {
  tile.addEventListener('click', () => {
    const path = tile.dataset.image;
    const test = new Image();
    test.onload = () => {
      lightboxImage.src = path;
      lightboxCaption.textContent = tile.closest('.work-card').querySelector('h3').textContent;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    };
    test.onerror = () => {
      lightboxCaption.textContent = 'Tambahkan foto karya di folder assets/karya/ untuk mengaktifkan pratinjau.';
      lightboxImage.removeAttribute('src');
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    };
    test.src = path;
  });
});
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.removeAttribute('src');
}
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
document.getElementById('year').textContent = new Date().getFullYear();

// Ganti email di index.html dengan alamat email milikmu.
