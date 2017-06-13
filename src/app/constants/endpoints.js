import { Paths } from '../services'

const Endpoints = () => {
  const { apiUrl } = Paths
  const routes = {
    jwtAuth: () => apiUrl('login'),
    jwtVerify: () => apiUrl('verify/token'),
    createUser: () => apiUrl('users'),
  }
  return routes
}
export default Endpoints()
