import { useState } from 'react'

const Dropdown = ({
    options = [],
    defaultOption = 0,
    onChangeHandler,
    width = 'w-full',
    cssClasses = '',
}) => {
    return (
        <select
            onChange={onChangeHandler}
            defaultValue={defaultOption}
            className={`block ${width} border border-gray-300 px-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${cssClasses}`}>
            {options.map((option, index) => (
                <option key={index} value={option.orderStatus}>
                    {option.displayValue}
                </option>
            ))}
        </select>
    )
}

export default Dropdown
