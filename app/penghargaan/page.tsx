import Navigation from '../components/Navigation'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Penghargaan</h1>
        <p className="text-gray-600 mb-8">Konten untuk halaman ini sedang dalam pengembangan.</p>
        <Link href="/" className="text-purple-600 hover:underline">← Kembali ke Beranda</Link>
      </div>
    </div>
  )
}
