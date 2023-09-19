<template>
  <div id="wrap">
    <Header />
    <TitBox title="원하는 나라를 클릭해주세요"/>
    <CitySelector @selectCity="selectCity"/>
    <WeatherList :weatherList="weatherList"/>
  </div>
</template>

<script>
import weatherMixin from '@/mixins/weatherMixin.js'
import Header from './components/layout/Header.vue'
import TitBox from './components/box/Titbox.vue'
import CitySelector from './components/box/CitySelector.vue'
import WeatherList from './components/box/WeatherList.vue'
import './assets/css/style.css'
import { reactive } from 'vue'
export default {
  name: 'App',
  components: {
    Header,
    TitBox,
    CitySelector,
    WeatherList,
  },
  mixins : [weatherMixin],
  setup() {
    const weatherList =  reactive(
      []
    )
    const selectCity = async function(city){
      if(city.selected == true){
        const weather = await weatherMixin.methods.getWeatherInfo(city)
        console.log(weather)
        weatherList.push(weather)
      }
      else {
        const index = weatherList.findIndex(weather => weather.label == city.city)
        weatherList.splice(index , 1)
        console.log(index)
        console.log(weatherList)
      }
    }
    return{
      weatherList,
      selectCity,
    }
  }
}
</script>

<style>
</style>
