'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  History,
  Heart,
  Settings,
  HelpCircle,
  LogOut,
  Bus,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react'

interface BookingHistory {
  id: string
  vehicleName: string
  date: string
  status: 'completed' | 'ongoing' | 'cancelled'
  price: string
  image: string
}

export default function AkunPage() {
  const [bookingHistory] = useState<BookingHistory[]>([
    {
      id: 'DRW2026003',
      vehicleName: 'Toyota HiAce Premium',
      date: '30 Jan 2026',
      status: 'ongoing',
      price: 'Rp 1.500.000',
      image: '/hero-bus.jpg'
    },
    {
      id: 'DRW2026002',
      vehicleName: 'Medium Bus Luxury',
      date: '15 Jan 2026',
      status: 'completed',
      price: 'Rp 2.500.000',
      image: '/hero-bus.jpg'
    },
    {
      id: 'DRW2026001',
      vehicleName: 'Big Bus Executive',
      date: '5 Jan 2026',
      status: 'completed',
      price: 'Rp 3.500.000',
      image: '/hero-bus.jpg'
    }
  ])

  const menuItems = [
    {
      icon: History,
      label: 'Riwayat Pemesanan',
      subtitle: `${bookingHistory.length} pemesanan`,
      iconColor: 'text-purple-700',
      iconBg: 'bg-purple-100',
      href: '#riwayat'
    },
    {
      icon: Heart,
      label: 'Armada Favorit',
      subtitle: '3 armada disimpan',
      iconColor: 'text-red-700',
      iconBg: 'bg-red-100',
      href: '/armada'
    },
    {
      icon: Settings,
      label: 'Pengaturan',
      subtitle: 'Kelola akun & preferensi',
      iconColor: 'text-gray-700',
      iconBg: 'bg-gray-100',
      href: '#pengaturan'
    },
    {
      icon: HelpCircle,
      label: 'Bantuan & FAQ',
      subtitle: 'Pusat bantuan',
      iconColor: 'text-blue-700',
      iconBg: 'bg-blue-100',
      href: '#bantuan'
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return {
          icon: CheckCircle,
          label: 'Selesai',
          color: 'text-green-700',
          bg: 'bg-green-100'
        }
      case 'ongoing':
        return {
          icon: Clock,
          label: 'Berlangsung',
          color: 'text-blue-700',
          bg: 'bg-blue-100'
        }
      case 'cancelled':
        return {
          icon: XCircle,
          label: 'Dibatalkan',
          color: 'text-red-700',
          bg: 'bg-red-100'
        }
      default:
        return {
          icon: Clock,
          label: 'Unknown',
          color: 'text-gray-700',
          bg: 'bg-gray-100'
        }
    }
  }

  const getWhatsAppLink = () => {
    const message = `Halo DRW TRANS, saya ingin menghubungi customer service.`
    return `https://wa.me/628112050800?text=${encodeURIComponent(message)}`
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Header */}
      <header className="bg-gradient-to-b from-royal-purple to-royal-purple-dark px-4 pt-[env(safe-area-inset-top,1.5rem)] pb-6">
        <div className="flex items-center justify-between mb-6 pt-6">
          <Link href="/" className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <ArrowLeft className="w-5 h-5 text-white" />
          </Link>
          
          <h1 className="text-white font-bold text-lg">Akun Saya</h1>
          
          <div className="w-9 h-9" /> {/* Spacer */}
        </div>

        {/* User Profile Card */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 text-royal-purple" />
            </div>

            {/* User Info */}
            <div className="flex-1 min-w-0">
              <h2 className="text-white font-bold text-base mb-0.5">Sahabat DRW</h2>
              <p className="text-white/80 text-xs mb-1">Member sejak Jan 2026</p>
              <div className="flex items-center gap-1">
                <div className="px-2 py-0.5 bg-amber-gold/20 rounded text-amber-gold text-xs font-semibold">
                  ⭐ Gold Member
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Info */}
      <div className="px-4 mt-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <Phone className="w-4 h-4 text-purple-700" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-0.5">Nomor Telepon</p>
              <p className="text-sm font-semibold text-gray-900">+62 811-2050-800</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <Mail className="w-4 h-4 text-orange-700" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-0.5">Email</p>
              <p className="text-sm font-semibold text-gray-900">info@drwtrans.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <MapPin className="w-4 h-4 text-blue-700" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-0.5">Alamat</p>
              <p className="text-sm font-semibold text-gray-900">Bandung, Jawa Barat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 mt-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-3 p-4 hover:bg-gray-50 active:bg-gray-100 transition-all ${
                index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className={`w-10 h-10 ${item.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                <item.icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm text-gray-900 mb-0.5">
                  {item.label}
                </h3>
                <p className="text-xs text-gray-500">
                  {item.subtitle}
                </p>
              </div>

              <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      {/* Booking History */}
      <div className="px-4 mt-6" id="riwayat">
        <h2 className="text-base font-bold text-gray-900 mb-3">Riwayat Pemesanan</h2>
        
        <div className="space-y-3">
          {bookingHistory.map((booking) => {
            const statusBadge = getStatusBadge(booking.status)
            return (
              <div
                key={booking.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="flex gap-3 p-4">
                  {/* Image */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                      src={booking.image}
                      alt={booking.vehicleName}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm text-gray-900 mb-0.5 truncate">
                          {booking.vehicleName}
                        </h3>
                        <p className="text-xs text-gray-500 mb-1">
                          {booking.date} • {booking.id}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-orange-600">
                        {booking.price}
                      </p>

                      <div className={`flex items-center gap-1 px-2 py-1 ${statusBadge.bg} rounded-lg`}>
                        <statusBadge.icon className={`w-3 h-3 ${statusBadge.color}`} />
                        <span className={`text-xs font-semibold ${statusBadge.color}`}>
                          {statusBadge.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* WhatsApp Contact Button */}
      <div className="px-4 mt-6">
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 hover:bg-green-600 active:scale-95 text-white font-semibold rounded-xl transition-all shadow-md"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Hubungi Customer Service
        </a>
      </div>

      {/* Logout Button */}
      <div className="px-4 mt-4">
        <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-200 hover:bg-gray-50 active:scale-95 text-red-600 font-semibold rounded-xl transition-all">
          <LogOut className="w-5 h-5" />
          Keluar
        </button>
      </div>
    </div>
  )
}
