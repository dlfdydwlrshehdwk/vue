<template>
  <div>
    <h2>component 1</h2>
    <CompLevel2 />
  </div>
</template>

<script>
import CompLevel2 from './CompLevel2.vue';
export default {
  name : "compOne",
  components : {
    CompLevel2
  }
}
</script>

<style>

</style>