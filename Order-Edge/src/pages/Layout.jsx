import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'
import { addAllOrderStatus } from '../features/orderSlice'
import { fetchAllOrderStatus } from '../utils/apis'

function Layout() {
	const {
		data: orderStatus,
		isLoading,
		isError,
		error,
	} = useQuery({ queryKey: ['allOrderStatus'], queryFn: fetchAllOrderStatus })
	const dispatch = useDispatch()
	dispatch(addAllOrderStatus(orderStatus))

	if (isLoading) {
		return <h1>loading....</h1>
	}
	if (isError) {
		return <div>{error.message}</div>
	}
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	)
}

export default Layout
