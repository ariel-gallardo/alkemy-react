import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import {BrowserRouter} from 'react-router-dom'
import {UserContextProvider} from './components/NoVisual/UserContext'
import {MoviesDBContextProvider} from './components/NoVisual/MoviesDBContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <MoviesDBContextProvider>
          <App />
        </MoviesDBContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);