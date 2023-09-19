<template>
  <div id="wrap">
    <Header />
    <TitBox title="원하는 나라를 클릭해주세요"/>
    <CitySelector />
    <WeatherList />
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import TitBox from './components/box/Titbox.vue'
import CitySelector from './components/box/CitySelector.vue'
import WeatherList from './components/box/WeatherList.vue'
import './assets/css/style.css'
export default {
  name: 'App',
  components: {
    Header,
    TitBox,
    CitySelector,
    WeatherList,
  }
}
</script>

<style>
</style>
