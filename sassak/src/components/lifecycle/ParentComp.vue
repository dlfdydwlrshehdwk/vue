<template>
  <div>
    <h2>parent component</h2>
    <ChildComp />
  </div>
</template>

<script>
import ChildComp from './ChildComp.vue';
export default {
  name : 'parentComp',
  components : {
    ChildComp
  }
}
</script>

<style>

</style>