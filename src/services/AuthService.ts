import { HttpClient } from '../libs/http/http-client'

import { AuthResponse, LoginUserInput, User } from '../types/user'

class AuthService {
  login = async (payload: LoginUserInput) =>
    await HttpClient.post<AuthResponse>('/auth/login', payload)

  authenticateUser = async () => await HttpClient.get<User>('/auth/user')
}

export default new AuthService()
