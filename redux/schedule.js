import { createSlice } from '@reduxjs/toolkit';

const ScheduleSlice = createSlice({
	name: 'schedule',
	initialState: {
		schedules: [],
	},
	reducers: {
		setSchedules: (state, action) => {
			state.schedules = action.payload;
		},
	},
});

export const setSchedules = ScheduleSlice.actions.setSchedules;
export default ScheduleSlice.reducer;
