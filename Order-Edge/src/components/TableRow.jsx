import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateOrderStatus } from '../utils/apis'
import { options } from '../utils/appData'
import Button from './Button'
import Dropdown from './Dropdown'

function TableRow({ orderData = {}, index = 0 }) {
	const [selectedOption, setSelectedOption] = useState(orderData.orderStatus)
	const [buttonDisable, setButtonDisabled] = useState(true)
	const selections = useSelector((state) => state.order.orderStatus)
	const reqBody = {
		userId: '7d7603e1-0fa6-457f-8721-0a7fadc1b5ff',
		orderId: orderData.orderId,
		status: parseInt(selectedOption),
	}
	const mutation = useMutation({
		mutationKey: ['updateOrderStatus'],
		mutationFn: (reqBody) => updateOrderStatus(reqBody),
	})
	function handleButtonClick(e) {
		mutation.mutate(reqBody)
		setButtonDisabled(true)
	}
	const handleSelectChange = (e) => {
        setSelectedOption(parseInt(e.target.value))
		if (parseInt(e.target.value) !== orderData.orderStatus) {
			setButtonDisabled(false)
		} else {
            setButtonDisabled(true)
        }
	}
	return (
		<>
			<td className="px-6 py-4 whitespace-nowrap">{index}</td>
			<td className="px-6 py-4 whitespace-nowrap">
				<Link to={`/orders/${orderData.orderId}`}>
					<h4 className="underline underline-offset-4 text-blue-700">
						{orderData.orderName}
					</h4>
				</Link>
			</td>
			<td className="px-6 py-4 whitespace-nowrap">
				{orderData.assignedTo === 'SYSTEM'
					? 'Not Assigned'
					: orderData.assignedTo}
			</td>
			<td className="px-6 py-4 whitespace-nowrap">
				{orderData.isUrgent ? 'Yes' : 'No'}
			</td>
			<td className="px-6 py-4 whitespace-nowrap">
				<Dropdown
					defaultOption={selectedOption}
					options={selections?.length > 0 ? selections : options}
					onChangeHandler={handleSelectChange}
				/>
			</td>
			<td className="px-6 py-4 whitespace-nowrap">
				<Button
					onClick={handleButtonClick}
					isDisabled={buttonDisable}
					className={buttonDisable ? 'bg-gray-500' : 'bg-green-500'}
				>
					Save
				</Button>
			</td>
		</>
	)
}
export default TableRow
