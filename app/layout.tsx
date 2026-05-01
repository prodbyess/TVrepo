import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"]
});

const openSans = Open_Sans({ 
  subsets: ["latin"], 
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: {
    default: 'Firestone Solutions | Security & Safety Systems for Real Life',
    template: '%s | Firestone Solutions',
  },
  description: 'Residential, Commercial, and Personal Safety security solutions across the GTA. Cameras, alarms, access control, and more. 15+ years of experience.',
  keywords: ['security systems', 'alarm systems', 'CCTV', 'access control', 'home security', 'commercial security', 'GTA', 'Toronto', 'Ontario', 'security cameras', 'video surveillance', 'smart home security', 'business security'],
  authors: [{ name: 'Firestone Solutions' }],
  creator: 'Firestone Solutions',
  publisher: 'Firestone Solutions',
  metadataBase: new URL('https://firestonesecurity.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://firestonesecurity.ca',
    siteName: 'Firestone Solutions',
    title: 'Firestone Solutions | Security & Safety Systems for Real Life',
    description: 'Residential, Commercial, and Personal Safety security solutions across the GTA. Cameras, alarms, access control, and more. 15+ years of experience.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Firestone Solutions - Security & Safety Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Firestone Solutions | Security & Safety Systems for Real Life',
    description: 'Residential, Commercial, and Personal Safety security solutions across the GTA.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${montserrat.variable} ${openSans.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
