
import Link from 'next/link'
import { Bus, Calculator } from 'lucide-react'
import { routes } from '@/lib/data'

export default function PricingPage() {
  const routesData = routes.sort((a, b) => b.isPopular ? 1 : -1)

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
              <Link href="/pricing" className="text-purple-600 font-medium">Harga</Link>
              <Link href="/booking" className="text-gray-700 hover:text-purple-600 transition-colors">Booking</Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">Tentang Kami</Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">Kontak</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-6 px-4">
        <div className="container mx-auto text-center">
          <Calculator className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Daftar Harga Rute</h1>
          <p className="text-xl text-purple-100">Harga transparan dengan rincian lengkap</p>
        </div>
      </section>

      <section className="py-6 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-lg mb-3">Harga Sudah Termasuk:</h3>
            <ul className="grid md:grid-cols-2 gap-2 text-sm">
              <li>✓ BBM (Bahan Bakar Minyak)</li>
              <li>✓ Biaya Tol</li>
              <li>✓ Parkir</li>
              <li>✓ Tips Driver</li>
              <li>✓ Asuransi Perjalanan</li>
              <li>✓ Driver Profesional</li>
            </ul>
          </div>

          <div className="space-y-6">
            {routesData.map((route) => (
              <div key={route.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-2xl text-gray-900">{route.origin} → {route.destination}</h3>
                    <p className="text-gray-600">{route.distance} km • {route.estimatedDuration}</p>
                    {route.isPopular && (
                      <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium mt-2">
                        Rute Populer
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-purple-600">
                      Rp {route.totalFare.toLocaleString('id-ID')}
                    </div>
                    <div className="text-sm text-gray-500">Total Biaya</div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold mb-3">Rincian Biaya:</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tarif Dasar:</span>
                      <span className="font-medium">Rp {route.baseFare.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">BBM:</span>
                      <span className="font-medium">Rp {route.fuelCost.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tol:</span>
                      <span className="font-medium">Rp {route.tollCost.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Parkir:</span>
                      <span className="font-medium">Rp {route.parkingCost.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tips Driver:</span>
                      <span className="font-medium">Rp {route.driverTip.toLocaleString('id-ID')}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link href="/booking" className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                    Pesan Rute Ini
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="font-bold text-2xl mb-4">Rute Tidak Ada di Daftar?</h3>
            <p className="text-gray-600 mb-6">Hubungi kami untuk mendapatkan penawaran harga khusus untuk rute Anda</p>
            <Link href="/contact" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
