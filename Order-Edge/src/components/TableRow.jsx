import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import moment from 'moment'

function TableRow({ orderData = {}, index = 0 }) {
	const selectedOption = useSelector(
		(state) => state.order.orderStatus[orderData?.orderStatus]
	)
	return (
		<>
			<td className="px-6 py-4 whitespace-nowrap">{index}</td>
			<td className="px-6 py-4 whitespace-nowrap">
				<Link to={`/orders/${orderData?.orderId}`}>
					<h4 className=" text-blue-700">{orderData?.orderName}</h4>
				</Link>
			</td>
			<td className="px-6 py-4 whitespace-nowrap">
				{orderData?.assignedTo === 'SYSTEM'
					? 'Not Assigned'
					: orderData?.assignedTo}
			</td>
			<td className="px-6 py-4 whitespace-nowrap">
				{orderData?.isUrgent ? 'Yes' : 'No'}
			</td>
			<td className="px-6 py-4 whitespace-nowrap">
				<p>{selectedOption.displayValue}</p>
			</td>
			<td className="px-6 py-4 whitespace-nowrap">
				<p>{moment(orderData?.createdAt).calendar()}</p>
			</td>
		</>
	)
}
export default TableRow
TableRow.propTypes = {
	orderData: PropTypes.object,
	index: PropTypes.number,
}
