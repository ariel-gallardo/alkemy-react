import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../NoVisual/UserContext"
import '../Styles/Favourite.css'

const MovieItemList = (props) => {
    
    const {title, image, id} = props
    const [favourite, setFavourite] = useState(false)

    const {changeFavouriteStatus} = useContext(UserContext)

    const changeFavourite = () => {
        setFavourite(!favourite)
        changeFavouriteStatus(id)
    }

    return <li className="card m-2 justify-content-between" style={{width: '20vw'}}>
        <div>
            <img className="img-thumbnail" src={image} alt={title}/>
            <div onClick={changeFavourite} className={`border rounded-circle position-absolute btnFav`}>
                <p className={ `m-0 ${favourite ? 'favMovie' : 'noFavMovie'}`}>{favourite ? "💓" : "🖤"}</p>
            </div>
            <Link to={`../detail/${id}`}><button className="w-100 btn border-0">View</button></Link>
        </div>
    </li>
}

export default MovieItemList