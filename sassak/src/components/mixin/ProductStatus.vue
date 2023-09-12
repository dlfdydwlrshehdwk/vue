<template>
  <div>
    <h2>전체{{ totalMoney }}</h2>
    <div>
      <button @click="addMoney(100)">100</button>
      <button @click="addMoney(200)">200</button>
      <button @click="addMoney(300)">300</button>
      <button @click="addMoney(400)">400</button>
    </div>
  </div>
</template>

<script>
export default {
  name : "productStatus",
  data (){
    return {
      totalMoney : 0,
    }
  },
  methods : {
    addMoney (price){
      this.totalMoney += price
    }
  }
}
</script>

<style>

</style>