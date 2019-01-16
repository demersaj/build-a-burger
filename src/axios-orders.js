import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://build-a-burger-399bc.firebaseio.com/'
});

export default instance;