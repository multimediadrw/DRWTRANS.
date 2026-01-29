export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "DRW TRANS",
    "alternateName": "DRW Trans Bandung",
    "url": "https://drwtrans.com",
    "logo": "https://drwtrans.com/logo-drwtrans.png",
    "description": "DRW TRANS adalah PO Bus terpercaya di Bandung. Melayani sewa bus pariwisata, HiAce, dan Medium Bus untuk perjalanan wisata, study tour, dan corporate trip ke seluruh Indonesia.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Lewisari IV No 6, Kebon Lega",
      "addressLocality": "Bojongloa Kidul",
      "addressRegion": "Jawa Barat",
      "postalCode": "40253",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.9503,
      "longitude": 107.5833
    },
    "telephone": "+62-811-2050-800",
    "email": "info@drwtrans.com",
    "priceRange": "Rp 900.000 - Rp 4.700.000",
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
      "https://www.instagram.com/drwtrans",
      "https://www.tiktok.com/@drwtrans"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DRW TRANS",
    "image": "https://drwtrans.com/logo-drwtrans.png",
    "@id": "https://drwtrans.com",
    "url": "https://drwtrans.com",
    "telephone": "+62-811-2050-800",
    "priceRange": "Rp 900.000 - Rp 4.700.000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Lewisari IV No 6, Kebon Lega",
      "addressLocality": "Bandung",
      "addressRegion": "Jawa Barat",
      "postalCode": "40253",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.9503,
      "longitude": 107.5833
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Sewa Bus Pariwisata",
    "provider": {
      "@type": "Organization",
      "name": "DRW TRANS"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan Sewa Bus",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sewa Big Bus (47-59 Seat)",
            "description": "Mercedes Benz Adiputro 2021"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "2700000-3900000",
            "priceCurrency": "IDR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sewa Medium Bus (35 Seat)",
            "description": "Mercedes Benz Adiputro 2021"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "1850000-2800000",
            "priceCurrency": "IDR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sewa HiAce (8-14 Seat)",
            "description": "Toyota HiAce 2020"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "900000-1800000",
            "priceCurrency": "IDR"
          }
        }
      ]
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://drwtrans.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Harga",
        "item": "https://drwtrans.com/harga"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Armada",
        "item": "https://drwtrans.com/armada"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://drwtrans.com/contact"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
