import Head from 'next/head'
import { useEffect, useState } from 'react'
import Router from 'next/router'
import CookieClickerPopup from '../PagesComponents/Common/CookieClickerPopup'

export default function PageLayout({ children }) {
    const [originUrl, setOriginUrl] = useState('')
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setOriginUrl(window.location.origin.replace('https', 'http'))

        ///// Ask for cookies in localStorage
        const cookie = JSON.parse(localStorage.getItem('alldone_cookie'))

        const { pathname } = Router
        if (pathname === '/' && cookie?.loggedIn) {
            Router.push('/teams/tasks/open')
        } else {
            setLoaded(true)
        }
    }, [])

    return (
        <div className={'relative overflow-x-hidden'}>
            <Head>
                <title key="title">Alldone.app</title>
                <link rel="icon" href="/favicon.png" />
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover"
                />
                <meta
                    key="keywords"
                    name="keywords"
                    content="Alldone, Alldone.app, Project Management, Task Management, Collaboration Tool"
                />
                <meta
                    key="description"
                    name="description"
                    content="Alldone, the next gen collaboration tool that makes the team productivity simpler"
                />
                <meta name="author" content="Alldone GmbH" />
                <meta name="robots" content="index" />

                <meta property="og:title" key="og-title" content="Alldone.app" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:description" key="og-description" content="Alldone.app - team productivity made simple." />
                <meta property="og:url" key="og-url" content="https://alldone.app/" />
                <meta property="og:site_name" content="Alldone.app" />
                <meta property="og:image" content={`${originUrl}/home-card.jpg`} />
                <meta property="og:image:url" content={`${originUrl}/home-card.jpg`} />
                <meta property="og:image:secure" content={`${originUrl}/home-card.jpg`} />
                <meta property="og:image:secure_url" content={`${originUrl}/home-card.jpg`} />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@alldone_app" />
                <meta name="twitter:title" key="twitter-title" content="Alldone.app" />
                <meta name="twitter:description" key="twitter-description" content="Alldone.app - team productivity made simple." />
                <meta name="twitter:image" content={`${originUrl}/home-card.jpg`} />

                <link rel="canonical" href="https://alldone.app/" />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
            </Head>

            {!loaded ? (
                <div />
            ) : (
                <div className={'overflow-x-hidden'}>
                    {children}

                    <CookieClickerPopup />
                </div>
            )}
        </div>
    )
}

const contactPoint = [
    {
        '@type': 'ContactPoint',
        name: 'Karsten Wysk',
        email: 'Karsten@AllDone.app',
        contactType: 'contact email',
    },
]

const founder = {
    '@type': 'Person',
    name: 'Karsten Wysk',
    givenName: 'Karsten',
    familyName: 'Wysk',
    gender: 'Male',
    contactPoint: contactPoint,
}

const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Alldone',
    image: ['https://staging.alldone.app/favicon.png', 'https://staging.alldone.app/home-card.jpg'],
    abstract: 'Alldone, the next gen collaboration tool that makes the team productivity simpler.',
    slogan: 'Alldone, the next gen collaboration tool that makes the team productivity simpler.',
    url: 'Https://alldone.app',
    logo: 'https://staging.alldone.app/favicon.png',
    applicationCategory: 'BusinessApplication',
    browserRequirements: 'Modern Browser',
    offers: [
        {
            '@type': 'Offer',
            price: 0,
            priceCurrency: 'EUR',
        },
    ],
    operatingSystem: 'iOS, Android, Windows, Linux, Web Browser',
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingCount: 1,
        reviewCount: 1,
        ratingValue: 5,
    },
    vatID: 'DE334674051',
    author: {
        '@type': 'Organization',
        name: 'Alldone GmbH',
        legalName: 'Alldone GmbH',
        image: ['https://staging.alldone.app/favicon.png', 'https://staging.alldone.app/home-card.jpg'],
        url: 'https://alldone.app/',
        logo: 'https://staging.alldone.app/favicon.png',
        telephone: '+12122459600',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Neue Schönhauser Strasse 9',
            addressLocality: 'Berlin',
            addressRegion: 'Berlin',
            postalCode: '10178',
            addressCountry: 'DE',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 52.52483091154941,
            longitude: 13.40383158049335,
        },
        founder: founder,
        foundingDate: '2020-01-01',
        contactPoint: contactPoint,
    },
}
