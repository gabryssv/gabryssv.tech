"use client"

import React from "react"
import { Button, ButtonProps } from "@/components/ui/button"

interface ScrollButtonProps extends ButtonProps {
  targetId: string
  children: React.ReactNode
  offset?: number // Optional custom offset
}

export function ScrollButton({
  targetId,
  children,
  offset = 100, // Default offset to account for fixed header
  ...props
}: ScrollButtonProps) {
  const doScroll = () => {
    const element = document.getElementById(targetId)
    if (!element) return


    // If no offset needed, use scrollIntoView for reliability
    if (offset === 0) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }

    const targetTop = element.getBoundingClientRect().top + window.pageYOffset - offset
    window.requestAnimationFrame(() => {
      try {
        window.scrollTo({ top: targetTop, behavior: "smooth" })
      } catch {
        // Fallback
        window.scrollTo(0, targetTop)
      }
    })
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
    doScroll()
  }

  const handlePointerDown: React.PointerEventHandler<HTMLButtonElement> = (e) => {
    // Guard against any parent capturing pointer events
    e.stopPropagation()
  }

  return (
    <Button
      type="button"
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onMouseDown={handlePointerDown}
      aria-controls={targetId}
      {...props}
    >
      {children}
    </Button>
  )
}
