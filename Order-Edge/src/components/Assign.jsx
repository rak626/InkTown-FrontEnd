import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOrderStatus } from '../utils/apis'
import Dropdown from './Dropdown'
import Button from './Button'
import { addOrder } from '../features/orderSlice'

const Assign = () => {
	const dispatch = useDispatch()
	const order = useSelector((state) => state.order.curOrder)
	const selections = useSelector((state) => state.order.orderStatus)
	const [selectedOption, setSelectedOption] = useState(order?.orderStatus)
	const [buttonDisable, setButtonDisabled] = useState(true)
	const curUser = useSelector((state) => state.auth.curUser)
	const reqBody = {
		userId: curUser.userId,
		orderId: order?.orderId,
		status: parseInt(selectedOption),
	}
	const token = useSelector((state) => state.auth.token)
	const { mutate } = useMutation({
		mutationKey: ['updateOrderStatus'],
		mutationFn: (reqBody) => updateOrderStatus(reqBody, token),
		onSuccess: (data) => dispatch(addOrder(data)),
	})
	function handleButtonClick() {
		mutate(reqBody)
		setButtonDisabled(true)
	}
	const handleSelectChange = (e) => {
		setSelectedOption(parseInt(e.target.value))
		if (parseInt(e.target.value) !== order.orderStatus) {
			setButtonDisabled(false)
		} else {
			setButtonDisabled(true)
		}
	}
	return (
		<div className="w-2/6 flex gap-5 p-4 rounded border border-spacing-4 border-red-300">
			<Dropdown
				defaultOption={selectedOption}
				options={selections}
				onChangeHandler={handleSelectChange}
			/>
			<Button
				onClick={handleButtonClick}
				isDisabled={buttonDisable}
				className={buttonDisable ? 'bg-gray-500' : 'bg-green-500'}
			>
				Save
			</Button>
		</div>
	)
}

export default Assign
