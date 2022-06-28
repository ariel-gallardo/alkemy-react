import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../Styles/SearchBox.css' 
import {useDebounce} from '../../helpers/Debounce'
import { MoviesDBContext } from '../NoVisual/MoviesDBContext'

const SearchBox = () => {

    const {pathname} = useLocation()

    //MovieDb Context
    const {searchFromQuery, searchAll, setLoad, resetToDefault} = useContext(MoviesDBContext)

    const loadQuery = () => {
        resetToDefault()
        searchFromQuery(searchEngine)
        setLoad(true)
    }

    //Search Engine
    const [query, setQuery] = useState('');
    const searchEngine = useDebounce(query,3000) 

    const searchLocal = (e) => setQuery(e.target.value)

    useEffect(()=>{
        if(pathname === '/movie/list'){
            if(searchEngine !== ''){
                loadQuery()
            }else{
                searchAll()
            }
        }else{
            setQuery('')
        }

    },[searchEngine, pathname])


    if(pathname === '/movie/list')
        return <div className="nav-item d-flex flex-column justify-content-center">
            <div className="d-flex h-25">
                <input onChange={searchLocal} className="form-control me-1 searchBox" placeholder="Movie name..."/>
                <i className='searchButton position-relative'>
                    <img className='position-absolute' alt='Search' src='/assets/images/searchIcon.svg'/>
                </i>
            </div>
        </div>

}

export default SearchBox