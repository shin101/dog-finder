import React from "react";
import { useParams, Route } from 'react-router-dom';
import DogList from "./DogList";

function DogDetails({dogs}) {
    const {name} = useParams();
    const currentDog = dogs.find(
      dog => dog.name  === name
      );
    if(!currentDog) return <Route path = "*" element={<DogList dogs={dogs}/>} />

    return(
      <div>
        <h3>Name: {currentDog.name}</h3>
        <p>Age: {currentDog.age}</p>
        <p>Facts: {currentDog.facts}</p>
      </div>
    )
}

export default DogDetails;