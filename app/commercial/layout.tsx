import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Security Systems',
  description: 'Complete security solutions for businesses. Alarm systems, access control, networking, audio systems, digital displays, and accessibility solutions for restaurants, offices, retail, and more.',
  keywords: ['commercial security', 'business security', 'access control', 'commercial cameras', 'restaurant security', 'office security', 'Toronto business security'],
  openGraph: {
    title: 'Commercial Security Systems | Firestone Solutions',
    description: 'Complete security solutions for businesses. Alarm systems, access control, networking, audio systems, digital displays, and accessibility solutions.',
    url: '/commercial',
  },
}

export default function CommercialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
