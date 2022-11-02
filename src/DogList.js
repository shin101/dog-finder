import React from "react";
import { Link } from "react-router-dom";

function DogList({dogs}) {
  console.log(dogs);
  return (
    <div>
      <h2>LIST OF DOGS</h2>
      {dogs.map(d => (
        <div key={d.name}>
       <p><b>Name :</b> {d.name} </p>
       <img src={d.src} alt={d.name} width="200" />
       <Link to={`/dogs/${d.name}`}>More info</Link>
       </div>
       ))}
      
    </div>
  )
}

export default DogList;
