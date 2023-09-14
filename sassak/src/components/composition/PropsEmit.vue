<template>
  <div>
    <hr>
    <h2>PropsEmit</h2>
    <h3>{{ fullname }}</h3>
    <button @click="send">버튼</button>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name : "propsEmit",
  props : ['firstname','lastname'],
  // 셋업에서 처음받는 인자는 무조건 props다 두번째는 context
  setup(props,context){
    console.log(context)
    const fullname = computed(()=>{
      return `${props.firstname}${props.lastname}`
    })
    const send = () => {
      context.emit('send')
    }

    return{
      fullname,
      send
    }
  }
}
</script>

<style>

</style>