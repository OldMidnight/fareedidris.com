import axios from 'axios';

const api = axios.create({
	baseURL: 'http://fareedidris-api.herokuapp.com/',
	headers: { 'Content-Type': 'application/json' }
});

export { api };
