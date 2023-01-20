import { createStore } from 'vuex'

export default createStore({
  state: {
    //Valores/estados que podem ser acessados de toda aplicação
    search: "",
  },
  getters: {
    //Calculos são feitos aqui
  },
  mutations: {
    //Alterar valores do estado
    changeSearch(state, data){
      state.search = data
    }
  },
  actions: {
  },
  modules: {
  }
})
