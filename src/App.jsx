import React from 'react'
import {Routes, Route} from "react-router-dom"
import Header from './Components/Header'
import Footer from './Components/Footer'

import "./index.css"


const App = () => {
  return (
    <main className='relative h-screen bg-slate-400'>
        <Header />
        <Footer />
    </main>
  )
}

export default App