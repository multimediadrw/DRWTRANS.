'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BottomNav from './components/BottomNav'
import BookingModal from './components/BookingModal'
import PWAInstall from './components/PWAInstall'
import { Bell, User, Bus, Car, MapPin, Briefcase, Star, ChevronRight } from 'lucide-react'

export default function HomePage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const services = [
    { icon: Bus, label: 'Sewa Bus', color: 'bg-blue-500', href: '/bisnis' },
    { icon: Car, label: 'HiAce', color: 'bg-green-500', href: '/pribadi' },
    { icon: MapPin, label: 'Paket Wisata', color: 'bg-orange-500', href: '/promo' },
    { icon: Briefcase, label: 'Antar Jemput', color: 'bg-purple-500', href: '/pemesanan' },
  ]

  const promos = [
    { id: 1, title: 'Diskon 20% Sewa Bus', image: '/promo1.jpg', color: 'from-blue-500 to-purple-600' },
    { id: 2, title: 'Paket Wisata Hemat', image: '/promo2.jpg', color: 'from-green-500 to-teal-600' },
    { id: 3, title: 'Promo HiAce Spesial', image: '/promo3.jpg', color: 'from-orange-500 to-red-600' },
  ]

  const armada = [
    {
      id: 1,
      name: 'Toyota HiAce Premium',
      seats: '14 Kursi',
      price: 'Rp 1.500.000',
      rating: 4.8,
      reviews: 128,
      image: '/hero-bus.jpg',
    },
    {
      id: 2,
      name: 'Medium Bus Luxury',
      seats: '31 Kursi',
      price: 'Rp 2.500.000',
      rating: 4.9,
      reviews: 95,
      image: '/hero-bus.jpg',
    },
    {
      id: 3,
      name: 'Big Bus Executive',
      seats: '50 Kursi',
      price: 'Rp 3.500.000',
      rating: 4.7,
      reviews: 76,
      image: '/hero-bus.jpg',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* App-Like Header with Gradient */}
      <header className="bg-gradient-to-b from-royal-purple via-royal-purple-dark to-transparent pt-12 pb-32 px-4">
        <div className="flex items-center justify-between mb-8">
          {/* Logo Horizontal */}
          <div className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="DRW TRANS" 
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-white font-bold text-xl">DRW TRANS</span>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Bell className="w-5 h-5 text-white" />
            </button>
            <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <User className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Greeting */}
        <div className="text-white">
          <h1 className="text-2xl font-bold mb-1">Hai, Sahabat DRW 👋</h1>
          <p className="text-white/80">Mau pergi ke mana hari ini?</p>
        </div>
      </header>

      {/* Floating Service Grid Card */}
      <div className="px-4 -mt-20 mb-6">
        <div className="bg-white rounded-3xl shadow-xl p-6">
          <div className="grid grid-cols-4 gap-4">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="flex flex-col items-center gap-2 group"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-semibold text-gray-700 text-center leading-tight">
                  {service.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Promo Banner (Horizontal Scroll) */}
      <section className="mb-6">
        <div className="px-4 mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Promo Spesial</h2>
          <Link href="/promo" className="text-sm text-royal-purple font-semibold flex items-center gap-1">
            Lihat Semua
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-hide">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="flex-shrink-0 w-72 snap-start"
            >
              <div className={`h-36 rounded-2xl bg-gradient-to-r ${promo.color} p-6 flex items-center justify-center shadow-lg`}>
                <h3 className="text-white font-bold text-xl text-center">
                  {promo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Armada Favorit (Vertical Cards) */}
      <section className="px-4 mb-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Armada Favorit</h2>
          <Link href="/armada" className="text-sm text-royal-purple font-semibold flex items-center gap-1">
            Lihat Semua
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-4">
          {armada.map((item) => (
            <Link
              key={item.id}
              href="/pemesanan"
              className="block bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="flex gap-4 p-4">
                {/* Image */}
                <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 mb-1 truncate">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.seats} • AC • Audio</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-gold text-amber-gold" />
                      <span className="text-sm font-semibold text-gray-900">{item.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">({item.reviews} ulasan)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Mulai dari</p>
                      <p className="text-base font-bold text-amber-gold">{item.price}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Destinasi Populer */}
      <section className="px-4 mb-6">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900">Destinasi Populer</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Bandung', trips: '120+ Trip', color: 'from-blue-500 to-cyan-500' },
            { name: 'Jakarta', trips: '200+ Trip', color: 'from-purple-500 to-pink-500' },
            { name: 'Yogyakarta', trips: '95+ Trip', color: 'from-orange-500 to-red-500' },
            { name: 'Bali', trips: '150+ Trip', color: 'from-green-500 to-teal-500' },
          ].map((dest, index) => (
            <Link
              key={index}
              href="/promo"
              className="block"
            >
              <div className={`h-32 rounded-2xl bg-gradient-to-br ${dest.color} p-4 flex flex-col justify-end shadow-lg`}>
                <h3 className="text-white font-bold text-lg">{dest.name}</h3>
                <p className="text-white/90 text-sm">{dest.trips}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <BottomNav />

      {/* PWA Install Prompt */}
      <PWAInstall />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  )
}
