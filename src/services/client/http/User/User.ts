import { HttpClient } from '../http-client'
import { User } from './User.types'

class UserClient {
  getUser = async () => await HttpClient.get<User>('/User')
}

export default new UserClient()
