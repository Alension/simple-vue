import {GET_DATA} from './mutation-types'

export const getData = ({commit}) => {
  fetch('static/data.json').then((res) => {
    return res.json()
  }).then((data) => {
    commit(GET_DATA, data)
  })
}
