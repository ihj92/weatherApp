import axios from "axios"

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const weatherHttp = axios.create({
	baseURL: 'https://api.weatherapi.com/v1',
	timeout: 10000,
})

export const weatherApi = {
	getCurrentWeather(q) {
		return weatherHttp.get('/current.json', {
			params: {
				key: API_KEY,
				q,
			}
		})
	}
}