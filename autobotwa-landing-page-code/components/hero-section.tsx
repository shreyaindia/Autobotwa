"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80 z-0" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-96 md:h-96">
              <img
                src="/chatbot-hero.png"
                alt="AI Chatbot"
                className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(96,165,250,0.6)]"
                style={{ mixBlendMode: "screen" }}
              />
            </div>

            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-glow" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 text-balance px-4 mx-auto max-w-5xl">
          <span className="inline-block text-white drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">Automate WhatsApp </span>
          <span className="inline-block bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(96,165,250,1)]">
            with AI
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 font-semibold shadow-[0_0_30px_rgba(96,165,250,0.8),0_0_60px_rgba(96,165,250,0.5)] hover:shadow-[0_0_40px_rgba(96,165,250,1),0_0_80px_rgba(96,165,250,0.6)] transition-all"
            asChild
          >
            <Link href="#demo">Start Free Trial</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/60 hover:bg-primary/20 text-white text-lg px-8 py-6 bg-black/60 backdrop-blur-sm font-semibold shadow-[0_0_20px_rgba(96,165,250,0.4)] hover:shadow-[0_0_30px_rgba(96,165,250,0.6)] transition-all"
            asChild
          >
            <Link href="#pricing">Get Started</Link>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div
              className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]"
              style={{
                color: "#60a5fa",
                textShadow: "0 0 20px rgba(96, 165, 250, 0.6)",
              }}
            >
              10k+
            </div>
            <div className="text-sm text-white mt-2">Active Users</div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]"
              style={{
                color: "#60a5fa",
                textShadow: "0 0 20px rgba(96, 165, 250, 0.6)",
              }}
            >
              50M+
            </div>
            <div className="text-sm text-white mt-2">Messages Sent</div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]"
              style={{
                color: "#60a5fa",
                textShadow: "0 0 20px rgba(96, 165, 250, 0.6)",
              }}
            >
              99.9%
            </div>
            <div className="text-sm text-white mt-2">Uptime</div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]"
              style={{
                color: "#60a5fa",
                textShadow: "0 0 20px rgba(96, 165, 250, 0.6)",
              }}
            >
              24/7
            </div>
            <div className="text-sm text-white mt-2">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
