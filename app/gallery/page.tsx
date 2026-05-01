"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"
import { motion, AnimatePresence } from "framer-motion"

const galleryImages = [
  // Residential
  {
    src: "/images/residential/installer.png",
    alt: "Professional camera installation",
    category: "Residential",
    title: "Security Camera Installation",
    description: "Expert installation of exterior security camera on residential property",
  },
  {
    src: "/images/residential/camera.png",
    alt: "HD security camera",
    category: "Residential",
    title: "HD Camera System",
    description: "High-definition security camera with night vision capability",
  },
  {
    src: "/images/residential/alarm.png",
    alt: "Alarm keypad installation",
    category: "Residential",
    title: "Smart Alarm Panel",
    description: "Modern touchscreen alarm panel with app integration",
  },
  {
    src: "/images/residential/doorbell.png",
    alt: "Video doorbell",
    category: "Residential",
    title: "Video Doorbell",
    description: "Smart video doorbell with two-way communication",
  },
  {
    src: "/images/residential/networking.png",
    alt: "Home networking setup",
    category: "Residential",
    title: "Home Network Infrastructure",
    description: "Professional wireless router and networking equipment",
  },
  {
    src: "/images/residential/keypad.png",
    alt: "Security keypad",
    category: "Residential",
    title: "Security Keypad",
    description: "Wall-mounted security keypad for alarm control",
  },
  // Commercial
  {
    src: "/images/commercial/restaurant.png",
    alt: "Restaurant security camera",
    category: "Commercial",
    title: "Restaurant Security",
    description: "Dome camera installation in upscale restaurant environment",
  },
  {
    src: "/images/commercial/access-control.png",
    alt: "Access control system",
    category: "Commercial",
    title: "Access Control Reader",
    description: "Keycard access control system for commercial building entry",
  },
  {
    src: "/images/commercial/networking.png",
    alt: "Server rack",
    category: "Commercial",
    title: "Network Infrastructure",
    description: "Professional server rack with organized cabling",
  },
  {
    src: "/images/commercial/displays.png",
    alt: "Digital menu boards",
    category: "Commercial",
    title: "Digital Menu Boards",
    description: "Commercial-grade digital signage for restaurant menus",
  },
  {
    src: "/images/commercial/audio.png",
    alt: "Ceiling speaker",
    category: "Commercial",
    title: "Audio System",
    description: "In-ceiling speaker installation for ambient music",
  },
  {
    src: "/images/commercial/alarm.png",
    alt: "Commercial alarm panel",
    category: "Commercial",
    title: "Commercial Alarm System",
    description: "Enterprise-grade alarm panel in modern office setting",
  },
  {
    src: "/images/commercial/accessibility.png",
    alt: "Accessibility button",
    category: "Commercial",
    title: "Accessibility Solutions",
    description: "ADA-compliant automatic door opener installation",
  },
  {
    src: "/images/commercial/office.png",
    alt: "Modern office",
    category: "Commercial",
    title: "Office Security",
    description: "Complete security solution for modern office space",
  },
  // Personal Safety
  {
    src: "/images/personal-safety/hero.png",
    alt: "Senior with safety device",
    category: "Personal Safety",
    title: "Personal Emergency Response",
    description: "Wearable safety pendant for independent living",
  },
  {
    src: "/images/personal-safety/family.png",
    alt: "Family reassurance",
    category: "Personal Safety",
    title: "Peace of Mind",
    description: "Families trust Firestone for their loved ones' safety",
  },
]

const categories = ["All", "Residential", "Commercial", "Personal Safety"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState<typeof galleryImages[0] | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (image: typeof galleryImages[0], index: number) => {
    setLightboxImage(image)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % filteredImages.length
    setLightboxIndex(nextIndex)
    setLightboxImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
    setLightboxIndex(prevIndex)
    setLightboxImage(filteredImages[prevIndex])
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#1A1A1A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our <span className="text-[#F5A623]">Work</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Browse our portfolio of completed installations across residential, 
                commercial, and personal safety projects throughout the GTA.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                    selectedCategory === category
                      ? "bg-[#C41E3A] text-white"
                      : "bg-white text-foreground hover:bg-gray-100 border border-border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <StaggerItem key={image.src}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group cursor-pointer"
                    onClick={() => openLightbox(image, index)}
                  >
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <span className="text-[#F5A623] text-xs font-semibold uppercase tracking-wider">
                            {image.category}
                          </span>
                          <h3 className="text-white font-bold text-lg mt-1">
                            {image.title}
                          </h3>
                          <p className="text-gray-300 text-sm mt-1 line-clamp-2">
                            {image.description}
                          </p>
                        </div>
                      </div>
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#1A1A1A]/80 text-white text-xs px-3 py-1 rounded-full">
                          {image.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </AnimatePresence>
          </StaggerContainer>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Let us bring this level of quality and expertise to your home or business.
              </p>
              <a
                href="/contact"
                className="inline-block bg-[#C41E3A] hover:bg-[#A31830] text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-[#F5A623] transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#F5A623] transition-colors z-10 bg-black/50 p-2 rounded-full"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#F5A623] transition-colors z-10 bg-black/50 p-2 rounded-full"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image Container */}
            <motion.div
              key={lightboxImage.src}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                width={1200}
                height={800}
                className="object-contain max-h-[70vh] w-auto rounded-lg"
              />
              <div className="mt-4 text-center">
                <span className="text-[#F5A623] text-sm font-semibold uppercase tracking-wider">
                  {lightboxImage.category}
                </span>
                <h3 className="text-white font-bold text-xl mt-1">
                  {lightboxImage.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {lightboxImage.description}
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  {lightboxIndex + 1} of {filteredImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
