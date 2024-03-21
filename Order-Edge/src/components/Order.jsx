import { useDispatch, useSelector } from 'react-redux'
import DropDown from './Dropdown'
import Orderlist from './Orderlist'
import Tablelabel from './Tablelabel'
import { changeFilterStatus } from '../features/orderSlice'

function Order() {
	const dispatch = useDispatch()
	function handleSelectionChangeFilter(e) {
		dispatch(changeFilterStatus(parseInt(e.target.value)))
	}
	
	const filterOptions = useSelector((state) => state.order.orderStatus)
	const defaultOption = useSelector(state => state.order.currentFilterStatus)
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
						defaultOption={defaultOption}
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
