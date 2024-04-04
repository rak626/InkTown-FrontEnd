import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	orderStatus: [],
	currentFilterStatus: -1,
	curOrder: null,
	toggle: false,
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
		updateToggle: (state, action) => {
			state.toggle = action.payload
		},
	},
})

export const {
	addAllOrderStatus,
	changeFilterStatus,
	addOrder,
	updateOrderStatusInCurOrder,
	updateToggle,
} = orderSlice.actions

export default orderSlice.reducer
