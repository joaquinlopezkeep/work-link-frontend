import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
	name: 'slice',
	initialState: {
		orders: [],
	},
	reducers: {
		setOrders: (state, action) => {
			state.orders = action.payload;
		},
	},
});

export const setOrders = orderSlice.actions.setOrders;
export default orderSlice.reducer;
