import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'
import { addAllOrders, getAllOrderStatus } from '../features/orderSlice'
import { fetchApiDetails } from '../utils/apiUtil'

function Layout() {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const fetchAllOrderStatus = (statusUrl) => {
        setLoading(true)
        fetchApiDetails(statusUrl, {
            'Content-Type': 'application/json',
        })
            .then((data) => dispatch(getAllOrderStatus(data)))
            .catch((err) => console.log(err))
            .finally(setLoading(false))
    }
    const fetchAllOrder = (orderUrl) => {
        setLoading(true)
        fetchApiDetails(orderUrl, {
            'Content-Type': 'application/json',
        })
            .then((data) => {
                dispatch(addAllOrders(data))
            })
            .catch((err) => console.log(err))
            .finally(setLoading(false))
    }
    useEffect(() => {
        console.log('calling all order fuction')
        fetchAllOrder('/order/getAll')
        fetchAllOrderStatus('/order/getDisplayStatusList')
    }, [])
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
