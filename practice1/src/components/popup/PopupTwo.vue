<template>
  <div class="popup2_popup"  v-if="showPopupTwo && showPopupOne" :style="{ width : popWid + 'px'}">
      <div class="popup2_header">
        <div>{{  popTitle }}</div>
        <div class="closePopup" 
        @click="$emit('closePopupTwo')"
        >닫기</div>
      </div>
      <div class="popup2_body">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </div>
    </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
export default {
  name : 'popupTwo',
  props : {
    popTitle : {
      type : String,
      default: '팝업창2'
    },
    showPopupTwo : {
      type : Boolean,
      default : false
    },
    popWid : {
      type : Number,
      default : 300
    },
    showPopupOne : {
      type : Boolean,
      default : false
    }
  },
  setup(props){
    const data = reactive({
    })
    onMounted(() => {
      console.log(props)
    })

    return{
      data
    }
  }
}
</script>

<style scoped>
  .popup2_popup{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: beige;
    border-radius: 35px;
    border: 1px solid #000;
    padding: 24px
  }
  .popup2_header{
    display: flex;
    justify-content: space-between;
  }
</style>