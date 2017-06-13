import Http from '../http'
import { Endpoints } from '../../constants'

const { createUser } = Endpoints

const User = (http) => {
  return {
    createUser: (body) => http.post(createUser(), body),
  }
}

export default User(Http)
