import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchAllOrdersBasedOnOrderStatus } from '../utils/apis'
import TableRow from './TableRow'
import TableHeaderRow from './TableHeaderRow'

function Orderlist() {
	const colList = [
		'OrderId',
		'OrderName',
		'AssignTo',
		'Urgent',
		'OrderStatus',
		// 'Action',
	]
	const currentFilterStatus = useSelector(
		(state) => state.order.currentFilterStatus
	)
	const [orderList, setOrderList] = useState([])
	const token = useSelector((state) => state.auth.token)
	const {
		data,
		isError,
		error,
		loading: isLoading,
	} = useQuery({
		queryKey: ['Orders', currentFilterStatus],
		queryFn: () =>
			fetchAllOrdersBasedOnOrderStatus(currentFilterStatus, token),
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
					<TableHeaderRow colList={colList} />
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
