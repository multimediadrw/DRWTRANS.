'use client'

import Navigation from '../components/Navigation'
import Image from 'next/image'
import { Users, Wind, Tv, Wifi, Shield, Zap, Coffee, Luggage } from 'lucide-react'

export default function ArmadaPage() {
  const facilities = {
    safety: [
      { name: 'Kotak P3K', image: '/facilities/first-aid-box.jpg', icon: Shield },
    ],
    comfort: [
      { name: 'Kursi Kulit Premium', image: '/facilities/premium-leather-seats.jpg', icon: Users },
      { name: 'AC & Ventilasi', image: '/facilities/ac-vent.jpg', icon: Wind },
      { name: 'Panel Kontrol', image: '/facilities/ceiling-controls.jpg', icon: Tv },
      { name: 'Meja Lipat', image: '/facilities/folding-table.jpg', icon: Coffee },
    ],
    technology: [
      { name: 'WiFi Router', image: '/facilities/wifi-router.jpg', icon: Wifi },
      { name: 'USB Charging Port', image: '/facilities/usb-charging-port.jpg', icon: Zap },
    ],
    storage: [
      { name: 'Bagasi Luas', image: '/facilities/luggage-storage-view.jpg', icon: Luggage },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="bg-gradient-to-r from-royal-purple-dark to-royal-purple text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Armada Kami</h1>
          <p className="text-xl text-gray-200">Kendaraan terawat dengan standar keamanan terjamin</p>
        </div>
      </section>

      {/* Fleet Cards */}
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
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-amber-gold relative">
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

      {/* Facility Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-royal-purple mb-4">Fasilitas Premium</h2>
            <p className="text-gray-600 text-lg">Kenyamanan dan keamanan adalah prioritas kami</p>
          </div>

          {/* Safety */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-royal-purple mb-6 flex items-center gap-2">
              <Shield className="h-6 w-6 text-amber-gold" />
              Keamanan
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {facilities.safety.map((item, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-square relative">
                    <Image 
                      src={item.image} 
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-semibold text-gray-700">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comfort */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-royal-purple mb-6 flex items-center gap-2">
              <Users className="h-6 w-6 text-amber-gold" />
              Kenyamanan
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {facilities.comfort.map((item, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-square relative">
                    <Image 
                      src={item.image} 
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-semibold text-gray-700">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-royal-purple mb-6 flex items-center gap-2">
              <Zap className="h-6 w-6 text-amber-gold" />
              Teknologi
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {facilities.technology.map((item, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-square relative">
                    <Image 
                      src={item.image} 
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-semibold text-gray-700">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Storage */}
          <div>
            <h3 className="text-2xl font-bold text-royal-purple mb-6 flex items-center gap-2">
              <Luggage className="h-6 w-6 text-amber-gold" />
              Penyimpanan
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {facilities.storage.map((item, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-square relative">
                    <Image 
                      src={item.image} 
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-semibold text-gray-700">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interior & Exterior Gallery */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-royal-purple mb-6 text-center">Galeri Bus</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/facilities/bus-interior-full.jpg" 
                  alt="Interior Bus Lengkap"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/facilities/bus-exterior-side.jpg" 
                  alt="Eksterior Bus"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/facilities/luggage-storage-empty.jpg" 
                  alt="Bagasi Bus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
