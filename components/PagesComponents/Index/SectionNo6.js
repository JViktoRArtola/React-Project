import Image from 'next/image'
import characterMobileImage from '../../../public/images/pages/index/6th_section/character-mobile.png'
import graphicImage from '../../../public/images/pages/index/6th_section/graphic.png'
import graphicMobileImage from '../../../public/images/pages/index/6th_section/graphic-mobile.png'
import commentImage from '../../../public/images/pages/index/6th_section/comment-shape.svg'
import commentMobileImage from '../../../public/images/pages/index/6th_section/comment-shape-mobile.svg'

export default function SectionNo6({}) {
    return (
        <div className={'xl:container mx-auto'}>
            <div className={'xl:px-60 lg:px-40 sm:px-10 px-4'}>
                <div className={'flex item-center relative flex-col md:pb-28'} data-aos="zoom-in" data-aos-delay="800">
                    <span
                        className={`bg-index-comment-6th-mobile md:bg-index-comment-6th bg-no-repeat bg-contain md:absolute 
                                 self-center md:top-[-75px] md:-right-4 2xl:top-[-40px] 2xl:right-7`}
                    >
                        <span className={'hidden md:invisible md:inline'}>
                            <Image src={commentImage} alt="Comment bubble" />
                        </span>
                        <span className={'invisible md:hidden'}>
                            <Image src={commentMobileImage} alt="Comment bubble" />
                        </span>
                        <h2
                            className={`font-medium leading-snug text-Secondary300 text-center
                                 absolute text-3xl top-10 left-[calc(50%-127px)] md:left-0 pt-2 px-0 md:px-16 max-w-[255px] md:max-w-full`}
                        >
                            <mark
                                className={`no-mark px-2 py-[3px] bg-index-highlight-red-6th 
                                        bg-cover bg-center bg-no-repeat text-Secondary300`}
                            >
                                Increase team
                            </mark>{' '}
                            <mark
                                className={`no-mark px-2 py-[3px] bg-index-highlight-red-6th 
                                        bg-cover bg-center bg-no-repeat text-Secondary300`}
                            >
                                morale
                            </mark>{' '}
                            by making work feel like a multiplayer game
                        </h2>
                    </span>
                </div>

                <div className={'flex item-center relative flex-col pb-52'}>
                    <span className={'hidden md:flex'} data-aos="zoom-in" data-aos-delay="100">
                        <Image src={graphicImage} alt="Alldone as a game" priority={true} />
                    </span>
                    <span
                        className={'flex md:hidden self-center max-w-[335px]'}
                        data-aos="fade-left"
                        data-aos-delay="100"
                    >
                        <Image src={characterMobileImage} alt="Characters" priority={true} />
                    </span>
                    <span
                        className={
                            'flex md:hidden self-center relative top-[-70px] left-[20px] min-w-[470px] max-w-[470px]'
                        }
                        data-aos="zoom-in"
                        data-aos-delay="800"
                    >
                        <Image src={graphicMobileImage} alt="Alldone as a game" priority={true} />
                    </span>

                    <GraphicStep
                        title={'Do'}
                        description={
                            'Do the tasks as productively as possible (as a team, using great workflows & the assistant)'
                        }
                        className={
                            'absolute top-[41%] right-[calc(50%-175px)] md:top-[7.4%] md:left-[34.5%] max-w-[180px] md:max-w-[187px]'
                        }
                        data-aos="fade-up"
                        data-aos-delay="850"
                    />

                    <GraphicStep
                        title={'Progress'}
                        description={'Earn Karma / XP for doing the tasks and build a reputation / level up'}
                        className={`absolute top-[70%] right-[calc(50%-175px)] md:right-0 md:top-[33.5%] 
                            xl:top-[33.3%] 2xl:top-[35.5%] md:left-[63%] max-w-[180px] md:max-w-[130px]`}
                        data-aos="fade-up"
                        data-aos-delay="900"
                    />

                    <GraphicStep
                        title={'Monitor'}
                        description={
                            'Check what’s going on across your projects via the team feed and create tasks as needed'
                        }
                        className={`absolute top-[56.2%] left-[calc(50%-165px)] md:right-0 md:top-0 md:top-[55%] lg:top-[55.5%] 
                            xl:top-[54%] 2xl:top-[58.2%] md:left-[33.5%] max-w-[180px] md:max-w-[230px]`}
                        data-aos="fade-up"
                        data-aos-delay="950"
                    />

                    <GraphicStep
                        title={'Prioritize'}
                        description={'Decide what’s important today every morning - driving your own agenda'}
                        className={`absolute top-[29%] left-[calc(50%-165px)] md:right-0 md:top-[31.3%] lg:top-[31.2%] 
                            xl:top-[30.2%] 2xl:top-[32.7%] md:left-[15%] max-w-[180px]`}
                        data-aos="fade-up"
                        data-aos-delay="1000"
                    />

                    <GraphicStep
                        title={'Win'}
                        description={'Reach empty (task) inbox at the end of the day'}
                        className={`absolute top-[83%] left-[calc(50%-165px)] md:right-0 md:top-0 md:top-[55%] lg:top-[55.5%]  
                            xl:top-[54%] 2xl:top-[58.2%] md:left-[79%] max-w-[180px] md:max-w-[134px]`}
                        data-aos="fade-up"
                        data-aos-delay="1050"
                    />
                </div>
            </div>
        </div>
    )
}

function GraphicStep({ title, description, className, ...props }) {
    return (
        <div className={className} {...props}>
            <h3 className={'text-Text01 text-2xl font-medium text-center md:text-left'}>{title}</h3>
            <p
                className={`text-Text02 text-center md:text-left text-base md:text-sm leading-normal 
                    md:leading-snug lg:leading-normal xl:leading-relaxed 2xl:leading-loose pt-3`}
            >
                {description}
            </p>
        </div>
    )
}
