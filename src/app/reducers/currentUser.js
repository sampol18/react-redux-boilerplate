import R from 'ramda'
import { SESSION as A } from '../actions/actionTypes'
import INITIAL_STATE from '../initialState'

export default (state = INITIAL_STATE.currentUser, { type, payload }) => {
  switch (type) {
    case A.SET_CURRENT_USER:
      return R.merge(state, payload)
    case A.UNSET_CURRENT_USER:
      return R.omit(['token', 'user'], state)
    default:
      return state
  }
}
