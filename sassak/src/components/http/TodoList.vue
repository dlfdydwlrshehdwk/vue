<template>
  <div>
  <h2>HP</h2>
  <button @click="request">request</button>
  <ul>
    <li v-for="(x,i) in requestList" :key="i">{{ x.title }}</li>
  </ul>

  <div>
    <label>할일</label>
    <input type="text" v-model="todoItem.title">
    <button @click="createTodo">전송</button>
  </div>

  <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name : "HTTP",
  data() {
    return {
      requestList : [],
      errorMessage :"",
      todoItem : {
        title : "",
        completed : false
      },

    }
  },
  methods : {
    request(){
      const url = "https://jsonplaceholder.typicode.com/todos"
      axios.get(url)
      .then((res) => this.requestList = res.data)
      .catch((e) => {
        console.log(e)
        this.errorMessage = "에러"
      })
    },
    createTodo(){
      const url = "https://jsonplaceholder.typicode.com/todos"
      axios.post(url,this.todoItem)
      .then((res)=>console.log(res))
      .catch((e)=>console.log(e))
    }
  }
}
</script>

<style>

</style>