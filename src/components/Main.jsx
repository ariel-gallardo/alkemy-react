import {Route, Routes} from 'react-router-dom'
import HomeView from './Views/HomeView'

const Main = () => {
    return <main className='d-flex flex-column justify-content-center'>
        <div className='d-flex justify-content-center content'>
            <Routes>
                <Route path='/' element={<HomeView/>} />
                <Route path='/movie'></Route>
                <Route path='/user'></Route>
            </Routes>
        </div>
    </main>
}
export default Main