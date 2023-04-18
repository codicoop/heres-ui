import { createContext, useState } from 'react'

type role = 'org' | 'admin' | 'user'

interface ContextProps {
  auth: boolean
  setAuth: (auth: boolean) => void
  role: role
  setRole: (role: role) => void
}

interface WirfeframesProviderProps {
  children: React.ReactNode
}

export const WireframesContext = createContext<ContextProps>({
  auth: false,
  setAuth: () => {},
  role: 'org',
  setRole: () => {}
})

export const WireframesProvider = ({
  children
}: WirfeframesProviderProps) => {
  const [auth, setAuth] = useState<boolean>(false)
  const [role, setRole] = useState<role>('org')

  return (
    <WireframesContext.Provider value={{
      auth,
      setAuth,
      role,
      setRole
    }}>
      {children}
    </WireframesContext.Provider>
  )
}
