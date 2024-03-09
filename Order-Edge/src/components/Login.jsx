import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setAuthentication } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
	const [formData, setFormData] = useState({
		phone: '',
		password: '',
	})
	const dispatch = useDispatch()

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		})
	}
	const navigate = useNavigate()
	const handleSubmit = (event) => {
		event.preventDefault()
		dispatch(setAuthentication(true))
		console.log(formData)
		navigate('/home')
	}

	return (
		<div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="text-center text-3xl font-medium text-gray-900">
						Login
					</h2>
					<p className="mt-2 text-center text-sm text-gray-500">
						Sign in to your account.
					</p>
				</div>
				<form className="space-y-6" onSubmit={handleSubmit}>
					<div className="rounded-md shadow-sm -space-y-px">
						<input
							id="phone"
							name="phone"
							type="tel"
							required
							className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:ring-opacity-50 text-gray-700"
							placeholder="Phone Number"
							value={formData.phone}
							onChange={handleChange}
						/>
						<input
							id="password"
							name="password"
							type="password"
							required
							className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:ring-opacity-50 text-gray-700"
							placeholder="Password"
							value={formData.password}
							onChange={handleChange}
						/>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
							/>
							<label
								htmlFor="remember-me"
								className="text-sm text-gray-700"
							>
								Remember me
							</label>
						</div>
						<a
							href="#"
							className="text-sm text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Forgot password?
						</a>
					</div>
					<button
						type="submit"
						className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	)
}

export default Login
