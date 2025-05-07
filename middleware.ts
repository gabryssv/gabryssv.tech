import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Check if the path is exactly /link
  if (url.pathname === '/link') {
    return NextResponse.redirect('https://gabryssv.pl', { status: 301 });
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/link'],
};