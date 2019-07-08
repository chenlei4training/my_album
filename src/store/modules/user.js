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

  updateIsSignin(state,{isLogin}) {
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