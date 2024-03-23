import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	orderStatus: [],
	currentFilterStatus: -1,
	curOrder: null,
}

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		addAllOrderStatus: (state, action) => {
			state.orderStatus = action.payload
		},
		changeFilterStatus: (state, action) => {
			state.currentFilterStatus = action.payload
		},
		addOrder: (state, action) => {
			state.curOrder = action.payload
		},
		updateOrderStatusInCurOrder: (state, action) => {
			state.curOrder = { ...state.curOrder, ...action.payload }
		},
	},
})

export const {
	addAllOrderStatus,
	changeFilterStatus,
	addOrder,
	updateOrderStatusInCurOrder,
} = orderSlice.actions

export default orderSlice.reducer
