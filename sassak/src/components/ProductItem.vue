<template>
  <li>
    <p class="listitem">{{product.name}}</p>
    <p class="price">{{ product.price }}</p>
  </li>
</template>

<script>
export default {
  name : "product-item",
  props : {
    product : Object
  }
}
</script>

<style scoped>

</style>