import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    const cspHeader = `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval';
        style-src 'self' 'unsafe-inline';
        img-src 'self' data: blob: https: https://honda-ds.github.io;
        font-src 'self';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        block-all-mixed-content;
        upgrade-insecure-requests;
    `.trim().replace(/\s{2,}/g, ' ');

    response.headers.set('Content-Security-Policy', cspHeader);

    return response;
}

export const config = {
    matcher: '/((?!api|_next/static|favicon.ico).*)',
};