import Navigation from '../components/Navigation'
import { HelpCircle } from 'lucide-react'

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="bg-gradient-to-r from-royal-purple-dark to-royal-purple text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Pertanyaan yang Sering Diajukan</h1>
          <p className="text-xl text-gray-200">Temukan jawaban untuk pertanyaan Anda</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex gap-4">
                <HelpCircle className="h-6 w-6 text-royal-purple flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-royal-purple">Bagaimana cara memesan kendaraan?</h3>
                  <p className="text-gray-600">Anda dapat memesan melalui telepon di 0811-2050-800 atau mengisi form pemesanan di website kami. Tim kami akan segera menghubungi Anda untuk konfirmasi.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex gap-4">
                <HelpCircle className="h-6 w-6 text-royal-purple flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-royal-purple">Apakah harga sudah termasuk BBM dan driver?</h3>
                  <p className="text-gray-600">Ya, harga yang kami tawarkan sudah termasuk driver profesional dan BBM untuk dalam kota. Untuk perjalanan luar kota, BBM disesuaikan dengan jarak tempuh.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex gap-4">
                <HelpCircle className="h-6 w-6 text-royal-purple flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-royal-purple">Berapa lama minimal pemesanan?</h3>
                  <p className="text-gray-600">Minimal pemesanan adalah 12 jam untuk dalam kota dan 1 hari (full day) untuk luar kota. Untuk pemesanan mendadak, silakan hubungi kami untuk ketersediaan armada.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex gap-4">
                <HelpCircle className="h-6 w-6 text-royal-purple flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-royal-purple">Apakah ada jaminan keamanan?</h3>
                  <p className="text-gray-600">Semua armada kami memiliki STNK, KIR yang masih berlaku, dan dilengkapi dengan asuransi penumpang. Driver kami juga telah melalui pelatihan keselamatan berkendara.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex gap-4">
                <HelpCircle className="h-6 w-6 text-royal-purple flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-royal-purple">Bagaimana sistem pembayaran?</h3>
                  <p className="text-gray-600">Kami menerima pembayaran tunai, transfer bank, dan untuk klien korporat tersedia sistem invoicing bulanan dengan termin pembayaran yang fleksibel.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex gap-4">
                <HelpCircle className="h-6 w-6 text-royal-purple flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-royal-purple">Apakah bisa cancel pemesanan?</h3>
                  <p className="text-gray-600">Pembatalan dapat dilakukan maksimal H-2 sebelum keberangkatan tanpa dikenakan biaya. Pembatalan di bawah H-2 akan dikenakan biaya administrasi 50% dari total biaya.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
