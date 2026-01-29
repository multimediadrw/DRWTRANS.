'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Plus, Trash2, X, Upload } from 'lucide-react'

interface GalleryImage {
  id: string
  url: string
  title: string
  category: string
  uploadedAt: string
}

export default function AdminGaleriPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [filterCategory, setFilterCategory] = useState<string>('all')
  
  const [images, setImages] = useState<GalleryImage[]>([
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
      title: 'Big Bus Executive',
      category: 'armada',
      uploadedAt: '2026-01-28'
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800',
      title: 'Interior Premium',
      category: 'interior',
      uploadedAt: '2026-01-27'
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800',
      title: 'Wisata Bandung',
      category: 'destinasi',
      uploadedAt: '2026-01-26'
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800',
      title: 'HiAce Premium',
      category: 'armada',
      uploadedAt: '2026-01-25'
    }
  ])

  const [formData, setFormData] = useState({
    url: '',
    title: '',
    category: 'armada'
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
    setFormData({
      url: '',
      title: '',
      category: 'armada'
    })
    setShowModal(true)
  }

  const handleDelete = (id: string) => {
    setDeleteId(id)
    setShowDeleteConfirm(true)
  }

  const confirmDelete = () => {
    if (deleteId) {
      setImages(images.filter(img => img.id !== deleteId))
      setShowDeleteConfirm(false)
      setDeleteId(null)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newImage: GalleryImage = {
      id: Date.now().toString(),
      url: formData.url,
      title: formData.title,
      category: formData.category,
      uploadedAt: new Date().toISOString().split('T')[0]
    }
    
    setImages([newImage, ...images])
    setShowModal(false)
  }

  const filteredImages = filterCategory === 'all' 
    ? images 
    : images.filter(img => img.category === filterCategory)

  const categories = [
    { value: 'all', label: 'Semua', count: images.length },
    { value: 'armada', label: 'Armada', count: images.filter(i => i.category === 'armada').length },
    { value: 'interior', label: 'Interior', count: images.filter(i => i.category === 'interior').length },
    { value: 'destinasi', label: 'Destinasi', count: images.filter(i => i.category === 'destinasi').length },
    { value: 'fasilitas', label: 'Fasilitas', count: images.filter(i => i.category === 'fasilitas').length }
  ]

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard" className="text-gray-500 hover:text-gray-700">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Kelola Galeri</h2>
                <p className="text-sm text-gray-500">Upload dan kelola foto armada & fasilitas</p>
              </div>
            </div>
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 px-4 py-2 bg-royal-purple text-white font-semibold rounded-xl hover:bg-purple-800 transition-all"
            >
              <Plus className="w-5 h-5" />
              Upload Foto
            </button>
          </div>

          {/* Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setFilterCategory(cat.value)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                  filterCategory === cat.value
                    ? 'bg-royal-purple text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div key={image.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <button
                  onClick={() => handleDelete(image.id)}
                  className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-lg font-semibold">
                    {image.category}
                  </span>
                  <span className="text-xs text-gray-500">{image.uploadedAt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Belum ada foto di kategori ini</p>
          </div>
        )}
      </main>

      {/* Upload Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Upload Foto Baru</h3>
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
                  URL Gambar
                </label>
                <input
                  type="url"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Atau upload file (fitur akan datang)
                </p>
              </div>

              {formData.url && (
                <div className="border border-gray-200 rounded-xl p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Preview:</p>
                  <img
                    src={formData.url}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x400?text=Invalid+URL'
                    }}
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Judul Foto
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Big Bus Executive"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Kategori
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
                  <option value="armada">Armada</option>
                  <option value="interior">Interior</option>
                  <option value="destinasi">Destinasi</option>
                  <option value="fasilitas">Fasilitas</option>
                </select>
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
                  className="flex-1 px-4 py-2 bg-royal-purple text-white font-semibold rounded-xl hover:bg-purple-800 transition-all flex items-center justify-center gap-2"
                >
                  <Upload className="w-5 h-5" />
                  Upload
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
              Apakah Anda yakin ingin menghapus foto ini? Tindakan ini tidak dapat dibatalkan.
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
