<template>
  <section class="hourly-weather">
    <p class="sec-title">시간별 예보</p>
    <ul class="hourly-list">
      <li class="hourly-item" v-for="hour in props.hourlyWeather" :key="hour.time">
        <span class="time">{{ hour.time }}</span>
        <div class="icon">
          <img :src="hour.icon" />
        </div>
        <span class="temp">{{ hour.temp }}°</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
  const props = defineProps({
    hourlyWeather: Array,
  })
</script>