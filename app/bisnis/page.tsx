import Navigation from '../components/Navigation'
import Link from 'next/link'
import { Building2, Users, Clock, Shield, CheckCircle, Phone } from 'lucide-react'

export default function BisnisPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-royal-purple-dark to-royal-purple text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Solusi Transportasi Korporat</h1>
            <p className="text-xl text-gray-200 mb-8">
              Layanan transportasi profesional untuk kebutuhan bisnis perusahaan Anda
            </p>
            <a href="tel:08112050800" className="inline-flex items-center gap-2 bg-amber-gold hover:bg-amber-gold-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
              <Phone className="h-6 w-6" />
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-royal-purple">Layanan Bisnis Kami</h2>
            <p className="text-xl text-gray-600">Solusi lengkap untuk mobilitas perusahaan Anda</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Employee Shuttle */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:border-royal-purple transition-all">
              <div className="w-16 h-16 bg-royal-purple rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-royal-purple">Employee Shuttle</h3>
              <p className="text-gray-600 mb-6">
                Layanan antar-jemput karyawan dengan rute dan jadwal yang dapat disesuaikan dengan kebutuhan perusahaan Anda.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Rute fleksibel sesuai lokasi kantor</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Jadwal pagi dan sore hari</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Kontrak bulanan atau tahunan</span>
                </li>
              </ul>
              <Link href="/pemesanan" className="inline-block bg-royal-purple hover:bg-royal-purple-dark text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Minta Penawaran
              </Link>
            </div>

            {/* Corporate Event */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:border-royal-purple transition-all">
              <div className="w-16 h-16 bg-amber-gold rounded-full flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-royal-purple">Corporate Event</h3>
              <p className="text-gray-600 mb-6">
                Transportasi untuk acara perusahaan seperti gathering, meeting, seminar, dan company trip.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Armada lengkap dari 14-50 seat</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Driver berpengalaman event</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Koordinator lapangan tersedia</span>
                </li>
              </ul>
              <Link href="/pemesanan" className="inline-block bg-amber-gold hover:bg-amber-gold-dark text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Minta Penawaran
              </Link>
            </div>

            {/* Airport Transfer */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:border-royal-purple transition-all">
              <div className="w-16 h-16 bg-royal-purple rounded-full flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-royal-purple">Airport Transfer</h3>
              <p className="text-gray-600 mb-6">
                Layanan antar-jemput bandara untuk tamu VIP, delegasi, atau karyawan perusahaan Anda.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monitoring flight real-time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Driver dengan name board</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Layanan 24/7</span>
                </li>
              </ul>
              <Link href="/pemesanan" className="inline-block bg-royal-purple hover:bg-royal-purple-dark text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Minta Penawaran
              </Link>
            </div>

            {/* Long Term Rental */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:border-royal-purple transition-all">
              <div className="w-16 h-16 bg-amber-gold rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-royal-purple">Long Term Rental</h3>
              <p className="text-gray-600 mb-6">
                Sewa jangka panjang dengan harga spesial untuk kebutuhan operasional perusahaan.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Kontrak 6 bulan - 2 tahun</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Maintenance included</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Harga khusus korporat</span>
                </li>
              </ul>
              <Link href="/pemesanan" className="inline-block bg-amber-gold hover:bg-amber-gold-dark text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Minta Penawaran
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-royal-purple">Keunggulan Layanan Bisnis</h2>
            <p className="text-xl text-gray-600">Dipercaya oleh 500+ perusahaan di Indonesia</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Shield className="h-12 w-12 text-royal-purple mb-4" />
              <h3 className="font-bold text-xl mb-3">Dokumen Legal Lengkap</h3>
              <p className="text-gray-600">STNK, KIR, SIPA, dan asuransi penumpang terjamin untuk setiap armada</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Users className="h-12 w-12 text-amber-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Account Manager</h3>
              <p className="text-gray-600">Dedicated account manager untuk mengelola kebutuhan transportasi perusahaan</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Clock className="h-12 w-12 text-royal-purple mb-4" />
              <h3 className="font-bold text-xl mb-3">Sistem Invoicing</h3>
              <p className="text-gray-600">Invoice bulanan dengan sistem pembayaran yang fleksibel</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-royal-purple to-royal-purple-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Siap Bermitra dengan Perusahaan Anda?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Hubungi tim kami untuk konsultasi gratis dan penawaran khusus korporat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pemesanan" className="bg-amber-gold hover:bg-amber-gold-dark text-white px-10 py-4 rounded-lg font-bold text-lg transition-all">
              Minta Penawaran
            </Link>
            <a href="tel:08112050800" className="bg-white text-royal-purple px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
              <Phone className="h-6 w-6" />
              0811-2050-800
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
