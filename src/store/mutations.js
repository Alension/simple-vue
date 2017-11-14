import {PLUS_DIFF, GET_DATA} from './mutation-types'

const mutations = {
  [PLUS_DIFF] (state, payload) {
    state.count = state.count + payload
  },
  [GET_DATA] (state, payload) {
    state.question_data = payload
  }
}

export default mutations
