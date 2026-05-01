import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residential Security Systems',
  description: 'Protect your home and family with professional security systems. Camera systems, alarm systems, smart doorbells, and networking solutions. Free consultation across the GTA.',
  keywords: ['home security', 'residential security', 'home cameras', 'home alarm system', 'smart doorbell', 'Toronto home security', 'GTA residential security'],
  openGraph: {
    title: 'Residential Security Systems | Firestone Solutions',
    description: 'Protect your home and family with professional security systems. Camera systems, alarm systems, smart doorbells, and networking solutions.',
    url: '/residential',
  },
}

export default function ResidentialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
