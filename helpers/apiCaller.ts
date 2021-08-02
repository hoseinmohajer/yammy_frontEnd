import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios";
import { getLocalStorageWithExpiry, setLocalStorageWithExpiry, clearLocalStorage } from './storage';

export const apiCaller = () => {
	let needToken = true;
	// if (config) {
		// needToken is true by default
		// needToken = config.needToken === undefined ? true : config.needToken;
	// }

	const axiosInstance = axios.create({
		baseURL: process.env.REACT_APP_API_BASE_URL,
		headers: {
			Channel: process.env.REACT_APP_DEFAULT_CHANNEL_KEY,
			'Content-Type': 'application/json; charset=UTF-8',
			'Cache-Control': 'no-cache',
			Pragma: 'no-cache',
			Expires: '0',
		},
		responseType: 'json',
	});

	axiosInstance.interceptors.request.use(
		(config: AxiosRequestConfig): AxiosRequestConfig => {
			const refreshToken = getLocalStorageWithExpiry('refresh_token');
			const accessToken = getLocalStorageWithExpiry('access_token');
			if (needToken && !refreshToken && !accessToken) {
				// add accessToken to condition because of reset-password page that doesnt have refresh_token
				window.location.href = '/login';
			}
			if (accessToken && needToken) {
				config.headers['Authorization'] = `Bearer ${accessToken}`;
			}
			return config;
		},
		error => {
			Promise.reject(error);
		},
	);
	axiosInstance.interceptors.response.use(
		(response: AxiosResponse) => {
			return response;
		},
		error => {
			if (error) {
				const refreshToken = getLocalStorageWithExpiry('refresh_token');
				const { response, config, data } = error;
				const originalRequest = config;
				if (
					error &&
					error.response &&
					error.response.status === 401 &&
					originalRequest.url === '/api/godar-aggregator/v1/ordinaryUser/login/refresh/'
				) {
					window.location.href = '/login';
					return Promise.reject(error);
				}
				const validPages = [
					'/login',
					'/register',
					'/forget-password',
					'/forget-password/ceoVerification',
					'/register/ceoVerification',
					'/user/reset-password',
					'/user/profile',
				];
				if (
					!refreshToken &&
					originalRequest &&
					!originalRequest._retry &&
					validPages.indexOf(window.location.pathname) === -1
				) {
					clearLocalStorage();
					window.location.href = '/login';
				}
				if (refreshToken && error.response.status === 401 && originalRequest && !originalRequest._retry) {
					originalRequest._retry = true;
					config.headers['Authorization'] = `Bearer ${refreshToken}`;
					// get new refresh token
					return new Promise(function (resolve, reject) {
						axios
							.get('/api/godar-aggregator/v1/ordinaryUser/login/refresh/', {
								headers: {
									Authorization: `Bearer ${refreshToken}`,
									Channel: 'web',
								},
							})
							.then(tokenRefreshResponse => {
								if (tokenRefreshResponse.status === 401 || tokenRefreshResponse.status === 404) {
									window.location.href = '/login';
									return false;
								}
								// set token time one day
								const now = new Date();
								let tomorrow = new Date(now);
								tomorrow.setDate(tomorrow.getDate() + 1);
								setLocalStorageWithExpiry('access_token', tokenRefreshResponse.data.data.accessToken, tomorrow);
								setLocalStorageWithExpiry('refresh_token', tokenRefreshResponse.data.data.refreshToken, tomorrow);
								originalRequest.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.data.accessToken;
								resolve(axios(originalRequest));
							})
							.catch(error => {
								if (error.response.status === 401 || error.response.status === 404) {
									window.location.href = '/login';
									return false;
								}
								reject(error);
							});
					});
				}
				if (response) {
					return Promise.reject(response);
				}
				if (data) {
					return Promise.reject(data);
				}
				return Promise.reject(error);
			}
		},
	);

	return axiosInstance;
};
