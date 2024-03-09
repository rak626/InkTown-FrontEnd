import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
	setAuthentication,
	setCurrentUser,
	setToken,
} from '../features/authSlice'
import Button from './Button'
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
		onError: (error) => setShowLoginError(true),
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

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className='container mx-auto w-1/4 my-8'>
				<h1 className="text-2xl text-center font-bold mb-4">Login</h1>
				<div className="flex flex-col space-y-4">
					<div className="flex flex-col">
						<label
							htmlFor="Phone No"
							className="text-sm font-medium text-gray-700"
						>
							Phone No
						</label>
						<input
							type="text"
							id="phone"
							name="phone"
							{...register('phone', {
								required: 'Phone No is required',
								minLength: {
									value: 10,
									message: 'Phone No must be 10 characters',
								},
								maxLength: {
									value: 10,
									message: 'Phone No must be 10 characters',
								},
							})}
							className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-sky-500"
						/>
						{errors.phone && (
							<span className="text-red-500 text-sm">
								{errors.phone.message}
							</span>
						)}
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="password"
							className="text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							{...register('password', {
								required: 'Password is required',
								minLength: {
									value: 6,
									message:
										'Password must be at least 6 characters',
								},
							})}
							className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-sky-500"
						/>
						{errors.password && (
							<span className="text-red-500 text-sm">
								{errors.password.message}
							</span>
						)}
					</div>
					<button
						type="submit"
						className="bg-sky-500 text-white rounded-md py-2 px-4 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
						disabled={submitting}
					>
						{submitting ? 'Submitting...' : 'Login'}
					</button>
				</div>
			</form>
			{showLoginError && (
				<div className="">
					<div className="flex flex-col justify-between items-center mb-3">
						<h5 className="text-lg font-medium text-red-500">
							Login Error
						</h5>
						<p className="text-sm text-gray-700">
							Incorrect username or password. Please try again.
						</p>
						<Button
							className="bg-red-400"
							onClickHandler={handleCloseDialog}
						>
							Close
						</Button>
					</div>
				</div>
			)}
		</>
	)
}

export default LoginForm
