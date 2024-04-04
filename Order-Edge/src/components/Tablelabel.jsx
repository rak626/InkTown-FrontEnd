import PropTypes from 'prop-types';
function Tablelabel({ label, labelFor, className = '', ...rest }) {
    return (
        <div className='ml-20'>
            <label
                htmlFor={labelFor}
                className={`text-2xl font-bold ${className}`}
                {...rest}>
                {label}
            </label>
        </div>
    )
}

Tablelabel.propTypes = {
    label: PropTypes.string.isRequired,
    labelFor: PropTypes.string,
    className: PropTypes.string,
};
export default Tablelabel
