import Navigation from '../components/Navigation'
import { Building2, Target, Eye, Award } from 'lucide-react'

export default function ProfilPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="bg-gradient-to-r from-royal-purple-dark to-royal-purple text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Profil Perusahaan</h1>
          <p className="text-xl text-gray-200">Mengenal lebih dekat DRWTRANS</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-royal-purple">Tentang Kami</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              DRWTRANS adalah perusahaan penyedia layanan transportasi bus dan kendaraan pariwisata yang telah berpengalaman lebih dari 10 tahun melayani kebutuhan transportasi korporat dan pribadi di Indonesia.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dengan armada yang lengkap dan terawat, serta didukung oleh driver profesional yang berpengalaman, kami berkomitmen untuk memberikan layanan transportasi yang aman, nyaman, dan tepat waktu untuk setiap perjalanan Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-royal-purple to-royal-purple-light rounded-2xl p-8 text-white">
              <Eye className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Visi</h3>
              <p className="text-lg leading-relaxed">
                Menjadi perusahaan transportasi terpercaya dan terdepan di Indonesia dengan standar layanan internasional.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-gold to-amber-gold-dark rounded-2xl p-8 text-white">
              <Target className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Misi</h3>
              <p className="text-lg leading-relaxed">
                Memberikan solusi transportasi yang aman, nyaman, dan efisien untuk mendukung mobilitas pelanggan kami.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-8 text-royal-purple text-center">Nilai-Nilai Kami</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-royal-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">Profesional</h4>
                <p className="text-gray-600">Layanan berkualitas dengan standar tinggi</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">Terpercaya</h4>
                <p className="text-gray-600">Komitmen pada kepuasan pelanggan</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-royal-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">Inovatif</h4>
                <p className="text-gray-600">Terus berkembang mengikuti kebutuhan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
