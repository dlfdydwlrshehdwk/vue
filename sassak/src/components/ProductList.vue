<template>
  <div>
    <ul>
        <ProductItem v-for="product in product" :key="product.id" :product="product"/>
    </ul>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
    name : "App",
    components : { ProductItem },
    props : {
        product : {
            type : Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {
            
        }
    },
}
</script>

<style>

</style>