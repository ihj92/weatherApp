import { WEATHER_CODE_GROUP } from '@/constants/weatherCode.js'

// 날씨 아이콘
import sunIcon from '@/assets/weather/sun.png'
import rainIcon from '@/assets/weather/rain.png'
import cloudIcon from '@/assets/weather/cloud.png'
import snowIcon from '@/assets/weather/snow.png'
import thunderIcon from '@/assets/weather/thunder.png'
import defaultIcon from '@/assets/weather/default.png'

export function getWeatherIcon(code) {
  if (!code) return defaultIcon
  if (WEATHER_CODE_GROUP.SUN.includes(code)) return sunIcon
  if (WEATHER_CODE_GROUP.CLOUDY.includes(code)) return cloudIcon
  if (WEATHER_CODE_GROUP.RAIN.includes(code)) return rainIcon
  if (WEATHER_CODE_GROUP.SNOW.includes(code)) return snowIcon
  if (WEATHER_CODE_GROUP.THUNDER.includes(code)) return thunderIcon

  return defaultIcon
}