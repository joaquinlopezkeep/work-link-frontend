import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth';
import UserReducer from './user';
import SiteReducer from './sites';
import JobReducer from './job';

export const store = configureStore({
	reducer: {
		authenticate: AuthReducer,
		user: UserReducer,
		site: SiteReducer,
		job: JobReducer,
	},
});
