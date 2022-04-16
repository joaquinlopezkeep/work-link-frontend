import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		url: '',
		first_name: '',
		last_name: '',
		email: '',
		groups: [],
	},
	reducers: {
		setCurrentUser: (state, action) => {
			state.url = action.payload.url;
			state.first_name = action.payload.first_name;
			state.last_name = action.payload.last_name;
			state.email = action.payload.email;
			state.groups = action.payload.groups;
		},
	},
});

export const setCurrentUser = userSlice.actions.setCurrentUser;
export default userSlice.reducer;
