import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    image: "/professional-woman-ceo.png",
    content:
      "AutoBotWa transformed our customer support. We handle 10x more inquiries with half the team. The AI chatbot is incredibly accurate.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthLabs",
    image: "/professional-asian-man-marketing-director.jpg",
    content:
      "The bulk messaging and analytics features are game-changing. Our campaign engagement rates increased by 300% in just two months.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Manager, RetailPro",
    image: "/professional-hispanic-woman-operations-manager.jpg",
    content:
      "Setting up automation workflows was incredibly easy. The platform saved us 20+ hours per week on repetitive tasks. Highly recommend!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]"
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-primary/30"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
