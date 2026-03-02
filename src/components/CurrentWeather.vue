<template>
  <section class="current-weather">
    <div class="cw-img">
      <img :src= props.dayWeather.icon />
    </div>
    <strong class="cw-temp">{{ props.currentTemp }}º</strong>
    <p class="cw-diff">{{ props.compareText }}</p>
    <div class="cw-range">
      <span>최고: {{ props.dayWeather.max }}º</span>
      <span>최저: {{ props.dayWeather.min }}º</span>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    dayWeather: Object,
    currentTemp: Number,
    compareText: String,
  })
</script>