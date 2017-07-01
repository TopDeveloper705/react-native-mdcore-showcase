import React from 'react'
import { AsyncStorage } from 'react-native'
import { PureComponent, ThemeProvider } from 'react-native-mdcore'

import { connect as reactReduxConnect, Provider } from 'react-redux'
import { applyMiddleware, bindActionCreators as reduxBindActionCreators, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import { persistStore, autoRehydrate } from 'redux-persist'
import createMigration from 'redux-persist-migrate'
import immutableTransform from 'redux-persist-transform-immutable'

import middlewares, { Injector } from '@middlewares'
import * as Models from '@models'
import reducers from '@reducers'

import migration from './migration'

export { default as CONST } from './const'

const STORE = createStore(reducers, undefined, composeWithDevTools(
  createMigration(migration, 'settings'),
  applyMiddleware(
    ...middlewares,
    createLogger({
      predicate: (getState, action) => __DEV__, //eslint-disable-line
      collapsed: true,
      duration: true
    })
  ),
  autoRehydrate(),
  next => (reducers, initialState, enhancer) => {
    const nextStore = next(reducers, initialState, enhancer)
    Injector.inject({
      getState: nextStore.getState
    })
    return nextStore
  }
))

ThemeProvider.defer()
persistStore(STORE, {
  blacklist: ['theme'],
  storage: AsyncStorage,
  transforms: [immutableTransform({ records: Object.values(Models) })]
}, () => ThemeProvider.ready())

export default class Store extends PureComponent {

  render() {
    return (
      <Provider store={STORE}>
        {this.props.children}
      </Provider>
    )
  }
}

export const bindActionCreators = reduxBindActionCreators

export const connect = reactReduxConnect

export const getState = STORE.getState
