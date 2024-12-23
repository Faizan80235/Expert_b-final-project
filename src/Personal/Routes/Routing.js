import React from 'react'
import Home from '../Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbars from '../Navbars'
function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path='/' element={<Home />}  ></Route>
          {/* <Route path='/About' element={<About />}  ></Route> */}

        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default Routing;