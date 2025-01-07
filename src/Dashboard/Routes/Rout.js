import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Sidebars from "../Sidebars"
import Form from '../Form';
import Dashboard from '../Dashboard';
import CategoryForm from '../CategoryForm';
import Message from '../Message';
import Logout from '../Logout';
import Signup from '../Signup'

function Rout() {
  return (
    <div>
      <BrowserRouter>
        <Sidebars />
        <Routes>
       
         <Route path='/Product' element={<Form />}></Route>
         <Route path='/' element={<Dashboard />}></Route>
         <Route path='/Category' element={<CategoryForm />}></Route>
         <Route path='/Message' element={<Message/>}></Route>
         <Route path='/logout' element={<Logout/>}></Route>
         <Route path='/login' element={<Signup/>}></Route>
          

        

        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default Rout;