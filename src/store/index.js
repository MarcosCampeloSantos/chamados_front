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
    }
  }
})
