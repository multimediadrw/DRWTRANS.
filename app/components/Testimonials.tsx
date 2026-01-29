'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Naimulloh Ahyar",
    role: "Local Guide",
    rating: 5,
    text: "The buses are clean and comfortable. And all crews are very friendly and warm. Salute for Drw Trans. Go bigger, to the best....",
    date: "2 years ago"
  },
  {
    id: 2,
    name: "Ari Setya",
    role: "Customer",
    rating: 5,
    text: "Awalnya penasaran... tapi pas dicoba nyaman dan bikin ketagihan. Busnya bagus, baru, fasilitasnya oke, dan sopir serta co-drivernya ramah. Recommended!",
    date: "2 years ago"
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Study Tour Organizer",
    rating: 5,
    text: "Sudah beberapa kali pakai DRW TRANS untuk study tour sekolah. Pelayanan memuaskan, bus nyaman, driver profesional. Harga juga kompetitif!",
    date: "1 year ago"
  },
  {
    id: 4,
    name: "Siti Nurhaliza",
    role: "Corporate Client",
    rating: 5,
    text: "Perusahaan kami selalu pakai DRW TRANS untuk outing karyawan. Bus bersih, AC dingin, sound system bagus. Pokoknya top deh!",
    date: "6 months ago"
  },
  {
    id: 5,
    name: "Ahmad Fauzi",
    role: "Family Trip",
    rating: 5,
    text: "Liburan keluarga ke Pangandaran pakai bus dari DRW TRANS. Perjalanan nyaman, driver ramah dan helpful. Next trip pasti pakai lagi!",
    date: "3 months ago"
  },
  {
    id: 6,
    name: "Rina Wijaya",
    role: "Wedding Organizer",
    rating: 5,
    text: "Sering booking bus untuk antar jemput tamu undangan. DRW TRANS selalu on time, bus rapi dan bersih. Recommended untuk event!",
    date: "1 month ago"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-purple-900 mb-2">
            Testimoni Pelanggan
          </h2>
          <p className="text-gray-600">
            Apa kata mereka yang sudah menggunakan layanan DRW TRANS
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-700 font-semibold">4.5</span>
            <span className="text-gray-500">(15 reviews)</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[280px] relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-4 left-4 text-purple-200 opacity-50">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].date}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-purple-600 hover:bg-purple-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-purple-600 hover:bg-purple-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-8 bg-purple-600' 
                  : 'w-2 bg-purple-200 hover:bg-purple-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-6">
          <a
            href="https://maps.app.goo.gl/nkjLHMShJkXpuaJC8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
          >
            <span>Lihat semua review di Google Maps</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
