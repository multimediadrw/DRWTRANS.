'use client'

import { useState } from 'react'
import BottomNav from '../components/BottomNav'
import { MapPin, Clock, AlertCircle, CreditCard, Building2, Phone, ChevronDown, ChevronUp } from 'lucide-react'

export default function HargaPage() {
  const [selectedRoute, setSelectedRoute] = useState<'luarKota' | 'bandung' | 'transfer' | 'subang'>('luarKota')
  const [expandedNotes, setExpandedNotes] = useState(false)

  const routes = [
    { id: 'luarKota' as const, label: 'Luar Kota', subtitle: 'Max 16 jam' },
    { id: 'bandung' as const, label: 'Bandung', subtitle: 'City Tour 12 jam' },
    { id: 'transfer' as const, label: 'Transfer In/Out', subtitle: 'Dalam Kota' },
    { id: 'subang' as const, label: 'Subang/Garut', subtitle: 'Max 12 jam' },
  ]

  const priceData = [
    {
      name: 'Big Bus',
      seats: '59, 50, 47 Seat',
      specs: 'Mercedes Benz Adiputro 2021',
      color: 'from-purple-600 to-purple-800',
      prices: {
        luarKota: 'Rp 3.900.000',
        bandung: 'Rp 3.300.000',
        transfer: 'Rp 2.700.000',
        subang: 'Rp 3.800.000',
      },
    },
    {
      name: 'Medium Bus',
      seats: '35 Seat',
      specs: 'Mercedes Benz Adiputro 2021',
      color: 'from-purple-500 to-purple-700',
      prices: {
        luarKota: 'Rp 2.800.000',
        bandung: 'Rp 2.500.000',
        transfer: 'Rp 1.850.000',
        subang: 'Rp 2.600.000',
      },
    },
    {
      name: 'Big Bus VVIP',
      seats: 'Premium Class',
      specs: 'Mercedes Benz Adiputro 2021',
      color: 'from-amber-500 to-amber-700',
      prices: {
        luarKota: 'Rp 4.700.000',
        bandung: '-',
        transfer: '-',
        subang: '-',
      },
    },
    {
      name: 'HiAce Captain',
      seats: '8 Seat',
      specs: 'Toyota 2020',
      color: 'from-orange-500 to-orange-700',
      prices: {
        luarKota: 'Rp 1.800.000',
        bandung: 'Rp 1.500.000',
        transfer: 'Rp 1.000.000',
        subang: 'Rp 1.600.000',
      },
    },
    {
      name: 'HiAce Standard',
      seats: '14 Seat',
      specs: 'Toyota 2020',
      color: 'from-orange-400 to-orange-600',
      prices: {
        luarKota: 'Rp 1.500.000',
        bandung: 'Rp 1.200.000',
        transfer: 'Rp 900.000',
        subang: 'Rp 1.300.000',
      },
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
    'Reservasi tanpa Down Payment dapat dibatalkan tanpa pemberitahuan',
    'Pelunasan reservasi maksimal H-1',
    'Kelebihan jam atau overtime dikenakan charge sebesar 10%/jam dari harga total sewa',
    'Harga sewaktu-waktu dapat berubah tanpa pemberitahuan apabila ada kenaikan harga BBM',
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-32 animate-fadeIn">
      {/* Header */}
      <header className="bg-gradient-to-b from-royal-purple to-royal-purple-dark px-4 pt-[env(safe-area-inset-top,1.5rem)] pb-6">
        <div className="pt-6">
          <h1 className="text-2xl font-bold text-white mb-1">Daftar Harga</h1>
          <p className="text-sm text-white/80">Pilih rute dan lihat harga armada</p>
        </div>
      </header>

      {/* Route Selector */}
      <div className="px-4 -mt-4 mb-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-3">
          <div className="grid grid-cols-2 gap-2">
            {routes.map((route) => (
              <button
                key={route.id}
                onClick={() => setSelectedRoute(route.id)}
                className={`p-3 rounded-xl transition-all active:scale-95 ${
                  selectedRoute === route.id
                    ? 'bg-royal-purple text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <div className="text-sm font-bold">{route.label}</div>
                <div className={`text-[10px] ${selectedRoute === route.id ? 'text-white/80' : 'text-gray-500'}`}>
                  {route.subtitle}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Price Cards */}
      <div className="px-4 space-y-4 mb-6">
        {priceData.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className={`bg-gradient-to-r ${item.color} p-4 text-white`}>
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-sm opacity-90">{item.seats}</p>
              <p className="text-xs opacity-75">{item.specs}</p>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Harga Sewa</span>
                <span className="text-2xl font-bold text-amber-gold">
                  {item.prices[selectedRoute]}
                </span>
              </div>
              {item.prices[selectedRoute] !== '-' && (
                <p className="text-xs text-gray-500 mt-1 text-right">per hari</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Minimal Sewa */}
      <div className="px-4 mb-6">
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <h3 className="text-lg font-bold text-royal-purple mb-3 flex items-center gap-2">
            <Clock className="h-5 w-5 text-amber-gold" />
            Minimal Sewa Luar Kota
          </h3>
          <div className="space-y-2">
            {minimalSewa.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                <span className="text-sm text-gray-700">{item.destination}</span>
                <span className="text-sm font-bold text-royal-purple">{item.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bank Account */}
      <div className="px-4 mb-6">
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <h3 className="text-lg font-bold text-royal-purple mb-3 flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-amber-gold" />
            Rekening Pembayaran
          </h3>
          <div className="space-y-3">
            <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
              <p className="text-xs text-gray-600 mb-1">Bank Mandiri</p>
              <p className="text-lg font-bold text-royal-purple">13000-3434-0011</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
              <p className="text-xs text-gray-600 mb-1">Bank BCA</p>
              <p className="text-lg font-bold text-royal-purple">7751249865</p>
            </div>
            <p className="text-xs text-gray-600">a.n. PT DZAWANI TRAVEL INDONESIA</p>
            <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
              <p className="text-[10px] text-red-700 font-semibold leading-tight">
                *PERUSAHAAN TIDAK BERTANGGUNG JAWAB TERHADAP SEMUA TRANSAKSI PEMBAYARAN JIKA TIDAK MELALUI AKUN BANK RESMI
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Catatan Penting */}
      <div className="px-4 mb-6">
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <button
            onClick={() => setExpandedNotes(!expandedNotes)}
            className="w-full flex justify-between items-center mb-3"
          >
            <h3 className="text-lg font-bold text-royal-purple flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-gold" />
              Catatan Penting
            </h3>
            {expandedNotes ? (
              <ChevronUp className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-400" />
            )}
          </button>
          {expandedNotes && (
            <ul className="space-y-2">
              {catatanPenting.map((note, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="flex-shrink-0 w-4 h-4 bg-royal-purple text-white rounded-full flex items-center justify-center text-[8px] font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed">{note}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Contact */}
      <div className="px-4 mb-6">
        <div className="bg-gradient-to-r from-royal-purple to-royal-purple-dark rounded-2xl shadow-lg p-4 text-white">
          <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
            <Building2 className="h-4 w-4 text-amber-gold" />
            Alamat Kantor
          </h3>
          <div className="space-y-2 text-xs">
            <div>
              <p className="font-semibold text-amber-gold">Head Office</p>
              <p className="text-white/80 leading-relaxed">
                Jl. Leuwisari IV No 6, Kebonlega<br />
                Bojongloa Kidul, Bandung 40253
              </p>
            </div>
            <div>
              <p className="font-semibold text-amber-gold">Pool Office</p>
              <p className="text-white/80 leading-relaxed">
                Jl. Babakan Cipalik, Parungserab<br />
                Soreang, Kab. Bandung 40921
              </p>
            </div>
          </div>
          <a 
            href="tel:+6281120508000" 
            className="mt-4 flex items-center justify-center gap-2 bg-amber-gold hover:bg-amber-gold-dark text-white px-6 py-3 rounded-lg font-bold text-sm transition-all active:scale-95 shadow-lg"
          >
            <Phone className="h-4 w-4" />
            (+62) 811 2050 800
          </a>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
