import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isAuthenticated: false,
	curUser: {},
	token: '',
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
		setToken: (state, action) => {
			state.token = action.payload
		},
	},
})

export const { setAuthentication, setCurrentUser, setToken } = authSlice.actions

export default authSlice.reducer
