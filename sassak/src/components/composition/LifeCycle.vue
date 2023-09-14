<template>
  <div>
    <h2>LifeCycle</h2>
    <h3>{{ data.name }}</h3>
    <button @click="chgName('park')">버튼</button>
    <input type="text" v-model="data.name" ref="inputRef">
  </div>
</template>

<script>
import { onMounted,onBeforeMount,onBeforeUpdate,onUpdated, reactive, ref} from 'vue';
export default {
  name : "LifeCycle",
  setup(){
    const inputRef = ref(null) 
    let data = reactive({
      name : 'kim'
    })
    onBeforeMount(()=>{
      console.log('onBeforeMount')
    })
    onMounted(()=>{
      console.log('onMounted')
      console.log(inputRef)
      inputRef.value.focus()
    })
    onBeforeUpdate(()=>{
      console.log('onBeforeUpdate')
    })
    onUpdated(()=>{
      console.log('onUpdated')
    })
    function chgName(name){
      data.name = name
    }
    return{
      data,
      chgName,
      inputRef,
    }
  }
}
</script>

<style>

</style>