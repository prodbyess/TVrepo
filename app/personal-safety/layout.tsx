import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personal Safety Devices',
  description: 'Simple protection for independent living. Wearable safety devices with 24/7 monitoring and emergency response. Give your loved ones peace of mind.',
  keywords: ['personal safety', 'medical alert', 'senior safety', 'fall detection', 'emergency response', 'independent living', 'elderly safety device'],
  openGraph: {
    title: 'Personal Safety Devices | Firestone Solutions',
    description: 'Simple protection for independent living. Wearable safety devices with 24/7 monitoring and emergency response.',
    url: '/personal-safety',
  },
}

export default function PersonalSafetyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
