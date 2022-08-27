import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, User } from 'src/firebase'

type AuthContextProps = {
  user: User | null
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
})

export function useAuthContext() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const value = {
    user,
  }

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      console.log(user)
      setUser(user)
    })
    return () => {
      unsubscribed()
    }
  }, [])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
