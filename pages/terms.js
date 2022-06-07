import Head from 'next/head'
import PageLayout from '../components/Layout/PageLayout'
import SectionTop from '../components/PagesComponents/Impressum/SectionTop'
import Content from '../components/PagesComponents/Terms/Content'
import SectionFooter from '../components/PagesComponents/Index/SectionFooter'

export default function Terms({}) {
    return (
        <PageLayout>
            <Head>
                <title key="title">Alldone.app - Terms of Service</title>
                <meta
                    key="keywords"
                    name="keywords"
                    content="Alldone, Alldone.app, Terms of Service, Company information"
                />
                <meta
                    key="description"
                    name="description"
                    content="Page with rules of Terms of Service of Alldone.app."
                />
                <meta key="og-title" property="og:title" content="Alldone.app - Terms of Service" />
                <meta
                    key="og-description"
                    property="og:description"
                    content="Page with rules of Terms of Service of Alldone.app."
                />
                <meta key="og-url" property="og:url" content="https://alldone.app/terms" />
                <meta key="twitter-title" name="twitter:title" content="Alldone.app - Terms of Service" />
                <meta
                    key="twitter-description"
                    name="twitter:description"
                    content="Page with rules of Terms of Service of Alldone.app."
                />
            </Head>

            <SectionTop title={'Terms of Use'} subTitle={'Effective date: 03/01/2021'} />
            <Content />
            <SectionFooter />
        </PageLayout>
    )
}
