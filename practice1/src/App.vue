<template>
  <div>
    <div id="header">
      헤더
    </div>
    <div id="container">
      <button class="btn" @click="isShowPopupOne">팝업버튼</button>
      <PopupOne 
        popTitle = "제목"
        :popWid = 1000
        :showPopupOne="data.showPopupOne"
        @closePopupOne = closePopupOne
      />
    </div>
    <div id="footer">
      푸터
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import PopupOne from './components/popup/PopupOne.vue'
export default {
  name: 'App',
  components: {
    PopupOne,
  },
  setup(){
    const data = reactive({
      showPopupOne : false,
    })
    const isShowPopupOne = () =>{
      data.showPopupOne = true;
    }
    const closePopupOne = () => {
      data.showPopupOne = false;
    }
    return {
      data,
      isShowPopupOne,
      closePopupOne
    }
  },
}
</script>

<style>
  html,body{
    margin: 0;
    padding: 0;
  }
  body * {
    margin: 0;
    padding: 0;
  }
  body{
    position: relative;
  }
  #header{
    height: 100px;
    background-color: skyblue;
  }
  #container{
    min-height: calc(100vh - 100px);
  }
  #footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: #555;
  }
</style>
