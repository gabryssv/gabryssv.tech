"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { ScrollButton } from "@/components/scroll-button"
// Tooltips removed per request (icon-only buttons)
import { Home, Info, Wrench, CircleDollarSign, Images, Mail } from "lucide-react"

export type Item = {
  id: string
  label: string
  icon: (props: { className?: string }) => ReactNode
}

export const dockItems: Item[] = [
  { id: "hero", label: "Start", icon: (p) => <Home {...p} /> },
  { id: "pricing", label: "Przegląd", icon: (p) => <Info {...p} /> },
  { id: "services", label: "Usługi", icon: (p) => <Wrench {...p} /> },
  { id: "project-pricing", label: "Wycena", icon: (p) => <CircleDollarSign {...p} /> },
  { id: "portfolio", label: "Portfolio", icon: (p) => <Images {...p} /> },
  { id: "contact", label: "Kontakt", icon: (p) => <Mail {...p} /> },
]

export const dockItemsEn: Item[] = [
  { id: "hero", label: "Start", icon: (p) => <Home {...p} /> },
  { id: "pricing", label: "Overview", icon: (p) => <Info {...p} /> },
  { id: "services", label: "Services", icon: (p) => <Wrench {...p} /> },
  { id: "project-pricing", label: "Pricing", icon: (p) => <CircleDollarSign {...p} /> },
  { id: "portfolio", label: "Portfolio", icon: (p) => <Images {...p} /> },
  { id: "contact", label: "Contact", icon: (p) => <Mail {...p} /> },
]

export function DockNav({ items = dockItems }: { items?: Item[] }) {
  const [active, setActive] = useState<string>("hero")
  const containerRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const [indicatorX, setIndicatorX] = useState<number>(0)

  useEffect(() => {
    const DOCK_HEIGHT = 56 // approx dock height in px (icons + padding)
    const BAND_HEIGHT = 120 // height of the detection band near bottom
    const ANCHOR_OFFSET = 80 // legacy anchor offset (kept for fallback)
    const handler = () => {
      const viewportBottom = window.innerHeight
      const effectiveBottom = viewportBottom - DOCK_HEIGHT
      const bandTop = Math.max(0, effectiveBottom - BAND_HEIGHT)
      const bandBottom = effectiveBottom
      const anchorY = effectiveBottom - ANCHOR_OFFSET
      let nextActive = active

      const candidates: { id: string; rect: DOMRect }[] = []
      items.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return
        candidates.push({ id, rect: el.getBoundingClientRect() })
      })

      // Prefer the earliest section (page order) that overlaps the bottom visibility band
      const overlapping = candidates.filter(({ rect }) => {
        const overlap = Math.min(rect.bottom, bandBottom) - Math.max(rect.top, bandTop)
        return overlap > 0
      })

      if (overlapping.length > 0) {
        // candidates are in page order already; pick the first overlapping
        nextActive = overlapping[0].id
      } else {
        // Fallback: the most recently started section above the anchor
        const started = candidates
          .filter(({ rect }) => rect.top <= anchorY)
          .sort((a, b) => a.rect.top - b.rect.top)
          .pop()
        if (started) {
          nextActive = started.id
        } else if (candidates.length > 0) {
          nextActive = candidates[0].id
        }
      }

      setActive(nextActive)
    }

    handler()
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Compute item centers to position the moving indicator smoothly
  useEffect(() => {
    const computePositions = () => {
      const container = containerRef.current
      if (!container) return
      const containerRect = container.getBoundingClientRect()
      const el = itemRefs.current[active]
      if (!el) return
      const rect = el.getBoundingClientRect()
      const center = rect.left - containerRect.left + rect.width / 2
      setIndicatorX(center)
    }

    computePositions()
    window.addEventListener("resize", computePositions)
    return () => window.removeEventListener("resize", computePositions)
  }, [active])

  return (
    <div ref={containerRef} className="relative flex items-center gap-2">
      {items.map(({ id, label, icon: Icon }) => (
        <div
          ref={(el) => {
            itemRefs.current[id] = el
          }}
          key={id}
          className="relative"
        >
          <ScrollButton
            targetId={id}
            variant="ghost"
            size="icon"
            offset={100}
            className="border-0 h-10 w-10"
            aria-label={label}
          >
            <Icon className="h-4 w-4" />
          </ScrollButton>
        </div>
      ))}
      <span
        className="pointer-events-none absolute top-full h-1 w-1 rounded-full bg-foreground transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${indicatorX - 2}px)` }}
      />
    </div>
  )
}
