
<template>
  <div>
    <h2>{{  username }}</h2>
    <hr>
    <div>
      price : <input type="number" v-model="price">
      amount : <input type="number" v-model="amount">
      <h3>Total Price : {{ totalPrice }}</h3>
    </div>
    <hr>
    <div>
      first <input type="text" v-model="first">
      last <input type="text" v-model="last">
      home <input type="text" v-model="home.city">
      <h3>Full : {{  full }}</h3>
    </div>
  </div>
</template>

<script>
import { ref, computed, reactive, toRefs, watch } from 'vue';
export default {
  name : "ComputedWatch",
  setup(){
    const username = ref('kim')
    const price = ref(5000)
    const amount = ref(1)

    const state = reactive({
      first : 'kim',
      last : 'dh',
      home : {
        city : 'seoul',
        type : 'apart'
      }
    })
    const full = computed(()=>{
      return state.first + state.last
    })
    watch(()=>{return state.first}, (newValue, oldValue) => {
      console.log(newValue,oldValue)
    } )
    watch(()=>{
      return {...state.home}
    },(newValue,oldValue)=>{
      console.log(newValue.city,oldValue.city)
    })

    const totalPrice = computed(()=>{
      return price.value * amount.value
    })
    watch(price,(newValue, oldValue) => {
      console.log(newValue,oldValue)
    } )
    // 감시할값,(바뀐값, 이전값) => { 감지되었을때 실행할함수 }
    return{
      username,
      price,
      amount,
      totalPrice,
      ...toRefs(state),
      full
    }
  }

}
</script>

<style>

</style>