import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import Button from './Button'
import useSendPost from '../hooks/useSendPost'

function TableRow({ orderData }) {
    const options = [
        { label: 'New', value: 0 },
        { label: 'InProgress', value: 2 },
        { label: 'Pending', value: 1 },
        { label: 'Assigned', value: 3 },
    ]
    const [selectedOption, setSelectedOption] = useState(orderData.orderStatus)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const url = ''
    function handleButtonClick() {
        // const {data, loading, error} = useSendPost(url, {selectedOption})
        // console.log(data);
        console.log(
            'saveStatusHappened.... with selectedOption : ' + selectedOption
        )
    }
    const handleSelectChange = (option) => {
        setSelectedOption(prev => option)
        setButtonDisabled(option === selectedOption)
    }
    return (
        <>
            <td className='px-6 py-4 whitespace-nowrap'>
                <Link to={`/orders/${orderData.orderId}`}>
                    <h4 className='underline underline-offset-4 text-blue-700'>
                        {orderData.orderId}
                    </h4>
                </Link>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
                {orderData.orderName}
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
                {orderData.assignedTo}
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
                <Dropdown
                    defaultOption={selectedOption}
                    options={options}
                    onChange={handleSelectChange}
                />
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
                <Button
                    cssClasses='bg-green-500'
                    onClick={handleButtonClick}
                    isDisabled={buttonDisabled}>
                    Save
                </Button>
            </td>
        </>
    )
}

export default TableRow
