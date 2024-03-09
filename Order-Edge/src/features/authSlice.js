import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isAuthenticated: false,
	curUser: {},
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthentication: (state, action) => {
			state.isAuthenticated = action.payload
		},
		setCurrentUser: (state, action) => {
			state.curUser = action.payload
		},
	},
})

export const { setAuthentication, setCurrentUser } = authSlice.actions

export default authSlice.reducer
