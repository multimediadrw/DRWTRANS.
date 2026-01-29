'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BottomNav from './components/BottomNav'
import BookingModal from './components/BookingModal'
import PWAInstall from './components/PWAInstall'
import { Bell, User, Bus, Car, Star, ChevronRight, ChevronDown } from 'lucide-react'

export default function HomePage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const services = [
    { 
      icon: Bus, 
      label: 'Sewa Bus', 
      subtitle: 'Kapasitas 45-50 Seat',
      bgColor: 'bg-purple-100', 
      iconColor: 'text-purple-700', 
      href: '/bisnis' 
    },
    { 
      icon: Car, 
      label: 'Sewa HiAce', 
      subtitle: 'Kapasitas 14 Seat',
      bgColor: 'bg-orange-100', 
      iconColor: 'text-orange-700', 
      href: '/pribadi' 
    },
  ]

  const promos = [
    { 
      id: 1, 
      title: 'Diskon 20% Sewa Bus', 
      subtitle: 'Hemat hingga Rp 500.000', 
      color: 'from-blue-500 to-purple-600',
      image: '/hero-bus.jpg'
    },
    { 
      id: 2, 
      title: 'Paket Wisata Hemat', 
      subtitle: 'Mulai Rp 2 Juta All-In', 
      color: 'from-green-500 to-teal-600',
      image: '/hero-bus.jpg'
    },
    { 
      id: 3, 
      title: 'Promo HiAce Spesial', 
      subtitle: 'Gratis Driver & BBM', 
      color: 'from-orange-500 to-red-600',
      image: '/hero-bus.jpg'
    },
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

  const faqs = [
    {
      id: 1,
      question: 'Apakah harga sudah termasuk BBM?',
      answer: 'Ya, harga sewa sudah termasuk BBM, driver, dan tol dalam kota. Untuk perjalanan luar kota, BBM dan tol ditanggung penyewa.'
    },
    {
      id: 2,
      question: 'Bagaimana cara pembayaran?',
      answer: 'Pembayaran dapat dilakukan via transfer bank (BCA, Mandiri, BRI) atau tunai. DP 30% saat booking, pelunasan H-1 sebelum keberangkatan.'
    },
    {
      id: 3,
      question: 'Apakah bisa lepas kunci (tanpa driver)?',
      answer: 'Maaf, untuk keamanan dan kenyamanan, semua armada kami disewakan dengan driver profesional yang berpengalaman.'
    },
  ]

  const getWhatsAppLink = (vehicleName: string) => {
    const message = `Halo DRW TRANS, saya tertarik menyewa ${vehicleName}. Mohon info lebih lanjut.`
    return `https://wa.me/6281120500800?text=${encodeURIComponent(message)}`
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-32 animate-fadeIn">
      {/* App Header with Safe Area Top */}
      <header className="bg-gradient-to-b from-royal-purple to-royal-purple-dark h-48 rounded-b-[2.5rem] px-4 pt-[env(safe-area-inset-top,1.5rem)] pb-16">
        <div className="flex items-center justify-between mb-6 pt-6">
          {/* Logo Horizontal - Fixed Aspect Ratio */}
          <div className="flex items-center gap-2">
            <Image 
              src="/logo-drwtrans.png" 
              alt="DRW TRANS" 
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
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

        {/* Greeting */}
        <div className="text-white">
          <h1 className="text-xl font-bold mb-1">Hai, Sahabat DRW 👋</h1>
          <p className="text-sm text-white/80">Mau pergi ke mana hari ini?</p>
        </div>
      </header>

      {/* Overlapping Service Menu Card */}
      <div className="px-4 -mt-12 mb-8 relative z-10">
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
          <div className="space-y-3">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 active:scale-95 transition-all no-select"
              >
                {/* Left: Icon Circle */}
                <div className={`w-14 h-14 ${service.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} strokeWidth={2} />
                </div>

                {/* Center: Title & Subtitle */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base text-gray-900 mb-0.5">
                    {service.label}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {service.subtitle}
                  </p>
                </div>

                {/* Right: Arrow */}
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Promo Banner with Gradient Overlay */}
      <section className="mb-8">
        <div className="px-4 mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Promo Spesial</h2>
          <Link href="/promo" className="text-xs text-royal-purple font-semibold flex items-center gap-0.5">
            Lihat Semua
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
          {promos.map((promo, index) => (
            <div
              key={promo.id}
              className={`flex-shrink-0 w-[85%] snap-center ${index === 0 ? 'pl-4' : ''} ${index === promos.length - 1 ? 'pr-4' : ''}`}
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md border border-gray-100">
                {/* Background Image */}
                <div className={`absolute inset-0 bg-gradient-to-r ${promo.color}`} />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="relative h-full p-5 flex flex-col justify-end no-select">
                  <h3 className="text-white font-bold text-base mb-1 drop-shadow-lg">
                    {promo.title}
                  </h3>
                  <p className="text-white/95 text-xs drop-shadow-md">
                    {promo.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Armada Favorit with WhatsApp Links */}
      <section className="px-4 mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Armada Favorit</h2>
          <Link href="/armada" className="text-xs text-royal-purple font-semibold flex items-center gap-0.5">
            Lihat Semua
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="space-y-3">
          {armada.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden no-select"
            >
              {/* Full Width Image */}
              <div className="relative w-full aspect-[4/3] bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base text-gray-900 mb-1 truncate">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item.seats} • AC • Audio</p>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Star className="w-3 h-3 fill-amber-gold text-amber-gold" />
                    <span className="text-xs font-semibold text-gray-900">{item.rating}</span>
                    <span className="text-xs text-gray-400">({item.reviews})</span>
                  </div>
                </div>

                {/* Price & WhatsApp Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Mulai dari</p>
                    <p className="text-lg font-bold text-orange-600">{item.price}</p>
                  </div>
                  
                  {/* WhatsApp Button */}
                  <a
                    href={getWhatsAppLink(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 active:scale-95 text-white text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Pesan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="px-4 mb-8">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900">Pertanyaan Umum</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                className="w-full px-4 py-4 flex items-center justify-between gap-3 text-left hover:bg-gray-50 active:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-sm text-gray-900 flex-1">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    expandedFaq === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  expandedFaq === faq.id 
                    ? 'max-h-48 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 pb-4 text-sm text-gray-500 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Destinasi Populer */}
      <section className="px-4 mb-8">
        <div className="mb-4">
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
              className="block active:scale-95 transition-transform"
            >
              <div className={`h-28 rounded-xl bg-gradient-to-br ${dest.color} p-4 flex flex-col justify-end shadow-md border border-gray-100 no-select`}>
                <h3 className="text-white font-bold text-base drop-shadow-lg">{dest.name}</h3>
                <p className="text-white/95 text-xs drop-shadow-md">{dest.trips}</p>
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
