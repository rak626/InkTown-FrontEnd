import  { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { signUp } from '../utils/apis'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import {
	setAuthentication,
	setCurrentUser,
	setToken,
} from '../features/authSlice'

const formContainer =
	'flex flex-col space-y-4 justify-center items-center w-full bg-gray-100 p-8'
const inputField =
	'px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1'
const button =
	'px-4 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-700'
const errorMessage = 'text-red-500 text-sm mt-1'
const radioContainer = 'flex items-center gap-8'
const radioInput = 'mr-2'
const radioLabel = 'text-sm'

const SignUpForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [submitting, setSubmitting] = useState(false)
	const mutation = useMutation({
		mutationKey: ['SignUp'],
		mutationFn: (reqData) => signUp(reqData),
		onSuccess: (data) => {
			dispatch(setAuthentication(true))
			dispatch(setCurrentUser(data.user))
			dispatch(setToken(data.token))
			navigate('/home')
		},
	})

	const onSubmit = async (data) => {
		setSubmitting(true)
		mutation.mutate({
			userName: data.name,
			userPhone: data.phone,
			password: data.password,
			role:
				data.role === 'customer'
					? 'ROLE_CUST'
					: data.role === 'user'
					? 'ROLE_EMP'
					: '',
		})
		setSubmitting(false)
	}

	return (
		<form className={formContainer} onSubmit={handleSubmit(onSubmit)}>
			<h1 className="text-3xl tracking-wide font-medium m-4">Sign Up</h1>

			<div className="flex flex-col">
				<label htmlFor="name" className="mb-2 text-sm">
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					className={inputField}
					{...register('name', { required: 'Name is required' })}
				/>
				{errors.name && (
					<span className={errorMessage}>{errors.name.message}</span>
				)}
			</div>

			<div className="flex flex-col">
				<label htmlFor="phone" className="mb-2 text-sm">
					Phone Number
				</label>
				<input
					type="tel" // Use "tel" input type for phone numbers
					id="phone"
					name="phone"
					className={inputField}
					{...register('phone', {
						required: 'Phone number is required',
						pattern: {
							value: /^\d{10}$/,
							message: 'Invalid phone number format',
						},
					})}
				/>
				{errors.phone && (
					<span className={errorMessage}>{errors.phone.message}</span>
				)}
			</div>

			<div className="flex flex-col">
				<label htmlFor="password" className="mb-2 text-sm">
					Password
				</label>
				<input
					type="password"
					id="password"
					name="password"
					className={inputField}
					{...register('password', {
						required: 'Password is required',
						minLength: {
							value: 3,
							message:
								'Password must be at least 3 characters long',
						},
					})}
				/>
				{errors.password && (
					<span className={errorMessage}>
						{errors.password.message}
					</span>
				)}
			</div>
			<div className={radioContainer}>
				<div>
					<input
						type="radio"
						id="customer"
						name="role" // Same name for all radio buttons
						value="customer"
						className={radioInput}
						// Register the radio button using react-hook-form
						{...register('role', {
							required: 'Please select a role',
						})}
					/>
					<label className={radioLabel} htmlFor="customer">
						Customer
					</label>
				</div>
				<div>
					<input
						type="radio"
						id="user"
						name="role" // Same name for all radio buttons
						value="user"
						className={radioInput}
						// Register the radio button using react-hook-form
						{...register('role', {
							required: 'Please select a role',
						})}
					/>
					<label className={radioLabel} htmlFor="user">
						User
					</label>
				</div>
			</div>

			<button type="submit" className={button} disabled={submitting}>
				{submitting ? 'Submitting...' : 'Sign Up'}
			</button>
		</form>
	)
}

export default SignUpForm
