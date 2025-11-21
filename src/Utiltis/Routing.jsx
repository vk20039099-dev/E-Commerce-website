import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Shop from '../Components/Shop'
import Collection from '../Components/Collection'
import Blog from '../Components/Blog'
import Pages from '../Components/Pages'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/pages' element={<Pages/>} />

      </Routes>
    </div>
  )
}

export default Routing
