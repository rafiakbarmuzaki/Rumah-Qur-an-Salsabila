# Website Rumah Qur'an Nurul Hikmah

Struktur file:

```
index.html      -> isi & struktur halaman
css/style.css   -> semua tampilan (warna, font, layout)
js/main.js      -> menu mobile, animasi scroll, form WhatsApp
images/         -> taruh foto-foto Anda di sini
```

## Cara membuka

Klik dua kali `index.html`, atau buka lewat browser. Tidak perlu server
atau instalasi apa pun — ini website statis biasa.

## Mengganti gambar

Selama Anda belum menaruh file gambar, bagian foto akan tampil sebagai
kotak warna polos bertuliskan nama file yang perlu diganti — jadi
tampilannya tetap rapi, tidak seperti gambar rusak.

Cukup taruh file dengan **nama persis seperti ini** di folder `images/`,
dan foto langsung muncul menggantikan kotak placeholder-nya:

| Nama file           | Dipakai untuk                          | Saran ukuran     |
|----------------------|-----------------------------------------|-------------------|
| `foto-pemilik.jpg`   | Foto Ustadz Ahmad Fauzan (profil)       | potret, 800x1000px |
| `galeri-1.jpg`       | Foto galeri kegiatan mengaji            | 800x800px          |
| `galeri-2.jpg`       | Foto galeri (setoran hafalan)           | 800x800px          |
| `galeri-3.jpg`       | Foto galeri (kelas Iqra anak)           | 800x800px          |
| `galeri-4.jpg`       | Foto galeri (wisuda tahfidz)            | 800x800px          |
| `galeri-5.jpg`       | Foto galeri (kelas tahsin)              | 800x800px          |
| `galeri-6.jpg`       | Foto galeri (ruang belajar)             | 800x800px          |

Kalau ingin pakai nama file atau format lain (mis. `.png`), cari baris
`src="images/..."` di `index.html` dan sesuaikan nama filenya.

## Mengganti teks

Semua teks (nama lembaga, profil pengasuh, jadwal, biaya, nomor
WhatsApp, dll.) ada langsung di `index.html` — cari teksnya, lalu edit.

Nomor WhatsApp dipakai di dua tempat:
- `index.html`, di bagian footer (`href="https://wa.me/6281234567890"`)
- `js/main.js`, variabel `NOMOR_WA` di dalam fungsi `setupDaftarForm()`

Ganti keduanya dengan nomor WhatsApp asli Anda (format: kode negara
tanpa tanda `+`, contoh nomor 0812-3456-7890 menjadi `6281234567890`).

## Mengganti warna

Semua warna diatur di bagian paling atas `css/style.css`, di dalam
`:root { ... }`. Ganti nilai hex-nya untuk mengubah skema warna di
seluruh halaman sekaligus.

## Menaruh online (hosting gratis)

File-file ini bisa langsung di-upload ke layanan hosting statis
gratis seperti Netlify, Vercel, atau GitHub Pages — tinggal drag &
drop folder ini.
