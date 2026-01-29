'use client'

import { useState } from 'react'
import Navigation from '../components/Navigation'
import FleetGalleryModal from '../components/FleetGalleryModal'
import Image from 'next/image'
import { Users, Wind, Tv, Wifi, Shield, Zap, Coffee, Luggage, MapPin, Bus as BusIcon, Car } from 'lucide-react'

export default function ArmadaPage() {
  const [selectedFleet, setSelectedFleet] = useState<{ name: string; image: string; category: 'bus' | 'hiace' } | null>(null)
  
  const busFleets = [
    {
      name: 'Big Bus 50 Seats',
      image: '/armada/bus/big-bus-50-seats.jpg',
      capacity: '50 penumpang',
      type: 'Mercedes Benz 1626 Air Suspension',
      features: ['AC Central', 'TV & Audio System', 'USB Charging', 'Reclining Seats'],
      price: 'Mulai Rp 3.9jt',
      gradient: 'from-purple-600 to-purple-800',
      category: 'bus' as const
    },
    {
      name: 'Big Bus 47 Seats + Toilet',
      image: '/armada/bus/big-bus-47-seats-toilet.jpg',
      capacity: '47 penumpang + Toilet',
      type: 'Mercedes Benz 1626 Air Suspension',
      features: ['AC Central', 'Toilet', 'TV & Audio System', 'USB Charging'],
      price: 'Mulai Rp 3.9jt',
      gradient: 'from-purple-600 to-purple-800',
      badge: 'TOILET',
      category: 'bus' as const
    },
    {
      name: 'Big Bus 59 Seats',
      image: '/armada/bus/big-bus-59-seats.jpg',
      capacity: '59 penumpang (Double Decker)',
      type: 'Mercedes Benz 1626 Air Suspension',
      features: ['AC Central', 'Double Decker', 'TV & Audio', 'Luxury Seats'],
      price: 'Mulai Rp 3.9jt',
      gradient: 'from-purple-700 to-purple-900',
      badge: 'DOUBLE DECKER',
      category: 'bus' as const
    },
    {
      name: 'Medium Bus 35 Seats',
      image: '/armada/bus/medium-bus-35-seats.jpg',
      capacity: '35 penumpang',
      type: 'Mercedes Benz OF 917',
      features: ['AC', 'Audio System', 'Reclining Seats', 'USB Charging'],
      price: 'Mulai Rp 2.8jt',
      gradient: 'from-purple-500 to-purple-700',
      category: 'bus' as const
    },
  ]

  const hiaceFleets = [
    {
      name: 'HiAce 12/14 Seats',
      image: '/armada/hiace/hiace-12-14-seats.jpg',
      capacity: '12-14 penumpang',
      type: 'Toyota HiAce Commuter 2020',
      features: ['AC', 'Audio System', 'Comfortable Seats', 'Compact Size'],
      price: 'Mulai Rp 1.5jt',
      gradient: 'from-orange-500 to-orange-700',
      badge: 'POPULER',
      category: 'hiace' as const
    },
  ]

  const hiaceGallery = [
    { name: 'Interior Kabin', image: '/armada/hiace/hiace-interior-cabin.jpg' },
    { name: 'View dari Belakang', image: '/armada/hiace/hiace-interior-rear-view.jpg' },
    { name: 'Kursi Depan Premium', image: '/armada/hiace/hiace-front-seats.jpg' },
    { name: 'Dashboard & TV', image: '/armada/hiace/hiace-dashboard-tv.jpg' },
    { name: 'Dashboard Depan', image: '/armada/hiace/hiace-dashboard-front.jpg' },
    { name: 'Kursi Penumpang', image: '/armada/hiace/hiace-passenger-seats.jpg' },
    { name: 'Kursi Supir', image: '/armada/hiace/hiace-driver-seat.jpg' },
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

      {/* Bus Fleet Section */}
      <section className="container px-4 -mt-4">
        <div className="mb-6 flex items-center gap-2">
          <BusIcon className="h-6 w-6 text-purple-700" />
          <h2 className="text-xl font-bold text-gray-900">Armada Bus</h2>
        </div>
        <div className="space-y-4 mb-8">
          {busFleets.map((fleet, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 active:scale-98 transition-transform">
              {/* Hero Image */}
              <div 
                className="relative w-full aspect-[4/3] cursor-pointer active:opacity-90 transition-opacity"
                onClick={() => setSelectedFleet({ name: fleet.name, image: fleet.image, category: fleet.category })}
              >
                <Image 
                  src={fleet.image}
                  alt={fleet.name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Tap to View Overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-purple-900 opacity-0 group-hover:opacity-100 transition-opacity">
                    Tap untuk detail
                  </div>
                </div>
                {fleet.badge && (
                  <div className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {fleet.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{fleet.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{fleet.type}</p>

                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span className="text-xs font-medium">{fleet.capacity}</span>
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
                    <p className="text-xs text-gray-500">Mulai dari</p>
                    <p className="text-lg font-bold text-orange-600">{fleet.price}</p>
                  </div>
                  <a 
                    href="https://wa.me/6281120508 00?text=Halo%2C%20saya%20tertarik%20dengan%20armada%20DRW%20TRANS"
                    className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2.5 rounded-xl font-semibold text-sm active:scale-95 transition-transform shadow-md"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HiAce Fleet Section */}
      <section className="container px-4">
        <div className="mb-6 flex items-center gap-2">
          <Car className="h-6 w-6 text-orange-700" />
          <h2 className="text-xl font-bold text-gray-900">Armada HiAce</h2>
        </div>
        <div className="space-y-4 mb-8">
          {hiaceFleets.map((fleet, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 active:scale-98 transition-transform">
              {/* Hero Image */}
              <div 
                className="relative w-full aspect-[4/3] cursor-pointer active:opacity-90 transition-opacity"
                onClick={() => setSelectedFleet({ name: fleet.name, image: fleet.image, category: fleet.category })}
              >
                <Image 
                  src={fleet.image}
                  alt={fleet.name}
                  fill
                  className="object-cover"
                />
                {/* Tap to View Overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-orange-900 opacity-0 group-hover:opacity-100 transition-opacity">
                    Tap untuk detail
                  </div>
                </div>
                {fleet.badge && (
                  <div className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {fleet.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{fleet.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{fleet.type}</p>

                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span className="text-xs font-medium">{fleet.capacity}</span>
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
                    <p className="text-xs text-gray-500">Mulai dari</p>
                    <p className="text-lg font-bold text-orange-600">{fleet.price}</p>
                  </div>
                  <a 
                    href="https://wa.me/6281120508 00?text=Halo%2C%20saya%20tertarik%20dengan%20HiAce%20DRW%20TRANS"
                    className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-2.5 rounded-xl font-semibold text-sm active:scale-95 transition-transform shadow-md"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HiAce Gallery */}
        <div className="mt-8 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Galeri Foto HiAce</h3>
          <div className="grid grid-cols-2 gap-3">
            {hiaceGallery.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
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
      </section>

      {/* Facility Gallery */}
      <section className="container px-4 mt-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Fasilitas Premium</h2>
          <p className="text-gray-500 text-sm">Kenyamanan dan keamanan prioritas kami</p>
        </div>

        {/* Safety */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-amber-500" />
            Keamanan
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {facilities.safety.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
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
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-amber-500" />
            Kenyamanan
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {facilities.comfort.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
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
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5 text-amber-500" />
            Teknologi
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {facilities.technology.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
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
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Luggage className="h-5 w-5 text-amber-500" />
            Penyimpanan
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {facilities.storage.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
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

        {/* Interior & Exterior Gallery (Bus) */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Galeri Bus</h3>
          <div className="grid grid-cols-1 gap-3">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-md border border-gray-100">
              <Image 
                src="/facilities/bus-interior-full.jpg" 
                alt="Interior Bus Lengkap"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-md border border-gray-100">
              <Image 
                src="/facilities/bus-exterior-side.jpg" 
                alt="Eksterior Bus"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-md border border-gray-100">
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

      {/* Fleet Gallery Modal */}
      <FleetGalleryModal
        isOpen={selectedFleet !== null}
        onClose={() => setSelectedFleet(null)}
        fleetName={selectedFleet?.name || ''}
        posterImage={selectedFleet?.image || ''}
      />
    </div>
  )
}
