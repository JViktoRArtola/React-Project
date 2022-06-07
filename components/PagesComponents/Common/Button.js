export default function Button({ title, disabled = false, onClick, customClass = '' }) {
    return (
        <button
            className={`font-medium text-xl 
                        rounded-xl px-6 py-2.5 drop-shadow-square-card  
                        ${customClass}`}
            style={{ width: 'fit-content' }}
            disabled={disabled}
            onClick={onClick}
        >
            {title}
        </button>
    )
}
