import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    username:'',
    email:'',
    companyCode:'',
    userKey:'',
    pictureUrl:''
  },
  mutations:{
    username(state,name){
      state.username = name;
    },
    email(state,email){
      state.email = email;
    },
    companyCode(state,companyCode){
      state.companyCode = companyCode;
    },
    userKey(state,userKey){
      state.userKey = userKey;
    }
  },
  actions:{
    update_user_name(store,name){
      store.commit('username',name);
    },
    update_email(store,email){
      store.commit('email',email);
    },
    update_companyCode(store,companyCode){
      store.commit('companyCode',companyCode);
    },
    update_userKey(store,userKey){
      store.commit('userKey',userKey);
    }
  },
  getters: {
    isAuthenticated: (state) => {
      // if(state.username === '' && localStorage.getItem('login') === false){
      //       return false
      // }else {
      //   return true
      // }
      if(state.email === ''){
          return false;
      }else{
        return true;
      }
    },
    // other getters
  },
})

export default store
