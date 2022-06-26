import { createContext, useState } from "react";
import {useNavigate} from 'react-router-dom'

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [Token, setToken] = useState(localStorage.getItem('token'));
    const navigate = useNavigate()
    
    const SaveToken = (token) => {
        localStorage.setItem('token',token)
        setToken(token)
    }

    const RemoveToken = () => {
        localStorage.removeItem('token')
        setToken(undefined)
    }

    

    const RedirectToLogin = () => {if(!Token) navigate('/user/login')}

    const RedirectToProfile = () => {if(Token) navigate('/user/profile')}

    return <UserContext.Provider value={{
        Token,
        SaveToken,
        RemoveToken,
        RedirectToLogin,
        RedirectToProfile,
        navigate
    }}>
        {children}
    </UserContext.Provider>
} 