import { createContext, FunctionComponent, ReactNode, useEffect, useMemo, useState } from 'react'

import { User } from '../types/interfaces/User.interface'

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextType {
  isAuthenticated: boolean

  authenticateUser: (user: Partial<User>) => void
  unAuthenticateUser: () => void
  updateUser: () => void
}

const initialState: AuthContextType = {
  isAuthenticated: false,

  authenticateUser: () => {},
  unAuthenticateUser: () => {},
  updateUser: () => {},
}

const AuthContext = createContext(initialState)

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = useMemo<boolean>(() => Boolean(user), [user])

  const authenticateUser = (user: Partial<User>) => {
    setUser({ email: 'admin@app.com', password: 'password' })
  }

  const unAuthenticateUser = () => {
    setUser(null)
  }

  const updateUser = () => {}

  useEffect(() => {
    updateUser()
  }, [])

  return (
    <AuthContext.Provider value={{ ...initialState, isAuthenticated, authenticateUser, unAuthenticateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
