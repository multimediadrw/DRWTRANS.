import Navigation from '../components/Navigation'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function HubungiKamiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="bg-gradient-to-r from-royal-purple-dark to-royal-purple text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl text-gray-200">Kami siap membantu kebutuhan transportasi Anda</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-royal-purple">Informasi Kontak</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-royal-purple rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Telepon</h3>
                    <p className="text-gray-600">0811-2050-800</p>
                    <p className="text-gray-600">(021) 1234-5678</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@drwtrans.com</p>
                    <p className="text-gray-600">cs@drwtrans.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-royal-purple rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Alamat</h3>
                    <p className="text-gray-600">Jl. Raya Transportasi No. 123<br />Jakarta Selatan 12345</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Jam Operasional</h3>
                    <p className="text-gray-600">Senin - Jumat: 08:00 - 17:00</p>
                    <p className="text-gray-600">Sabtu: 08:00 - 14:00</p>
                    <p className="text-gray-600 font-semibold">Layanan 24/7 untuk emergency</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-royal-purple">Kirim Pesan</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" placeholder="Masukkan nama Anda" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" placeholder="08xx-xxxx-xxxx" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent" placeholder="Tuliskan pesan Anda..."></textarea>
                </div>
                <button type="submit" className="w-full bg-amber-gold hover:bg-amber-gold-dark text-white font-bold py-4 rounded-lg transition-all">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
