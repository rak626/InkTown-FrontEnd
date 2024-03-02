import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { sendApiDetails } from '../utils/apiUtil'
import { options } from '../utils/sampleData'
import Button from './Button'
import Dropdown from './Dropdown'

function TableRow({ orderData }) {
    const [selectedOption, setSelectedOption] = useState(orderData.orderStatus)
    const [buttonDisable, setButtonDisabled] = useState(true)
    const selections = useSelector((state) => state.orderStatusList)
    const savedOrderLists = useSelector((state) => state.orderList)

    const savedOrderList = savedOrderLists.filter(
        (order) => order.orderId === orderData.orderId
    )[0]
    // console.log(selectedOption, buttonDisable)
    const reqBody = {
        userId: '7d7603e1-0fa6-457f-8721-0a7fadc1b5ff',
        orderId: orderData.orderId,
        status: parseInt(selectedOption),
    }
    const headers = {
        'Content-Type': 'application/json',
    }
    function handleButtonClick(e) {
        sendApiDetails('/order/updateStatus', headers, reqBody).catch((err) =>
            console.log(`this is error: -> ` + savedOrderList)
        )
        setButtonDisabled(prev => !prev)
    }
    const handleSelectChange = (e) => {
        if (e.target.value !== savedOrderList.orderStatus) {
            setSelectedOption(e.target.value)
            setButtonDisabled(false)
        }
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
                {orderData.assignedTo === 'SYSTEM'
                    ? 'Not Assigned'
                    : orderData.assignedTo}
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
                {orderData.isUrgent ? 'Yes' : 'No'}
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
                <Dropdown
                    defaultOption={selectedOption}
                    options={selections?.length > 0 ? selections : options}
                    onChangeHandler={handleSelectChange}
                />
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
                <Button
                    onClick={handleButtonClick}
                    isDisabled={buttonDisable}
                    className={buttonDisable ? 'bg-gray-500' : 'bg-green-500'}>
                    Save
                </Button>
            </td>
        </>
    )
}

TableRow.propTypes = {
  orderData: PropTypes.shape({
    orderStatus: PropTypes.string,
    orderId: PropTypes.string,
    orderName: PropTypes.string,
    assignedTo: PropTypes.string,
    isUrgent: PropTypes.bool,
  }).isRequired,
};

export default TableRow
