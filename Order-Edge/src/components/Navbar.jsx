import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/image/InkTownLogo.png'
import Button from './Button'
import { setAuthentication, setCurrentUser } from '../features/authSlice'

function Navbar() {
	const [isOpen, setIsOpen] = React.useState(false)
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
	const curUser = useSelector((state) => state.auth.curUser)
	const navLinks = [
		{
			title: 'Home',
			slug: '/home',
			active: true,
		},
		{
			title: 'Orders',
			slug: '/orders',
			active: isAuthenticated,
		},
		{
			title: 'About Us',
			slug: '/about',
			active: true,
		},
		{
			title: 'Contact Us',
			slug: '/contact',
			active: true,
		},
	]
	const authLinks = [
		{
			title: 'Login',
			slug: '/login',
			active: !isAuthenticated,
		},
		{
			title: 'Sign Up',
			slug: '/signup',
			active: !isAuthenticated,
		},
	]
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleLogout = () => {
		dispatch(setAuthentication(false))
		dispatch(setCurrentUser({}))
		navigate('/home')
	}
	return (
		<nav className="w-full flex justify-between items-center gap-8">
			<div className="left flex justify-between w-2/3 mx-8">
				<div className="">
					<Link to="/home" className="logo">
						<img
							src={Logo}
							alt="InkTown"
							className="w-20 h-20 rounded-full object-cover"
						/>
					</Link>
				</div>
				<div className="flex items-center">
					<ul className="flex space-x-4 items-center">
						{navLinks?.map((item, index) =>
							item.active ? (
								<li key={index}>
									<NavLink
										to={item.slug}
										className={({ isActive }) =>
											` hover:bg-gray-300 transition duration-300 ease-out px-2 py-1 rounded ${
												isActive
													? `text-orange-700`
													: `text-gray-700`
											} `
										}
									>
										{item.title}
									</NavLink>
								</li>
							) : null
						)}
					</ul>
				</div>
			</div>
			<div className="right w-1/3 ml-8">
				{isAuthenticated ? (
					<div className="flex justify-center items-center gap-12">
						<Link to="/orders/createOrder">
							<Button className="bg-[#f22756] hover:bg-red-800 transition duration-300 ease-in-out hover:scale-105">
								Create Order
							</Button>
						</Link>
						<div className="relative inline-block ml-4 p-4">
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="text-gray-700 hover:bg-gray-300 px-2 py-1 rounded flex items-center focus:outline-none transition duration-300 ease-out hover:scale-110"
							>
								<span className="text-gray-700">
									Rakesh Ghosh
								</span>
							</button>
							{isOpen && (
								<ul
									className="w-full text-center absolute bg-white shadow list-none py-2"
									onMouseLeave={() => setIsOpen(false)}
								>
									<li>
										<Link
											to="/profile"
											className="text-gray-700 hover:bg-gray-300 px-2 py-1 rounded block"
										>
											Profile
										</Link>
									</li>
									<li
										className="text-gray-700 hover:bg-gray-300 px-2 py-1 rounded block"
										onClick={handleLogout}
									>
										Logout
									</li>
								</ul>
							)}
						</div>
					</div>
				) : (
					<ul className="flex justify-center items-center gap-4">
						{authLinks?.map((item, index) =>
							item.active ? (
								<li key={index}>
									<NavLink
										to={item.slug}
										className={({ isActive }) =>
											` hover:bg-gray-300 ${
												isActive
													? `text-orange-700`
													: `text-gray-700`
											} px-2 py-1 rounded`
										}
									>
										{item.title}
									</NavLink>
								</li>
							) : null
						)}
					</ul>
				)}
			</div>
		</nav>
	)
}

export default Navbar
