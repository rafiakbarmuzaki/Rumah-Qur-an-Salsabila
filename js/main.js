// =========================================================
// Rumah Qur'an Nurul Hikmah — main.js
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  setYear();
  setupMobileNav();
  setupActiveNavHighlight();
  setupScrollReveal();
  setupImagePlaceholders();
  setupDaftarForm();
});

// Tahun otomatis di footer
function setYear() {
  const el = document.getElementById('tahun');
  if (el) el.textContent = new Date().getFullYear();
}

// Menu mobile (hamburger)
function setupMobileNav() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Tutup menu setelah memilih link (di layar kecil)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Menandai link nav yang aktif sesuai posisi scroll
function setupActiveNavHighlight() {
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('.main-nav a[href^="#"]');
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute('id');
      links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach(section => observer.observe(section));
}

// Animasi muncul saat elemen kelihatan (scroll reveal)
function setupScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    items.forEach(item => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(item => observer.observe(item));
}

// Kalau file gambar (foto pemilik / galeri) belum diganti user,
// tampilkan placeholder yang tetap rapi alih-alih ikon gambar rusak.
function setupImagePlaceholders() {
  const images = document.querySelectorAll('.profile-photo img, .galeri-item img');

  images.forEach(img => {
    img.addEventListener('error', () => {
      const wrapper = img.parentElement;
      wrapper.classList.add('img-missing');
      const fileName = img.getAttribute('src').split('/').pop();
      wrapper.setAttribute('data-placeholder-label', `Ganti gambar ini:\n${fileName}`);
    });
  });
}

// Form daftar -> buka WhatsApp dengan pesan yang sudah terisi
function setupDaftarForm() {
  const form = document.getElementById('daftarForm');
  if (!form) return;

  const NOMOR_WA = '6281234567890'; // ganti dengan nomor WhatsApp asli Anda

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nama = document.getElementById('fNama').value.trim();
    const calonSantri = document.getElementById('fSantri').value.trim();
    const kelas = document.getElementById('fKelas').value;
    const pesan = document.getElementById('fPesan').value.trim();

    if (!nama) {
      document.getElementById('fNama').focus();
      return;
    }

    let teks = `Assalamu'alaikum, saya ${nama} ingin mendaftar di Rumah Qur'an Nurul Hikmah.`;
    if (calonSantri) teks += `\nCalon santri: ${calonSantri}`;
    teks += `\nKelas yang diminati: ${kelas}`;
    if (pesan) teks += `\nPesan: ${pesan}`;

    const url = `https://wa.me/6281776789553?text=${encodeURIComponent(teks)}`;
    window.open(url, '_blank', 'noopener');
  });
}
