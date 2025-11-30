import { Card, CardContent } from "@/components/ui/card"
import { Bot, Zap, BarChart3, Network } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI Chatbot Automation",
    description:
      "Deploy intelligent AI chatbots that understand context and provide human-like responses to your customers 24/7.",
  },
  {
    icon: Zap,
    title: "Bulk WhatsApp Messaging",
    description:
      "Send personalized bulk messages to thousands of contacts with advanced scheduling and delivery tracking.",
  },
  {
    icon: Network,
    title: "Smart Campaigns & Workflows",
    description:
      "Create sophisticated automation workflows with triggers, conditions, and actions to streamline your operations.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Get deep insights into message delivery, engagement rates, response times, and customer behavior patterns.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Powerful Features for <span className="text-primary">Modern Businesses</span>
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed">
            Everything you need to automate, scale, and optimize your WhatsApp communication
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(96,165,250,0.3)]">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-space-grotesk)]">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
