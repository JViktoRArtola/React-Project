import Image from 'next/image'
import docImage from '../../../public/images/pages/impressum/doc.png'
import megaphoneImage from '../../../public/images/pages/impressum/megaphone.png'
import BackButton from './BackButton'

export default function SectionTop({ title = 'Impressum', subTitle, isEfre = false }) {
    return (
        <div className={'bg-impressum-shape-top bg-no-repeat bg-auto md:bg-cover bg-bottom'}>
            <div className={'xl:container mx-auto'}>
                <div className={'xl:px-60 lg:px-40 sm:px-10 px-4'}>
                    <div className={'flex justify-center min-h-[490px] pt-16 pb-12'}>
                        <div className={'flex flex-col justify-between items-center'}>
                            <div className={'flex flex-col items-center'}>
                                <Image
                                    src={isEfre ? megaphoneImage : docImage}
                                    alt="Document"
                                    layout={'fixed'}
                                    priority={true}
                                />
                                <h1
                                    className={
                                        'text-6xl font-black leading-none text-Text01 pt-8 flex-nowrap text-center'
                                    }
                                >
                                    {title}
                                </h1>
                                {subTitle && (
                                    <h4 className={'text-2xl text-Secondary300 font-medium text-center pt-8'}>
                                        {subTitle}
                                    </h4>
                                )}
                            </div>
                            <div className={'flex flex-row items-center w-max'}>
                                <BackButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
