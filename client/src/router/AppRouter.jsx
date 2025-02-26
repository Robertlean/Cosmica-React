import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage.jsx'
import Register from '../pages/Register.jsx'
import Login from '../pages/Login.jsx'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export const AppRouter = () => {
  return (
  <BrowserRouter>
    <Header />
    <Routes>
      
      <Route exact path="/" element={<HomePage />} /> 
      <Route exact path="register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  
  )
}
