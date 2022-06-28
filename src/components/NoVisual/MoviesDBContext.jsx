import { createContext, useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext";

export const MoviesDBContext = createContext()

const MoviesUrl = () => {

    const {
        REACT_APP_MOVIEDB_TOKEN,
        REACT_APP_MOVIEDB_URL,
        REACT_APP_MOVIEDB_IMAGESURL,
        REACT_APP_MOVIEDB_LIST,
        REACT_APP_MOVIEDB_QUERY,
        REACT_APP_MOVIEDB_DETAIL
    } = process.env

    const addToken = (url) => url.replace('MOVIEDB_TOKEN',REACT_APP_MOVIEDB_TOKEN); 
    
    let imageUrl = (path) => `${REACT_APP_MOVIEDB_IMAGESURL}${path}`;
    let moviesListUrl = addToken(`${REACT_APP_MOVIEDB_URL}/${REACT_APP_MOVIEDB_LIST}`);
    let movieDetailUrl = addToken(`${REACT_APP_MOVIEDB_URL}/${REACT_APP_MOVIEDB_DETAIL}`);
    let movieQueryUrl = addToken(`${REACT_APP_MOVIEDB_URL}/${REACT_APP_MOVIEDB_QUERY}`);
    
    return {
        imageUrl,
        moviesListUrl: (page) => moviesListUrl.replace('MOVIEDB_PAGE',page),
        movieQueryUrl: (query, page) => {
            movieQueryUrl = movieQueryUrl.replace('MOVIEDB_PAGE', page)
            movieQueryUrl = movieQueryUrl.replace('MOVIEDB_QUERY',query)
            return movieQueryUrl
        },
        movieDetailUrl: (movieId) => movieDetailUrl.replace('MOVIEDB_ID',movieId)
    }
}

export const MoviesDBContextProvider = ({children}) => {
    
    const {imageUrl, moviesListUrl, movieQueryUrl, movieDetailUrl} = MoviesUrl()
    const [Load, setLoad] = useState(true);
    
    const {Token} = useContext(UserContext);
    const [Movies, setMovies] = useState([]);
    const [TotalMovies, setTotalMovies] = useState(0);

    const [Page, setPage] = useState(1);
    const [TotalPages, setTotalPages] = useState(0)
   
    const [Query, setQuery] = useState('');

    const resetToDefault = () => {
        setMovies([])
        setTotalMovies(0)
        setPage(1)
        setTotalPages(0)
        setQuery('')
    }

    const filterMovie = (movie) => {
        const {original_title, genres, overview, spoken_languages, release_date, poster_path} = movie

        return {
            title: original_title,
            genres: genres?.map(g => {return g.name}),
            overview,
            langs: spoken_languages?.map(l => {return l.name}),
            date: release_date,
            image: imageUrl(poster_path)
        }
    }

    const loadMovie = async (id) => filterMovie(await (await fetch(movieDetailUrl(id))).json())

    const loadMovies = async () => {
        const {results, total_pages, total_results} = await (await fetch(moviesListUrl(Page))).json()
        setMovies(results?.map(r => filterMovie(r)))
        setTotalMovies(total_results)
        setTotalPages(total_pages)
        setLoad(false)
    }

    const loadMoviesFromQuery = async () => {
        const {results, total_pages, total_results} = await (await fetch(movieQueryUrl(Query, Page))).json()
        setMovies(results?.map(r => filterMovie(r)))
        setTotalMovies(total_results)
        setTotalPages(total_pages)
        setLoad(false)
    }
    

    useEffect(()=>{
        !Token && resetToDefault()
        Token && Query === '' && Load && loadMovies()
        Token && Query !== '' && Load && loadMoviesFromQuery()
        // eslint-disable-next-line
    },[Token, Page, Query, Movies, Load])

    const {Provider} = MoviesDBContext
    return <Provider value={{
        Movies,
        TotalMovies, TotalPages,
        Page, setPage,
        searchFromQuery: (query) => {setQuery(query); setLoad(true)},
        searchAll: () => {setQuery(''); setLoad(true)},
        loadMovie,
        resetToDefault
    }}>{children}</Provider>
}