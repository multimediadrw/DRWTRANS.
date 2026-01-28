'use client'

import { useState } from 'react'
import { X, MapPin, Calendar, Users, Clock } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedTab, setSelectedTab] = useState('bus')

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Handle Bar */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-royal-purple">Pesan Kendaraan</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-6 py-4 overflow-x-auto">
          <button
            onClick={() => setSelectedTab('bus')}
            className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
              selectedTab === 'bus'
                ? 'bg-royal-purple text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Sewa Bus
          </button>
          <button
            onClick={() => setSelectedTab('hiace')}
            className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
              selectedTab === 'hiace'
                ? 'bg-royal-purple text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            HiAce
          </button>
          <button
            onClick={() => setSelectedTab('pariwisata')}
            className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
              selectedTab === 'pariwisata'
                ? 'bg-royal-purple text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Pariwisata
          </button>
        </div>

        {/* Form */}
        <form className="px-6 py-4 space-y-4 pb-24">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <MapPin className="inline h-4 w-4 mr-1" />
              Lokasi Penjemputan
            </label>
            <input
              type="text"
              placeholder="Masukkan alamat penjemputan"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent text-base"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Calendar className="inline h-4 w-4 mr-1" />
                Tanggal
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Clock className="inline h-4 w-4 mr-1" />
                Durasi
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent text-base">
                <option>12 Jam</option>
                <option>Full Day</option>
                <option>2 Hari</option>
                <option>3 Hari</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Users className="inline h-4 w-4 mr-1" />
              Jumlah Penumpang
            </label>
            <input
              type="number"
              min="1"
              placeholder="Jumlah orang"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-purple focus:border-transparent text-base"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-gold hover:bg-amber-gold-dark text-white font-bold py-4 rounded-xl transition-all text-lg"
            style={{ minHeight: '44px' }}
          >
            Cari Armada
          </button>
        </form>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
