import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

const residentialLinks = [
  { name: "Security Cameras", href: "/residential#cameras" },
  { name: "Alarm Systems", href: "/residential#alarms" },
  { name: "Video Doorbells", href: "/residential#doorbells" },
  { name: "Smart Home Integration", href: "/residential#smart-home" },
  { name: "Home Automation", href: "/residential#automation" },
  { name: "Monitoring Services", href: "/residential#monitoring" },
]

const commercialLinks = [
  { name: "Access Control", href: "/commercial#access" },
  { name: "CCTV Systems", href: "/commercial#cctv" },
  { name: "Intrusion Detection", href: "/commercial#intrusion" },
  { name: "Network & Cabling", href: "/commercial#networking" },
  { name: "Intercom Systems", href: "/commercial#intercom" },
  { name: "Commercial Automation", href: "/commercial#automation" },
]

const personalSafetyLinks = [
  { name: "Personal Alarms", href: "/personal-safety#alarms" },
  { name: "GPS Trackers", href: "/personal-safety#gps" },
  { name: "Lone Worker Solutions", href: "/personal-safety#lone-worker" },
  { name: "Panic Buttons", href: "/personal-safety#panic" },
  { name: "24/7 Monitoring", href: "/personal-safety#monitoring" },
]

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-[#C41E3A] p-3 rounded-lg">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{"Let's build a safer, smarter space for you."}</h3>
                <p className="text-gray-400">Get a free quote or book a walkthrough today.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-[#C41E3A] hover:bg-[#A31830] text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2"
              >
                Get a Quote
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white hover:bg-white hover:text-[#1A1A1A] px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2"
              >
                Book a Walkthrough
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Firestone Solutions"
              width={160}
              height={45}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm mb-4">
              Security and safety solutions you can count on. Protecting homes, businesses, and people across the GTA.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Residential Links */}
          <div>
            <h4 className="text-[#C41E3A] font-semibold mb-4 uppercase text-sm tracking-wide">Residential</h4>
            <ul className="space-y-2">
              {residentialLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial Links */}
          <div>
            <h4 className="text-[#C41E3A] font-semibold mb-4 uppercase text-sm tracking-wide">Commercial</h4>
            <ul className="space-y-2">
              {commercialLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Safety Links */}
          <div>
            <h4 className="text-[#C41E3A] font-semibold mb-4 uppercase text-sm tracking-wide">Personal Safety</h4>
            <ul className="space-y-2">
              {personalSafetyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#C41E3A] font-semibold mb-4 uppercase text-sm tracking-wide">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:416-707-8115" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                  <Phone className="h-4 w-4" />
                  416-707-8115
                </a>
              </li>
              <li>
                <a href="mailto:info@firestonesecurity.ca" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                  <Mail className="h-4 w-4" />
                  info@firestonesecurity.ca
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Serving the GTA, Ontario, Canada</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2024 Firestone Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
