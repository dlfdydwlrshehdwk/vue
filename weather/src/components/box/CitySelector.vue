<template>
  <div>
    <ul class="city-selector">
      <li :class="{isSelected : x.selected == true}" @click="selected(x)" v-for="(x,i) in cities" :key="i">{{ x.label }}</li>
    </ul>
  </div>
</template>

<script>
import {reactive} from 'vue'
export default {
  name : "citySelector",
  setup() {
    const cities = reactive([
      { city : "Seoul", label : "서울", selected : false},
      { city : "Tokyo", label : "도쿄", selected : false},
      { city : "London", label : "런던", selected : false},
      { city : "Moscow", label : "모스크바", selected : false},
      { city : "Yakutsk", label : "야크추크", selected : false}
    ])
    const selected = function(city){
      city.selected = !city.selected
    }
    return{
      cities,
      selected
    }
  },











  // 이건되는데 setup은 왜안대는거지
  // data() {
  //   return {
  //     cities : [
  //     { city : "Seoul", label : "서울", selected : false},
  //     { city : "Tokyo", label : "도쿄", selected : false},
  //     { city : "London", label : "런던", selected : false},
  //     { city : "Moscow", label : "모스크바", selected : false},
  //     { city : "Yakutsk", label : "야크추크", selected : false}
  //   ]
  //   }
  // },
  // methods: {
  //   selected(city){
  //     city.selected = true
  //     console.log(city)
  //   }
  // },
}
</script>

<style scoped>
  .city-selector{
    display: grid;
    grid-template-columns: repeat(5,1fr);
  }
  .city-selector li{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
  }
  .city-selector li.isSelected{
    color: white;
    background: red;
  }
</style>