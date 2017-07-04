import { NavigationActions } from 'react-navigation'

const navigate = (screenNavigator, routeName, params) => {
  screenNavigator.navigate(routeName, params)
}

export const closeDrawer = () => (dispatch, { drawerNavigator }) => {
  drawerNavigator.dispatch(
    NavigationActions.navigate({
      routeName: 'DrawerClose'
    })
  )
}

export const goBack = () => (dispatch, { screenNavigator }) => {
  screenNavigator.dispatch(NavigationActions.back())
}

export const openDrawer = () => (dispatch, { drawerNavigator }) => {
  drawerNavigator.dispatch(
    NavigationActions.navigate({
      routeName: 'DrawerOpen'
    })
  )
}

export const toBottomNavigation = () => (dispatch, { screenNavigator }) => {
  navigate(screenNavigator, 'bottomNavigation')
}

export const toButtons = () => (dispatch, { screenNavigator }) => {
  navigate(screenNavigator, 'buttons')
}

export const toCards = () => (dispatch, { screenNavigator }) => {
  navigate(screenNavigator, 'cards')
}

export const toTextFields = () => (dispatch, { screenNavigator }) => {
  navigate(screenNavigator, 'textFields')
}
