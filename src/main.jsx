import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Main from './layout/Main/Main.jsx'
import router from './routes/routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router}>
    
      <Main/>
    
    
  </RouterProvider>
  </AuthProvider>
  </React.StrictMode>,
)
