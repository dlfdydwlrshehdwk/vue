<template>
  <div>
      <div>
        <h1>Watchers</h1>
        <div>{{ money }}</div>
        <button @click="money = money + 100">+100</button>
        <button @click="money = money - 100">-100</button>
      </div>
      <h3>{{ receit }}</h3>
      <button @click="receit.food+=500">receit 조작</button>
      <hr>
      <input type="text" v-model="name">
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      name : "kim",
      money : 0,
      receit : {
        food : 3000,
        fee : 200,
        fare : 10000
      }
    }
  },
  // data에서 값이 바뀔때마다 체크를해줌(바뀐값, 바뀌기전값)
  watch:{
    money(newValue, oldValue){
      console.log(newValue,oldValue)
    },
    // 객체데이터면 이렇게 해야한다고함
    receit : {
      handler(newvalue){
        console.log(newvalue)
      },
      // 객체일때 바뀌는걸 확인할수있게해줌
      deep : true
    },
    name : {
      handler(newvalue){
        console.log(newvalue);
      },
      // 바뀌어야만 체크를해주는데 이거하면 첫값도 체크해줌
      immediate : true
    }
  },
  computed:{
  },
  directives:{
    
  },
  methods:{
  }
}
</script>

<style>

</style>
