
import Link from 'next/link'
import { Bus, Shield, FileCheck, AlertTriangle } from 'lucide-react'

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Bus className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-purple-600">DRWTRANS</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/fleet" className="text-gray-700 hover:text-purple-600 transition-colors">Armada</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Harga</Link>
              <Link href="/booking" className="text-gray-700 hover:text-purple-600 transition-colors">Booking</Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">Tentang Kami</Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">Kontak</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <Shield className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Keamanan & Legalitas</h1>
          <p className="text-xl text-purple-100">Prioritas utama kami adalah keselamatan Anda</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileCheck className="h-6 w-6 text-purple-600" />
              Dokumen Kendaraan Lengkap
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold mb-2">STNK (Surat Tanda Nomor Kendaraan)</h3>
                <p className="text-gray-700">Semua armada memiliki STNK aktif dan diperpanjang secara berkala sesuai jadwal.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold mb-2">KIR (Keur/Uji Kelayakan Kendaraan)</h3>
                <p className="text-gray-700">Uji kelayakan dilakukan setiap 6 bulan untuk memastikan kondisi teknis kendaraan optimal.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold mb-2">Izin Trayek</h3>
                <p className="text-gray-700">Memiliki izin trayek resmi untuk operasional angkutan pariwisata di seluruh Indonesia.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Shield className="h-6 w-6 text-purple-600" />
              Fitur Keamanan
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Sabuk Pengaman</h3>
                  <p className="text-sm text-gray-600">Tersedia di setiap kursi untuk keselamatan maksimal</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Pemecah Kaca Darurat</h3>
                  <p className="text-sm text-gray-600">Emergency hammer untuk evakuasi darurat</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">APAR</h3>
                  <p className="text-sm text-gray-600">Alat Pemadam Api Ringan yang siap pakai</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Kotak P3K</h3>
                  <p className="text-sm text-gray-600">Perlengkapan pertolongan pertama lengkap</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Driver Profesional</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-700">Memiliki SIM B2 Umum yang masih aktif</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-700">Berpengalaman minimal 5 tahun mengemudi bus</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-700">Menguasai rute perjalanan dan alternatif jalan</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-700">Ramah, sopan, dan mengutamakan keselamatan penumpang</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
