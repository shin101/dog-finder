import React, { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import ColorsList from './ColorsList';
import NewColorsForm from './NewColorsForm';
import Color from './Color';


function RoutesMod () {
  const defaultColors = ['pink', 'purple', 'yellow'];
  const [colors, setColors] = useState(defaultColors);
  const addColor = color => setColors(colors => [...colors, color]);


  return (
    <Routes>
      <Route exact path="/colors/:color" element={<Color colors={colors}/>} />
      <Route exact path="/colors/new" element={<NewColorsForm addColor={addColor} />} />
      <Route exact path="/colors" element={<ColorsList colors={colors} />} />
      <Route path = "*" element={<Navigate to="/colors" />} />
      
      
    </Routes>
  )
};



export default RoutesMod;