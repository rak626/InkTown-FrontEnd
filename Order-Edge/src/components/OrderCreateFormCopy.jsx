import { nanoid } from '@reduxjs/toolkit'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { createOrderPostReq } from '../utils/apis'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const OrderCreateFormCopy = () => {
	const navigate = useNavigate()
	const curUser = useSelector((state) => state.auth.curUser)
	const isCustomer = curUser.role === 'ROLE_CUST'
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			isUrgent: 'false',
		},
	})
	const token = useSelector((state) => state.auth.token)
	const mutation = useMutation({
		mutationKey: ['creating Order'],
		mutationFn: (reqData) => createOrderPostReq(reqData, token),
		onSuccess: (data) => {
			navigate(`/orders/${data?.orderId}`)
		},
	})
	const onSubmit = (data) => {
		const newData = {
			...data,
			isUrgent: data.isUrgent === 'true',
			squareFeet: parseInt(data.squareFeet),
			uniqueUserId: isCustomer ? curUser.userId : nanoid(),
			customerName: isCustomer ? curUser.username : data.customerName,
			customerEmail: isCustomer
				? 'inktown.dev@gamil.com'
				: data.customerName,
			customerPhoneNo: isCustomer
				? curUser.userPhoneNo
				: data.customerPhoneNo,
		}
		mutation.mutate(newData)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col w-2/3 mx-auto p-4 bg-gray-200 rounded-md mt-14">
				<div className='w-full'>
					{!isCustomer ? (
						<div>
							<div className="mb-4 flex items-center">
								<label
									htmlFor="customer"
									className="block text-gray-700 font-semibold mb-2 w-1/3"
								>
									Customer
								</label>
								<input
									id="customer"
									type="text"
									className="w-2/3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
									{...register('customerName', {
										required: true,
									})}
								/>
								{errors.customerName && (
									<span className="text-red-500">
										Customer Name is required
									</span>
								)}
							</div>
						</div>
					) : null}

					<div>
						<div className="mb-4">
							<label
								htmlFor="orderName"
								className="block text-gray-700 font-semibold mb-2 w-1/3"
							>
								Order Name
							</label>
							<input
								type="text"
								id="orderName"
								name="orderName"
								{...register('orderName', { required: true })}
								className="w-2/3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
							/>
							{errors.orderName && (
								<span className="text-red-500">
									Order Name is required
								</span>
							)}
						</div>
						<div className="mb-4">
							<label
								htmlFor="orderDescription"
								className="block text-gray-700 font-semibold mb-2 w-1/3"
							>
								Order Description
							</label>
							<textarea
								id="orderDescription"
								name="orderDescription"
								{...register('orderDesc', { required: true })}
								className="w-2/3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
							/>
							{errors.orderDescription && (
								<span className="text-red-500">
									Order Description is required
								</span>
							)}
						</div>

						<div className="flex flex-wrap justify-between">
							<div className="mb-4 w-1/2 pr-2">
								<label
									htmlFor="squareFeet"
									className="block text-gray-700 font-semibold mb-2 w-1/3"
								>
									Square Feet
								</label>
								<input
									type="number"
									id="squareFeet"
									name="squareFeet"
									{...register('squareFeet', {
										required: true,
										pattern: /^[0-9]*$/,
									})}
									className="w-2/3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
								/>
								{errors.squareFeet && (
									<span className="text-red-500">
										Squre Feet is required
									</span>
								)}
							</div>
							<div className="mb-4 w-1/2 pl-2">
								<label
									htmlFor="length"
									className="block text-gray-700 font-semibold mb-2 w-1/3"
								>
									Length
								</label>
								<input
									type="number"
									id="length"
									name="length"
									{...register('length', { required: true })}
									className="w-2/3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
								/>
								{errors.length && (
									<span className="text-red-500">
										Length is required
									</span>
								)}
							</div>
							<div className="mb-4 w-1/2 pr-2">
								<label
									htmlFor="width"
									className="block text-gray-700 font-semibold mb-2 w-1/3"
								>
									Width
								</label>
								<input
									type="number"
									id="width"
									name="width"
									{...register('width', { required: true })}
									className="w-2/3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
								/>
								{errors.width && (
									<span className="text-red-500">
										Width is required
									</span>
								)}
							</div>
							<div className="mb-4 w-1/2 pl-2">
								<label
									htmlFor="quantity"
									className="block text-gray-700 font-semibold mb-2 w-1/3"
								>
									Quantity
								</label>
								<input
									type="number"
									id="quantity"
									name="quantity"
									{...register('quantity', {
										required: true,
									})}
									className="w-2/3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
								/>
								{errors.quantity && (
									<span className="text-red-500">
										Quantity is required
									</span>
								)}
							</div>
							<div className="mb-4 w-1/2 pr-2">
								<label
									htmlFor="isUrgent"
									className="block text-gray-700 font-semibold mb-2 w-1/3"
								>
									Is Urgent?
								</label>
								<select
									id="isUrgent"
									name="isUrgent"
									{...register('isUrgent', {
										required: true,
									})}
									className="w-2/3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
								>
									<option value={true}>Yes</option>
									<option value={false}>No</option>
								</select>
								{errors.isUrgent && (
									<span className="text-red-500">
										Please select an option
									</span>
								)}
							</div>
							<div className="mb-4 w-1/2 pr-2">
								<label
									htmlFor="isEyelet"
									className="block text-gray-700 font-semibold mb-2 w-1/3"
								>
									Eyelet Required
								</label>
								<select
									id="isEyelet"
									name="isEyelet"
									{...register('isEyelet', {
										required: true,
									})}
									className="w-2/3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
								>
									<option value={true}>Yes</option>
									<option value={false}>No</option>
								</select>
								{errors.isUrgent && (
									<span className="text-red-500">
										Please select an option
									</span>
								)}
							</div>
							
							<div className="w-full">
								<button
									type="submit"
									className="my-8 w-48 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
								>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}
export default OrderCreateFormCopy
