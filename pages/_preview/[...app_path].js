import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import axios from 'axios'

export default function AppPath({ appPath, title, keywords, description }) {
    const [originUrl, setOriginUrl] = useState('')
    const router = useRouter()

    useEffect(() => {
        const { query } = router
        setOriginUrl(window.location.origin.replace('https', 'http'))
        router.push({ pathname: `/${query['app_path'].join('/')}`, query: { from_landing: true } })
    }, [])

    return (
        <Head>
            <title key="title">{title}</title>
            <meta key="keywords" name="keywords" content={`Alldone, Alldone.app, ${keywords}`} />
            <meta key="description" name="description" content={description} />
            <meta key="og-title" property="og:title" content={title} />
            <meta key="og-description" property="og:description" content={description} />
            <meta key="og-url" property="og:url" content={`https://alldone.app${appPath}`} />
            <meta key="twitter-title" name="twitter:title" content={title} />
            <meta key="twitter-description" name="twitter:description" content={description} />

            <link rel="icon" href="/favicon.png" />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover"
            />
            <meta name="author" content="Alldone GmbH" />
            <meta name="robots" content="index" />

            <meta property="og:locale" content="en_US" />
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
            <meta name="twitter:image" content={`${originUrl}/home-card.jpg`} />

            <link rel="canonical" href="https://alldone.app/" />
        </Head>
    )
}

export async function getServerSideProps(context) {
    const { url: urlPath } = context.req
    const prod = process.env.VERCEL_ENV === 'production'
    const functionProject = prod ? 'alldonealeph' : 'alldonestaging'

    let previewData

    try {
        previewData = (
            await axios.post(`https://us-central1-${functionProject}.cloudfunctions.net/getLinkPreviewData`, {
                data: { pathname: urlPath },
            })
        )?.data
    } catch (e) {
        console.log(e.message)
    }

    return {
        props: {
            appPath: urlPath,
            title: previewData?.title || 'Alldone.app',
            keywords: 'Alldone, Alldone.app, Project Management, Task Management, Collaboration Tool, Custom Keywords',
            description:
                previewData?.description ||
                'Alldone, the next gen collaboration tool that makes the team productivity simpler',
        }, // will be passed to the page component as props
    }
}
