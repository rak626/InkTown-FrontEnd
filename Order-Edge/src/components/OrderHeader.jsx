import { useDispatch, useSelector } from 'react-redux'
import { changeFilterStatus, updateToggle } from '../features/orderSlice'
import Button from './Button'
import Dropdown from './Dropdown'
import Tablelabel from './Tablelabel'

function OrderHeader() {
	const dispatch = useDispatch()
	const filterOptions = useSelector((state) => state.order.orderStatus)
	const curUser = useSelector((state) => state.auth.curUser)
	const toggle = useSelector((state) => state.order.toggle)
	const defaultOption = useSelector(
		(state) => state.order.currentFilterStatus
	)

	function handleSelectionChangeFilter(e) {
		dispatch(changeFilterStatus(parseInt(e.target.value)))
	}
	function handleToggle() {
		dispatch(updateToggle(!toggle))
	}
	return (
		<>
			<div className="flex pb-5">
				<div className="flex-grow">
					<Tablelabel
						label="List of Orders"
						className="text-green-600"
					/>
				</div>
				<div className="flex flex-grow justify-end gap-6 px-6">
					<Dropdown
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
					{curUser.role === 'ROLE_EMP' && (
						<Button
							className={toggle ? `bg-blue-500` : `bg-green-500`}
							onClickHandler={handleToggle}
						>
							{toggle === false
								? `All Orders`
								: `Assigned Orders`}
						</Button>
					)}
				</div>
			</div>
		</>
	)
}

export default OrderHeader
