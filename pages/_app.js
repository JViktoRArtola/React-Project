import AOS from 'aos'
import 'tailwindcss/tailwind.css'
import '../public/fonts/roboto/roboto-300-400-500.css'
import '../public/css/index.css'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    useEffect(() => {
        const handleRouteChange = url => {
            gtag.pageView(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <>
            {gtag.GA_TRACKING_ID != null && gtag.GA_TRACKING_ID !== '' && (
                <>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <Script
                        strategy="afterInteractive"
                        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
                    />
                    <Script
                        id="gtag-init"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gtag.GA_TRACKING_ID}', {
                          page_path: window.location.pathname,
                        });
                    `,
                        }}
                    />
                </>
            )}

            <Component {...pageProps} />
        </>
    )
}

export default MyApp
