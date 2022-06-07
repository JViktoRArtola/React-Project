import Head from 'next/head'
import PageLayout from '../components/Layout/PageLayout'
import SectionTop from '../components/PagesComponents/Impressum/SectionTop'
import Content from '../components/PagesComponents/Privacy/Content'
import SectionFooter from '../components/PagesComponents/Index/SectionFooter'

export default function Privacy({}) {
    return (
        <PageLayout>
            <Head>
                <title key="title">Alldone.app - Privacy Policy</title>
                <meta
                    key="keywords"
                    name="keywords"
                    content="Alldone, Alldone.app, Privacy Policy, Company information"
                />
                <meta
                    key="description"
                    name="description"
                    content="Page with rules of Privacy Policy of Alldone.app."
                />
                <meta key="og-title" property="og:title" content="Alldone.app - Privacy Policy" />
                <meta
                    key="og-description"
                    property="og:description"
                    content="Page with rules of Privacy Policy of Alldone.app."
                />
                <meta key="og-url" property="og:url" content="https://alldone.app/privacy" />
                <meta key="twitter-title" name="twitter:title" content="Alldone.app - Privacy Policy" />
                <meta
                    key="twitter-description"
                    name="twitter:description"
                    content="Page with rules of Privacy Policy of Alldone.app."
                />
            </Head>

            <SectionTop title={'Privacy Policy'} subTitle={'Effective date: 03/01/2021'} />
            <Content />
            <SectionFooter />
        </PageLayout>
    )
}
