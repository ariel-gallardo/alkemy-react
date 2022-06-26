import MovieItemList from "../Elements/MovieItemList"
import SecuredRoute from "../NoVisual/SecuredRoute"

const MoviesListView = () => {

    return <SecuredRoute>  
        <div>
            
            <h3 className="text-center">Movies</h3>
            <ul className="list-unstyled">
                <MovieItemList/>
            </ul>
        </div>
    </SecuredRoute>
}

export default MoviesListView