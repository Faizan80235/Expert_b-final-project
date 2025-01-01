import Home from '../Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbars from '../Navbars'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Signup from '../Pages/Signup'
import Product from '../Pages/Product'

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
         

        

        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default Routing;