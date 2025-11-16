"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Global error:", error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center px-4 bg-background">
          <div className="max-w-md w-full text-center space-y-6">
            <h1 className="text-3xl font-bold">Application Error</h1>
            <p className="text-muted-foreground">
              A critical error occurred. Please refresh the page.
            </p>
            <div className="flex gap-3 justify-center">
              <Button onClick={reset}>Try again</Button>
              <Button variant="outline" onClick={() => window.location.href = "/"}>
                Go home
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
