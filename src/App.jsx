import React from 'react'
import {Routes, Route} from "react-router-dom"
import Header from './Components/Header'
import Shops from './Components/Shops'
import Footer from './Components/Footer'
import { Provider } from 'react-redux'
import store from './utils/store'

import "./index.css"
import "./App.css"
import Home from './Components/Home'
import Shop from './Components/Shop'
import Login from './Components/Login'
import Register from './Components/Register'
import Cart from './Components/Cart'


const App = () => {
  return (
    <Provider store={store}>
      <main className='relative h-screen'>
        <Header />
        <Routes>
              <Route path='/' element={<Home />}/>

              <Route path='/shop' element={<Shops />} />
              <Route path='/shop/:id' element= {<Shop/>} />

              <Route path='/user/sign-in/' element= {<Login/>} />
              <Route path='/user/sign-up/' element= {<Register/>} />
              <Route path='/cart/' element= {<Cart/>} />

        </Routes>
      </main>
    </Provider>
  )
}

export default App