<template>
	<div class="container">
		<header>
			<div>
				<span>25 May, Wednesday</span>
				<p class="mt-2">남양주시 별내동</p>
			</div>
		</header>
		
		<main>
			<section class="visual-area">
				<div class="lottie">로띠영역</div>
				<strong class="temperature">30º</strong>
				<p class="text">어제보다 2º 높아요</p>
				<div class="text">
					<span>최고: 30º</span>
					<span>최저: 20º</span>
				</div>
			</section>
			
			<section class="today-area">
				<span>Today</span>
			</section>
			<section class="week-area">
				<span>Next Forecast</span>
			</section> 
		</main>
  </div>
</template>

<script setup>
	import { onMounted, ref } from "vue";
	import { weatherApi } from '@/apis'

	const weather = ref(null);
	const errorMessage = ref('')

	onMounted(() => {
		if(!navigator.geolocation) {
			errorMessage.value = '이 브라우저는 위치 정보를 지원하지 않습니다.'
			return;
		}

		navigator.geolocation.getCurrentPosition(async (pos) => {
			const lat = pos.coords.latitude;
			const lon = pos.coords.longitude;
			const q = `${lat},${lon}`

			console.log('location', q)

			try {
				const res = await weatherApi.getCurrentWeather(q)
				// weather.value = res
				console.log('res', res.data)
			} catch (err) {
				errorMessage.value = '날씨 정보를 불러오는 중 오류가 발생했습니다.'
			}
		})
	})
</script>