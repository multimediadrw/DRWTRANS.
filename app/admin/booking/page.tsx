'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft,
  Calendar,
  User,
  Bus,
  Phone,
  MapPin,
  DollarSign,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  X,
  Filter
} from 'lucide-react'

interface Booking {
  id: string
  customerName: string
  customerPhone: string
  vehicle: string
  pickupLocation: string
  destination: string
  date: string
  duration: number
  totalPrice: number
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: string
  notes: string
}

export default function AdminBookingPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>('all')
  
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 'DRW2026127',
      customerName: 'PT Maju Jaya',
      customerPhone: '081234567890',
      vehicle: 'Big Bus Executive 50 Seat',
      pickupLocation: 'Jakarta Pusat',
      destination: 'Bandung',
      date: '2026-01-30',
      duration: 2,
      totalPrice: 3500000,
      status: 'confirmed',
      createdAt: '2026-01-28',
      notes: 'Perjalanan wisata karyawan'
    },
    {
      id: 'DRW2026126',
      customerName: 'Yayasan Pendidikan Harapan',
      customerPhone: '081234567891',
      vehicle: 'Medium Bus Luxury 35 Seat',
      pickupLocation: 'Jakarta Selatan',
      destination: 'Bogor',
      date: '2026-01-29',
      duration: 1,
      totalPrice: 2500000,
      status: 'pending',
      createdAt: '2026-01-27',
      notes: 'Study tour siswa SMA'
    },
    {
      id: 'DRW2026125',
      customerName: 'Keluarga Bpk. Ahmad',
      customerPhone: '081234567892',
      vehicle: 'Toyota HiAce Premium 14 Seat',
      pickupLocation: 'Jakarta Timur',
      destination: 'Puncak',
      date: '2026-01-28',
      duration: 1,
      totalPrice: 1500000,
      status: 'completed',
      createdAt: '2026-01-26',
      notes: 'Liburan keluarga'
    },
    {
      id: 'DRW2026124',
      customerName: 'PT Digital Solusi',
      customerPhone: '081234567893',
      vehicle: 'Big Bus Executive 50 Seat',
      pickupLocation: 'Jakarta Barat',
      destination: 'Anyer',
      date: '2026-01-27',
      duration: 3,
      totalPrice: 10500000,
      status: 'cancelled',
      createdAt: '2026-01-25',
      notes: 'Dibatalkan oleh customer'
    }
  ])

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (auth !== 'true') {
      router.push('/admin/login')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleViewDetail = (booking: Booking) => {
    setSelectedBooking(booking)
    setShowDetailModal(true)
  }

  const handleUpdateStatus = (id: string, newStatus: 'pending' | 'confirmed' | 'completed' | 'cancelled') => {
    setBookings(bookings.map(b => 
      b.id === id ? { ...b, status: newStatus } : b
    ))
    if (selectedBooking && selectedBooking.id === id) {
      setSelectedBooking({ ...selectedBooking, status: newStatus })
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return { icon: CheckCircle, label: 'Confirmed', color: 'bg-green-100 text-green-700' }
      case 'pending':
        return { icon: Clock, label: 'Pending', color: 'bg-yellow-100 text-yellow-700' }
      case 'completed':
        return { icon: CheckCircle, label: 'Completed', color: 'bg-blue-100 text-blue-700' }
      case 'cancelled':
        return { icon: XCircle, label: 'Cancelled', color: 'bg-red-100 text-red-700' }
      default:
        return { icon: Clock, label: 'Unknown', color: 'bg-gray-100 text-gray-700' }
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const filteredBookings = filterStatus === 'all' 
    ? bookings 
    : bookings.filter(b => b.status === filterStatus)

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/admin/dashboard" className="text-gray-500 hover:text-gray-700">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Kelola Booking</h2>
              <p className="text-sm text-gray-500">Lihat dan kelola semua pemesanan</p>
            </div>
          </div>

          {/* Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                filterStatus === 'all'
                  ? 'bg-royal-purple text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Semua ({bookings.length})
            </button>
            <button
              onClick={() => setFilterStatus('pending')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                filterStatus === 'pending'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pending ({bookings.filter(b => b.status === 'pending').length})
            </button>
            <button
              onClick={() => setFilterStatus('confirmed')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                filterStatus === 'confirmed'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Confirmed ({bookings.filter(b => b.status === 'confirmed').length})
            </button>
            <button
              onClick={() => setFilterStatus('completed')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                filterStatus === 'completed'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Completed ({bookings.filter(b => b.status === 'completed').length})
            </button>
            <button
              onClick={() => setFilterStatus('cancelled')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                filterStatus === 'cancelled'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Cancelled ({bookings.filter(b => b.status === 'cancelled').length})
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="p-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Kendaraan</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Tanggal</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Harga</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredBookings.map((booking) => {
                  const statusBadge = getStatusBadge(booking.status)
                  return (
                    <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{booking.id}</td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{booking.customerName}</p>
                          <p className="text-xs text-gray-500">{booking.customerPhone}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">{booking.vehicle}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{formatDate(booking.date)}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{formatPrice(booking.totalPrice)}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-lg ${statusBadge.color}`}>
                          <statusBadge.icon className="w-3 h-3" />
                          {statusBadge.label}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleViewDetail(booking)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg hover:bg-blue-100 transition-all"
                        >
                          <Eye className="w-3 h-3" />
                          Detail
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Detail Modal */}
      {showDetailModal && selectedBooking && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Detail Booking</h3>
              <button
                onClick={() => setShowDetailModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Booking ID & Status */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Booking ID</p>
                  <p className="text-lg font-bold text-gray-900">{selectedBooking.id}</p>
                </div>
                <div>
                  {(() => {
                    const badge = getStatusBadge(selectedBooking.status)
                    return (
                      <span className={`inline-flex items-center gap-1 px-3 py-1.5 text-sm font-semibold rounded-lg ${badge.color}`}>
                        <badge.icon className="w-4 h-4" />
                        {badge.label}
                      </span>
                    )
                  })()}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Customer</p>
                    <p className="text-sm font-semibold text-gray-900">{selectedBooking.customerName}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Nomor Telepon</p>
                    <p className="text-sm font-semibold text-gray-900">{selectedBooking.customerPhone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Bus className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Kendaraan</p>
                    <p className="text-sm font-semibold text-gray-900">{selectedBooking.vehicle}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Rute</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {selectedBooking.pickupLocation} → {selectedBooking.destination}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Tanggal & Durasi</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {formatDate(selectedBooking.date)} • {selectedBooking.duration} hari
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Total Harga</p>
                    <p className="text-lg font-bold text-orange-600">{formatPrice(selectedBooking.totalPrice)}</p>
                  </div>
                </div>

                {selectedBooking.notes && (
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500 mb-1">Catatan</p>
                    <p className="text-sm text-gray-900">{selectedBooking.notes}</p>
                  </div>
                )}
              </div>

              {/* Update Status */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold text-gray-700 mb-3">Update Status</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleUpdateStatus(selectedBooking.id, 'pending')}
                    disabled={selectedBooking.status === 'pending'}
                    className="px-4 py-2 bg-yellow-100 text-yellow-700 font-semibold rounded-lg hover:bg-yellow-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedBooking.id, 'confirmed')}
                    disabled={selectedBooking.status === 'confirmed'}
                    className="px-4 py-2 bg-green-100 text-green-700 font-semibold rounded-lg hover:bg-green-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirmed
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedBooking.id, 'completed')}
                    disabled={selectedBooking.status === 'completed'}
                    className="px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Completed
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedBooking.id, 'cancelled')}
                    disabled={selectedBooking.status === 'cancelled'}
                    className="px-4 py-2 bg-red-100 text-red-700 font-semibold rounded-lg hover:bg-red-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancelled
                  </button>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4">
              <button
                onClick={() => setShowDetailModal(false)}
                className="w-full px-4 py-2 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
