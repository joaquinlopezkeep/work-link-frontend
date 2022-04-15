import axios from 'axios';
import {
	AUTH_URL,
	EMPLOYEES_URL,
	GROUPS_URL,
	SCHEDULES_URL,
	SITES_URL,
	JOBS_URL,
	PRODUCTS_URL,
} from './api';

export async function login(email, password) {
	const res = await axios.post(AUTH_URL, {
		username: email,
		password: password,
	});
	return res.status;
}

export const getEmployees = user_header => {
	axios
		.get(EMPLOYEES_URL, (header = user_header))
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		});
};
export const getGroups = user_header => {
	axios
		.get(GROUPS_URL, (header = user_header))
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		});
};
export const getSites = user_header => {
	axios
		.get(SITES_URL, (header = user_header))
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		});
};
export const getJobs = user_header => {
	axios
		.get(JOBS_URL, (header = user_header))
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		});
};
export const getSchedules = user_header => {
	axios
		.get(SCHEDULES_URL, (header = user_header))
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		});
};
export const getProducts = user_header => {
	axios
		.get(PRODUCTS_URL, (header = user_header))
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		});
};
