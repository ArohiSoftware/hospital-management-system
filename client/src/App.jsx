import React  from 'react'
import './index.css'

import Home from "./components/Home";
import Services from './components/Services/Services';
import Doctors from './components/Doctors/Doctors';
import Testimonial from './components/Testimonial/Testimonial';
import UserFrindly from './components/UserFriendly/UserFrindly';


function App() {
  

  return (
    <>
     {/* <Home/> */}
     {/* <Services/> */}
     {/* <Doctors/> */}
     <UserFrindly/>
     <Testimonial/>
    </>
  )
}

export default App
