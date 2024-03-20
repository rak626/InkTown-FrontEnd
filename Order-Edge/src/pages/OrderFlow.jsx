import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchOrderByOrderId, fetchOrderLogsByOrderId } from '../utils/apis'
import { useSelector } from 'react-redux'
const OrderFlow = () => {
	const { orderId } = useParams()
	const [order, setOrder] = useState({})
	const [orderLog, setOrderLog] = useState([])
	const orderStatusList = useSelector((state) => state.orderStatus)
	const token = useSelector(state => state.auth.token)
	const FetchedOrder = useQuery({
		queryKey: ['FindOrder', orderId],
		queryFn: () => fetchOrderByOrderId(orderId, token),
	})
	useEffect(() => {
		if (
			!FetchedOrder.isLoading &&
			!FetchedOrder.isError &&
			FetchedOrder.data
		) {
			setOrder(FetchedOrder.data)
		}
	}, [FetchedOrder.data, FetchedOrder.isLoading, FetchedOrder.isError])
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
	if (FetchedOrderLogs.isError || FetchedOrder.isError) {
		return <h1 className="text-red-600">Error on Fetching Order Flows</h1>
	}
	if (FetchedOrder.isLoading || FetchedOrderLogs.isLoading) {
		return <h1 className="text-3xl text-green-600">Loading.....</h1>
	}
	console.log(orderLog)
	return (
		<>
			<div className="container w-2/4 mx-auto">
				<h1 className="w-1/2 mx-auto text-center text-4xl my-4 py-4 font-mono font-extrabold text-orange-600 shadow-2xl ">
					{order?.orderName}
				</h1>
				<div className="flex justify-between items-center m-4">
					<h1 className="text-2xl text-blue-600 font-bold m-4">
						Order Flow
					</h1>
					<div>
						<h1 className="text-xl m-4">{order?.orderId}</h1>
					</div>
				</div>
				{/* <div className="container mx-auto px-16">
					<VerticleTimeLine data={orderLog} />
					<Timeline datas={orderLog} />
				</div> */}
				<div className='container w-full mx-auto'>
                {orderLog?.map((log , index) => (
					<div key={log.id} className={`border rounded-md p-4 mb-4 ${index === orderLog.length-1 ? 'bg-blue-300' : 'bg-green-200'}`}>
						<div className="flex justify-between items-center mb-2">
							<div className="font-semibold">
								{orderStatusList && orderStatusList[log.currentOrderStatus].displayValue}
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
			</div>
		</>
	)
}

export default OrderFlow
// [
//     {
//         "id": "e69553c9-3449-4a40-92a8-957e39202552",
//         "orderId": "56ca2e65-16fb-4564-9a7b-358d28a9c361",
//         "currentOrderStatus": 0,
//         "updatedBy": "SYSTEM",
//         "createdAt": "2024-03-04T23:02:27.429099"
//     },

// ]

// {orderStatusList?.map((eachObj) =>
//     eachObj.orderStatus >
//     parseInt(
//         orderLog[orderLog.length - 1].currentOrderStatus
//     ) ? (
//         ''
//     ) : (
//         <div
//             key={step.id}
//             className="border rounded-md p-4 mb-4"
//         >
//             <div className="flex justify-between items-center mb-2">
//                 <div className="font-semibold">
//                     {step.currentOrderStatus}
//                 </div>
//                 <div className="text-gray-500">
//                     {step.createdAt}
//                 </div>
//             </div>
//             <div className="text-sm text-gray-600">
//                 Performed by: {step.updatedBy}
//             </div>
//         </div>
//     )
// )}
