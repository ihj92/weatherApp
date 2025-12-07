import axios from "axios";

export const api = {
	callGet(url, params, signal) {
		return axios.call({
			method: 'GET',
			url: url,
			params: params,
			signal: signal
		})
	}
}