import React from 'react'
import Home from '../Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbars from '../Navbars'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Signup from '../Pages/Signup'
import Product from '../Pages/Product'
import Fruits from '../Pages/Fruits'
import Breakfast from '../Pages/Breakfast'
import Footer from '../Footer'
function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path='/' element={<Home />}  ></Route>
          <Route path='/About' element={<About />}  ></Route>
          <Route path='/Contact' element={<Contact />}  ></Route>
          <Route path='/Signup' element={<Signup />}  ></Route>
          <Route path='/Products' element={<Product />}  ></Route>
          <Route path='Contact/Fruits' element={<Fruits />}  ></Route>
          <Route path='About/Fruits' element={<Fruits />}  ></Route>
          <Route path='Product/Fruits' element={<Fruits />}  ></Route>
          <Route path='/Fruits' element={<Fruits />}  ></Route>
          <Route path='/Breakfast' element={<Breakfast />}  ></Route>
          <Route path='Product/Breakfast' element={<Breakfast />}  ></Route>
          <Route path='Contact/Fruits/Breakfast' element={<Breakfast />}  ></Route>
          <Route path='Product/Fruits/Breakfast' element={<Breakfast />}  ></Route>
          <Route path='About/Breakfast' element={<Breakfast />}  ></Route>
          <Route path='Contact/Breakfast' element={<Breakfast />}  ></Route>
          <Route path='About/Fruits/Breakfast' element={<Breakfast />}  ></Route>
          <Route path='/Fruits/Breakfast' element={<Breakfast />}  ></Route>
          <Route path='/Contact/Breakfast/Fruits' element={<Breakfast />}  ></Route>


        

        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default Routing;