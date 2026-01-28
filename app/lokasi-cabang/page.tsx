import Navigation from '../components/Navigation'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function LokasiCabangPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="bg-gradient-to-r from-royal-purple-dark to-royal-purple text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Lokasi Cabang</h1>
          <p className="text-xl text-gray-200">Temukan kantor kami terdekat</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-royal-purple">Kantor Pusat Jakarta</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="h-6 w-6 text-amber-gold flex-shrink-0" />
                  <p className="text-gray-700">Jl. Raya Transportasi No. 123, Jakarta Selatan 12345</p>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-6 w-6 text-amber-gold flex-shrink-0" />
                  <p className="text-gray-700">0811-2050-800</p>
                </div>
                <div className="flex gap-3">
                  <Mail className="h-6 w-6 text-amber-gold flex-shrink-0" />
                  <p className="text-gray-700">info@drwtrans.com</p>
                </div>
              </div>
              <div className="mt-6 h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                [Peta Lokasi]
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-royal-purple">Cabang Bandung</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="h-6 w-6 text-amber-gold flex-shrink-0" />
                  <p className="text-gray-700">Jl. Soekarno Hatta No. 456, Bandung 40123</p>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-6 w-6 text-amber-gold flex-shrink-0" />
                  <p className="text-gray-700">0811-2050-801</p>
                </div>
                <div className="flex gap-3">
                  <Mail className="h-6 w-6 text-amber-gold flex-shrink-0" />
                  <p className="text-gray-700">bandung@drwtrans.com</p>
                </div>
              </div>
              <div className="mt-6 h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                [Peta Lokasi]
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-royal-purple">Cabang Surabaya</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="h-6 w-6 text-amber-gold flex-shrink-0" />
                  <p className="text-gray-700">Jl. Ahmad Yani No. 789, Surabaya 60234</p>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-6 w-6 text-amber-gold flex-shrink-0" />
                  <p className="text-gray-700">0811-2050-802</p>
                </div>
                <div className="flex gap-3">
                  <Mail className="h-6 w-6 text-amber-gold flex-shrink-0" />
                  <p className="text-gray-700">surabaya@drwtrans.com</p>
                </div>
              </div>
              <div className="mt-6 h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                [Peta Lokasi]
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-royal-purple">Cabang Bali</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="h-6 w-6 text-amber-gold flex-shrink-0" />
                  <p className="text-gray-700">Jl. Sunset Road No. 321, Denpasar 80361</p>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-6 w-6 text-amber-gold flex-shrink-0" />
                  <p className="text-gray-700">0811-2050-803</p>
                </div>
                <div className="flex gap-3">
                  <Mail className="h-6 w-6 text-amber-gold flex-shrink-0" />
                  <p className="text-gray-700">bali@drwtrans.com</p>
                </div>
              </div>
              <div className="mt-6 h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                [Peta Lokasi]
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
