import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { fetchOrderLogsByOrderId } from '../utils/apis'
import { useSelector } from 'react-redux'
const OrderFlow = () => {
	const order = useSelector((state) => state.order.curOrder)
	console.log(order)
	const orderId = order?.orderId
	const [orderLog, setOrderLog] = useState([])
	const orderStatusList = useSelector((state) => state.order.orderStatus)
	const token = useSelector((state) => state.auth.token)
	const FetchedOrderLogs = useQuery({
		queryKey: ['OrderLogs', orderId],
		queryFn: () => fetchOrderLogsByOrderId(orderId, token),
	})
	useEffect(() => {
		if (
			!FetchedOrderLogs.isLoading &&
			!FetchedOrderLogs.isError &&
			FetchedOrderLogs.data
		) {
			setOrderLog(FetchedOrderLogs.data)
		}
	}, [
		FetchedOrderLogs.data,
		FetchedOrderLogs.isLoading,
		FetchedOrderLogs.isError,
	])
	if (FetchedOrderLogs.isError) {
		return <h1 className="text-red-600">Error on Fetching Order Flows</h1>
	}
	if (FetchedOrderLogs.isLoading) {
		return <h1 className="text-3xl text-green-600">Loading.....</h1>
	}
	console.log(orderLog)
	return (
		<>
			<div className="container w-4/5 mx-auto">
				{orderLog?.map((log, index) => (
					<div
						key={log.id}
						className={`border border-red-300 rounded-md p-4 mb-4 ${
							index === orderLog.length - 1
								? 'bg-blue-300'
								: 'bg-green-200'
						}`}
					>
						<div className="flex justify-between items-center mb-2">
							<div className="font-semibold">
								{orderStatusList &&
									orderStatusList[log.currentOrderStatus]
										.displayValue}
							</div>
							<div className="text-gray-500">
								{new Date(log.createdAt).toLocaleDateString()}
							</div>
						</div>
						<div className="text-sm text-gray-600">
							Performed by: {log.updatedBy}
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default OrderFlow
