import Navigation from '../components/Navigation'
import { MapPin, Clock, AlertCircle, CreditCard, Building2, Phone } from 'lucide-react'

export default function HargaPage() {
  const priceData = [
    {
      name: 'Big Bus',
      seats: '59, 50, 47 Seat',
      specs: 'Mercedes Benz Adiputro 2021',
      luarKota: 'Rp 3.900.000',
      bandung: 'Rp 3.300.000',
      transfer: 'Rp 2.700.000',
      subang: 'Rp 3.800.000',
    },
    {
      name: 'Medium Bus',
      seats: '35 Seat',
      specs: 'Mercedes Benz Adiputro 2021',
      luarKota: 'Rp 2.800.000',
      bandung: 'Rp 2.500.000',
      transfer: 'Rp 1.850.000',
      subang: 'Rp 2.600.000',
    },
    {
      name: 'Big Bus VVIP Class',
      seats: 'Premium',
      specs: 'Mercedes Benz Adiputro 2021',
      luarKota: 'Rp 4.700.000',
      bandung: '-',
      transfer: '-',
      subang: '-',
    },
    {
      name: 'HiAce Captain Seat',
      seats: '8 Seat',
      specs: 'Toyota 2020',
      luarKota: 'Rp 1.800.000',
      bandung: 'Rp 1.500.000',
      transfer: 'Rp 1.000.000',
      subang: 'Rp 1.600.000',
    },
    {
      name: 'HiAce Standard',
      seats: '14 Seat',
      specs: 'Toyota 2020',
      luarKota: 'Rp 1.500.000',
      bandung: 'Rp 1.200.000',
      transfer: 'Rp 900.000',
      subang: 'Rp 1.300.000',
    },
  ]

  const minimalSewa = [
    { destination: 'Jabodetabek', duration: 'Min 1 Hari' },
    { destination: 'Pangandaran / Banten', duration: 'Min 2 Hari' },
    { destination: 'Lampung / Semarang / Jogja', duration: 'Min 3 Hari' },
    { destination: 'Jawa Timur / Madura', duration: 'Min 5 Hari' },
    { destination: 'Bali', duration: 'Min 7 Hari' },
    { destination: 'Lombok', duration: 'Min 10 Hari' },
  ]

  const catatanPenting = [
    'Tarif berlaku untuk keberangkatan kota Bandung',
    'Tarif sewa SUDAH TERMASUK: BBM & Driver',
    'Tarif sewa BELUM TERMASUK: Tol, Parkir, Tiket, Objek, Tips, Crew dan Co Driver',
    'Tambahan rute atau via dikenakan charge sesuai kebijakan perusahaan',
    'Reservasi harus disertai Down Payment 50%',
    'Reservasi tanpa Down Payment dapat dibatalkan tanpa pemberitahuan kepada konsumen',
    'Pelunasan reservasi maksimal H-1',
    'Kelebihan jam atau overtime dikenakan charge sebesar 10%/jam dari harga total sewa',
    'Harga sewaktu-waktu dapat berubah tanpa ada pemberitahuan apabila ada kenaikan harga BBM',
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-royal-purple-dark to-royal-purple text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Daftar Harga</h1>
          <p className="text-xl text-gray-200">Harga transparan untuk perjalanan Anda</p>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-royal-purple mb-2">Tabel Harga Armada</h2>
            <p className="text-gray-600">Pilih armada sesuai kebutuhan perjalanan Anda</p>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-royal-purple text-white">
                  <th className="p-4 text-left font-bold">Armada</th>
                  <th className="p-4 text-center font-bold">
                    <div className="flex flex-col items-center gap-1">
                      <MapPin className="h-5 w-5" />
                      <span>Luar Kota</span>
                      <span className="text-xs font-normal">(Max 16 jam)</span>
                    </div>
                  </th>
                  <th className="p-4 text-center font-bold">
                    <div className="flex flex-col items-center gap-1">
                      <Clock className="h-5 w-5" />
                      <span>Bandung</span>
                      <span className="text-xs font-normal">(City Tour Max 12 jam)</span>
                    </div>
                  </th>
                  <th className="p-4 text-center font-bold">
                    <div className="flex flex-col items-center gap-1">
                      <MapPin className="h-5 w-5" />
                      <span>Transfer In/Out</span>
                      <span className="text-xs font-normal">(Dalam Kota One Way)</span>
                    </div>
                  </th>
                  <th className="p-4 text-center font-bold">
                    <div className="flex flex-col items-center gap-1">
                      <MapPin className="h-5 w-5" />
                      <span>Subang/Garut</span>
                      <span className="text-xs font-normal">(Max 12 jam)</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((item, index) => (
                  <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-purple-50 transition-colors`}>
                    <td className="p-4">
                      <div>
                        <div className="font-bold text-royal-purple text-lg">{item.name}</div>
                        <div className="text-sm text-gray-600">{item.seats}</div>
                        <div className="text-xs text-gray-500">{item.specs}</div>
                      </div>
                    </td>
                    <td className="p-4 text-center font-bold text-amber-gold text-lg">{item.luarKota}</td>
                    <td className="p-4 text-center font-bold text-amber-gold text-lg">{item.bandung}</td>
                    <td className="p-4 text-center font-bold text-amber-gold text-lg">{item.transfer}</td>
                    <td className="p-4 text-center font-bold text-amber-gold text-lg">{item.subang}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {priceData.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200">
                <div className="bg-royal-purple text-white p-4">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-sm">{item.seats}</p>
                  <p className="text-xs text-gray-200">{item.specs}</p>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-sm text-gray-600">Luar Kota (16 jam)</span>
                    <span className="font-bold text-amber-gold">{item.luarKota}</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-sm text-gray-600">Bandung (12 jam)</span>
                    <span className="font-bold text-amber-gold">{item.bandung}</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-sm text-gray-600">Transfer In/Out</span>
                    <span className="font-bold text-amber-gold">{item.transfer}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Subang/Garut (12 jam)</span>
                    <span className="font-bold text-amber-gold">{item.subang}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Sewa & Important Notes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Minimal Sewa */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-royal-purple mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6 text-amber-gold" />
                Minimal Sewa Luar Kota
              </h3>
              <div className="space-y-3">
                {minimalSewa.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-700">{item.destination}</span>
                    <span className="font-bold text-royal-purple">{item.duration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bank Account */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-royal-purple mb-4 flex items-center gap-2">
                <CreditCard className="h-6 w-6 text-amber-gold" />
                Rekening Pembayaran
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm text-gray-600 mb-1">Bank Mandiri</p>
                  <p className="text-2xl font-bold text-royal-purple">13000-3434-0011</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm text-gray-600 mb-1">Bank BCA</p>
                  <p className="text-2xl font-bold text-royal-purple">7751249865</p>
                </div>
                <p className="text-xs text-gray-600">a.n. PT DZAWANI TRAVEL INDONESIA</p>
                <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                  <p className="text-xs text-red-700 font-semibold">
                    *PERUSAHAAN TIDAK BERTANGGUNG JAWAB TERHADAP SEMUA TRANSAKSI PEMBAYARAN JIKA TIDAK MELALUI AKUN BANK RESMI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catatan Penting */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-royal-purple mb-6 flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-amber-gold" />
              Catatan Penting
            </h3>
            <ul className="space-y-3">
              {catatanPenting.map((note, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-royal-purple text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-royal-purple text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Head Office */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-amber-gold" />
                Head Office
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Jl. Leuwisari IV No 6<br />
                Kel. Kebonlega, Kec. Bojongloa Kidul<br />
                Kota Bandung - Jawa Barat 40253
              </p>
            </div>

            {/* Pool Office */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-amber-gold" />
                Pool Office
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Jl. Babakan Cipalik, Parungserab<br />
                Kec. Soreang<br />
                Kab. Bandung - Jawa Barat 40921
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href="tel:+6281120508000" 
              className="inline-flex items-center gap-2 bg-amber-gold hover:bg-amber-gold-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              (+62) 811 2050 800
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
