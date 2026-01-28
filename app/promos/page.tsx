
import Link from 'next/link'
import { Bus, Tag } from 'lucide-react'
import { promos } from '@/lib/data'

export default function PromosPage() {
  const promosData = promos.filter(p => p.isActive)

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

      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <Tag className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Promo & Penawaran Spesial</h1>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {promosData.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {promosData.map((promo) => (
                <div key={promo.id} className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">{promo.title}</h3>
                  <p className="mb-6">{promo.description}</p>
                  <Link href="/booking" className="block w-full bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-bold text-center">
                    Gunakan Promo
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Belum ada promo aktif saat ini</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
