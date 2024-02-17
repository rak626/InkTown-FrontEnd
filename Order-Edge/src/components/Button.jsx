import React from 'react'

const Button = ({
    children,
    onClickHandler,
    className = '',
    isDisabled = false,
    ...rest
}) => {
    return (
        <button
            onClick={onClickHandler}
            disabled={isDisabled}
            className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
            {...rest}>
            {children}
        </button>
    )
}

export default Button
