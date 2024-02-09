import React from 'react'
import Dropdown from './Dropdown'
import Button from './Button'

function Orderlist({ orderDataList }) {
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ]
    function handleClick() {}
    return (
        <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th
                            scope='col'
                            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                            OrderId
                        </th>
                        <th
                            scope='col'
                            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                            OrderName
                        </th>
                        <th
                            scope='col'
                            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                            AssignTo
                        </th>
                        <th
                            scope='col'
                            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                            OrderStatus
                        </th>
                        <th
                            scope='col'
                            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                    {orderDataList.map((record, index) => (
                        <tr key={record.orderId}>
                            <td className='px-6 py-4 whitespace-nowrap'>
                                {record.orderId}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap'>
                                {record.orderName}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap'>
                                {record.assignedTo}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap'>
                                <Dropdown
                                    defaultOption={record.orderStatus}
                                    options={options}
                                />
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap'>
                                <Button className='bg-green-400'>Save</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Orderlist
