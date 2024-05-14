import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import './App.css'

import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Watchlist from './components/Watchlist.jsx'
// import SingleMovie from './components/SingleMovie.jsx'

import {BrowserRouter , Route , Routes} from 'react-router-dom'

import {store} from './features/store.js'
import {Provider} from 'react-redux'
import MovieContext from './context/MovieContext.jsx'

// import { homeInfoLoader } from './components/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <MovieContext>
              <BrowserRouter>
                    <Navbar />
                      <Routes>
                            <Route path='/' element={<Home/>} />
                            <Route path='/watchlist' element={<Watchlist />} />
                            {/* <Route path='/movie/:name' element={<SingleMovie />} /> */}
                      </Routes> 
                    {/* <footer>
                      <Footer />
                    </footer> */}
              </BrowserRouter>
    </MovieContext>
    </Provider>
)
