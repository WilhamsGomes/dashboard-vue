import { createStore } from 'vuex'

export default createStore({
  state: {
    //Valores/estados que podem ser acessados de toda aplicação
    search: "",
    openNavBar: true,
  },
  getters: {
    //Calculos são feitos aqui
  },
  mutations: {
    //Alterar valores do estado
    changeSearch(state, data){
      state.search = data
    },

    changeNavBar(state){
      console.log("Cheguei aqui")
      state.openNavBar = !state.openNavBar
      console.log(state.openNavBar)
    }
  },
  actions: {
  },
  modules: {
  }
})
