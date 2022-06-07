import Image from 'next/image'
import checkBlue from '../../../public/images/pages/index/7th_section/check-blue.svg'

export default function PlanCard({ planName, planDescription, planFeatures = [], buttonElement, cardStyle, ...props }) {
    return (
        <div
            className={`flex flex-col items-center justify-between bg-white px-8 py-6
                        rounded-2xl w-full drop-shadow-square-card ${cardStyle}`}
            {...props}
        >
            <div className={'flex flex-col items-center justify-start w-full'}>
                <h4 className={'text-Secondary400 font-bold text-4xl uppercase tracking-wider text-center'}>
                    {planName}
                </h4>
                <span className={'pt-4 text-Secondary100 font-medium text-2xl text-center h-[48px]'}>
                    {planDescription}
                </span>

                <div className={'flex flex-col gap-2 pt-8 w-full'}>
                    {planFeatures.map((feature, index) => (
                        <FeatureItem key={index} feature={feature} />
                    ))}
                </div>
            </div>

            <div>{buttonElement && <div className={'pt-8'}>{buttonElement}</div>}</div>
        </div>
    )
}

function FeatureItem({ feature }) {
    return (
        <div className={'flex flex-row justify-start w-full items-center'}>
            <Image src={checkBlue} alt={'Check mark blue'} priority={true} />
            <p className={'pl-3 text-Secondary400 text-xl font-medium'}>{feature}</p>
        </div>
    )
}
