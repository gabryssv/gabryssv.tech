"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    // Keep the overlay for 2 seconds after hydration, then fade out
    const timer = setTimeout(() => {
      setFading(true)
      const fadeTimer = setTimeout(() => {
        setVisible(false)
      }, 700) // match transition duration
      return () => clearTimeout(fadeTimer)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      className={
        `fixed inset-0 z-[9999] bg-background text-foreground flex items-center justify-center transition-opacity duration-700 ` +
        (fading ? "opacity-0" : "opacity-100")
      }
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 rounded-full border-2 border-muted-foreground border-t-transparent animate-spin" />
        <p className="text-sm text-muted-foreground">Ładowanie…</p>
      </div>
    </div>
  )
}
