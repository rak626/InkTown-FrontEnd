import { useDispatch, useSelector } from 'react-redux'
import DropDown from '../components/Dropdown'
import Orderlist from '../components/Orderlist'
import Tablelabel from '../components/Tablelabel'
import { addAllOrderStatus, changeFilterStatus } from '../features/orderSlice'
import { fetchAllOrderStatus } from '../utils/apis'
import { useQuery } from '@tanstack/react-query'

function Order() {
	const filterOptions = useSelector((state) => state.order.orderStatus)
	const dispatch = useDispatch()
	function handleSelectionChangeFilter(e) {
		dispatch(changeFilterStatus(parseInt(e.target.value)))
	}
	const {
		data: orderStatus,
		isLoading,
		isError,
		error,
	} = useQuery({ queryKey: ['allOrderStatus'], queryFn: fetchAllOrderStatus })
	dispatch(addAllOrderStatus(orderStatus))

	if (isLoading) {
		return <h1>loading....</h1>
	}
	if (isError) {
		return <div>{error.message}</div>
	}
	return (
		<div className="container mx-auto pt-8 bg-slate-300">
			<div className="flex pb-5">
				<div className="flex-grow">
					<Tablelabel
						label="List of Orders"
						className="text-green-600"
					/>
				</div>
				<div className="flex-grow flex justify-evenly">
					<DropDown
						options={[
							{
								displayValue: 'Select Status Filter',
								orderStatus: -1,
							},
							...filterOptions,
						]}
						defaultOption={-1}
						className=""
						width="w-1/3"
						onChangeHandler={handleSelectionChangeFilter}
					/>
				</div>
			</div>
			<div className="container">
				<div className="flex flex-col gap-6">
					<Orderlist />
				</div>
			</div>
		</div>
	)
}

export default Order
