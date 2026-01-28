import Navigation from '../components/Navigation'
import { Calendar, User } from 'lucide-react'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="bg-gradient-to-r from-royal-purple-dark to-royal-purple text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Blog & Artikel</h1>
          <p className="text-xl text-gray-200">Tips dan informasi seputar transportasi</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-royal-purple to-royal-purple-light"></div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>15 Jan 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>Admin</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-royal-purple">Tips Memilih Bus Pariwisata yang Tepat</h3>
                <p className="text-gray-600 mb-4">Panduan lengkap memilih bus pariwisata yang sesuai dengan kebutuhan perjalanan Anda...</p>
                <a href="#" className="text-amber-gold font-semibold hover:underline">Baca Selengkapnya →</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-amber-gold to-amber-gold-dark"></div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>10 Jan 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>Admin</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-royal-purple">Keuntungan Sewa Bus untuk Korporat</h3>
                <p className="text-gray-600 mb-4">Mengapa semakin banyak perusahaan memilih layanan sewa bus untuk kebutuhan transportasi karyawan...</p>
                <a href="#" className="text-amber-gold font-semibold hover:underline">Baca Selengkapnya →</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-royal-purple-dark to-royal-purple"></div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>5 Jan 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>Admin</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-royal-purple">Destinasi Wisata Favorit 2024</h3>
                <p className="text-gray-600 mb-4">Rekomendasi destinasi wisata yang bisa Anda kunjungi dengan bus pariwisata kami...</p>
                <a href="#" className="text-amber-gold font-semibold hover:underline">Baca Selengkapnya →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
