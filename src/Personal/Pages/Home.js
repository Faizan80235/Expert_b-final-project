import React from 'react';
import Carasuel from '../Carasuel';
import Products from '../Products';
import Footer from '../Footer';
import Navbars from '../Navbars';
function Home() {
  return (
    <div>
      <Navbars></Navbars>
      <Carasuel></Carasuel>
      <Products></Products>
      <Footer></Footer>
    </div>
  )
}

export default Home;