import Navigation from '../components/Navigation'
import { Briefcase, MapPin, Clock } from 'lucide-react'

export default function KarirPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="bg-gradient-to-r from-royal-purple-dark to-royal-purple text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Karir di DRWTRANS</h1>
          <p className="text-xl text-gray-200">Bergabunglah dengan tim profesional kami</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-royal-purple">Lowongan Tersedia</h2>
            <p className="text-lg text-gray-600">Temukan posisi yang sesuai dengan keahlian Anda</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:border-royal-purple transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-royal-purple mb-2">Driver Bus Profesional</h3>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Jakarta, Bandung, Surabaya</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Full Time</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>2+ tahun pengalaman</span>
                    </div>
                  </div>
                </div>
                <span className="bg-amber-gold text-white px-4 py-2 rounded-full text-sm font-bold">URGENT</span>
              </div>
              <p className="text-gray-700 mb-4">
                Kami mencari driver profesional dengan SIM B2 Umum, pengalaman mengemudi bus minimal 2 tahun, dan memiliki attitude yang baik dalam melayani pelanggan.
              </p>
              <a href="tel:08112050800" className="inline-block bg-royal-purple hover:bg-royal-purple-dark text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Lamar Sekarang
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:border-royal-purple transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-royal-purple mb-2">Customer Service</h3>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Jakarta</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Full Time</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>Fresh Graduate Welcome</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Bertanggung jawab menangani inquiry pelanggan, pemesanan, dan koordinasi operasional. Diutamakan yang memiliki pengalaman di bidang transportasi atau hospitality.
              </p>
              <a href="tel:08112050800" className="inline-block bg-royal-purple hover:bg-royal-purple-dark text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Lamar Sekarang
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:border-royal-purple transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-royal-purple mb-2">Mekanik Kendaraan</h3>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Jakarta, Bandung</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Full Time</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>3+ tahun pengalaman</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Menangani perawatan dan perbaikan armada bus. Diutamakan yang berpengalaman dengan kendaraan komersial dan memiliki sertifikasi mekanik.
              </p>
              <a href="tel:08112050800" className="inline-block bg-royal-purple hover:bg-royal-purple-dark text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Lamar Sekarang
              </a>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-royal-purple to-royal-purple-light rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Tidak Menemukan Posisi yang Sesuai?</h3>
            <p className="text-lg mb-6">Kirimkan CV Anda ke kami. Kami akan menghubungi Anda jika ada posisi yang sesuai.</p>
            <a href="mailto:hrd@drwtrans.com" className="inline-block bg-white text-royal-purple px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all">
              Kirim CV via Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
