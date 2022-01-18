import { createStore } from 'vuex'

export default createStore({
  state: {
    dados: JSON.parse(localStorage.getItem('auth') || "{}")
  },
  mutations: {
    increment(state, dado){
      state.dados = dado
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    GetDados(state){
      return state.dados
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
    },

    isOp(state){
      if(state.dados.user.nivel == '4'){
        return true
      }else{
        return false
      }
    },

    isUser(state){
      if(state.dados.user.nivel == '2'){
        return true
      }else{
        return false
      }
    },
  }
})
