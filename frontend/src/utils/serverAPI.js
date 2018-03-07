const AUTH_KEY = 'dev_test_1';
const API_HOST = 'http://localhost:3001';

const reqHeaders = {
	'Accept': 'application/json',
	'Authorization': AUTH_KEY 
};

export const GetCategories = () => 
	fetch(`${API_HOST}/categories`, { 
		headers: reqHeaders
	}).then((res) => res.json());
