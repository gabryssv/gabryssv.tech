import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // Check if the path is exactly /link
  if (url.pathname === "/x") {
    return NextResponse.redirect("https://x.com/gabryssv", { status: 301 })
  }

  // Check if the path is exactly /link2
  if (url.pathname === "/behance") {
    return NextResponse.redirect("https://behance.net/gabryssv", { status: 301 })
  }

  // Check if the path is exactly /link2
  if (url.pathname === "/be") {
    return NextResponse.redirect("https://behance.net/gabryssv", { status: 301 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/x", "/behance", "/be"],
}
