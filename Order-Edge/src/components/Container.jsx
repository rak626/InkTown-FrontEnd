const Container = ({ children, className }) => {
	// Combine Tailwind classes with optional user-provided className
	const combinedClasses = `container mx-auto px-4 py-8 md:px-8 lg:px-16 ${className}`

	return <div className={combinedClasses}>{children}</div>
}

export default Container
