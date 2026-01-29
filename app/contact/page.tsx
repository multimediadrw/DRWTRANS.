
import Link from 'next/link'
import { Bus, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '08112050800'
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/^0/, '62')}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Bus className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-purple-600">DRWTRANS</span>
          </Link>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-6 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl text-purple-100">Kami siap membantu Anda 24/7</p>
        </div>
      </section>

      <section className="py-6 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telepon / WhatsApp</h3>
                    <a href={`tel:${whatsappNumber}`} className="text-purple-600">{whatsappNumber}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a href="mailto:info@drwtrans.com" className="text-purple-600">info@drwtrans.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Head Office</h3>
                    <p className="text-gray-700">
                      Jl. Lewisari IV No 6 Kel. Kebon Lega<br />
                      Kec. Bojongloa Kidul<br />
                      Kota Bandung - Jawa Barat 40253
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Pool Office</h3>
                    <p className="text-gray-700">
                      Jl. Babakan Cipatat, Parungserab<br />
                      Kec. Soreang<br />
                      Kab. Bandung - Jawa Barat 40911
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-lg shadow-lg p-8 flex flex-col justify-center">
              <MessageCircle className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-center">Chat via WhatsApp</h2>
              <p className="text-purple-100 mb-8 text-center">
                Cara tercepat untuk mendapatkan informasi dan melakukan booking
              </p>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-bold text-center"
              >
                Buka WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
