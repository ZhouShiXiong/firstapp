import axios from 'axios'


export function loginByUsername(username, password) {
    console.log('走了这！！')

    return axios({
        method:"post",
        url:"http://192.168.31.162:3001/login",
        data:{
            username:username,
            password:password
        }
    }).then((res)=>{
        console.log('dddd');
    })
  
  }