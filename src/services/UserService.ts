import { HttpClient } from '../../client/http/http-client'
import { User } from './User.types'

class UserService {
  getUser = async () => await HttpClient.get<User>('/User')
}

export default new UserService()
