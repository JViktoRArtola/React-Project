import { NextResponse } from 'next/server'

export const rewriteExclusions = [
    '/favicon.ico',
    '/manifest.json',
    '/service-worker-handler.js',
    '/service-worker.js',
    '/static/',
    '/fonts/',
    '/pwa/',
]

export default function middleware(req, ev) {
    const { pathname } = req.nextUrl

    for (let exclusion of rewriteExclusions) {
        if (pathname.startsWith(exclusion)) {
            return NextResponse.rewrite(`${pathname}?from_landing=true`)
        }
    }

    return NextResponse.next()
}
