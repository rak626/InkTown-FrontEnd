import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DropDown from '../components/Dropdown'
import Orderlist from '../components/Orderlist'
import Tablelabel from '../components/Tablelabel'
import { addOrderToFilter } from '../features/orderSlice'
import { fetchApiDetailsWithParams } from '../utils/apiUtil'

function Order() {
    const [selectedOption, setSelectedOption] = useState(-1)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const fetchAllOrderBasedOnFilter = (orderUrl) => {
        fetchApiDetailsWithParams(
            orderUrl,
            {
                'Content-Type': 'application/json',
            },
            { orderStatus: parseInt(selectedOption) }
        )
            .then((data) => {
                dispatch(addOrderToFilter(data))
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        fetchAllOrderBasedOnFilter('/order/getOrdersByStatus')
    }, [selectedOption])

    const orderList = useSelector((state) => state.orderList)
    const orderListByFilter = useSelector((state) => state.orderListByFilter)
    const savedOrderList = selectedOption === -1 ? orderList : orderListByFilter

    const selections = useSelector((state) => state.orderStatusList)

    function handleSelectionChangeFilter(e) {
        setSelectedOption(e.target.value)
    }

    return loading ? (
        <div className='container mx-auto text-2xl text-red-600 align-middle'>
            Loading ...
        </div>
    ) : (
        <div className='container mx-auto pt-8 bg-slate-300'>
            <div className='flex pb-5'>
                <div className='flex-grow'>
                    <Tablelabel
                        label='List of Orders'
                        className='text-green-600'
                    />
                </div>
                <div className='flex-grow flex justify-evenly'>
                    <DropDown
                        options={[
                            {
                                displayValue: 'Select Status Filter',
                                orderStatus: -1,
                            },
                            ...selections,
                        ]}
                        defaultOption={-1}
                        className=''
                        width='w-1/3'
                        onChangeHandler={handleSelectionChangeFilter}
                    />
                </div>
            </div>
            <div className='container'>
                <div className='flex flex-col gap-6'>
                    <Orderlist orderDataList={savedOrderList} />
                </div>
            </div>
        </div>
    )
}

export default Order
