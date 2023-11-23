import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Main from './layout/Main/Main.jsx'
import router from './routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}>
    <Main/>
  </RouterProvider>
  </React.StrictMode>,
)
