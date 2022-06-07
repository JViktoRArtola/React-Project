import Image from 'next/image'
import characterImage from '../../../public/images/pages/index/3rd_section/character.png'
import characterMobileImage from '../../../public/images/pages/index/3rd_section/character-mobile.png'
import commentImage from '../../../public/images/pages/index/3rd_section/comment-shape.svg'
import commentMobileImage from '../../../public/images/pages/index/3rd_section/comment-shape-mobile.svg'

export default function SectionNo3({}) {
    return (
        <div
            className={'bg-index-shape-3rd bg-no-repeat bg-cover bg-bottom'}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500"
        >
            <div className={'xl:container mx-auto'}>
                <div className={'xl:px-60 lg:px-40 sm:px-10 px-4 pt-32 md:pt-0 pb-32'}>
                    {/* Desktop version */}
                    <div className={'hidden md:flex relative flex-col justify-center'}>
                        <span
                            className={`bg-index-comment-3rd bg-no-repeat bg-contain relative self-end top-24 2xl:right-8`}
                            data-aos="fade-up"
                            data-aos-delay="1300"
                        >
                            <Image src={commentImage} alt="Comment bubble" className={'invisible'} />
                            <h2
                                className={
                                    'absolute text-3xl top-10 left-20 font-medium leading-tight text-Secondary300 text-center'
                                }
                            >
                                Watch a 2-minute <br /> video of Alldone.app
                            </h2>
                        </span>

                        <div className={'relative'} data-aos="fade-left" data-aos-delay="500">
                            <Image src={characterImage} alt="Video about alldone" priority={true} />

                            <video
                                className={'absolute top-[8.6%] left-[7.4%]'}
                                style={{ width: '69%', height: '57%' }}
                                src="https://cdn.videvo.net/videvo_files/video/free/2013-07/large_watermarked/hd0051_preview.mp4"
                                controls={true}
                            />
                        </div>
                    </div>

                    {/* Mobile version */}
                    <div className={'flex md:hidden flex-col justify-center items-center'}>
                        <span
                            className={`bg-index-comment-3rd-mobile bg-no-repeat bg-contain relative w-full max-w-[400px] md:max-w-max`}
                            data-aos="fade-down-right"
                            data-aos-delay="1500"
                        >
                            <Image src={commentMobileImage} alt="Comment bubble" className={'invisible w-full'} />
                            <h2
                                className={
                                    'absolute text-3xl top-[20%] left-[15%] md:text-[7vw] md:top-[10vw] md:left-[12vw] font-medium leading-tight text-Secondary300 text-center'
                                }
                            >
                                Watch a 2-minute <br /> video of Alldone.app
                            </h2>
                        </span>

                        <div className={'relative'} data-aos="fade-left" data-aos-delay="500">
                            <Image src={characterMobileImage} alt="Video about alldone" priority={true} />

                            <video
                                className={'absolute top-[46.9%] left-[8.9%]'}
                                style={{ width: '82.7%', height: '33%' }}
                                src="https://cdn.videvo.net/videvo_files/video/free/2013-07/large_watermarked/hd0051_preview.mp4"
                                controls={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
