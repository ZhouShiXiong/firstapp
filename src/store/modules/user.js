import { loginByUsername } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
   
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
 
  },

  actions: {
    LoginByUsername({ commit }, userInfo) {
    console.log('走了这')
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const data = response.data
          console.log('~~~~~111~~~~~~~~~~~~~~' + data.token)
          commit('SET_TOKEN', data.token)
          setToken(response.data.token)
          console.log('难道走了这？')
          resolve()
        }).catch(error => {
          console.log('走了这')
          reject(error)
        })
      })
    },
    // LoginSignup({ commit }, userInfo) {
    //   console.log('注册')
    //   const username = userInfo.username.trim()
    //   console.log(username)
    //   return new Promise((resolve, reject) => {
    //     loginSignup(username, userInfo.password).then(response => {
    //       const data = response.data

    //       commit('SET_TOKEN', data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

  
  }
}

export default user
