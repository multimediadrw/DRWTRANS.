'use client'

import { X } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'

interface FleetGalleryModalProps {
  isOpen: boolean
  onClose: () => void
  fleetName: string
  posterImage: string
}

export default function FleetGalleryModal({ isOpen, onClose, fleetName, posterImage }: FleetGalleryModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-3 flex items-center justify-between">
          <h3 className="font-bold text-lg">{fleetName}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors active:scale-95"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-60px)]">
          {/* Full Poster Image */}
          <div className="relative w-full aspect-[9/16] bg-gray-100">
            <Image
              src={posterImage}
              alt={`${fleetName} Detail`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Info Section */}
          <div className="p-4 bg-gray-50">
            <p className="text-sm text-gray-600 text-center">
              Tap foto untuk melihat detail lengkap armada. Scroll untuk melihat interior, seat map, dan spesifikasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
