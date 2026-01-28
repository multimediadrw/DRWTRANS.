import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Users, Shield, Award, Star, Calendar, Clock } from 'lucide-react'
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Floating Booking Widget */}
      <section className="relative h-[600px] bg-gray-900">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/hero-bus.jpg" 
            alt="DRWTRANS Bus" 
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-purple-dark/80 to-royal-purple/60"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Solusi Transportasi Korporat Terpercaya
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Armada lengkap, driver profesional, layanan 24/7 untuk kebutuhan bisnis Anda
            </p>
          </div>
        </div>

        {/* Floating Booking Widget */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto border-t-4 border-amber-gold">
              {/* Tabs */}
              <div className="flex gap-4 mb-6 border-b border-gray-200">
                <button className="px-6 py-3 font-semibold text-royal-purple border-b-2 border-amber-gold">
                  Sewa Bus
                </button>
                <button className="px-6 py-3 font-semibold text-gray-500 hover:text-royal-purple">
                  HiAce
                </button>
                <button className="px-6 py-3 font-semibold text-gray-500 hover:text-royal-purple">
                  Pariwisata
                </button>
              </div>

              {/* Booking Form */}
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Lokasi Penjemputan</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Masukkan lokasi" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Keberangkatan</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input 
                      type="date" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Durasi</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent appearance-none">
                      <option>1 Hari</option>
                      <option>2 Hari</option>
                      <option>3 Hari</option>
                      <option>1 Minggu</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-amber-gold hover:bg-amber-gold-dark text-white font-bold py-3 rounded-lg transition-all shadow-lg text-lg">
                    Cari Armada
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals - Partner Logos */}
      <section className="pt-32 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-8 font-medium">Dipercaya oleh 500+ Perusahaan Terkemuka</p>
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-40 grayscale">
            <div className="text-4xl font-bold text-gray-800">COMPANY A</div>
            <div className="text-4xl font-bold text-gray-800">COMPANY B</div>
            <div className="text-4xl font-bold text-gray-800">COMPANY C</div>
            <div className="text-4xl font-bold text-gray-800">COMPANY D</div>
          </div>
        </div>
      </section>

      {/* Armada Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-royal-purple">Pilih Armada Sesuai Kebutuhan</h2>
            <p className="text-xl text-gray-600">Armada terawat dengan standar keamanan terjamin</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Bus Medium */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all">
              <div className="h-48 bg-gradient-to-br from-royal-purple to-royal-purple-light"></div>
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-3 text-royal-purple">Bus Medium</h3>
                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="h-5 w-5" />
                    <span className="text-sm">31 Kursi</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span className="text-sm">AC</span>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Mulai dari</p>
                  <p className="text-3xl font-bold text-amber-gold">Rp 2.5jt<span className="text-lg text-gray-500">/hari</span></p>
                </div>
                <button className="w-full bg-royal-purple hover:bg-royal-purple-dark text-white font-bold py-3 rounded-lg transition-all">
                  Pilih Unit
                </button>
              </div>
            </div>

            {/* HiAce */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-amber-gold hover:shadow-2xl transition-all relative">
              <div className="absolute top-4 right-4 bg-amber-gold text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                POPULER
              </div>
              <div className="h-48 bg-gradient-to-br from-amber-gold to-amber-gold-dark"></div>
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-3 text-royal-purple">Toyota HiAce</h3>
                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="h-5 w-5" />
                    <span className="text-sm">14 Kursi</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span className="text-sm">AC</span>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Mulai dari</p>
                  <p className="text-3xl font-bold text-amber-gold">Rp 1.8jt<span className="text-lg text-gray-500">/hari</span></p>
                </div>
                <button className="w-full bg-amber-gold hover:bg-amber-gold-dark text-white font-bold py-3 rounded-lg transition-all">
                  Pilih Unit
                </button>
              </div>
            </div>

            {/* Big Bus */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all">
              <div className="h-48 bg-gradient-to-br from-royal-purple-dark to-royal-purple"></div>
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-3 text-royal-purple">Big Bus</h3>
                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="h-5 w-5" />
                    <span className="text-sm">50 Kursi</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span className="text-sm">AC + TV</span>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Mulai dari</p>
                  <p className="text-3xl font-bold text-amber-gold">Rp 3.5jt<span className="text-lg text-gray-500">/hari</span></p>
                </div>
                <button className="w-full bg-royal-purple hover:bg-royal-purple-dark text-white font-bold py-3 rounded-lg transition-all">
                  Pilih Unit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-royal-purple">Mengapa Pilih DRWTRANS?</h2>
            <p className="text-xl text-gray-600">Komitmen kami untuk keamanan dan kenyamanan perjalanan Anda</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-royal-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Dokumen Lengkap</h3>
              <p className="text-gray-600 text-sm">STNK, KIR, dan asuransi terjamin</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Driver Profesional</h3>
              <p className="text-gray-600 text-sm">Berpengalaman dan berlisensi</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-royal-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Layanan 24/7</h3>
              <p className="text-gray-600 text-sm">Siap melayani kapan saja</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Harga Kompetitif</h3>
              <p className="text-gray-600 text-sm">Transparan tanpa biaya tersembunyi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-purple-dark to-royal-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Siap Melayani Kebutuhan Transportasi Anda</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pemesanan" className="bg-amber-gold hover:bg-amber-gold-dark text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-xl">
              Pesan Sekarang
            </Link>
            <a href="tel:08112050800" className="bg-white text-royal-purple px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-2">
              <Phone className="h-6 w-6" />
              0811-2050-800
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-royal-purple-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image src="/logo.png" alt="DRWTRANS" width={100} height={100} className="mb-4" />
              <p className="text-gray-300 text-sm">Solusi transportasi korporat terpercaya untuk kebutuhan bisnis Anda</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/bisnis" className="text-gray-300 hover:text-amber-gold">Bisnis</Link></li>
                <li><Link href="/pribadi" className="text-gray-300 hover:text-amber-gold">Pribadi</Link></li>
                <li><Link href="/armada" className="text-gray-300 hover:text-amber-gold">Armada</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/profil" className="text-gray-300 hover:text-amber-gold">Profil</Link></li>
                <li><Link href="/penghargaan" className="text-gray-300 hover:text-amber-gold">Penghargaan</Link></li>
                <li><Link href="/karir" className="text-gray-300 hover:text-amber-gold">Karir</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Bantuan</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/faq" className="text-gray-300 hover:text-amber-gold">FAQ</Link></li>
                <li><Link href="/lokasi-cabang" className="text-gray-300 hover:text-amber-gold">Lokasi Cabang</Link></li>
                <li><Link href="/hubungi-kami" className="text-gray-300 hover:text-amber-gold">Hubungi Kami</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-royal-purple mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 DRWTRANS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
