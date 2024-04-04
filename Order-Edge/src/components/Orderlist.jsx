import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
	fetchAllOrdersBasedOnOrderStatus,
	fetchAllOrdersBasedOnOrderStatusAndUserId,
} from '../utils/apis'
import Error from './Error'
import Loading from './Loading'
import TableHeaderRow from './TableHeaderRow'
import TableRow from './TableRow'

const colList = [
	'OrderId',
	'OrderName',
	'AssignTo',
	'Urgent',
	'OrderStatus',
	'CreatedAt',
]
function Orderlist() {
	const currentFilterStatus = useSelector(
		(state) => state.order.currentFilterStatus
	)
	const token = useSelector((state) => state.auth.token)
	const curUser = useSelector((state) => state.auth.curUser)
	const toggle = useSelector((state) => state.order.toggle)
	const [orderList, setOrderList] = useState([])

	const { data, isError, error, isLoading } = useQuery({
		queryKey: ['Orders', currentFilterStatus, toggle],
		queryFn: () => {
			if (!toggle) {
				return fetchAllOrdersBasedOnOrderStatusAndUserId(
					currentFilterStatus,
					curUser?.userId,
					token
				)
			} else {
				return fetchAllOrdersBasedOnOrderStatus(
					currentFilterStatus,
					token
				)
			}
		},
	})

	useEffect(() => {
		if (!isLoading && !isError && data) {
			setOrderList(data)
		}
	}, [isLoading, isError, data, toggle])

	if (isLoading) return <Loading />
	if (isError) return <Error errorMsg={error} />

	return (
		<div className="overflow-x-auto">
			<table className="min-w-full divide-y divide-gray-200 border border-slate-200">
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
