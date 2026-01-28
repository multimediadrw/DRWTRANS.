import Navigation from '../components/Navigation'
import { Calendar, MapPin, Users, Clock } from 'lucide-react'

export default function PemesananPage() {
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
          <form className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" placeholder="Masukkan nama lengkap" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon *</label>
                <input type="tel" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" placeholder="08xx-xxxx-xxxx" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" placeholder="email@example.com" />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Kendaraan *</label>
              <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent">
                <option value="">Pilih jenis kendaraan</option>
                <option value="hiace">Toyota HiAce (14 seat)</option>
                <option value="medium">Medium Bus (31 seat)</option>
                <option value="big">Big Bus (50 seat)</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Keberangkatan *</label>
                <input type="date" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Durasi Sewa *</label>
                <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent">
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
              <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" placeholder="Masukkan alamat penjemputan" />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Tujuan</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" placeholder="Masukkan tujuan perjalanan" />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah Penumpang *</label>
              <input type="number" required min="1" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" placeholder="Jumlah penumpang" />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Catatan Tambahan</label>
              <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" placeholder="Tuliskan kebutuhan khusus atau catatan tambahan..."></textarea>
            </div>

            <button type="submit" className="w-full bg-amber-gold hover:bg-amber-gold-dark text-white font-bold py-4 rounded-lg transition-all text-lg">
              Kirim Pemesanan
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              Tim kami akan menghubungi Anda dalam 1x24 jam untuk konfirmasi pemesanan
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}
