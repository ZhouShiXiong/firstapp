import router from './router'
import store from './store'
import {getToken} from '@/utils/auth'



//
//
router.beforeEach(function (to, from, next) {
    if (getToken()) {
      // router.push('/')
      const roles =store.state.user.roles
      console.log(roles);

      if (roles.length==0) {
        console.log('拉取信息');
        store.dispatch('GetuserInfo')

      }
      next()

    }
    else {
      console.log('没token');
      if (to.path=='/login') {
        next()
      }else {
        next('/login')
      }

    }


})
