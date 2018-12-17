import axios from 'axios';

const BASE_URL = 'http://fareedidris-api.herokuapp.com/'

function upload(formData) {
    const url = `${BASE_URL}/midcore/upload`
    return axios.post(url, formData)
	.then(x => x.data)
}

export { upload }
