import { HttpClient } from '../../client/http/http-client'

import { User } from '../User/User.types'

class AuthService {
  authenticateUser = async () => await HttpClient.get<User>('/auth/user')
}

export default new AuthService()
