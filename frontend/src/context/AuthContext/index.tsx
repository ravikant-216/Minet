import { addAuthUser } from '@/api/api'
import { User } from '@/utils/types'
import { useAuth0 } from '@auth0/auth0-react'
import { createContext, useContext, useEffect, useState } from 'react'

interface AuthContextType {
  user?: User
  setUser: (user: User) => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | undefined>()

  const { user: auth0User, isLoading } = useAuth0()

  useEffect(() => {
    if (auth0User && !isLoading) {
      addAuthUser(
        auth0User.name as string,
        auth0User.email as string,
        'Test@1234'
      ).then((data) => {
        console.log(data)
        setUser(data)
      })
    }
  }, [auth0User, isLoading])
  useEffect(() => {
    const userDataString = localStorage.getItem('user')
    if (userDataString) {
      const newUser = JSON.parse(userDataString)
      setUser(() => newUser)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated: user !== undefined }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuthContext = () => useContext(AuthContext) as AuthContextType
