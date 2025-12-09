<template>
	<p>111222</p>
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