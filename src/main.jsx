import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'

import Layout from './layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/home/home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Random from './components/Random/Random.jsx'
import Github, { githubInfoloader } from './components/Github/Github.jsx'
import { useLoaderData } from 'react-router-dom'


const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      { 
        path:"",
        element:<Home />
      },
      {
         path:"about",
         element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"random/:Userid",
        element:<Random />
      },
      {

      loader:(githubInfoloader),
      path:"github",
      element:<Github/>
      }


      
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
