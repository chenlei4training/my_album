import apiUser from '../../api/apiUser'


// initial state
const state = {
  userName: "",
  isSingIn: false
}

// getters
const getters = {
  isLogin: state => {
    return state.isSingIn
  }
}

// actions
const actions = {

  denglu({ commit, state }, {userName, password}) {

    apiUser.singIn(userName, password).then((result) => {
      if (result) {
        alert('success')
      } else {
        alert('failed')
      }
      commit('singInState', {userName, result}) // mutations中的函数名 singInState
    })
  },

  singIn({ commit, state }, payload) {

    apiUser.singIn(payload.userName, payload.password).then((result) => {
      if (result) {
        alert('success')
      } else {
        alert('failed')
      }
      let userName = payload.userName
      commit('singInState', {userName, result}) // mutations中的函数名 singInState
    })
  }
}


// mutations
const mutations = {
  singInState(state, {useName, result}) {
    state.userName = useName
    state.isSingIn = result
  },

  updateIsSigniIn(state,{isLogin}) {
    state.isSingIn = isLogin
  }
}



export default {

  namespaced: true,

  state,

  getters,

  actions,

  mutations

}