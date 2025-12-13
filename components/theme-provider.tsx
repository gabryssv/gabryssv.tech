"use client"

import type * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({ children, defaultTheme = "dark", storageKey = "theme", ...props }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme
    const saved = localStorage.getItem(storageKey) as Theme | null
    return saved ?? defaultTheme
  })

  useEffect(() => {
    const root = document.documentElement
    const resolve = (t: Theme) => {
      if (t === "system") {
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      }
      return t
    }

    const apply = (t: Theme) => {
      const effective = resolve(t)
      root.classList.remove("light", "dark")
      root.classList.add(effective)
    }

    // Apply current theme and persist
    apply(theme)
    localStorage.setItem(storageKey, theme)
    try {
      document.cookie = `${storageKey}=${theme}; path=/; max-age=31536000; samesite=lax`
    } catch {}

    // Listen for system changes when theme is system
    if (theme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)")
      const onChange = () => apply("system")
      media.addEventListener("change", onChange)
      return () => media.removeEventListener("change", onChange)
    }
  }, [theme, storageKey])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
