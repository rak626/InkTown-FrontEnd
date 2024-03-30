import PropTypes from 'prop-types';
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
            className={`px-4 py-2 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
            {...rest}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    onClickHandler: PropTypes.func,
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
};
export default Button;
