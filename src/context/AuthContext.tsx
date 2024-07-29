import React, { createContext, useState, ReactNode } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../components/Auth/firebaseConfig.ts';
import { useNavigate } from 'react-router-dom';

export interface AuthContextProps {
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    error: string | null
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const login = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser
            console.log("Usuário logado:", user)
            alert("Login realizado com sucesso!")
            setError(null)
            navigate('/')

        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
                alert(error.message)
            } else {
                setError('Erro desconhecido')
                alert('Erro desconhecido. Tente novamente!')
            }
        }
  }

    const logout = async () => {
        try {
            await signOut(auth)
            console.log("Usuário deslogado")
            alert('Logout bem-sucedido!')
            navigate('/login')

        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
                alert(error.message)
            } else {
                setError('Erro desconhecido')
                alert('Erro desconhecido. Tente novamente!')
            }
        }
    }
    
    return (
        <AuthContext.Provider value={{ login, logout, error }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext }
