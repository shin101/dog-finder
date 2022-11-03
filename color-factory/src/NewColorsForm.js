import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewColorsForm({ color }){
  // const initialState = { width: 100, height: 100, bgColor: 'black' };
  // const [box, setBox] = useState(initialState);
  
  // const handleChange = e => {
  //   const name = e.target.name;
  //   setBox(box => ({ ...box, [name]: name === 'bgColor' ? e.target.value : +e.target.value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addBox({ ...box, id:uuid() });
  //   setBox(initialState);
  // };

  return (
    <div>
      <form> 
        <button>Add this color</button>
      </form>
    </div>
  )
};

  

export default NewColorsForm;