import Link from "next/link"
import Image from "next/image"
import { Shield, Award, MapPin, Heart, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Firestone Solutions",
  description: "15+ years of experience providing security and safety solutions across the GTA. Clean, professional installations you can count on.",
}

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description: "Systems that work when it matters most.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Professional installations that stand the test of time.",
  },
  {
    icon: MapPin,
    title: "Local",
    description: "Proudly serving the GTA with fast, responsive service.",
  },
  {
    icon: Heart,
    title: "Honesty",
    description: "Straightforward recommendations with no hidden agendas.",
  },
]

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "1000+", label: "Installations Completed" },
  { number: "100%", label: "Satisfaction Focus" },
  { number: "24/7", label: "Support Available" },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Built from Real-World Experience
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Firestone Solutions was founded on a simple principle: security systems should be reliable, easy to use, and professionally installed. After 15+ years in the industry, we know {"what's"} possible and what actually works.
              </p>
              <p className="text-muted-foreground mb-8">
                We design and install security and safety solutions for homes, businesses, and individuals across the Greater Toronto Area. Our focus is on practical systems that work every day — not complicated technology that sits unused.
              </p>
              <Button
                asChild
                className="bg-[#C41E3A] hover:bg-[#A31830] text-white"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                alt="Firestone Solutions team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#C41E3A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="bg-[#C41E3A]/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-[#C41E3A]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop"
                  alt="Security installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=250&fit=crop"
                    alt="Camera system"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=250&fit=crop"
                    alt="Access control"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What Makes Us Different
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#C41E3A] mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">One Company, One System</h4>
                    <p className="text-muted-foreground">We handle everything from design to installation to support. No finger-pointing between vendors.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#C41E3A] mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Clean, Professional Work</h4>
                    <p className="text-muted-foreground">We take pride in every installation. Neat wiring, proper mounting, and systems that look as good as they work.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#C41E3A] mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Honest Recommendations</h4>
                    <p className="text-muted-foreground">We tell you what you need — not what makes us the most money. Our reputation depends on your satisfaction.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#C41E3A] mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Ongoing Support</h4>
                    <p className="text-muted-foreground">{"We're"} here after the installation. Questions, adjustments, upgrades — {"we've"} got you covered.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether {"you're"} securing your home, upgrading your business, or looking for personal safety solutions, {"we're"} here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#C41E3A] hover:bg-[#A31830] text-white"
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#1A1A1A]"
            >
              <Link href="tel:416-707-8115">Call 416-707-8115</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
