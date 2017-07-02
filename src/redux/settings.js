export const CODE_CHANGED = 'redux/settings/CODE_CHANGED'

const INITIAL_STATE = {
  code: 'init'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CODE_CHANGED:
      return {
        ...state,
        code: action.payload.code
      }
    default:
      return state
  }
}

export const setCode = code => async dispatch => {
  dispatch({
    type: CODE_CHANGED,
    payload: { code }
  })
}
