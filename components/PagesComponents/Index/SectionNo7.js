import Image from 'next/image'
import Link from 'next/link'
import characterImage from '../../../public/images/pages/index/7th_section/character.png'
import commentImage from '../../../public/images/pages/index/7th_section/comment-shape.svg'
import commentMobileImage from '../../../public/images/pages/index/7th_section/comment-shape-mobile.svg'
import PlanCard from '../Common/PlanCard'
import WhiteButton from '../Common/WhiteButton'
import BlueButton from '../Common/BlueButton'
import { registerSignUpClick } from "../../../lib/gtag";

export default function SectionNo7({}) {
    return (
        <div className={'xl:container mx-auto'}>
            <div className={'xl:px-60 lg:px-40 sm:px-10 px-4'}>
                <div
                    className={'flex item-center relative flex-col md:pb-28'}
                    data-aos="fade-left"
                    data-aos-delay="400"
                >
                    <span
                        className={`bg-index-comment-7th-mobile md:bg-index-comment-7th bg-no-repeat bg-contain md:absolute 
                                 self-center md:top-[-75px] md:-right-4 2xl:right-7`}
                    >
                        <span className={'hidden md:invisible md:inline'}>
                            <Image src={commentImage} alt="Comment bubble" />
                        </span>
                        <span className={'invisible md:hidden'}>
                            <Image src={commentMobileImage} alt="Comment bubble" />
                        </span>
                        <h2
                            className={`font-medium leading-snug text-Secondary300 text-center
                                 absolute text-3xl top-8 left-[calc(50%-127px)] md:left-0 px-0 md:pl-24 md:pr-16 max-w-[255px] md:max-w-full`}
                        >
                            That should not be cheap ... oh wait
                        </h2>
                    </span>
                </div>

                <div
                    className={
                        'flex item-center relative flex-col md:flex-row gap-4 md:gap-16 pt-[20rem] md:pt-[12.2rem] pb-52'
                    }
                >
                    <span
                        className={
                            'absolute -top-14 md:-top-44 right-[calc(50%-250px)] md:right-[270px] 2xl:right-[calc(50%-190px)] w-[500px] h-auto'
                        }
                        data-aos="zoom-in-up"
                        data-aos-delay="100"
                    >
                        <Image src={characterImage} alt="Character" priority={true} />
                    </span>

                    <PlanCard
                        planName={'Free'}
                        planDescription={'limited by usage, not features'}
                        planFeatures={['All features unlocked', 'Light / fair usage in a month']}
                        buttonElement={
                            <Link href={'/login'}>
                                <a onClick={registerSignUpClick}>
                                    <WhiteButton
                                        title={'Get started'}
                                        onClick={() => {}}
                                        customClass={'px-4 py-[7px] text-lg max-h-[40px]'}
                                    />
                                </a>
                            </Link>
                        }
                        data-aos="fade-right"
                        data-aos-delay="500"
                        data-aos-duration="500"
                    />
                    <PlanCard
                        planName={'Premium'}
                        planDescription={'USD 4.90 per month  / user'}
                        planFeatures={['All features unlocked', 'No usage limits']}
                        buttonElement={
                            <Link href={'/login'}>
                                <a onClick={registerSignUpClick}>
                                    <BlueButton
                                        title={'Go Premium'}
                                        onClick={() => {}}
                                        customClass={'px-4 py-[7px] text-lg max-h-[40px]'}
                                    />
                                </a>
                            </Link>
                        }
                        data-aos="fade-left"
                        data-aos-delay="500"
                        data-aos-duration="500"
                    />
                </div>
            </div>
        </div>
    )
}
