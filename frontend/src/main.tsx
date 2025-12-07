import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

//Page Import
import Login from './pages/Login/LoginPage.tsx'
import Home from './pages/Home/HomePage.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path='Home' element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
