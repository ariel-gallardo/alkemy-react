import {Route, Routes} from 'react-router-dom'
import HomeView from './Views/HomeView'
import LoginView from './Views/LoginView'
import ProfileView from './Views/ProfileView'

const Main = () => {
    return <main className='d-flex flex-column justify-content-center'>
        <div className='d-flex justify-content-center content'>
            <Routes>
                <Route path='/' element={<HomeView/>} />
                <Route path='/movie'></Route>
                <Route path='/user'>
                    <Route path='login' element={<LoginView/>}/>
                    <Route path='profile' element={<ProfileView/>}/>
                </Route>
            </Routes>
        </div>
    </main>
}
export default Main