import React from 'react'

const Dropdown = ({ options=[], defaultOption= "Select Status", onChange }) => {
    console.log(options)
    const handleOptionChange = (e) => {
        const selectedOption = e.target.value
        // onChange(selectedOption);
    }

    return (
        <select
            onChange={handleOptionChange}
            defaultValue={defaultOption}
            className='block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default Dropdown
