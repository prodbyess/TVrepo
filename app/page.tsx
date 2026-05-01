"use client"

import Link from "next/link"
import Image from "next/image"
import { Home, Building2, User, Shield, Award, MapPin, Heart, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"
import { motion } from "framer-motion"

const services = [
  {
    title: "RESIDENTIAL",
    description: "Protect your home and family with reliable security systems.",
    icon: Home,
    href: "/residential",
    image: "/images/service-residential.png",
    cta: "EXPLORE RESIDENTIAL",
    details: ["Camera Systems", "Alarm Systems", "Smart Doorbells", "Basic Networking"],
  },
  {
    title: "COMMERCIAL",
    description: "Complete systems for businesses and commercial spaces.",
    icon: Building2,
    href: "/commercial",
    image: "/images/service-commercial.png",
    cta: "EXPLORE COMMERCIAL",
    details: ["Access Control", "Surveillance", "Digital Displays", "Audio Systems"],
  },
  {
    title: "PERSONAL SAFETY",
    description: "Simple protection for independent living and peace of mind.",
    icon: User,
    href: "/personal-safety",
    image: "/images/service-personal-safety.png",
    cta: "VIEW SAFETY DEVICE",
    details: ["24/7 Monitoring", "One-Touch Alert", "GPS Location", "Fall Detection"],
  },
]

const features = [
  {
    icon: Shield,
    title: "15+ Years Experience",
    description: "Decades of real-world installation expertise.",
  },
  {
    icon: Award,
    title: "Quality You Can Trust",
    description: "Professional installations that last.",
  },
  {
    icon: MapPin,
    title: "Local & Reliable",
    description: "Proudly serving the GTA with fast response.",
  },
  {
    icon: Heart,
    title: "Honest & Straightforward",
    description: "Clear recommendations. No upsells.",
  },
]

const experiencePoints = [
  "Clean, professional installations",
  "Systems designed to work together",
  "Support you can count on",
]

const workShowcase = [
  {
    title: "Expert Installation",
    description: "Skilled professionals dedicated to quality.",
    image: "/images/installer-camera.png",
  },
  {
    title: "Clean & Organized",
    description: "Neat wiring and reliable infrastructure.",
    image: "/images/networking-rack.png",
  },
  {
    title: "Complete Solutions",
    description: "Integrated systems that just work.",
    image: "/images/access-control-reader.png",
  },
  {
    title: "Built for You",
    description: "Solutions tailored to your space and needs.",
    image: "/images/digital-menu-boards.png",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-home-camera.png"
            alt="Modern home with security camera"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <FadeIn direction="up" className="max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Security & Safety Systems Built for{" "}
              <span className="text-[#C41E3A]">Real Life</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Residential, Commercial, and Personal Safety solutions across the GTA.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[#C41E3A] hover:bg-[#A31830] text-white px-6"
              >
                <Link href="/residential">
                  RESIDENTIAL
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-[#F5A623] hover:bg-[#D4900E] text-[#1A1A1A] px-6"
              >
                <Link href="/commercial">
                  COMMERCIAL
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-[#F5A623] hover:bg-[#D4900E] text-[#1A1A1A] px-6"
              >
                <Link href="/personal-safety">
                  PERSONAL SAFETY
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Choose Your Solution Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-[#C41E3A] font-semibold uppercase tracking-wide text-sm mb-2">Choose Your Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">We make safety simple.</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div 
                  className="group flex flex-col h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Image container with overlapping icon */}
                  <div className="relative">
                    <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Hover overlay with details */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <ul className="space-y-1">
                          {service.details.map((detail) => (
                            <li key={detail} className="flex items-center gap-2 text-white text-sm">
                              <CheckCircle className="h-3 w-3 text-[#F5A623]" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* Overlapping circular icon */}
                    <motion.div 
                      className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#F5A623] w-20 h-20 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <service.icon className="h-10 w-10 text-[#1A1A1A]" strokeWidth={1.5} />
                    </motion.div>
                  </div>
                  {/* Text content below */}
                  <div className="pt-14 pb-4 text-center flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-[#F5A623] mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.description}</p>
                    <Link
                      href={service.href}
                      className="text-[#C41E3A] font-semibold text-sm inline-flex items-center justify-center gap-2 group-hover:gap-3 transition-all"
                    >
                      {service.cta}
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-6 bg-muted border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-[#C41E3A]/10 p-2.5 rounded-lg flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-[#C41E3A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Firestone Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <FadeIn direction="right">
              <p className="text-[#C41E3A] font-semibold uppercase tracking-wide text-sm mb-2">Why Firestone</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Built from real-world experience.
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We know that every property is different. {"That's"} why we design and install systems that are reliable, easy to use, and built to work when it matters most.
              </p>
              <ul className="space-y-3 mb-8">
                {experiencePoints.map((point, index) => (
                  <FadeIn key={point} delay={0.1 * index} direction="left">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#C41E3A] flex-shrink-0" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  </FadeIn>
                ))}
              </ul>
              <Button
                asChild
                className="bg-[#C41E3A] hover:bg-[#A31830] text-white"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </FadeIn>

            {/* Right Content - Work Showcase Grid matching the design */}
            <FadeIn direction="left" delay={0.2}>
              <div className="grid grid-cols-4 gap-3">
                {/* Large image spanning 2 columns */}
                <motion.div 
                  className="col-span-2 row-span-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src={workShowcase[0].image}
                      alt={workShowcase[0].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
                {/* Top right images */}
                {[1, 2, 3].map((index) => (
                  <motion.div 
                    key={index}
                    className="col-span-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="aspect-square relative rounded-lg overflow-hidden">
                      <Image
                        src={workShowcase[index]?.image || "/images/residential-home.png"}
                        alt={workShowcase[index]?.title || "Work showcase"}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                ))}
                <motion.div 
                  className="col-span-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src="/images/residential-home.png"
                      alt="Residential security"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          {/* Bottom showcase labels */}
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <StaggerItem>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#C41E3A]" />
                <div>
                  <span className="font-semibold text-sm text-foreground uppercase">Expert Installation</span>
                  <p className="text-xs text-muted-foreground">Skilled professionals dedicated to quality.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-center gap-2">
                <div className="bg-[#F5A623] p-1 rounded">
                  <Building2 className="h-3 w-3 text-[#1A1A1A]" />
                </div>
                <div>
                  <span className="font-semibold text-sm text-foreground uppercase">Clean & Organized</span>
                  <p className="text-xs text-muted-foreground">Neat wiring and reliable infrastructure.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-center gap-2">
                <div className="bg-[#F5A623] p-1 rounded">
                  <Home className="h-3 w-3 text-[#1A1A1A]" />
                </div>
                <div>
                  <span className="font-semibold text-sm text-foreground uppercase">Complete Solutions</span>
                  <p className="text-xs text-muted-foreground">Integrated systems that just work.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#C41E3A]" />
                <div>
                  <span className="font-semibold text-sm text-foreground uppercase">Built for You</span>
                  <p className="text-xs text-muted-foreground">Solutions tailored to your space and needs.</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <FadeIn>
        <section className="py-12 bg-gradient-to-r from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="bg-[#C41E3A] p-3 rounded-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Home className="h-6 w-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{"Let's"} build a safer, smarter space for you.</h3>
                  <p className="text-gray-400">Get a free quote or book a walkthrough today.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#C41E3A] hover:bg-[#A31830] text-white"
                >
                  <Link href="/contact">
                    Get a Quote
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#1A1A1A]"
                >
                  <Link href="/contact">Book a Walkthrough</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
