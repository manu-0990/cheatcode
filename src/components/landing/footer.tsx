import { Button } from "@/components/ui/button"
import { Code, Github, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-background/80">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <Code className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">CheatCode</span>
          </Link>

          <div className="flex flex-wrap justify-center space-x-10 text-sm">
            <Link href="/terms" className="hover:text-primary transition">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-primary transition">
              Contact Us
            </Link>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="ghost" size="sm" asChild aria-label="GitHub">
              <Link href="https://github.com/manu-0990/cheatcode" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          © {year} CheatCode. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
