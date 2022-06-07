import { getServerSideSitemap } from 'next-sitemap'
import axios from 'axios'
const prod = process.env.VERCEL_ENV === 'production'

export const getServerSideProps = async ctx => {
    const server = prod ? 'alldonealeph' : 'alldonestaging'
    const origin = prod ? 'https://alldone.app' : 'https://staging.alldone.app'
    const notes =
        (await axios.get(`https://us-central1-${server}.cloudfunctions.net/getAlldoneCommunityNotesMeta`)).data || []

    const fields = notes.map(note => ({
        loc: `${origin}${note.pathname}`,
        changefreq: 'daily',
        priority: '0.5',
        lastmod: note.lastEditedUTC,
    }))

    return getServerSideSitemap(ctx, fields)
}

export default () => {}
