"use client"

import React from "react"
import { Button, ButtonProps } from "@/components/ui/button"

interface ScrollButtonProps extends ButtonProps {
  targetId: string
  children: React.ReactNode
}

export function ScrollButton({ targetId, children, ...props }: ScrollButtonProps) {
  const scrollToSection = () => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Button onClick={scrollToSection} {...props}>
      {children}
    </Button>
  )
}
