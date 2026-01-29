"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useEffect, useState } from "react"

export function ThemeToggle({ className, locale = "pl", noAria = false }: { className?: string; locale?: "pl" | "en"; noAria?: boolean }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const aria = locale === "en" ? "Toggle theme" : "Przełącz motyw"
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={`border-0 ${className ?? ""}`}
        {...(noAria ? {} : { "aria-label": aria })}
      />
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`border-0 ${className ?? ""}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      {...(noAria ? {} : { "aria-label": aria })}
    >
      {theme === "dark" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
    </Button>
  )
}
