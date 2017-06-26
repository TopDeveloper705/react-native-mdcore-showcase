const INITIAL_STATE = {
  code: 'init'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'test':
      return {
        ...state,
        code: action.payload.code
      }
    default:
      return state
  }
}
