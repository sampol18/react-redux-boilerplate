import { SESSION as A } from './actionTypes'
import { Auth } from '../services'

export function setCurrentUser(payload) {
  Auth.setToken(payload.token)
  return {
    type: A.SET_CURRENT_USER,
    payload,
  }
}

export default {
  setCurrentUser,
}
