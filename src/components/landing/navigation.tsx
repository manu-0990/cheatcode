import { Button } from "@/components/ui/button"
import { Code, Github } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
            <Code className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">CheatCode</span>
        </Link>

        <div className="flex items-center space-x-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="py-2 px-4 rounded-full"
          >
            <Link href="/auth/signin">Sign In</Link>
          </Button>

          <Button
            asChild
            size="sm"
            className="py-2 px-4 rounded-full"
          >
            <Link href="/auth/signup">Get Started Free</Link>
          </Button>

          <Button variant="link" size="icon" asChild>
            <Link
              href="https://github.com/manu-0990/cheatcode"
              target="_blank"
              aria-label="View on GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
