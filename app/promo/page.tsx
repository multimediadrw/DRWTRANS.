import Navigation from '../components/Navigation'
import { Tag, Calendar, Users, Clock } from 'lucide-react'

export default function PromoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="bg-gradient-to-r from-royal-purple-dark to-royal-purple text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Promo & Penawaran Spesial</h1>
          <p className="text-xl text-gray-200">Dapatkan harga terbaik untuk perjalanan Anda</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-amber-gold to-amber-gold-dark rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="h-6 w-6" />
                <span className="font-bold text-sm">PROMO SPESIAL</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Diskon 20% Sewa Bulanan</h3>
              <p className="text-lg mb-6 text-white/90">
                Khusus untuk kontrak sewa bulanan minimal 3 bulan. Hemat hingga jutaan rupiah!
              </p>
              <div className="flex items-center gap-4 text-sm mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Berlaku s/d 31 Maret 2024</span>
                </div>
              </div>
              <a href="tel:08112050800" className="inline-block bg-white text-amber-gold px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
                Hubungi Kami
              </a>
            </div>

            <div className="bg-gradient-to-br from-royal-purple to-royal-purple-light rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="h-6 w-6" />
                <span className="font-bold text-sm">PAKET HEMAT</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Paket Wisata 3H2M</h3>
              <p className="text-lg mb-6 text-white/90">
                Nikmati paket wisata 3 hari 2 malam dengan harga spesial. Sudah termasuk driver & BBM.
              </p>
              <div className="flex items-center gap-4 text-sm mb-6">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>Min. 10 orang</span>
                </div>
              </div>
              <a href="tel:08112050800" className="inline-block bg-white text-royal-purple px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
                Hubungi Kami
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-royal-purple shadow-xl">
              <div className="flex items-center gap-2 mb-4 text-royal-purple">
                <Tag className="h-6 w-6" />
                <span className="font-bold text-sm">EARLY BIRD</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-royal-purple">Booking 7 Hari Lebih Awal</h3>
              <p className="text-lg mb-6 text-gray-600">
                Dapatkan diskon 10% untuk pemesanan yang dilakukan minimal 7 hari sebelum keberangkatan.
              </p>
              <div className="flex items-center gap-4 text-sm mb-6 text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Min. booking H-7</span>
                </div>
              </div>
              <a href="tel:08112050800" className="inline-block bg-royal-purple text-white px-6 py-3 rounded-lg font-bold hover:bg-royal-purple-dark transition-all">
                Hubungi Kami
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-amber-gold shadow-xl">
              <div className="flex items-center gap-2 mb-4 text-amber-gold">
                <Tag className="h-6 w-6" />
                <span className="font-bold text-sm">REFERRAL</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-royal-purple">Ajak Teman, Dapat Cashback</h3>
              <p className="text-lg mb-6 text-gray-600">
                Ajak teman atau rekan bisnis Anda menggunakan layanan kami dan dapatkan cashback Rp 500.000.
              </p>
              <div className="flex items-center gap-4 text-sm mb-6 text-gray-600">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>S&K berlaku</span>
                </div>
              </div>
              <a href="tel:08112050800" className="inline-block bg-amber-gold text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-gold-dark transition-all">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
