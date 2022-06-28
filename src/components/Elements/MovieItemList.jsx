import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { MoviesDBContext } from "../NoVisual/MoviesDBContext"
import { UserContext } from "../NoVisual/UserContext"
import '../Styles/Favourite.css'

const MovieItemList = (props) => {

    const [Movie, setMovie] = useState({});

    const {changeFavouriteStatus, Favourites} = useContext(UserContext)
    const {loadMovie} = useContext(MoviesDBContext)
    const [favourite, setFavourite] = useState(false)

    const changeFavourite = () => {
        setFavourite(!favourite)
        changeFavouriteStatus(Movie.id)
    }

    const loadMovieData = async () => {
        if(!Movie.title){
            setMovie(await props)
            if(!Movie.title)
            {
                setMovie(await loadMovie(Movie.id))
            }
            if(Movie.favourite)
                setFavourite(Movie.favourite)
            
        }
    }

    useEffect(()=>{
        loadMovieData()
    },[Movie])

    return <li className="card m-2 justify-content-between" style={{width: '20vw'}}>
        <div>
            <img className="img-thumbnail" src={Movie.image} alt={Movie.title}/>
            <div onClick={changeFavourite} className={`border rounded-circle position-absolute btnFav`}>
                <p className={ `m-0 ${favourite ? 'favMovie' : 'noFavMovie'}`}>{favourite ? "💓" : "🖤"}</p>
            </div>
            <Link to={`../detail/${Movie.id}`}><button className="w-100 btn border-0">View</button></Link>
        </div>
    </li>
}

export default MovieItemList