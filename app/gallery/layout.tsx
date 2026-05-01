import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Gallery',
  description: 'View our completed security installation projects across the GTA. Residential, commercial, and personal safety systems professionally installed.',
  keywords: ['security installation gallery', 'completed projects', 'security system photos', 'camera installation', 'alarm installation'],
  openGraph: {
    title: 'Project Gallery | Firestone Solutions',
    description: 'View our completed security installation projects across the GTA.',
    url: '/gallery',
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
