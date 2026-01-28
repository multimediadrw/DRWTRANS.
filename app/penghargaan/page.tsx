import Navigation from '../components/Navigation'
import { Award, Trophy, Star } from 'lucide-react'

export default function PenghargaanPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="bg-gradient-to-r from-royal-purple-dark to-royal-purple text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Penghargaan & Sertifikasi</h1>
          <p className="text-xl text-gray-200">Prestasi dan pengakuan yang kami raih</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-amber-gold">
              <Trophy className="h-16 w-16 text-amber-gold mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-royal-purple">Best Transport Service 2023</h3>
              <p className="text-gray-600 mb-4">Penghargaan sebagai penyedia layanan transportasi terbaik dari Asosiasi Pengusaha Transportasi Indonesia</p>
              <p className="text-sm text-gray-500">Desember 2023</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <Award className="h-16 w-16 text-royal-purple mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-royal-purple">ISO 9001:2015</h3>
              <p className="text-gray-600 mb-4">Sertifikasi sistem manajemen mutu internasional untuk layanan transportasi</p>
              <p className="text-sm text-gray-500">Valid hingga 2025</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <Star className="h-16 w-16 text-amber-gold mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-royal-purple">Top Corporate Partner</h3>
              <p className="text-gray-600 mb-4">Dipercaya oleh 500+ perusahaan sebagai mitra transportasi korporat</p>
              <p className="text-sm text-gray-500">2020 - Sekarang</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <Award className="h-16 w-16 text-royal-purple mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-royal-purple">Safety Excellence Award</h3>
              <p className="text-gray-600 mb-4">Penghargaan keunggulan keselamatan dari Kementerian Perhubungan RI</p>
              <p className="text-sm text-gray-500">2022</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
