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
            className={`px-4 py-2 font-semibold rounded-md shadow-md text-white ${className}`}
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
