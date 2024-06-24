import React from 'react'
// import { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'
import { myData } from '../src/data/data.js'


function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header data={myData}></Header>
      <Main data={myData}></Main>
      <Footer data={myData}></Footer>
    </>
  )
}

export default App
