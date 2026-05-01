"use client"

import Link from "next/link"
import Image from "next/image"
import { Camera, Shield, Bell, Wifi, X, Search, FileText, Wrench, Settings, Award, Heart, MessageCircle, Phone, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"
import { motion } from "framer-motion"

const services = [
  {
    icon: Camera,
    title: "Camera Systems",
    description: "High-definition cameras with night vision and remote access so you can see what matters, anytime.",
    image: "/images/residential/camera.png",
    features: ["4K Resolution", "Night Vision", "Remote Access"],
  },
  {
    icon: Shield,
    title: "Alarm Systems",
    description: "Smart alarms that detect intrusions, alert you instantly, and help protect what matters most.",
    image: "/images/residential/alarm.png",
    features: ["Instant Alerts", "24/7 Monitoring", "Smart Integration"],
  },
  {
    icon: Bell,
    title: "Smart Doorbells",
    description: "See, hear, and speak to visitors from anywhere with smart doorbells and video alerts.",
    image: "/images/residential/doorbell.png",
    features: ["Two-Way Audio", "Motion Detection", "Cloud Storage"],
  },
  {
    icon: Wifi,
    title: "Basic Networking",
    description: "Reliable Wi-Fi and wired networking to keep your security systems and devices running strong.",
    image: "/images/residential/networking.png",
    features: ["Fast WiFi", "Wired Backup", "Full Coverage"],
  },
]

const problems = [
  "Cameras placed in the wrong spots",
  "Poor night visibility or blurry footage",
  "Systems that are hard to use",
  "Cheap installs that fail or look unprofessional",
  "No guidance on setup or how to use your system",
]

const processSteps = [
  {
    number: 1,
    icon: Search,
    title: "Walkthrough",
    description: "We visit your home, understand your concerns, and assess the best coverage.",
  },
  {
    number: 2,
    icon: FileText,
    title: "Clear Recommendations",
    description: "You get a simple, honest plan with the right solutions — nothing you don't need.",
  },
  {
    number: 3,
    icon: Wrench,
    title: "Installation",
    description: "Our professional team installs everything cleanly and ensures it works perfectly.",
  },
  {
    number: 4,
    icon: Settings,
    title: "Setup & Training",
    description: "We set up your system, walk you through it, and make sure you're confident.",
  },
]

const experienceItems = [
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Over a decade providing security solutions across the GTA.",
    image: "/images/residential/installer.png",
  },
  {
    icon: Heart,
    title: "Clean, Professional Installs",
    description: "We treat your home with care and leave it better than we found it.",
    image: "/images/residential/keypad.png",
  },
  {
    icon: MessageCircle,
    title: "Honest Recommendations",
    description: "We recommend what you need, not what you don't.",
    image: "/images/residential/couple-app.png",
  },
  {
    icon: Phone,
    title: "Support When You Need It",
    description: "We're here for setup, questions, and ongoing support.",
    image: "/images/residential/phone-app.png",
  },
]

export default function ResidentialPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[550px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/residential/hero.png"
            alt="Modern home with security camera and doorbell"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <FadeIn direction="up" className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Home Security Systems — Simple, Reliable, Installed Right
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Protect your home with cameras, alarm systems, and smart security solutions built to work every day.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#C41E3A] hover:bg-[#A31830] text-white"
              >
                <Link href="/contact">
                  <Shield className="mr-2 h-5 w-5" />
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
                className="border-white text-white hover:bg-white hover:text-[#1A1A1A] bg-transparent"
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Walkthrough
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Security cameras positioned right */}
        <FadeIn direction="left" delay={0.3} className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-10">
          <motion.div whileHover={{ scale: 1.05, rotate: 2 }} transition={{ duration: 0.2 }}>
            <Image
              src="/images/residential/camera.png"
              alt="Security camera"
              width={180}
              height={140}
              className="rounded-lg shadow-xl object-cover"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, rotate: -2 }} transition={{ duration: 0.2 }}>
            <Image
              src="/images/residential/doorbell.png"
              alt="Video doorbell"
              width={180}
              height={140}
              className="rounded-lg shadow-xl object-cover"
            />
          </motion.div>
        </FadeIn>
      </section>

      {/* Built for Real Homes Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Built for Real Homes</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div 
                  className="group bg-card border border-border rounded-lg overflow-hidden h-full"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-5">
                    <motion.div 
                      className="bg-[#C41E3A]/10 w-11 h-11 rounded-lg flex items-center justify-center mb-3"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <service.icon className="h-5 w-5 text-[#C41E3A]" />
                    </motion.div>
                    <h3 className="text-base font-bold text-foreground mb-1.5">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    {/* Hover features */}
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ul className="space-y-1">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-[#C41E3A]">
                            <CheckCircle className="h-3 w-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What Homeowners Need / What Usually Goes Wrong */}
      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* What Homeowners Need */}
            <FadeIn direction="right">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                What Homeowners Actually Need
              </h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                You {"don't"} need complicated. You need a security system {"that's"} easy to use, covers the right areas, and works when it matters. We design and install solutions that fit your home and your life — with clear guidance and no unnecessary extras.
              </p>
              <motion.div 
                className="aspect-video relative rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/residential/couple-app.png"
                  alt="Couple using security app"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </FadeIn>

            {/* What Usually Goes Wrong */}
            <FadeIn direction="left" delay={0.2}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                What Usually Goes Wrong
              </h2>
              <ul className="space-y-3">
                {problems.map((problem, index) => (
                  <motion.li 
                    key={problem} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-[#C41E3A]/10 p-1 rounded-full mt-0.5 flex-shrink-0">
                      <X className="h-4 w-4 text-[#C41E3A]" />
                    </div>
                    <span className="text-foreground">{problem}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Simple from Start to Finish</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] border-t-2 border-dashed border-gray-600" />
            
            {processSteps.map((step) => (
              <StaggerItem key={step.title}>
                <motion.div 
                  className="relative text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className="bg-[#C41E3A] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4 z-10 relative"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {step.number}
                    </motion.div>
                    <div className="bg-[#2A2A2A] p-3 rounded-lg mb-3">
                      <step.icon className="h-5 w-5 text-gray-400" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience You Can Rely On</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {experienceItems.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div 
                  className="flex flex-col group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="aspect-[3/2] relative rounded-lg overflow-hidden mb-3"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </motion.div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="bg-[#C41E3A]/10 p-1.5 rounded-lg">
                      <item.icon className="h-4 w-4 text-[#C41E3A]" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <FadeIn>
        <section className="py-12 bg-gradient-to-r from-[#C41E3A] to-[#8B1429]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="bg-white/20 p-3 rounded-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Shield className="h-7 w-7 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{"Let's"} make your home safer today.</h3>
                  <p className="text-white/80">Get a free quote or book a walkthrough with our team.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#C41E3A] hover:bg-gray-100"
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
                  className="border-white text-white hover:bg-white hover:text-[#C41E3A] bg-transparent"
                >
                  <Link href="/contact">
                    Book a Walkthrough
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
