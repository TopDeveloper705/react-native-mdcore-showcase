import { CONST } from '@store'

export const setConfig = (config) => async (dispatch) => {
  dispatch({
    type: CONST.THEME_CONFIG_CHANGED,
    payload: { ...config }
  })
}
