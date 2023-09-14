<template>
  <div>
    <h2>{{ state.username }}</h2>
    <h3>{{ isHandSome }}</h3>
    <h4>{{  username }}</h4>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue';
export default {
  name : "TestComponent",
  setup(){
    let isHandSome = ref(false)
    const state = reactive({
      username : 'haha'
    })
    return{
      state,
      isHandSome,
      ...toRefs(state),
    }
  }


  // 컴포지션 API 방식
  // export default {
  //   name : "TestComponent",
  //   setup(){
  //     let isHandSome = ref(false)
  //     let ugly = isHandSome
  //     isHandSome.value = true
  //     const state = reactive({
        
  //     })
  //     return{
  //       state,
  //       ugly
  //     }
  //   }
  // 템플릿에서 ugly의 값은 true이다 . 일방적인 js에서는 false로 찍힘 반응성이 없기때문  

  // import { reactive, toRefs } from 'vue';
  // setup(){
  //   const state = reactive({
  //     username : 'hi',
  //   })
  //   return toRefs(state)
  // 템플릿에서 {{ username }} 이라고 하면 잘 나옴 {{ state.username }} 이렇게 할 필요 없다는소리
    
  // }
  // data(){
  //   return{
  //     username : "hi"
  //   }
  // }
}
</script>

<style>

</style>