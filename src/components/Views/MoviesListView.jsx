import { useContext } from "react"
import MovieItemList from "../Elements/MovieItemList"
import { MoviesDBContext } from "../NoVisual/MoviesDBContext"
import SecuredRoute from "../NoVisual/SecuredRoute"

const MoviesListView = () => {

    const {Movies, Page} = useContext(MoviesDBContext)

    return <SecuredRoute>  
        <div className="mt-lg-5 mb-lg-5">
            <h3 className="text-center mt-lg-5">Movies</h3>
            <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                {
                    Movies.map(m => <MovieItemList key={m.id} {...m}/>)
                }
            </ul>
            <div>
                {Page}
            </div>
        </div>
    </SecuredRoute>
}

export default MoviesListView