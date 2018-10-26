<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>{{name}}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import store from '../store/index.js'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed:{
    name(){
      return(store.state.user.name)
    }
  }
}
</script>

<style >
    .home{
      width: 100%
    }
</style>
