import { NextResponse } from "next/server";

export function middleware(request: Request) {
  console.log("middleware");
  console.log(request.method);
  console.log(request.url);

  const origin = request.headers.get("origin");
  console.log(origin);

  return NextResponse.next();

  // custom matching config
  // return NextResponse.redirect(new URL("http://localhost:3001/", request.url));

  // conditonal statements
  // if (request.nextUrl.pathname.startsWith('/about')) {
  //   return NextResponse.rewrite(new URL('/about-2', request.url))
  // }

  // if (request.nextUrl.pathname.startsWith('/dashboard')) {
  //   return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  // }
}

// Matcher -  allows to run middleware on specific path
export const config = {
  matcher: "/routeHandlers/:path*",
};
