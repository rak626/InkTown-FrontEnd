import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchAllOrdersBasedOnOrderStatus } from '../utils/apis'
import TableRow from './TableRow'
function Orderlist() {
	const currentFilterStatus = useSelector(
		(state) => state.order.currentFilterStatus
	)
	const [orderList, setOrderList] = useState([])
	const {
		data,
		isError,
		error,
		loading: isLoading,
	} = useQuery({
		queryKey: ['Orders', currentFilterStatus],
		queryFn: () => fetchAllOrdersBasedOnOrderStatus(currentFilterStatus),
	})
	useEffect(() => {
		if (!isLoading && !isError && data) {
			setOrderList(data)
		}
	}, [data, isLoading, isError])

	if (isError) {
		return <div>{error.message}</div>
	}
	return (
		<div className="overflow-x-auto">
			<table className="min-w-full divide-y divide-gray-200 border border-slate-700">
				<thead className="bg-gray-50">
					<tr>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							OrderId
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							OrderName
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							AssignTo
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Urgent
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							OrderStatus
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Action
						</th>
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200">
					{orderList?.map((orderData, index) => (
						<tr key={orderData.orderId}>
							<TableRow orderData={orderData} index={index + 1} />
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Orderlist
