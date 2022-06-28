import { useEffect, useState, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { MoviesDBContext } from "../NoVisual/MoviesDBContext";

export const MovieDetail = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const {loadMovie} = useContext(MoviesDBContext);
    const [Movie, setMovie] = useState({});
    const [Load, setLoad] = useState(false)

    const _loadMovie = async () => {
        if(!Load){
            const movie = await loadMovie(id)
            if(movie.id){
                setMovie(movie)
                setLoad(true)
            }else{
                navigate('/404')
            }
        }

    }

    useEffect(()=>{
        _loadMovie()
    // eslint-disable-next-line
    },[Load])

        return (
            <div className="w-75">
                <h1>{Movie.title}</h1>
                <div className="d-flex">
                    <img className='w-25 p-1 img-thumbnail' src={Movie.image} alt={Movie.title} />
                    <div className="ms-2">
                        <p>Release date <small><b>{Movie.date}</b></small></p>
                        <div className="mb-1">
                            <p className="m-0"><b>Languages</b></p>
                            <div>
                                {<p><small>{Movie.langs?.join(' - ')}</small></p>}
                            </div>
                        </div>
                        <div className="mb-1">
                            <p className="m-0"><b>Genres</b></p>
                            <div>
                                {<p><small>{Movie.genres?.join(' - ')}</small></p>}
                            </div>
                        </div>
                        <div className="w-75">
                            <p className="m-0"><b>Description</b></p>
                            <p>{Movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
}