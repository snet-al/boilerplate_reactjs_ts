import { useQuery } from 'react-query'

import { User } from '../../types/interfaces/User.interface'

import AuthClient from '../../services/client/http/Auth/AuthClient'

export const useAuthenticateQuery = () => useQuery<User, Error>('auth', AuthClient.authenticateUser)
