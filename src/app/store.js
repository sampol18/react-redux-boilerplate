import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import initialState from './initialState'
import reducers from './reducers/index'
import thunk from 'redux-thunk'
const routeMiddleware = routerMiddleware(browserHistory)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, initialState,
  composeEnhancers(
    applyMiddleware(
      routeMiddleware,
      thunk,
    )
  )
)
export default store
