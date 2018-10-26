import { loginByUsername,loginSignup,getuserInfo } from '@/api/login'
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
        SET_ROLES: (state, roles) => {
          state.roles = roles
        }
  },

  actions: {
    LoginByUsername({ commit }, userInfo) {
    console.log('走了这')
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          console.log('返回数据'+response);
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
    LoginSignup({ commit }, userInfo) {
      console.log('注册')
      const username = userInfo.username.trim()
      console.log(username)
      return new Promise((resolve, reject) => {
        loginSignup(username, userInfo.password).then(response => {
          const data = response.data

          commit('SET_TOKEN', data.token)
          setToken(response.data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetuserInfo({commit,state}){
      console.log('打印token'+state.token);
      return new Promise((resolve, reject) => {
        getuserInfo(state.token).then(response => {
            if (!response.data) {
              reject('error')
            }
            const data = response.data.decoded
            console.log('用户信息：');
            console.log(data);
            if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
              commit('SET_ROLES', data.roles)
            } else {
              reject('getInfo: roles must be a non-null array !')
            }

            commit('SET_NAME', data.userName)
            commit('SET_AVATAR', data.avatar)
            commit('SET_INTRODUCTION', data.introduction)
            resolve(response)
          }).catch(error => {
            reject(error)
          })
      })
    },
    LogOut({commit,state}){
      console.log('退出登录');
      return new Promise((resolve,reject) => {
        removeToken();
        commit('SET_NAME', '')
        commit('SET_AVATAR', '')
        commit('SET_INTRODUCTION', '')
        commit('SET_ROLES', [])
      })
    }


  }
}

export default user
