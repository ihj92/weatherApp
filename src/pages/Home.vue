<template>
	<div class="container p-5">
		<header>
			<div>
				<p>25 May, Wednesday</p>
				<strong>남양주시 별내동</strong>
			</div>
		</header>
		
		<body>
			<section class="visual-area">
				<div>로띠영역</div>
				<strong>30º</strong>
				<p>어제보다 2º 높아요</p>
				<div>
				<span class="text-gray-500">최고: 30º</span>
				<span>최저: 20º</span>
				</div>
			</section>
			
			<section class="today-area"></section>
			<section class="week-area"></section> 
		</body>
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