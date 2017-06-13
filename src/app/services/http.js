import axios from 'axios'
import Auth from './auth'

const Http = () => {
  const authHeaders = (token) => {
    return {
      'Authorization': `JWT ${token}`,
    }
  }
  const authenticated = () => {
    const token = Auth.token()
    const headers = authHeaders(token)
    return axios.create({ headers })
  }
  return {
    ...axios,
    authenticated,
  }
}
export default Http()
