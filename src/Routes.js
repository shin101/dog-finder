import React from "react";
import { NavLink, Routes, Route } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

const Nav = ({dogs}) => {
  return (
    <nav>
      <NavLink to='/dog'>Home</NavLink>
        {/* router is equivalent to switch */}
      <Routes>
        <Route exact path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
        <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
        <Route path = "*" element={<DogList dogs={dogs}/>} />
      </Routes> 
    </nav>
  )
}

export default Nav;