import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orderList: [],
    orderStatusList: [],
    orderListByFilter: [],
}

export const orderSlice = createSlice({
    name: 'orderSlice',
    initialState,
    reducers: {
        addAllOrders: (state, { type, payload }) => {
            state.orderList = payload
        },
        getAllOrderStatus: (state, action) => {
            state.orderStatusList = action.payload
        },
        addOrderToFilter: (state, { type, payload }) => {
            state.orderListByFilter = payload
        },
        getOrder: (state, { type, payload }) => {
            return state.orderList.filter((order) => order.orderId == payload)
        },
    },
})

export const { addAllOrders, getOrder, getAllOrderStatus, addOrderToFilter } =
    orderSlice.actions

export default orderSlice.reducer
