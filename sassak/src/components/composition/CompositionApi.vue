
<template>
  <div>
    <h2>{{  username }}</h2>
    <button @click="changeName">chgName</button>
    <h2>{{ name }} : {{ price }}</h2>
    <button @click="changeItem">chgItem</button>
    <div>
      <input type="text" v-model="username">
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
export default {
  name : "CompositionApi",
  setup(){
    const username = ref('kim')

    const item = reactive({
      name : 'box',
      price : 30000
    })

    function changeName(){
      username.value = 'park'
    }

    function changeItem(){
      item.name = 'computer'
      item.price = 3000000
    }
    return{
      username,
      changeName,
      changeItem,
      ...toRefs(item)
    }
  }

}
</script>

<style>

</style>