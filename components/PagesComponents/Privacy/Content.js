import { privacyData } from './PrivacyData'
import Subsection from '../Terms/Subsection'
import BackButton from '../Impressum/BackButton'

export default function Content({}) {
    const { subSections } = privacyData

    return (
        <div className={'xl:container mx-auto'}>
            <div className={'xl:px-60 lg:px-40 sm:px-10 px-4'}>
                <div className={'flex flex-col items-center flex-col pt-[60px] pb-[100px]'}>
                    {subSections.map(({ title, text }, index) => (
                        <Subsection key={index} title={title} text={text} />
                    ))}

                    <div className={'flex flex-col items-center'}>
                        <BackButton customClass={'mt-14'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
