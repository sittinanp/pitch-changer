import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { Provider } from "react-redux";
import { store } from "./store"; // <-- import store ที่เราสร้าง

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

//Page Import
import Login from './features/auth/pages/Login/LoginPage.tsx'
import Home from './pages/Home/HomePage.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<App/>} />
            <Route path='/Home' element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </Router>
     </Provider>
  </StrictMode>,
)
