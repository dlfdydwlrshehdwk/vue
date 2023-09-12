<template>
  <div>
    <h2>App</h2>
    <ProductStatus />
  </div>
</template>

<script>
import ProductStatus from './components/mixin/ProductStatus.vue'
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
      ProductStatus
    }
};
</script>

<style></style>
