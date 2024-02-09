import React from 'react'

function Tablelabel({ label, labelFor, className = '', ...rest }) {
    return (
        <div className='ml-20'>
            <label
                htmlFor={labelFor}
                className={`text-red-500 text-2xl ${className}`}
                {...rest}>
                {label}
            </label>
        </div>
    )
}

export default Tablelabel
