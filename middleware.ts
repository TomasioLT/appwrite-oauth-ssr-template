import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIES_NAME } from "@/lib/utils";

export function middleware(request: NextRequest) {
  const session = request.cookies.get(COOKIES_NAME);
  const isAuthenticated = !!session?.value;
  const { pathname } = request.nextUrl;

  // If user is authenticated and tries to access signin/signup, redirect to home
  if (isAuthenticated && (pathname === "/signin" || pathname === "/signup")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If user is not authenticated and tries to access root or dashboard, redirect to signin
  if (!isAuthenticated && pathname === "/") {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - oauth (oauth callback)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|oauth).*)",
  ],
};
