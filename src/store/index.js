import { createStore } from 'vuex'

export default createStore({
  state: {
    dados: JSON.parse(localStorage.getItem('auth') || "{}")
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    GetDados(state){
      return state
    },

    GetName(state){
      return state.dados.user.name
    },

    isAdm(state){
      if(state.dados.user.nivel == '1'){
        return true
      }else{
        return false
      }
    }
  }
})
