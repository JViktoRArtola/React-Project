import axios from 'axios'
import PageLayout from '../components/Layout/PageLayout'
import SectionTop from '../components/PagesComponents/Index/SectionTop'
import SectionNo2 from '../components/PagesComponents/Index/SectionNo2'
import SectionNo3 from '../components/PagesComponents/Index/SectionNo3'
import SectionNo4 from '../components/PagesComponents/Index/SectionNo4'
import SectionNo5 from '../components/PagesComponents/Index/SectionNo5'
import SectionNo6 from '../components/PagesComponents/Index/SectionNo6'
import SectionNo7 from '../components/PagesComponents/Index/SectionNo7'
import SectionFooter from '../components/PagesComponents/Index/SectionFooter'

export default function Home({ communityNotes = [] }) {
    return (
        <PageLayout>
            <SectionTop />
            <SectionNo2 />
            {/*<SectionNo3 />*/}
            <SectionNo4 />
            <SectionNo5 communityNotes={communityNotes} />
            <SectionNo6 />
            <SectionNo7 />
            <SectionFooter />
        </PageLayout>
    )
}

export async function getStaticProps(context) {
    const notesIds = [
        { communityId: '-MczKH3XGJODc1VnbKs2', noteId: '-Ms0vVgOZo0JaaJnNX8c' },
        { communityId: '-MczKH3XGJODc1VnbKs2', noteId: '-Ms0vXA_K_bDq-Ypk9KY' },
        { communityId: '-MczKH3XGJODc1VnbKs2', noteId: '-Ms0u760-5AQvPiAnNcL' },
    ]
    const communityNotes = []

    const promises = notesIds.map(item => {
        return axios.post(`https://us-central1-alldonealeph.cloudfunctions.net/getCommunityNoteData`, { data: item })
    })

    // try {
        const dataGroup = await Promise.all(promises)

        for (let item of dataGroup) {
            communityNotes.push(item.data)
        }
    // } catch (e) {
    //     console.log(e.message)
    // }

    return {
        props: { communityNotes }, // will be passed to the page component as props
    }
}
