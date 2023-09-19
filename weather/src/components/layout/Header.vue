<template>
  <header class="header">
    <h1>Weather API</h1>
    <p>{{ username }}님 반갑습니다.</p>
  </header>
</template>

<script>
export default {
  name : 'headerLayout',
  data(){
    return{
      username : 'kim'
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-content: center;
    background: linear-gradient(15deg, skyblue 15%, white,skyblue);
    color: white;
  }
</style>
