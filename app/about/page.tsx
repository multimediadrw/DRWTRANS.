
import Link from 'next/link'
import { Bus, Star, Award, Users } from 'lucide-react'
import { testimonials } from '@/lib/data'

export default function AboutPage() {
  const testimonialsData = testimonials.filter(t => t.isFeatured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
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
              <Link href="/booking" className="text-gray-700 hover:text-purple-600 transition-colors">Booking</Link>
              <Link href="/about" className="text-purple-600 font-medium">Tentang Kami</Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">Kontak</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Tentang DRWTRANS</h1>
          <p className="text-xl text-purple-100">Partner terpercaya untuk perjalanan Anda</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Profil Perusahaan</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DRWTRANS adalah penyedia layanan transportasi bus yang berpengalaman melayani berbagai kebutuhan perjalanan, 
              mulai dari wisata keluarga, perjalanan kantor, hingga acara-acara khusus. Kami berkomitmen memberikan 
              pelayanan terbaik dengan armada yang terawat dan driver profesional.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dengan pengalaman bertahun-tahun di industri transportasi, kami memahami betul kebutuhan pelanggan akan 
              kenyamanan, keamanan, dan ketepatan waktu. Semua armada kami dilengkapi dengan dokumen lengkap dan fasilitas 
              modern untuk memastikan perjalanan Anda berjalan lancar dan menyenangkan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Berpengalaman</h3>
              <p className="text-gray-600">Melayani ribuan perjalanan dengan tingkat kepuasan tinggi</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Tim Profesional</h3>
              <p className="text-gray-600">Driver berpengalaman dan customer service responsif</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Terpercaya</h3>
              <p className="text-gray-600">Armada legal dengan dokumen lengkap dan asuransi</p>
            </div>
          </div>

          {testimonialsData.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Testimoni Pelanggan</h2>
              <div className="space-y-6">
                {testimonialsData.map((testimonial) => (
                  <div key={testimonial.id} className="border-l-4 border-purple-600 pl-6 py-2">
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-3">&quot;{testimonial.comment}&quot;</p>
                    <div className="font-bold text-purple-600">{testimonial.customerName}</div>
                    {testimonial.tripDate && (
                      <div className="text-sm text-gray-500">
                        {new Date(testimonial.tripDate).toLocaleDateString('id-ID', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
