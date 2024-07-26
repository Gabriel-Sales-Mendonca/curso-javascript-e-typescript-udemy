import React from 'react'
import { Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import history from './services/history'
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header/index'
import Routes from './routes/index'

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </Router>
  )
}

export default App;
