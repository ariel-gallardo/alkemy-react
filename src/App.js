import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () =>
<>
  <BrowserRouter>
    <Header/>
    <Main/>
    <Footer/>
  </BrowserRouter>
</> 

export default App;
