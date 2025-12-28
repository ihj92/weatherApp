import axios from "axios"

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const weatherHttp = axios.create({
	baseURL: 'https://api.weatherapi.com/v1',
	timeout: 10000,
})

export const weatherApi = {
	getForecastWeather(q, days) {
		return weatherHttp.get('/forecast.json', {
			params: {
				key: API_KEY,
				q,
				days
			}
		})
	},
	getHistoryWeather(q, dt) {
		return weatherHttp.get('/history.json', {
			params: {
				key: API_KEY,
				q,
				dt
			}
		})
	}
}