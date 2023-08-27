<template>
  <div>
    <div>{{ add(0) }}</div>
    <div>{{ add(1) }}</div>
    <div>{{ addadd(50) }}</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      age : 30
    }
  },
  methods:{
    add(num=0){
      console.log(num);
      // this를 써야 vue가 가진 데이터에 접근가능!
      return this.age + num;
    },
    addadd(num){
      return this.add(num)
    }
  }
}
</script>

<style>
</style>
