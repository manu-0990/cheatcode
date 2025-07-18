import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, FileText, MessageSquare, Lightbulb } from "lucide-react"

export default function Features() {
  return (
    <section id="features" className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Next-Level AI Features to Boost Your Skills
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Whether you need tailored practice, smart review, or performance tips, our AI adapts to your goals and helps you excel.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-border/50 hover:border-border transition-colors">
          <CardHeader>
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Adaptive Practice Sets</CardTitle>
            <CardDescription>
              Instantly generate challenges tuned to your level, target roles, and weak spots.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-border/50 hover:border-border transition-colors">
          <CardHeader>
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Dynamic Study Plans</CardTitle>
            <CardDescription>
              AI-driven schedules that evolve with your progress, so you never lose momentum.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-border/50 hover:border-border transition-colors">
          <CardHeader>
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Instant Code Review</CardTitle>
            <CardDescription>
              Receive on-the-spot feedback on correctness, style, edge cases, and best practices.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-border/50 hover:border-border transition-colors">
          <CardHeader>
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Performance Tips</CardTitle>
            <CardDescription>
              Get targeted hints to optimize your solutions without giving away the answer.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  )
}
