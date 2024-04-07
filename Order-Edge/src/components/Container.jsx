import PropTypes from 'prop-types';
const Container = ({ children, className }) => {
	// Combine Tailwind classes with optional user-provided className
	const combinedClasses = `container mx-auto ${className}`

	return <div className={combinedClasses}>{children}</div>
}

Container.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};
export default Container
