import React, { createContext } from 'react'

const AuthContext = createContext({ Signed: true})

export const AuthProvider: React.FC = ({children}) => (
    <AuthContext.Provider value={{Signed: true}}>
        {children}
    </AuthContext.Provider>
)

export default AuthContext