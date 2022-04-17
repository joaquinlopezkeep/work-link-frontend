import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'authenticate',
	initialState: {
		token: '',
		authEmail: '',
		isAuthenticated: false,
	},
	reducers: {
		authenticateUser: (state, action) => {
			state.token = action.payload.token;
			state.isAuthenticated = !!state.token;
		},
		setAuthEmail: (state, action) => {
			state.authEmail = action.payload;
		},
		loggout: state => {
			state.token = null;
			state.isAuthenticated = false;
		},
	},
});

export const authenticateUser = authSlice.actions.authenticateUser;
export const setAuthEmail = authSlice.actions.setAuthEmail;
export const loggout = authSlice.actions.loggout;
export default authSlice.reducer;
