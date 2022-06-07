import Image from 'next/image'
import BlueButton from '../Common/BlueButton'
import { registerSignUpClick } from '../../../lib/gtag'

export default function CommunityNoteCard({
    authorName,
    authorRole,
    authorPhoto,
    photoAlt,
    noteTitle,
    noteDescription,
    downloadsAmount,
    viewsAmount,
    subscribersAmount,
    downloadLink,
    cardStyle,
    ...props
}) {
    return (
        <div
            className={`flex flex-col md:flex-row items-center justify-center bg-Grey100 
                        rounded-3xl pt-6 px-6 pb-4 w-full ${cardStyle}`}
            {...props}
        >
            <div
                className={'min-w-[160px] md:max-w-[160px] flex flex-col w-full md:w-auto items-start md:items-center'}
            >
                <span className={'w-[80px] h-[80px] rounded-full'}>
                    <Image
                        src={authorPhoto}
                        alt={photoAlt}
                        width={80}
                        height={80}
                        className={'rounded-full'}
                        priority={true}
                    />
                </span>
                <h4 className={'pt-3 text-Text01PrimaryOcclusion font-medium text-base'}>{authorName}</h4>
                <span className={'text-Text02 leading-loose text-sm text-left md:text-center'}>{authorRole}</span>
            </div>
            <div className={'ml-0 md:ml-6 mt-6 md:mt-0 flex-grow'}>
                <h2 className={'text-Text01PrimaryOcclusion font-medium text-2xl'}>{noteTitle}</h2>
                <p className={'pt-4 text-Text02 leading-loose text-sm'}>{noteDescription}</p>
                <div className={'pt-5 pb-2 flex flex-row justify-between items-end'}>
                    <div className={'flex flex-col md:flex-row'}>
                        <div
                            className={'text-Text02 text-xs uppercase leading-loose tracking-[1.5px]'}
                        >{`${downloadsAmount} Downloads`}</div>
                        <div className={'hidden md:inline-block text-Text02 leading-loose text-xs px-2'}>{'•'}</div>
                        <div
                            className={'text-Text02 text-xs uppercase leading-loose tracking-[1.5px]'}
                        >{`${viewsAmount} Views`}</div>
                        <div className={'hidden md:inline-block text-Text02 leading-loose text-xs px-2'}>{'•'}</div>
                        <div
                            className={'text-Text02 text-xs uppercase leading-loose tracking-[1.5px]'}
                        >{`${subscribersAmount} Subscribers`}</div>
                    </div>
                    <div>
                        <a href={downloadLink} target={'_blank'} onClick={registerSignUpClick}>
                            <BlueButton
                                title={'Download'}
                                customClass={'px-4 py-[7px] text-lg max-h-[40px]'}
                                onClick={() => {}}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
