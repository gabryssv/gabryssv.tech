import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollButton } from "@/components/scroll-button"
import { Mail, ExternalLink, Palette, Zap, Laptop, ChevronRight } from "lucide-react"
import { FaDiscord, FaTwitter } from "react-icons/fa" // Import Discord icon from react-icons
import Link from "next/link"

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<header className="fixed w-full py-6 px-4 flex justify-between items-center backdrop-blur-[80px] bg-background/80 border-b">
				<div className="container mx-auto flex justify-between items-center">
					<h1 className="text-xl font-bold">Gabryś</h1>
					<ThemeToggle />
				</div>
			</header>

			<section className="min-h-screen flex items-center justify-center px-6 md:px-16">
				<div className="mx-auto max-w-3xl w-full">
					<div className="space-y-8 text-center">
						<div className="space-y-4 text-center">
							<p className="md:text-xl text-muted-foreground">Cześć, mam na imię Gabryś</p>
							<div className="space-y-2">
								<h1 className="text-5xl md:text-6xl tracking-tight font-bold ">W moich projektach</h1>
								<h1 className="text-5xl	md:text-6xl tracking-tight font-almendra">Każdy detal ma znaczenie.</h1>
							</div>
						</div>
						<p className="text-lg md:text-xl text-muted-foreground">
							Cześć, jestem Gabryś. Od ponad dwóch lat zajmuję się tworzeniem automatyzacji oraz projektowaniem intuicyjnych interfejsów stron i aplikacji. To moja pasja – uwielbiam łączyć estetykę z funkcjonalnością, tworząc rozwiązania, które idealnie odpowiadają na potrzeby użytkowników i marek.
						</p>
						<div className="flex justify-center gap-4">
							<ScrollButton targetId="services" variant="default" className="flex items-center gap-2">
								Moje Usługi <ChevronRight className="h-4 w-4" />
							</ScrollButton>
							<ScrollButton targetId="contact" variant="outline">
								Kontakt
							</ScrollButton>
						</div>
					</div>
				</div>
			</section>

			<main className="container mx-auto px-4 py-12">

				<section className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
						<Card className="bg-secondary/30 border-input transition-shadow">
							<CardContent className="p-6 space-y-4">
								<div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
									<Zap className="h-6 w-6 text-foreground" />
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

						<Card className="bg-secondary/30 border-input transition-shadow">
							<CardContent className="p-6 space-y-4">
								<div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
									<Palette className="h-6 w-6 text-foreground" />
								</div>
								<h2 className="text-xl font-semibold">Grafika Komputerowa</h2>
								<p className="text-muted-foreground">
									Od prawie 5 lat zajmuję się <strong>grafiką komputerową</strong>, tworząc profesjonalne
									projekty
									wizualne dopasowane do potrzeb klientów.
								</p>
							</CardContent>
						</Card>

						<Card className="bg-secondary/30 border-input transition-shadow">
							<CardContent className="p-6 space-y-4">
								<div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
									<Laptop className="h-6 w-6 text-foreground" />
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

				<Separator className="my-12" />

				<section id="services" className="space-y-6">
					<div className="space-x-2 flex">
						<h2 className="text-4xl md:text-5xl tracking-tight font-semibold">Moje <b className="font-almendra">Usługi</b></h2>
					</div>

					<div className="space-y-8">
						<div className="space-y-4">
							<h3 className="text-xl font-semibold">Automatyzacje</h3>

							<div className="flex flex-wrap gap-3">
								<Button variant="outline" className="bg-transparent  py-2 px-4 font-normal cursor-pointer">
									Boty Discord
								</Button>

									<Button
									variant="outline"
									disabled
									className="bg-transparent py-2 px-4 font-normal opacity-50 cursor-not-allowed"
								>
									Boty Telegram
								</Button>

								<Button variant="outline" className="bg-transparent  py-2 px-4 font-normal cursor-pointer">
									Automatyzacje Instagram
								</Button>

									<Button
									variant="outline"
									disabled
									className="bg-transparent py-2 px-4 font-normal opacity-50 cursor-not-allowed"
								>
									Automatyzacje Facebook
								</Button>
							</div>
						</div>

						<div className="space-y-4">
							<h3 className="text-xl font-semibold">Grafika Komputerowa</h3>
							<div className="flex flex-wrap gap-3">
								<Button variant="outline" className="bg-transparent  py-2 px-4 font-normal cursor-pointer">
									Miniaturki na platformę YouTube
								</Button>

								<Button variant="outline" className="bg-transparent  py-2 px-4 font-normal cursor-pointer">
									Logo
								</Button>

								<Button variant="outline" className="bg-transparent h-auto py-2 px-4 font-normal cursor-pointer">
									Bannery
								</Button>

								<Button variant="outline" className="bg-transparent h-auto py-2 px-4 font-normal cursor-pointer">
									Headery
								</Button>

								<Button variant="outline" className="bg-transparent h-auto py-2 px-4 font-normal cursor-pointer">
									Infografiki
								</Button>

								<Button variant="outline" className="bg-transparent  py-2 px-4 font-normal cursor-pointer">
									Okładki do utworów muzycznych
								</Button>

								<Button variant="outline" className="bg-transparent  py-2 px-4 font-normal cursor-pointer">
									Identyfikacje wizualne marek
								</Button>

								<Button variant="outline" className="bg-transparent  py-2 px-4 font-normal cursor-pointer">
									Inne projekty graficzne
								</Button>
							</div>
						</div>

						<div className="space-y-4">
							<h3 className="text-xl font-semibold">Projekty UI/UX Design</h3>

							<div className="flex flex-wrap gap-3">
								<Button variant="outline" className="bg-transparent  py-2 px-4 font-normal cursor-pointer">
									Projekty Stron Internetowych
								</Button>

								<Button variant="outline" className="bg-transparent  py-2 px-4 font-normal cursor-pointer">
									Projekty Aplikacji
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

				<Separator className="my-12" />

				<section className="space-y-6">
					<div className="space-x-2 flex">
						<h2 className="text-4xl md:text-5xl tracking-tight font-semibold">Wycena <b className="font-almendra">projektu</b></h2>
					</div>
					<div className="bg-secondary/30 p-6 rounded-lg border border-input">
						<p className="text-muted-foreground">
							<strong>Każdy projekt wyceniam indywidualnie – całkowicie za darmo.</strong> Nie musisz się
							zobowiązywać –
							wystarczy, że opiszesz mi swój pomysł. Zawsze staram się dopasować rozwiązanie do Twojego budżetu,
							oferując najlepszy możliwy efekt w rozsądnej cenie.
						</p>
					</div>
				</section>

				<Separator className="my-12" />

				<section className="space-y-6">
					<div className="space-x-2 flex">
						<h2 className="text-4xl md:text-5xl tracking-tight font-semibold">Moje <b className="font-almendra">Portfolio</b></h2>
					</div>
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

				<section id="contact" className="space-y-6">
					<div className="space-x-2 flex">
						<h2 className="text-4xl md:text-5xl tracking-tight font-semibold">Kontakt <b className="font-almendra">do mnie</b></h2>
					</div>
					<p className="text-muted-foreground">Jesteś zainteresowany? Masz pytanie? Potrzebujesz wstępnej wyceny?</p>
					<p className="text-muted-foreground">
						Napisz do mnie w wiadomości prywatnej lub skontaktuj się mailowo. Chętnie odpowiem i pomogę zrealizować Twój
						projekt z dbałością o każdy szczegół!
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button variant="default" asChild>
							<Link href="mailto:k.gabriel@o2.pl" className="flex items-center gap-2">
								<Mail className="h-4 w-4" />
								k.gabriel@o2.pl
							</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link href="https://discord.com/users/1204732596202901515" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
									<FaDiscord className="h-4 w-4" />
								gabryssv
							</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link href="https://x.com/gabryssv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
									<FaTwitter className="h-4 w-4" />
								gabryssv
							</Link>
						</Button>
					</div>
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
