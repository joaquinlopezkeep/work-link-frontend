import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth';
import UserReducer from './user';
import SiteReducer from './sites';
import JobReducer from './job';
import OrderReducer from './order';
import ScheduleReducer from './schedule';

export const store = configureStore({
	reducer: {
		authenticate: AuthReducer,
		user: UserReducer,
		site: SiteReducer,
		job: JobReducer,
		order: OrderReducer,
		schedule: ScheduleReducer,
	},
});
