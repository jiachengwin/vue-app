import utils from '../../utils'

const typeArrays = [
  'LOGIN',
  'LOGOUT',
  'TOGGLE_HEADER',
  'TOGGLE_FOOTER',
  'TOGGLE_TABS',
  'TOGGLE_LOADING'
]

const types = {}

for (let type of typeArrays) {
  types[type] = type
}

const state = {
  ui: {
    hasHeader: false,
    hasFooter: true,
    fixFooter: true,
    hasTabs: false,
    loading: false
  },
  user: utils.cache.get('user'),
  userSetting: utils.cache.get('userSetting')
}

const getters = {
  hasHeader() {
    return state.ui.hasHeader
  },
  hasFooter() {
    return state.ui.hasFooter
  },
  fixFooter() {
    return state.ui.fixFooter
  },
  hasTabs() {
    return state.ui.hasTabs
  },
  isLoading() {
    return state.ui.loading
  }
}

const actions = {
  // toggleTab({
  //   commit,
  //   state
  // }, show) {
  //   commit(types.TOGGLE_TAB, show)
  // }
}

const mutations = {
  [types.LOGIN](state, data) {
    utils.cache.set('user', data.user)
    utils.cache.set('userSetting', data.userSetting)
    state.user = data.user
    state.userSetting = data.userSetting
  },
  [types.LOGOUT](state) {
    utils.cache.clear()
    state.user = null
    state.userSetting = null
  },
  [types.TOGGLE_HEADER](state, flag) {
    state.ui.hasHeader = flag
  },
  [types.TOGGLE_FOOTER](state, flag) {
    state.ui.hasFooter = flag
  },
  [types.TOGGLE_TABS](state, flag) {
    state.ui.hasTabs = flag
  },
  [types.TOGGLE_LOADING](state, flag) {
    state.ui.loading = flag
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}