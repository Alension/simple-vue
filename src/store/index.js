import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  count: 1,
  question_data: {}
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
