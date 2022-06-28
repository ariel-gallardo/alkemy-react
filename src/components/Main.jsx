import {Route, Routes} from 'react-router-dom'
import HomeView from './Views/HomeView'
import LoginView from './Views/LoginView'
import ProfileView from './Views/ProfileView'
import MoviesListView from './Views/MoviesListView'
import { MovieDetail } from './Elements/MovieDetail'
import { ErrorView } from './Views/404View'

const Main = () => {
    return <main className='d-flex flex-column justify-content-center bg-light'>
        <div className='d-flex justify-content-center content'>
            <Routes>
                <Route path='/' element={<HomeView/>} />
                <Route path='/movie'>
                    <Route path='list' element={<MoviesListView/>}/>
                    <Route path='detail/:id' element={<MovieDetail/>}/>
                </Route>
                <Route path='/user'>
                    <Route path='login' element={<LoginView/>}/>
                    <Route path='profile' element={<ProfileView/>}/>
                </Route>
                <Route path='*' element={<ErrorView/>}/>
            </Routes>
        </div>
    </main>
}
export default Main