import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
	setAuthentication,
	setCurrentUser,
	setToken,
} from '../features/authSlice'
import Error from './Error'
import { signIn } from '../utils/apis'

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm()
	const [showLoginError, setShowLoginError] = useState(false)
	const [submitting, setSubmitting] = useState(false)

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const mutation = useMutation({
		mutationKey: ['Sign in'],
		mutationFn: (reqBody) => signIn(reqBody),
		onSuccess: (data) => {
			dispatch(setAuthentication(true))
			dispatch(setToken(data.token))
			dispatch(setCurrentUser(data.user))
			navigate('/home')
		},
		onError: () => setShowLoginError(true),
	})

	const onSubmit = async (data) => {
		setSubmitting(true)
		mutation.mutate({
			userPhoneNo: data.phone,
			password: data.password,
		})
		setSubmitting(false)
	}
	const handleCloseDialog = () => {
		setShowLoginError(false)
		setValue('phone', '')
		setValue('password', '')
	}

	if (mutation.isError) {
		return <Error errorMsg={mutation.error}/>
	}

	return (
		<div className="flex flex-col space-y-4 justify-center items-center w-full bg-gray-100 rounded-sm p-8">
			<form onSubmit={handleSubmit(onSubmit)} className="">
				<h1 className="text-3xl text-center font-medium mb-4">Login</h1>
				<div className="flex flex-col space-y-4">
					<div className="flex flex-col">
						<label
							htmlFor="phone"
							className="text-sm font-medium text-gray-700 py-2"
						>
							Phone No
						</label>
						<input
							type="text"
							id="phone"
							name="phone"
							{...register('phone', {
								required: 'Phone No is required',
								pattern: {
									value: /^\d{10}$/,
									message: 'Phone No Should be 10 digit',
								},
							})}
							className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-sky-500"
						/>
						{errors.phone && (
							<span className="text-red-500 text-sm py-1">
								{errors.phone.message}
							</span>
						)}
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="password"
							className="text-sm font-medium text-gray-700 py-2"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							{...register('password', {
								required: 'Password is required',
								// minLength: {
								// 	value: 6,
								// 	message:
								// 		'Password must be at least 6 characters',
								// },
							})}
							className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-sky-500"
						/>
						{errors.password && (
							<span className="text-red-500 text-sm">
								{errors.password.message}
							</span>
						)}
					</div>
					<div className="flex flex-col py-8">
						<button
							type="submit"
							className="bg-sky-500 text-white rounded-md py-2 px-4 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
							disabled={submitting}
						>
							{submitting ? 'Submitting...' : 'Login'}
						</button>
					</div>
				</div>
			</form>
			{showLoginError && (
				<div className="flex justify-between items-center m-4">
					<p className="text-lg text-gray-700 truncate">
						Incorrect username or password. Please try again.
					</p>
					<span
						className="material-symbols-outlined text-red-500 hover:cursor-pointer m-4"
						onClick={handleCloseDialog}
					>
						cancel
					</span>
				</div>
			)}
		</div>
	)
}

export default LoginForm
