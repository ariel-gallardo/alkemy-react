import {Link} from 'react-router-dom'

const ProfileLink = () => <div className="nav-item d-flex flex-column justify-content-center">
    <Link to="/user/profile"><img width='30vw' alt='profile' src='/assets/images/profileIcon.svg'/></Link>
</div>

export default ProfileLink