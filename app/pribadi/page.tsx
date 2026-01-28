import Navigation from '../components/Navigation'
import Link from 'next/link'
import { Heart, Plane, Users, Calendar, CheckCircle, Phone } from 'lucide-react'

export default function PribadiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="bg-gradient-to-r from-royal-purple-dark to-royal-purple text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Layanan Pribadi & Keluarga</h1>
            <p className="text-xl text-gray-200 mb-8">
              Perjalanan nyaman bersama keluarga dengan harga terjangkau
            </p>
            <a href="tel:08112050800" className="inline-flex items-center gap-2 bg-amber-gold hover:bg-amber-gold-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
              <Phone className="h-6 w-6" />
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-royal-purple">Paket Perjalanan Pribadi</h2>
            <p className="text-xl text-gray-600">Fleksibel sesuai kebutuhan Anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <Heart className="h-12 w-12 text-royal-purple mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-royal-purple">Family Trip</h3>
              <p className="text-gray-600 mb-6">Liburan keluarga yang berkesan dengan kendaraan nyaman dan aman</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Kapasitas 7-14 penumpang</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">AC & audio system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Driver ramah & berpengalaman</span>
                </li>
              </ul>
              <Link href="/pemesanan" className="inline-block bg-royal-purple hover:bg-royal-purple-dark text-white px-6 py-3 rounded-lg font-semibold transition-all w-full text-center">
                Pesan Sekarang
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-amber-gold">
              <Plane className="h-12 w-12 text-amber-gold mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-royal-purple">Wisata Antar Kota</h3>
              <p className="text-gray-600 mb-6">Jelajahi destinasi wisata favorit dengan nyaman</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Rute fleksibel</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Rekomendasi destinasi</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Paket 1-7 hari</span>
                </li>
              </ul>
              <Link href="/pemesanan" className="inline-block bg-amber-gold hover:bg-amber-gold-dark text-white px-6 py-3 rounded-lg font-semibold transition-all w-full text-center">
                Pesan Sekarang
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <Calendar className="h-12 w-12 text-royal-purple mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-royal-purple">Acara Keluarga</h3>
              <p className="text-gray-600 mb-6">Transportasi untuk pernikahan, arisan, dan acara keluarga lainnya</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Armada bersih & terawat</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Harga paket grup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Koordinasi mudah</span>
                </li>
              </ul>
              <Link href="/pemesanan" className="inline-block bg-royal-purple hover:bg-royal-purple-dark text-white px-6 py-3 rounded-lg font-semibold transition-all w-full text-center">
                Pesan Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
