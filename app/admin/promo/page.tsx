'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft,
  Plus,
  Edit,
  Trash2,
  Gift,
  Calendar,
  Tag,
  Percent,
  Save,
  X
} from 'lucide-react'

interface Promo {
  id: number
  title: string
  subtitle: string
  code: string
  discount: number
  startDate: string
  endDate: string
  active: boolean
  color: string
}

export default function AdminPromoPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [editingPromo, setEditingPromo] = useState<Promo | null>(null)
  
  const [promos, setPromos] = useState<Promo[]>([
    {
      id: 1,
      title: 'Diskon 20% Sewa Bus',
      subtitle: 'Hemat hingga Rp 500.000',
      code: 'BUS20',
      discount: 20,
      startDate: '2026-01-01',
      endDate: '2026-02-28',
      active: true,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Paket Wisata Hemat',
      subtitle: 'Mulai Rp 2 Juta All-In',
      code: 'WISATA50',
      discount: 15,
      startDate: '2026-01-15',
      endDate: '2026-03-31',
      active: true,
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Promo HiAce Spesial',
      subtitle: 'Gratis Driver & BBM',
      code: 'HIACE10',
      discount: 10,
      startDate: '2026-01-20',
      endDate: '2026-02-20',
      active: false,
      color: 'from-orange-500 to-red-600'
    }
  ])

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    code: '',
    discount: 0,
    startDate: '',
    endDate: '',
    active: true,
    color: 'from-blue-500 to-purple-600'
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
    setEditingPromo(null)
    setFormData({
      title: '',
      subtitle: '',
      code: '',
      discount: 0,
      startDate: '',
      endDate: '',
      active: true,
      color: 'from-blue-500 to-purple-600'
    })
    setShowModal(true)
  }

  const handleEdit = (promo: Promo) => {
    setEditingPromo(promo)
    setFormData({
      title: promo.title,
      subtitle: promo.subtitle,
      code: promo.code,
      discount: promo.discount,
      startDate: promo.startDate,
      endDate: promo.endDate,
      active: promo.active,
      color: promo.color
    })
    setShowModal(true)
  }

  const handleDelete = (id: number) => {
    if (confirm('Yakin ingin menghapus promo ini?')) {
      setPromos(promos.filter(p => p.id !== id))
    }
  }

  const handleSave = () => {
    if (editingPromo) {
      // Update existing promo
      setPromos(promos.map(p => 
        p.id === editingPromo.id 
          ? { ...formData, id: editingPromo.id }
          : p
      ))
    } else {
      // Add new promo
      const newPromo = {
        ...formData,
        id: Math.max(...promos.map(p => p.id)) + 1
      }
      setPromos([...promos, newPromo])
    }
    setShowModal(false)
  }

  const colorOptions = [
    { value: 'from-blue-500 to-purple-600', label: 'Blue Purple' },
    { value: 'from-green-500 to-teal-600', label: 'Green Teal' },
    { value: 'from-orange-500 to-red-600', label: 'Orange Red' },
    { value: 'from-pink-500 to-purple-600', label: 'Pink Purple' },
    { value: 'from-yellow-500 to-orange-600', label: 'Yellow Orange' }
  ]

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard" className="text-gray-500 hover:text-gray-700">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Kelola Promo</h2>
              <p className="text-sm text-gray-500">Tambah, edit, atau hapus promo</p>
            </div>
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 bg-royal-purple hover:bg-royal-purple-dark text-white font-semibold rounded-xl transition-all"
          >
            <Plus className="w-5 h-5" />
            Tambah Promo
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promos.map((promo) => (
            <div key={promo.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Promo Preview */}
              <div className={`relative aspect-[16/9] bg-gradient-to-r ${promo.color}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="relative h-full p-5 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-base mb-1 drop-shadow-lg">
                    {promo.title}
                  </h3>
                  <p className="text-white/95 text-xs drop-shadow-md">
                    {promo.subtitle}
                  </p>
                </div>
              </div>

              {/* Promo Details */}
              <div className="p-4">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Kode:</span>
                    <span className="text-sm font-bold text-royal-purple">{promo.code}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Percent className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Diskon:</span>
                    <span className="text-sm font-bold text-gray-900">{promo.discount}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Periode:</span>
                    <span className="text-sm text-gray-900">
                      {new Date(promo.startDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })} - {new Date(promo.endDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Status:</span>
                    <span className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-lg ${
                      promo.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {promo.active ? 'Aktif' : 'Nonaktif'}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(promo)}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-all"
                  >
                    <Edit className="w-4 h-4" />
                    <span className="text-sm font-semibold">Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(promo.id)}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="text-sm font-semibold">Hapus</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                {editingPromo ? 'Edit Promo' : 'Tambah Promo Baru'}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Judul Promo</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent outline-none"
                  placeholder="Contoh: Diskon 20% Sewa Bus"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subtitle</label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent outline-none"
                  placeholder="Contoh: Hemat hingga Rp 500.000"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Kode Promo</label>
                  <input
                    type="text"
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent outline-none uppercase"
                    placeholder="BUS20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Diskon (%)</label>
                  <input
                    type="number"
                    value={formData.discount}
                    onChange={(e) => setFormData({ ...formData, discount: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent outline-none"
                    placeholder="20"
                    min="0"
                    max="100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tanggal Mulai</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tanggal Selesai</label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Warna Gradient</label>
                <select
                  value={formData.color}
                  onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent outline-none"
                >
                  {colorOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="active"
                  checked={formData.active}
                  onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                  className="w-5 h-5 text-royal-purple border-gray-300 rounded focus:ring-royal-purple"
                />
                <label htmlFor="active" className="text-sm font-semibold text-gray-700">
                  Aktifkan promo ini
                </label>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-royal-purple hover:bg-royal-purple-dark text-white font-semibold rounded-xl transition-all"
              >
                <Save className="w-5 h-5" />
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
