# 🪙 JIRAYA - FINTECH
*personal budget tracking assistant*

![Version](https://img.shields.io/badge/version-2.0%20Stable-FFD700?style=for-the-badge&labelColor=000000)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-00FF88?style=for-the-badge&labelColor=000000)
![Backend](https://img.shields.io/badge/Backend-Google%20Apps%20Script-3399FF?style=for-the-badge&labelColor=000000)
![Database](https://img.shields.io/badge/Database-Google%20Sheets-107C41?style=for-the-badge&labelColor=000000)

---

## 📖 Brief Overview
**Jiraya-Fintech** adalah aplikasi manajemen keuangan pribadi pintar (Personal Budget Assistant) berarsitektur *serverless* yang memadukan keandalan *backend* **Google Apps Script**, kapasitas *database* **Google Sheets**, dan kecerdasan buatan **Google Gemini AI**. 

Didesain dengan pendekatan *mobile-first*, aplikasi ini berjalan di atas repositori GitHub Pages menggunakan teknik **Nested Iframe High-Performance** dan telah mendukung penuh standar **Progressive Web App (PWA)** untuk diinstal langsung ke layar utama Android maupun iOS tanpa melalui App Store atau Play Store.

---

## ⚡ Key Features
* **🔒 Multi-User & PIN Authentication:** Otentikasi mandiri dengan sistem pemisahan data transaksi antar pengguna secara otomatis pada tab worksheet yang berbeda.
* **🤖 Smart Gemini AI Assistant:** Integrasi langsung dengan `gemini-1.5-flash` untuk menganalisis kebiasaan pengeluaran dan memberikan saran penghematan personal secara *real-time*.
* **⚡ Quick-Add Floating Action Button (FAB):** Tombol melayang ergonomis berdesain kapsul dengan preset transaksi rutin favorit yang dapat dikustomisasi dan disimpan di memori lokal (*localStorage*).
* **🔍 Instant Client-Side Search & Filter Chips:** Pencarian riwayat transaksi dan filter tipe (Masuk/Keluar) dalam 0 milidetik tanpa membebani server *backend*.
* **📊 Dynamic Visual Charts & Budget Meter:** Grafik Doughnut interaktif (Chart.js) untuk visualisasi pengeluaran berdasarkan kategori serta indikator batas aman saldo.
* **👁️ Privacy Mode (Eye Toggle):** Satu sentuhan untuk menyembunyikan seluruh nominal uang menjadi `Rp •••••••` saat aplikasi dibuka di tempat umum.
* **📁 Client-Side Excel (.xlsx) Export:** Unduh laporan bulanan lengkap dengan kolom yang rapi dan **Timestamp Tracking** otomatis (waktu file diunduh/dibuat).
* **🔔 Native Mobile Toast Notifications:** Sistem notifikasi kapsul interaktif pengganti `alert()` bawaan browser yang bebas dari teks alamat domain URL.

---

## 🛠️ Tech Stack
* **Frontend Shell:** HTML5, CSS3 (CSS Variables, Hardware Acceleration), Vanilla JavaScript (ES6+), PWA Service Worker (`sw.js`).
* **UI/UX Libraries:** FontAwesome 6.4 (Icons), Chart.js (Data Visualization), SheetJS / xlsx.js (Excel Exporting).
* **Backend Engine:** Google Apps Script (`Code.gs`) dengan *dynamic model handling* dan otorisasi `UrlFetchApp`.
* **Database & Storage:** Google Sheets (Worksheet Database) & Browser `localStorage` (Client Caching & Presets).
* **Hosting & Encapsulation:** GitHub Pages dengan teknik *High-Performance Nested Iframe*.

---

## 📈 Versioning History

### [v1.0] - *Alpha / Core Engine*
* Implementasi *backend* dasar `Code.gs` dan struktur *database* Google Sheets (Tab `USERS`, `Logs`, dan template user).
* Integrasi awal API Google Gemini menggunakan `UrlFetchApp`.
* Pembuatan struktur dasar *Single Page Application* (SPA) menggunakan `index.html`, `CSS.html`, dan `JS.html`.

### [v1.2] - *Bugfixes & AI Stability*
* Perbaikan bug kritis pada *infinite loading* asisten AI dan error *404 not found* pada endpoint Gemini.
* Implementasi sistem *auto-fallback model* (`gemini-1.5-flash-latest`) dan penanganan error otomatis di server.
* Fix bug "tab tidak ditemukan" pada saat pembuatan akun user baru di panel admin.

### [v1.5] - *UI/UX Overhaul & Caching*
* Transformasi desain antarmuka menjadi *mobile-first* dengan tema Hitam-Kuning (Gold Accent) bebas distraksi.
* Integrasi pustaka Chart.js untuk menampilkan grafik pengeluaran mingguan/bulanan.
* Implementasi *caching* data transaksi di `localStorage` klien untuk peningkatan kecepatan render dasbor.
* Migrasi sistem peringatan browser `alert()` standar menjadi sistem *Toast Notification* kapsul.

### [v1.8] - *Productivity Boost*
* Penambahan fitur **Quick-Add Floating Action Button (FAB)** di sudut kanan bawah layar.
* Implementasi fitur **Instant Search & Filter Chips** (Semua/Masuk/Keluar) berbasis memori klien.
* Penambahan menu modal interaktif untuk menambah, mengubah, dan menyimpan kustomisasi tombol preset Quick-Add.

### [v2.0] - *Stable PWA Release (Current)*
* Implementasi fitur **Eksport Laporan Excel (.xlsx)** bulanan langsung dari browser klien menggunakan SheetJS dilengkapi dengan metadata *timestamp* pelacakan.
* Pembaruan visual top bar header dengan *branding* tebal **"JIRAYA - FINTECH"** (*uppercase*) dan *subtitle* kursif.
* Penambahan fitur **Privacy Mode** (tombol ikon mata) untuk menjaga kerahasiaan saldo pengguna di area publik.
* Pengemasan akhir aplikasi ke dalam repositori GitHub Pages menggunakan arsitektur *Nested Iframe* dan kapabilitas **PWA (Service Worker & Manifest)**.

---

## 🚀 Take Control of Your Financial Freedom!
Kesehatan finansial tidak dimulai dari seberapa banyak uang yang Anda hasilkan, melainkan dari seberapa akurat Anda melacak dan mengendalikan setiap rupiah yang Anda keluarkan. **Jiraya-Fintech** hadir untuk memberikan Anda kendali penuh atas data keuangan Anda sendiri—tanpa biaya langganan, tanpa iklan, dan tanpa kompromi privasi. Mulailah mencatat, analisis kebiasaan Anda bersama Asisten AI, dan capai kebebasan finansial Anda hari ini juga!

---

<p align="center">
  <b>(c) 2026 - Created by "JIraya One Tech"</b>
</p>