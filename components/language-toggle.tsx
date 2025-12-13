"use client"

import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function LanguageToggle({ className }: { className?: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isEnglish = pathname?.startsWith("/en") ?? false

  const switchLang = () => {
    if (isEnglish) {
      // set cookie to pl and go to same path without /en
      document.cookie = "lang=pl; path=/; samesite=lax; max-age=31536000"
      const newPath = pathname?.replace(/^\/en/, "") || "/"
      router.push(newPath || "/")
    } else {
      // set cookie to en and go to same path with /en prefix
      document.cookie = "lang=en; path=/; samesite=lax; max-age=31536000"
      const newPath = pathname ? (pathname === "/" ? "/en" : `/en${pathname}`) : "/en"
      router.push(newPath)
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`border-0 ${className ?? ""}`}
      onClick={switchLang}
      aria-label={isEnglish ? "Switch to Polish" : "Przełącz na angielski"}
    >
      <span className="text-xs font-medium">{isEnglish ? "EN" : "PL"}</span>
    </Button>
  )
}
