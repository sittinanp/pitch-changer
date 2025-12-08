import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { Provider } from "react-redux";
import { store } from "./store"; // <-- import store ที่เราสร้าง

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

//Page Import
import Login from './features/auth/pages/Login/LoginPage.tsx'
import HomePage from './pages/Home/HomePage.tsx'
import ProtectedRoute from '@components/ProtectedRoute.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
        <Router>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HomePage />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
     </Provider>
  </StrictMode>,
)
