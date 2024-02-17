import React from 'react'
import { useForm } from 'react-hook-form'
import { postReqHandler } from '../hooks/postReqHandler'
import { useNavigate } from 'react-router'
import { nanoid } from '@reduxjs/toolkit'

const CreateOrderPage = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const url = 'http://localhost:9090/order/create'
    function modifyBasedOnBackendModel(data) {
        return {
            ...data,
            isUrgent: data.isUrgent === 'true',
            squareFeet: parseInt(data.squareFeet),
            uniqueUserId: nanoid(),
        }
    }
    const onSubmit = async (data) => {
        const reqData = modifyBasedOnBackendModel(data)
        console.log(JSON.stringify(reqData))
        const resData = await postReqHandler(url, reqData)
        console.log('from order page')
        console.log(resData.orderId)
        // navigate(`/orders/${resData.orderId}`)
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col items-center w-lg mx-auto p-4 bg-white shadow-md rounded-md mt-14'>
            <div className='flex gap-32 justify-center'>
                <div>
                    <div className='mb-4'>
                        <label
                            htmlFor='customerName'
                            className='block text-gray-700 font-semibold mb-2'>
                            Customer Name
                        </label>
                        <input
                            type='text'
                            id='customerName'
                            {...register('customerName', { required: true })}
                            className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500'
                        />
                        {errors.customerName && (
                            <span className='text-red-500'>
                                Customer Name is required
                            </span>
                        )}
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='customerEmail'
                            className='block text-gray-700 font-semibold mb-2'>
                            Customer Email
                        </label>
                        <input
                            type='email'
                            id='customerEmail'
                            name='customerEmail'
                            {...register('customerEmail', { required: true })}
                            className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500'
                        />
                        {errors.customerEmail && (
                            <span className='text-red-500'>
                                Customer Email is required
                            </span>
                        )}
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='customerPhoneNo'
                            className='block text-gray-700 font-semibold mb-2'>
                            Customer PhoneNo
                        </label>
                        <input
                            type='tel'
                            id='customerPhoneNo'
                            name='customerPhoneNo'
                            {...register('customerPhoneNo', { required: true })}
                            className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500'
                        />
                        {errors.customerPhoneNo && (
                            <span className='text-red-500'>
                                Customer PhoneNo is required
                            </span>
                        )}
                    </div>
                </div>
                <div>
                    <div className='mb-4'>
                        <label
                            htmlFor='orderName'
                            className='block text-gray-700 font-semibold mb-2'>
                            Order Name
                        </label>
                        <input
                            type='text'
                            id='orderName'
                            name='orderName'
                            {...register('orderName', { required: true })}
                            className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500'
                        />
                        {errors.orderName && (
                            <span className='text-red-500'>
                                Order Name is required
                            </span>
                        )}
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='orderDescription'
                            className='block text-gray-700 font-semibold mb-2'>
                            Order Description
                        </label>
                        <textarea
                            id='orderDescription'
                            name='orderDescription'
                            {...register('orderDesc', { required: true })}
                            className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500'
                        />
                        {errors.orderDescription && (
                            <span className='text-red-500'>
                                Order Description is required
                            </span>
                        )}
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='squareFeet'
                            className='block text-gray-700 font-semibold mb-2'>
                            Square Feet
                        </label>
                        <input
                            type='number'
                            id='squareFeet'
                            name='squareFeet'
                            {...register('squareFeet', { required: true })}
                            className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500'
                        />
                        {errors.squareFeet && (
                            <span className='text-red-500'>
                                Squre Feet is required
                            </span>
                        )}
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='isUrgent'
                            className='block text-gray-700 font-semibold mb-2'>
                            Is Urgent?
                        </label>
                        <select
                            id='isUrgent'
                            name='isUrgent'
                            {...register('isUrgent', { required: true })}
                            className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500'>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                        {errors.isUrgent && (
                            <span className='text-red-500'>
                                Please select an option
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <button
                type='submit'
                className='my-8 w-48 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>
                Submit
            </button>
        </form>
    )
}

export default CreateOrderPage
