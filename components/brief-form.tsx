"use client"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function BriefForm({ locale }: { locale: "pl" | "en" }) {
  const [userTime, setUserTime] = useState("")
  const [plTime, setPlTime] = useState("")

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date()
      const userFmt = new Intl.DateTimeFormat(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now)

      const plFmt = new Intl.DateTimeFormat("pl-PL", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Europe/Warsaw",
      }).format(now)

      setUserTime(userFmt)
      setPlTime(plFmt)
    }
    updateTimes()
    const id = setInterval(updateTimes, 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <Card className="bg-secondary/30 border-input">
      <CardContent className="p-6 space-y-6">
        <div className="text-sm text-muted-foreground space-y-1">
          {locale === "pl" ? (
            <>
              <p>
                Twój czas: <strong>{userTime}</strong>
              </p>
              <p>
                Mój czas (Warszawa, Polska): <strong>{plTime}</strong>
              </p>
            </>
          ) : (
            <>
              <p>
                Your time: <strong>{userTime}</strong>
              </p>
              <p>
                My time (Warsaw, Poland): <strong>{plTime}</strong>
              </p>
            </>
          )}
          <p className="mt-1">
            {locale === "pl" ? "Zazwyczaj odpowiadam w ciągu 24h." : "I usually respond within 24 hours."}
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">
                {locale === "pl" ? "Imię" : "Name"}
              </label>
              <Input name="name" placeholder={locale === "pl" ? "Twoje imię" : "Your name"} required />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <Input type="email" name="email" placeholder="you@example.com" required />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">
                {locale === "pl" ? "Budżet (PLN)" : "Budget (PLN)"}
              </label>
              <Input name="budget" placeholder={locale === "pl" ? "np. 1500–4000" : "e.g. 1500–4000"} />
            </div>
            <div>
              <label className="block text-sm mb-1">
                {locale === "pl" ? "Termin" : "Deadline"}
              </label>
              <Input name="deadline" placeholder={locale === "pl" ? "np. do 15 stycznia" : "e.g. by Jan 15"} />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">
              {locale === "pl" ? "Krótki opis projektu" : "Short project brief"}
            </label>
            <Textarea name="brief" rows={5} placeholder={locale === "pl" ? "Co chcesz zrealizować?" : "What do you want to build?"} />
          </div>

          <div className="flex justify-end">
            <Button type="submit" variant="default">
              {locale === "pl" ? "Wyślij zapytanie (mock)" : "Send inquiry (mock)"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
