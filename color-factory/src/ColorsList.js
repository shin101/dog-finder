import React from "react";
import { Link } from "react-router-dom";

function ColorsList({ colors }) {
  const colorLinks = colors.map((color, idx) => (
    <p><Link to={`/colors/${color}}`} key={idx}>{color}</Link></p>
  ))

  return (
    <div>
      <h2>LIST OF COLORS</h2>
      <Link to="/colors/new">Add a color</Link>

    <p>Please select a color</p>{colorLinks}

    </div>
  )
}

export default ColorsList;
