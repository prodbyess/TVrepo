"use client"

import Link from "next/link"
import Image from "next/image"
import { Shield, Key, Network, Volume2, Monitor, Accessibility, Utensils, Leaf, Building2, Home as HomeIcon, Search, FileText, Wrench, Settings, X, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"
import { motion } from "framer-motion"

const services = [
  {
    icon: Shield,
    title: "Alarm & Security Systems",
    description: "Intrusion detection, fire integration, and 24/7 monitoring.",
    image: "/images/commercial/alarm.png",
  },
  {
    icon: Key,
    title: "Access Control",
    description: "Keycards, fobs, and mobile access that keep the right people in.",
    image: "/images/commercial/access-control.png",
  },
  {
    icon: Network,
    title: "Networking & Infrastructure",
    description: "Structured cabling, Wi-Fi, and network setups built for reliability.",
    image: "/images/commercial/networking.png",
  },
  {
    icon: Volume2,
    title: "Audio Systems",
    description: "Background music, paging, and audio systems tuned for your space.",
    image: "/images/commercial/audio.png",
  },
  {
    icon: Monitor,
    title: "Digital Displays",
    description: "Menu boards, promotions, and communication that get noticed.",
    image: "/images/commercial/displays.png",
  },
  {
    icon: Accessibility,
    title: "Accessibility Systems",
    description: "Automatic doors, push buttons, and accessible entry solutions.",
    image: "/images/commercial/accessibility.png",
  },
]

const businessTypes = [
  {
    icon: Utensils,
    title: "Restaurants & Cafes",
    image: "/images/commercial/restaurant.png",
  },
  {
    icon: Leaf,
    title: "Cannabis Retail Stores",
    image: "/images/commercial/cannabis.png",
  },
  {
    icon: Building2,
    title: "Offices & Commercial Units",
    image: "/images/commercial/office.png",
  },
  {
    icon: HomeIcon,
    title: "Condos & Multi-Unit Buildings",
    image: "/images/commercial/condo.png",
  },
]

const processSteps = [
  {
    number: 1,
    icon: Search,
    title: "Full Walkthrough",
    description: "We visit your site, assess your needs, and identify key priorities.",
  },
  {
    number: 2,
    icon: FileText,
    title: "System Planning",
    description: "We design a custom solution built for your space and budget.",
  },
  {
    number: 3,
    icon: Wrench,
    title: "Installation",
    description: "Our team installs everything cleanly, professionally, and on time.",
  },
  {
    number: 4,
    icon: Settings,
    title: "Setup & Testing",
    description: "We configure, test, and train your team so everything works perfectly.",
  },
]

const problems = [
  "Poor system integration and compatibility issues",
  "Messy installs and unreliable performance",
  "Multiple vendors and finger-pointing",
  "Downtime, disruption, and avoidable repair costs",
]

const experiencePoints = [
  "15+ Years of experience across commercial installs",
  "Trusted by restaurants, retail, offices, and condos",
  "Clean, professional installs — no shortcuts",
  "Scalable systems that grow with your business",
  "Practical solutions that just work",
]

export default function CommercialPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[550px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/commercial/restaurant.png"
            alt="Modern commercial space with security camera"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <FadeIn direction="up" className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Complete Security & System Installations for Businesses
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Cameras, alarms, networking, audio, and display systems — designed and installed to work together.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#C41E3A] hover:bg-[#A31830] text-white"
              >
                <Link href="/contact">
                  Request a Site Walkthrough
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
                  Get a Quote
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Security camera positioned right */}
        <FadeIn direction="left" delay={0.3} className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block z-10">
          <motion.div whileHover={{ scale: 1.05, rotate: 2 }} transition={{ duration: 0.2 }}>
            <Image
              src="/images/commercial/access-control.png"
              alt="Access control system"
              width={280}
              height={220}
              className="rounded-lg shadow-2xl object-cover"
            />
          </motion.div>
        </FadeIn>
      </section>

      {/* Built For Real Commercial Environments */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <p className="text-[#C41E3A] font-semibold uppercase tracking-wide text-sm mb-2">Built For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Real Commercial Environments</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div 
                  className="group bg-card border border-border rounded-lg overflow-hidden flex h-full"
                  whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-5 flex-1">
                    <motion.div 
                      className="bg-[#C41E3A]/10 w-9 h-9 rounded-lg flex items-center justify-center mb-2.5"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <service.icon className="h-4 w-4 text-[#C41E3A]" />
                    </motion.div>
                    <h3 className="text-base font-bold text-foreground mb-1">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <div className="w-28 relative flex-shrink-0 overflow-hidden">
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

      {/* One Company. One System. No Confusion. */}
      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                One Company. One System. No Confusion.
              </h2>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                We design and install every piece of your system to work together seamlessly — from cameras to cabling.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                No juggling multiple vendors. No compatibility issues. Just one team accountable from day one.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <motion.div 
                className="relative aspect-video rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/commercial/networking.png"
                  alt="Integrated networking system"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Ideal Projects */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <p className="text-[#C41E3A] font-semibold uppercase tracking-wide text-sm mb-2">Ideal Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">We Work With Businesses Like Yours</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {businessTypes.map((business) => (
              <StaggerItem key={business.title}>
                <motion.div 
                  className="relative group cursor-pointer"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                    <Image
                      src={business.image}
                      alt={business.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <motion.div 
                      className="bg-[#C41E3A] w-9 h-9 rounded-lg flex items-center justify-center mb-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <business.icon className="h-4 w-4 text-white" />
                    </motion.div>
                    <h3 className="text-white font-semibold text-sm">{business.title}</h3>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process & What We Prevent */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Our Process */}
            <FadeIn direction="right">
              <p className="text-[#C41E3A] font-semibold uppercase tracking-wide text-sm mb-2">Our Process</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Straightforward and Efficient</h2>
              
              <div className="grid grid-cols-4 gap-3">
                {processSteps.map((step, index) => (
                  <motion.div 
                    key={step.title} 
                    className="text-center relative"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Connector arrow */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-5 right-0 translate-x-1/2 text-gray-300">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                    <motion.div 
                      className="border-2 border-[#C41E3A] rounded-lg p-2.5 mb-2.5 inline-block"
                      whileHover={{ scale: 1.1, borderColor: "#F5A623" }}
                      transition={{ duration: 0.2 }}
                    >
                      <step.icon className="h-5 w-5 text-[#C41E3A]" />
                    </motion.div>
                    <p className="text-[#C41E3A] font-bold text-xs mb-1">{step.number}. {step.title}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            {/* What We Prevent */}
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-[#C41E3A] font-semibold uppercase tracking-wide text-sm mb-2">We Help You Avoid</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">What We Prevent From the Start</h2>
                
                <ul className="space-y-3 mb-5">
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
                        <X className="h-3.5 w-3.5 text-[#C41E3A]" />
                      </div>
                      <span className="text-foreground text-sm">{problem}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div 
                  className="aspect-video relative rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/commercial/office.png"
                    alt="Modern office space"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Firestone */}
      <section className="py-16 bg-[#C41E3A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn direction="right">
              <p className="text-white/70 font-semibold uppercase tracking-wide text-sm mb-2">Why Firestone</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Built on Experience. Focused on Results.
              </h2>
              
              <ul className="space-y-2.5 mb-6">
                {experiencePoints.map((point, index) => (
                  <motion.li 
                    key={point} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-4 w-4 text-white flex-shrink-0" />
                    <span className="text-white text-sm">{point}</span>
                  </motion.li>
                ))}
              </ul>

              <Button
                asChild
                className="bg-white text-[#C41E3A] hover:bg-gray-100"
              >
                <Link href="/about">
                  See Our Work
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="grid grid-cols-4 gap-2.5">
                {/* Large image */}
                <motion.div 
                  className="col-span-2 row-span-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-full min-h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/commercial/restaurant.png"
                      alt="Restaurant with security"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
                {/* Right column images */}
                {[
                  { src: "/images/commercial/alarm.png", alt: "Security panel" },
                  { src: "/images/commercial/access-control.png", alt: "Access control" },
                  { src: "/images/commercial/networking.png", alt: "Network setup" },
                  { src: "/images/commercial/displays.png", alt: "Digital displays" },
                ].map((img, index) => (
                  <motion.div 
                    key={index}
                    className="col-span-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="aspect-square relative rounded-lg overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <FadeIn>
        <section className="py-12 bg-[#1A1A1A]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Ready to Upgrade Your Commercial Space?</h3>
                <p className="text-gray-400">{"Let's"} build a system that protects your business, your people, and your investment.</p>
              </div>
              <div className="flex gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#C41E3A] hover:bg-[#A31830] text-white"
                >
                  <Link href="/contact">
                    Request a Site Walkthrough
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
                    Get a Quote
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
