"use client"

import Link from "next/link"
import Image from "next/image"
import { Shield, Clock, MapPin, Users, Heart, Phone, CheckCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"
import { motion } from "framer-motion"

const trustPoints = [
  {
    icon: Shield,
    text: "Always there when you need it",
  },
  {
    icon: MapPin,
    text: "Help anywhere in Canada",
  },
  {
    icon: Users,
    text: "Trusted by families across the GTA",
  },
]

const howItWorksSteps = [
  {
    number: 1,
    title: "Wear the Device",
    description: "Lightweight and comfortable to wear all day.",
    image: "/images/personal-safety/device-fabric.png",
  },
  {
    number: 2,
    title: "Press the Button",
    description: "One simple press sends an instant alert.",
    image: "/images/personal-safety/pressing-button.png",
  },
  {
    number: 3,
    title: "Get Connected Instantly",
    description: "You're connected to our 24/7 monitoring team.",
    image: "/images/personal-safety/operator.png",
  },
  {
    number: 4,
    title: "Help Is On the Way",
    description: "We assess your situation and send the right help fast.",
    image: "/images/personal-safety/ambulance.png",
  },
]

const features = [
  {
    icon: Shield,
    title: "Easy to Use",
    description: "One button. That's all.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "24/7 monitoring from real people.",
  },
  {
    icon: Users,
    title: "Supports Independence",
    description: "Stay in the home you love, with confidence.",
  },
  {
    icon: Heart,
    title: "Reassurance for Family",
    description: "Know help is always just a press away.",
  },
]

const familyBenefits = [
  "Stay connected, even from a distance",
  "Real help from real people, 24/7",
  "Peace of mind for everyone",
]

const pricingPlans = [
  {
    option: "Option 1",
    price: "$49",
    period: "/month",
    subtitle: "1-year term",
    description: "Device + Service Included",
    features: [
      "24/7 Professional Monitoring",
      "Worldwide GPS Coverage",
      "No Hidden Fees",
    ],
    popular: false,
    ctaText: "Choose Option 1",
  },
  {
    option: "Option 2",
    price: "$299",
    priceNote: "device +",
    monthlyPrice: "$30",
    monthlyPeriod: "/month",
    subtitle: "Own the device, lower monthly cost",
    description: "",
    features: [
      "24/7 Professional Monitoring",
      "Worldwide GPS Coverage",
      "No Hidden Fees",
    ],
    popular: true,
    ctaText: "Choose Option 2",
  },
  {
    option: "Option 3",
    price: "$599",
    period: " upfront",
    subtitle: "Save $145",
    description: "Device + Service Included",
    features: [
      "24/7 Professional Monitoring",
      "Worldwide GPS Coverage",
      "No Hidden Fees",
    ],
    popular: false,
    ctaText: "Choose Option 3",
  },
]

const faqs = [
  {
    question: "Do I need Wi-Fi?",
    answer: "No, the device works on cellular networks so you're covered anywhere with cell service.",
  },
  {
    question: "Is it hard to set up?",
    answer: "Not at all. We handle all setup and walk you through everything before you start using it.",
  },
  {
    question: "Who answers when I press the button?",
    answer: "Our trained monitoring team is available 24/7. Real people who will assess your situation and get you the help you need.",
  },
]

export default function PersonalSafetyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[550px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/personal-safety/hero.png"
            alt="Senior wearing personal safety device"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <FadeIn direction="up" className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Simple Protection for Independent Living
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              A personal safety device that gives you — and your family — peace of mind every day.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#C41E3A] hover:bg-[#A31830] text-white"
              >
                <Link href="/contact">
                  Get the Device
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1A1A1A] bg-transparent"
              >
                <Link href="tel:416-707-8115">
                  <Phone className="mr-2 h-5 w-5" />
                  Speak to Someone
                </Link>
              </Button>
            </div>

            {/* Trust Points */}
            <div className="mt-8 flex flex-wrap gap-6">
              {trustPoints.map((point, index) => (
                <FadeIn key={point.text} delay={0.2 + index * 0.1} direction="up">
                  <div className="flex items-center gap-2">
                    <point.icon className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">{point.text}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-14 left-[12%] right-[12%] border-t-2 border-dashed border-gray-300" />
            
            {howItWorksSteps.map((step) => (
              <StaggerItem key={step.title}>
                <motion.div 
                  className="relative text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className="bg-[#C41E3A] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-base mb-4 z-10 relative"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {step.number}
                    </motion.div>
                    <motion.div 
                      className="aspect-[3/2] relative rounded-lg overflow-hidden mb-3 w-full"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <h3 className="text-base font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Peace of Mind Without Complexity */}
      <section className="py-10 bg-[#1A1A1A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Peace of Mind Without Complexity</h2>
          </FadeIn>

          <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="bg-[#C41E3A]/20 p-2.5 rounded-lg flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon className="h-5 w-5 text-[#C41E3A]" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* For Families Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn direction="right">
              <motion.div 
                className="relative aspect-[4/3] rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/personal-safety/family.png"
                  alt="Family peace of mind"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">For Families</h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Our personal safety device helps your loved ones stay independent while giving your family the reassurance that help is always within reach.
              </p>
              <ul className="space-y-2.5">
                {familyBenefits.map((benefit, index) => (
                  <motion.li 
                    key={benefit} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-4 w-4 text-[#C41E3A] flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Simple, Transparent Pricing</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.option}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Card 
                    className={`relative h-full ${plan.popular ? 'border-[#C41E3A] border-2' : 'border-border'}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C41E3A] text-white px-3 py-0.5 rounded-full text-xs font-semibold">
                        Most Popular
                      </div>
                    )}
                    <CardHeader className="text-center pb-3">
                      <p className="text-muted-foreground text-xs uppercase tracking-wide">{plan.option}</p>
                      <CardTitle className="flex items-baseline justify-center gap-1">
                        {plan.priceNote && (
                          <>
                            <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                            <span className="text-muted-foreground text-sm">{plan.priceNote}</span>
                            <span className="text-2xl font-bold text-foreground">{plan.monthlyPrice}</span>
                            <span className="text-muted-foreground text-sm">{plan.monthlyPeriod}</span>
                          </>
                        )}
                        {!plan.priceNote && (
                          <>
                            <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                            <span className="text-muted-foreground text-sm">{plan.period}</span>
                          </>
                        )}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground">{plan.subtitle}</p>
                      {plan.description && (
                        <p className="text-xs font-medium text-foreground">{plan.description}</p>
                      )}
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-2 mb-5">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <CheckCircle className="h-3.5 w-3.5 text-[#C41E3A] flex-shrink-0" />
                            <span className="text-xs text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        asChild 
                        className={`w-full text-sm ${plan.popular ? 'bg-[#C41E3A] hover:bg-[#A31830] text-white' : 'bg-transparent border border-[#C41E3A] text-[#C41E3A] hover:bg-[#C41E3A] hover:text-white'}`}
                      >
                        <Link href="/contact">{plan.ctaText}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Guarantee & FAQs */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* 30-Day Guarantee */}
            <FadeIn direction="right">
              <motion.div 
                className="bg-[#C41E3A]/10 p-6 rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="bg-[#C41E3A] p-2.5 rounded-lg flex-shrink-0"
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Shield className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">30-Day Guarantee</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Try it risk-free for 30 days. If {"it's"} not right for you, return it for a full refund. No questions asked.
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            {/* FAQs */}
            <FadeIn direction="left" delay={0.2}>
              <h3 className="text-xl font-bold text-foreground mb-5">Common Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <motion.details 
                    key={faq.question} 
                    className="group border border-border rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <summary className="flex items-center justify-between p-3 cursor-pointer list-none hover:bg-muted/50 rounded-lg transition-colors">
                      <span className="font-medium text-foreground text-sm">{faq.question}</span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-3 pb-3">
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  </motion.details>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <FadeIn>
        <section className="py-12 bg-gradient-to-r from-[#1A1A1A] via-[#C41E3A]/70 to-[#1A1A1A]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="bg-[#C41E3A] p-2.5 rounded-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Shield className="h-6 w-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Ready for Peace of Mind?</h3>
                  <p className="text-white/80 text-sm">Simple protection. Real people. Always here for you.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#C41E3A] hover:bg-[#A31830] text-white"
                >
                  <Link href="/contact">Get the Device</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#1A1A1A] bg-transparent"
                >
                  <Link href="tel:416-707-8115">
                    <Phone className="mr-2 h-4 w-4" />
                    Speak to Someone
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
