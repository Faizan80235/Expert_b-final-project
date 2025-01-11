// import React from 'react';
// import Home from '../Pages/Home';
// import About from '../Pages/About';
// import Contact from '../Pages/Contact';
// import Signup from '../Pages/Signup';
// import Product from '../Pages/Product';
// import Login from '../Pages/Login';
// import Form from '../../Dashboard/Form';
// import Dashboard from '../../Dashboard/Dashboard';
// import CategoryForm from '../../Dashboard/CategoryForm';
// import Message from '../../Dashboard/Message';
// import Logout from '../../Dashboard/Logout';
// // import Signup from '../../Dashboard/Signup';
// import { Routes,Route, } from 'react-router-dom';
// function Routing() {
//   return (
//     <div>
//       <Routes>  {/* Only Routes and Route needed here */}
//         <Route path='/' element={<Home />} />
//         <Route path='/About' element={<About />} />
//         <Route path='/Contact' element={<Contact />} />
//         <Route path='/Signup' element={<Signup />} />
//         <Route path='/Products' element={<Product />} />
//         <Route path='/Admin' element={<Product />} />
//         <Route path='/Login' element={<Login />} />
//     {/* Admin Dashboard Rout */}

//     <Route path='/ProductForm' element={<Form />} />
//         <Route path='/Dashbord' element={<Dashboard />} />
//         <Route path='/Category' element={<CategoryForm />} />
//         <Route path='/Message' element={<Message />} />
//         <Route path='/logout' element={<Logout />} />
//         <Route path='/login' element={<Signup />} />



//       </Routes>
     
//     </div>
//   );
// }

// export default Routing;
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Signup from '../Pages/Signup';
import Product from '../Pages/Product';
import Login from '../Pages/Login';
import Form from '../../Dashboard/Form';
import Dashboard from '../../Dashboard/Dashboard';
import CategoryForm from '../../Dashboard/CategoryForm';
import Message from '../../Dashboard/Message';
import Logout from '../../Dashboard/Logout';
import Sidebar from '../../Dashboard/Sidebars'; // Import Sidebar component
import ValidationForm from '../ValidationForm';

function Routing() {
  // const location = useLocation();

  const location =useLocation()

  const path=[

    "/ProductForm",
    "/Dashboard",
    "/Category",
    "/Message",
    "/logout"
  ]
  const showSidebar=path.includes(location.pathname)



  return (
    <div >

      {showSidebar && <Sidebar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Products' element={<Product />} />
          <Route path='/Admin' element={<Product />} />
          <Route path='/Login' element={<Login />} />

          {/* Admin Dashboard Routes */}
          <Route path='/ProductForm' element={<Form />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Category' element={<CategoryForm />} />
          <Route path='/Message' element={<Message />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/login' element={<Signup />} />
          <Route path='/Validation' element={<ValidationForm/>} />
          <Route path='/Dashbaord' element={<Dashboard/>} />
        </Routes>
      </div>
    // </div>
  );
}

export default Routing;
