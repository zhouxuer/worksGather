import {
  getCookie
} from '@/assets/utils'

export const state = () => ({
})

export const mutations = {
}

export const actions = {
  nuxtServerInit ({ commit }, { req, res }) {
    if (req.headers.cookie) {
      commit('auth/saveToken', {
        token: getCookie(req.headers.cookie, 'token')
      })
    }
  }
}
