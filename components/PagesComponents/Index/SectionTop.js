import BlueButton from '../Common/BlueButton'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '../../../public/images/common/logo-full.svg'
import characterImage from '../../../public/images/pages/index/top_section/character.png'
import { registerSignUpClick } from '../../../lib/gtag'

export default function SectionTop({}) {
    return (
        <div className={'bg-index-shape-top bg-no-repeat bg-auto md:bg-cover bg-bottom'}>
            <div className={'xl:container mx-auto'}>
                <div className={'xl:px-60 lg:px-40 sm:px-10 px-4 pt-24'}>
                    <div className={'flex justify-center md:flex-row md:justify-between'}>
                        <div className={'flex flex-col pr-4 min-w-[310px] max-w-lg w-max md:w-2/5'}>
                            <Image
                                src={logoImage}
                                alt="Alldone logo"
                                className={'max-w-[250px] h-auto'}
                                layout={'fixed'}
                                priority={true}
                                data-aos="zoom-in"
                                data-aos-duration="500"
                            />
                            <h1
                                className={'text-6xl font-black leading-none text-Text01 pt-10 pb-6 flex-nowrap'}
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                Level up your team
                            </h1>
                            <h3
                                className={'text-2xl font-medium leading-normal text-Secondary300 md:max-w-[268px]'}
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                Since all done is better than almost done
                            </h3>
                            <Link href={'/login'}>
                                <a data-aos="fade-up" data-aos-delay="900" onClick={registerSignUpClick}>
                                    <BlueButton title={'Get started for free'} customClass={'mt-12 mb-4'} />
                                </a>
                            </Link>
                            <p
                                className={'text-sm leading-normal tracking-wide text-Text01 md:max-w-[220px]'}
                                data-aos="fade-up"
                                data-aos-delay="1200"
                            >
                                I accept the{' '}
                                <Link href="/privacy">
                                    <a className={'text-Primary100'}>Privacy Policy</a>
                                </Link>{' '}
                                and the{' '}
                                <Link href="/terms">
                                    <a className={'text-Primary100'}>Terms of Service</a>
                                </Link>{' '}
                                and want to login with my Google account
                            </p>
                        </div>
                        <div className={'hidden md:flex justify-end md:w-3/5'}>
                            <Image
                                src={characterImage}
                                alt="People working"
                                className={'object-contain'}
                                priority={true}
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
