import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
	name: 'job',
	initialState: {
		jobs: [],
	},
	reducers: {
		setJob: (state, action) => {
			state.jobs = action.payload;
		},
	},
});

export const setJob = jobSlice.actions.setJob;
export default jobSlice.reducer;
