import { Link } from "react-router-dom"

const MovieItemList = (props) => {
    
    const {title, image, id} = props

    return <li className="card m-2 justify-content-between" style={{width: '20vw'}}>
        <Link to={`../detail/${id}`}>
            <img className="img-thumbnail" src={image} alt={title}/>
        </Link>
    </li>
}

export default MovieItemList