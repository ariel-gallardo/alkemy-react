import '../Styles/SearchBox.css' 

const SearchBox = () => {
    
    const {PUBLIC_URL} = process.env

    return <div className="d-flex h-25">
        <input className="form-control me-1 searchBox" placeholder="Movie..."/>
        <i className='searchButton position-relative'>
            <img className='position-absolute' alt='Search' src='/assets/images/searchIcon.svg'/>
        </i>
    </div>
}

export default SearchBox