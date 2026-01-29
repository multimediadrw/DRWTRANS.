'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Send, Bell, CheckCircle } from 'lucide-react'

export default function AdminNotifikasiPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    type: 'info',
    targetUsers: 'all'
  })

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (auth !== 'true') {
      router.push('/admin/login')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    
    // Simulate sending notification
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSending(false)
    setSent(true)
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setSent(false)
      setFormData({
        title: '',
        message: '',
        type: 'info',
        targetUsers: 'all'
      })
    }, 2000)
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard" className="text-gray-500 hover:text-gray-700">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Kirim Notifikasi</h2>
              <p className="text-sm text-gray-500">Kirim notifikasi push ke semua user atau grup tertentu</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="p-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Judul Notifikasi
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Promo Spesial Hari Ini!"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Pesan
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Dapatkan diskon 20% untuk semua armada! Gunakan kode: DRWTRANS20"
                rows={5}
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Maksimal 200 karakter
              </p>
            </div>

            {/* Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tipe Notifikasi
              </label>
              <div className="grid grid-cols-4 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'promo' })}
                  className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                    formData.type === 'promo'
                      ? 'bg-purple-100 text-purple-700 border-2 border-purple-500'
                      : 'bg-gray-50 text-gray-700 border-2 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  🎁 Promo
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'booking' })}
                  className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                    formData.type === 'booking'
                      ? 'bg-green-100 text-green-700 border-2 border-green-500'
                      : 'bg-gray-50 text-gray-700 border-2 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  🚌 Booking
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'info' })}
                  className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                    formData.type === 'info'
                      ? 'bg-blue-100 text-blue-700 border-2 border-blue-500'
                      : 'bg-gray-50 text-gray-700 border-2 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  ℹ️ Info
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'alert' })}
                  className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                    formData.type === 'alert'
                      ? 'bg-orange-100 text-orange-700 border-2 border-orange-500'
                      : 'bg-gray-50 text-gray-700 border-2 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  ⚠️ Alert
                </button>
              </div>
            </div>

            {/* Target Users */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Target User
              </label>
              <select
                value={formData.targetUsers}
                onChange={(e) => setFormData({ ...formData, targetUsers: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">Semua User (1,543 user)</option>
                <option value="active">User Aktif (892 user)</option>
                <option value="inactive">User Tidak Aktif (651 user)</option>
                <option value="premium">Member Premium (234 user)</option>
              </select>
            </div>

            {/* Preview */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <p className="text-xs font-semibold text-gray-500 mb-3">Preview Notifikasi:</p>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${
                    formData.type === 'promo' ? 'bg-purple-100' :
                    formData.type === 'booking' ? 'bg-green-100' :
                    formData.type === 'info' ? 'bg-blue-100' :
                    'bg-orange-100'
                  }`}>
                    <Bell className={`w-5 h-5 ${
                      formData.type === 'promo' ? 'text-purple-600' :
                      formData.type === 'booking' ? 'text-green-600' :
                      formData.type === 'info' ? 'text-blue-600' :
                      'text-orange-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-1">
                      {formData.title || 'Judul Notifikasi'}
                    </p>
                    <p className="text-sm text-gray-600">
                      {formData.message || 'Pesan notifikasi akan muncul di sini...'}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">Baru saja</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => router.push('/admin/dashboard')}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
              >
                Batal
              </button>
              <button
                type="submit"
                disabled={sending || sent}
                className={`flex-1 px-6 py-3 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 ${
                  sent
                    ? 'bg-green-600 text-white'
                    : 'bg-royal-purple text-white hover:bg-purple-800'
                }`}
              >
                {sending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Mengirim...
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Terkirim!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Kirim Notifikasi
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* History */}
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Riwayat Notifikasi</h3>
          <div className="space-y-3">
            {[
              { title: 'Promo Akhir Tahun', date: '2026-01-28 14:30', users: 1543, type: 'promo' },
              { title: 'Update Armada Baru', date: '2026-01-27 10:15', users: 1543, type: 'info' },
              { title: 'Konfirmasi Booking', date: '2026-01-26 16:45', users: 234, type: 'booking' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.date} • {item.users} user</p>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-lg ${
                  item.type === 'promo' ? 'bg-purple-100 text-purple-700' :
                  item.type === 'booking' ? 'bg-green-100 text-green-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {item.type === 'promo' ? '🎁 Promo' :
                   item.type === 'booking' ? '🚌 Booking' :
                   'ℹ️ Info'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
