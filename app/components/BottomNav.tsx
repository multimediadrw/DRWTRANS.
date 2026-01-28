'use client'

import { Home, DollarSign, Bus, Calendar, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BottomNav() {
  const pathname = usePathname()
  
  const navItems = [
    { href: '/', icon: Home, label: 'Beranda' },
    { href: '/harga', icon: DollarSign, label: 'Harga' },
    { href: '/armada', icon: Bus, label: 'Armada' },
    { href: '/pemesanan', icon: Calendar, label: 'Pesan' },
    { href: '/faq', icon: HelpCircle, label: 'Bantuan' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive
                  ? 'text-royal-purple'
                  : 'text-gray-500 hover:text-royal-purple'
              }`}
            >
              <Icon className={`h-5 w-5 mb-0.5 ${isActive ? 'stroke-[2.5]' : ''}`} />
              <span className={`text-[10px] ${isActive ? 'font-semibold' : 'font-medium'}`}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
