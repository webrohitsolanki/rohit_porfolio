import React from 'react'
// import { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'
import { myData } from '../src/data/data.js'

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header data={myData}></Header>
      <Routes>
        <Route path="/" element={<Main data={myData}/>} />
      </Routes>
      <Footer data={myData}></Footer>
    </>
  )
}

export default App
