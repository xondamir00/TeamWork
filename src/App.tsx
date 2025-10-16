import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/home'
import { Header } from './shared/header'
import { RaceStatusBar } from './_companents/RaceStatusBar'

const App = () => {
  return (
    <>
    <div>
      <Header/>
      <RaceStatusBar/>
  <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </div>
    </>
  
  )
}

export default App