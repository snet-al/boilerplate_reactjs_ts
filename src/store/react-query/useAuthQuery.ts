import { useQuery } from 'react-query'

import { User } from '../../types/interfaces/User.interface'

import AuthClient from '../../client/http/Auth/AuthClient'

export const useAuthenticateQuery = () => useQuery<User, Error>('auth', AuthClient.authenticateUser)
