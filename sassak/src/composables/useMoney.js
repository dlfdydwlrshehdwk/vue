import {ref} from 'vue'
export default function useMoney(){
  const totalMoney = ref(0);
  function addMoney(price){
    totalMoney.value += price
  }
  return{
    totalMoney,
    addMoney
  }
}