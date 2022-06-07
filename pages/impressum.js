import Head from 'next/head'
import PageLayout from '../components/Layout/PageLayout'
import SectionTop from '../components/PagesComponents/Impressum/SectionTop'
import Content from '../components/PagesComponents/Impressum/Content'
import SectionFooter from '../components/PagesComponents/Index/SectionFooter'

export default function Impressum({}) {
    return (
        <PageLayout>
            <Head>
                <title key="title">Alldone.app - Impressum</title>
                <meta key="keywords" name="keywords" content="Alldone, Alldone.app, Impressum, Company information" />
                <meta
                    key="description"
                    name="description"
                    content="Impressum page with information about Alldone GmbH company."
                />
                <meta key="og-title" property="og:title" content="Alldone.app - Impressum" />
                <meta
                    key="og-description"
                    property="og:description"
                    content="Impressum page with information about Alldone GmbH company."
                />
                <meta key="og-url" property="og:url" content="https://alldone.app/impressum" />
                <meta key="twitter-title" name="twitter:title" content="Alldone.app - Impressum" />
                <meta
                    key="twitter-description"
                    name="twitter:description"
                    content="Impressum page with information about Alldone GmbH company."
                />
            </Head>

            <SectionTop />
            <Content />
            <SectionFooter />
        </PageLayout>
    )
}
