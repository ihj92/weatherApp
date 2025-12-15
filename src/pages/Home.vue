<template>
	<div class="container">
		<header>
			<div>
				<span>{{ today }}</span>
				<p class="mt-2">남양주시 별내동</p>
			</div>
		</header>
		
		<main>
			<section class="current-weather">
				<div class="cw-ani">로띠영역</div>
				<strong class="cw-temp">30º</strong>
				<p class="cw-diff">어제보다 2º 높아요</p>
				<div class="cw-range">
					<span>최고: 30º</span>
					<span>최저: 20º</span>
				</div>
			</section>
			
			<section class="today">
				<span class="sec-title">Today</span>
			</section>
			<section class="week">
				<span class="sec-title">Next Forecast</span>
			</section> 
		</main>
  </div>
</template>

<script setup>
	import { onMounted, ref, computed } from "vue";
	import { weatherApi } from '@/apis'
	import { kakaoApi } from '@/apis'

	const weather = ref(null);
	const errorMessage = ref('')

	onMounted(() => {
		if(!navigator.geolocation) {
			errorMessage.value = '이 브라우저는 위치 정보를 지원하지 않습니다.'
			return;
		}

		navigator.geolocation.getCurrentPosition(async (pos) => {
			const { latitude, longitude } = pos.coords

			try {
				const addressRes = await kakaoApi.getAddressByCoords(latitude, longitude)

				console.log('kakao!!', addressRes)
			} catch(e) {
				 errorMessage.value = '정보를 불러오지 못했습니다.'
			}
		})
	})

	// 오늘 날짜
	const today = computed(() => {
		const date = new Date()
		const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

		return `${date.getFullYear()}년 ${String(date.getMonth() + 1).padStart(2, '0')}월 ${String(date.getDate()).padStart(2, '0')}일 ${days[date.getDay()]}`
	})
</script>