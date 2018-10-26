<template>
  <div >
    <van-tabbar v-model="active" @change='onchange'>
  <van-tabbar-item icon="shop" to="/" value='zhuye'>主页</van-tabbar-item>
  <van-tabbar-item icon="chat" to="/shop" dot >商店</van-tabbar-item>
  <van-tabbar-item icon="records" to="/cart" info="5">购物车</van-tabbar-item>
  <van-tabbar-item icon="gold-coin" info="20" to='/my'>我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>
<script>
  import { Tabbar, TabbarItem } from 'vant';
  export default {
    name: 'footer',
    components:{
      [Tabbar.name]:Tabbar,
      [TabbarItem.name]:TabbarItem

    },
    data() {
    return {
      active: 0
    }
  },
  methods:{
    onchange(active){
      console.log(this.active)
      if (this.active==0) {
        let title = '首页'
        this.$store.dispatch('Settitle',title)
      }
      if (this.active==1) {
        let title = '商店'
        this.$store.dispatch('Settitle',title)
      }
      if (this.active==2) {
        let title = '购物车'
        this.$store.dispatch('Settitle',title)
      }
      if (this.active==3) {
        let title = '我的'
        this.$store.dispatch('Settitle',title)
      }
    }
  }
  }


</script>
