/* eslint-disable eqeqeq */
import { createContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [Token, setToken] = useState(localStorage.getItem('token'));
    const [Favourites, setFavourites] = useState(localStorage.getItem('favourites'))

    const navigate = useNavigate()
    
    const SaveToken = (token) => {
        localStorage.setItem('token',token)
        setToken(token)
    }

    const RemoveToken = () => {
        localStorage.removeItem('token')
        setToken(undefined)
    }

    useEffect(()=>{
        if(!Favourites)
        {
            setFavourites([])
            localStorage.setItem('favourites',[])
        }
    },[Favourites])

    const changeFavouriteStatus = (id) => {
        let f = localStorage.getItem('favourites')
        
        if(typeof(f) !== typeof([]))
        {
            if(f.length === 0){
                f = []
            }else{
                f = f.split(',')
            }
        }
        
        if(f.find(e => e == id))
            f = f.filter(i => i != id)
        else
            f.push(id)

        localStorage.setItem('favourites',f)
        setFavourites(f)
    }

    const RedirectToLogin = () => {if(!Token) navigate('/user/login')}

    const RedirectToProfile = () => {if(Token) navigate('/user/profile')}

    return <UserContext.Provider value={{
        Token,
        SaveToken,
        RemoveToken,
        RedirectToLogin,
        RedirectToProfile,
        navigate,
        changeFavouriteStatus,
        Favourites
    }}>
        {children}
    </UserContext.Provider>
} 