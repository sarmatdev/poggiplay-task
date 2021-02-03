import { searchPackages } from '../../api/packages/packages.api'

export default {
  state: {
    packages: [],
  },
  mutations: {
    setPackages(state, packages) {
      state.packages = packages
    },
  },
  actions: {
    searchPackages({ commit }, query) {
      return searchPackages(query)
        .then((res) => {
          commit('setPackages', res.data.objects)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  getters: {
    packages: (s) => s.packages,
  },
}
