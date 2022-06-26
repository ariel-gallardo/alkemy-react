import { createContext, useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext";

export const MoviesDBContext = createContext()

const MoviesDBContextProvider = ({children}) => {
    
    const {Token} = useContext(UserContext);
    const [Movies, setMovies] = useState([]);
    const [TotalMovies, setTotalMovies] = useState(0);

    const [Page, setPage] = useState(1);
    const [TotalPage, setTotalPage] = useState(0)
   
    const [Query, setQuery] = useState('');

    const resetToDefault = () => {
        setMovies([])
        setTotalMovies(0)
        setPage(1)
        setTotalPage(0)
        setQuery('')
    }

    const loadMovies = () => {

    }

    const loadMoviesFromQuery = () => {

    }

    useEffect(()=>{
        !Token && resetToDefault()
        Token && Query === '' && loadMovies()
        Token && Query !== '' && loadMoviesFromQuery()
    },[Token, Page, TotalPage, Query])

    const {Provider} = MoviesDBContext
    return <Provider value={{
        Movies,
        TotalMovies,
        Page,
        setQuery,
        setPage,
        setTotalMovies,
    }}>{children}</Provider>
}

export default MoviesDBContextProvider