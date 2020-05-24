import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    username:'',
    password:'',
    companyCode:'-M78CsNlBRR-j83D4PdJ',
    userKey:'-M8-ucWfSQ7fi23GkFts',//cheaf architect
    pictureUrl:''
  },
  mutations:{
    username(state,name){
      state.username = name;
    }
  },
  actions:{
    update_user_name(store,name){
      store.commit('username',name);
    }
  },
  getters: {
    isAuthenticated: (state) => {
      // if(state.username === '' && localStorage.getItem('login') === false){
      //       return false
      // }else {
      //   return true
      // }
      if(state.username === ''){
          return false;
      }else{
        return true;
      }
    },
    // other getters
  },
})

export default store
