<template>
  <li class="weather-item">
    <h3>{{ weather.label }}</h3>
    <p class="temperature">{{ weather.temperature }}&deg;c</p>
    <div>
      <p>습도 : {{ weather.humidity }}</p>
      <p>바람 : {{ weather.wind }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name : "WeatherItem",
  props : {
    weather : {
      type : Object,
      default(){
        return{
          label : '서울',
          code : 'Seoul',
          temperature : 20,
          humidity : 15,
          wind : 1.5
        }
      }
    }
  },
}
</script>

<style scoped>
  .weather-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }
  .weather-item > div{
    display: flex;
    gap: 30px;
  }
</style>