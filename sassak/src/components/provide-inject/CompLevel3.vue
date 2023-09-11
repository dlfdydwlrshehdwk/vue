<template>
  <div>
  <h2>component 3</h2>
  <h3>데이터전송 {{ name }}</h3>
  </div>
</template>

<script>
export default {
  name : "compThree",
  inject : ["name"]
}
</script>

<style>

</style>