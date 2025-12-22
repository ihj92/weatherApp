<template>
	<div class="container">
		<header>
			<div class="header-info">
				<span>{{ today }}</span>
				<p class="mt-2">{{ addressName }}</p>
			</div>
		</header>
		
		<main>
			<section class="current-weather">
				<div class="cw-img">
					<img :src=dayWeather.icon />
				</div>
				<strong class="cw-temp">{{ currentTemp }}º</strong>
				<!-- <p class="cw-diff">어제보다 2º 높아요</p> -->
				<div class="cw-range">
					<span>최고: {{ dayWeather.max }}º</span>
					<span>최저: {{ dayWeather.min }}º</span>
				</div>
			</section>
			
			<!-- 시간별 날씨 -->
			<section class="hourly-weather">
				<p class="sec-title">시간별 예보</p>
				<ul class="hourly-list">
					<li class="hourly-item" v-for="hour in hourlyWeather" :key="hour.time">
						<span class="time">{{ hour.time }}</span>
						<div class="icon">
							<img :src="hour.icon" alt="" />
						</div>
						<span class="temp">{{ hour.temp }}°</span>
					</li>
				</ul>
			</section>

			<!-- 3일 날씨 -->
			<section class="daily-weather">
				<p class="sec-title">단기 예보</p>
				<ul class="daily-list">
					<li class="daily-item" v-for="(daily, index) in dailyWeather" :key="index">
						<div class="icon">
							<img :src="daily.icon" alt="" />
						</div>
						<span class="time">{{ daily.max }}</span>
						/ 
						<span class="temp">{{ daily.min }}°</span>
					</li>
				</ul>
			</section>
		</main>
  </div>
</template>

<script setup>
	import { onMounted, ref, computed } from "vue";
	import { weatherApi } from '@/apis'
	import { kakaoApi } from '@/apis'
	import { WEATHER_CODE_GROUP } from '@/constants/weatherCode'
	import { getWeatherIcon } from '@/utils/weatherIcon'

	// ref
	const addressName = ref('')
	const dayWeather = ref({})
	const currentTemp = ref(null)
	const hourlyWeather = ref([])
	const dailyWeather = ref([])
	const errorMessage = ref('')

	// 오늘 날짜
	const today = computed(() => {
		const date = new Date()
		const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

		return `${date.getFullYear()}년 ${String(date.getMonth() + 1).padStart(2, '0')}월 ${String(date.getDate()).padStart(2, '0')}일 ${days[date.getDay()]}`
	})

	onMounted(() => {
		if(!navigator.geolocation) {
			errorMessage.value = '이 브라우저는 위치 정보를 지원하지 않습니다.'
			return;
		}

		navigator.geolocation.getCurrentPosition(async (pos) => {
			const { latitude, longitude } = pos.coords
			const q = `${latitude},${longitude}`

			try {
				const [addressRes, weatherRes] = await Promise.all([
					kakaoApi.getAddressByCoords(latitude, longitude),
					weatherApi.getForecastWeather(q, 3)
				])

				// 현재 위치
				const doc = addressRes.data.documents[0]
				addressName.value = doc.address_name

				// 현재 기온
				currentTemp.value = weatherRes.data.current.temp_c

				// 오늘 최고,최저 기온 / 날씨 아이콘
				const day = weatherRes.data.forecast.forecastday[0].day
				dayWeather.value = {
					max: day.maxtemp_c,
					min: day.mintemp_c,
					icon: getWeatherIcon(day.condition.code),
				}

				// 시간별 날씨
				const forecastDays = weatherRes.data.forecast.forecastday

				const now = new Date()
				const currentHour = now.getHours()

				const allHours = [
					...forecastDays[0].hour,
					...forecastDays[1].hour,
				]

				hourlyWeather.value = allHours
				.slice(currentHour, currentHour + 24)
				.map(h => ({
					time: h.time.split(' ')[1],
					temp: h.temp_c,
					icon: getWeatherIcon(h.condition.code)
				}))

				// 3일 날씨
				dailyWeather.value = forecastDays
				.map(h => ({
					max: h.day.maxtemp_c,
					min: h.day.mintemp_c,
					icon: getWeatherIcon(h.day.condition.code)
				}))

			} catch(e) {
					errorMessage.value = '정보를 불러오지 못했습니다.'
			}
		},
		() => {
				errorMessage.value = '위치 정보를 가져오지 못했습니다.'
			}
		)
	})
</script>