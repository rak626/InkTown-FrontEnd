import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'
import { addAllOrderStatus } from '../features/orderSlice'
import { fetchAllOrderStatus } from '../utils/apis'

function Layout() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	)
}
export default Layout
