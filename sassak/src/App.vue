<template>
  <div>
    <h2>App</h2>
    <!-- <PropsEmit firstname="kim" lastname="dh" @send="send"/> -->
    <ProductStatus />
  </div>
</template>

<script>
// import PropsEmit from './components/composition/PropsEmit.vue'
import ProductStatus from './components/mixin/ProductStatus.vue';
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
    // methods: {
    //   send(){
    //     console.log('send')
    //   }
    // },
    components: { 
      ProductStatus
    },
    setup(){
      const send = function(){
        console.log('send받기완료')
      }
      return{
        send
      }
    }
};
</script>

<style></style>
