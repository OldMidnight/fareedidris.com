import axios from 'axios';

const api = axios.create({
        baseURL: 'https://fareedidris-api.herokuapp.com/ec2/',
	timeout: 3000,
	headers: { 'Content-Type': 'application/json' }
});

export { api };
