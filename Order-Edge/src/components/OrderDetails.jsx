import { useSelector } from 'react-redux'
import moment from 'moment'

const OrderDetails = () => {
	const order = useSelector((state) => state.order.curOrder)
	const elapsedTime = () => {
		const duration = moment.duration(
			moment().diff(moment(order?.createdAt))
		)
		const days = Math.floor(duration.asDays())
		const hours = Math.floor(duration.asHours()) - days * 24
		const minutes =
			Math.floor(duration.asMinutes()) - (days * 24 * 60 + hours * 60)
		const seconds =
			Math.floor(duration.asSeconds()) -
			(days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60)

		return {
			day: days,
			hour: hours,
			minute: minutes,
			second: seconds,
		}
	}

	const elapsed = elapsedTime()
	const timestamp = `${elapsed.day === 0 ? `` : `${elapsed.day} Days`} ${
		elapsed.hour === 0 ? `` : `${elapsed.hour} Hours`
	} ${elapsed.minute === 0 ? `` : `${elapsed.minute} Minutes`} ${
		elapsed.second === 0 ? `` : `${elapsed.second} Seconds`
	}`

	return (
		<div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
			<h1 className="text-2xl font-bold text-gray-700 mb-4">
				Order Id :{' '}
				<span className="font-normal"> {order?.orderId}</span>
			</h1>
			<p className="text-gray-600">
				Order Decription : <span>{order?.orderDesc}</span>
			</p>
			<p className="text-gray-600">
				Flex Size(sq.ft) : <span>{order?.squareFeet}</span>
			</p>
			<p className="text-gray-600">
				Current Order Status : <span>{order?.orderStatus}</span>
			</p>
			<p className="text-gray-600">
				Is Urgent : <span>{order?.isUrgent ? 'Yes' : 'No'}</span>
			</p>
			<p className="text-gray-600">
				Order Created By: <span>{order?.createdBy}</span>
			</p>
			<p className="text-gray-600">
				Currently Assigned To : <span>{order?.assignedTo}</span>
			</p>
			<p className="text-gray-600">
				Order Created At : <span>{order?.createdAt}</span>
			</p>
			<p className="text-gray-600">
				Order Last Modified At: <span>{order?.lastModifiedAt}</span>
			</p>
			<p className="text-gray-600">
				Time Eclapsed : <span>{timestamp}</span>
			</p>
		</div>
	)
}

export default OrderDetails
