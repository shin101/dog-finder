import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function Color({ colors }) {
  const { color } = useParams();
  const navigate = useNavigate();
  if(!color){
    navigate("/colors");
  }

 console.log({colors});
 console.log({color});

  return (
    <div>
      <h2>This is {color}</h2>
    
    <Link to="/colors">Go back home</Link>
    </div>
  )
}

export default Color;

