import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Firestone Solutions - 15+ years of experience providing security and safety solutions across the GTA. Honest recommendations, professional installations.',
  keywords: ['about Firestone Solutions', 'Toronto security company', 'GTA security experts', 'security company history'],
  openGraph: {
    title: 'About Us | Firestone Solutions',
    description: 'Learn about Firestone Solutions - 15+ years of experience providing security and safety solutions across the GTA.',
    url: '/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
