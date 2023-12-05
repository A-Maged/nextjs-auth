import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAccessToken } from "./verifyAccessToken";

const TEMPORARY_REDIRECT = 307;
const PUBLIC_ROUTES = ["/login", "/register"];
const PUBLIC_FOLDERS = ["/api/", "/_next/", "/images/"];

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const accessToken = req?.cookies.get("access_token")?.value!;

  const isAuthenticated = await verifyAccessToken(accessToken);
  const isPublicRoute = PUBLIC_ROUTES.includes(url.pathname);
  const isPublicFolder = PUBLIC_FOLDERS.some((folder) => url.pathname.startsWith(folder));

  const shouldRedirectToLogin = !isAuthenticated && !isPublicRoute && !isPublicFolder;

  if (shouldRedirectToLogin) {
    url.pathname = `/login`;
    return NextResponse.redirect(url, TEMPORARY_REDIRECT);
  }

  const shouldRedirectToHome = isAuthenticated && isPublicRoute;

  if (shouldRedirectToHome) {
    url.pathname = `/`;
    return NextResponse.redirect(url, TEMPORARY_REDIRECT);
  }

  return NextResponse.next();
}
