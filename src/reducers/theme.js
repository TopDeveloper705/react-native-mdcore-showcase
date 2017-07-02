import { CONST } from '@store'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONST.THEME_CONFIG_CHANGED:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
