'use client'

import { useState, FormEvent } from 'react'
import Navigation from '../components/Navigation'
import { Calendar, MapPin, Users, Clock } from 'lucide-react'

export default function PemesananPage() {
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    vehicleType: '',
    tripDate: '',
    duration: '',
    pickupLocation: '',
    destination: '',
    passengerCount: '',
    specialRequests: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    const vehicleNames: { [key: string]: string } = {
      'hiace': 'Toyota HiAce (14 seat)',
      'medium': 'Medium Bus (31 seat)',
      'big': 'Big Bus (50 seat)'
    }

    const durationNames: { [key: string]: string } = {
      '12jam': '12 Jam',
      'fullday': 'Full Day (24 jam)',
      '2hari': '2 Hari',
      '3hari': '3 Hari',
      'mingguan': 'Mingguan',
      'bulanan': 'Bulanan'
    }
    
    const message = `*PEMESANAN KENDARAAN DRWTRANS*

*Data Pemesan:*
Nama: ${formData.customerName}
No. HP: ${formData.customerPhone}
Email: ${formData.customerEmail || '-'}

*Detail Pemesanan:*
Jenis Kendaraan: ${vehicleNames[formData.vehicleType] || formData.vehicleType}
Tanggal Keberangkatan: ${formData.tripDate}
Durasi Sewa: ${durationNames[formData.duration] || formData.duration}
Lokasi Penjemputan: ${formData.pickupLocation}
Tujuan: ${formData.destination || '-'}
Jumlah Penumpang: ${formData.passengerCount} orang

*Catatan Tambahan:*
${formData.specialRequests || '-'}

Mohon konfirmasi ketersediaan dan harga. Terima kasih!`

    const whatsappNumber = '081120508000'
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="bg-gradient-to-r from-royal-purple-dark to-royal-purple text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Form Pemesanan</h1>
          <p className="text-xl text-gray-200">Isi form di bawah untuk memesan kendaraan</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                <input 
                  type="text" 
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" 
                  placeholder="Masukkan nama lengkap" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon *</label>
                <input 
                  type="tel" 
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" 
                  placeholder="08xx-xxxx-xxxx" 
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                name="customerEmail"
                value={formData.customerEmail}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" 
                placeholder="email@example.com" 
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Kendaraan *</label>
              <select 
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent"
              >
                <option value="">Pilih jenis kendaraan</option>
                <option value="hiace">Toyota HiAce (14 seat)</option>
                <option value="medium">Medium Bus (31 seat)</option>
                <option value="big">Big Bus (50 seat)</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Keberangkatan *</label>
                <input 
                  type="date" 
                  name="tripDate"
                  value={formData.tripDate}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Durasi Sewa *</label>
                <select 
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent"
                >
                  <option value="">Pilih durasi</option>
                  <option value="12jam">12 Jam</option>
                  <option value="fullday">Full Day (24 jam)</option>
                  <option value="2hari">2 Hari</option>
                  <option value="3hari">3 Hari</option>
                  <option value="mingguan">Mingguan</option>
                  <option value="bulanan">Bulanan</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Lokasi Penjemputan *</label>
              <input 
                type="text" 
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" 
                placeholder="Masukkan alamat penjemputan" 
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Tujuan</label>
              <input 
                type="text" 
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" 
                placeholder="Masukkan tujuan perjalanan" 
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah Penumpang *</label>
              <input 
                type="number" 
                name="passengerCount"
                value={formData.passengerCount}
                onChange={handleChange}
                required 
                min="1" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" 
                placeholder="Jumlah penumpang" 
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Catatan Tambahan</label>
              <textarea 
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4} 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" 
                placeholder="Tuliskan kebutuhan khusus atau catatan tambahan..."
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-amber-gold hover:bg-amber-gold-dark text-white font-bold py-4 rounded-lg transition-all text-lg">
              Kirim Pemesanan
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              Anda akan diarahkan ke WhatsApp untuk konfirmasi booking
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}
