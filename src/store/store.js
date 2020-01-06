import Vue from 'vue'
import Vuex from 'vuex'

import personal from "@/store/modules/personalModuleStore.js"


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      personal: personal
  }
})
