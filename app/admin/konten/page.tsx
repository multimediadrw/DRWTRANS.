'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Plus, Edit, Trash2, X } from 'lucide-react'

interface FAQ {
  id: string
  question: string
  answer: string
}

interface Testimonial {
  id: string
  name: string
  company: string
  rating: number
  text: string
  date: string
}

export default function AdminKontenPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState<'faq' | 'testimonial'>('faq')
  const [showModal, setShowModal] = useState(false)
  const [editingItem, setEditingItem] = useState<any>(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: '1',
      question: 'Bagaimana cara booking armada?',
      answer: 'Anda bisa booking melalui website, WhatsApp, atau telepon ke customer service kami.'
    },
    {
      id: '2',
      question: 'Berapa minimal booking?',
      answer: 'Minimal booking untuk luar kota adalah 2 hari, untuk city tour 1 hari (10 jam).'
    },
    {
      id: '3',
      question: 'Apakah harga sudah termasuk driver dan BBM?',
      answer: 'Ya, harga sudah termasuk driver, BBM, dan tol.'
    }
  ])

  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: '1',
      name: 'Budi Santoso',
      company: 'PT Maju Jaya',
      rating: 5,
      text: 'Pelayanan sangat memuaskan! Bus bersih dan driver profesional.',
      date: '2026-01-25'
    },
    {
      id: '2',
      name: 'Siti Aminah',
      company: 'Yayasan Pendidikan',
      rating: 5,
      text: 'Recommended untuk study tour! Anak-anak senang dan aman.',
      date: '2026-01-20'
    }
  ])

  const [faqForm, setFaqForm] = useState({
    question: '',
    answer: ''
  })

  const [testimonialForm, setTestimonialForm] = useState({
    name: '',
    company: '',
    rating: '5',
    text: '',
    date: ''
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
    if (activeTab === 'faq') {
      setFaqForm({ question: '', answer: '' })
    } else {
      setTestimonialForm({ name: '', company: '', rating: '5', text: '', date: '' })
    }
    setShowModal(true)
  }

  const handleEdit = (item: any) => {
    setEditingItem(item)
    if (activeTab === 'faq') {
      setFaqForm({ question: item.question, answer: item.answer })
    } else {
      setTestimonialForm({
        name: item.name,
        company: item.company,
        rating: item.rating.toString(),
        text: item.text,
        date: item.date
      })
    }
    setShowModal(true)
  }

  const handleDelete = (id: string) => {
    setDeleteId(id)
    setShowDeleteConfirm(true)
  }

  const confirmDelete = () => {
    if (deleteId) {
      if (activeTab === 'faq') {
        setFaqs(faqs.filter(f => f.id !== deleteId))
      } else {
        setTestimonials(testimonials.filter(t => t.id !== deleteId))
      }
      setShowDeleteConfirm(false)
      setDeleteId(null)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (activeTab === 'faq') {
      if (editingItem) {
        setFaqs(faqs.map(f => 
          f.id === editingItem.id 
            ? { ...f, question: faqForm.question, answer: faqForm.answer }
            : f
        ))
      } else {
        const newFaq: FAQ = {
          id: Date.now().toString(),
          question: faqForm.question,
          answer: faqForm.answer
        }
        setFaqs([...faqs, newFaq])
      }
    } else {
      if (editingItem) {
        setTestimonials(testimonials.map(t => 
          t.id === editingItem.id 
            ? {
                ...t,
                name: testimonialForm.name,
                company: testimonialForm.company,
                rating: parseInt(testimonialForm.rating),
                text: testimonialForm.text,
                date: testimonialForm.date
              }
            : t
        ))
      } else {
        const newTestimonial: Testimonial = {
          id: Date.now().toString(),
          name: testimonialForm.name,
          company: testimonialForm.company,
          rating: parseInt(testimonialForm.rating),
          text: testimonialForm.text,
          date: testimonialForm.date || new Date().toISOString().split('T')[0]
        }
        setTestimonials([...testimonials, newTestimonial])
      }
    }
    
    setShowModal(false)
  }

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
                <h2 className="text-xl font-bold text-gray-900">Kelola Konten</h2>
                <p className="text-sm text-gray-500">Kelola FAQ dan testimoni customer</p>
              </div>
            </div>
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 px-4 py-2 bg-royal-purple text-white font-semibold rounded-xl hover:bg-purple-800 transition-all"
            >
              <Plus className="w-5 h-5" />
              Tambah {activeTab === 'faq' ? 'FAQ' : 'Testimoni'}
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeTab === 'faq'
                  ? 'bg-royal-purple text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              FAQ ({faqs.length})
            </button>
            <button
              onClick={() => setActiveTab('testimonial')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeTab === 'testimonial'
                  ? 'bg-royal-purple text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Testimoni ({testimonials.length})
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="p-6 max-w-7xl mx-auto">
        {activeTab === 'faq' ? (
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(faq)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(faq.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(testimonial)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(testimonial.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}>
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-3">{testimonial.text}</p>
                <p className="text-xs text-gray-400">{testimonial.date}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                {editingItem ? 'Edit' : 'Tambah'} {activeTab === 'faq' ? 'FAQ' : 'Testimoni'}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {activeTab === 'faq' ? (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Pertanyaan
                    </label>
                    <input
                      type="text"
                      value={faqForm.question}
                      onChange={(e) => setFaqForm({ ...faqForm, question: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Bagaimana cara booking?"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Jawaban
                    </label>
                    <textarea
                      value={faqForm.answer}
                      onChange={(e) => setFaqForm({ ...faqForm, answer: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Anda bisa booking melalui..."
                      rows={4}
                      required
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nama Customer
                    </label>
                    <input
                      type="text"
                      value={testimonialForm.name}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Budi Santoso"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Perusahaan
                    </label>
                    <input
                      type="text"
                      value={testimonialForm.company}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, company: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="PT Maju Jaya"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Rating
                    </label>
                    <select
                      value={testimonialForm.rating}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, rating: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="5">⭐⭐⭐⭐⭐ (5 bintang)</option>
                      <option value="4">⭐⭐⭐⭐ (4 bintang)</option>
                      <option value="3">⭐⭐⭐ (3 bintang)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Testimoni
                    </label>
                    <textarea
                      value={testimonialForm.text}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, text: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Pelayanan sangat memuaskan..."
                      rows={4}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tanggal
                    </label>
                    <input
                      type="date"
                      value={testimonialForm.date}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, date: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </>
              )}

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
              Apakah Anda yakin ingin menghapus {activeTab === 'faq' ? 'FAQ' : 'testimoni'} ini? 
              Tindakan ini tidak dapat dibatalkan.
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
