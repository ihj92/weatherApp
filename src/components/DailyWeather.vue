<template>
  <section class="daily-weather">
    <p class="sec-title">단기 예보</p>
    <ul class="daily-list">
      <li class="daily-item" v-for="(daily, index) in props.dailyWeather" :key="index">
        <span class="label">{{ daily.label }}</span>
        <div class="icon">
          <img :src="daily.icon" />
        </div>
        <span class="time">{{ daily.max }}</span>
        / 
        <span class="temp">{{ daily.min }}°</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
  const props = defineProps({
    dailyWeather: Array,
  })
</script>