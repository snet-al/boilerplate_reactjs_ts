import { HttpClient } from '../http-client'

import { User } from '../User/User.types'

class AuthClient {
  authenticateUser = async () => await HttpClient.get<User>('/auth/user')
}

export default new AuthClient()
