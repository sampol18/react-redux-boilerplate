import { SESSION as A } from './actionTypes'
import { browserHistory } from 'react-router'
import { Jwt } from '../services/api'
import { setCurrentUser } from './currentUser'
import { Auth } from '../services'
import { Promise } from '../services'

const { authJwt, verifyJwt } = Jwt
const { deleteToken } = Auth

export function logInUser(credentials) {
  return (dispatch) => {
    return authJwt(credentials)
      .then((response) => { dispatch(setCurrentUser(response.data)) })
      .catch(err => { console.log(err) })
  }
}

export function verifyUserToken(token) {
  return (dispatch) => {
    return verifyJwt(token)
    .then((response) => { dispatch(setCurrentUser(response.data)) })
    .catch(err => { console.log(err) })
  }
}

export function logOutUser() {
  return (dispatch) => {
    return Promise.resolve(dispatch({ type: A.UNSET_CURRENT_USER }))
      .then(() => {
        deleteToken()
        browserHistory.push('/')
      })
  }
}

export default {
  logInUser,
  verifyUserToken,
  logOutUser,
}
