import React from 'react'
import Tablelabel from '../components/Tablelabel'
import DropDown from '../components/Dropdown'
import Orderlist from '../components/Orderlist'

function Order() {
    const sampleData = [
        {
            orderId: 200,
            orderName: 'sample name from DB',
            assignedTo: 'Dipak',
            orderStatus: 'pending design',
        },
        {
            orderId: 50000340,
            orderName: 'sample name2 from DB',
            assignedTo: 'Rakesh',
            orderStatus: 'pending Delivery',
        },
    ]
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ]
    return (
        <div className='container m-auto pt-8 bg-slate-300'>
            <div className='flex justify-between'>
                <Tablelabel label='List of Orders' />
                <div>
                    <DropDown options={options} />
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
