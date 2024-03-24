import { useSelector } from 'react-redux'

const OrderDetails = () => {
	const order = useSelector((state) => state.order.curOrder)
	return (
		<div className="p-4 rounded-md shadow-md border border-red-400">
			<h1>
				Order Id : <span> {order?.orderId}</span>
			</h1>
			<h4>
				Order Decription : <span>{order?.orderDesc}</span>
			</h4>
			<h4>
				Flex Size(sq.ft) : <span>{order?.squareFeet}</span>
			</h4>
			<h4>
				Current Order Status : <span>{order?.orderStatus}</span>
			</h4>
			<h4>
				Is Urgent : <span>{order?.isUrgent ? 'Yes' : 'No'}</span>
			</h4>
			<h4>
				Order Created By: <span>{order?.createdBy}</span>
			</h4>
			<h4>
				Currently Assigned To : <span>{order?.assignedTo}</span>
			</h4>
			<h4>
				Order Created At : <span>{order?.createdAt}</span>
			</h4>
			<h4>
				Order Last Modified At: <span>{order?.lastModifiedAt}</span>
			</h4>
		</div>
	)
}

export default OrderDetails
