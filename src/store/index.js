import { createStore } from 'vuex'

export default createStore({
  state: {
    dados: JSON.parse(localStorage.getItem('auth') || "{}"),
    usuario: JSON.parse(localStorage.getItem('user') || "{}"),

  },
  mutations: {
    increment(state, dado){
      state.dados = dado
    },

    increment_user(state, dados){
      state.usuario = dados
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
      return state.usuario.name
    },

    isAdm(state){
      if(state.usuario.nivel == '1'){
        return true
      }else{
        return false
      }
    },

    isOp(state){
      if(state.usuario.nivel == '4'){
        return true
      }else{
        return false
      }
    },

    isUser(state){
      if(state.usuario.nivel == '2'){
        return true
      }else{
        return false
      }
    },

    isOpADM(state){
      if(state.usuario.operador == '1'){
        return true
      }else{
        return false
      }
    }
  }
})
