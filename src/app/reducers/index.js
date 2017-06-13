import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import currentUser from './currentUser'

const rootReducer = combineReducers({
  currentUser,
  routing: routerReducer,
})

export default rootReducer
