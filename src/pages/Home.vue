<template>
	<p>111</p>
</template>

<script setup>
	import { weatherApi } from '@/apis'

	const fetchData = async () => {
		const res = await weatherApi.getCurrentWeather('seoul')

		console.log('111', res.data.current)
	}

	fetchData()
</script>