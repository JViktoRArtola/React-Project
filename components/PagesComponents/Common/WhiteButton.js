import Button from './Button'

export default function WhiteButton({ customClass = '', ...props }) {
    return (
        <Button customClass={`text-Primary100 bg-white hover:bg-Gray200 active:bg-Gray300 ${customClass}`} {...props} />
    )
}
