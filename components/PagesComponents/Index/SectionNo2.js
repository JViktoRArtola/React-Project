import Image from 'next/image'
import characterImage from '../../../public/images/pages/index/2nd_section/character.png'
import commentImage from '../../../public/images/pages/index/2nd_section/comment-shape.svg'
import commentMobileImage from '../../../public/images/pages/index/2nd_section/comment-shape-mobile.svg'

export default function SectionNo2({}) {
    return (
        <div className={'xl:container mx-auto'}>
            <div className={'xl:px-60 lg:px-40 sm:px-10 px-4 pt-44'}>
                <div className={'flex item-center flex-col md:flex-row md:justify-between pb-52'}>
                    <div className={'flex flex-col items-center md:flex-row md:w-1/2'}>
                        <div
                            className={
                                'bg-index-comment-2nd-mobile bg-no-repeat bg-contain flex justify-center items-center md:hidden bg-center pb-5'
                            }
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <Image
                                src={commentMobileImage}
                                alt="People discussing"
                                width={342}
                                height={196}
                                className={'invisible'}
                                priority={true}
                            />
                            <h2
                                className={'absolute text-3xl font-medium leading-normal text-Secondary300 text-center'}
                            >
                                So, why should <br /> I use Alldone.app?
                            </h2>
                        </div>

                        <Image
                            src={characterImage}
                            alt="People discussing"
                            width={440}
                            height={600}
                            className={'object-contain'}
                            priority={true}
                            data-aos="fade-right"
                            data-aos-delay="100"
                        />
                    </div>
                    <div className={'flex flex-col relative items-center flex-shrink-0 md:w-1/2'}>
                        <div
                            className={
                                'hidden md:flex relative left-[-50px] xl:left-[-20px] 2xl:left-[-50px] w-[35vw] 2xl:w-auto'
                            }
                        >
                            <div
                                className={
                                    'bg-index-comment-2nd bg-no-repeat bg-contain flex justify-center items-center'
                                }
                                data-aos="zoom-in"
                                data-aos-delay="400"
                            >
                                <Image
                                    src={commentImage}
                                    alt="People discussing"
                                    width={510}
                                    height={142}
                                    className={'invisible'}
                                    priority={true}
                                />
                                <h2
                                    className={
                                        'absolute text-[2vw] 2xl:text-3xl font-medium leading-normal text-Secondary300 text-center'
                                    }
                                >
                                    So, why should <br /> I use Alldone.app?
                                </h2>
                            </div>
                        </div>

                        <div className={'flex flex-col md:pl-12 max-w-lg md:max-w-max'}>
                            <span
                                className={
                                    'w-auto inline-block object-contain text-2xl font-medium leading-normal text-Secondary300 pt-16'
                                }
                                data-aos="fade-left"
                                data-aos-delay="700"
                            >
                                <mark
                                    className={
                                        'no-mark ml-[-0.5rem] p-2 bg-index-highlight-yellow-2nd bg-center bg-no-repeat text-Secondary300'
                                    }
                                >
                                    Save time
                                </mark>{' '}
                                organizing work with easy-to-use All-In-One tool
                            </span>

                            <span
                                className={
                                    'w-auto inline-block object-contain text-2xl font-medium leading-normal text-Secondary300 pt-14'
                                }
                                data-aos="fade-left"
                                data-aos-delay="900"
                            >
                                <mark
                                    className={
                                        'no-mark ml-[-0.5rem] p-2 bg-index-highlight-orange-2nd bg-center bg-no-repeat text-Secondary300'
                                    }
                                >
                                    Boost team productivity
                                </mark>{' '}
                                by leveraging past work
                            </span>

                            <span
                                className={
                                    'w-auto inline-block object-contain text-2xl font-medium leading-normal text-Secondary300 pt-14'
                                }
                                data-aos="fade-left"
                                data-aos-delay="1100"
                            >
                                <mark
                                    className={
                                        'no-mark ml-[-0.5rem] p-2 bg-index-highlight-green-2nd bg-no-repeat text-Secondary300'
                                    }
                                >
                                    Increase team morale
                                </mark>{' '}
                                by making work feel like a multiplayer game
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
