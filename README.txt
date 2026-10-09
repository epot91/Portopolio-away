PORTFOLIO — GRAPHIC DESIGN & SCREEN PRINTING
=============================================

ISI FOLDER
- index.html        Struktur website
- css/style.css     Semua gaya visual, layout responsif, dan efek 3D
- js/script.js      Filter kategori, menu mobile, dan preview gambar
- assets/karya/     Simpan foto hasil karya di sini

CARA MENJALANKAN
1. Ekstrak ZIP ke folder komputer.
2. Buka folder portfolio_design_screenprinting.
3. Klik dua kali index.html untuk membuka website di browser.
   Tidak perlu instalasi atau server untuk preview lokal.

CARA MEMASUKKAN FOTO KARYA
1. Siapkan foto JPG/PNG karya desain atau screen printing.
2. Salin foto ke folder assets/karya/.
3. Gunakan nama file berikut agar langsung tampil:
   karya-01.jpg
   karya-02.jpg
   karya-03.jpg
   karya-04.jpg
   karya-05.jpg
   karya-06.jpg
4. Jika foto kamu PNG atau nama file berbeda, buka index.html lalu cari
   data-image="assets/karya/karya-01.jpg" dan ubah nama/path sesuai file.
   Lakukan juga untuk karya lainnya.
5. Kategori kartu bisa diubah melalui atribut data-category:
   graphic = Desain Grafis
   vector  = Vector
   print   = Screen Printing

CARA MENGGANTI KONTAK
- Buka index.html.
- Cari emailkamu@example.com lalu ganti dengan email kamu.
- Kamu juga bisa mengubah teks nama/brand "PORTOFOLIO" dan deskripsi langsung di HTML.

CATATAN
- Font DM Sans dan Space Grotesk dimuat dari Google Fonts; jika offline,
  website tetap berjalan menggunakan font fallback.
- Ini adalah website statis. Untuk tayang online, upload seluruh isi folder ke
  hosting statis seperti GitHub Pages, Netlify, atau hosting domain milikmu.
