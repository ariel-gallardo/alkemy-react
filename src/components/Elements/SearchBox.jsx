import '../Styles/SearchBox.css' 

const SearchBox = () => {

    return <div className="nav-item d-flex flex-column justify-content-center">
        <div className="d-flex h-25">
            <input className="form-control me-1 searchBox" placeholder="Movie name..."/>
            <i className='searchButton position-relative'>
                <img className='position-absolute' alt='Search' src='/assets/images/searchIcon.svg'/>
            </i>
        </div>
    </div>
}

export default SearchBox