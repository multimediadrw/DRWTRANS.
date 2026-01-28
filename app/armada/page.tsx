import Navigation from '../components/Navigation'
import { Users, Wind, Tv, Wifi } from 'lucide-react'

export default function ArmadaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="bg-gradient-to-r from-royal-purple-dark to-royal-purple text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Armada Kami</h1>
          <p className="text-xl text-gray-200">Kendaraan terawat dengan standar keamanan terjamin</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Big Bus */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-royal-purple-dark to-royal-purple"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-royal-purple">Big Bus 50 Seat</h3>
                <p className="text-gray-600 mb-4">Ideal untuk rombongan besar dan perjalanan jarak jauh</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="h-5 w-5 text-amber-gold" />
                    <span>Kapasitas: 50 penumpang</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Wind className="h-5 w-5 text-amber-gold" />
                    <span>AC Central</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Tv className="h-5 w-5 text-amber-gold" />
                    <span>TV & Audio System</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Wifi className="h-5 w-5 text-amber-gold" />
                    <span>USB Charging Port</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-amber-gold mb-4">Rp 3.5jt<span className="text-sm text-gray-500">/hari</span></p>
                <a href="tel:08112050800" className="block text-center bg-royal-purple hover:bg-royal-purple-dark text-white py-3 rounded-lg font-semibold transition-all">
                  Hubungi Kami
                </a>
              </div>
            </div>

            {/* Medium Bus */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-royal-purple to-royal-purple-light"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-royal-purple">Medium Bus 31 Seat</h3>
                <p className="text-gray-600 mb-4">Sempurna untuk grup sedang dan city tour</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="h-5 w-5 text-amber-gold" />
                    <span>Kapasitas: 31 penumpang</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Wind className="h-5 w-5 text-amber-gold" />
                    <span>AC</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Tv className="h-5 w-5 text-amber-gold" />
                    <span>Audio System</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Wifi className="h-5 w-5 text-amber-gold" />
                    <span>Reclining Seats</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-amber-gold mb-4">Rp 2.5jt<span className="text-sm text-gray-500">/hari</span></p>
                <a href="tel:08112050800" className="block text-center bg-royal-purple hover:bg-royal-purple-dark text-white py-3 rounded-lg font-semibold transition-all">
                  Hubungi Kami
                </a>
              </div>
            </div>

            {/* HiAce */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-amber-gold">
              <div className="absolute top-4 right-4 bg-amber-gold text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                POPULER
              </div>
              <div className="h-48 bg-gradient-to-br from-amber-gold to-amber-gold-dark"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-royal-purple">Toyota HiAce</h3>
                <p className="text-gray-600 mb-4">Nyaman untuk keluarga dan grup kecil</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="h-5 w-5 text-amber-gold" />
                    <span>Kapasitas: 14 penumpang</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Wind className="h-5 w-5 text-amber-gold" />
                    <span>AC</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Tv className="h-5 w-5 text-amber-gold" />
                    <span>Audio System</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Wifi className="h-5 w-5 text-amber-gold" />
                    <span>Comfortable Seats</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-amber-gold mb-4">Rp 1.8jt<span className="text-sm text-gray-500">/hari</span></p>
                <a href="tel:08112050800" className="block text-center bg-amber-gold hover:bg-amber-gold-dark text-white py-3 rounded-lg font-semibold transition-all">
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
