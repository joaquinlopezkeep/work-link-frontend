import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth';
import UserReducer from './user';

export const store = configureStore({
	reducer: {
		authenticate: AuthReducer,
		user: UserReducer,
	},
});
