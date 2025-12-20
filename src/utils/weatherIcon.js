import { WEATHER_CODE_GROUP } from '@/constant/weatherCode.js'

export function getWeatherIcon(code) {
  if (WEATHER_CODE_GROUP.SUN.includes(code)) return sunIcon
  if (WEATHER_CODE_GROUP.CLOUDY.includes(code)) return cloudIcon
  if (WEATHER_CODE_GROUP.RAIN.includes(code)) return rainIcon
  if (WEATHER_CODE_GROUP.SNOW.includes(code)) return snowIcon
  if (WEATHER_CODE_GROUP.THUNDER.includes(code)) return thunderIcon

  return defaultIcon
}