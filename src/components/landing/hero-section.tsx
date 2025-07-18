import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 text-center bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="max-w-4xl mx-auto">
        <Badge variant="secondary" className="mb-4 text-sm py-2 px-4 rounded-full">
          <Zap className="h-4 w-4 mr-2" />
          AI-Powered Problem Solving
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Conquer DSA with
          <span className="text-primary block mt-2">
            Personalized AI Guidance
          </span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          CheatCode gives you bespoke problem sets, adaptive study plans, instant solution feedback, and pro tips to optimize your approach—so you can ace every coding interview.
        </p>
      </div>
    </section>
  )
}
