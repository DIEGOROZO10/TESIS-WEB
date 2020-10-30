import Vue from "vue";
import Vuex from "vuex";
import experimentStore from "./experiment"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    experiment: experimentStore
  }
});
