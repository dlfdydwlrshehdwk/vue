<template>
  <div>
    <h2>App</h2>
    <ParentComp />
  </div>
</template>

<script>
import ParentComp from './components/lifecycle/ParentComp.vue'
export default {
    name: "App",
    data() {
        return {
        };
    },
    provide(){
      return{
      }
    },
    watch: {},
    computed: {},
    directives: {},
    methods: {
    },
    components: { 
      ParentComp
    }
};
</script>

<style></style>
