<template>
  <div id="app">
    <div class="header">
        <Header />
    </div>
    <div id="nav">

      <router-view/>

    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>
<script>

  import Footer from './components/footer.vue'
  import Header from './components/header.vue'
  import { Tabbar, TabbarItem } from 'vant';
  export default {
    name: 'app',

    components:{
      [Tabbar.name]:Tabbar,
      [TabbarItem.name]:TabbarItem,
      Footer,Header

    }
  }


</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100%;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh
}
#nav {
  flex: 1;
  overflow-y: scroll;
  /* justify-content: center; */
  align-items: center;
  display: flex;
  flex-direction: column;
}
.header{
  width: 100%;
  height: 60px;
  flex-shrink: 0;
}
.footer{
  width: 100%;
  height: 60px;
  flex-shrink: 0;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
