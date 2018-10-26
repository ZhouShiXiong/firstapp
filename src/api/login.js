import axios from 'axios'


export function loginByUsername(username, password) {
    console.log('走了这！！')

    return axios({
        method:"post",
        url:"http://localhost:3001/login",
        data:{
            username:username,
            password:password
        }
    }).then((res)=>{
        console.log(res);
        return res
    })

  }


  export function loginSignup(username, password) {
      console.log('走了这！！')

      return axios({
          method:"post",
          url:"http://localhost:3001/signup",
          data:{
              username:username,
              password:password
          }
      }).then((res)=>{
          console.log('dddd');
      })

    }


    export function getuserInfo(token) {
        console.log('走了这！！')

        return axios({
            method:"get",
            url:"http://localhost:3001/info",
            params:{token}
        }).then((res)=>{
            return res
        })

      }
