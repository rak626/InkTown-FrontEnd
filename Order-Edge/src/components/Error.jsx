import PropTypes from 'prop-types';
export default function Error({ errorMsg = '' }) {
	return (
		<div className="bg-red-100 border border-red-400 rounded-md p-4">
			<h3 className="text-red-700 font-bold">Error!</h3>
			<p className="text-red-600">{errorMsg.message}</p>
		</div>
	)
}

Error.propTypes = {
	errorMsg: PropTypes.shape({
		message: PropTypes.string,
	}),
};