import React, { useState } from 'react'

const Dropdown = ({
    options = [],
    defaultOption = 0,
    onChange,
    width = 'w-full',
    cssClasses = '',
}) => {
    // console.log(options)
    
    const handleOptionChange = (optionChangeEvent) => {
        const selectedOption = optionChangeEvent.target.value
        onChange(selectedOption);
    }

    return (
        <select
            onChange={handleOptionChange}
            defaultValue={defaultOption}
            className={`block ${width} border border-gray-300 px-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${cssClasses}`}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default Dropdown
