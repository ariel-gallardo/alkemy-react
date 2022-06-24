import { Link } from "react-router-dom"
import SearchBox from "./Elements/SearchBox"
import './Styles/Header.css'

const Header = () => {

    return (
        <header className="nav justify-content-between p-lg-2 fixed-top bg-black">
            <div className="nav-item d-flex itemsNavbar">
                <Link to="/" className="nav-link text-light"><img width='150vw' src='/assets/images/logoMovies.svg' alt='MoviesApp'/></Link>
                <Link to="/movie/list" className="nav-link text-light p-lg-3">Movies</Link>
            </div>
            <div className="nav-item d-flex flex-column justify-content-center">
                <SearchBox/>
            </div>
        </header>
    )
}
export default Header