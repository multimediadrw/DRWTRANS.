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
    { icon: Bus, label: 'Sewa Bus', color: 'bg-purple-100', iconColor: 'text-royal-purple', href: '/bisnis' },
    { icon: Car, label: 'HiAce', color: 'bg-purple-100', iconColor: 'text-royal-purple', href: '/pribadi' },
    { icon: MapPin, label: 'Paket Wisata', color: 'bg-purple-100', iconColor: 'text-royal-purple', href: '/promo' },
    { icon: Briefcase, label: 'Antar Jemput', color: 'bg-purple-100', iconColor: 'text-royal-purple', href: '/pemesanan' },
  ]

  const promos = [
    { id: 1, title: 'Diskon 20% Sewa Bus', subtitle: 'Hemat hingga Rp 500.000', color: 'from-blue-500 to-purple-600' },
    { id: 2, title: 'Paket Wisata Hemat', subtitle: 'Mulai Rp 2 Juta All-In', color: 'from-green-500 to-teal-600' },
    { id: 3, title: 'Promo HiAce Spesial', subtitle: 'Gratis Driver & BBM', color: 'from-orange-500 to-red-600' },
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
      {/* App Header with Extreme Rounded Bottom */}
      <header className="bg-gradient-to-b from-royal-purple to-royal-purple-dark h-48 rounded-b-[2.5rem] px-4 pt-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          {/* Logo Horizontal */}
          <div className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="DRW TRANS" 
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-white font-bold text-lg">DRW TRANS</span>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Bell className="w-4 h-4 text-white" />
            </button>
            <button className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <User className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Greeting - Smaller */}
        <div className="text-white">
          <h1 className="text-xl font-bold mb-1">Hai, Sahabat DRW 👋</h1>
          <p className="text-sm text-white/80">Mau pergi ke mana hari ini?</p>
        </div>
      </header>

      {/* Overlapping Service Grid Card */}
      <div className="px-4 -mt-10 mb-6">
        <div className="bg-white rounded-3xl shadow-xl p-5">
          <div className="grid grid-cols-4 gap-3">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <span className="text-[10px] font-semibold text-gray-700 text-center leading-tight">
                  {service.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Promo Banner - Full Image with Snap */}
      <section className="mb-6">
        <div className="px-4 mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Promo Spesial</h2>
          <Link href="/promo" className="text-xs text-royal-purple font-semibold flex items-center gap-0.5">
            Lihat Semua
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        
        <div className="flex gap-3 overflow-x-auto px-4 pb-2 snap-x snap-center scrollbar-hide">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="flex-shrink-0 w-[85%] snap-center"
            >
              <div className={`aspect-[16/9] rounded-2xl bg-gradient-to-r ${promo.color} p-5 flex flex-col justify-center shadow-lg`}>
                <h3 className="text-white font-bold text-base mb-1">
                  {promo.title}
                </h3>
                <p className="text-white/90 text-xs">
                  {promo.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Armada Favorit - Compact Cards */}
      <section className="px-4 mb-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Armada Favorit</h2>
          <Link href="/armada" className="text-xs text-royal-purple font-semibold flex items-center gap-0.5">
            Lihat Semua
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="space-y-3">
          {armada.map((item) => (
            <Link
              key={item.id}
              href="/pemesanan"
              className="block bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              {/* Full Width Image */}
              <div className="relative w-full h-32 bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content with Compact Spacing */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base text-gray-900 mb-1 truncate">{item.name}</h3>
                    <p className="text-xs text-gray-600">{item.seats} • AC • Audio</p>
                  </div>
                  
                  {/* Rating - Compact */}
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Star className="w-3 h-3 fill-amber-gold text-amber-gold" />
                    <span className="text-xs font-semibold text-gray-900">{item.rating}</span>
                  </div>
                </div>

                {/* Price - Bold Orange */}
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <p className="text-[10px] text-gray-500 mb-0.5">Mulai dari</p>
                    <p className="text-base font-bold text-orange-500">{item.price}</p>
                  </div>
                  <div className="text-xs text-gray-400">
                    ({item.reviews} ulasan)
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Destinasi Populer - Compact */}
      <section className="px-4 mb-6">
        <div className="mb-3">
          <h2 className="text-lg font-bold text-gray-900">Destinasi Populer</h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
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
              <div className={`h-28 rounded-2xl bg-gradient-to-br ${dest.color} p-4 flex flex-col justify-end shadow-sm`}>
                <h3 className="text-white font-bold text-base">{dest.name}</h3>
                <p className="text-white/90 text-xs">{dest.trips}</p>
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
