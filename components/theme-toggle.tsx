"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useEffect, useState } from "react"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="ghost" size="icon" className={`border-0 ${className ?? ""}`} aria-label="Przełącz motyw" />
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`border-0 ${className ?? ""}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Przełącz motyw"
    >
      {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
    </Button>
  )
}
