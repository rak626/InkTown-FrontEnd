import { configureStore } from '@reduxjs/toolkit'
import orderReducer from '../features/orderSlice'
import authReducer from '../features/authSlice'

export const store = configureStore({
	reducer: {
		order: orderReducer,
		auth: authReducer,
	},
})
