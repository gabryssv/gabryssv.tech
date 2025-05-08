import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { Mail, ExternalLink, Palette, Zap, Laptop, Crown } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed w-full py-6 px-4 flex justify-between items-center backdrop-blur-[80px] bg-black/90 border-b border-amber-700/30 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-amber-400 font-serif">Gabryś</h1>
          <ThemeToggle />
        </div>
      </header>

      <section className="min-h-screen flex items-center justify-center px-4 md:px-16 bg-gradient-to-b from-black to-neutral-900 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="decorative-border space-y-6">
            <Crown className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <p className="text-xl text-amber-300">Cześć, mam na imię Gabryś</p>
            <h1 className="text-4xl md:text-5xl tracking-wide font-bold font-serif text-amber-100 leading-tight">
              W MOICH PROJEKTACH<br/>KAZDY DETAL MA ZNACZENIE
            </h1>
            <p className="text-xl text-amber-300 mt-6">Profesjonalne rozwiązania dla wymagających klientów</p>
            <div className="pt-6">
              <Button variant="outline" className="bg-transparent border-amber-500 text-amber-400 hover:bg-amber-950 hover:text-amber-300 rounded-none px-8 py-6">
                <Link href="#uslugi">Poznaj moje usługi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-[url('/subtle-pattern.png')] bg-black bg-blend-overlay">
        <div className="container mx-auto px-4 py-16">
          <section className="space-y-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-neutral-900/80 border-amber-900/30 hover:border-amber-500/50 transition-all duration-300 rounded-none">
                <CardContent className="p-6 space-y-4">
                  <div className="h-16 w-16 rounded-full bg-amber-950 flex items-center justify-center mx-auto">
                    <Zap className="h-8 w-8 text-amber-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-center text-amber-300 mt-4">Automatyzacje</h2>
                  <p className="text-amber-100/80">
                    Od ponad 2 lat tworzę <strong className="text-amber-200">rozwiązania automatyzujące</strong> dla różnych platform, w
                    tym Discord,
                    Telegram, Instagram i Facebook. Oferuję{" "}
                    <strong className="text-amber-200">spersonalizowane rozwiązania w przystępnej cenie</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900/80 border-amber-900/30 hover:border-amber-500/50 transition-all duration-300 rounded-none">
                <CardContent className="p-6 space-y-4">
                  <div className="h-16 w-16 rounded-full bg-amber-950 flex items-center justify-center mx-auto">
                    <Palette className="h-8 w-8 text-amber-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-center text-amber-300 mt-4">Grafika Komputerowa</h2>
                  <p className="text-amber-100/80">
                    Od prawie 5 lat zajmuję się <strong className="text-amber-200">grafiką komputerową</strong>, tworząc profesjonalne
                    projekty
                    wizualne dopasowane do potrzeb klientów.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900/80 border-amber-900/30 hover:border-amber-500/50 transition-all duration-300 rounded-none">
                <CardContent className="p-6 space-y-4">
                  <div className="h-16 w-16 rounded-full bg-amber-950 flex items-center justify-center mx-auto">
                    <Laptop className="h-8 w-8 text-amber-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-center text-amber-300 mt-4">UI/UX Design</h2>
                  <p className="text-amber-100/80">
                    Od 2 lat projektuję <strong className="text-amber-200">intuicyjne interfejsy</strong> i <strong className="text-amber-200">kompleksowe doświadczenia
                      użytkownika</strong>,
                    łącząc estetykę z funkcjonalnością. Tworzę projekty dostosowane do potrzeb użytkowników i
                    celów marketingowych.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <div className="py-12 flex justify-center">
            <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-amber-700/50 to-transparent"></div>
          </div>

          <section id="uslugi" className="space-y-8 py-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-300 inline-block border-b-2 border-amber-600 pb-2">Moje Usługi</h2>
            </div>

              <div className="space-y-12 max-w-4xl mx-auto">
                  <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-amber-200 text-center">Automatyzacje</h3>

                        <div className="flex flex-wrap gap-3 justify-center">
                          <Button variant="outline" className="h-auto py-3 px-6 font-normal border-amber-700/50 text-amber-100 hover:bg-amber-950 hover:border-amber-500 rounded-none">
                            Boty Discord
                          </Button>

                          <Button variant="outline" className="h-auto py-3 px-6 font-normal border-amber-700/50 text-amber-100 hover:bg-amber-950 hover:border-amber-500 rounded-none">
                            Boty Telegram
                          </Button>

                          <Button variant="outline" className="h-auto py-3 px-6 font-normal border-amber-700/50 text-amber-100 hover:bg-amber-950 hover:border-amber-500 rounded-none">
                            Automatyzacje Instagram
                          </Button>

                          <Button variant="outline" className="h-auto py-3 px-6 font-normal border-amber-700/50 text-amber-100 hover:bg-amber-950 hover:border-amber-500 rounded-none">
                            Automatyzacje Facebook
                          </Button>
                        </div>
                  </div>

                  <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-amber-200 text-center">Grafika Komputerowa</h3>
                        <div className="flex flex-wrap gap-3 justify-center">
                          <Button variant="outline" className="h-auto py-3 px-6 font-normal border-amber-700/50 text-amber-100 hover:bg-amber-950 hover:border-amber-500 rounded-none">
                            Miniaturki na platformę YouTube
                          </Button>

                          <Button variant="outline" className="h-auto py-3 px-6 font-normal border-amber-700/50 text-amber-100 hover:bg-amber-950 hover:border-amber-500 rounded-none">
                            Logo – sygnety i pełne wersje
                          </Button>

                          <Button variant="outline" className="h-auto py-3 px-6 font-normal border-amber-700/50 text-amber-100 hover:bg-amber-950 hover:border-amber-500 rounded-none">
                            Bannery, headery, infografiki
                          </Button>

                          <Button variant="outline" className="h-auto py-3 px-6 font-normal border-amber-700/50 text-amber-100 hover:bg-amber-950 hover:border-amber-500 rounded-none">
                            Okładki do utworów muzycznych
                          </Button>

                          <Button variant="outline" className="h-auto py-3 px-6 font-normal border-amber-700/50 text-amber-100 hover:bg-amber-950 hover:border-amber-500 rounded-none">
                            Identyfikacje wizualne marek
                          </Button>

                          <Button variant="outline" className="h-auto py-3 px-6 font-normal border-amber-700/50 text-amber-100 hover:bg-amber-950 hover:border-amber-500 rounded-none">
                            Projekty UI/UX
                          </Button>

                          <Button variant="outline" className="h-auto py-3 px-6 font-normal border-amber-700/50 text-amber-100 hover:bg-amber-950 hover:border-amber-500 rounded-none">
                            Inne projekty graficzne
                          </Button>
                        </div>
                  </div>

                  <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-amber-200 text-center">UI/UX Design</h3>

                        <div className="flex flex-wrap gap-3 justify-center">
                          <Button variant="outline" className="h-auto py-3 px-6 font-normal border-amber-700/50 text-amber-100 hover:bg-amber-950 hover:border-amber-500 rounded-none">
                            Projekty Stron Internetowych
                          </Button>

                          <Button variant="outline" className="h-auto py-3 px-6 font-normal border-amber-700/50 text-amber-100 hover:bg-amber-950 hover:border-amber-500 rounded-none">
                            Projekty Aplikacji
                          </Button>
                        </div>
                  </div>
                  <p className="text-amber-100/80 text-center max-w-2xl mx-auto">
                      Korzystam z profesjonalnego oprogramowania, takiego jak{" "}
                      <strong className="text-amber-200">Adobe Creative Cloud, WebStorm i Figma</strong>, co pozwala mi tworzyć{" "}
                      <strong className="text-amber-200">dopracowane projekty na najwyższym poziomie</strong> – zarówno wizualnie, jak i
                      technicznie.
                  </p>
              </div>
          </section>

          <div className="py-12 flex justify-center">
            <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-amber-700/50 to-transparent"></div>
          </div>

          <section className="space-y-6 py-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-amber-300 inline-block border-b-2 border-amber-600 pb-2">Wycena</h2>
              </div>
              <div className="bg-neutral-900/80 p-8 border border-amber-800/20 max-w-3xl mx-auto">
                  <p className="text-amber-100/80 text-center">
                      <strong className="text-amber-200">Każdy projekt wyceniam indywidualnie – całkowicie za darmo.</strong> Nie musisz się
                      zobowiązywać –
                      wystarczy, że opiszesz mi swój pomysł. Zawsze staram się dopasować rozwiązanie do Twojego budżetu,
                      oferując najlepszy możliwy efekt w rozsądnej cenie.
                  </p>
              </div>
          </section>

          <div className="py-12 flex justify-center">
            <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-amber-700/50 to-transparent"></div>
          </div>

          <section className="space-y-6 py-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-amber-300 inline-block border-b-2 border-amber-600 pb-2">Portfolio</h2>
              </div>
              <p className="text-amber-100/80 text-center">Zobacz moje prace i przekonaj się sam:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Button variant="outline" asChild className="border-amber-700/50 text-amber-100 hover:bg-amber-950 hover:border-amber-500 rounded-none">
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
                <Button variant="outline" asChild className="border-amber-700/50 text-amber-100 hover:bg-amber-950 hover:border-amber-500 rounded-none">
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

          <div className="py-12 flex justify-center">
            <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-amber-700/50 to-transparent"></div>
          </div>

          <section className="space-y-6 py-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-300 inline-block border-b-2 border-amber-600 pb-2">Kontakt</h2>
            </div>
            <p className="text-amber-100/80 text-center">Jesteś zainteresowany? Masz pytanie? Potrzebujesz wstępnej wyceny?</p>
            <p className="text-amber-100/80 text-center">
              Napisz do mnie w wiadomości prywatnej lub skontaktuj się mailowo. Chętnie odpowiem i pomogę zrealizować Twój
              projekt z dbałością o każdy szczegół!
            </p>
            <div className="flex justify-center mt-6">
              <Button variant="default" asChild className="bg-amber-700 hover:bg-amber-600 text-white rounded-none px-8 py-6">
                <Link href="mailto:k.gabriel@o2.pl" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  k.gabriel@o2.pl
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-amber-900/30 py-8 bg-black text-amber-100/70">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-serif text-amber-400 mb-2">Gabryś</h3>
            <p className="text-sm">Profesjonalne usługi automatyzacji i grafiki</p>
          </div>
          <p>© {new Date().getFullYear()} Gabryś. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  )
}
