export const buses = [
  {
    id: 1,
    name: "Medium Bus Executive",
    type: "medium",
    capacity: 30,
    seatConfig: "2-2 Executive",
    imageUrl: "/bus-medium.jpg",
    yearManufactured: 2022,
    hasAudio: true,
    hasTv: true,
    hasKaraoke: true,
    hasUsbCharger: true,
    hasWifi: true,
    hasToilet: true,
    hasAc: true,
    hasLegrest: true,
    hasSeatBelts: true,
    hasEmergencyHammer: true,
    hasFireExtinguisher: true,
    stnkExpiry: "2026-12-31",
    kirExpiry: "2026-06-30",
    trayekLicense: "TR-2024-001",
    pricePerDay: 2500000,
    description: "Bus medium dengan konfigurasi 2-2 Executive, dilengkapi fasilitas lengkap untuk perjalanan jarak jauh yang nyaman."
  },
  {
    id: 2,
    name: "Medium Bus Economy",
    type: "medium",
    capacity: 45,
    seatConfig: "2-3 Economy",
    imageUrl: "/bus-economy.jpg",
    yearManufactured: 2021,
    hasAudio: true,
    hasTv: true,
    hasKaraoke: true,
    hasUsbCharger: true,
    hasWifi: false,
    hasToilet: false,
    hasAc: true,
    hasLegrest: false,
    hasSeatBelts: true,
    hasEmergencyHammer: true,
    hasFireExtinguisher: true,
    stnkExpiry: "2026-11-30",
    kirExpiry: "2026-05-31",
    trayekLicense: "TR-2024-002",
    pricePerDay: 2000000,
    description: "Bus medium dengan kapasitas lebih besar, cocok untuk rombongan dengan budget ekonomis."
  },
  {
    id: 3,
    name: "Toyota HiAce Commuter",
    type: "hiace",
    capacity: 15,
    seatConfig: "2-2",
    imageUrl: "/hiace.jpg",
    yearManufactured: 2023,
    hasAudio: true,
    hasTv: false,
    hasKaraoke: false,
    hasUsbCharger: true,
    hasWifi: false,
    hasToilet: false,
    hasAc: true,
    hasLegrest: false,
    hasSeatBelts: true,
    hasEmergencyHammer: true,
    hasFireExtinguisher: true,
    stnkExpiry: "2027-01-31",
    kirExpiry: "2026-07-31",
    trayekLicense: "TR-2024-003",
    pricePerDay: 1500000,
    description: "Toyota HiAce untuk rombongan kecil, lincah dan nyaman untuk perjalanan dalam kota maupun luar kota."
  }
]

export const routes = [
  {
    id: 1,
    origin: "Yogyakarta",
    destination: "Gunung Kidul",
    distance: 45,
    estimatedDuration: "1.5 jam",
    baseFare: 800000,
    fuelCost: 150000,
    tollCost: 0,
    parkingCost: 20000,
    driverTip: 100000,
    totalFare: 1070000,
    isPopular: true,
    description: "Rute populer untuk wisata pantai Gunung Kidul"
  },
  {
    id: 2,
    origin: "Yogyakarta",
    destination: "Borobudur",
    distance: 42,
    estimatedDuration: "1.5 jam",
    baseFare: 750000,
    fuelCost: 140000,
    tollCost: 0,
    parkingCost: 25000,
    driverTip: 100000,
    totalFare: 1015000,
    isPopular: true,
    description: "Perjalanan ke Candi Borobudur"
  },
  {
    id: 3,
    origin: "Yogyakarta",
    destination: "Solo",
    distance: 65,
    estimatedDuration: "2 jam",
    baseFare: 1000000,
    fuelCost: 200000,
    tollCost: 25000,
    parkingCost: 30000,
    driverTip: 150000,
    totalFare: 1405000,
    isPopular: true,
    description: "Perjalanan antar kota Yogyakarta - Solo"
  },
  {
    id: 4,
    origin: "Yogyakarta",
    destination: "Semarang",
    distance: 120,
    estimatedDuration: "3 jam",
    baseFare: 1800000,
    fuelCost: 350000,
    tollCost: 50000,
    parkingCost: 40000,
    driverTip: 200000,
    totalFare: 2440000,
    isPopular: false,
    description: "Perjalanan ke Semarang"
  },
  {
    id: 5,
    origin: "Yogyakarta",
    destination: "Dieng",
    distance: 95,
    estimatedDuration: "3.5 jam",
    baseFare: 1500000,
    fuelCost: 280000,
    tollCost: 0,
    parkingCost: 30000,
    driverTip: 200000,
    totalFare: 2010000,
    isPopular: true,
    description: "Wisata ke Dataran Tinggi Dieng"
  }
]

export const testimonials = [
  {
    id: 1,
    customerName: "Budi Santoso",
    rating: 5,
    comment: "Pelayanan sangat memuaskan! Bus bersih, driver ramah dan profesional. Perjalanan ke Borobudur sangat nyaman.",
    tripDate: "2026-01-15",
    isFeatured: true
  },
  {
    id: 2,
    customerName: "Siti Aminah",
    rating: 5,
    comment: "Armada terawat dengan baik, AC dingin, dan fasilitas lengkap. Sangat recommended untuk trip keluarga!",
    tripDate: "2026-01-10",
    isFeatured: true
  },
  {
    id: 3,
    customerName: "Ahmad Rizki",
    rating: 4,
    comment: "Harga kompetitif dengan pelayanan yang baik. Driver sangat membantu dan menguasai rute dengan baik.",
    tripDate: "2026-01-05",
    isFeatured: true
  }
]

export const promos = [
  {
    id: 1,
    title: "Promo Tahun Baru 2026",
    description: "Diskon 15% untuk booking di bulan Januari! Berlaku untuk semua tipe bus dan rute.",
    discountType: "percentage",
    discountValue: 15,
    validFrom: "2026-01-01",
    validUntil: "2026-01-31",
    termsConditions: "Minimal booking 3 hari sebelum keberangkatan. Tidak dapat digabung dengan promo lain.",
    isActive: true
  },
  {
    id: 2,
    title: "Paket Wisata Weekend",
    description: "Harga spesial untuk perjalanan Sabtu-Minggu! Hemat hingga Rp 300.000",
    discountType: "fixed",
    discountValue: 300000,
    validFrom: "2026-01-01",
    validUntil: "2026-12-31",
    termsConditions: "Berlaku untuk keberangkatan hari Sabtu atau Minggu. Minimal 2 hari booking.",
    isActive: true
  }
]
