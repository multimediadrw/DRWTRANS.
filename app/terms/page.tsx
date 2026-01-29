
import Link from 'next/link'
import { Bus, FileText } from 'lucide-react'

export default function TermsPage() {
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
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">Tentang Kami</Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">Kontak</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-6 px-4">
        <div className="container mx-auto text-center">
          <FileText className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Syarat & Ketentuan</h1>
          <p className="text-xl text-purple-100">Kebijakan dan ketentuan layanan DRWTRANS</p>
        </div>
      </section>

      <section className="py-6 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Harga & Pembayaran</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Harga Inklusif:</strong> Semua harga yang tercantum sudah termasuk BBM, tol, parkir, dan tips driver.</p>
              <p><strong>Down Payment (DP):</strong> Pembayaran DP sebesar 30% dari total harga dilakukan setelah konfirmasi booking.</p>
              <p><strong>Pelunasan:</strong> Sisa pembayaran dilakukan H-1 sebelum keberangkatan.</p>
              <p><strong>Metode Pembayaran:</strong> Transfer bank atau pembayaran tunai.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Pemesanan & Konfirmasi</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Waktu Pemesanan:</strong> Booking minimal 3 hari sebelum keberangkatan.</p>
              <p><strong>Konfirmasi:</strong> Konfirmasi booking akan dikirim via WhatsApp maksimal 1x24 jam setelah pemesanan.</p>
              <p><strong>Perubahan Jadwal:</strong> Perubahan jadwal dapat dilakukan maksimal 3 hari sebelum keberangkatan tanpa biaya tambahan.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Kebijakan Pembatalan</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Pembatalan 7+ hari sebelum keberangkatan:</strong> Gratis, DP dikembalikan 100%.</p>
              <p><strong>Pembatalan 3-6 hari sebelum keberangkatan:</strong> Dikenakan biaya administrasi 25%, DP dikembalikan 75%.</p>
              <p><strong>Pembatalan kurang dari 3 hari:</strong> Dikenakan biaya administrasi 50%, DP dikembalikan 50%.</p>
              <p><strong>Pembatalan H-1 atau pada hari keberangkatan:</strong> DP tidak dapat dikembalikan.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Tanggung Jawab</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Keterlambatan:</strong> Kami berkomitmen untuk tepat waktu. Jika terjadi keterlambatan lebih dari 1 jam, kompensasi akan diberikan.</p>
              <p><strong>Kerusakan Kendaraan:</strong> Jika terjadi kerusakan teknis, kami akan menyediakan bus pengganti secepat mungkin.</p>
              <p><strong>Barang Bawaan:</strong> Penumpang bertanggung jawab atas barang bawaan pribadi. Kami tidak bertanggung jawab atas kehilangan atau kerusakan barang.</p>
              <p><strong>Asuransi:</strong> Semua penumpang dilindungi asuransi perjalanan.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Aturan Perjalanan</h2>
            <div className="space-y-4 text-gray-700">
              <ul className="space-y-2">
                <li>• Dilarang merokok di dalam bus</li>
                <li>• Dilarang membawa barang berbahaya atau ilegal</li>
                <li>• Penumpang wajib mematuhi instruksi driver dan crew</li>
                <li>• Menjaga kebersihan dan kenyamanan bersama</li>
                <li>• Penggunaan fasilitas karaoke dengan volume wajar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
