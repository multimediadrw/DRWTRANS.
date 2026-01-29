'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowLeft,
  Plus,
  Edit,
  Trash2,
  Bus,
  Users,
  DollarSign,
  Upload,
  Save,
  X,
  Image as ImageIcon
} from 'lucide-react'

interface Vehicle {
  id: number
  name: string
  type: 'bus' | 'hiace'
  seats: number
  price: number
  features: string[]
  image: string
  available: boolean
}

export default function AdminArmadaPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null)
  
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {
      id: 1,
      name: 'Big Bus Executive 50 Seat',
      type: 'bus',
      seats: 50,
      price: 3500000,
      features: ['AC', 'Audio', 'TV', 'Toilet', 'Reclining Seat'],
      image: '/armada/big-bus-50-seats.jpg',
      available: true
    },
    {
      id: 2,
      name: 'Medium Bus Luxury 35 Seat',
      type: 'bus',
      seats: 35,
      price: 2500000,
      features: ['AC', 'Audio', 'TV', 'Reclining Seat'],
      image: '/armada/medium-bus-35-seats.jpg',
      available: true
    },
    {
      id: 3,
      name: 'Toyota HiAce Premium 14 Seat',
      type: 'hiace',
      seats: 14,
      price: 1500000,
      features: ['AC', 'Audio', 'Captain Seat'],
      image: '/armada/hiace-12-14-seats.jpg',
      available: true
    }
  ])

  const [formData, setFormData] = useState({
    name: '',
    type: 'bus' as 'bus' | 'hiace',
    seats: 0,
    price: 0,
    features: [] as string[],
    image: '',
    available: true
  })

  const [featureInput, setFeatureInput] = useState('')

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (auth !== 'true') {
      router.push('/admin/login')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleAdd = () => {
    setEditingVehicle(null)
    setFormData({
      name: '',
      type: 'bus',
      seats: 0,
      price: 0,
      features: [],
      image: '',
      available: true
    })
    setShowModal(true)
  }

  const handleEdit = (vehicle: Vehicle) => {
    setEditingVehicle(vehicle)
    setFormData({
      name: vehicle.name,
      type: vehicle.type,
      seats: vehicle.seats,
      price: vehicle.price,
      features: vehicle.features,
      image: vehicle.image,
      available: vehicle.available
    })
    setShowModal(true)
  }

  const handleDelete = (id: number) => {
    if (confirm('Yakin ingin menghapus armada ini?')) {
      setVehicles(vehicles.filter(v => v.id !== id))
    }
  }

  const handleSave = () => {
    if (editingVehicle) {
      setVehicles(vehicles.map(v => 
        v.id === editingVehicle.id 
          ? { ...formData, id: editingVehicle.id }
          : v
      ))
    } else {
      const newVehicle = {
        ...formData,
        id: Math.max(...vehicles.map(v => v.id)) + 1
      }
      setVehicles([...vehicles, newVehicle])
    }
    setShowModal(false)
  }

  const addFeature = () => {
    if (featureInput.trim()) {
      setFormData({
        ...formData,
        features: [...formData.features, featureInput.trim()]
      })
      setFeatureInput('')
    }
  }

  const removeFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index)
    })
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
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard" className="text-gray-500 hover:text-gray-700">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Kelola Armada</h2>
              <p className="text-sm text-gray-500">Tambah, edit, atau hapus kendaraan</p>
            </div>
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 bg-royal-purple hover:bg-royal-purple-dark text-white font-semibold rounded-xl transition-all"
          >
            <Plus className="w-5 h-5" />
            Tambah Armada
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Vehicle Image */}
              <div className="relative aspect-[4/3] bg-gray-200">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-lg ${
                    vehicle.available ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  }`}>
                    {vehicle.available ? 'Tersedia' : 'Tidak Tersedia'}
                  </span>
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="p-4">
                <div className="mb-3">
                  <h3 className="font-bold text-base text-gray-900 mb-1">{vehicle.name}</h3>
                  <span className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-lg ${
                    vehicle.type === 'bus' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {vehicle.type === 'bus' ? 'Bus' : 'HiAce'}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Kapasitas:</span>
                    <span className="text-sm font-bold text-gray-900">{vehicle.seats} Seat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Harga:</span>
                    <span className="text-sm font-bold text-orange-600">{formatPrice(vehicle.price)}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Fasilitas:</p>
                  <div className="flex flex-wrap gap-1">
                    {vehicle.features.map((feature, index) => (
                      <span key={index} className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(vehicle)}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-all"
                  >
                    <Edit className="w-4 h-4" />
                    <span className="text-sm font-semibold">Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(vehicle.id)}
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
                {editingVehicle ? 'Edit Armada' : 'Tambah Armada Baru'}
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Kendaraan</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent outline-none"
                  placeholder="Contoh: Big Bus Executive 50 Seat"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tipe Kendaraan</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as 'bus' | 'hiace' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent outline-none"
                  >
                    <option value="bus">Bus</option>
                    <option value="hiace">HiAce</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Kapasitas (Seat)</label>
                  <input
                    type="number"
                    value={formData.seats}
                    onChange={(e) => setFormData({ ...formData, seats: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent outline-none"
                    placeholder="50"
                    min="1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Harga Sewa (Rp)</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent outline-none"
                  placeholder="3500000"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">URL Gambar</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent outline-none"
                    placeholder="/armada/bus.jpg"
                  />
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all">
                    <Upload className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Upload gambar ke /public/armada/ atau gunakan URL</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Fasilitas</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={featureInput}
                    onChange={(e) => setFeatureInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent outline-none"
                    placeholder="Contoh: AC, Audio, TV"
                  />
                  <button
                    type="button"
                    onClick={addFeature}
                    className="px-4 py-2 bg-royal-purple text-white rounded-xl hover:bg-royal-purple-dark transition-all"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.features.map((feature, index) => (
                    <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">
                      {feature}
                      <button
                        type="button"
                        onClick={() => removeFeature(index)}
                        className="text-gray-400 hover:text-red-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="available"
                  checked={formData.available}
                  onChange={(e) => setFormData({ ...formData, available: e.target.checked })}
                  className="w-5 h-5 text-royal-purple border-gray-300 rounded focus:ring-royal-purple"
                />
                <label htmlFor="available" className="text-sm font-semibold text-gray-700">
                  Kendaraan tersedia untuk disewa
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
