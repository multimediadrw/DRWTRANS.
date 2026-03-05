import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="hidden lg:block bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo-drwtrans.png" alt="DRW TRANS" width={44} height={44} className="object-contain" />
              <span className="text-xl font-bold">DRW TRANS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Perusahaan penyedia layanan transportasi bus terpercaya di Bandung, Jawa Barat. Melayani seluruh Indonesia.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-royal-purple rounded-full flex items-center justify-center transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-royal-purple rounded-full flex items-center justify-center transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-royal-purple rounded-full flex items-center justify-center transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="font-bold text-base mb-4 text-white">Layanan</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/bisnis" className="hover:text-white transition-colors">Transportasi Bisnis</Link></li>
              <li><Link href="/pribadi" className="hover:text-white transition-colors">Transportasi Pribadi</Link></li>
              <li><Link href="/armada" className="hover:text-white transition-colors">Armada Kami</Link></li>
              <li><Link href="/harga" className="hover:text-white transition-colors">Daftar Harga</Link></li>
              <li><Link href="/promo" className="hover:text-white transition-colors">Promo & Penawaran</Link></li>
              <li><Link href="/pemesanan" className="hover:text-white transition-colors">Form Pemesanan</Link></li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h3 className="font-bold text-base mb-4 text-white">Perusahaan</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/profil" className="hover:text-white transition-colors">Profil Perusahaan</Link></li>
              <li><Link href="/penghargaan" className="hover:text-white transition-colors">Penghargaan</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Berita</Link></li>
              <li><Link href="/karir" className="hover:text-white transition-colors">Karir</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/hubungi-kami" className="hover:text-white transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-bold text-base mb-4 text-white">Kontak</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-3">
                <Phone className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+6281120500800" className="hover:text-white transition-colors block">0811-2050-800</a>
                  <span className="text-xs text-gray-500">Senin–Jumat 08:00–17:00</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@drwtrans.com" className="hover:text-white transition-colors">info@drwtrans.com</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-300 text-xs mb-0.5">Head Office</p>
                  <p className="text-xs leading-relaxed">Jl. Lewisari IV No 6, Kebon Lega<br />Bojongloa Kidul, Bandung 40253</p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-300 text-xs mb-0.5">Pool Office</p>
                  <p className="text-xs leading-relaxed">Jl. Babakan Cipatat, Parungserab<br />Soreang, Kab. Bandung 40911</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} DRW TRANS. Hak cipta dilindungi.</p>
          <div className="flex gap-6">
            <Link href="/faq" className="hover:text-gray-300 transition-colors">Syarat & Ketentuan</Link>
            <Link href="/faq" className="hover:text-gray-300 transition-colors">Kebijakan Privasi</Link>
            <Link href="/lokasi-cabang" className="hover:text-gray-300 transition-colors">Lokasi Cabang</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
