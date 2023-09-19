<template>
  <div>
    <ul class="weatherlist">
        <WeatherItem v-for="x in weatherList" :key="x.code" :weather="x"/>
    </ul>
  </div>
</template>

<script>
import WeatherItem from './WeatherItem.vue';
export default {
    name: "weatherList",
    props : {
      weatherList : Array,
    },
    components: { 
      WeatherItem 
    }
}
</script>

<style scoped>
  .weatherlist {
    display: grid;
    grid-template-columns: repeat(3,1fr);
  }
</style>