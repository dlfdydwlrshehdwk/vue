<template>
  <div class="popup1_wrapper">
    <div class="modal" v-if="showPopupOne" @click="closePopupOne"></div>
    <div class="popup1_popup" v-if="showPopupOne" :style="{ width : popWid + 'px'}">
      <div class="popup1_header">
        <div>{{  popTitle }}</div>
        <div class="closePopup" 
        @click="closePopupOne"
        >닫기</div>
      </div>
      <div class="popup1_body">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <button class="btn" @click="showPopupTwo">팝업버튼2</button>
      </div>
      <div class="garimmak" v-if="data.showPopupTwo" @click="closeGarimmak"></div>
      <PopupTwo 
        popTitle = "팝업2"
        :popWid = 300
        :showPopupTwo="data.showPopupTwo"
        :showPopupOne = showPopupOne
        @closePopupTwo="data.showPopupTwo = false"
      />
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import PopupTwo from './PopupTwo.vue'
export default {
  name : "popupOne",
  components : {
    PopupTwo,
},
  props : {
    popTitle : {
      type : String,
      default : '팝업'
    },
    popWid : {
      type : Number,
      default : 500
    },
    showPopupOne : {
      type : Boolean,
      default : false
    }
  },
  setup(props, {emit}){
    const data = reactive({
      showPopupTwo : false
    })
    onMounted(() => {
      console.log(props)
    })
    const closePopupOne = () =>{
      data.showPopupTwo = false
      emit('closePopupOne')
    }
    const showPopupTwo = () => {
      data.showPopupTwo = true
    }
    const closeGarimmak = () => {
      data.showPopupTwo = false
    }
    return{
      data,
      closePopupOne,
      showPopupTwo,
      closeGarimmak
    }
  }
}
</script>

<style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  .popup1_popup{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    gap: 24px;
    border: 1px solid #000;
    border-radius: 40px;
    padding: 24px;
    background-color: #fff;
  }
  .popup1_header{
    display: flex;
    padding: 24px;
    border: 1px solid #000;
    border-radius: 35px;
    justify-content: space-between;
  }
  .closePopup {
    cursor: pointer;
  }
  .popup1_body{
    padding: 24px;
    border: 1px solid #000;
    border-radius: 35px;
  }
  .garimmak{
    background-color: rgba(222, 184, 135, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
</style>