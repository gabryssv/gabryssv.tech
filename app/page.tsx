import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { Mail, ExternalLink, Palette, Zap, Laptop } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Gabryś</h1>
        <ThemeToggle />
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Cześć, mam na imię Gabryś</h1>
            <p className="text-xl text-muted-foreground">Tworzę automatyzacje i projekty graficzne</p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Card className="bg-secondary/30 border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-6 space-y-4">
                        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                            <Zap className="h-6 w-6 text-foreground"/>
                        </div>
                        <h2 className="text-xl font-semibold">Automatyzacje</h2>
                        <p className="text-muted-foreground">
                            Od ponad 2 lat tworzę <strong>rozwiązania automatyzujące</strong> dla różnych platform, w
                            tym Discord,
                            Telegram, Instagram i Facebook. Oferuję{" "}
                            <strong>spersonalizowane rozwiązania w przystępnej cenie</strong>.
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-secondary/30 border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-6 space-y-4">
                        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                            <Palette className="h-6 w-6 text-foreground"/>
                        </div>
                        <h2 className="text-xl font-semibold">Grafika Komputerowa</h2>
                        <p className="text-muted-foreground">
                            Od prawie 5 lat zajmuję się <strong>grafiką komputerową</strong>, tworząc profesjonalne
                            projekty
                            wizualne dopasowane do potrzeb klientów.
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-secondary/30 border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-6 space-y-4">
                        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                            <Laptop className="h-6 w-6 text-foreground"/>
                        </div>
                        <h2 className="text-xl font-semibold">UI/UX Design</h2>
                        <p className="text-muted-foreground">
                            Od 2 lat projektuję <strong>intuicyjne interfejsy</strong> i <strong>kompleksowe doświadczenia
                            użytkownika</strong>,
                            łącząc estetykę z funkcjonalnością. Tworzę projekty dostosowane do potrzeb użytkowników i
                            celów marketingowych.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>

          <Separator className="my-12"/>

          <section className="space-y-6">
          <h2 className="text-2xl font-bold">Moje Usługi</h2>

              <div className="space-y-8">
                  <div className="space-y-4">
                      <h3 className="text-xl text-center font-semibold">Automatyzacje</h3>

                      <div className="flex flex-wrap gap-3">
                          <Button variant="outline" asChild className="h-auto py-2 px-4 font-normal">
                              <Link href="#">Boty Discord</Link>
                          </Button>

                          <Button variant="outline" asChild className="h-auto py-2 px-4 font-normal">
                              <Link href="#">Boty Telegram</Link>
                          </Button>

                          <Button variant="outline" asChild className="h-auto py-2 px-4 font-normal">
                              <Link href="#">Automatyzacje Instagram</Link>
                          </Button>

                          <Button variant="outline" asChild className="h-auto py-2 px-4 font-normal">
                              <Link href="#">Automatyzacje Facebook</Link>
                          </Button>
                      </div>
                  </div>

                  <div className="space-y-4">
                      <h3 className="text-xl text-center font-semibold">Grafika Komputerowa</h3>

                      <div className="flex flex-wrap gap-3">
                          <Button variant="outline" asChild className="h-auto py-2 px-4 font-normal">
                              <Link href="#">Miniaturki na platformę YouTube</Link>
                          </Button>

                          <Button variant="outline" asChild className="h-auto py-2 px-4 font-normal">
                              <Link href="#">Logo – sygnety i pełne wersje</Link>
                          </Button>

                          <Button variant="outline" asChild className="h-auto py-2 px-4 font-normal">
                              <Link href="#">Bannery, headery, infografiki</Link>
                          </Button>

                          <Button variant="outline" asChild className="h-auto py-2 px-4 font-normal">
                              <Link href="#">Okładki do utworów muzycznych</Link>
                          </Button>

                          <Button variant="outline" asChild className="h-auto py-2 px-4 font-normal">
                              <Link href="#">Identyfikacje wizualne marek</Link>
                          </Button>

                          <Button variant="outline" asChild className="h-auto py-2 px-4 font-normal">
                              <Link href="#">Projekty UI/UX</Link>
                          </Button>

                          <Button variant="outline" asChild className="h-auto py-2 px-4 font-normal">
                              <Link href="#">Inne projekty graficzne</Link>
                          </Button>
                      </div>
                  </div>

                  <div className="space-y-4">
                      <h3 className="text-xl text-center font-semibold">UI/UX Design</h3>

                      <div className="flex flex-wrap gap-3">
                          <Button variant="outline" asChild className="h-auto py-2 px-4 font-normal">
                              <Link href="#">Projekty Stron Internetowych</Link>
                          </Button>

                          <Button variant="outline" asChild className="h-auto py-2 px-4 font-normal">
                              <Link href="#">Projekty Aplikacji</Link>
                          </Button>
                      </div>
                  </div>
                  <p className="text-muted-foreground">
                      Korzystam z profesjonalnego oprogramowania, takiego jak{" "}
                      <strong>Adobe Creative Cloud, WebStorm i Figma</strong>, co pozwala mi tworzyć{" "}
                      <strong>dopracowane projekty na najwyższym poziomie</strong> – zarówno wizualnie, jak i
                      technicznie.
                  </p>
              </div>
          </section>

          <Separator className="my-12"/>

          <section className="space-y-6">
              <h2 className="text-2xl font-bold">Wycena</h2>
              <div className="bg-secondary/0 p-6 rounded-xl border border-input">
                  <p className="text-muted-foreground">
                      <strong>Każdy projekt wyceniam indywidualnie – całkowicie za darmo.</strong> Nie musisz się
                      zobowiązywać –
                      wystarczy, że opiszesz mi swój pomysł. Zawsze staram się dopasować rozwiązanie do Twojego budżetu,
                      oferując najlepszy możliwy efekt w rozsądnej cenie.
                  </p>
              </div>
          </section>

          <Separator className="my-12"/>

          <section className="space-y-6">
              <h2 className="text-2xl font-bold">Portfolio</h2>
              <p className="text-muted-foreground">Zobacz moje prace i przekonaj się sam:</p>
              <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" asChild>
              <Link
                href="https://behance.net/gabryssv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                behance.net/gabryssv
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href="https://x.com/gabryssv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                x.com/gabryssv
              </Link>
            </Button>
          </div>
        </section>

        <Separator className="my-12" />

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Kontakt</h2>
          <p className="text-muted-foreground">Jesteś zainteresowany? Masz pytanie? Potrzebujesz wstępnej wyceny?</p>
          <p className="text-muted-foreground">
            Napisz do mnie w wiadomości prywatnej lub skontaktuj się mailowo. Chętnie odpowiem i pomogę zrealizować Twój
            projekt z dbałością o każdy szczegół!
          </p>
          <Button variant="secondary" asChild>
            <Link href="mailto:k.gabriel@o2.pl" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              k.gabriel@o2.pl
            </Link>
          </Button>
        </section>
      </main>

      <footer className="border-t mt-24 py-6 bg-secondary/30">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Gabryś. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  )
}
