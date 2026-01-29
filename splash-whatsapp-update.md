# Update Splash Screen & WhatsApp Number

## Tanggal: 29 Januari 2026

### ✅ Perubahan yang Berhasil Diterapkan:

## 1. Splash Screen PWA

**File yang Dibuat/Diubah:**
- `/app/components/SplashScreen.tsx` (baru)
- `/app/layout.tsx` (ditambahkan import SplashScreen)
- `/app/globals.css` (ditambahkan animasi)

**Fitur Splash Screen:**
- Muncul saat pertama kali buka PWA (menggunakan sessionStorage)
- Durasi: 2.5 detik
- Background: Gradient purple (sesuai brand DRW TRANS)
- Logo: Bounce animation
- Brand name: DRW TRANS dengan tagline
- Loading indicator: 3 dots dengan pulse animation
- Fade in/scale in animation

**Animasi yang Ditambahkan:**
- `@keyframes scaleIn` - untuk logo dan konten
- `@keyframes bounceSlow` - untuk logo bounce
- `@keyframes pulseDot` - untuk loading dots

---

## 2. Update Nomor WhatsApp

**Nomor Baru:** +62 811-2050-0800 (6281120500800)

**File yang Diupdate:**

### Homepage (`/app/page.tsx`)
- Function `getWhatsAppLink()` untuk tombol "Pesan" di kartu armada
- Format: `https://wa.me/6281120500800?text=...`

### Mobile Header (`/app/components/MobileHeader.tsx`)
- Icon WhatsApp di header kanan atas
- Format: `https://wa.me/6281120500800`

### Armada Page (`/app/armada/page.tsx`)
- Tombol "Pesan Sekarang" untuk Bus
- Tombol "Pesan Sekarang" untuk HiAce
- Format: `https://wa.me/6281120500800?text=...`

### Harga Page (`/app/harga/page.tsx`)
- Tombol telepon di bagian contact
- Format: `tel:+6281120500800`
- Display: (+62) 811 2050 0800

### Booking Page (`/app/booking/page.tsx`)
- WhatsApp number untuk form booking
- Variable: `whatsappNumber = '081120500800'`
- Otomatis convert ke format internasional

### Contact Page (`/app/contact/page.tsx`)
- WhatsApp number di halaman kontak
- Variable: `whatsappNumber = '081120500800'`
- Fallback dari environment variable

---

## 📱 Hasil Verifikasi:

### Splash Screen:
- ✅ Muncul saat pertama kali load
- ✅ Animasi smooth (fade in + scale in)
- ✅ Logo bounce animation berjalan
- ✅ Loading dots pulse animation berjalan
- ✅ Hilang setelah 2.5 detik
- ✅ Tidak muncul lagi di session yang sama (sessionStorage)

### WhatsApp Links:
- ✅ Semua link WhatsApp sudah update ke 6281120500800
- ✅ Format link sudah benar (wa.me/6281120500800)
- ✅ Pre-filled message untuk booking berfungsi
- ✅ Nomor telepon display sudah benar: (+62) 811 2050 0800

---

## 🎯 User Experience:

1. **First Time Install/Open:**
   - User melihat splash screen dengan logo DRW TRANS
   - Animasi smooth dan profesional
   - Loading indicator memberikan feedback visual

2. **WhatsApp Integration:**
   - Semua tombol "Pesan" langsung ke WhatsApp
   - Pre-filled message memudahkan user
   - Nomor konsisten di semua halaman

---

## Status: ✅ SELESAI
Siap untuk di-push ke GitHub dan deploy ke Vercel.
