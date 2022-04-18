import axios from 'axios';
import {
	AUTH_URL,
	EMPLOYEES_URL,
	GROUPS_URL,
	SCHEDULES_URL,
	SITES_URL,
	JOBS_URL,
	PRODUCTS_URL,
	GET_USER_URL,
	ORDERS_URL,
} from './api';

axios.defaults.baseURL = 'https://worklink.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * http request for returning an auth token
 * @param {String} email
 * @param {String} password
 * @returns {String} OauthV2 token
 */
export async function authenticate(email, password) {
	const res = await axios.post(AUTH_URL, {
		username: email,
		password: password,
	});
	// 401 not considered an error, best to look for access_token and return error if not found
	if (!res.data.hasOwnProperty('access_token')) {
		throw new Error(res.error_message);
	}
	return res.data.access_token;
}

/**
 * http request for fetching the current users details
 * @param {String} token
 * @returns {Object} Object
 */
export async function fetchUser(email, token) {
	const res = await axios.get(EMPLOYEES_URL + `?search=${email}`, {
		headers: { Authorization: 'Bearer ' + token },
	});
	return res.data[0];
}

/**
 * http request for fetching sites
 * @param {String} token
 * @returns {Object}
 */
export async function fetchSites(token) {
	const res = await axios.get(SITES_URL, {
		headers: { Authorization: 'Bearer ' + token },
	});
	return res.data;
}

/**
 * http request for fetching jobs specific to a site
 * @param {String} siteName
 * @param {String} token
 * @returns {Object} array of objects
 */
export async function fetchJob(siteName, token) {
	const res = await axios.get(JOBS_URL + `?search=${siteName}`, {
		headers: { Authorization: 'Bearer ' + token },
	});
	return res.data;
}

/**
 * http request for fetching orders specific to a site
 * @param {String} siteName
 * @param {String} token
 * @returns {Object} array of objects
 */
export async function fetchOrders(siteName, token) {
	const res = await axios.get(ORDERS_URL + `?search=${siteName}`, {
		headers: { Authorization: 'Bearer ' + token },
	});
	return res.data;
}

export async function fetchSchedules(email, token) {
	const res = await axios.get(SCHEDULES_URL + `?search=${email}`, {
		headers: { Authorization: 'Bearer ' + token },
	});
	return res.data;
}
