import { http } from "./http";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export const weatherApi = {
	getCurrentWeather(q) {
		return http.get('/current.json', {
			params: {
				key: API_KEY,
				q,
			}
		})
	}
}