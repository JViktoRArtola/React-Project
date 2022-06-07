import Button from './Button'

export default function BlueButton({ customClass = '', ...props }) {
    return <Button customClass={`text-white bg-Primary100 hover:bg-Primary300 active:bg-Primary400 ${customClass}`} {...props} />
}
