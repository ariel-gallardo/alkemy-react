import { useContext, useEffect, useState } from "react"
import MovieItemList from "../Elements/MovieItemList"
import { MoviesDBContext } from "../NoVisual/MoviesDBContext"
import SecuredRoute from "../NoVisual/SecuredRoute"
import { UserContext } from "../NoVisual/UserContext"

const FavouritesView = () => {

    const [Movies, setMovies] = useState([])
    const {loadMovie} = useContext(MoviesDBContext)
    const {Favourites} = useContext(UserContext)

    const loadFavourites = async () => {
        if(Favourites){
            for (let i = 0; i < Favourites.length; i++) {
                setMovies([...Movies, await loadMovie(Number(Favourites[i]))])
            }
        }
    }

    useEffect(()=>{
        if(Movies !== Favourites.length){
            loadFavourites()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return <SecuredRoute>  
        <div className="mt-lg-5 mb-lg-5">
            <h3 className="text-center mt-lg-5">Favourites Movies</h3>
            <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                {
                    Movies.map(m => <MovieItemList key={m.id} {...m}/>)
                }
            </ul>
        </div>
    </SecuredRoute>
}

export default FavouritesView