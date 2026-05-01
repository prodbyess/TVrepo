"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Phone, Search } from "lucide-react"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            src="/images/logo.png"
            alt="Firestone Solutions"
            width={200}
            height={60}
            className="mx-auto h-16 w-auto"
          />
        </motion.div>

        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-[150px] font-bold leading-none text-[#C41E3A] mb-0">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Looks like this page went off the grid. Don&apos;t worry, our security systems are still fully operational.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#C41E3A] hover:bg-[#A31830] text-white"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623] hover:text-[#1A1A1A]"
          >
            <Link href="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </Button>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-border pt-8"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Looking for something specific? Try these pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/residential"
              className="text-sm font-medium text-[#F5A623] hover:text-[#C41E3A] transition-colors"
            >
              Residential Security
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link
              href="/commercial"
              className="text-sm font-medium text-[#F5A623] hover:text-[#C41E3A] transition-colors"
            >
              Commercial Security
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link
              href="/personal-safety"
              className="text-sm font-medium text-[#F5A623] hover:text-[#C41E3A] transition-colors"
            >
              Personal Safety
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link
              href="/gallery"
              className="text-sm font-medium text-[#F5A623] hover:text-[#C41E3A] transition-colors"
            >
              Gallery
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
