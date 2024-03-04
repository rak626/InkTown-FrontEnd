import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	orderStatus: [],
	currentFilterStatus: -1,
}

export const orderSlice = createSlice({
	name: 'orderSlice',
	initialState,
	reducers: {
		addAllOrderStatus: (state, action) => {
			state.orderStatus = action.payload
		},
		changeFilterStatus: (state, action) => {
			state.currentFilterStatus = action.payload
		},
	},
})

export const { addAllOrderStatus, changeFilterStatus } = orderSlice.actions

export default orderSlice.reducer
