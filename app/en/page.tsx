import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Navigator } from "@/components/navigator"
import { ScrollButton } from "@/components/scroll-button"
import { Mail, ExternalLink, Palette, Zap, Laptop, ChevronRight } from "lucide-react"
import { BriefForm } from "@/components/brief-form"
import { FaDiscord, FaTwitter } from "react-icons/fa"
import Link from "next/link"

export default function HomeEn() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<Navigator locale="en" />

			<section id="hero" className="min-h-screen flex items-center justify-center px-6 md:px-16">
				<div className="mx-auto max-w-3xl w-full">
					<div className="space-y-8 text-center">
						<div className="space-y-4 text-center">
							<p className="md:text-xl text-muted-foreground">Hi, I’m Gabryś</p>
							<div className="space-y-2">
								<h1 className="text-5xl md:text-6xl tracking-tight font-bold ">In my projects</h1>
								<h1 className="text-5xl md:text-6xl tracking-tight font-almendra">Every detail matters.</h1>
							</div>
						</div>
						<p className="text-lg md:text-xl text-muted-foreground">
							Hi, I’m Gabryś. For over two years, I’ve been building automations and designing intuitive interfaces for websites and apps. It’s my passion — I love combining aesthetics with functionality to create solutions that perfectly fit the needs of users and brands.
						</p>
						<div className="flex justify-center gap-4">
							<ScrollButton targetId="services" variant="default" className="flex items-center gap-2">
								My Services <ChevronRight className="h-4 w-4" />
							</ScrollButton>
							<ScrollButton targetId="contact" variant="outline">
								Contact
							</ScrollButton>
						</div>
					</div>
				</div>
			</section>

			<main className="mx-auto max-w-4xl px-4 md:px-8 lg:px-12 py-12">

				<section id="pricing" className="space-y-6">
					<div className="space-x-2 flex">
						<h2 className="text-4xl md:text-5xl tracking-tight font-semibold">Quick <b className="font-almendra">Overview</b></h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
						<Card className="bg-secondary/30 border-input transition-shadow">
							<CardContent className="p-6 space-y-4">
								<div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
									<Zap className="h-6 w-6 text-foreground" />
								</div>
								<h2 className="text-xl font-semibold">Automations</h2>
								<p className="text-muted-foreground">
									For over 2 years I’ve been building <strong>automation solutions</strong> for platforms like Discord, Telegram, Instagram, and Facebook. I offer <strong>tailored solutions at an accessible price</strong>.
								</p>
							</CardContent>
						</Card>

						<Card className="bg-secondary/30 border-input transition-shadow">
							<CardContent className="p-6 space-y-4">
								<div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
									<Palette className="h-6 w-6 text-foreground" />
								</div>
								<h2 className="text-xl font-semibold">Graphic Design</h2>
								<p className="text-muted-foreground">
									I’ve been doing <strong>graphic design</strong> for almost 5 years, creating professional visual projects tailored to clients’ needs.
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
									For 2 years I’ve been designing <strong>intuitive interfaces</strong> and <strong>holistic user experiences</strong>, blending aesthetics with functionality. I create projects tailored to user needs and marketing goals.
								</p>
							</CardContent>
						</Card>
					</div>
				</section>

				<Separator className="my-12" />

				<section id="services" className="space-y-6">
					<div className="space-x-2 flex">
						<h2 className="text-4xl md:text-5xl tracking-tight font-semibold">My <b className="font-almendra">Services</b></h2>
					</div>

					<div className="space-y-8">
						<div className="space-y-4">
							<h3 className="text-xl font-semibold">Automations</h3>

							<div className="flex flex-wrap gap-3">
								<Button variant="outline" className="bg-transparent  py-2 px-4 font-normal cursor-pointer">
									Discord Bots
								</Button>

								<span role="button" aria-disabled="true" aria-label="Soon" title="Soon">
									<Button
									variant="outline"
									disabled
									disabledLabel="Soon"
									className="bg-transparent py-2 px-4 font-normal opacity-50 cursor-not-allowed"
									>
										Telegram Bots
									</Button>
								</span>

								<Button variant="outline" className="bg-transparent  py-2 px-4 font-normal cursor-pointer">
									Instagram Automations
								</Button>

								<span role="button" aria-disabled="true" aria-label="Soon" title="Soon">
									<Button
									variant="outline"
									disabled
									disabledLabel="Soon"
									className="bg-transparent py-2 px-4 font-normal opacity-50 cursor-not-allowed"
									>
										Facebook Automations
									</Button>
								</span>
							</div>
						</div>

						<div className="space-y-4">
							<h3 className="text-xl font-semibold">Graphic Design</h3>
							<div className="flex flex-wrap gap-3">
								<Button variant="outline" className="bg-transparent  py-2 px-4 font-normal cursor-pointer">
									YouTube Thumbnails
								</Button>

								<Button variant="outline" className="bg-transparent  py-2 px-4 font-normal cursor-pointer">
									Logos
								</Button>

								<Button variant="outline" className="bg-transparent h-auto py-2 px-4 font-normal cursor-pointer">
									Banners
								</Button>

								<Button variant="outline" className="bg-transparent h-auto py-2 px-4 font-normal cursor-pointer">
									Headers
								</Button>

								<Button variant="outline" className="bg-transparent h-auto py-2 px-4 font-normal cursor-pointer">
									Infographics
								</Button>

								<Button variant="outline" className="bg-transparent  py-2 px-4 font-normal cursor-pointer">
									Music Cover Art
								</Button>

								<Button variant="outline" className="bg-transparent  py-2 px-4 font-normal cursor-pointer">
									Brand Visual Identities
								</Button>

								<Button variant="outline" className="bg-transparent  py-2 px-4 font-normal cursor-pointer">
									Other Graphic Projects
								</Button>
							</div>
						</div>

						<div className="space-y-4">
							<h3 className="text-xl font-semibold">UI/UX Design Projects</h3>

							<div className="flex flex-wrap gap-3">
								<Button variant="outline" className="bg-transparent  py-2 px-4 font-normal cursor-pointer">
									Website Designs
								</Button>

								<Button variant="outline" className="bg-transparent  py-2 px-4 font-normal cursor-pointer">
									App Designs
								</Button>
							</div>
						</div>
						<p className="text-muted-foreground">
							I use professional tools like <strong>Adobe Creative Cloud, WebStorm, and Figma</strong>, which let me create <strong>polished, top‑quality projects</strong> — both visually and technically.
						</p>
					</div>
				</section>

				<Separator className="my-12" />

				<section id="project-pricing" className="space-y-6">
					<div className="space-x-2 flex">
						<h2 className="text-4xl md:text-5xl tracking-tight font-semibold">Project <b className="font-almendra">Pricing</b></h2>
					</div>
					<p className="text-muted-foreground">
						<strong>Every project is priced individually — completely free.</strong> There’s no commitment — just describe your idea. I always try to align the solution with your budget, delivering the best possible result at a reasonable price.
					</p>
					<div className="mt-6">
						<BriefForm locale="en" />
					</div>
				</section>

				<Separator className="my-12" />

				<section id="portfolio" className="space-y-6">
					<div className="space-x-2 flex">
						<h2 className="text-4xl md:text-5xl tracking-tight font-semibold">My <b className="font-almendra">Portfolio</b></h2>
					</div>
					<p className="text-muted-foreground">See my work and judge for yourself:</p>
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
						<h2 className="text-4xl md:text-5xl tracking-tight font-semibold">Get in <b className="font-almendra">Touch</b></h2>
					</div>
					<p className="text-muted-foreground">Interested? Have a question? Need an initial quote?</p>
					<p className="text-muted-foreground">
						Send me a private message or contact me via email. I’ll gladly respond and help bring your project to life with attention to every detail!
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button variant="default" asChild>
							<Link href="mailto:kossakowski.g@proton.me" className="flex items-center gap-2">
								<Mail className="h-4 w-4" />
								kossakowski.g@proton.me
							</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link href="https://discord.com/users/822493619276611663" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
								<FaDiscord className="h-4 w-4" />
								kossakowski.g
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
					<p>© {new Date().getFullYear()} Gabryś. All rights reserved.</p>
				</div>
			</footer>
		</div>
	)
}