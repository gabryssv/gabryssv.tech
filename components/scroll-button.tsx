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
  const scrollToSection = () => {
    const element = document.getElementById(targetId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <Button onClick={scrollToSection} {...props}>
      {children}
    </Button>
  )
}
