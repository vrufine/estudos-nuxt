import Vuex from 'vuex'

const createStore = () => new Vuex.Store({
  state: () => ({
    usuarioLogado: false
  }),
  mutations: {
    'SET_USUARIO': (state, usuario) => {
      state.usuarioLogado = usuario
    }
  },
  actions: {
    fazerLogin: ({ commit }, dados) => new Promise((resolve, reject) => {
      if (!dados.usuario || !dados.senha) {
        reject(new Error('Você precisa informar usuário e senha!'))
      }
      commit('SET_USUARIO', { ...dados })
      resolve()
    }),
    fazerLogout: ({ commit }) => new Promise((resolve, reject) => {
      commit('SET_USUARIO', {})
      resolve()
    })
  },
  getters: {
    obterUsuarioLogado: state => state.usuarioLogado
  }
})

export default createStore
