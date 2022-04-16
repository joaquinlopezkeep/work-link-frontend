import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'authenticate',
	initialState: {
		token: '',

		isAuthenticated: false,
	},
	reducers: {
		authenticateUser: (state, action) => {
			state.token = action.payload.token;
			state.isAuthenticated = !!state.token;
		},
		loggout: state => {
			state.token = null;
			state.isAuthenticated = false;
		},
	},
});

export const authenticateUser = authSlice.actions.authenticateUser;
export const loggout = authSlice.actions.loggout;
export default authSlice.reducer;
