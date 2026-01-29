"use client"

import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { DockNav } from "@/components/dock-nav"
import { dockItems, dockItemsEn } from "@/components/dock-nav"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { Button } from "@/components/ui/button"
import { FaXTwitter } from "react-icons/fa6"
import { Mail } from "lucide-react"

export function Navigator({ locale = "pl" }: { locale?: "pl" | "en" }) {
  const [open, setOpen] = useState(false)
  const items = locale === "en" ? dockItemsEn : dockItems
  return (
    <>
      {/* Desktop dock (center-bottom) */}
      <header className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="flex items-center gap-3 px-[8px] py-2 rounded-[calc(var(--radius)+8px)] border bg-background/80 backdrop-blur-[80px] shadow-sm">
          <DockNav items={items} />
          <Separator orientation="vertical" className="h-5" />
          <Button variant="ghost" size="icon" className="border-0 h-10 w-10" asChild>
            <Link href="https://x.com/gabryssv" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="border-0 h-10 w-10" asChild>
            <Link href="mailto:kossakowski.g@proton.me">
              <Mail className="h-4 w-4" />
            </Link>
          </Button>
          <Separator orientation="vertical" className="h-5" />
          <LanguageToggle className="h-10 w-10" />
          <ThemeToggle className="h-10 w-10" locale={locale} />
        </div>
      </header>

      {/* Mobile hamburger (bottom-right) */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <div className="relative">
          <div className="flex items-center gap-3 px-[8px] py-2 rounded-[calc(var(--radius)+8px)] border bg-background/80 backdrop-blur-[80px] shadow-sm">
            <Button
              variant="ghost"
              size="icon"
              className="border-0 h-10 w-10"
              onClick={() => setOpen((v) => !v)}
            >
              {/* simple hamburger icon stacked vertically */}
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="block w-5 h-[2px] bg-foreground rounded-sm" />
                <span className="block w-5 h-[2px] bg-foreground rounded-sm" />
                <span className="block w-5 h-[2px] bg-foreground rounded-sm" />
              </div>
            </Button>
          </div>

          {open && (
            <div className="absolute bottom-[calc(100%+12px)] right-0 flex flex-col gap-2 p-2 rounded-[calc(var(--radius)+8px)] border bg-background/90 backdrop-blur-[80px] shadow-sm">
              {items.map(({ id, label, icon: Icon }) => (
                <Button
                  key={id}
                  variant="ghost"
                  className="justify-start gap-2"
                  onClick={() => {
                    const el = document.getElementById(id)
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    setOpen(false)
                  }}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Button>
              ))}
              <Separator />
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="border-0 h-10 w-10" asChild>
                  <Link href="https://x.com/gabryssv" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="border-0 h-10 w-10" asChild>
                  <Link href="mailto:kossakowski.g@proton.me">
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
                <LanguageToggle className="h-10 w-10" noAria />
                <ThemeToggle className="h-10 w-10" locale={locale} noAria />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
