import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const OrderFlow = () => {
    const { orderId } = useParams()
    // const order = useSelector((state) => state.orderList)
    const order = [{ id: 1, status: 'new', updatedAt: '2021-02-01' }]

    const orderList = useSelector((state) => state.orderList)
    // const orderStatusList = useSelector((state) => state.orderStatusList)
    console.log(orderList)
    const savedOrder = orderList.filter((order) => order.orderId === orderId)[0]

    console.log(savedOrder)
    console.log(savedOrder?.orderName)
    console.log(savedOrder?.orderStatus)

    return (
        <div className='container mx-auto'>
            <h1 className='w-1/2 mx-auto text-center text-4xl my-4 py-4 font-mono font-extrabold text-orange-600 shadow-2xl '>
                {savedOrder?.orderName}
            </h1>
            <div className='flex justify-between items-center m-4'>
                <h1 className='text-2xl text-blue-600 font-bold m-4'>
                    Order Flow
                </h1>
                <div>
                    <h1 className='text-xl m-4'>{savedOrder?.orderId}</h1>
                </div>
            </div>
            {order?.map((step) => (
                <div key={step.id} className='border rounded-md p-4 mb-4'>
                    <div className='flex justify-between items-center mb-2'>
                        <div className='font-semibold'>{step.status}</div>
                        <div className='text-gray-500'>{step.updatedAt}</div>
                    </div>
                    <div className='text-sm text-gray-600'>
                        Performed by: {step.performedBy}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OrderFlow
