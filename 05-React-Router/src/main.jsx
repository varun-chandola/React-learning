import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider , createBrowserRouter , Route , createRoutesFromElements } from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User'
import Github , {infoLoader} from './Components/Github/Github'

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route  path='' element={<Home/>} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userId' element={<User/>} />

      <Route 
      loader={infoLoader}
      path='/github'
      element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>,
)
