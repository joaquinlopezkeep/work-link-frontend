import { createSlice } from '@reduxjs/toolkit';

const siteSlice = createSlice({
	name: 'sites',
	initialState: {
		sites: [],
	},
	reducers: {
		setCurrentSites: (state, action) => {
			state.sites = action.payload;
		},
	},
});

export const setCurrentSites = siteSlice.actions.setCurrentSites;
export default siteSlice.reducer;
