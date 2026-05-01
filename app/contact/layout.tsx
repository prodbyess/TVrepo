import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get a free quote for your security system. Contact Firestone Solutions for residential, commercial, and personal safety solutions across the GTA.',
  keywords: ['contact security company', 'free security quote', 'security consultation', 'Toronto security company contact'],
  openGraph: {
    title: 'Contact Us | Firestone Solutions',
    description: 'Get a free quote for your security system. Contact Firestone Solutions for residential, commercial, and personal safety solutions.',
    url: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
