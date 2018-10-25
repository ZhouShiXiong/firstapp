<template>
  <div class="home">
      <div ><span class="title">登录</span></div>
      <div class='aa'></div>
      <div class='content'>
      <van-cell-group  >
        <van-field
            label="用户名"
            v-model="username"
            icon="question"
            placeholder="请输入用户名"
            bind:click-icon="onClickIcon"
            
        />
        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
        />
        </van-cell-group>
        </div>
        <div class="button">
            <div>  <van-button  type="warning" @click="signup">注册</van-button></div>
            <div><van-button type="danger" @click="login" >登录</van-button></div>
          
        

        </div>
        
  </div>
</template>

<script>
// @ is an alias to /src

import {CellGroup,Field, Button} from 'vant'

export default {
  name: 'login',
  data(){
      return{
          username:'',
          password:''
      }
  },
  components: {
      [CellGroup.name]:CellGroup,
      [Field.name]:Field,
      [Button.name]:Button
  },
  methods:{
      signup(){
          console.log('111')
      },
      login(){
          const userinfo={'username':this.username,'password':this.password}
          this.$store.dispatch('LoginByUsername', userinfo)
          console.log(userinfo)
      }
   
  }
}
</script>


<style>
.home{
    display: flex;
    height:50vh;
    flex-direction: column;
    align-items: center;
    justify-content: center    
}
.aa{
    height: 5vh;
}
.title{
    font-size: 4vh
}
.button{
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-top: 20px;
    justify-content: space-around;
}


</style>

