
import Link from 'next/link'
import { Bus, Tv, Wifi, Usb, Music, Wind, ShowerHead } from 'lucide-react'

export default function FacilitiesPage() {
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

      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-6 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Fasilitas & Kenyamanan</h1>
          <p className="text-xl text-purple-100">Nikmati perjalanan dengan fasilitas lengkap</p>
        </div>
      </section>

      <section className="py-6 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Wind className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AC Dingin</h3>
              <p className="text-gray-700">Sistem AC yang terawat dengan baik untuk menjaga suhu kabin tetap nyaman sepanjang perjalanan.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Tv className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">TV & Audio</h3>
              <p className="text-gray-700">Layar TV dan sistem audio berkualitas untuk hiburan selama perjalanan.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Music className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Karaoke</h3>
              <p className="text-gray-700">Sistem karaoke lengkap dengan microphone untuk menghibur rombongan Anda.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Usb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">USB Charger</h3>
              <p className="text-gray-700">Port USB di setiap kursi untuk mengisi daya gadget Anda.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Wifi className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Wi-Fi</h3>
              <p className="text-gray-700">Koneksi internet gratis untuk tetap terhubung selama perjalanan (tergantung tipe bus).</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <ShowerHead className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Toilet</h3>
              <p className="text-gray-700">Toilet bersih dan wangi untuk kenyamanan perjalanan jauh (tersedia di bus medium).</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Konfigurasi Kursi</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-purple-200 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-3 text-purple-600">2-2 Executive</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Kursi lebih lebar dan nyaman</li>
                  <li>• Legroom lebih luas</li>
                  <li>• Sandaran kaki (legrest)</li>
                  <li>• Ideal untuk perjalanan jauh</li>
                </ul>
              </div>
              <div className="border border-purple-200 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-3 text-purple-600">2-3 Economy</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Kapasitas lebih besar</li>
                  <li>• Harga lebih ekonomis</li>
                  <li>• Tetap nyaman untuk perjalanan</li>
                  <li>• Cocok untuk rombongan besar</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Kebersihan & Perawatan</h2>
            <p className="text-gray-700 mb-4">
              Kami sangat memperhatikan kebersihan dan perawatan armada. Setiap bus dibersihkan secara menyeluruh 
              sebelum dan sesudah perjalanan. Sistem AC dirawat rutin untuk memastikan udara di dalam kabin tetap 
              segar dan sejuk.
            </p>
            <p className="text-gray-700">
              Perawatan berkala dilakukan sesuai jadwal untuk memastikan semua fasilitas berfungsi dengan baik 
              dan memberikan pengalaman perjalanan terbaik bagi Anda.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
