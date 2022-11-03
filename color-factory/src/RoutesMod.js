import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import ColorsList from './ColorsList';
import NewColorsForm from './NewColorsForm';


function RoutesMod () {
  const defaultColors = ['pink', 'purple', 'yellow'];
  const [colors, setColors] = useState(defaultColors);
  
  return (
    <div>
      <Routes>
        {/* <Route exact path="/colors/:color" element={<DogDetails />} /> */}
        <Route exact path="/colors/new" element={<NewColorsForm />} />
        <Route exact path="/colors" element={<ColorsList colors={colors} />} />
        <Route path = "*" element={<ColorsList colors={colors} />} />
      </Routes>
    </div>
  )
};

export default RoutesMod;