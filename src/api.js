import axios from 'axios';

const api = axios.create({
	baseURL: 'http://fareedidris-api.herokuapp.com/ec2',
	headers: { 'Content-Type': 'application/json' }
});

export { api };
