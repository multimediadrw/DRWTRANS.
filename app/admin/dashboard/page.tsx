'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  LayoutDashboard,
  Gift,
  Bus,
  DollarSign,
  Bell,
  Calendar,
  Image as ImageIcon,
  FileText,
  Users,
  TrendingUp,
  LogOut,
  Menu,
  X
} from 'lucide-react'

export default function AdminDashboardPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [adminUsername, setAdminUsername] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem('adminAuth')
    const username = localStorage.getItem('adminUsername')
    
    if (auth === 'true' && username) {
      setIsAuthenticated(true)
      setAdminUsername(username)
    } else {
      router.push('/admin/login')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    localStorage.removeItem('adminUsername')
    router.push('/admin/login')
  }

  const stats = [
    {
      icon: Calendar,
      label: 'Total Booking',
      value: '127',
      change: '+12%',
      color: 'bg-blue-100 text-blue-700',
      trend: 'up'
    },
    {
      icon: DollarSign,
      label: 'Revenue Bulan Ini',
      value: 'Rp 245 Jt',
      change: '+8%',
      color: 'bg-green-100 text-green-700',
      trend: 'up'
    },
    {
      icon: Bus,
      label: 'Armada Aktif',
      value: '24',
      change: '+2',
      color: 'bg-purple-100 text-purple-700',
      trend: 'up'
    },
    {
      icon: Users,
      label: 'User Terdaftar',
      value: '1,543',
      change: '+23%',
      color: 'bg-orange-100 text-orange-700',
      trend: 'up'
    }
  ]

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      href: '/admin/dashboard',
      color: 'text-purple-700',
      active: true
    },
    {
      icon: Gift,
      label: 'Kelola Promo',
      href: '/admin/promo',
      color: 'text-pink-700',
      active: false
    },
    {
      icon: Bus,
      label: 'Kelola Armada',
      href: '/admin/armada',
      color: 'text-blue-700',
      active: false
    },
    {
      icon: DollarSign,
      label: 'Kelola Harga',
      href: '/admin/harga',
      color: 'text-green-700',
      active: false
    },
    {
      icon: Calendar,
      label: 'Kelola Booking',
      href: '/admin/booking',
      color: 'text-orange-700',
      active: false
    },
    {
      icon: Bell,
      label: 'Kirim Notifikasi',
      href: '/admin/notifikasi',
      color: 'text-red-700',
      active: false
    },
    {
      icon: ImageIcon,
      label: 'Kelola Galeri',
      href: '/admin/galeri',
      color: 'text-teal-700',
      active: false
    },
    {
      icon: FileText,
      label: 'Kelola Konten',
      href: '/admin/konten',
      color: 'text-indigo-700',
      active: false
    }
  ]

  const recentBookings = [
    { id: 'DRW2026127', customer: 'PT Maju Jaya', vehicle: 'Big Bus 50 Seat', date: '30 Jan 2026', status: 'confirmed', amount: 'Rp 3.500.000' },
    { id: 'DRW2026126', customer: 'Yayasan Pendidikan', vehicle: 'Medium Bus 35 Seat', date: '29 Jan 2026', status: 'pending', amount: 'Rp 2.500.000' },
    { id: 'DRW2026125', customer: 'Keluarga Bpk. Ahmad', vehicle: 'HiAce 14 Seat', date: '28 Jan 2026', status: 'confirmed', amount: 'Rp 1.500.000' }
  ]

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-royal-purple">DRW TRANS</h1>
                <p className="text-xs text-gray-500">Admin Portal</p>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-1">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    item.active
                      ? 'bg-purple-50 text-royal-purple font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${item.active ? 'text-royal-purple' : item.color}`} />
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* User & Logout */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-3 px-4 py-2 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-royal-purple rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{adminUsername}</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-xl hover:bg-red-100 transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm font-semibold">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Dashboard</h2>
                <p className="text-sm text-gray-500">Selamat datang, {adminUsername}!</p>
              </div>
            </div>
            <Link
              href="/"
              className="text-sm text-royal-purple font-semibold hover:underline"
            >
              Lihat Website →
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-semibold">{stat.change}</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Recent Bookings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">Booking Terbaru</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ID Booking</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Kendaraan</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Tanggal</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Jumlah</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentBookings.map((booking, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{booking.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{booking.customer}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{booking.vehicle}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{booking.date}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-lg ${
                          booking.status === 'confirmed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {booking.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{booking.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}
    </div>
  )
}
