import Http from '../http'
import { Endpoints } from '../../constants'

const { jwtAuth, jwtVerify } = Endpoints
const { authenticated } = Http

const Jwt = (http) => {
  return {
    authJwt: (body) => http.post(jwtAuth(), body),
    verifyJwt: (body) => authenticated().post(jwtVerify(), body),
  }
}

export default Jwt(Http)
