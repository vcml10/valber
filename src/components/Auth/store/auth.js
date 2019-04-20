import router from '@/router'
import firebase from 'firebase'

// initial state
// user: { email, displayName, photoURL}
const state = {
  user: null,
  error: null,
  loading: false,
  admin: false
}

// getters
const getters = {
  isAuthenticated (state) {
    return state.user !== null && state.user !== undefined
  },
  isAdmin (state) {
    if (state.admin === false || state.admin === null || state.admin === undefined) {
      return false
    } else {
      return true
    }
  }
}

// actions
const actions = {
  userSignUp ({commit, dispatch}, payload) {
    commit('setLoading', true)
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        let user = firebase.auth().currentUser
        user.updateProfile({
          displayName: payload.name
        })

        firebase.database().ref('admins').child(user.uid).set({
          email: user.email
        })

        const obj = {
          email: user.email,
          displayName: payload.name
        }
        commit('setUser', obj)
        commit('setLoading', false)
        router.push('/')
      })
      .catch(error => {
        commit('setError', error.message)
        commit('setLoading', false)
      })
  },
  userSignIn ({commit, dispatch}, payload) {
    commit('setLoading', true)
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        const user = {
          email: firebaseUser.email,
          displayName: firebaseUser.displayName
        }

        firebase.database().ref('admins').once('value', function (snapshot) {
          snapshot.forEach(function (child) {
            var tmp = child.val()
            if (tmp.admin === true && user.email === tmp.email) {
              commit('setAdmin', true)
            }
          })
        })

        commit('setUser', user)
        commit('setError', null)
        commit('setLoading', false)
        router.push('/')
      })
      .catch(error => {
        dispatch('translateError', error)
        commit('setLoading', false)
      })
  },
  userSignInWithGoogle ({commit}) {
    commit('setLoading', true)
    var provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        // var token = result.credential.accessToken
        var user = result.user
        commit('setUser', {email: user.email, displayName: user.displayName, photoURL: user.photoURL})
        commit('setLoading', false)
        commit('setError', null)

        firebase.database().ref('admins').once('value', function (snapshot) {
          snapshot.forEach(function (child) {
            var tmp = child.val()
            if (tmp.admin === true && user.email === tmp.email) {
              commit('setAdmin', true)
            }
          })
        })

        router.push('/')
      })
      .catch(function (error) {
        // Handle Errors here.
        // var errorCode = error.code
        // var errorMessage = error.message
        console.log(error.message)
        // The email of the user's account used.
        // var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential
        // console.log(errorCode)
        // console.log(errorMessage)
        // console.log(email)
        // console.log(credential)
      })
  },
  userSignInWithFacebook ({commit}) {
    commit('setLoading', true)
    var provider = new firebase.auth.FacebookAuthProvider()
    provider.addScope('user_birthday')
    provider.setCustomParameters({
      'display': 'popup'
    })
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Facebook Access Token.
        // var token = result.credential.accessToken
        var user = result.user
        commit('setUser', {email: user.email, displayName: user.displayName, photoURL: user.photoURL})
        commit('setLoading', false)
        commit('setError', null)

        firebase.database().ref('admins').once('value', function (snapshot) {
          snapshot.forEach(function (child) {
            var tmp = child.val()
            if (tmp.admin === true && user.email === tmp.email) {
              commit('setAdmin', true)
            }
          })
        })

        router.push('/')
      })
  },
  userSignInWithTwitter ({commit}) {
    commit('setLoading', true)
    var provider = new firebase.auth.TwitterAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        // var token = result.credential.accessToken
        // var secret = result.credential.secret
        var user = result.user
        commit('setUser', {email: user.email, displayName: user.displayName, photoURL: user.photoURL})
        commit('setLoading', false)
        commit('setError', null)

        firebase.database().ref('admins').once('value', function (snapshot) {
          snapshot.forEach(function (child) {
            var tmp = child.val()
            if (tmp.admin === true && tmp.email === user.email) {
              commit('setAdmin', true)
            }
          })
        })

        router.push('/')
      }).catch(function (error) {
        console.log('Um erro aconteceu')
        console.log(error.code)
        console.log(error.message)
        // Handle Errors here.
        // var errorCode = error.code
        // var errorMessage = error.message
        // The email of the user's account used.
        // var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential
      })
  },
  autoSignIn ({commit}, payload) {
    const user = {
      email: payload.email,
      displayName: payload.displayName,
      photoURL: payload.photoURL
    }

    firebase.database().ref('admins').once('value', function (snapshot) {
      snapshot.forEach(function (child) {
        var tmp = child.val()
        if (tmp.admin === true && user.email === tmp.email) {
          commit('setAdmin', true)
        }
      })
    })

    commit('setUser', user)
  },
  userSignOut ({commit}) {
    firebase.auth().signOut()
    commit('setUser', null)
    commit('setAdmin', false)
    router.push('/')
  },
  translateError ({commit, state}, payload) {
    if (payload.code === 'auth/wrong-password') {
      commit('setError', 'Senha inválida ou usuário não tem senha cadastrada.')
    } else if (payload.code === 'auth/user-not-found') {
      commit('setError', 'Não encontramos nenhum usuário com este e-mail. Verifique o e-mail e tente novamente.')
    } else if (payload.code === 'auth/too-many-requests') {
      commit('setError', 'Nós bloqueamos todas as requisições deste dispositivo. Tente novamente mais tarde.')
    }
  }
}

// mutations
const mutations = {
  setAdmin (state, payload) {
    state.admin = payload
  },
  setUser (state, payload) {
    state.user = payload
  },
  setError (state, payload) {
    state.error = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
