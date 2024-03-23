function Tablelabel({ label, labelFor, className = '', ...rest }) {
    return (
        <div className='ml-20'>
            <label
                htmlFor={labelFor}
                className={`text-2xl font-bold shadow-md underline underline-offset-4 ${className}`}
                {...rest}>
                {label}
            </label>
        </div>
    )
}

export default Tablelabel
