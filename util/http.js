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

export async function authenticate(email, password) {
	const res = await axios.post(AUTH_URL, {
		username: email,
		password: password,
	});
	console.log(res.status);
	console.log(res.headers);
	console.log(res.data);
	if (!res.data.hasOwnProperty('access_token')) {
		throw new Error(res.error_message);
	}

	const token = res.data.access_token;
	return token;
}

export async function name(header) {
	const res = await axios.get(EMPLOYEES_URL, header);
}
