import React from 'react'
import Tablelabel from '../components/Tablelabel'
import DropDown from '../components/Dropdown'
import Orderlist from '../components/Orderlist'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

function Order() {
    const sampleData = [
        {
            orderId: 200,
            orderName: 'sample name from DB',
            assignedTo: 'Dipak',
            orderStatus: 1,
        },
        {
            orderId: 50000340,
            orderName: 'sample name2 from DB',
            assignedTo: 'Rakesh',
            orderStatus: 2,
        },
    ]
    const options = [
        { label: 'New', value: 0 },
        { label: 'InProgress', value: 2 },
        { label: 'Pending', value: 1 },
        { label: 'Assigned', value: 3 },
    ]

    function handleSelectionChangeFilter() {}
    return (
        <div className='container mx-auto pt-8 bg-slate-300'>
            <div className='flex pb-5'>
                <div className='flex-grow'>
                    <Tablelabel
                        label='List of Orders'
                        cssClasses='text-green-600'
                    />
                </div>
                <div className='flex-grow flex justify-evenly'>
                    <DropDown
                        options={options}
                        cssClasses=''
                        width='w-1/3'
                        onChange={handleSelectionChangeFilter}
                    />
                    <Link to='/orders/createOrder'>
                        <Button cssClasses=''>Create Order</Button>
                    </Link>
                </div>
            </div>
            <div className='container'>
                <div className='flex flex-col gap-6'>
                    <Orderlist orderDataList={sampleData} />
                </div>
            </div>
        </div>
    )
}

export default Order
