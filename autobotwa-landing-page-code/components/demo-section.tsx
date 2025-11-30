"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function DemoSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="demo" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Schedule a <span className="text-primary">Live Demo</span>
          </h2>
          <p className="text-lg text-white leading-relaxed">
            See AutoBotWa in action. Our team will show you how to transform your WhatsApp operations.
          </p>
        </div>

        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm shadow-[0_0_40px_rgba(96,165,250,0.2)]">
          <CardHeader className="text-center pb-6">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">Get Started Today</h3>
            <p className="text-sm text-muted-foreground">
              Fill out the form below and we'll be in touch within 24 hours
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-primary/30 focus:border-primary bg-input/50 backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-primary/30 focus:border-primary bg-input/50 backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border-primary/30 focus:border-primary bg-input/50 backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your business needs..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="border-primary/30 focus:border-primary bg-input/50 backdrop-blur-sm resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(96,165,250,0.6)]"
                size="lg"
              >
                Schedule Demo
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
