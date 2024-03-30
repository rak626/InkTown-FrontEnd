import PropTypes from 'prop-types'

const Dropdown = ({
    options = [],
    defaultOption = 0,
    onChangeHandler,
    width = 'w-full',
    className = '',
}) => {
    return (
        <select
            onChange={onChangeHandler}
            defaultValue={defaultOption}
            className={`block ${width} border border-gray-300 px-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${className}`}>
            {options.map((option, index) => (
                <option key={index} value={option.orderStatus}>
                    {option.displayValue}
                </option>
            ))}
        </select>
    )
}

Dropdown.propTypes = {
    defaultOption: PropTypes.number,
    options: PropTypes.array,
    onChangeHandler: PropTypes.func,
    className: PropTypes.string,
    width: PropTypes.string,
}
export default Dropdown
