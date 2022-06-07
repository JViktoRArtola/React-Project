import Head from 'next/head'
import PageLayout from '../components/Layout/PageLayout'
import SectionTop from '../components/PagesComponents/Impressum/SectionTop'
import Content from '../components/PagesComponents/Efre/Content'
import SectionFooter from '../components/PagesComponents/Index/SectionFooter'

export default function Terms({}) {
    return (
        <PageLayout>
            <Head>
                <title key="title">Alldone.app - Förderung</title>
                <meta
                    key="keywords"
                    name="keywords"
                    content="Alldone, Alldone.app, Förderung, Europaische Union, Europaischer Sozialfonds"
                />
                <meta
                    key="description"
                    name="description"
                    content="Alldone.app project is funded by the European Regional Development Fund and the State of Brandenburg."
                />
                <meta key="og-title" property="og:title" content="Alldone.app - Förderung" />
                <meta
                    key="og-description"
                    property="og:description"
                    content="Alldone.app project is funded by the European Regional Development Fund and the State of Brandenburg."
                />
                <meta key="og-url" property="og:url" content="https://alldone.app/efre" />
                <meta key="twitter-title" name="twitter:title" content="Alldone.app - Förderung" />
                <meta
                    key="twitter-description"
                    name="twitter:description"
                    content="Alldone.app project is funded by the European Regional Development Fund and the State of Brandenburg."
                />
            </Head>

            <SectionTop
                title={'Förderung'}
                subTitle={
                    'Our project is funded by the European Regional Development Fund and the State of Brandenburg'
                }
                isEfre={true}
            />
            <Content />
            <SectionFooter />
        </PageLayout>
    )
}
