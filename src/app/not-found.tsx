import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Code, Terminal, Bug } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-background flex items-center justify-center p-4">
      <Card className="max-w-2xl mx-auto border-0 shadow-none bg-transparent">
        <CardContent className="text-center space-y-8">
          {/* Animated 404 with code theme */}
          <div className="relative">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="relative">
                <div className="text-8xl font-bold text-foreground tracking-tight">4</div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-destructive rounded-full flex items-center justify-center">
                  <Bug className="w-3 h-3 text-destructive-foreground" />
                </div>
              </div>
                <Terminal className="w-16 h-20 rounded-lg text-muted-foreground border-2 border-primary py-2" />
              <div className="text-8xl font-bold text-foreground tracking-tight">4</div>
            </div>

            {/* Code-style error message */}
            <div className="bg-card border text-card-foreground font-mono text-sm p-4 rounded-lg mb-6 text-left max-w-md mx-auto shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-chart-4 rounded-full"></div>
                  <div className="w-3 h-3 bg-chart-2 rounded-full"></div>
                </div>
                <span className="text-muted-foreground">terminal</span>
              </div>
              <div className="space-y-1">
                <div><span className="text-muted-foreground">Error:</span> <span className="text-foreground">Page not found</span></div>
                <div><span className="text-muted-foreground">Status:</span> 404</div>
                <div><span className="text-muted-foreground">Solution:</span> <span className="text-foreground">Navigate back to solve problems</span></div>
              </div>
            </div>
          </div>

          {/* Main message */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground">
              Oops! This page doesn't exist
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Looks like this route threw a <code className="bg-muted text-muted-foreground px-2 py-1 rounded font-mono text-sm">null pointer exception</code>
            </p>
            <p className="text-muted-foreground">
              The page you're looking for might have been moved, deleted, or perhaps never existed.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/problems">
                <Code className="w-5 h-5" />
                Browse Problems
              </Link>
            </Button>
          </div> 
        </CardContent>
      </Card>
    </div>
  )
}
