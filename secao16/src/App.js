import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}
