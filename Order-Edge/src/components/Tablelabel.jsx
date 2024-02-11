import React from 'react'

function Tablelabel({ label, labelFor, cssClasses = '', ...rest }) {
    return (
        <div className='ml-20'>
            <label
                htmlFor={labelFor}
                className={`text-2xl font-bold shadow-md underline underline-offset-4 ${cssClasses}`}
                {...rest}>
                {label}
            </label>
        </div>
    )
}

export default Tablelabel
