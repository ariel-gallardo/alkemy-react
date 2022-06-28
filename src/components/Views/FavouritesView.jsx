import { useContext, useEffect, useState } from "react"
import MovieItemList from "../Elements/MovieItemList"
import SecuredRoute from "../NoVisual/SecuredRoute"
import { UserContext } from "../NoVisual/UserContext"

const FavouritesView = () => {

    const {Favourites} = useContext(UserContext)

    const loadFavourites = () => {
        if(typeof(Favourites) === 'string'){
            if(Favourites.search(',') > -1)
                return Favourites.split(',')
            else
                return [Favourites]
        }else
            return Favourites
    }

   const [fav, setFav] = useState(loadFavourites())
     

    useEffect(()=>{ 
        
    },[])

    return <SecuredRoute>  
        <div className="mt-lg-5 mb-lg-5">
            <h3 className="text-center mt-lg-5">Favourites Movies</h3>
            <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                {
                    fav.map(m => <MovieItemList key={m} {...{id: m, favourite: true}}/>)
                }
            </ul>
        </div>
    </SecuredRoute>
}

export default FavouritesView