'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Bell, Check, Trash2, Gift, Bus, AlertCircle, Info } from 'lucide-react'

interface Notification {
  id: number
  type: 'promo' | 'booking' | 'info' | 'alert'
  title: string
  message: string
  time: string
  isRead: boolean
  icon: any
  iconColor: string
  iconBg: string
}

export default function NotifikasiPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'promo',
      title: 'Diskon 20% Sewa Bus!',
      message: 'Dapatkan diskon hingga Rp 500.000 untuk pemesanan bus minggu ini. Buruan booking sekarang!',
      time: '2 jam yang lalu',
      isRead: false,
      icon: Gift,
      iconColor: 'text-purple-700',
      iconBg: 'bg-purple-100'
    },
    {
      id: 2,
      type: 'booking',
      title: 'Pemesanan Berhasil',
      message: 'Pemesanan Toyota HiAce Premium untuk tanggal 30 Jan 2026 telah dikonfirmasi. Driver akan menghubungi Anda H-1.',
      time: '5 jam yang lalu',
      isRead: false,
      icon: Bus,
      iconColor: 'text-green-700',
      iconBg: 'bg-green-100'
    },
    {
      id: 3,
      type: 'info',
      title: 'Tips Perjalanan Aman',
      message: 'Pastikan selalu menggunakan sabuk pengaman dan ikuti protokol kesehatan selama perjalanan.',
      time: '1 hari yang lalu',
      isRead: true,
      icon: Info,
      iconColor: 'text-blue-700',
      iconBg: 'bg-blue-100'
    },
    {
      id: 4,
      type: 'alert',
      title: 'Pembayaran Segera Jatuh Tempo',
      message: 'Pelunasan untuk pemesanan #DRW2026001 jatuh tempo besok. Segera lakukan pembayaran.',
      time: '2 hari yang lalu',
      isRead: true,
      icon: AlertCircle,
      iconColor: 'text-orange-700',
      iconBg: 'bg-orange-100'
    },
    {
      id: 5,
      type: 'promo',
      title: 'Paket Wisata Hemat',
      message: 'Nikmati paket wisata all-in mulai dari Rp 2 juta. Termasuk bus, driver, BBM, dan tol!',
      time: '3 hari yang lalu',
      isRead: true,
      icon: Gift,
      iconColor: 'text-purple-700',
      iconBg: 'bg-purple-100'
    }
  ])

  const unreadCount = notifications.filter(n => !n.isRead).length

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, isRead: true } : n
    ))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })))
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Header */}
      <header className="bg-gradient-to-b from-royal-purple to-royal-purple-dark px-4 pt-[env(safe-area-inset-top,1.5rem)] pb-6">
        <div className="flex items-center justify-between mb-4 pt-6">
          <Link href="/" className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <ArrowLeft className="w-5 h-5 text-white" />
          </Link>
          
          <h1 className="text-white font-bold text-lg">Notifikasi</h1>
          
          <div className="w-9 h-9" /> {/* Spacer */}
        </div>

        {/* Unread Badge */}
        {unreadCount > 0 && (
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">
                {unreadCount} notifikasi belum dibaca
              </span>
            </div>
            <button
              onClick={markAllAsRead}
              className="text-white text-xs font-semibold underline"
            >
              Tandai semua
            </button>
          </div>
        )}
      </header>

      {/* Notifications List */}
      <div className="px-4 mt-6 space-y-3">
        {notifications.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
            <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 text-sm">Belum ada notifikasi</p>
          </div>
        ) : (
          notifications.map((notif) => (
            <div
              key={notif.id}
              className={`bg-white rounded-xl shadow-sm border ${
                notif.isRead ? 'border-gray-100' : 'border-purple-200 bg-purple-50/30'
              } overflow-hidden transition-all`}
            >
              <div className="p-4">
                <div className="flex gap-3">
                  {/* Icon */}
                  <div className={`w-10 h-10 ${notif.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <notif.icon className={`w-5 h-5 ${notif.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className={`font-bold text-sm ${notif.isRead ? 'text-gray-900' : 'text-purple-900'}`}>
                        {notif.title}
                      </h3>
                      {!notif.isRead && (
                        <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0 mt-1" />
                      )}
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                      {notif.message}
                    </p>
                    
                    <p className="text-xs text-gray-400 mb-3">
                      {notif.time}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      {!notif.isRead && (
                        <button
                          onClick={() => markAsRead(notif.id)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold rounded-lg hover:bg-purple-200 active:scale-95 transition-all"
                        >
                          <Check className="w-3 h-3" />
                          Tandai dibaca
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notif.id)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg hover:bg-gray-200 active:scale-95 transition-all"
                      >
                        <Trash2 className="w-3 h-3" />
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
