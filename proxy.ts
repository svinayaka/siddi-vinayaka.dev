import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

let locales = ['en'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
    return defaultLocale;
}

export function proxy(request: NextRequest) {
    const {pathname} = request.nextUrl;
    const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
    if (pathnameHasLocale) return;

    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;

    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.jpg$|.*\\.png$|.*\\.css$).*)',
    ]
}