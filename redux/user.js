import { createSlice } from '@reduxjs/toolkit';

const userSlice = {
	name: 'user',
	initialState: {
		url: '',
		first_name: '',
		last_name: '',
		date_joined: '',
		email: '',
		groups: [],
	},
};
