export const THEME_CONFIG_CHANGED = 'redux/theme/THEME_CONFIG_CHANGED'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case THEME_CONFIG_CHANGED:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export const setConfig = config => async dispatch => {
  dispatch({
    type: THEME_CONFIG_CHANGED,
    payload: { ...config }
  })
}
