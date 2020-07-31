import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import * as auth from '../services/auth'

interface AuthContextData {
    signed: boolean;
    user: object | null;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null)

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user')
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token')

            
            if(storagedUser && storagedToken) {

                setUser(JSON.parse(storagedUser))
            }
        }
        
        loadStorageData()
    }, [])
    
    async function signIn() {
        const res = await auth.signin()
        
        setUser(res.user)

        api.defaults.headers['Authorization'] = `Bearer ${res.token}`
        
        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(res.user))
        await AsyncStorage.setItem('@RNAuth:token', res.token)
    }
    
    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null)
        })
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext