import CommunityNoteCard from '../Common/CommunityNoteCard'
import Image from 'next/image'
import characterImage from '../../../public/images/pages/index/5th_section/character.png'
import commentImage from '../../../public/images/pages/index/5th_section/comment-shape.svg'
import commentMobileImage from '../../../public/images/pages/index/5th_section/comment-shape-mobile.svg'
import { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'

export default function SectionNo5({ communityNotes = [] }) {
    const [origin, setOrigin] = useState('')
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            initial: 0,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            created() {
                setLoaded(true)
            },
        },
        [] // add plugins here
    )

    useEffect(() => {
        setOrigin(window.origin)
    }, [])

    return (
        <div className={'xl:container mx-auto'}>
            <div className={'xl:px-60 lg:px-40 sm:px-10 px-4 md:pt-16'}>
                <div className={'flex flex-col items-center pb-52'}>
                    <div className={'flex w-auto md:w-[42vw] 2xl:w-auto'} data-aos="fade-right" data-aos-delay="500">
                        <div
                            className={`z-10 bg-index-comment-5th-mobile md:bg-index-comment-5th 
                                md:w-[42vw] 2xl:w-auto 
                                relative md:right-[50px] lg:right-[100px] xl:right-[70px] 2xl:right-0 
                                md:-top-20 lg:-top-14
                                bg-no-repeat bg-contain flex justify-center items-center`}
                        >
                            <span className={'hidden md:invisible md:inline'}>
                                <Image src={commentImage} alt="Comment bubble" />
                            </span>
                            <span className={'invisible md:hidden'}>
                                <Image src={commentMobileImage} alt="Comment bubble" />
                            </span>

                            <h2
                                className={`absolute text-3xl md:text-[2.5vw] xl:text-3xl font-medium leading-tight 
                                    max-w-[340px] md:max-w-max md:left-[35px]
                                    2xl:leading-tight text-Secondary300 text-center px-4 pb-6 md:pt-8`}
                            >
                                <mark
                                    className={`no-mark p-2 md:p-[0.5vw] bg-index-highlight-violet-5th 
                                        bg-contain bg-center bg-no-repeat text-Secondary300`}
                                >
                                    Boost productivity
                                </mark>
                                <br className={'hidden md:inline'} />
                                by leveraging past work
                            </h2>
                        </div>
                    </div>

                    <div className={'w-full relative flex items-center pt-[275px] md:pt-0'}>
                        <span
                            className={
                                'absolute top-0 md:-top-64 left-[calc(50%-130px)] md:left-[calc(100%-320px)] w-[320px] h-auto'
                            }
                            data-aos="fade-left"
                            data-aos-delay="100"
                        >
                            <Image src={characterImage} alt="Person character" priority={true} />
                        </span>

                        <div ref={sliderRef} className={'keen-slider md:!hidden'}>
                            {communityNotes.map((note, index) => (
                                <div key={index} className={'keen-slider__slide p-6'}>
                                    <CommunityNoteCard
                                        authorName={note.creatorData.displayName}
                                        authorRole={note.creatorData.role}
                                        authorPhoto={note.creatorData.photoURL}
                                        photoAlt={note.creatorData.displayName}
                                        noteTitle={note.title}
                                        noteDescription={note.preview.substr(0, 150)}
                                        downloadsAmount={note.downloads}
                                        viewsAmount={note.views}
                                        subscribersAmount={note.followersIds?.length || 0}
                                        cardStyle={'min-w-full'}
                                        downloadLink={`${origin}/community/${note.communityId}/notes/${note.id}/editor`}
                                        data-aos="fade-up"
                                        data-aos-delay="700"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className={`hidden md:flex flex-col p-6 w-full gap-8 z-10`}>
                            {communityNotes.map((note, index) => (
                                <CommunityNoteCard
                                    key={index}
                                    authorName={note.creatorData.displayName}
                                    authorRole={note.creatorData.role}
                                    authorPhoto={note.creatorData.photoURL}
                                    photoAlt={note.creatorData.displayName}
                                    noteTitle={note.title}
                                    noteDescription={note.preview.substr(0, 150)}
                                    downloadsAmount={note.downloads}
                                    viewsAmount={note.views}
                                    subscribersAmount={note.followersIds?.length || 0}
                                    cardStyle={'min-w-full'}
                                    // downloadLink={`${origin}/community/${note.communityId}/notes/${note.id}/editor`}
                                    downloadLink={'login'}
                                    data-aos="fade-up"
                                    data-aos-delay="700"
                                />
                            ))}
                        </div>
                    </div>

                    {loaded && instanceRef.current && (
                        <div className={'md:hidden w-full flex justify-center pt-2'}>
                            {[...Array(instanceRef.current.track.details.slides.length).keys()].map(idx => {
                                return (
                                    <span
                                        key={idx}
                                        onClick={() => {
                                            instanceRef.current?.moveToIdx(idx)
                                        }}
                                        className={
                                            'w-6 h-6 mx-2 rounded-full active:bg-Gray300 ' +
                                            (currentSlide === idx ? ' bg-Primary100' : ' bg-Gray300')
                                        }
                                    />
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
