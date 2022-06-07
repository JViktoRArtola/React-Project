import Image from 'next/image'
import BackButton from '../Impressum/BackButton'
import euImage from '../../../public/images/pages/index/footer_section/eu_flag.svg'
import euMobileImage from '../../../public/images/pages/index/footer_section/eu_flag-mobile.svg'

export default function Content({}) {
    return (
        <div className={'xl:container mx-auto'}>
            <div className={'xl:px-60 lg:px-40 sm:px-10 px-4'}>
                <div className={'flex flex-col items-center flex-col py-[100px]'}>
                    <div className={'w-full pb-14'}>
                        <span className={'hidden md:inline'}>
                            <Image src={euImage} alt="European Union" width={497} height={128} priority={true} />
                        </span>
                        <span className={'md:hidden'}>
                            <Image src={euMobileImage} alt="European Union" width={327} height={234} priority={true} />
                        </span>
                    </div>

                    <div>
                        <h3 className={'text-[2rem] text-Text01 font-medium pb-4 leading-none'}>
                            Dieses Projekt wird von EFRE gefördert
                        </h3>
                        <p className={'text-base text-Text01 font-normal'}>
                            Die Förderung unterstützt uns dabei, neue Maßnahmen für Alldone umzusetzen. Das beinhaltet
                            neue Features rund um die Themen Goals, Contacts, den Alldone Assistant sowie weitere
                            Features. Weitere Infos hier:{' '}
                            <a
                                className={'text-Primary100'}
                                href="https://efre.brandenburg.de/efre/de/"
                                target={'_blank'}
                            >
                                https://efre.brandenburg.de/efre/de/
                            </a>
                        </p>
                    </div>

                    <div className={'flex flex-col items-center'}>
                        <BackButton customClass={'mt-14'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
