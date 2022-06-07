export default function Subsection({ title, text }) {
    return (
        <div className={'w-full'}>
            <h3 className={'text-2xl text-Text02 font-medium mt-10 mb-3'}>{title}</h3>
            {text &&
                text.split('\n').map((text, i) => (
                    <p
                        key={i}
                        className={`text-base text-Text01 font-normal leading-relaxed mb-5 ${
                            text.startsWith('\t') ? 'pl-8' : ''
                        }`}
                    >
                        {text}
                    </p>
                ))}
        </div>
    )
}

// container: {
//     marginTop: 64,
// },
// title: {
//     fontFamily: 'Roboto-Medium',
//     fontWeight: '500',
//     fontSize: 24,
//     lineHeight: 32,
//     color: colors.Text02,
// },
// text: {
//     marginTop: 16,
// },
