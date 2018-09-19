import { CHANGE_CURRENT_CITY, GET_HEADER_HEIGHT, SET_CITY_DATA } from './mutation-types'

const mutations = {
  [SET_CITY_DATA](state, payload) {
    state.cityData = payload;
    return state.cityData;
  },
  [CHANGE_CURRENT_CITY](state, payload) {
    state.currenyCity = payload;
    return state.currenyCity;
  },
  [GET_HEADER_HEIGHT](state, val) {
    state.headerHeight = val;
    return state.headerHeight;
  }
}
export default mutations;
