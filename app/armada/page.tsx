'use client'

import Navigation from '../components/Navigation'
import Image from 'next/image'
import { Users, Wind, Tv, Wifi, Shield, Zap, Coffee, Luggage, MapPin } from 'lucide-react'

export default function ArmadaPage() {
  const fleets = [
    {
      name: 'Big Bus 50 Seats',
      image: '/armada/big-bus-50-seats.jpg',
      capacity: '50 penumpang',
      type: 'Mercedes Benz 1626 Air Suspension',
      features: ['AC Central', 'TV & Audio System', 'USB Charging', 'Reclining Seats'],
      price: 'Mulai Rp 3.9jt',
      gradient: 'from-purple-600 to-purple-800'
    },
    {
      name: 'Big Bus 47 Seats + Toilet',
      image: '/armada/big-bus-47-seats-toilet.jpg',
      capacity: '47 penumpang + Toilet',
      type: 'Mercedes Benz 1626 Air Suspension',
      features: ['AC Central', 'Toilet', 'TV & Audio System', 'USB Charging'],
      price: 'Mulai Rp 3.9jt',
      gradient: 'from-purple-600 to-purple-800',
      badge: 'TOILET'
    },
    {
      name: 'Big Bus 59 Seats',
      image: '/armada/big-bus-59-seats.jpg',
      capacity: '59 penumpang (Double Decker)',
      type: 'Mercedes Benz 1626 Air Suspension',
      features: ['AC Central', 'Double Decker', 'TV & Audio', 'Luxury Seats'],
      price: 'Mulai Rp 3.9jt',
      gradient: 'from-purple-700 to-purple-900',
      badge: 'DOUBLE DECKER'
    },
    {
      name: 'Medium Bus 35 Seats',
      image: '/armada/medium-bus-35-seats.jpg',
      capacity: '35 penumpang',
      type: 'Mercedes Benz OF 917',
      features: ['AC', 'Audio System', 'Reclining Seats', 'USB Charging'],
      price: 'Mulai Rp 2.8jt',
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      name: 'HiAce 12/14 Seats',
      image: '/armada/hiace-12-14-seats.jpg',
      capacity: '12-14 penumpang',
      type: 'Toyota HiAce Commuter 2020',
      features: ['AC', 'Audio System', 'Comfortable Seats', 'Compact Size'],
      price: 'Mulai Rp 1.5jt',
      gradient: 'from-orange-500 to-orange-700',
      badge: 'POPULER'
    },
  ]

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
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white pt-safe">
        <div className="container px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-1">Armada Kami</h1>
              <p className="text-purple-200 text-sm">Kendaraan terawat & terpercaya</p>
            </div>
            <MapPin className="h-8 w-8 text-purple-300" />
          </div>
        </div>
      </div>

      {/* Fleet Cards */}
      <section className="container px-4 -mt-4">
        <div className="space-y-4">
          {fleets.map((fleet, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 active:scale-98 transition-transform">
              {/* Hero Image */}
              <div className="relative h-48">
                <Image 
                  src={fleet.image}
                  alt={fleet.name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {fleet.badge && (
                  <div className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {fleet.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-purple-900 mb-1">{fleet.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{fleet.type}</p>

                <div className="flex items-center gap-2 mb-4 text-purple-700">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-semibold">{fleet.capacity}</span>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {fleet.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">Harga sewa</p>
                    <p className="text-lg font-bold text-amber-600">{fleet.price}</p>
                  </div>
                  <a 
                    href="https://wa.me/6281120508 00?text=Halo%2C%20saya%20tertarik%20dengan%20armada%20DRW%20TRANS"
                    className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2.5 rounded-xl font-semibold text-sm active:scale-95 transition-transform shadow-lg"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="container px-4 mt-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-purple-900 mb-2">Fasilitas Premium</h2>
          <p className="text-gray-600 text-sm">Kenyamanan dan keamanan prioritas kami</p>
        </div>

        {/* Safety */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-purple-900 mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-amber-500" />
            Keamanan
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {facilities.safety.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="aspect-square relative">
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2.5 text-center">
                  <p className="text-xs font-semibold text-gray-700">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comfort */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-purple-900 mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-amber-500" />
            Kenyamanan
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {facilities.comfort.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="aspect-square relative">
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2.5 text-center">
                  <p className="text-xs font-semibold text-gray-700">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-purple-900 mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5 text-amber-500" />
            Teknologi
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {facilities.technology.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="aspect-square relative">
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2.5 text-center">
                  <p className="text-xs font-semibold text-gray-700">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Storage */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-purple-900 mb-4 flex items-center gap-2">
            <Luggage className="h-5 w-5 text-amber-500" />
            Penyimpanan
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {facilities.storage.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="aspect-square relative">
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2.5 text-center">
                  <p className="text-xs font-semibold text-gray-700">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interior & Exterior Gallery */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-purple-900 mb-4 text-center">Galeri Bus</h3>
          <div className="grid grid-cols-1 gap-3">
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
      </section>
    </div>
  )
}
