import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // External shortlinks
  if (url.pathname === "/x") {
    return NextResponse.redirect("https://x.com/gabryssv", { status: 301 })
  }
  if (url.pathname === "/behance" || url.pathname === "/be") {
    return NextResponse.redirect("https://behance.net/gabryssv", { status: 301 })
  }

  // Language preference cookie-based redirect
  const langCookie = request.cookies.get("lang")?.value
  const isEn = url.pathname.startsWith("/en")
  const isRoot = url.pathname === "/"

  // If user prefers EN and is visiting root, redirect to /en
  if (isRoot && langCookie === "en") {
    url.pathname = "/en"
    return NextResponse.redirect(url)
  }

  // Keep cookie in sync only when on /en; avoid overriding user preference on PL paths
  const res = NextResponse.next()
  if (isEn && langCookie !== "en") {
    res.cookies.set("lang", "en", { path: "/", httpOnly: false, sameSite: "lax", maxAge: 31536000 })
  }
  return res
}

export const config = {
  matcher: ["/:path*"],
}