// store.js
import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    usuario: null,
    isLoggedIn: false
  },
  mutations: {
    setUsuario(state, usuario) {
      state.usuario = usuario
    },
    setLoggedIn(state, value) {
      state.isLoggedIn = value
    }
  },
  actions: {
    login({ commit }, { usuario, isLoggedIn }) {
      commit('setUsuario', usuario)
      commit('setLoggedIn', isLoggedIn)
    },
    logout({ commit }) {
      commit('setUsuario', null)
      commit('setLoggedIn', false)
    }
  },
  getters: {
    usuario: state => state.usuario,
    isLoggedIn: state => state.isLoggedIn
  }
})
