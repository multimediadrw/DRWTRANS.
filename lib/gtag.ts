export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Custom events for DRW TRANS
export const trackWhatsAppClick = (vehicleType: string) => {
  event({
    action: 'whatsapp_click',
    category: 'engagement',
    label: vehicleType,
  })
}

export const trackBookingStart = (vehicleType: string) => {
  event({
    action: 'booking_start',
    category: 'conversion',
    label: vehicleType,
  })
}

export const trackPhoneClick = () => {
  event({
    action: 'phone_click',
    category: 'engagement',
    label: 'contact',
  })
}

export const trackPriceView = (route: string) => {
  event({
    action: 'price_view',
    category: 'engagement',
    label: route,
  })
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}
