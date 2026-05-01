"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Residential", href: "/residential" },
  { name: "Commercial", href: "/commercial" },
  { name: "Personal Safety", href: "/personal-safety" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#1A1A1A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center -my-2">
            <Image
              src="/images/logo.png"
              alt="Firestone Solutions"
              width={280}
              height={80}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#F5A623] ${
                  pathname === item.href
                    ? "text-[#F5A623] border-b-2 border-[#F5A623] pb-1"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:416-707-8115"
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#F5A623] transition-colors"
            >
              <Phone className="h-4 w-4 text-[#F5A623]" />
              416-707-8115
            </a>
            <Button
              asChild
              className="bg-[#C41E3A] hover:bg-[#A31830] text-white rounded-md"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-[#F5A623] ${
                    pathname === item.href ? "text-[#F5A623]" : "text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:416-707-8115"
                className="flex items-center gap-2 text-sm font-medium text-white"
              >
                <Phone className="h-4 w-4 text-[#F5A623]" />
                416-707-8115
              </a>
              <Button
                asChild
                className="bg-[#C41E3A] hover:bg-[#A31830] text-white rounded-md w-fit"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
