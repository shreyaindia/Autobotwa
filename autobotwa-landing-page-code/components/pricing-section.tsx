import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small businesses getting started",
    features: ["5,000 messages/month", "Basic AI chatbot", "3 workflows", "Email support", "Basic analytics"],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$149",
    description: "Best for growing businesses",
    features: [
      "25,000 messages/month",
      "Advanced AI chatbot",
      "Unlimited workflows",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
      "Team collaboration",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations",
    features: [
      "Unlimited messages",
      "Custom AI training",
      "Dedicated infrastructure",
      "24/7 phone support",
      "Custom analytics",
      "API access",
      "SLA guarantee",
      "Dedicated account manager",
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 bg-[url('/images/pricing-background.jpg')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Simple, <span className="text-primary">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary shadow-[0_0_40px_rgba(96,165,250,0.3)] scale-105 md:scale-110"
                  : "hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]"
              }`}
            >
              <CardHeader className="text-center pb-8 pt-8">
                {plan.highlighted && (
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="pb-8">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(96,165,250,0.6)]"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                  size="lg"
                  asChild
                >
                  <Link href="#demo">{plan.price === "Custom" ? "Contact Sales" : "Get Started"}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
