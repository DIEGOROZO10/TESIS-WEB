const experimentStore = {
  state: {
    experiment: localStorage.getItem('experiment') || {}
  },
  getters: {
    getExperiment (state) {
      return state.experiment
    }
  },
  mutations: {
    SET_EXPERIMENT (state, input) {
      state.experiment = input
      localStorage.setItem('experiment', input)
    }
  },
  actions: {
    setExperiment (context, input) {
      context.commit('SET_EXPERIMENT', input)
    }
  }
}
export default experimentStore
