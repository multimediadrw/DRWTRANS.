'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Plus, Edit, Trash2, X } from 'lucide-react'

interface PriceItem {
  id: string
  vehicleType: string
  route: string
  price: number
  minDays: number
  notes: string
}

export default function AdminHargaPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [editingItem, setEditingItem] = useState<PriceItem | null>(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  
  const [prices, setPrices] = useState<PriceItem[]>([
    {
      id: '1',
      vehicleType: 'Big Bus 50 Seat',
      route: 'Luar Kota',
      price: 3500000,
      minDays: 2,
      notes: 'Include driver, BBM, tol'
    },
    {
      id: '2',
      vehicleType: 'Medium Bus 35 Seat',
      route: 'Luar Kota',
      price: 2800000,
      minDays: 2,
      notes: 'Include driver, BBM, tol'
    },
    {
      id: '3',
      vehicleType: 'HiAce 14 Seat',
      route: 'Bandung City Tour',
      price: 1500000,
      minDays: 1,
      notes: '10 jam'
    }
  ])

  const [formData, setFormData] = useState({
    vehicleType: '',
    route: '',
    price: '',
    minDays: '',
    notes: ''
  })

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (auth !== 'true') {
      router.push('/admin/login')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleAdd = () => {
    setEditingItem(null)
    setFormData({
      vehicleType: '',
      route: '',
      price: '',
      minDays: '',
      notes: ''
    })
    setShowModal(true)
  }

  const handleEdit = (item: PriceItem) => {
    setEditingItem(item)
    setFormData({
      vehicleType: item.vehicleType,
      route: item.route,
      price: item.price.toString(),
      minDays: item.minDays.toString(),
      notes: item.notes
    })
    setShowModal(true)
  }

  const handleDelete = (id: string) => {
    setDeleteId(id)
    setShowDeleteConfirm(true)
  }

  const confirmDelete = () => {
    if (deleteId) {
      setPrices(prices.filter(p => p.id !== deleteId))
      setShowDeleteConfirm(false)
      setDeleteId(null)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingItem) {
      // Update existing
      setPrices(prices.map(p => 
        p.id === editingItem.id 
          ? {
              ...p,
              vehicleType: formData.vehicleType,
              route: formData.route,
              price: parseInt(formData.price),
              minDays: parseInt(formData.minDays),
              notes: formData.notes
            }
          : p
      ))
    } else {
      // Add new
      const newItem: PriceItem = {
        id: Date.now().toString(),
        vehicleType: formData.vehicleType,
        route: formData.route,
        price: parseInt(formData.price),
        minDays: parseInt(formData.minDays),
        notes: formData.notes
      }
      setPrices([...prices, newItem])
    }
    
    setShowModal(false)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price)
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard" className="text-gray-500 hover:text-gray-700">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Kelola Harga</h2>
                <p className="text-sm text-gray-500">Atur harga sewa per rute dan kendaraan</p>
              </div>
            </div>
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 px-4 py-2 bg-royal-purple text-white font-semibold rounded-xl hover:bg-purple-800 transition-all"
            >
              <Plus className="w-5 h-5" />
              Tambah Harga
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
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Kendaraan</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Rute</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Harga</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Min. Hari</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Catatan</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {prices.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{item.vehicleType}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{item.route}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-orange-600">{formatPrice(item.price)}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{item.minDays} hari</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{item.notes}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                {editingItem ? 'Edit Harga' : 'Tambah Harga Baru'}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Jenis Kendaraan
                </label>
                <input
                  type="text"
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Big Bus 50 Seat"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Rute
                </label>
                <select
                  value={formData.route}
                  onChange={(e) => setFormData({ ...formData, route: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
                  <option value="">Pilih Rute</option>
                  <option value="Luar Kota">Luar Kota</option>
                  <option value="Bandung City Tour">Bandung City Tour</option>
                  <option value="Transfer In/Out">Transfer In/Out</option>
                  <option value="Subang/Garut">Subang/Garut</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Harga (Rp)
                </label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="3500000"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Minimal Hari
                </label>
                <input
                  type="number"
                  value={formData.minDays}
                  onChange={(e) => setFormData({ ...formData, minDays: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Catatan
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Include driver, BBM, tol"
                  rows={3}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-royal-purple text-white font-semibold rounded-xl hover:bg-purple-800 transition-all"
                >
                  {editingItem ? 'Update' : 'Simpan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Konfirmasi Hapus</h3>
            <p className="text-gray-600 mb-6">
              Apakah Anda yakin ingin menghapus harga ini? Tindakan ini tidak dapat dibatalkan.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
              >
                Batal
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
