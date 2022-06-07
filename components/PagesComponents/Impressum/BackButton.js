import Link from 'next/link'
import BlueButton from '../Common/BlueButton'

export default function BackButton({ customClass }) {
    return (
        <Link href="/">
            <a>
                <BlueButton title={'Go back'} customClass={`px-4 py-[7px] text-lg max-h-[40px] ${customClass}`} />
            </a>
        </Link>
    )
}
