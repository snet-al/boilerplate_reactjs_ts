import { HttpClient } from '../libs/http/http-client'
import { User } from '../types/user'

class UserService {
  getUser = async () => await HttpClient.get<User>('/User')

  save = async (user: User) => await HttpClient.post<User>('/User', user)
}

export default new UserService()