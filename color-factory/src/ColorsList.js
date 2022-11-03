import React from "react";
import { Link } from "react-router-dom";

function ColorsList({ colors }) {
  const colorLinks = colors.map(color => (
    <Link to={`/colors/${color}}`} key={color}>{color}</Link>
  ))

  return (
    <div>
      <h2>LIST OF COLORS</h2>
      <Link to="/colors/new">Add a color</Link>

    <p>Please select a color</p>{colorLinks}


    {/* {colors: ['pink', 'purple', 'yellow']}; */}

    </div>
  )
}

export default ColorsList;
