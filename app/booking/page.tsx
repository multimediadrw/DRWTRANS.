
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Bus, Calendar, Clock, MapPin, Users, MessageCircle } from 'lucide-react'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    pickupLocation: '',
    destination: '',
    tripDate: '',
    tripTime: '',
    passengerCount: '',
    busType: '',
    specialRequests: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = `*BOOKING BUS DRWTRANS*

*Data Pemesan:*
Nama: ${formData.customerName}
No. HP: ${formData.customerPhone}
Email: ${formData.customerEmail || '-'}

*Detail Perjalanan:*
Lokasi Penjemputan: ${formData.pickupLocation}
Tujuan: ${formData.destination}
Tanggal: ${formData.tripDate}
Jam: ${formData.tripTime}
Jumlah Penumpang: ${formData.passengerCount} orang
Tipe Bus: ${formData.busType}

*Permintaan Khusus:*
${formData.specialRequests || '-'}

Mohon konfirmasi ketersediaan dan harga. Terima kasih!`

    const whatsappNumber = '08112050800'
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/^0/, '62')}?text=${encodeURIComponent(message)}`
    
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Bus className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-purple-600">DRWTRANS</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/fleet" className="text-gray-700 hover:text-purple-600 transition-colors">Armada</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Harga</Link>
              <Link href="/booking" className="text-purple-600 font-medium">Booking</Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">Tentang Kami</Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">Kontak</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-6 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Booking Bus</h1>
          <p className="text-xl text-purple-100">Isi formulir di bawah untuk memesan bus Anda</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Pemesan</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      No. WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="customerPhone"
                      value={formData.customerPhone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="08xx xxxx xxxx"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email (Opsional)
                    </label>
                    <input
                      type="email"
                      name="customerEmail"
                      value={formData.customerEmail}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Trip Details */}
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detail Perjalanan</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      Lokasi Penjemputan *
                    </label>
                    <input
                      type="text"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Alamat penjemputan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      Tujuan *
                    </label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Tujuan perjalanan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Tanggal Keberangkatan *
                    </label>
                    <input
                      type="date"
                      name="tripDate"
                      value={formData.tripDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="inline h-4 w-4 mr-1" />
                      Jam Keberangkatan *
                    </label>
                    <input
                      type="time"
                      name="tripTime"
                      value={formData.tripTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="inline h-4 w-4 mr-1" />
                      Jumlah Penumpang *
                    </label>
                    <input
                      type="number"
                      name="passengerCount"
                      value={formData.passengerCount}
                      onChange={handleChange}
                      required
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Jumlah penumpang"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Bus className="inline h-4 w-4 mr-1" />
                      Tipe Bus *
                    </label>
                    <select
                      name="busType"
                      value={formData.busType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      <option value="">Pilih tipe bus</option>
                      <option value="Medium Bus Executive">Medium Bus Executive</option>
                      <option value="Medium Bus Economy">Medium Bus Economy</option>
                      <option value="HiAce">HiAce</option>
                      <option value="Belum Tahu">Belum Tahu (Minta Saran)</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Permintaan Khusus (Opsional)
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Contoh: Perlu tambahan bantal, makanan khusus, dll."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="border-t border-gray-200 pt-6">
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-bold text-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-6 w-6" />
                  Kirim via WhatsApp
                </button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Anda akan diarahkan ke WhatsApp untuk konfirmasi booking
                </p>
              </div>
            </form>
          </div>

          {/* Info Box */}
          <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3 text-purple-900">Informasi Penting:</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li>• Booking minimal 3 hari sebelum keberangkatan</li>
              <li>• Konfirmasi booking akan dikirim via WhatsApp maksimal 1x24 jam</li>
              <li>• Pembayaran DP 30% setelah konfirmasi booking</li>
              <li>• Pelunasan dilakukan H-1 sebelum keberangkatan</li>
              <li>• Pembatalan gratis jika dilakukan minimal 7 hari sebelum keberangkatan</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
