<template>
  <div class="wrapper">
    <div class="container">
      <h2>Detail Page</h2>
      <button @click="popupClose">close</button>
      <input type="text" v-model="username">
      <button @click="sendData">send</button>
    </div>
  </div>
</template>

<script>
export default {
  name : "detailView",
  data(){
    return{
      username : ""
    }
  },
  methods : {
    popupClose(){
      this.$emit("popupClose")
    },
    sendData(){
      this.$emit("sendData", this.username)
    }
  }

}
</script>

<style scoped>
  .wrapper{
    position: fixed;
    background-color: rgba(0, 0, 0, 0.123);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .container {
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>