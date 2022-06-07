import Image from 'next/image'

export default function SquareCard({ featureName, featureSlogan, imageName, imageAlt, cardStyle, ...props }) {
    return (
        <div
            className={`flex flex-col items-center justify-center bg-white 
                        rounded-2xl max-w-[330px] min-h-[306px] w-full drop-shadow-square-card ${cardStyle}`}
            {...props}
        >
            <span className={'w-[140px] h-[140px]'}>
                <Image
                    src={`/images/pages/index/4th_section/cards/${imageName}.png`}
                    alt={imageAlt}
                    width={140}
                    height={140}
                    priority={true}
                />
            </span>
            <h4 className={'pt-2 text-Secondary200 font-medium text-3xl uppercase'}>{featureName}</h4>
            <span className={'pt-2 text-Secondary200 font-medium text-lg'}>{featureSlogan}</span>
        </div>
    )
}
