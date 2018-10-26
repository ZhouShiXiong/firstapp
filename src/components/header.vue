<template>
  <div class='header'>
    <span>{{title}}</span>
  </div>
</template>

<script>
import store from '../store/index.js'
  export default {
    computed:{
      title(){
        return(store.state.pages.title)
      }
    }
  }
</script>




<style >
    .header{
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #aaa
    }
</style>
