
import Link from 'next/link'
import { Bus, Users, Tv, Wifi, Usb, Music, ShowerHead, Wind, CheckCircle, FileCheck, Shield } from 'lucide-react'
import { buses } from '@/lib/data'

export default function FleetPage() {
  const busesData = buses

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Bus className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-purple-600">DRWTRANS</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/fleet" className="text-purple-600 font-medium">Armada</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Harga</Link>
              <Link href="/booking" className="text-gray-700 hover:text-purple-600 transition-colors">Booking</Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">Tentang Kami</Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">Kontak</Link>
              <Link href="/booking" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Pesan Sekarang
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-6 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Armada Bus Kami</h1>
          <p className="text-xl text-purple-100">Pilih bus yang sesuai dengan kebutuhan perjalanan Anda</p>
        </div>
      </section>

      {/* Fleet List */}
      <section className="py-6 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {busesData.map((bus) => (
              <div key={bus.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <Bus className="h-24 w-24 text-white/30" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-xl mb-1">{bus.name}</h3>
                      <p className="text-sm text-gray-600">{bus.type.toUpperCase()} • {bus.yearManufactured}</p>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Tersedia
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{bus.description}</p>

                  {/* Specifications */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-purple-600" />
                      <span><strong>Kapasitas:</strong> {bus.capacity} penumpang</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span><strong>Konfigurasi:</strong> {bus.seatConfig}</span>
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <h4 className="font-bold text-sm mb-3">Fasilitas:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {bus.hasAudio && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Music className="h-4 w-4 text-purple-600" />
                          <span>Audio</span>
                        </div>
                      )}
                      {bus.hasTv && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Tv className="h-4 w-4 text-purple-600" />
                          <span>TV</span>
                        </div>
                      )}
                      {bus.hasKaraoke && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Music className="h-4 w-4 text-purple-600" />
                          <span>Karaoke</span>
                        </div>
                      )}
                      {bus.hasUsbCharger && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Usb className="h-4 w-4 text-purple-600" />
                          <span>USB Charger</span>
                        </div>
                      )}
                      {bus.hasWifi && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Wifi className="h-4 w-4 text-purple-600" />
                          <span>Wi-Fi</span>
                        </div>
                      )}
                      {bus.hasToilet && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <ShowerHead className="h-4 w-4 text-purple-600" />
                          <span>Toilet</span>
                        </div>
                      )}
                      {bus.hasAc && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Wind className="h-4 w-4 text-purple-600" />
                          <span>AC</span>
                        </div>
                      )}
                      {bus.hasLegrest && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-purple-600" />
                          <span>Legrest</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Safety & Legal */}
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <h4 className="font-bold text-sm mb-3">Keamanan & Legalitas:</h4>
                    <div className="space-y-2">
                      {bus.hasSeatBelts && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Shield className="h-4 w-4 text-green-600" />
                          <span>Sabuk Pengaman</span>
                        </div>
                      )}
                      {bus.hasEmergencyHammer && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Shield className="h-4 w-4 text-green-600" />
                          <span>Pemecah Kaca Darurat</span>
                        </div>
                      )}
                      {bus.hasFireExtinguisher && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Shield className="h-4 w-4 text-green-600" />
                          <span>APAR</span>
                        </div>
                      )}
                      {bus.stnkExpiry && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <FileCheck className="h-4 w-4 text-green-600" />
                          <span>STNK: {new Date(bus.stnkExpiry).toLocaleDateString('id-ID')}</span>
                        </div>
                      )}
                      {bus.kirExpiry && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <FileCheck className="h-4 w-4 text-green-600" />
                          <span>KIR: {new Date(bus.kirExpiry).toLocaleDateString('id-ID')}</span>
                        </div>
                      )}
                      {bus.trayekLicense && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <FileCheck className="h-4 w-4 text-green-600" />
                          <span>Izin Trayek: {bus.trayekLicense}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-sm text-gray-600">Mulai dari</div>
                      <div className="text-2xl font-bold text-purple-600">
                        Rp {bus.pricePerDay?.toLocaleString('id-ID')}
                      </div>
                      <div className="text-xs text-gray-500">per hari</div>
                    </div>
                    <Link 
                      href="/booking" 
                      className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                    >
                      Pesan
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {busesData.length === 0 && (
            <div className="text-center py-12">
              <Bus className="h-24 w-24 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Belum ada armada tersedia. Silakan hubungi kami untuk informasi lebih lanjut.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 px-4 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Tertarik dengan Armada Kami?</h2>
          <p className="text-xl mb-8 text-purple-100">Hubungi kami untuk informasi lebih lanjut atau langsung booking sekarang</p>
          <div className="flex gap-4 justify-center">
            <Link href="/booking" className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-bold">
              Booking Sekarang
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-bold">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
