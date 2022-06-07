import Image from 'next/image'
import Link from 'next/link'
import iconUpImage from '../../../public/images/pages/index/footer_section/icon-arrow-up.png'
import euImage from '../../../public/images/pages/index/footer_section/eu_flag.svg'
import euMobileImage from '../../../public/images/pages/index/footer_section/eu_flag-mobile.svg'
import BlueButton from '../Common/BlueButton'

export default function SectionFooter({}) {
    const goToTop = () => {
        const SmoothScroll = require('smooth-scroll')
        const scroll = new SmoothScroll()
        let options = { easing: 'easeInOutQuad' }
        scroll.animateScroll(0, options)
    }

    return (
        <div className={'bg-index-shape-footer bg-no-repeat bg-cover bg-top'} data-aos="fade-down" data-aos-delay="100">
            <div className={'xl:container mx-auto'}>
                <div className={'xl:px-60 lg:px-40 sm:px-10 px-4 pt-[68px] md:pt-[136px]'}>
                    <div className={'flex flex-row items-start'}>
                        <div className={'flex flex-col md:flex-row-reverse flex-grow justify-between'}>
                            <div className={'flex flex-col items-start md:flex-row gap-6 md:gap-5 xl:gap-3 2xl:gap-6'}>
                                <div className={'flex items-center justify-center h-[48px] px-3'}>
                                    <Link href="/impressum">
                                        <a className={'text-Primary100 text-lg font-medium'}>Impressum</a>
                                    </Link>
                                </div>
                                <div className={'flex items-center justify-center h-[48px] px-3'}>
                                    <Link href="/privacy">
                                        <a className={'text-Primary100 text-lg font-medium'}>Privacy Policy</a>
                                    </Link>
                                </div>
                                <div className={'flex items-center justify-center h-[48px] px-3'}>
                                    <Link href="/terms">
                                        <a className={'text-Primary100 text-lg font-medium'}>Terms of Service</a>
                                    </Link>
                                </div>
                            </div>
                            <div className={'pl-[12px] md:pl-0 pt-8 md:pt-[11px]'}>
                                <Link href={'/efre'}>
                                    <a>
                                        <span className={'inline md:hidden xl:inline'}>
                                            <Image src={euImage} alt="European Union" priority={true} />
                                        </span>
                                        <span className={'hidden md:inline xl:hidden  !max-w-[155px]'}>
                                            <Image
                                                src={euMobileImage}
                                                alt="European Union"
                                                width={155}
                                                height={110}
                                                priority={true}
                                            />
                                        </span>
                                    </a>
                                </Link>
                                <p className={'text-UtilityBlue200 font-medium text-sm pt-[26px] pb-[35px]'}>
                                    ©AllDone GmbH 2020
                                </p>
                            </div>
                        </div>
                        <div className={'md:pl-8 xl:pl-6 2xl:pl-12'}>
                            <BlueButton
                                title={<Image src={iconUpImage} alt="Icon Up" />}
                                customClass={'!w-[48px] h-[48px] !p-[12px]'}
                                onClick={goToTop}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
