import { useState } from 'react'
import SquareCard from '../Common/SquareCard'
import Image from 'next/image'
import characterImage from '../../../public/images/pages/index/4th_section/character.png'
import characterMobileImage from '../../../public/images/pages/index/4th_section/character-mobile.png'
import commentImage from '../../../public/images/pages/index/4th_section/comment-shape.svg'
import commentMobileImage from '../../../public/images/pages/index/4th_section/comment-shape-mobile.svg'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export default function SectionNo4({}) {
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

    return (
        <div className={'xl:container mx-auto'}>
            <div className={'xl:px-60 lg:px-40 sm:px-10 px-4'}>
                {' '}
                {/* pt-44 */}
                <div className={'flex flex-col items-center pb-52'}>
                    <div
                        className={
                            'flex relative z-10 left-[-50px] xl:left-[-20px] 2xl:left-[-50px] w-auto md:w-[42vw] 2xl:w-auto'
                        }
                        data-aos="fade-down-left"
                        data-aos-delay="700"
                    >
                        <div
                            className={`relative left-16 top-10 bg-index-comment-4th-mobile md:bg-index-comment-4th 
                                bg-no-repeat bg-contain flex justify-center items-center`}
                        >
                            <span className={'hidden md:invisible md:inline'}>
                                <Image src={commentImage} alt="Comment bubble" />
                            </span>
                            <span className={'invisible md:hidden'}>
                                <Image src={commentMobileImage} alt="Comment bubble" />
                            </span>

                            <h2
                                className={`absolute text-3xl md:text-[2vw] 2xl:text-3xl font-medium leading-tight 
                                    2xl:leading-tight text-Secondary300 text-center px-4 pb-4 md:pb-0 md:px-12 lg:px-16`}
                            >
                                <mark
                                    className={`no-mark p-2 md:p-[0.5vw] bg-index-highlight-pink-4th 
                                        bg-contain bg-center bg-no-repeat text-Secondary300`}
                                >
                                    Save time
                                </mark>{' '}
                                organizing your work with easy to use All-In-One tool
                            </h2>
                        </div>
                    </div>

                    <div className={'w-full relative flex items-center pt-[350px] md:pt-0'}>
                        <span
                            className={'hidden md:inline absolute top-0 left-0 2xl:left-12 w-[305px] h-auto'}
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >
                            <Image src={characterImage} alt="Person character" priority={true} />
                        </span>
                        <span
                            className={'md:hidden absolute top-0 left-[calc(50%-152px)] 2xl:left-12 w-[305px] h-auto'}
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >
                            <Image src={characterMobileImage} alt="Person character" priority={true} />
                        </span>

                        <div ref={sliderRef} className={'keen-slider md:!hidden'}>
                            <div className={'keen-slider__slide p-6'}>
                                <SquareCard
                                    featureName={'Tasks'}
                                    featureSlogan={'Prioritise your day'}
                                    imageName={'tasks'}
                                    imageAlt={'Tasks - Prioritise your day'}
                                    cardStyle={'md:col-start-2 min-w-full'}
                                    data-aos="zoom-in"
                                    data-aos-delay="900"
                                />
                            </div>
                            <div className={'keen-slider__slide p-6'}>
                                <SquareCard
                                    featureName={'Goals'}
                                    featureSlogan={'Roadmap for the team'}
                                    imageName={'goals'}
                                    imageAlt={'Goals -Roadmap for the team'}
                                    cardStyle={'min-w-full'}
                                    data-aos="zoom-in"
                                    data-aos-delay="1100"
                                />
                            </div>
                            <div className={'keen-slider__slide p-6'}>
                                <SquareCard
                                    featureName={'Notes'}
                                    featureSlogan={'Organize knowledge'}
                                    imageName={'notes'}
                                    imageAlt={'Notes - Organize knowledge'}
                                    cardStyle={'min-w-full'}
                                    data-aos="zoom-in"
                                    data-aos-delay="1300"
                                />
                            </div>
                            <div className={'keen-slider__slide p-6'}>
                                <SquareCard
                                    featureName={'Contacts'}
                                    featureSlogan={'Manage relationships'}
                                    imageName={'contacts'}
                                    imageAlt={'Contacts - Manage relationships'}
                                    cardStyle={'min-w-full'}
                                    data-aos="zoom-in"
                                    data-aos-delay="1500"
                                />
                            </div>
                            <div className={'keen-slider__slide p-6'}>
                                <SquareCard
                                    featureName={'Chats'}
                                    featureSlogan={'Talk and collaborate'}
                                    imageName={'chat'}
                                    imageAlt={'Chats - Talk and collaborate'}
                                    cardStyle={'min-w-full'}
                                    data-aos="zoom-in"
                                    data-aos-delay="1700"
                                />
                            </div>
                        </div>

                        <div className={`hidden p-6 md:grid md:grid-cols-3 w-full gap-8 `}>
                            <SquareCard
                                featureName={'Tasks'}
                                featureSlogan={'Prioritise your day'}
                                imageName={'tasks'}
                                imageAlt={'Tasks - Prioritise your day'}
                                cardStyle={'md:col-start-2 min-w-full'}
                                data-aos="zoom-in"
                                data-aos-delay="900"
                            />
                            <SquareCard
                                featureName={'Goals'}
                                featureSlogan={'Roadmap for the team'}
                                imageName={'goals'}
                                imageAlt={'Goals -Roadmap for the team'}
                                cardStyle={'min-w-full'}
                                data-aos="zoom-in"
                                data-aos-delay="1100"
                            />
                            <SquareCard
                                featureName={'Notes'}
                                featureSlogan={'Organize knowledge'}
                                imageName={'notes'}
                                imageAlt={'Notes - Organize knowledge'}
                                cardStyle={'min-w-full'}
                                data-aos="zoom-in"
                                data-aos-delay="1300"
                            />
                            <SquareCard
                                featureName={'Contacts'}
                                featureSlogan={'Manage relationships'}
                                imageName={'contacts'}
                                imageAlt={'Contacts - Manage relationships'}
                                cardStyle={'min-w-full'}
                                data-aos="zoom-in"
                                data-aos-delay="1500"
                            />
                            <SquareCard
                                featureName={'Chats'}
                                featureSlogan={'Talk and collaborate'}
                                imageName={'chat'}
                                imageAlt={'Chats - Talk and collaborate'}
                                cardStyle={'min-w-full'}
                                data-aos="zoom-in"
                                data-aos-delay="1700"
                            />
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
